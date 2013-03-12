<?
	file_put_contents("./tld/aps-core.tld",
		 file_get_contents("http://raw.github.com/entando/entando-core-engine/master/src/main/tld/aps-core.tld"));
	file_put_contents("./tld/apsadmin-core.tld",
		 file_get_contents("http://raw.github.com/entando/entando-core-engine/master/src/main/tld/apsadmin-core.tld"));
	file_put_contents("./tld/apsadmin-form.tld",
		 file_get_contents("http://raw.github.com/entando/entando-core-engine/master/src/main/tld/apsadmin-form.tld"));
	file_put_contents("./tld/jacms-aps-core.tld",
		 file_get_contents("http://raw.github.com/entando/entando-core-engine/master/src/main/tld/jacms-aps-core.tld"));
	file_put_contents("./tld/jacms-apsadmin-core.tld",
		 file_get_contents("http://raw.github.com/entando/entando-core-engine/master/src/main/tld/jacms-apsadmin-core.tld"));
	file_put_contents("./tld/jpavatar-apsadmin-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpavatar/src/main/tld/plugins/jpavatar/jpavatar-apsadmin-core.tld"));
	file_put_contents("./tld/jpcalendar-aps-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpcalendar/src/main/tld/plugins/jpcalendar/jpcalendar-aps-core.tld"));
	file_put_contents("./tld/jpcasclient-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpcasclient/src/main/tld/plugins/jpcasclient/jpcasclient-core.tld"));
	file_put_contents("./tld/jpcmstagcloud-aps-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpcmstagcloud/src/main/tld/plugins/jpcmstagcloud/jpcmstagcloud-aps-core.tld"));
	file_put_contents("./tld/jpcontentfeedback-aps-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpcontentfeedback/src/main/tld/plugins/jpcontentfeedback/jpcontentfeedback-aps-core.tld"));
	file_put_contents("./tld/jpcontentfeedback-fmt-1_0.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpcontentfeedback/src/main/tld/plugins/jpcontentfeedback/jpcontentfeedback-fmt-1_0.tld"));
	file_put_contents("./tld/jpfacetnav-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpfacetnav/src/main/tld/plugins/jpfacetnav/jpfacetnav-core.tld"));
	file_put_contents("./tld/jpfastcontentedit-aps-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpfastcontentedit/src/main/tld/plugins/jpfastcontentedit/jpfastcontentedit-aps-core.tld"));
	file_put_contents("./tld/jpgeoref-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpgeoref/src/main/tld/plugins/jpgeoref/jpgeoref-core.tld"));
	file_put_contents("./tld/jpmyportal-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpmyportal/src/main/tld/plugins/jpmyportal/jpmyportal-core.tld"));
	file_put_contents("./tld/jpmyportalplus-apsadmin-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpmyportalplus/src/main/tld/plugins/jpmyportalplus/jpmyportalplus-apsadmin-core.tld"));
	file_put_contents("./tld/jpmyportalplus-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpmyportalplus/src/main/tld/plugins/jpmyportalplus/jpmyportalplus-core.tld"));
	file_put_contents("./tld/jpphotogallery-aps-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpphotogallery/src/main/tld/plugins/jpphotogallery/jpphotogallery-aps-core.tld"));
	file_put_contents("./tld/jprss-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jprss/src/main/tld/plugins/jprss/jprss-core.tld"));
	file_put_contents("./tld/jpshowletreplicator-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpshowletreplicator/src/main/tld/plugins/jpshowletreplicator/jpshowletreplicator-core.tld"));
	file_put_contents("./tld/jpsurvey-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpsurvey/src/main/tld/plugins/jpsurvey/jpsurvey-core.tld"));
	file_put_contents("./tld/jpuserprofile-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpuserprofile/src/main/tld/plugins/jpuserprofile/jpuserprofile-core.tld"));
	file_put_contents("./tld/webmail-core.tld" ,
		file_get_contents("http://raw.github.com/entando/entando-plugins-parent/master/entando-plugin-jpwebmail/src/main/tld/plugins/jpwebmail/webmail-core.tld"));

	exec('java -jar ../java-lib/tlddoc.jar ./tld/aps-core.tld ./tld/apsadmin-core.tld ./tld/apsadmin-form.tld ./tld/jacms-aps-core.tld ./tld/jacms-apsadmin-core.tld ./tld/jpavatar-apsadmin-core.tld ./tld/jpcalendar-aps-core.tld ./tld/jpcasclient-core.tld ./tld/jpcmstagcloud-aps-core.tld ./tld/jpcontentfeedback-aps-core.tld ./tld/jpcontentfeedback-fmt-1_0.tld ./tld/jpfacetnav-core.tld ./tld/jpfastcontentedit-aps-core.tld ./tld/jpgeoref-core.tld ./tld/jpmyportal-core.tld ./tld/jpmyportalplus-apsadmin-core.tld ./tld/jpmyportalplus-core.tld ./tld/jpphotogallery-aps-core.tld ./tld/jprss-core.tld ./tld/jpshowletreplicator-core.tld ./tld/jpsurvey-core.tld ./tld/jpuserprofile-core.tld ./tld/webmail-core.tld -d ./');
	header( 'Location: index.html' ) ;
?>


