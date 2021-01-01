{'use strict';

	/* document.getElementById('test-button').addEventListener('click', function(){
	  const links = document.querySelectorAll('.titles a');
	  console.log('links:', links);
	}); */

	// const links = document.querySelectorAll('.titles a');

	const titleClickHandler = function(event){
		event.preventDefault();
		const clickedElement = this;
		console.log('Link was clicked!');
		console.log(event);
		/* [DONE] remove class 'active' from all article links  */
		const activeLinks = document.querySelectorAll('.titles a.active');

		for(let activeLink of activeLinks){
			activeLink.classList.remove('active');
		}
		/* [IN PROGRESS] add class 'active' to the clicked link */
		 console.log('clickedElement:' , clickedElement);
		 clickedElement.classList.add('active');
		
		/* [DONE] remove class 'active' from all articles */
		
		const activeArticles = document.querySelectorAll('.posts .post.active');

		for(let activeArticle of activeArticles){
		 	activeArticle.classList.remove('active');
		 }  

		/* get 'href' attribute from the clicked link */
		const href = clickedElement.getAttribute('href');


		/* find the correct article using the selector (value of 'href' attribute) */
		const correctArticle = document.querySelector(href);
		/* add class 'active' to the correct article */
		correctArticle.classList.add('active');
		
	}

	

	const optArticleSelector = '.post', 
		optTitleSelector = '.post-title',
		optTitleListSelector = '.titles';

	function generateTitleLinks(){

	  /* remove contents of titleList */
		titleList = document.querySelector(optTitleListSelector);
		titleList.innerHTML = '';
		//console.log('test1:', titleList);
	
	  /* for each article */
	  	
	  	const articles = document.querySelectorAll(optArticleSelector);
		console.log('test1:', articles);

		let html = '';

	  	for(let article of articles){
	    /* get the article id */
	  		const articleId = article.id;

	    /* find the title element */
	    /* get the title from the title element */

	  		const articleTitle = article.querySelector(optTitleSelector).innerHTML;

	    /* create HTML of the link */
			const linkHTML = '<li><a href="#' + articleId +'"><span>' + articleTitle + '</span></a></li>';

			html += linkHTML;
			
			//titleList.insertAdjacentHTML('beforeend', linkHTML);

	  		//console.log('test:', linkHTML);
	  	}
		
		titleList.innerHTML = html;

		



	    /* insert link into titleList */

	}

		generateTitleLinks();

	const links = document.querySelectorAll('.titles a');
	for(let link of links){
		link.addEventListener('click', titleClickHandler);

	}


}