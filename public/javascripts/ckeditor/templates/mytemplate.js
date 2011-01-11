// Register a templates definition set named "default".
CKEDITOR.addTemplates( 'mytemplate',
{
	// The name of sub folder which hold the shortcut preview images of the
	// templates.
	imagesPath : 'images/' ,

	// The templates definitions.
	templates :
		[
			{
				title: 'dacano template',
				image: 'template1.gif',
				description: 'One main image with a title and text that surround the image.',
				html:
					'<h3>' +
						'<img style="margin-right: 10px" height="100" width="100" align="left"/>' +
						'Type the title here'+
					'</h3>' +
					'<p>' +
						'Type the text here' +
					'</p>'
			}
		]
});