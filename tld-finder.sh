rm tld-master.txt.tmp ;
rm tld-develop.txt.tmp ;
rm -rf ./master ;
rm -rf ./develop ;
mkdir -p master/tld ;
mkdir -p develop/tld ;

git clone git://github.com/entando/entando-core-engine.git 
git clone git://github.com/entando/entando-plugins-parent.git 

cd entando-core-engine ;
git checkout master ;
find .  -name "*.tld" -exec echo "entando-core-engine/"{} \; >>  ../tld-master.txt.tmp ;
git checkout develop ;
find .  -name "*.tld" -exec echo "entando-core-engine/"{} \; >>  ../tld-develop.txt.tmp ;



cd .. ;
cd entando-plugins-parent ;
git checkout master ;
find .  -name "*.tld" -exec echo "entando-plugins-parent/"{} \; >>  ../tld-master.txt.tmp ;
git checkout develop ;
find .  -name "*.tld" -exec echo "entando-plugins-parent/"{} \; >>  ../tld-develop.txt.tmp ;
cd .. ;

sort tld-master.txt.tmp > tld-master-sorted.txt.tmp ;
rm tld-master.txt.tmp ;
mv tld-master-sorted.txt.tmp tld-master.txt.tmp ;

sort tld-develop.txt.tmp > tld-develop-sorted.txt.tmp ;
rm tld-develop.txt.tmp ;
mv tld-develop-sorted.txt.tmp tld-develop.txt.tmp ;

MASTER_FILES="" ;
master() {
	local name=$(basename $1)
	local localFile="./master/tld/$name"
	if [ $name != "cewolf.tld" ]
		then 
			cp $1 $localFile
			echo $localFile
	fi
	exit
}
while read line; 
	do MASTER_FILES="$MASTER_FILES $(master $line)";
done < tld-master.txt.tmp

DEVELOP_FILES="" ;
develop() {
	local name=$(basename $1)
	local localFile="./develop/tld/$name"
	if [ $name != "cewolf.tld" ]
		then 
			cp $1 $localFile
			echo $localFile
	fi
}
while read line; 
	do DEVELOP_FILES="$DEVELOP_FILES $(develop $line)";
done < tld-develop.txt.tmp

java -jar ./java-lib/tlddoc.jar $MASTER_FILES -d ./master/
java -jar ./java-lib/tlddoc.jar $DEVELOP_FILES -d ./develop/

rm tld-master.txt.tmp ;
rm tld-develop.txt.tmp ;

