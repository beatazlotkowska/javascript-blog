{
	'use strict';

	const titleClickHandler = function(event){
		event.preventDefault();
		const clickedElement = this;
		//console.log('Link was clicked!');
		//console.log(event);

		/* [DONE] remove class 'active' from all article links  */
		const activeLinks = document.querySelectorAll('.titles a.active');

		for(let activeLink of activeLinks){
			activeLink.classList.remove('active');
		}

		/* [DONE] add class 'active' to the clicked link */
		// console.log('clickedElement:' , clickedElement);
		 clickedElement.classList.add('active');
	
		/* [DONE] remove class 'active' from all articles */
		const activeArticles = document.querySelectorAll('.posts .post.active');

		for(let activeArticle of activeArticles){
			activeArticle.classList.remove('active');
		 }  

		/* get 'href' attribute from the clicked link */
		const articleSelector = clickedElement.getAttribute('href');
		// console.log('beata' , articleSelector);

		/* find the correct article using the selector (value of 'href' attribute) */
		const targetArticle = document.querySelector(articleSelector);
		//console.log('abc' , targetArticle);

		/* add class 'active' to the correct article */
		targetArticle.classList.add('active');
		//console.log('def' , targetArticle);
	}


	const optArticleSelector = '.post',
	  optTitleSelector = '.post-title',
	  optTitleListSelector = '.titles',
	  optArticleTagsSelector = '.post-tags .list',
	  optArticleAuthorSelector = '.post-author';

	function generateTitleLinks(customSelector = ''){
		//console.log('customSelector' , customSelector);

	  	/* remove contents of titleList */
		const titleList = document.querySelector(optTitleListSelector);
		titleList.innerHTML = '';

		/* find all the articles and save them to variable: articles */
		const articles = document.querySelectorAll(optArticleSelector + customSelector);

		let html = '';  

		/* for each article */
		for (let article of articles) {
	  	
			/* get the article id */
			const articleId = article.getAttribute('id');

			/* find the title element */
			/* get the title from the title element */
			const articleTitle = article.querySelector(optTitleSelector).innerHTML;

			/* create HTML of the link */
			const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
			//console.log('linkhtml' , linkHTML);

			/* insert link into html variable */
			html = html + linkHTML;
		} //zamkniecie petli

	    /* insert link into titleList */

		//titleList.innerHTML = titleList.innerHTML + linkHTML;
		//console.log(titleList);

		/*titleList.insertAdjacentHTML('afterend', linkHTML);
    	// console.log('titleList = ', titleList);*/

		titleList.innerHTML = html;
		//console.log(titleList);

		const links = document.querySelectorAll('.titles a');
		for(let link of links){
			link.addEventListener('click', titleClickHandler);
		}
	} //zamknecie funkcji
	generateTitleLinks();

	function generateTags(){

		/* find all articles */
		const articles = document.querySelectorAll(optArticleSelector);

		/* START LOOP: for every article: */
		for (let article of articles){

	    	/* find tags wrapper */
			const tagWrapper = article.querySelector(optArticleTagsSelector);
			//console.log('aaa:', tagWrapper);

			/* make html variable with empty string */
			let html = '';

			/* get tags from data-tags attribute */
			const articleTags = article.getAttribute('data-tags');
	    	//console.log(articleTags);

	    	/* split tags into array */
			const articleTagsArray = articleTags.split(' ');
			// console.log('articleTagsArray' , articleTagsArray);

			/* START LOOP: for each tag */
			for (let tag of articleTagsArray){
				// console.log ('tag' , tag);

				/* generate HTML of the link */
				const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';
		  		//console.log('link HTML' , linkHTML); 

				/* add generated code to html variable */
				html = html + linkHTML;

			} /* END LOOP: for each tag */

	    	/* insert HTML of all the links into the tags wrapper */
	    	//tagWrapper.innerHTML = tagWrapper.innerHTML + linkHTML;
	    	tagWrapper.innerHTML = html;
	    	//console.log('tagWrapper' , tagWrapper);
		} /* END LOOP: for every article: */

	} // zamkniecie  funkcji
	generateTags();

	//const tagClickHandler = function(event){
	function tagClickHandler(event){

		/* prevent default action for this event */
		event.preventDefault();

	 	/* make new constant named "clickedElement" and give it the value of "this" */
		const clickedElement = this;

	 	/* make a new constant "href" and read the attribute "href" of the clicked element */
		const href = clickedElement.getAttribute('href');

	 	/* make a new constant "tag" and extract tag from the "href" constant */
		const tag = href.replace('#tag-', '');
		//console.log('tag', tag);

	 	/* find all tag links with class active */
		const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
	 	//console.log('tagLinks = ' , tagLinks);

	  	/* START LOOP: for each active tag link */
		for (let tagLink of tagLinks){
	    	/* remove class active */
			tagLink.classList.remove('active');
		} /* END LOOP: for each active tag link */

	  	/* find all tag links with "href" attribute equal to the "href" constant */
		const foundTagLinks = document.querySelectorAll('a[href="' + href + '"]');

		/* START LOOP: for each found tag link */
		for  (let foundTagLink of foundTagLinks) {
			/* add class active */
			foundTagLink.classList.add('active');
		} /* END LOOP: for each found tag link */

		/* execute function "generateTitleLinks" with article selector as argument */
		generateTitleLinks('[data-tags~="' + tag + '"]');
	} // zamkniecie funkcji tagClickHandler


	function addClickListenersToTags(){
		/* find all links to tags */
		const linkTags =  document.querySelectorAll('a[href^="#tag-"]');

		/* START LOOP: for each link */
		for (let linkTag of linkTags) {
			/* add tagClickHandler as event listener for that link */
			linkTag.addEventListener('click' , tagClickHandler);
		} /* END LOOP: for each link */
	} // zamkniecie funkcji addClickListenersToTags
	addClickListenersToTags();


	function generateAuthors(){
		/* find all articles */
		const articles = document.querySelectorAll(optArticleSelector);

		/* START LOOP: for every article: */
		for (let article of articles){

			/* find post author wrapper */
			const authorWrapper = article.querySelector(optArticleAuthorSelector);

			/* make html variable with empty string */
			let html = '';

			/* get tags from data-author attribute */
			const tagAuthor = article.getAttribute('data-author');

			/*generate HTML of the link*/
			const linkHTML = 'by ' + '<a href="#author-' + tagAuthor + '">' + tagAuthor + '</a>';

			/*add generated code to  HTML variable */
			html = html + linkHTML;

			/*insert HTML of all the links into the tags wrapper*/ 
    		authorWrapper.innerHTML = html; 
    	} /* END LOOP: for every article: */
		


	} // zamkniecie funkcji  generateAuthors
	generateAuthors (); // wywolanie funkcji


	function addClickListenersToAuthors(){

		/* find all links to tags */
		const linkAuthors = document.querySelectorAll('a[href^="#author-"]');

		/* START LOOP: for each link */
		for(let linkAuthor of linkAuthors){
			/* add tagClickHandler as event listener for that link */
			linkAuthor.addEventListener('click', authorClickHandler);
		} /* END LOOP: for each link */

	} // zamkiecie funkcji  addClickListenersToAuthors
	addClickListenersToAuthors();

	function authorClickHandler() {

		/* prevent default action for this event */
		event.preventDefault();

		/* make new constant named "clickedElement" and give it the value of "this" */
	 	const clickedElement = this;

	 	/* make a new constant "href" and read the attribute "href" of the clicked element */
	 	const href = clickedElement.getAttribute('href');

	 	/* make a new constant "tag" and extract tag from the "href" constant */
	 	const tag = href.replace('#author-', '');
	 	//console.log('tag', tag);

	 	/* find all tag links with class active */
	 	const authorLinks = document.querySelectorAll('a.active[href^="#author-"]');
	 	//console.log('authorLinks = ' , authorLinks);

		/* START LOOP: for each active tag link */
	  	for (let authorLink of authorLinks){
			/* remove class active */
			authorLink.classList.remove('active');
	  	} /* END LOOP: for each active tag link */

	  	/* find all tag links with "href" attribute equal to the "href" constant */
	 	const foundAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');

	 	/* START LOOP: for each found tag link */
	  	for (let foundAuthorLink of foundAuthorLinks) {
			/* add class active */
			foundAuthorLink.classList.add('active');
		} /* END LOOP: for each found tag link */

		/* execute function "generateTitleLinks" with article selector as argument */
		generateTitleLinks('[data-author="' + tag + '"]');
	} // zamkniecie funkcji authorClickHandler

}
