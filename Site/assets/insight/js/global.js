$(document).ready(function(){
	
	touchMove = function(event) {
	// Prevent scrolling on this element
	event.preventDefault();
	}
	
	/* ---------------------------------- fade page in	 */
	
	$("body").css("display", "none");
 
    $("body").fadeIn(300);
 
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
       
    });
 
    function redirectPage() {
        window.location = linkLocation;
    }
	

	/* ---------------------------------- drag and drop	 */
	$( init );
	function init() {
		$(".chart_txt2").hide();
		
		$('.chart_txt').draggable({
			containment: 'window'
		});
		
		$('.drop').droppable( {
			drop: handleDropEvent,
			hoverClass: 'dropHover',
		});
	}
	
	function handleDropEvent( event, ui ) {
		var draggable = ui.draggable;
		ui.draggable.position( { of: $(this), my: 'center center', at: 'center center' } );
		ui.draggable.children(".chart_txt2").show();
		ui.draggable.addClass('testing').removeClass('chart_txt');
	}

	/* ---------------------------------- acive classses */
	/* about us */
	$('.about_links li').click(
		function(highlighted) {
	        highlighted.preventDefault();
	        var $this = $(this);
	        $this.closest('ul').children('li').removeClass('s');
	        $this.addClass('s');
		 	}
 	);

	/* ---------------------------------- about us content */
	var title = new Array();
		title[01] =
			'<h5>About inSight</h5> When science classes use fact memorization to prepare for standardized tests, students lose interest and fail to see the connection to the real word.<p>inSight is an interactive standardized testing solution based on the core science standards of the fifth grade Ohio Achievement Assessment (OAA). This project rethinks standardized testing though tablet- and web-based approach. It allows students to demonstrate conceptual knowledge and creative problem solving in an engaging, exploratory format.</p> <div class="ss_cs"> <div class="pic"> <img src="img/ss_cs1.png" alt="" height="130" /> </div> <div class="bio_desc"> <h5>Case Study 1</h5> This question asks students to demonstrate their knowledge of erosion through scientific observation. Students view a simulation of two hills in the rain: one with plants and one without and explain the effects of plants on erosion. </div> <div class="clearfix"> </div> </div>	 <div class="ss_cs">  <div class="pic"> <img src="img/ss_cs2.png" alt="" height="130" /> </div> <div class="bio_desc"> <h5>Case Study 2</h5> A simulated experiment allows students to observe and record plant growth over time. After filling in the data table, they are asked to explain the effect of light on plant growth and the flow of energy in an ecosystem. </div> <div class="clearfix"> </div> </div> <center> <a href="login.html"><span class="txt"><img src="img/txt_launch.png"/></span></a> </center>';
		
		title[02] =	
			'<h5>Ohio Achievement Assessment</h5> inSight is an interactive standardized testing solution based on the core science standards of the fifth grade Ohio Achievement Assessment.	 <div class="spacer"></div> <div class="clearfix"></div> <center><img src="img/oaa.png" alt="" width="600" height="308" /></center>';
			
		title[03] =
			'<div class="moreinfo"><h5>Process PDF</h5> View the detailed report about this project, including our goals, research, design process, user testing, and project analysis. <br/><a href="http://homepages.uc.edu/~szubskma/insight/inSight_CapstoneProcess.pdf" rel="external" target="_blank">View the Process PDF</a> <p><h5>Capstone Journal</h5> This website documents the research and design done during the first quarter of our project. <br/><a href="http://homepages.uc.edu/~szubskma/insight/Journal" rel="external" target="_blank">Visit the Research Journal</a></p> <p><h5>DAAPWorks</h5> inSight is part of DAAPWorks 2012. Check out this and other projects at the Digital Design 2012 promotional website. <br/><a href="http://ucdd2012.com/" rel="external" target="_blank">Visit the Digital Design 2012 site</a></p></div>';
		title[04] =
			'<h5>About Us</h5> We are seniors in the Digital Design Program at the College of Design, Architecture, Art, and Planning at the University of Cincinnati. We will be graduating in June 2012. <div class="bio"> <div class="pic"><img src="img/pic_matt.jpg" alt="" width="185" height="200" /></div> <div class="bio_desc"> <h5>Matt Denzer</h5> Matt has always had a love for technology and creative problem solving, and hopes to meld these interests into a career that positively impacts the world. His current passions are motion graphics, photography, graphic design, and playing the banjo. <a href="http://www.mattdenzer.com/" target="_blank" rel="external"><h6>Portfolio</h6> mattdenzer.com</a> </div> <div class="clearfix"></div> <div class="bio"> <div class="pic"><img src="img/pic_maria.jpg" alt="" width="185" height="200" /> </div> <div class="bio_desc"> <h5>Maria Szubski</h5> Maria is in interactive designer who loves to design products that help people and are easy to use. In her free time she enjoys reading, yoga, traveling, and all things related to technology. <a href="http://mariaszubski.com/" rel="external" target="_blank"><h6>Portfolio</h6> mariaszubski.com</a> </div> <div class="clearfix"></div> </div>	 </div>	';




	$("li#about01").click(function(event){
		$("div.about_details").html(title[01]);
	});
	
	$("li#about02").click(function(event){
		$("div.about_details").html(title[02]);
	});
	
	$("li#about03").click(function(event){
		$("div.about_details").html(title[03]);
	});
	
	$("li#about04").click(function(event){
		$("div.about_details").html(title[04]);
	});
	

	
	
	/* ---------------------------------- toggle info panels */	

	
	$(".cs1bg #info").click(
   		function () {
			$("div.info_container").fadeToggle(100,"swing");
			if ($(".answer").css("display") == "none"){
		        $(".begin").toggle();
		        $("span.essay").fadeToggle(0,"swing");
		    }
		    else{
		        $(".begin").hide();
		        $(".essay").hide();
		    }
	        var $this = $(this);
	        $this.toggleClass('_s');
	        $('#replay').toggleClass('_i');
	        $("#video_cs1").css("visibility","visible");
	        
	   
	        
	        if ($(".essay_02").css("display") == "none"){
		        $("div.chart").show();
		        $("div.chart_btns").fadeIn(100,"swing");
		        $("span.next_01").fadeToggle(0,"swing");
		    } else{
		        $(".begin").hide();
		    }
	        

		    if ($(".popover").css("display") == "none"){
		    } else{
		        $(".begin").hide();
		        $(".essay").hide();
		        $("div.chart").hide();
		        $("div.chart_btns").hide();
		        $("span.next_01").hide();
		        
		        
		    }
	       
		    
			if (!$('video')[0].paused) {
			   $('video')[0].pause();
			} else {
			   $('video')[0].play();
			}
		}
	);
	
	
	$(".cs2bg #info").click(
   		function () {
			$("div.info_container").fadeToggle(100,"swing");
			
	        var $this = $(this);
	        $this.toggleClass('_s');
	        $('#replay').toggleClass('_i');
	        $("#video_cs1").css("visibility","visible");
	        
	   
	   
	  		if ($(".answer").css("display") == "none"){
		        $(".begin").toggle();
		        $("span.essay").fadeToggle(0,"swing");
		    }
		    else{
		        $(".begin").hide();
		        $(".essay").hide();
		    }
	        
	        if ($(".essay_02").css("display") == "none"){
		        $("div.chart").show();
		        $("div.chart_btns").fadeIn(100,"swing");
		        $("span.next_01").fadeToggle(0,"swing");
		    } else{
		        $(".begin").hide();
		    }
	        
	         if ($(".answer").css("display") == "none"){  
		    } else{
		        $(".begin").hide();
		        $("div.chart").hide();
		        $("div.chart_btns").hide();
		        $("span.next_01").hide();
		    }
		    
		    if ($(".popover").css("display") == "none"){
		    	
		    } else{
		        $(".begin").hide();
		        $("div.chart").hide();
		        $("div.chart_btns").hide();
		        $("span.next_01").hide();
		        $(".essay").hide();	
		        
		    }
	       
		    
			if (!$('video')[0].paused) {
			   $('video')[0].pause();
			} else {
			   $('video')[0].play();
			}
		}
	);

	
	$(".essay").hide();
	
	$(".begin").click(
   		function () {
			$("div.info_container").fadeToggle(100,"swing");
			$("div.chart").fadeIn(100,"swing");
	        $("div.chart_btns").fadeIn(100,"swing");
	        $("span.next_01").fadeToggle(0,"swing");
			$("span.begin").fadeToggle(0,"swing");
			$("span.essay").fadeToggle(0,"swing");
	      	$('#info').toggleClass('_s');
	      	$('#replay').toggleClass('_i');
	      	$("#video_cs1").css("visibility","visible");
	      	$('#video_cs1').get(0).play();
	      	
	        
		}
	);
	
	
	
	/* ---------------------------------- toggle sound */	
	$("#sound").click(
   		function () {
			$("div.sound_overlay").fadeToggle(100,"swing");
	        var $this = $(this);
	        $this.toggleClass('_s');
		}
	);
	
	$(".sound_overlay span").click(
   		function () {
	        var $this = $(this);
	        $this.toggleClass('checked');
	        $this.toggleClass('unchecked');
		}
	);
	
	
	
	/* ---------------------------------- toggle replay */	
	$("#replay").click(
   		function () {
	        $('#video_cs1').get(0).currentTime = 0;
	        $('#video_cs1').get(0).play();
	       
		}
	);
	
	
	
	
	/* ---------------------------------- toggle essay */	
	$(".answer").hide();
	$(".again").hide();
	$(".submit_essay").hide();
	
	$(".essay").click(
   		function () {
			$("div.answer").fadeToggle(100,"swing");
			$("span.essay").fadeToggle(0,"swing");
			$("span.again").fadeToggle(0,"swing");
			$("span.submit_essay").delay(0).fadeToggle(100,"swing");
			$('#replay').toggleClass('_i');
			$("#video_cs1").get(0).pause();
		}
	);
	
	$(".again").click(
   		function () {
			$("div.answer").fadeToggle(100,"swing");
			$("span.essay").fadeToggle(0,"swing");
			$("span.essay_02").fadeToggle(0,"swing");
			$("span.again").fadeToggle(0,"swing");
			$("span.submit_essay").fadeToggle(0,"swing");
			$('#replay').toggleClass('_i');
			$("#video_cs1").get(0).play();
		}
	);
	
	/* ---------------------------------- cs2 */
	
	$(".chart").hide();
	$(".chart_btns").hide();
	$(".next_01").hide();
	$(".essay_02").hide();
	$(".again_02").hide();
	

	$(".next_01").click(
   		function () {
   			$("span.next_01").fadeToggle(0,"swing");
			$("span.essay_02").fadeToggle(0,"swing");
			$("div.chart").fadeToggle(100,"swing");
	        $("div.chart_btns").fadeToggle(100,"swing");
          	$("#video_cs2").css("visibility","visible");
	        $("#video_cs2").get(0).play();
	        
		}
	);
	
	$(".essay_02").click(
   		function () {
			$("span.essay_02").fadeToggle(0,"swing");
			$("div.answer").fadeToggle(100,"swing");
			$("span.again").fadeToggle(100,"swing");
			$("span.submit_essay").fadeToggle(0,"swing");
			$(".again_02").fadeToggle(100,"swing");
			$("#video_cs2").css("visibility","hidden");
			$("#video_cs2").get(0).pause();
		}
	);

	$(".again_02").click(
   		function () {
			$("div.answer").fadeToggle(100,"swing");
			$("span.essay").fadeToggle(0,"swing");
			$("span.essay_02").fadeToggle(0,"swing");
			$("span.again_02").fadeToggle(0,"swing");
			$("span.submit_essay").fadeToggle(0,"swing");
			$('#replay').toggleClass('_i');
			$("#video_cs2").css("visibility","visible");
			$("#video_cs2").get(0).play();
		}
	);



	/* ---------------------------------- toggle submit overlay */	
	$(".submit_popover").hide();
	$(".next_q").hide();
	
	$(".submit_essay").click(
   		function () {
			$(".popover").show();
		}
	);
	
	$(".back02").click(
   		function () {
			$(".popover").hide();
		}
	);
	
	$(".submit02").click(
   		function () {
	   		$(".popover").hide();
			$("div.submit_popover").fadeToggle(100,"swing");
			$("div.answer").fadeToggle(100,"swing");
			$("span.again").fadeToggle(0,"swing");
			$("span.again_02").fadeToggle(0,"swing");
			$("span.submit_essay").fadeToggle(0,"swing");
			$("span.next_q").fadeToggle(0,"swing");
		}
	);
	
	
	
	/* ---------------------------------- main menu */	
	var header = new Array();
		header[01] = 'Test Sections';
		header[02] = 'All Questions';
		header[03] = 'Earth &amp; Space Science Questions';
		header[04] = 'Life Science Questions';
		header[05] = 'Physical Science Questions';
	
	var desc = new Array();
		desc[01] = 'Click on a section to view test questions:';
		desc[02] = 'Click on a thumbnail to answer the question. Use the arrows to view more questions.';
	
	
	
	$(".cs1_es").hide();
	$(".cs1_ls").hide();
	$(".cs1_ps").hide();
	$(".cs2_es").hide();
	$(".cs2_ls").hide();
	$(".cs2_ps").hide();
	$(".cs3_es").hide();
	$(".cs3_ls").hide();
	$(".cs3_ps").hide();
	$(".cs4_es").hide();
	$(".cs4_ls").hide();
	$(".cs4_ps").hide();
	$(".cs5_es").hide();
	$(".cs5_ls").hide();
	$(".cs5_ps").hide();
	$(".cs6_es").hide();
	$(".cs6_ls").hide();
	$(".cs6_ps").hide();
	$(".pagination").hide();
	$(".mm_arrow_l").hide();
	$(".mm_arrow_r").hide();
	$("#back").hide();
	$(".popover").hide();


	
	$("#back").click(
   		function () {
			$("h4").html(header[01]);
			$("div.mm_desc").html(desc[01]);
			$("#back").hide();
			$(".mm_all").fadeToggle(100,"swing");
			$(".mm_es").fadeToggle(250,"swing");
			$(".mm_ls").fadeToggle(350,"swing");
			$(".mm_ps").fadeToggle(450,"swing");
			$(".cs1_es").hide();
			$(".cs1_ls").hide();
			$(".cs1_ps").hide();
			$(".cs2_es").hide();
			$(".cs2_ls").hide();
			$(".cs2_ps").hide();
			$(".cs3_es").hide();
			$(".cs3_ls").hide();
			$(".cs3_ps").hide();
			$(".cs4_es").hide();
			$(".cs4_ls").hide();
			$(".cs4_ps").hide();
			$(".cs5_es").hide();
			$(".cs5_ls").hide();
			$(".cs5_ps").hide();
			$(".cs6_es").hide();
			$(".cs6_ls").hide();
			$(".cs6_ps").hide();
			$(".pagination").hide();
			$(".mm_arrow_l").hide();
			$(".mm_arrow_r").hide();
		}
	);
	
	
	$(".mm_all").click(
   		function () {
			$("h4").html(header[02]);
			$("div.mm_desc").html(desc[02]);
			$("#back").show();
			$(".mm_all").hide();
			$(".mm_es").hide();
			$(".mm_ls").hide();
			$(".mm_ps").hide();
			$(".cs1_es").fadeToggle(100,"swing");
			$(".cs2_ls").fadeToggle(250,"swing");
			$(".cs3_ps").fadeToggle(350,"swing");
			$(".cs4_es").fadeToggle(450,"swing");
			$(".cs5_ls").fadeToggle(550,"swing");
			$(".cs6_ps").fadeToggle(650,"swing");
			$(".pagination").show();
			$(".mm_arrow_l").show();
			$(".mm_arrow_r").show();
		}
	);
	
	
	
	$(".mm_es").click(
   		function () {
			$("h4").html(header[03]);
			$("div.mm_desc").html(desc[02]);
			$("#back").show();
			$(".mm_all").hide();
			$(".mm_es").hide();
			$(".mm_ls").hide();
			$(".mm_ps").hide();
			$(".cs1_es").fadeToggle(100,"swing");
			$(".cs2_es").fadeToggle(250,"swing");
			$(".cs3_es").fadeToggle(350,"swing");
			$(".cs4_es").fadeToggle(450,"swing");
			$(".cs5_es").fadeToggle(550,"swing");
			$(".cs6_es").fadeToggle(650,"swing");
			$(".pagination").show();
			$(".mm_arrow_l").show();
			$(".mm_arrow_r").show();
		}
	);
	
	
	
	$(".mm_ls").click(
   		function () {
			$("h4").html(header[04]);
			$("div.mm_desc").html(desc[02]);
			$("#back").show();
			$(".mm_all").hide();
			$(".mm_es").hide();
			$(".mm_ls").hide();
			$(".mm_ps").hide();
			$(".cs1_ls").fadeToggle(100,"swing");
			$(".cs2_ls").fadeToggle(250,"swing");
			$(".cs3_ls").fadeToggle(350,"swing");
			$(".cs4_ls").fadeToggle(450,"swing");
			$(".cs5_ls").fadeToggle(550,"swing");
			$(".cs6_ls").fadeToggle(650,"swing");
			$(".pagination").show();
			$(".mm_arrow_l").show();
			$(".mm_arrow_r").show();
		}
	);
	
	
	
	$(".mm_ps").click(
   		function () {
			$("h4").html(header[05]);
			$("div.mm_desc").html(desc[02]);
			$("#back").show();
			$(".mm_all").hide();
			$(".mm_es").hide();
			$(".mm_ls").hide();
			$(".mm_ps").hide();
			$(".cs1_ps").fadeToggle(100,"swing");
			$(".cs2_ps").fadeToggle(250,"swing");
			$(".cs3_ps").fadeToggle(350,"swing");
			$(".cs4_ps").fadeToggle(450,"swing");
			$(".cs5_ps").fadeToggle(550,"swing");
			$(".cs6_ps").fadeToggle(650,"swing");
			$(".pagination").show();
			$(".mm_arrow_l").show();
			$(".mm_arrow_r").show();
		}
	);
	

	
	$(".cs1_ls").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	$(".cs1_ps").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	$(".cs2_es").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	

	
	$(".cs2_ps").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);


	$(".cs3_es").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	$(".cs3_ls").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	$(".cs3_ps").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	$(".cs4_es").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	$(".cs4_ls").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	$(".cs4_ps").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);


	$(".cs5_es").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	$(".cs5_ls").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	$(".cs5_ps").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	$(".cs6_es").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	$(".cs6_ls").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	$(".cs6_ps").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);


	
	$(".continue").click(
   		function () {
			$(".popover").fadeToggle(50,"swing");
		}
	);
	
	
	
	
	$(".popover_saving").delay(2230).fadeOut(00);
	$(".mainp").delay(2280).fadeIn(20);

	

});