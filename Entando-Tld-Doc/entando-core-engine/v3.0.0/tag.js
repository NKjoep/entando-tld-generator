jQuery(function(){

var basepath = $('html').attr('data-basepath');
	var taglibs = [
		
		
				{
					name: "searcher",
					prefix: "jacmsaps",
					tld: "\&quot;jACMS aps core tag library\&quot;" ,
					tlddescr: "Generates a list of content IDs, restricting them to the key word contained in the \&quot;search\&quot; parameter of the http request.",
					url: "jacmsaps_22-searcher"
				},
		
				{
					name: "contentList",
					prefix: "jacmsaps",
					tld: "\&quot;jACMS aps core tag library\&quot;" ,
					tlddescr: "Loads a list of contents IDs by applying the filters (if any). Only the IDs of the contents accessible in the portal can be loaded.",
					url: "jacmsaps_22-contentList"
				},
		
				{
					name: "contentListFilter",
					prefix: "jacmsaps",
					tld: "\&quot;jACMS aps core tag library\&quot;" ,
					tlddescr: "\&quot;ContentListTag\&quot; sub-tag, it creates a filter to restrict the result of the content search.&lt;br/&gt; Please note that the filters will be applied in the same order they are declared and the result of the search will reflect this fact.",
					url: "jacmsaps_22-contentListFilter"
				},
		
				{
					name: "contentListUserFilterOption",
					prefix: "jacmsaps",
					tld: "\&quot;jACMS aps core tag library\&quot;" ,
					tlddescr: "\&quot;ContentListTag\&quot; sub-tag, it creates a custom user filter to restrict the result of the content search by front-end user.",
					url: "jacmsaps_22-contentListUserFilterOption"
				},
		
				{
					name: "content",
					prefix: "jacmsaps",
					tld: "\&quot;jACMS aps core tag library\&quot;" ,
					tlddescr: "Displays the content given its ID.",
					url: "jacmsaps_22-content"
				},
		
				{
					name: "contentInfo",
					prefix: "jacmsaps",
					tld: "\&quot;jACMS aps core tag library\&quot;" ,
					tlddescr: "Return an information of a specified content. The content can will be extracted by id from showlet parameters or from request parameter. The tag extract any specific parameter (by \&quot;param\&quot; attribute) or entire ContentAuthorizationInfo object (setting \&quot;var\&quot; attribute and anything on \&quot;param\&quot; attribute).",
					url: "jacmsaps_22-contentInfo"
				},
		
		
		
		
				{
					name: "contentType",
					prefix: "jacmsapsadmin",
					tld: "\&quot;jACMS apsadmin core tag library\&quot;" ,
					tlddescr: "Returns a content type (or one of its property) through the code. You can choose whether to return the entire object (leaving the attribute \&quot;property\&quot; empty) or a single property. The names of the available property of \&quot;Content Type\&quot;: \&quot;typeCode\&quot;, \&quot;typeDescr\&quot;, \&quot;attributeMap\&quot; (map of attributes indexed by the name), \&quot;attributeList\&quot; (list of attributes).",
					url: "jacmsapsadmin_22-contentType"
				},
		
				{
					name: "content",
					prefix: "jacmsapsadmin",
					tld: "\&quot;jACMS apsadmin core tag library\&quot;" ,
					tlddescr: "Returns a content (or one of its property) through the code. You can choose whether to return the entire object (leaving the attribute \&quot;property\&quot; empty) or a single property. The names of the available property of \&quot;Content\&quot; (Entity Object): \&quot;id\&quot;, \&quot;descr\&quot;, \&quot;typeCode\&quot;, \&quot;typeDescr\&quot;, \&quot;mainGroup\&quot; (code), \&quot;groups\&quot; (extra group codes), \&quot;categories\&quot; (list of categories), \&quot;attributeMap\&quot; (map of attributes indexed by the name), \&quot;attributeList\&quot; (list of attributes), \&quot;status\&quot; (code), \&quot;viewPage\&quot; (page code), \&quot;listModel\&quot;, \&quot;defaultModel\&quot;, \&quot;version\&quot;, \&quot;lastEditor\&quot; (username of last editor). The names of the available property of \&quot;Content\&quot; (Record Object): \&quot;id\&quot;, \&quot;typeCode\&quot;, \&quot;descr\&quot;, \&quot;status\&quot; (code), \&quot;create\&quot; (Creation Date), \&quot;modify\&quot; (last modity date), \&quot;mainGroupCode\&quot;, \&quot;version\&quot;, \&quot;lastEditor\&quot; (username of last editor). If the current user has the authorization for edit the content, the tag presents the body included.",
					url: "jacmsapsadmin_22-content"
				},
		
				{
					name: "resource",
					prefix: "jacmsapsadmin",
					tld: "\&quot;jACMS apsadmin core tag library\&quot;" ,
					tlddescr: "Returns a resource (or one of its property) through the code. You can choose whether to return the entire object (leaving the attribute \&quot;property\&quot; empty) or a single property. The names of the available property of \&quot;Resource\&quot;: \&quot;id\&quot;, \&quot;descr\&quot;, \&quot;type\&quot;, \&quot;mainGroup\&quot; (code), \&quot;folder\&quot;, \&quot;categories\&quot; (list of categories), \&quot;allowedFileTypes\&quot;.",
					url: "jacmsapsadmin_22-resource"
				},
		
				{
					name: "contentPreviewExecShowlet",
					prefix: "jacmsapsadmin",
					tld: "\&quot;jACMS apsadmin core tag library\&quot;" ,
					tlddescr: "This tag allows the preliminary execution of the showlet so to show the preview of the contents within the content administration pages in the backend. This tag class comes directly from the ExecShowletTag class used in the front-end to build the pages of the portal.",
					url: "jacmsapsadmin_22-contentPreviewExecShowlet"
				},
		
				{
					name: "contentPreview",
					prefix: "jacmsapsadmin",
					tld: "\&quot;jACMS apsadmin core tag library\&quot;" ,
					tlddescr: "This returns the content ready for the preview functionality. This tags comes from the ContentTag class used in the front-end to render a content.",
					url: "jacmsapsadmin_22-contentPreview"
				},
		
		
		
		
				{
					name: "execShowlet",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Triggers the preliminary execution of the showlets.&lt;br/&gt;It can be used &lt;b&gt;&lt;b&gt;only&lt;/b&gt;&lt;/b&gt; in the main.jsp.",
					url: "wp_22-execShowlet"
				},
		
				{
					name: "buildPage",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Builds a page generating the output.",
					url: "wp_22-buildPage"
				},
		
				{
					name: "show",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Defines the position of inclusion of a showlet.&lt;br/&gt; This tag can be used &lt;b&gt;only&lt;/b&gt; in a page model.",
					url: "wp_22-show"
				},
		
				{
					name: "outputHeadInfo",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Iterates over various information in HTML header displaying them; this tag works in conjunction with other specific sub-tags.&lt;br/&gt; Please note that the body can contain &lt;b&gt;only&lt;/b&gt; a sub-tag, or information, at once.&lt;br/&gt; This tag must be used &lt;b&gt;only&lt;/b&gt; in a page model.",
					url: "wp_22-outputHeadInfo"
				},
		
				{
					name: "checkHeadInfoOuputter",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "This sub-tag verifies the availability of the information to display.&lt;br/&gt; This sub-tag can be used &lt;b&gt;only&lt;/b&gt; in a page model, in conjunction with \&#x27;outputHeadInfo\&#x27;.",
					url: "wp_22-checkHeadInfoOuputter"
				},
		
				{
					name: "printHeadInfo",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Returns the information to display.&lt;br/&gt; This sub-tag must be used &lt;b&gt;only&lt;/b&gt; in a page model, in conjunction with \&#x27;outputHeadInfo\&#x27;.",
					url: "wp_22-printHeadInfo"
				},
		
				{
					name: "contentNegotiation",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Performs the Content Negotiation, trying to serve the specified mimeType with the given charset. If the mimeType is not accepted by the User Agent it returns the default text/html.",
					url: "wp_22-contentNegotiation"
				},
		
				{
					name: "internalServlet",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Tag for the \&quot;Internal Servlet\&quot; functionality.&lt;br/&gt; Publishes a function served by an internal Servlet; the servlet is invoked from a path specified in the attribute \&quot;actionPath\&quot; or by the showlet parameter sharing the same name.&lt;br/&gt; This tag can be used &lt;b&gt;only&lt;/b&gt; in a showlet.",
					url: "wp_22-internalServlet"
				},
		
				{
					name: "externalFramework",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Tag for the \&quot;External Framework\&quot; showlet. &lt;br/&gt;&lt;b&gt;DEPRECATED&lt;/b&gt;; use \&quot;internalServlet\&quot; instead.",
					url: "wp_22-externalFramework"
				},
		
				{
					name: "headInfo",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Declares the information to insert in the header of the HTML page. The information can be passed as an attribute or, in an indirect manner, through a variable of the page context.&lt;br/&gt; It is mandatory to specify the type of the information.",
					url: "wp_22-headInfo"
				},
		
				{
					name: "action",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Build the URL to call a jsp or a functionality of a servlet defined within the system.&lt;br/&gt; This tag can use the ParameterTag sub-tag to add url parameters.",
					url: "wp_22-action"
				},
		
				{
					name: "url",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Generates the complete URL of a portal page.&lt;br/&gt; The URL returned is either returned (and rendered) or placed in the given variable.&lt;br/&gt; To insert parameters in the query string the sub-tag \&quot;ParameterTag\&quot; is provided.",
					url: "wp_22-url"
				},
		
				{
					name: "categories",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Return the list of the system categories on SelectItem objects.",
					url: "wp_22-categories"
				},
		
				{
					name: "urlPar",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "This is the sub-tag of the \&quot;url\&quot; tag.&lt;br/&gt; Adds a parameter in the URL query string generated. &lt;br/&gt;&lt;b&gt;DEPRECATED&lt;/b&gt;; use ParameterTag instead .",
					url: "wp_22-urlPar"
				},
		
				{
					name: "nav",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Generates through successive iterations the so called \&quot;navigation\&quot; list.&lt;br/&gt; For every target/page being iterated (inserted in the page context) are made available the page code, the title (in the current language) and the link. Is it also possible to check whether the target page is empty -that is, with no configured positions- or not.",
					url: "wp_22-nav"
				},
		
				{
					name: "currentPage",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Returns the requested information held by the current page bean.",
					url: "wp_22-currentPage"
				},
		
				{
					name: "pageInfo",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Returns the information of the specified page. This tag can use the sub-tag \&quot;ParameterTag\&quot; to add url parameters if the info attribute is set to \&#x27;url\&#x27;.",
					url: "wp_22-pageInfo"
				},
		
				{
					name: "parameter",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "This tag can be used to parameterise other tags.&lt;br/&gt; The parameter value can be added through the \&#x27;value\&#x27; attribute or the body tag. When you declare the param tag, the value can be defined in either a value attribute or as text between the start and the ending of the tag.",
					url: "wp_22-parameter"
				},
		
				{
					name: "currentShowlet",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Returns informations about the showlet where the tag resides. To obtain information about a showlet placed in a frame other than the current, use the \&quot;frame\&quot; attribute.",
					url: "wp_22-currentShowlet"
				},
		
				{
					name: "i18n",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Return the string associated to the given key in the specified language. This string is either returned (and rendered) or can be optionally placed in a page context variable.",
					url: "wp_22-i18n"
				},
		
				{
					name: "pager",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "List pager.",
					url: "wp_22-pager"
				},
		
				{
					name: "resourceURL",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Returns URL of the resources.",
					url: "wp_22-resourceURL"
				},
		
				{
					name: "cssURL",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Extension of the ResourceURL tag. It returns the URL of the css files.",
					url: "wp_22-cssURL"
				},
		
				{
					name: "imgURL",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Extension of the ResourceURL tag. It returns the URL of the images to display as static content outside the cms.",
					url: "wp_22-imgURL"
				},
		
				{
					name: "ifauthorized",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Toggles the visibility of the elements contained in its body, depending on user permissions.",
					url: "wp_22-ifauthorized"
				},
		
				{
					name: "info",
					prefix: "wp",
					tld: "\&quot;aps core tag library\&quot;" ,
					tlddescr: "Returns the information of the desired system parameter.",
					url: "wp_22-info"
				},
		
		
		
		
				{
					name: "page",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Returns a page (or one of its property) through the code. You can choose whether to return the entire object (leaving the attribute \&quot;property\&quot; empty) or a single property through the \&quot;property\&quot; attribute.",
					url: "wpsa_22-page"
				},
		
				{
					name: "showletType",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Returns a showlet type (or one of its property) given its code. You can choose whether to return the entire object (leaving the attribute \&quot;property\&quot; empty) or a single property using the \&quot;property\&quot; attribute.",
					url: "wpsa_22-showletType"
				},
		
				{
					name: "entityType",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Returns a entity type (or one of its property) through the code and the entity service name. You can choose whether to return the entire object (leaving the attribute \&quot;property\&quot; empty) or a single property using the \&quot;property\&quot; attribute.",
					url: "wpsa_22-entityType"
				},
		
				{
					name: "entity",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Returns a entity (or one of its property) through the code and the entity service name. You can choose whether to return the entire object (leaving the attribute \&quot;property\&quot; empty) or a single property using the \&quot;property\&quot; attribute.",
					url: "wpsa_22-entity"
				},
		
				{
					name: "shortcut",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Returns a shortcut (or one of its property) through the code. You can choose whether to return the entire object (leaving the attribute \&quot;property\&quot; empty) or a single property using the \&quot;property\&quot; attribute.",
					url: "wpsa_22-shortcut"
				},
		
				{
					name: "userShortcutsConfig",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Returns the configured shortcuts of the current user.",
					url: "wpsa_22-userShortcutsConfig"
				},
		
				{
					name: "paramMap",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Tag used to parameterize other tags with a map of parameters.",
					url: "wpsa_22-paramMap"
				},
		
				{
					name: "backendGuiClient",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Print the current value of the counter. The counter should be used inside the tabindex attribute in HTML tags that allow its use.",
					url: "wpsa_22-backendGuiClient"
				},
		
				{
					name: "counter",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Print the current value of the counter. The counter should be used inside the tabindex attribute in HTML tags that allow the use.",
					url: "wpsa_22-counter"
				},
		
				{
					name: "subset",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Takes an iterator and outputs a subset of it.",
					url: "wpsa_22-subset"
				},
		
				{
					name: "actionParam",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Handles the submit in the administration interface, building the name of the action with a defined sequence of parameters.&lt;br/&gt; The single parameters are added using the \&quot;actionSubParam\&quot; tag.",
					url: "wpsa_22-actionParam"
				},
		
				{
					name: "actionSubParam",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Adds a single parameter to the submit action.&lt;br/&gt;Must be used in conjunction with the \&quot;actionParam\&quot; tag.",
					url: "wpsa_22-actionSubParam"
				},
		
				{
					name: "include",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Includes a servlet\&#x27;s output (result of servlet or a JSP page).",
					url: "wpsa_22-include"
				},
		
				{
					name: "set",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Assigns a value to a variable in a specified scope&lt;br/&gt; &lt;b&gt;DEPRECATED&lt;/b&gt; - use the original s:set tag.",
					url: "wpsa_22-set"
				},
		
				{
					name: "tracerFactory",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Inits the Tracer before rendering Entity fields.",
					url: "wpsa_22-tracerFactory"
				},
		
				{
					name: "pluginsSubMenu",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Generates through successive iterations the list of the plugin submenu.",
					url: "wpsa_22-pluginsSubMenu"
				},
		
				{
					name: "hookPoint",
					prefix: "wpsa",
					tld: "\&quot;apsadmin core tag library\&quot;" ,
					tlddescr: "Defines a hookpoint",
					url: "wpsa_22-hookPoint"
				},
		
		
		
		
				{
					name: "textarea",
					prefix: "wpsf",
					tld: "\&quot;apsadmin form tag library\&quot;" ,
					tlddescr: "Render HTML textarea tag.",
					url: "wpsf_22-textarea"
				},
		
				{
					name: "textfield",
					prefix: "wpsf",
					tld: "\&quot;apsadmin form tag library\&quot;" ,
					tlddescr: "Render an HTML input field of type text",
					url: "wpsf_22-textfield"
				},
		
				{
					name: "checkbox",
					prefix: "wpsf",
					tld: "\&quot;apsadmin form tag library\&quot;" ,
					tlddescr: "Render a checkbox input field",
					url: "wpsf_22-checkbox"
				},
		
				{
					name: "submit",
					prefix: "wpsf",
					tld: "\&quot;apsadmin form tag library\&quot;" ,
					tlddescr: "Render a submit button",
					url: "wpsf_22-submit"
				},
		
				{
					name: "password",
					prefix: "wpsf",
					tld: "\&quot;apsadmin form tag library\&quot;" ,
					tlddescr: "Render an HTML input tag of type password",
					url: "wpsf_22-password"
				},
		
				{
					name: "select",
					prefix: "wpsf",
					tld: "\&quot;apsadmin form tag library\&quot;" ,
					tlddescr: "Render a select element",
					url: "wpsf_22-select"
				},
		
				{
					name: "hidden",
					prefix: "wpsf",
					tld: "\&quot;apsadmin form tag library\&quot;" ,
					tlddescr: "Render a hidden input field",
					url: "wpsf_22-hidden"
				},
		
				{
					name: "radio",
					prefix: "wpsf",
					tld: "\&quot;apsadmin form tag library\&quot;" ,
					tlddescr: "Render a HTML radio (map) input field",
					url: "wpsf_22-radio"
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
