var curr_page = 0;
var max_page = 2;

let chapter_num = ["Chapter One", "Chapter Two", "Chapter Three"];
let chapter_name = ["My Childhood", "Teen Life", "My Future"];
let chapter_text = ["My childhood is one of a rocky start of my journey into becoming the man I am today. For starters, my childhood was composed of a split parenthood lifestyle, where I’d live the majority of the time with my mom, then the minority with my dad. My childhood was one of great confusion on both sides of my parenting, which resulted in me having to grow up at a very young age, but, I don’t regret this because it allowed me to pursue my passion with no distracting effects. As a child, I’d always go to Radio Shack and buy random cables in an attempt to make a \“Homemade DJ Kit\”; and after many attempts, I was finally successful in rigging together a “DJ Kit” with my first computer and some random boomboxes I found at Best Buy. This is how I knew I wanted to be an engineer. As a child, I never really participated in normal activities; I never trick or treated, or went to theme parks. I was always reading books, more specifically about technology, science, or most importantly for me at least; Steve Jobs, and his legacy at Apple. Steve Jobs is a huge inspiration for me because he showed me, that through sheer motivation and work, and dedication to the advancement of technology; you can truly make a large change in society.",
"My teen life was quite complex, because there was always conflict between my parents, but, this allowed me to further dive into my passion of technology and engineering. I started to learn more about the small intricacies of programming and design, but more importantly; I began appreciating the knowledge that was openly shared to us in an institutionalized school setting. I began to appreciate the classes like math and science that I before, disliked because of the rigor of the courses. I grew hungrier to learn more. Then, the COVID-19 Pandemic hit and we were bound to stay at home in quarantine. Though some people disliked this (even at times I had too) because of the lack of socialization, I took this as a huge opportunity for the sprouting of my knowledge and learning more which could make a big impact on my goals and my passion. I started learning more about app development, machine learning, web design, and hardware design. I even founded my own technology company in which I want to pursue after college. All of this I would say was derived from the COVID-19 Pandemic; because even though I lacked the socialization I had before, it allowed me to find time to find who I truly am and gain confidence in my personality.",
"As for my future aspirations, my goal would now currently be to get through the last couple months of senior year and graduate with prolific grades, so that I can say that I truly feel accomplished for the work that I produced in high school. But most importantly, I’d like to attend Princeton University in order to pursue my degrees in Electrical Engineering & Computer Science, Quantum Physics, and my minor in business. After college, I want to get a job as a Machine Learning engineer so that I can retain the experience I need for engineering at a corporate level, so I can later apply that to my own company and startup when building the foundation. For my company, I want it to be focused on consumer technology, as well as experimental technology and Artificial Intelligence. I want to use my power as a company owner to help people, and change society for the better the same way Steve Jobs did with his work at Apple. Most importantly, I want to reach the personal fulfillment and satisfaction of gaining all my knowledge, and publishing my personal work that could help advance STEM for decades to come."
];

function setPage(input) {
   let page_input = document.getElementById("page-input")
   page_input.onkeydown = function(e) {
      if (e.keyCode == 13) {
         curr_page = parseInt(page_input.value) - 1;
         if (isNaN(curr_page)) {alert("Please Enter A Valid Page Number From 1 To 3!");}
         else {setNewPage("tb");}
      }
   }
}

function setNewPage(input_type) {
   if (input_type == "back") {
      curr_page -= 1;
      if (curr_page + 1 > 1) {document.getElementById("forward-arrow").style.opacity = "1";}
      if (curr_page + 1 == 1) {document.getElementById("back-arrow").style.opacity = "0";}
   }
   else if (input_type == "forward") {
      curr_page += 1;
      if (curr_page == max_page) {document.getElementById("forward-arrow").style.opacity = "0";}
      if (curr_page + 1 > 1) {document.getElementById("back-arrow").style.opacity = "1";}
   }
   else if (input_type == "tb") {
      curr_page = curr_page;
      if (curr_page + 1 == max_page + 1) {document.getElementById("forward-arrow").style.opacity = "0";}
      else {document.getElementById("forward-arrow").style.opacity = "1";}
      if (curr_page + 1 == 1) {document.getElementById("back-arrow").style.opacity = "0";}
      else {document.getElementById("back-arrow").style.opacity = "1";}
   }

   if (curr_page + 1 < 1 || curr_page + 1 > max_page + 1) {alert("Page Does Not Exist!");}
   else {
      document.getElementById("content").style.opacity = "0";
      
      setTimeout(function() {
         document.getElementById("page-num-top").innerHTML = "Toppin " + (curr_page + 1).toString();
         document.getElementById("page-input").placeholder = curr_page + 1;
         document.getElementById("chapter-num").innerHTML = chapter_num[curr_page];
         document.getElementById("chapter-name").innerHTML = chapter_name[curr_page];
         document.getElementById("chapter-text").innerHTML = chapter_text[curr_page];
         document.getElementById("content").style.opacity = "1";
      }, 300);
   }  
}