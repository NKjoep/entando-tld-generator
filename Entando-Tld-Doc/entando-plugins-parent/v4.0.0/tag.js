jQuery(function(){

var basepath = $('html').attr('data-basepath');
	var taglibs = [
		
		
				{
					name: "bodyReader",
					prefix: "gpwp",
					tld: "\&quot;jpgeoref aps core tag library\&quot;" ,
					tlddescr: "TODO.",
					url: "gpwp_22-bodyReader"
				},
		
				{
					name: "reqCtxParamPrinter",
					prefix: "gpwp",
					tld: "\&quot;jpgeoref aps core tag library\&quot;" ,
					tlddescr: "TODO.",
					url: "gpwp_22-reqCtxParamPrinter"
				},
		
				{
					name: "geoRenderList",
					prefix: "gpwp",
					tld: "\&quot;jpgeoref aps core tag library\&quot;" ,
					tlddescr: "TODO.",
					url: "gpwp_22-geoRenderList"
				},
		
				{
					name: "geoRoute",
					prefix: "gpwp",
					tld: "\&quot;jpgeoref aps core tag library\&quot;" ,
					tlddescr: "TODO.",
					url: "gpwp_22-geoRoute"
				},
		
		
		
		
				{
					name: "avatar",
					prefix: "jpavatar",
					tld: "\&quot;jpavatar apsadmin core tag library\&quot;" ,
					tlddescr: "Return the path of an avatar. When the parameter \&quot;username\&quot; is not passed, the avatar will be related to the currrent user",
					url: "jpavatar_10-avatar"
				},
		
		
		
		
				{
					name: "calendar",
					prefix: "jpcalendar-aps-core",
					tld: "jpcalendar aps core tag library" ,
					tlddescr: "",
					url: "jpcalendar-aps-core_10-calendar"
				},
		
				{
					name: "eventsOfDay",
					prefix: "jpcalendar-aps-core",
					tld: "jpcalendar aps core tag library" ,
					tlddescr: "Carica una lista di identificativi di contenuti evento del giorno specificato.",
					url: "jpcalendar-aps-core_10-eventsOfDay"
				},
		
		
		
		
				{
					name: "CasConfigParamTag",
					prefix: "jpcasc",
					tld: "\&quot;jpcasclient core tag library\&quot;" ,
					tlddescr: "insert in the pagecontext the var with the value of the cas plugin configuration",
					url: "jpcasc_22-CasConfigParamTag"
				},
		
		
		
		
				{
					name: "tagCloudBuilder",
					prefix: "jpcmstagcloud",
					tld: "\&quot;jpcmstagcloud aps core tag library\&quot;" ,
					tlddescr: "",
					url: "jpcmstagcloud_22-tagCloudBuilder"
				},
		
				{
					name: "contentList",
					prefix: "jpcmstagcloud",
					tld: "\&quot;jpcmstagcloud aps core tag library\&quot;" ,
					tlddescr: "Carica una lista di identificativi di contenuti. Vengono caricato solo gli id relativi a contenuti accessibili nel portale.",
					url: "jpcmstagcloud_22-contentList"
				},
		
				{
					name: "pageWithWidget",
					prefix: "jpcmstagcloud",
					tld: "\&quot;jpcmstagcloud aps core tag library\&quot;" ,
					tlddescr: "Search and return the page (or the list of pages) with the given showlet type.",
					url: "jpcmstagcloud_22-pageWithWidget"
				},
		
		
		
		
				{
					name: "feedbackIntro",
					prefix: "jpcontentfeedback",
					tld: "\&quot;jpcontentfeedback aps core tag library\&quot;" ,
					tlddescr: "Entry point tag for all the frontend operations",
					url: "jpcontentfeedback_22-feedbackIntro"
				},
		
				{
					name: "ifViewContentOption",
					prefix: "jpcontentfeedback",
					tld: "\&quot;jpcontentfeedback aps core tag library\&quot;" ,
					tlddescr: "Display the body tag according to the the param configuration",
					url: "jpcontentfeedback_22-ifViewContentOption"
				},
		
				{
					name: "contentCommentViewer",
					prefix: "jpcontentfeedback",
					tld: "\&quot;jpcontentfeedback aps core tag library\&quot;" ,
					tlddescr: "Estrae dal sistema un commento dato il suo identificativo specificato come parametro.",
					url: "jpcontentfeedback_22-contentCommentViewer"
				},
		
		
		
		
				{
					name: "formatNumber",
					prefix: "jpcontentfeedback-ffmt",
					tld: "JSTL fmt -" ,
					tlddescr: "Formats a numeric value as a number, currency, or percentage",
					url: "jpcontentfeedback-ffmt_10-formatNumber"
				},
		
				{
					name: "formatDate",
					prefix: "jpcontentfeedback-ffmt",
					tld: "JSTL fmt -" ,
					tlddescr: "Formats a date and/or time using the supplied styles and pattern",
					url: "jpcontentfeedback-ffmt_10-formatDate"
				},
		
		
		
		
				{
					name: "fastContentEditFormAction",
					prefix: "jpfastcontentedit-aps-core",
					tld: "jpfastcontentedit aps core tag library" ,
					tlddescr: "Showlet to provide fast content edit functionalities",
					url: "jpfastcontentedit-aps-core_10-fastContentEditFormAction"
				},
		
				{
					name: "allowedContents",
					prefix: "jpfastcontentedit-aps-core",
					tld: "jpfastcontentedit aps core tag library" ,
					tlddescr: "",
					url: "jpfastcontentedit-aps-core_10-allowedContents"
				},
		
				{
					name: "isContentAllowed",
					prefix: "jpfastcontentedit-aps-core",
					tld: "jpfastcontentedit aps core tag library" ,
					tlddescr: "",
					url: "jpfastcontentedit-aps-core_10-isContentAllowed"
				},
		
		
		
		
				{
					name: "staticInternalServlet",
					prefix: "jpfrontshortcut",
					tld: "\&quot;jpfrontshortcut aps core tag library\&quot;" ,
					tlddescr: "DEPRECATED: use wp:internalServlet (core tag) with parameter staticAction=\&quot;true\&quot;",
					url: "jpfrontshortcut_22-staticInternalServlet"
				},
		
				{
					name: "requestContextParam",
					prefix: "jpfrontshortcut",
					tld: "\&quot;jpfrontshortcut aps core tag library\&quot;" ,
					tlddescr: "Restituisce il valore di un parametro del contesto della richiesta. Il Parametro è restituito in funzione della showlet nella quale il tag è inserito.",
					url: "jpfrontshortcut_22-requestContextParam"
				},
		
				{
					name: "contentModel",
					prefix: "jpfrontshortcut",
					tld: "\&quot;jpfrontshortcut aps core tag library\&quot;" ,
					tlddescr: "........",
					url: "jpfrontshortcut_22-contentModel"
				},
		
		
		
		
				{
					name: "execWidget",
					prefix: "jpmyportalplus-core",
					tld: "\&quot;jpmyportalplus core tag library\&quot;" ,
					tlddescr: "Esecuzione preliminare delle showlet. Se l\&#x27;utente è loggato e possiede una configurazione personalizzata, la pagina conterrà le showlet personalizzate per il modello della pagina corrente. Da usare esclusivamente nella main.jsp.",
					url: "jpmyportalplus-core_22-execWidget"
				},
		
				{
					name: "isCurrentFrameClosed",
					prefix: "jpmyportalplus-core",
					tld: "\&quot;jpmyportalplus core tag library\&quot;" ,
					tlddescr: "",
					url: "jpmyportalplus-core_22-isCurrentFrameClosed"
				},
		
				{
					name: "customizableWidgets",
					prefix: "jpmyportalplus-core",
					tld: "\&quot;jpmyportalplus core tag library\&quot;" ,
					tlddescr: "Returns the list of widget (in form of {@link WidgetCheckInfo}) to use into the function of page configuration.",
					url: "jpmyportalplus-core_22-customizableWidgets"
				},
		
				{
					name: "frameSelectItem",
					prefix: "jpmyportalplus-core",
					tld: "\&quot;jpmyportalplus core tag library\&quot;" ,
					tlddescr: "Returns the list of select items to use in the select inside the frame swap function of each widget",
					url: "jpmyportalplus-core_22-frameSelectItem"
				},
		
				{
					name: "requestContextParam",
					prefix: "jpmyportalplus-core",
					tld: "\&quot;jpmyportalplus core tag library\&quot;" ,
					tlddescr: "Restituisce il valore di un parametro del contesto della richiesta. Il Parametro è restituito in funzione della showlet nella quale il tag è inserito.",
					url: "jpmyportalplus-core_22-requestContextParam"
				},
		
				{
					name: "columnInfo",
					prefix: "jpmyportalplus-core",
					tld: "\&quot;jpmyportalplus core tag library\&quot;" ,
					tlddescr: "",
					url: "jpmyportalplus-core_22-columnInfo"
				},
		
				{
					name: "checkValidWidget",
					prefix: "jpmyportalplus-core",
					tld: "\&quot;jpmyportalplus core tag library\&quot;" ,
					tlddescr: "Toggle the visibility of the elements contained in body tag, depending on the presents of showlet type into the allowed types of MyPortal Service. Is possible to insert the result of the check in a variable placed in the page context.",
					url: "jpmyportalplus-core_22-checkValidWidget"
				},
		
		
		
		
				{
					name: "pager",
					prefix: "jpphotogallery-aps-core",
					tld: "jpphotogallery aps core tag library" ,
					tlddescr: "Tag Paginatore liste per photogallery",
					url: "jpphotogallery-aps-core_10-pager"
				},
		
		
		
		
				{
					name: "rssList",
					prefix: "jprss-core",
					tld: "jprssPlugin core tag library" ,
					tlddescr: "Returns a list containing all the active feeds stored in the system",
					url: "jprss-core_10-rssList"
				},
		
		
		
		
				{
					name: "widgetReplicator",
					prefix: "jpsr",
					tld: "\&quot;jpshowletreplicator core tag library\&quot;" ,
					tlddescr: "Renderizza il Replicatore",
					url: "jpsr_22-widgetReplicator"
				},
		
		
		
		
				{
					name: "surveyList",
					prefix: "jpsurvey",
					tld: "\&quot;jpsurvey aps core tag library\&quot;" ,
					tlddescr: "Load a list containing all the ACTIVE surveys",
					url: "jpsurvey_22-surveyList"
				},
		
				{
					name: "loadSurvey",
					prefix: "jpsurvey",
					tld: "\&quot;jpsurvey aps core tag library\&quot;" ,
					tlddescr: "Load a survey record, excuding the related questions and choices",
					url: "jpsurvey_22-loadSurvey"
				},
		
				{
					name: "pageWithWidget",
					prefix: "jpsurvey",
					tld: "\&quot;jpsurvey aps core tag library\&quot;" ,
					tlddescr: "Search and return the page (or the list of pages) with the given showlet type.",
					url: "jpsurvey_22-pageWithWidget"
				},
		
		
		
		
				{
					name: "webmailIntro",
					prefix: "webmail-core.tld",
					tld: "\&quot;webmail core tag library\&quot;" ,
					tlddescr: "Tag estrattore delle informazioni da erogare nella showlet introduttiva al servizio webmail.",
					url: "webmail-core.tld_22-webmailIntro"
				},
		
				{
					name: "customPageTitle",
					prefix: "webmail-core.tld",
					tld: "\&quot;webmail core tag library\&quot;" ,
					tlddescr: "Create and insert a custom page title",
					url: "webmail-core.tld_22-customPageTitle"
				},
		
				{
					name: "addressComponents",
					prefix: "webmail-core.tld",
					tld: "\&quot;webmail core tag library\&quot;" ,
					tlddescr: "Esamina una stringa e carica username e indirizzo email in un oggetto di tipo \&#x27;ComponentAddress\&#x27;. Esso comprende i metodi:&lt;br /&gt; fullname (nome completo), email (email senza apici), account (nome prima della @), domain (dominio email), existing (restituisce il primo valore non nullo trovato -nell\&#x27;ordine- tra fullname, email, default).",
					url: "webmail-core.tld_22-addressComponents"
				},
		
		
		
		
				{
					name: "contentStep",
					prefix: "wpcw",
					tld: "\&quot;jpcontentworkflow-apsadmin-core tag library\&quot;" ,
					tlddescr: "todo.",
					url: "wpcw_22-contentStep"
				},
		
		
		
		
				{
					name: "facetNavTree",
					prefix: "wpfp",
					tld: "\&quot;jpfacetnav core tag library\&quot;" ,
					tlddescr: "",
					url: "wpfp_22-facetNavTree"
				},
		
				{
					name: "facetNavResult",
					prefix: "wpfp",
					tld: "\&quot;jpfacetnav core tag library\&quot;" ,
					tlddescr: "",
					url: "wpfp_22-facetNavResult"
				},
		
				{
					name: "hasToViewFacetNode",
					prefix: "wpfp",
					tld: "\&quot;jpfacetnav core tag library\&quot;" ,
					tlddescr: "",
					url: "wpfp_22-hasToViewFacetNode"
				},
		
				{
					name: "hasToOpenFacetNode",
					prefix: "wpfp",
					tld: "\&quot;jpfacetnav core tag library\&quot;" ,
					tlddescr: "",
					url: "wpfp_22-hasToOpenFacetNode"
				},
		
				{
					name: "facetNodeTitle",
					prefix: "wpfp",
					tld: "\&quot;jpfacetnav core tag library\&quot;" ,
					tlddescr: "",
					url: "wpfp_22-facetNodeTitle"
				},
		
				{
					name: "urlPar",
					prefix: "wpfp",
					tld: "\&quot;jpfacetnav core tag library\&quot;" ,
					tlddescr: "Sub tag di url: parametro di query string per l\&#x27;URL.",
					url: "wpfp_22-urlPar"
				},
		
		
		
		
				{
					name: "actionParam",
					prefix: "wpfssa",
					tld: "\&quot;jpfrontshortcut apsadmin core tag library\&quot;" ,
					tlddescr: "Handles the submit in the administration interface, building the name of the action with a defined sequence of parameters.&lt;br/&gt; The single parameters are added using the \&quot;actionSubParam\&quot; tag.",
					url: "wpfssa_22-actionParam"
				},
		
				{
					name: "actionSubParam",
					prefix: "wpfssa",
					tld: "\&quot;jpfrontshortcut apsadmin core tag library\&quot;" ,
					tlddescr: "Adds a single parameter to the submit action.&lt;br/&gt;Must be used in conjunction with the \&quot;actionParam\&quot; tag.",
					url: "wpfssa_22-actionSubParam"
				},
		
				{
					name: "subset",
					prefix: "wpfssa",
					tld: "\&quot;jpfrontshortcut apsadmin core tag library\&quot;" ,
					tlddescr: "Takes an iterator and outputs a subset of it.",
					url: "wpfssa_22-subset"
				},
		
		
		
		
				{
					name: "widgetType",
					prefix: "wpmpp",
					tld: "\&quot;jpmyportalplus apsadmin core tag library\&quot;" ,
					tlddescr: "Tag equals to {@link com.agiletec.apsadmin.tags.WidgetTypeInfoTag} tag. Return also a \&quot;swappable\&quot; property of the type.",
					url: "wpmpp_22-widgetType"
				},
		
		
		
		
				{
					name: "myToken",
					prefix: "wpta",
					tld: "\&quot;jptokenapi core tag library\&quot;" ,
					tlddescr: ".",
					url: "wpta_22-myToken"
				},
		
		
		
		{
			name: '',
			prefix: '',
			tld: '',
			tlddescr: '',
			url: ''
		}
	];


					$('.typeahead').typeahead({
						source: taglibs,
						matcher: function(item) {
							var reg = new RegExp(this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/gi, '\\$&'));
							return  (
									reg.test(item.prefix.toLowerCase()+':'+item.name.toLowerCase())
									//|| reg.test(item.tld.toLowerCase())
									//|| reg.test(item.tlddescr.toLowerCase())
								)
						},
						sorter: function(items) {
							$(this.$menu).width($(this.$element).outerWidth()+"px");
							var items = items.sort(function(a, b){
								if(a.prefix.toLowerCase()+":"+a.name.toLowerCase() > b.prefix.toLowerCase()) {
									return 1;
								}
								if(a.prefix.toLowerCase()+":"+a.name.toLowerCase() < b.prefix.toLowerCase()) {
									return -1;
								}
								return 0;
							});
							return items;
						},
						highlighter: function(item) {
							var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
							var regexp = new RegExp('(' + query + ')', 'ig');

							return ''
							+ (item.prefix+':'+item.name).replace(regexp, function($1, match){ return '<strong class="bg-primary">' + match + '</strong>' })
							+'';
						},
						updater: function(item) {
							window.location.href=basepath+item.url;
						},
						items: 'all'
					})
});
