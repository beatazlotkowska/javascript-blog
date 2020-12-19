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

	const links = document.querySelectorAll('.titles a');

	for(let link of links){
		link.addEventListener('click', titleClickHandler);

	}

	const optArticleSelector = '.post', 
		optTitleSelector = '.post-title',
		optTitleListSelector = '.titles';

	function generateTitleLinks(){

		titleList = document.querySelector(optTitleSelector);
		titleList.innerHTML = '';
		console.log('test1:', titleList);


	  /* remove contents of titleList */
		const postTitles = document.querySelectorAll('.post .post-title');
	 	//console.log('test:', postTitles);

	  	for(let postTitle of postTitles){
	  		//console.log('test:', postTitle.innerText);
	  	}
	

	  /* for each article */

	    /* get the article id */
		
		const postIds = document.querySelectorAll('article.post');

	 	//console.log('test:):', postIds);

	 	 for(let postId of postIds){
		  	//console.log('test:', postId.id);
		  }
	    /* find the title element */

	    /* get the title from the title element */

	    /* create HTML of the link */

	    /* insert link into titleList */

	}

	generateTitleLinks();

}