// Copyright (c) 2015 LFHC-Shehzad and Lohn

	$('#breadcrumbs').hide();

	$('.actions.dropdown').hide();

	$('#visits-list').hide();

	$('header').hide();

	$('.visit-actions.active-visit').hide();

	$('.ui-tabs-nav').hide();

	var elements = document.getElementsByClassName('view-details');
		for (i=0; i<elements.length; i++) { 
		elements[i].click(); 
	}
	