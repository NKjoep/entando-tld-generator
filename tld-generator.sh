# http://stackoverflow.com/questions/1055671/how-can-i-get-the-behavior-of-gnus-readlink-f-on-a-mac
function abspath {

  if readlink -f $0 2>&1 | grep -q 'readlink: illegal option -- f'; then
    TARGET_FILE=$1

    cd `dirname $TARGET_FILE`

    TARGET_FILE=`basename $TARGET_FILE`

    # Iterate down a (possible) chain of symlinks
    while [ -L "$TARGET_FILE" ]
    do
      TARGET_FILE=`readlink $TARGET_FILE`
      cd `dirname $TARGET_FILE`
      TARGET_FILE=`basename $TARGET_FILE`
    done

    # Compute the canonicalized name by finding the physical path
    # for the directory we're in and appending the target file.
    PHYS_DIR=`pwd -P`
    RESULT=$PHYS_DIR/$TARGET_FILE
  else
    RESULT=$(readlink -f $0)
  fi

  echo $RESULT
  }

echo "Generating Entando Tag Library of any tagged version wewew";

ROOTDIR="Entando-Tld-Doc" ;

rm -rf "$ROOTDIR";
mkdir "$ROOTDIR" ;

touch "$ROOTDIR/index.html";

echo \<\!DOCTYPE html\>\<html lang="\""en"\""\>\<head\>\<title\>Entando TLD Documentation\</title\>\<meta charset="\""utf-8"\"" /\>\<meta name="\""viewport"\"" content="\""width=device-width, initial-scale=1.0"\"" /\>\<\!--[if lt IE 9]\>\<script src="\""https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"\""\>\</script\>\<script src="\""https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"\""\>\</script\>\<\![endif]--\>\<link rel="\""stylesheet"\"" type="\""text/css"\"" href="\""https://netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"\"" /\>\</head\>\<body\>\<div class="\""container"\""\>\<h1\>Entando Tld Documentation\</h1\> > "index.html";

curl -s --create-dirs -o "$ROOTDIR/tlddoc.jar" https://raw.github.com/NKjoep/entando-tld-generator/gh-pages/java-lib/tlddoc.jar ;

tld() {
	local proj=$1 ;
	echo \<div class="\""panel panel-default"\""\>\<div class="\""panel-heading"\""\>$proj\</div\>\<div class="\""panel-body"\""\> >> "index.html";
	echo "enter in: $(abspath $proj)";
	cd "$proj" ;

	echo "creting project tld folder: $(abspath ../$ROOTDIR/$proj/)" ;
	mkdir "../$ROOTDIR/$proj/" ;
	for tag in $(git tag -l); do
		git clean  -q -f -d ;
		git reset -q --hard HEAD ;
	    git checkout -q "$tag" ;

		echo "creating project tag dir: $(abspath ../$ROOTDIR/$proj/$tag)" ;
		mkdir -p "../$ROOTDIR/$proj/$tag" ;
		mkdir -p "../$ROOTDIR/$proj/$tag/src" ;

		echo "copy all tld files to: $(abspath ../$ROOTDIR/$proj/$tag/src/)";
		find "."  -name "*.tld" -exec cp {} "../$ROOTDIR/$proj/$tag/src/" \;

		echo "enter to: $(abspath ../$ROOTDIR/$proj/$tag/)";
		cd "../$ROOTDIR/$proj/$tag/" ;

		echo "appending all tld names to: $(abspath src/tld-list.txt)" ;
		find "./src" -name "*.tld" -exec echo "{}" \; >>  "./src/tld-list.txt" ;

		cd src;
		sort "tld-list.txt" > "tld-list.txt-sorted" ;
		rm "tld-list.txt" ;
		mv "tld-list.txt-sorted" "tld-list.txt" ;
		cd ..;

		FILES="" ;
		choose() {
			local name=$1
			if [ $name != "./src/cewolf.tld" ]
				then
					echo $name
				fi
			exit
		}
		while read line;
			do FILES="$FILES $(choose $line)";
		done < "src/tld-list.txt"

		echo "java jar param $FILES";
		echo "java jar param $(abspath ../$tag)";
		java -jar "../../tlddoc.jar" $FILES -d "../$tag" ;

		#cp -r "../tld-$tag/" "../$tag";
		#rm -rf "../tld-$tag";

		echo "exit $(abspath ../../../$proj)";
		cd "../../../$proj";

		echo \<a href="\""$ROOTDIR/$proj/$tag/index.html"\""\>\<span class="\""glyphicon glyphicon-tag"\""\>\</span\> $tag\</a\>\<br /\> >> "../index.html";

		unset FILES;
	done
	echo "done this tag, going up to $(abspath ../)";
	cd "../";
	echo \</div\>\</div\> >> "index.html";
}

git clone git://github.com/entando/entando-core-engine.git entando-core-engine ;
tld "entando-core-engine"

#echo "restarting from: $(pwd)" ;

git clone git://github.com/entando/entando-plugins-parent.git entando-plugins-parent ;
tld "entando-plugins-parent"

#echo "restarting from: $(pwd)" ;


echo \</div\>\<a href="\""https://github.com/nkjoep/entando-tld-generator/"\""\>\<img style="\""position: absolute";" top: 0";" right: 0";" border: 0";""\"" src="\""https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"\"" alt="\""Fork me on GitHub"\"" /\>\</a\>\</body\>\</html\> >> "index.html";