# projectthree

# projectthree
disclaimer - kindly do not mind the informal tone and grammatical errors

project in short: (sorry for the essay below, but ive tried to log everything possible)
this project is almost like an instagram clone but built as a personal dashboard. each page our like the pages in instagram but coded according to a personal dashboard. 


why i build this:
the reason i wanna build this is because my social media addiction is off the charts rn
i also felt much more confident in reach after my last project but that was just a one page dashboard, so i wanted this one to be multiple pages and many more components and styles instead of just one app.css, and i also wanted to somehow use an api in here. 
the reason i started this project so late was bec school and i also didnt know what to do so that converted to demotivation. but this idea just randomly clicked and i was so excited. 


all the features in details

HOME

the home page has a sidebar, stories, and a grid
the sidebar has a profile section where ur username is editable, and then pages (read below), and also a settings dropdown for more info about this project.

the home page has stories the way we usually see them (ive tried my best to make them look as similar to the ig clone) but instead of stories it actually has journalling prompts. the navigation of the stories is the way we navigate stories on mobiles. originally i wanted thr stories to be able to be replied to and then add them to the saved tab.

and the grid is a 9x9 grid to mimic the way our profiles our shown on the the desktop versions of ig. here, the user has the option to upload photod accprding to them and delete too.

EXPLORE
explore is the most interesting page i built because i used an api for the first time. the concept here is to show news from the gnews api in the form of the feed we see on instagram. each post card has the username = where the news is from, all the time stamps are 'just now' and then it has the main photo of the article, a few action buttons (i wanted to make these working) ad then the article title and a description, but instead of the read more expanding it directly leads you to the article url. the api pulls all technology news available (max 10, since free version) and display it this way. this was way more easier than i originally thought. i built this page in the end.

DIRECT MESSAGES
this was definitely my most innovative idea for this project, where i wanted the dms to look exactly the way they look on the desktop, but as a task manager. imagine instagram leading u here instead of texting, productivity 📈. 
the idea is that each 'person' ur texting is actually a task list, and there are a few default task lists here. and then when you click on the task list, instead of seeing messages, you see - the list of tasks in that task list. the to do list is basic and it was easier to build this this time since i had a to do component in my last project as well, the only interesting part was merging it with the code of the task list. it has pretty simply features - checkbox and a delete button.

SAVED
here, instead of ur saved posts, you have the option of creating journal entries/a brain dump in like a sticky note formation. here, the creating modal = to the editing modal since it saved time while coding. and u can create as many as you want. if i had more time for this project i would definitely add backend to this so that you could save all these entries, bec it was frustrating coding all the css when it was refreshing every single time and i had to create 7-8 journal entries manually everytime 😭. i made the buttons blue bec even tho they dont look the best, they're kinda nostalgic to how instagram was in the past

and then lastly, the reels section
this section was initally going to be like q wuick links section where every reel was gonna be a commonly used website but i realised that wouldnt rly make sense, instead of scrolling you could just type in the website. so i scratched the whole thing (😥) and then decided it'd be better to hv the og reel format, but instead of all the sad, pessimistic reels we see everyday, something that would cheer the user up. so i just downloaded 5 nice looking reels from canva and then added em on here, and created a scrolling structure (i tried to mimic the css the same way but it is def not a 100% similar), and the mute/unmute button (which is still a little buggy visually but works). i think if i decide to put more time into the project, i will also make this api-based

thats all the features described in detail

HOW I MADE IT
- react
- CSS (lot of it 😭)
- gnews api
- github
- netlify for deploying
- chatgpt for debugging



STRUGGLES
- there were 2-3 times i had to work with z index, even the settings dropdown was supposed to be a huge window, but the z index didnt work (thats why if u chekc the code u'll see weird values of z index like 9999 lol) but then i removed all of that and just avoided using it
- positioning in css


MISTAKES i would prevent if i had to start again
- would definitely use tailwind or smth bec the css ate my head (writing everything was NOT fun)
- story navigation took a lot fo work, first i decided on buttons to navigate but they looked ugly and again z index was problematic so i decided why not make it the way we use em on phones - just clicking on the left and right halfs of the story to navugate
- deciding diff components, first i created a mainpage.js bec i thought i'll have everything here (was my first time working with multiple pages so i didnt know what i was doing), but then i realised there is already app.js for that so removed that and then made diff components. but once i got the hang of it, it was funn
- i finally understood a lil bit of how git works (still a lil bit tho), and while making my last commit i realised how to add file-specific commits 😭
- when to use indexes vs ids vs keys - still some confusion. unique ids are better for to lists and not positional numbers.
- SYNTAX UGHGHHGHGHG
- importing - i didnt create the reels in public, but at the same level as components inside src. when u add a folder to public any file can access it without impoting but when that folder is added inside src at the same level as components u have to import em
- debugging, but AI did help with this, the warnings were very annoying and especially when editing the code there was this pressure bec the warning showed immediately, but in the end i just figured i'll close the terminal and just FINISH WRITING THE CODE and get back to the errors
- i wanted to add everthing at once, but that doesnt work, u just go about develop one feature at a time in diff tabs, and thats how i build the whole project. i also got a lot of ideas while executing so basically planning beforehand is a scam 😭
- making two components link - to make it work, u hv to add data to app js and then accept the props in each component. very easy but i didnt understand so i fixed everything else but this and that wasted a lot of time

what more i would add if i had more time :- (this list was actually bigger, but im proud of myself after executing a lot of things from this list)
- the story replying and saving them to journals ✅ (DONE IN PRESSURE IN THE LAST HOUR)
- I would love to add backend to this project, and also as a learning tool, but ugh the deadline 😭. i wanna learn how users can create accounts, and how databases work
- changing the story color after viewing the story (did try to work on that but it didnt for some reason) ✅
- more controls in the to do lists (dates, subtasks etc)
- reels as an api too
- RESPONSIVENESS - bec when you code with half vs code and half google chrome u have to keep resizing the windows to see the actual css work 😭

everything i ENJOYED :-
- if else statements - i wrote em down in english first (my files are flooded with comments), to make it easier for me to understand
- the feeling after finally debugging (JOY)
- i realised along the way that i didnt have to out every warning into chatgpt and figure it out, i was actually able to figure out the warnings by myself and figure it out myself (which was faster too)
