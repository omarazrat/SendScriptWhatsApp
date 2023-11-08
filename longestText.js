async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(` LONGEST TEXT, WITH ♥ TO YOU :)

Hello, everyone! This is the LONGEST TEXT EVER! I was inspired by the various other "longest texts ever" on the internet, and I wanted to make my own.
So here it is! This is going to be a WORLD RECORD! This is actually my third attempt at doing this.
The first time, I didn't save it.
The second time, the Neocities editor crashed.
Now I'm writing this in Notepad, then copying it into the Neocities editor instead of typing it directly in the Neocities editor to avoid crashing.
It sucks that my past two attempts are gone now.
Those actually got pretty long.
Not the longest, but still pretty long.
I hope this one won't get lost somehow.
Anyways, let's talk about WAFFLES! I like waffles.
Waffles are cool.
Waffles is a funny word.
There's a Teen Titans Go episode called "Waffles" where the word "Waffles" is said a hundred-something times.
It's pretty annoying.
There's also a Teen Titans Go episode about Pig Latin.
Don't know what Pig Latin is? It's a language where you take all the consonants before the first vowel, move them to the end, and add '-ay' to the end.
If the word begins with a vowel, you just add '-way' to the end.
For example, "Waffles" becomes "Afflesway".
I've been speaking Pig Latin fluently since the fourth grade, so it surprised me when I saw the episode for the first time.
I speak Pig Latin with my sister sometimes.
It's pretty fun.
I like speaking it in public so that everyone around us gets confused.
That's never actually happened before, but if it ever does, 'twill be pretty funny.
By the way, "'twill" is a word I invented recently, and it's a contraction of "it will".
I really hope it gains popularity in the near future, because "'twill" is WAY more fun than saying "it'll".
"It'll" is too boring.
Nobody likes boring.
This is nowhere near being the longest text ever, but eventually it will be! I might still be writing this a decade later, who knows? But right now, it's not very long.
But I'll just keep writing until it is the longest! Have you ever heard the song "Dau Dau" by Awesome Scampis? It's an amazing song.
Look it up on YouTube! I play that song all the time around my sister! It drives her crazy, and I love it.
Another way I like driving my sister crazy is by speaking my own made up language to her.
She hates the languages I make! The only language that we both speak besides English is Pig Latin.
I think you already knew that.
Whatever.
I think I'm gonna go for now.
Bye! Hi, I'm back now.
I'm gonna contribute more to this soon-to-be giant wall of text.
I just realised I have a giant stuffed frog on my bed.
I forgot his name.
I'm pretty sure it was something stupid though.
I think it was "FROG" in Morse Code or something.
Morse Code is cool.
I know a bit of it, but I'm not very good at it.
I'm also not very good at French.
I barely know anything in French, and my pronunciation probably sucks.
But I'm learning it, at least.
I'm also learning Esperanto.
It's this language that was made up by some guy a long time ago to be the "universal language".
A lot of people speak it.
I am such a language nerd.
Half of this text is probably gonna be about languages.
But hey, as long as it's long! Ha, get it? As LONG as it's LONG? I'm so funny, right? No, I'm not.
I should probably get some sleep.
Goodnight! Hello, I'm back again.
I basically have only two interests nowadays: languages and furries.
What? Oh, sorry, I thought you knew I was a furry.
Haha, oops.
Anyway, yeah, I'm a furry, but since I'm a young furry, I can't really do as much as I would like to do in the fandom.
When I'm older, I would like to have a fursuit, go to furry conventions, all that stuff.
But for now I can only dream of that.
Sorry you had to deal with me talking about furries, but I'm honestly very desperate for this to be the longest text ever.
Last night I was watching nothing but fursuit unboxings.
I think I need help.
This one time, me and my mom were going to go to a furry Christmas party, but we didn't end up going because of the fact that there was alcohol on the premises, and that she didn't wanna have to be a mom dragging her son through a crowd of furries.
Both of those reasons were understandable.
Okay, hopefully I won't have to talk about furries anymore.
I don't care if you're a furry reading this right now, I just don't wanna have to torture everyone else.
I will no longer say the F word throughout the rest of this entire text.
Of course, by the F word, I mean the one that I just used six times, not the one that you're probably thinking of which I have not used throughout this entire text.
I just realised that next year will be 2020.
That's crazy! It just feels so futuristic! It's also crazy that the 2010s decade is almost over.
That decade brought be a lot of memories.
In fact, it brought be almost all of my memories.
It'll be sad to see it go.
I'm gonna work on a series of video lessons for Toki Pona.
I'll expain what Toki Pona is after I come back.
Bye! I'm back now, and I decided not to do it on Toki Pona, since many other people have done Toki Pona video lessons already.
I decided to do it on Viesa, my English code.
Now, I shall explain what Toki Pona is.
Toki Pona is a minimalist constructed language that has only ~120 words! That means you can learn it very quickly.
I reccomend you learn it! It's pretty fun and easy! Anyway, yeah, I might finish my video about Viesa later.
But for now, I'm gonna add more to this giant wall of text, because I want it to be the longest! It would be pretty cool to have a world record for the longest text ever.
Not sure how famous I'll get from it, but it'll be cool nonetheless.
Nonetheless.
That's an interesting word.
It's a combination of three entire words.
That's pretty neat.
Also, remember when I said that I said the F word six times throughout this text? I actually messed up there.
I actually said it ten times (including the plural form).
I'm such a liar! I struggled to spell the word "liar" there.
I tried spelling it "lyer", then "lier".
Then I remembered that it's "liar".
At least I'm better at spelling than my sister.
She's younger than me, so I guess it's understandable.
"Understandable" is a pretty long word.
Hey, I wonder what the most common word I've used so far in this text is.
I checked, and appearantly it's "I", with 59 uses! The word "I" makes up 5% of the words this text! I would've thought "the" would be the most common, but "the" is only the second most used word, with 43 uses.
"It" is the third most common, followed by "a" and "to".
Congrats to those five words! If you're wondering what the least common word is, well, it's actually a tie between a bunch of words that are only used once, and I don't wanna have to list them all here.
Remember when I talked about waffles near the beginning of this text? Well, I just put some waffles in the toaster, and I got reminded of the very beginnings of this longest text ever.
Okay, that was literally yesterday, but I don't care.
You can't see me right now, but I'm typing with my nose! Okay, I was not able to type the exclamation point with just my nose.
I had to use my finger.
But still, I typed all of that sentence with my nose! I'm not typing with my nose right now, because it takes too long, and I wanna get this text as long as possible quickly.
I'm gonna take a break for now! Bye! Hi, I'm back again.
My sister is beside me, watching me write in this endless wall of text.
My sister has a new thing where she just says the word "poop" nonstop.
I don't really like it.
She also eats her own boogers.
I'm not joking.
She's gross like that.
Also, remember when I said I put waffles in the toaster? Well, I forgot about those and I only ate them just now.
Now my sister is just saying random numbers.
Now she's saying that they're not random, they're the numbers being displayed on the microwave.
Still, I don't know why she's doing that.
Now she's making annoying clicking noises.
Now she's saying that she's gonna watch Friends on three different devices.
Why!?!?! Hi its me his sister.
I'd like to say that all of that is not true.
Max wants to make his own video but i wont let him because i need my phone for my alarm.POOP POOP POOP POOP LOL IM FUNNY.
kjnbhhisdnhidfhdfhjsdjksdnjhdfhdfghdfghdfbhdfbcbhnidjsduhchyduhyduhdhcduhduhdcdhcdhjdnjdnhjsdjxnj Hey, I'm back.
Sorry about my sister.
I had to seize control of the LTE from her because she was doing keymash.
Keymash is just effortless.
She just went back to school.
She comes home from school for her lunch break.
I think I'm gonna go again.
Bye! Hello, I'm back.
Let's compare LTE's.
This one is only 8593 characters long so far.
Kenneth Iman's LTE is 21425 characters long.
The Flaming-Chicken LTE (the original) is a whopping 203941 characters long! I think I'll be able to surpass Kenneth Iman's not long from now.
But my goal is to surpass the Flaming-Chicken LTE.
Actually, I just figured out that there's an LTE longer than the Flaming-Chicken LTE.
It's Hermnerps LTE, which is only slightly longer than the Flaming-Chicken LTE, at 230634 characters.
My goal is to surpass THAT.
Then I'll be the world record holder, I think.
But I'll still be writing this even after I achieve the world record, of course.
One time, I printed an entire copy of the Bee Movie script for no reason.
I heard someone else say they had three copies of the Bee Movie script in their backpack, and I got inspired.
But I only made one copy because I didn't want to waste THAT much paper.
I still wasted quite a bit of paper, though.
Now I wanna see how this LTE compares to the Bee Movie script.
Okay, I checked, and the Bee Movie script is 50753 characters long.
Not as long as some of the LTEs I mentioned, but still longer than mine and Kenneth Iman's combined.
This LTE is getting close to 10000 characters! That means it'll be half the length of Kenneth Iman's LTE.
That's pretty exciting.
Also, going back to the topic of the Bee Movie Script, I tried to write the entire thing out by hand once.
But I never finished it, especially since I'm focusing on this thing now.
Maybe I should write this LTE out by hand.
Nah, I don't think I will.
Yay, we're at 10000 characters! Let's celebrate by talking about MUSIC! Music is cool.
That concludes our celebratory discussion about music.
Thank you, and have a good rest of your day.
Hi, I'm back now, and I got a book! It's a dictionary for a language called Elefen.
It's like Esperanto, but better.
Now I can learn Elefen even without internet! That's pretty cool.
I will now write something in Elefen.
See if you can understand it! Here goes: Si tu pote leje esta, tu es merveliosa! Elefen es un lingua multe fresca! Did you understand that? Maybe you can't speak Elefen, but you still understood that because of your knowledge of other languages.
Elefen is cool because it's an actual language, not an English code like Pig Latin or Viesa.
Oh, I forgot to mention that my sister is back from school.
She's blasting Rhett and Link songs right now.
Have you seen that picture of Rhett and Link standing with a bunch of *******? Sorry, I almost said the F word there.
That would've broken my rule of not saying the F word.
I wrote something in Elefen, so I will also write something in Toki Pona.
See if you can understand it now! sina sona e toki mi la sina pona mute a! I can speak Toki Pona fluently, by the way.
It's also a pretty cool language.
My sister is still playing annoying songs.
It's hindering my focus right now.
But it's fiiiiine.
Okay, luckily she's run out of songs to play.
At least for now.
She's trying to think of another annoying song to play.
Now she's playing a song by Green Day.
Not NEARLY as bad as the other songs she just played.
I should go for now.
Goodbye! Hello, I'm back once again.
I don't know why I feel obligated to say that every time I come back.
But I'll keep doing it anyway.
My sister stopped blasting annoying songs, so that's good.
She's cooking something in the microwave.
I'll go check to see what it is right now.
Nevermind, it's already done cooking.
Right, I remember! It's mac and cheese! Now she just started singing "I have a tongue, you don't, because I cut it off yesterday".
I don't know what goes on in her mind when she does stuff like that.
I've been messing around with my Elefen dictionary for a while, looking up whatever random words I can think of.
By the way, the whole reason I'm doing this longest text ever is because of pointlesssites.com.
That's how I found the Flaming-Chicken LTE, which inspired me to start writing this LTE.
So thanks, pointlesssites.com! I check that website every day to see what new pointless websites they add.
You know, I could double every letter I type so that this text would be twice as long as it normally would be.
But nah, that's kinda cheating.
So I won't.
Also, SUBSCRIBE TO PEWDIEPIE! There, I did my part.
Not that anyone will read this, but still.
'Twould be nice if you subscribed to PewDiePie.
That's another word I invented.
Actually, I looked it up, and I didn't invent it.
Someone came up with it before I did.
That's pretty sad.
Also, LEARN VIESA TODAY! IT WILL CURE YOUR DEPRESSION! Seriously though, learn Viesa.
It won't actually cure your depression, but I'm desperate for speakers.
I only have one other person to speak it with.
I should go now.
Goodbye.
Hi, I’m back.
I just came up with an idea: SIMPLIFIED ENGLISH! Or, in Simplified Engish: Simifid Enis.
It’s where every group of consonant letters is reduced to the first consonant in that group of consonants, and same goes with the vowels.
If a word ends up being just a single consonant with no vowel, put ‘a’ at the end.
So “I like eating my waffles” becomes “I like etin ma wafes”.
Isn’t it the most amazing thing ever? Nah, it’s not quite as amazing as Viesa.
Actually, Viesa isn’t a real language, so it’s less amazing then Elefen and Toki Pona, both of which are cool languages.
I kinda figured that half of this text would be about languages.
Oh well.
I just really want this to be the longest text ever, without using copy and paste, keymash, etc.
If you remember, my sister did a little bit of keymash in this text a while ago.
I would’ve deleted it, but nah, I didn’t feel like it.
And besides, it’s not like it took up half this text.
I have an estimate for how long it’ll take me to be the world record holder: about one month.
I think I can manage one month of writing this.
You know what? I’m just gonna break my rule of not saying the word “furry”.
There, I said it.
Now I’m allowing myself to write “furry” whenever I want.
So with that out of the way, let’s talk about how I first became a furry.
For some reason, I have the exact date when I became a furry memorized.
It’s May 4, 2018.
At that time, I discovered that I was a furry by watching some furry YouTube videos.
I knew about the existence of furries years before this, but I didn’t know much about it until this time.
I said to myself, “You know what? I’m a furry now,” and that’s what started it all.
And I’ve been slowly learning more about the fandom ever since.
I would like to participate more in the fandom when I’m older, but I’m too young for most of it right now.
Guess I’ll just have to wait.
But in the meantime, I can write about it in this text.
I should sleep now.
Goodnight.
Hello, I'm back once again.
Happy Pi Day! I memorized a bunch of digits of Pi once, not sure how many I still remember...
I have literally nothing to write about now.
I've been trying to come up with something for the past 10 minutes, and I still have no idea.
Literally nothing is happening right now.
It's pretty boring.
My sister is watching Friends, as usual.
Okay, since there's nothing for me to write about, I should go now.
Bye! Wow, it has been a while since I last added to this.
It is now July 10, 2019.
Last time I edited this page was Pi Day, which was March 14.
Those 4 months of this thing being untouched end today! Wait...
4 months? That means I was supposed to get this past the world record three months ago.
Oh well.
I have put many things into this text.
A lot of them were cringy, like how I keep mentioning furry-related things.
You know, I should stop putting things in here when I know I'm gonna cringe at them later.
I'll try not to do that from here on out.
I just know I'll fail though.
I'd hate to be aware of someone reading this entire thing...
like, if I had to sit and watch a family member or something read this entire text, I would cringe so hard.
I would not want that to happen.
I am currently pasting the entirety of the FlamingChicken LTE onto a page on OurWorldOfText.
The frustrating thing about pasting stuff there is that it pastes one letter at a time, so it takes forever to paste long text.
And when the tab isn't open, I'm pretty sure it just stops pasting, so you have to keep the tab open if you want it to continue.
Why am I even doing this? No idea.
I might not even paste the whole thing.
I probably won't.
Hey, I just had a thought.
What if, in the future, students are reading this for a class assignment? What if this LTE becomes part of the school curriculum? If so, hi future student! I hope you're enjoying reading my CRINGE.
What is my life coming to? That's enough writing for now.
Goodbye.
Hey again.
Might as well continue writing in here for a bit.
Hey, have you ever heard of 3D Movie Maker? It's a program from the 90s (that still works on modern computers) where you can make 3D animated movies.
It's pretty cool.
I've made a few movies with it myself, and many other people use it to make interesting stuff.
In case you want to try it for yourself, I'm sure if you google "3dmm download" or something like that, it will take you somewhere where you can download the program.
It's kinda aimed at younger children, but hopefully that doesn't stop you from making absolute masterpieces with this program.
I have a keyboard in my room (the musical kind, not the one you type words on), and I don't really know how to play it properly, but I do it anyways.
I can play a few songs on the piano (albeit with weird fingering because like I just said, I have no idea what I'm doing), including HOME - Resonance and PilotRedSun - Bodybuilder.
You might not know one or both of those songs.
If you don't know one of them, why not google it? You will have discovered some new music, and it will all be because of me.
Why are you reading this, anyways? How did you even find it? Were you like me, and you were browsing pointlesssites.com, eventually finding the FlamingChicken LTE and going down a rabbit hole of discovering random LTEs? Literally the only reason I'm writing this right now is because that happened.
I just discovered a new LTE: the RainbowFluffySheep LTE.
I'm gonna see how many characters long it is.
75,957 characters.
Pretty long, but not as long as the top two LTEs (FlamingChicken and Hermnerps, both with around 200,000 characters).
I wanna write as much as possible into this text today.
I'm gonna see how much LTE-writing I can do in one day.
Hopefully it's a lot, because I wanna hold a world record! Imagine having a world record.
Well, would it really be a world record? Because I don't know of any world record books that have "Longest Text Ever" as a record.
Oh well, I just hope this LTE passes exactly 230,634 characters.
That's all my goal is.
I'm not even a tenth of the way there yet, but give it a month and I'm sure I'll get there.
Hey, remember last time I said it would only take a month? That was four months ago.
I should just stop promising things all together at this point.
Forget I said anything about that.
Did you know my sister has an LTE? That's right! It's not very long, though, and you can't read it because it's on her phone.
She made it while bored at the library.
That library was where I used to have web design classes.
Those were fun, but I don't do them anymore.
Now all I do it sit at home and write stuff in here.
Well, I'm exaggerating.
I go to the convenience store with my sister sometimes.
But that's pretty much it outside of being bored on a computer.
I should be a less boring human being.
One day, I should translate this entire LTE into Viesa.
That would be a big waste of time, even bigger than writing the LTE itself.
But I could still do it.
I don't think I ever will.
This text is simply too long, and it'll be even longer than that by the time I pass 230,634 characters.
By the way, if you think I'm gonna stop writing this once I pass 230,634 characters, you're wrong! Because I'll keep writing this even after I pass that point.
It'll feel nice to be way ahead the record.
My sister's alarm clock has been going off for half an hour and I haven't turned it off.
Why? Because LAZYNESS! Actually, I really should turn it off now.
There, I turned it off.
First when I tried to turn it off, it started playing the radio.
Then I tried again, and it turned off completely.
Then I hurt myself on the door while walking out.
So that was quite the adventure.
I'm gonna go sleep now.
Goodnight! Hey, I'm back again.
My computer BSOD'd while writing this, so I have to start this section over again.
That's why you save your work, kids! Before I had to start over again, I was talking about languages.
Yes, I decided to bring that topic back after a while.
But I no longer want to talk about it.
Why? Because it'll probably bore you to death.
That is assuming you're reading this at all.
Who knows, maybe absolutely zero people will read this within the span of the universe's existence.
But I doubt that.
There's gotta be someone who'll find this text and dedicate their time to reading it, even if it takes thousands of years for that to happen.
What will happen to this LTE in a thousand years? Will the entire internet dissapear within that time? In that case, will this text dissapear with it? Or will it, along with the rest of what used to be the internet, be preserved somewhere? I'm thinking out loud right now.
Well, not really "out loud" because I'm typing this, and you can't technically be loud through text.
THE CLOSEST THING IS TYPING IN ALL CAPS.
Imagine if I typed this entire text like that.
That would be painful.
I decided to actually save my work this time, in case of another crash.
I already had my two past attempts at an LTE vanish from existance.
I mean, most of this LTE is already stored on Neocities, so I probably won't need to worry about anything.
I think I might change the LTE page a little.
I want the actual text area to be larger.
I'm gonna make it a very basic HTML page with just a header and text.
Maybe with some CSS coloring.
I don't know.
Screw it, I'm gonna do it.
There, now the text area is larger.
It really does show how small this LTE is so far compared to FlamingChicken or Hermnerps.
But at least I made the background a nice Alice Blue.
That's the name of the CSS color I used.
It's pretty light.
We're getting pretty close to the 1/10 mark! That's the point where we're one tenth of the way to making this the longest text ever, meaning all I have to do is write the equivalent of everything I've already written so far nine more times! Not gonna make any promises, though.
How come every time I try to type "though", it comes out as "thought"? Why do I always type the extra T? It's so annoying that I have to delete the T every time.
Okay, only mildly annoying.
Not as annoying as I previously described.
I apologize for my exaggeration of the annoyance level of me typing "thought" instead of "though".
I just realized that most of the games I play are games that I've been playing for at least six years.
I started playing Garry's Mod in 2013, Minecraft in whatever year version 1.2.3 came out.
Now I have to look that up.
March 2, 2012.
So I started playing Minecraft approximately during that time.
Wow, seven years ago! Coincidentally, I was also seven years old then.
I remember the days of 2012-13.
That was when I still played Roblox and made terrible YouTube videos.
I was called "Infinite Budgets" back then.
I also remember the days of 2016.
A lot of people thought that was a terrible year, but for me personally, it brings me a lot of nostalgia because I talked a lot with my online friend at the time, and I did livestreams on YouTube and stuff.
It was fun.
2016 was also when I got the phone that I still have to this day.
Yup, my phone is three years old.
My life was completely different when I got this phone: I was 11 years old, my YouTube channel actually had activity, and I wasn’t writing this text.
I’m currently writing this in the car.
We are on out way to the dollar store.
And since I’m writing this on my phone, I’m making a lot more typos than usual.
Some of them might make it through, so be prepared for that.
Anyways, we appear to be getting close to the dollar store.
I have a gift card for that place.
I think so anyways, it might be for a different store...
Yup, this dollar store is different.
Oh well.
My sister has an obsession with sponges.
I’m sure she’s gonna find the sponges and go crazy over them.
Why does she like sponges so much? No idea.
She just found a bag of tiny baby dolls, and she wants to put them in ice cubes and call it “Ice Ice Baby”.
She is truly a strange human being.
My sister also has an obsession with stuffies.
She has such an addiction, that she’s banned from them.
Now she found the wigs and she’s considering buying one.
She’s been looking at them for quite a while now.
We’re out of the dollar store, and now we’re going to the computer store.
I have no idea why we’re here.
I guess we just are.
Now we’re going home.
Welp, that was a fun adventure.
Stay tuned for more fun adventures as you read through this LTE.
I should go now.
Bye! Hello again.
I made a private world on OurWorldOfText for my sister and I, but she doesn't want to join it.
She doesn't think it'll be fun.
Now I'm just editing it alone.
How sad.
But oh well.
Now I’m here adding more to this text.
I once made a Discord server specifically for a language called “Bo”, where the only word is “bo”.
I made it almost four months ago, and somehow, it’s still going.
People are still spamming nothing but “bo” there.
It’s great.
I also once made a server where you’re not allowed to use any vowels.
It was a very strange server.
I deleted it after some time though, so all that insanity is no more.
I also used to own a Pig Latin server, but it got inactive so I deleted that too.
We had some good memories in that server though.
Now there’s a new Pig Latin server, but it’s not owned by me.
Dang, my YouTube channel has been dead for so long.
I haven’t posted a video in a year.
I want to revive it, but I don’t know what to post there.
I’ll figure it out.
I doubt my channel will ever go back to it’s 2016 legacy, but I’m sure I’ll post something eventually.
Random fact of the day: there are thirty-nine question marks so far in this text.
Am I about to make it forty? Yes, I just did.
Now the fact I initially stated is no longer true.
Or is it? Because I said “so far” in the fact, that implies that we’re talking about the moment that fact was said, disregarding any future events.
Now I’m pretty sure that fact is still technically true.
Welp, I guess I should just accept that I’m editing that world of text alone for the rest of my life.
I originally put a bunch of complaining in there, but I deleted it all.
The thing is, now that world will never be same without all of that complaining about my sister not being here.
But that’s fine.
Hey, I just had a cool realization.
Basically, there’s this conlang (constructed language, for those not in the know) server where we have a Sentence of the Week activity.
In this activity, someone posts a text with a maximum of nine sentences, then people translate it into their own conlangs.
My realization is this: if we take nine sentences from this LTE every week, there would be a whole year of sentences for people to translate.
There are approximantly 523 sentences in this LTE.
Divide that by 9 sentences each week, and you get 58 weeks worth of sentences, which is approximantly the number of weeks in a year.
Quick maths.
I actually suck at math, but that’s besides the point.
I should go now.
Goodbye! Hello, I’m back again.
I really need to come up with different hello and goodbye messages, because I’ve already said “Hello, I’m back again” once before.
Same with the “I should go now.
Goodbye!” I said at the end of the previous section.
I was going to explain what a “section” is, but I’m terrible at explaining things, so I’m not going to anymore.
I guess you’ll just have to figure it out yourself.
It’s probably not very hard to figure out, anyways.
I guess I can just say that a section starts with me saying hello, and ends with me saying goodbye.
That should be enough explaination, now that I think about it.
Hey, do you ever feel like you never have any idea what you’re talking about? That’s my entire life.
I just summarized it all in one sentence.
On an unrelated note, I feel like half this LTE is just me talking about the LTE itself.
I mean, press CTRL+F on this webpage, then type “LTE”.
Look at all the times I use it in this text! Not counting the ‘lte’ in the word ‘multe’, of course.
Dang, now the search results will include that, too.
Anyways, half of this text is just me talking about how I’m trying to get this text to be the longest.
Well, the longest LTE, anyways.
I still have a long way to go.
I’m only 12.7% of the way there.
I mean, minus the four month gap, my estimation is that I’ve only been writing this for not even two weeks.
So it makes sense that this LTE isn’t very long yet.
Whenever I look at this webpage, it looks long at first glance, but the longer I look at it, the more I realize how short it actually is.
It’s something that I can’t explain.
For real this time.
I just realized that none of this is helping the fact that half this LTE is about the LTE itself.
I should bring up a new topic, but I don’t feel comfortable talking about much else.
Why? Because, like I said, I never have any idea what I’m talking about.
Most of this LTE is just me talking about LTEs or languages.
Sometimes furries, but I don’t wanna go back into that territory at this point.
But it doesn’t matter, because I’m still gonna write this LTE for as long as possible, even if it means talking about the same things half the time.
Also, LEARN VIESA! Haven’t said that in a while, so I might as well bring it back.
The documentation for Viesa is on this very website, so go ahead and read it! You might need to know some linguistic knowledge to understand it, though.
In fact, you probably won’t understand most of it unless you know some amount about lingusitics, so you have been warned.
If Viesa is too much for you, Pig Latin will probably be better for you.
If it's so easy that kids can learn it, you can too! It's a language you can learn in probably five minutes, so why not give it a try? You may also enjoy Ubbi Dubbi, where you place 'ub' before every vowel sound.
It's also a very easy language to learn, although not quite as popular.
The thing is, none of these are even real languages.
They're just codes, and very simple codes at that.
You could probably crask Pig Latin or Ubbi Dubbi rather easily.
Viesa too, actually.
But I still enjoy them occasionally, even if Pig Latin and Ubbi Dubbi are inefficient and easy to crack, and Viesa is easy to crack yet unneccesarily difficult.
I do make real languages, but I never put in the effort to learn them to fluency.
At least I make them at all.
Here’s a fun game: I will open up a random page from a book, and tell you the first word I see.
English.
That’s the word.
Stay tuned for more fun games as you read through this LTE.
We’re back, and we’re gonna play the same game as before.
Ready? Subject.
Now we’re gonna do it again.
Reading.
And again.
Itself.
Constituent.
Grammar.
Colloquial.
Black.
Outline.
Add.
About four of those words were language related.
You’ll never guess why! (Spoiler alert: it’s a conlanging book).
I’m running out of ideas now.
I’m just gonna generate a random word and try to talk about it.
Forbid.
That’s the opposite of “allow”, I’m pretty sure.
I don’t really know what else to say.
Well, I guess I failed at generating a topic I could talk about.
You know what's weird? My favorite word hasn't been used once in this entire text.
I'm about to change that forever.
Epic.
Yup, my favorite word is "epic".
I use it on a regular basis.
I say "That's epic" all the time.
It's a word I can't live without.
Hey, I've now written more of this text after the 4 month gap than before it! Just thought I'd share that fact.
Also, I'm gonna try and write as much as possible in this LTE today.
I've already written more today than the day I first said I was gonna write as much as possible, so that's a good sign.
The thing is, I don't know what to write about.
I need to write about something, otherwise I won't write at all and I won't accomplish my goal.
Wait, what goal should I set? How many characters should I write today? I'm gonna try and get 10,000 characters.
I've already written almost 5,000 today, so from here I just have to write the equivellant of everything I've already written today.
I'm just gonna try it and see if I make it.
Maybe sometime in the future I'll do a bigger goal, like 15,000 or even 20,000 in one day.
Actually, I don't know if 20,000 would even be possible for me.
It might be, but it sounds like somewhat of a stretch for me to write that much in a single day.
We'll see how long 10,000 takes, though.
I'm already doing a bad job at this.
I haven't typed anything here in several minutes.
I need a topic.
Um, Vabungula, I guess? Basically, it's a conlang created by Bill Price in 1965.
It amazes me how one can work on a single conlang for that long.
Most of the conlangs I start making die after 15 minutes.
Anyways, I really like it because...
um, I don't know, actually.
There's not really anything about it that's super interesting (other than how long it's existed), it's just his personal conlang.
Maybe it's the amount of development that went into it.
It has over 5,000 dictionary entries and several texts written in the language.
I'm sure most people reading this don't care about my language related talk, but I gotta make this long.
I'm desperate to reach my 10,000 character goal.
I've got 4,000 to go.
I just found a website that generates random art from a seed.
I just put this entire text as the seed, and it generated something quite nice.
I would put the picture here, but I want this LTE to be nothing but text, so I won't do that.
I've been playing with this for a while now.
Many of the seeds produce boring pictures, but some of them are nice.
For example, I just used "e" as the seed and it produced a nice looking picture.
"a" looks nice too, arguably nicer.
I've been using nothing but the word "nice" to describe these pictures.
Maybe it's time to get a bigger vocabulary? "b" looks, um, good? I don't have the right vocabulary for this.
I also don't feel like doing every single letter, because the pictures take some time to generate.
But if you want to do it for yourself, just go to random-art.org and try it out! By the way, this is another website I found through pointlesssites.com.
You know, the same website that lead me to the FlamingChicken LTE, which lead me to begin writing this whole thing.
But what made me discover pointlesssites.com? Vsauce mentioned it.
But what made me discover Vsauce? YouTube Reccomendations, probably.
But what made me discover YouTube? As far as I remember, my dad showed it to me when I was 6.
So I would like to thank my dad for being the reason I started writing this.
He's the one who showed me YouTube, which reccomended me Vsauce, which mentioned pointlesssites.com, which brought me to the FlamingChicken LTE, which inspired me to start my own LTE.
If he had never shown me YouTube, I wouldn't be here writing this text, and you wouldn't be reading it.
Well, that's probably not true, because I probably would have discovered YouTube by other means, thus leading me to Vsauce, leading me to Vsauce, leading me to pointlesssites.com, leading me to the FlamingChicken LTE, leading me to...
okay, I really need to stop now.
I've gone too far.
But you know what I haven't gone too far with? This LTE.
I don't think I even can go too far with writing this text.
Unless this text gets so long that it surpasses the 1GB storage limit of Neocities.
In which case, I'll need to upgrade to Supporter in order to get a 50GB storage limit.
But what if the text gets so long that is surpasses that? I don't think I'll ever make it there.
I mean, 50GB is about 50 trillion characters.
So I think we're good.
I still need to get to 10,000 by the end of today.
I've got 1,500 to go.
Currently watching a livestream.
It's reminding me of when I used to livestream back in 2016.
I still kinda miss those days.
But at the same time, I was quite awkward and had zero social skills, so I'm not sure if I'd want to go back.
At this point, everything I've written today is longer than what can fit on the screen at once.
At least on my computer screen.
It probably changes with different screen resolutions and devices.
But anyways, it's pretty unusual for that much of the LTE to be written in a single day.
I don't want to pressure myself into writing this much every day, though.
Last time I forced myself to complete a certain amount of something every day, it was overwhelming and I ended up losing motivation, thus letting down all my fans who were anticipating the August 30th, 2016 release date.
Okay, the amount of eager fans was probably a number you could count on one hand, but still.
By the way, if you're wondering what this "something" was, it was GoAnimated Garbage: The Movie, which was supposed to be an hour long episode of a series I made to make fun of random GoAnimate videos.
In case you're not the type of person who knows what GoAnimate is...
hoo boy.
Basically, it's a drag-and-drop animation website infamous for the "grounded videos" that people made with it, among other types of videos.
It's this whole community that I neither can explain nor want to explain.
But I had somewhat of an association with that community back in the day.
On my YouTube channel, I used to make a genre of GoAnimate video known as the "OS video".
Typically an OS video is where some sort of hated character within the GoAnimate community forcefully installs their operating system onto a user's computer, and the user has to deal with this OS until they eventually find a way to "destroy" it.
I made five of these videos.
In chronological order: Caillou OS, Boots OS, Franklin OS, Little Bill OS, and Crap OS X.
Caillou OS is the most viewed video on my main channel, which is unsurprising since Caillou is pretty much THE character associated with the GoAnimate community.
When I made that video, it was a big transition for my channel.
The channel's name was changed from Infinite Budgets, which had been my name since 2013 when I made crappy Roblox videos, to Allisima.
All of my old videos were deleted, with the exception of my "Barney Errors", which was yet another genre of GoAnimate video.
Basically, a Barney error is when a user's computer/console/whatever session is interrupted by a "Barney Error", a message informing the user that Barney has been killed, and the device must not be turned off because it's an "important message".
There's also a bomb that's placed in Barney's "lair", the timer for which is displayed in the error.
The user gets some amount of "chances", and every time the device is turned off, the user looses a chance and the time until the bomb explodes decreases.
Eventually, the user turns off the computer enough times that there are no more chances left, the bomb explodes, and some sort of punishment happens.
These punishments can range from having to downgrade your operating system, to having your computer destroyed, and in extreme cases, even to death.
I once made a whole channel for Barney Errors, where I made about twenty of them before quitting.
After that, I eventually quit GoAnimate all together, but I still made Crap OS X, an OS video made with Powerpoint.
I also made an interactive OS parody called Windows Poop Editon, again with Powerpoint.
Before that, I also made one called "Atch OS" using my old Windows XP netbook.
I just checked to see if my old Weebly website still exists, since there's an Atch OS download on there and I wanted to see if it dissapeared from existence or not.
Appearantly it does! I'm getting so much nostalgia from this website.
It's like a window into 2016, when I had fun making these videos on a regular basis.
I'm way past my 10,000 character goal now.
I'm kinda glad I set this goal, but again, I'm not gonna force myself to do it everyday.
I think I'm gonna stop writing for today.
Bye! Hey, I'm back.
Yes, that hello wasn't original either, since I already said it once.
Specifically, after my sister seized the LTE and started spamming.
You remember that, right? I hope you read through this whole thing instead of just picking a random part (which just happened to be this part) and reading only a tiny bit.
Nah, I'm just kidding.
Read this text however you want to, it doesn't matter if you read this entire text from start to finish or not.
I mean, I did put some cringy stuff in here, as I keep mentioning.
But it's on the Internet, and since recently, on my homepage, so I know people are gonna read it.
Really the only reason I'm making this is because I have a weird obsession for writing giant walls of text.
Guess what? I just added translations of this LTE into various conlangs on my website! But they're all very incomplete, and I probably won't finish them ever...
I mean, if I'm gonna finish any of them, 'twill probably be the Viesa translation since it's the easiest to do.
Hey, 'twill's back! I remember the very beginnings of this LTE, when I first mentioned 'twill.
That was 40,000 characters ago.
Appearantly I'm measuring time with characters now.
Hey, what's the average amount of text I write per day in this LTE? The four month gap probably significantly drops that amount.
Let's see! The trouble is finding out when I started writing this LTE, because I don't know the exact date.
I'm just gonna estimate that it was March 12, based on the amount of times I said goodnight before I said "Happy Pi Day".
It's not a very accurate measurement, though, because sometimes I stop writing for the day without saying goodnight.
But anyways, from March 12 to today, July 16, is 127 days.
As of that previous sentence, there are 42,549 characters in this LTE.
42,549 characters divided by 127 days equals about 335 characters per day.
That's not very much at all.
To get an idea of how short that is, the first 335 characters of this LTE consist of about 64 words and 8 sentences.
As I predicted, the four months of no activity had a big impact on this number.
But what if we ignore the 4 month gap, which was from March 15 to July 9, I've only been working on this LTE for ten days.
42,549 characters divided by 10 days is about 4254 characters.
That's much better.
It might be that big because of the 12,600 characters I wrote yesterday.
I said I wouldn't do it every day, but honestly, I'm feeling like doing a goal again today.
I think I might even go a bit higher than yesterday.
Let's do 15,000 characters! I have zero life outside of this LTE, anyways, so I think I'll make it.
As long as I keep typing about random stuff for the entire day, I'll probably get past 15,000 easily.
I think I'm insane.
Literally all I do anymore is write this LTE.
My mom is almost certainly concered for me, because I was in my room pretty much all of yesterday and my sister told her about how I'm trying to write the longest text ever.
But enough about my descent into insanity for now.
Let's get this LTE to over 55,000 characters today! This is probably the most meta LTE in existence.
Like I've said, I talk about the LTE itself as much, if not more than anything else.
By the way, if I were to write as much as I did yesterday every day, I would reach my goal in just 15 days.
Now I'm tempted to do that, even though I said I wouldn't set a goal like that every day.
I think I might end up doing it subconciously.
I kinda wanna convince some other people I know online to start their own LTE.
Wouldn't it be fun if we all had our own LTEs? They would probably all die within a day, but at least I wouldn't be the only one writing an LTE in 2019...
The most recently updated LTE I've seen is the RainbowFluffySheep LTE, which I believe was last updated in late 2018.
That wasn't really that long ago, but still, I don't think it's being updated anymore.
Now let's do an LTE Timeline! The original FlamingChickens LTE was probably started sometime in 2004, and Hermnerps was started the same year.
The FlamingChickens LTE stopped in 2005, while the Hermnerps LTE actually lived on until 2009, although edits after the end of 2004 were rather sparce.
The Kenneth Iman LTE was started in 2013 and was last updated in 2015.
The RainbowFluffySheep LTE both started and was last updated in March 2018.
And of course, the WhileTrue LTE was started in March 2019 and is still being updated today.
Wow, 15 years of LTEs! I think my LTE is the only one still being updated.
It would be nice if someone else was writing their own LTE along with me.
But 'twill be hard to convince other people to waste their lives writing a useless wall of text.
You never know, maybe an LTE that stopped being edited years ago will come back from the dead.
That seems kind of unlikely though.
Very strange fact incoming.
A certain word has not been used since the very beginning of this text.
Ready to learn what it is? I shouldn't tell you, actually.
Of course, that would ruin it.
Unless you want me to ruin a really cool fact.
Surely you wouldn't want that to happen.
Okay, I'll just tell you, because I'm probably gonna end up using it again someday or another.
The word is "various".
If you search for "various" in this LTE, you'll only find it at the very beginning as well as here.
And I was gonna keep this a secret, but just now I did this thing where if you take the first letter of each sentence, it spells out "VARIOUS".
Kinda clever...
I guess? Anyways, for those who are insane enough to be reading this entire thing from the start: Wow, you have quite the dedication.
My LTE isn't even the longest yet, but perhaps in the future, when it is the longest, people will be challenging themselves to read the entire thing.
And maybe you're one of them! Perhaps you're reading this long after I've passed my goal, in which case you still have quite a bit to go.
So I wish you luck on your Longest Text Ever reading adventure! I've been talking about LTEs all day.
For the past 6,000 characters, in fact.
I need to find something different to talk about.
But first, I just had an idea pertaining LTEs.
I should compare this LTE to the longest joke in the world! The longest joke in the world is 56,554 characters long, which is about how long I'm trying to get this LTE by the end of today.
So if I reach my goal today, this text will be longer than the longest joke in the world! That's pretty cool.
I would also be a quarter of the way to my goal.
But let's get back to finding something different to talk about.
I can't think of anything.
My sister is singing a song about wanting Subway.
I will never understand her.
What goes through her brain that makes her decide "Yeah, I think it would be a good idea to sing about how I really want Subway"? I don't get how her brain works.
She also likes eating paper.
I asked her and appearantly she was perfectly okay with me writing that in here.
She probably thinks nobody's ever gonna read this.
But she's gonna be wrong! Eventually.
Now she's asking me to write about how she likes yogurt.
"Because I didn't used to", she says.
She's eating mango yogurt, and she has water in a Gatorade bottle.
Now I'm asking her what else I should put in this text.
She says I should write about how there's wild sage where we live.
Now she's having hot chocolate.
She didn't ask me to write that, but I told her I was going to write it and she said okay.
My sister might start her own Longest Text Ever, again.
She says it will have only one word repeated throughout the entire text.
But I told her that it defeats the purpose of an LTE.
In the original FlamingChickens LTE, one of the very first things that is written is "I will just type, and type, and never, ever use copy and paste".
Okay, I just made a webpage for her LTE (it's gonna be an actual LTE this time).
Stay tuned for "The Best Longest Text Ever", as she calls it.
I think it should have just been called "KKs Longest Text Ever" or something, but whatever.
She types really slow, but I hope her LTE will be successful nonetheless.
Warning: if you do go and read her LTE, she spoils Spiderman: Far From Home at the very beginning, so be careful about that.
In fact, she's basically typing the entire plot of the movie.
Well, that's one way to increase your LTE's length, I guess.
My sister is listening to her terrible songs instead of writing her LTE.
Well, she has her LTE page open, but she's not writing anything and is singing instead.
Actually, she's writing stuff now, so ignore everything I said previously.
She's still writing the entire plot.
Her LTE is now 2,000 characters, which isn't very long, but she's only been working on it for an hour.
Plus she's a slow typer.
She types everything with one hand.
It might take a while for her LTE to get to this level.
But assuming she keeps writing it and doesn't forget about it after today, it'll get pretty long eventually.
I still need to write 7,000 characters today.
My sister is watching a cringy video made by our old elementary school.
They became a French immersion school after I left.
She found one of the videos I was in...
oh god, I can't stand to look at that video.
It hurts me to think about those days.
My sister's LTE webpage has text now! Maybe I should create a page linking to all the LTEs I know about.
I think I'll do that.
Boom, it is done.
I think I'm gonna also put a link to it on this page.
There, that's done as well.
Guys, I'm not sure if I'm gonna make it to 15,000.
I still have 5,000 characters to go (I was completely off earlier, I don't have 7,000 left to go), and there's not much left of the day.
In retrospect, it was probably a bad idea to make a goal for the day in the first place.
After all, LTE writing is supposed to be fun! Sort of.
There's zero need to make unneccesary deadlines.
I think it just reduces the fun, as well as the part of my life that isn't just writing huge walls of text.
From here on out, I declare character-per-day goals abolished.
I will no longer make attempts to write a certain amount in a single day.
I should have listened to my past self, who said not to do goals every day.
But I didn't, and now I regret it.
But anyways, here's a fun fact about this LTE: excluding my upcoming usage, the pronoun "he" is only used twice in this LTE, and they both refer to my dad.
On the other hand, the pronoun "she" is used forty times! Almost all of these refer to my sister.
Only one refers to my mom.
I guess I just really like talking about the weird stuff my sister does.
But not as much as being meta and talking about my own LTE.
Here's another fun fact: "LTE" is the fourteenth most common word in this text! That's insane.
It's more common than words you'd expect to be common, like "you", "I'm", "for", "be", "about", "was", and so on.
I really need to talk about other things once in a while.
But since I have zero creativity, I always resort to talking about the same topics.
From what I've seen, most other LTEs are pretty diverse, but mine isn't at all.
Honestly, this is likely the most boring LTE to read.
But my absolute lack of creativity means it's probably gonna stay that way for a long time.
I'm tired, so I'm gonna go to sleep.
Maybe I'll be more creative by tomorrow.
Probably not.
Anyways, goodnight.
Hey, I'm back, and I don't feel any more creative.
But I did have a dream last night, so I'm gonna talk about that.
Last night, I dreamt that I was in one of our old houses, and I saw that someone made a video roasting Viesa.
They talked about how you shouldn't say "dog" in Viesa, because appearantly "deeg" is bad or something? I don't know.
Then they said the rule where W becomes V is weird, but I don't remember the reason they said it.
I didn't really care about how they roasted my language.
Then I watched a Minecraft video for whatever reason, and then the dream ended.
How do other LTE writers have so many topics to talk about? All I ever talk about is either LTEs themselves, or the fact that all I ever talk about is LTEs.
There's no diversity.
I very rarely talk about anything else.
And when I do, it's usually about languages and lasts only a few sentences.
There, I deleted it.
Oh, you don't have any context.
Basically I wrote a bunch of depressing stuff, then I decided to delete it all.
I knew I was going to regret it later, in the same way I regret writing all that stuff about furries.
Not that I think there's anything wrong with being a furry, it's just that it personally makes me uncomfortable looking back on it.
I'm not even into that stuff as much anymore.
I don't watch furry YouTube, and I don't talk about how much I want a fursuit/go to a convention.
That's a part of me that's slowly disappearing.
Okay, I'm gonna stop talking about that, because I literally just said how I regret talking about it in this text.
You know, I've been feeling kind of down about this LTE lately, because as I just mentioned, all I ever talk about is this LTE itself, there's no diversity, blah blah blah.
It's especially been like that ever since the four month gap.
In fact, I barely talked about LTEs before that gap.
It's like I lost all my creativity after four months.
You know what? I'm officially gonna say this: If, for some reason, you are reading this before you decide you want to start reading this entire text, READ EVERYTHING FROM "WOW, IT HAS BEEN A WHILE" TO HERE AT YOUR OWN RISK, BECAUSE YOU WILL LIKELY DIE OF BOREDOM DUE TO THE MONOTONOUS TOPICS! There, now I'm gonna try and forget that half this LTE is the same exact boring topic.
I will also try to avoid writing about the same exact boring topic for the rest of this text.
Let's celebrate the End of Monotonous Topics (EMT) by talking about how we (my sister and I) had lunch and did various other things with our grandpa! So grandpa asked if we wanted to have lunch and spend an afternoon with him, and we said yes.
Then he picked us up, and we went to a nearby town where we had lunch, went to a museum which was a house built in 1909 as well as the town's first hospital, and got ice cream from what is appearently one of the best ice cream places in the country, according to grandpa.
So today was a fun day.
I'm gonna go now.
Bye! Hey, I'm back.
That's the fifth time I've said that.
I need to come up with more original...
nah, whatever.
Anyways, I had a dream last night which was basically a whole movie I don't remember most of.
All I remember is playing a keyboard at the store for some reason, and that the dream ended with a random car horn.
Oh, and there was Minecraft involved in the beginning, which I'm pretty sure is becoming a recurring theme in my dreams.
I don't know why that happened, because I rarely play Minecraft anymore.
Do any of y'all remember the DVD screensaver meme? That was one of my favorite memes.
For those who don't know what I'm talking about, many DVD players had this screensaver where it was a DVD logo bouncing around the screen.
The big moment that everyone anticipates is when the logo hits the corner of the screen perfectly, because, well, it's just so SATISFYING! I used to watch a livestream that was literally just this screensaver running endlessly.
And when it hit the corner, it was a huge celebration for both me and everyone else watching.
I got so excited when the logo hit the corner.
My computer's screensaver is even still a DVD screensaver.
But nowadays when I see it hit the corner, I don't have as much enthusiasm as I used to.
I've just seen it too many times for it to be exciting anymore.
Plus, the meme isn't even a thing anymore.
I doubt that livestream is even still running.
But you never know, so I'm gonna check to see if it's still going.
Oh wow, it is! That was the last thing I expected to see in July 2019.
But only four people are watching it, which makes sense.
The title now says "DVD Logo Screensaver For 1 Year", even though it hasn't quite been going on for a year.
But when it hits that point, perhaps that's when it will finally end? It should have ended months ago, if you ask me.
Yup, I was right.
There's a countdown on the livestream to when it ends, and it says 181 days, 9 hours, 12 minutes, and 3 seconds.
Wow, the corner hit and wall hit numbers are much bigger now.
The most corner hits I'd seen is around 1400 or so, but now it's at 4776! The wall hits used to be in the hundred-thousands, now it's at over two and a half million! Hello, I have returned.
There, I came up with something original to say! Anyways, I just combined every single LTE I know of (including this one) and put it onto one single page on a Wikia wiki called "No Rules Wiki".
That wiki exactly as you would expect from the title.
I found it a while ago, and I thought it was about time I made a contribution, even if pasting over half a million characters into a single article is breaking some rule...
I've been wanting to make Viesa an actual conlang for so long now.
I think it's long overdue at this point.
Hey, I'm back again.
These sections are getting shorter and shorter each day.
But oh well.
I just discovered how much I like the word "number".
I don't know why, but it's just so fun to say! I think I've liked that word ever since I was a toddler learning my numbers! I remember thinking it was a fun word even back then.
At that time I had two little electronic toys: one was orange and for numbers, and one was purple and for letters.
I'm pretty sure those were the colors.
I also vaguely remember having a fan that lit up and displayed custom messages.
I haven't seen anything like that since then.
All I hear right now is Baby Shark being blasted upstairs.
You know that song, right? I don't know who doesn't know it at this point.
I can't think of a single person I've seen that doesn't know what that song is.
Dang, ever since the EMT I haven't been writing as much in this text.
Looks like LTEs were all I could talk about.
Oh well.
How many times have I said "oh well"? Probably a lot.
About eight times, in fact.
I'm back again.
I went a full day without writing anything into this LTE yesterday! There were a lot of things happening that day, so I didn't feel like writing.
I could've written at least a little bit, but I didn't.
Time for me to use this LTE as my dream journal yet again! I had a dream where my domain was "exin" (or something like that) instead of "whiletrue", so that was a thing.
I also had a dream where there was this game that I thought existed in the real world, but it didn't.
Dreams do that sometimes.
I don't remember much about the game, but it involved the Simpsons, I guess? Also, I was in a weird store where they had an...
iCarly laptop? And a bunch of gift cards.
That's all I remember.
For now, at least.
My sister does not like synthwave.
She says "it's repetitive", "the sounds they use don't sound like music", and she doesn't like how it doesn't have lyrics.
First of all, she's hypocritical because she always listens to the same songs on repeat.
And why does it matter that it doesn't have words? Why does she think every single piece of music in existence has to have words? YOU BETTER WATCH YOUR OPINIONS THERE! (That was a reference to a cringy GoAnimator that no one reading this will get, unless you came to this website from my YouTube channel which you subscribed to during my OS video days).
Anyways, synthwave is objectively the best genre of music.
I remember hearing HOME - Resonance for the first time in a Discord voice chat, and it was magical.
I wish I could listen to that song for the first time again.
That was how I got into synthwave.
You know what my favorite color combination is? Yellow text on a magenta background.
Oh, and don't forget the Comic Sans.
That is just pure beauty right there.
In fact, it's used in the first frame (well, close enough) of "history of the entire world, i guess", which makes me love that video even more.
We're at 60,000 characters, 1,000 sentences, and 12,000 words! Weird how all those counts hit such round numbers in one day, huh? I need to stick to the EMT, so I should stop talking about that.
My sister is attempting to build a Lego city.
Her goal is to have three buildings, since she doesn't have THAT much Lego.
Have you noticed how quickly I've been switching topics in this text? That's because I can't talk about anything for a long time.
That is, unless that thing is languages or LTEs.
I am currently trying to revive a language my sister and I started making a while back.
Sometimes my sister has days when she doesn't hate languages for some reason, then she ends up starting one.
But of course, she regained her hate and abandoned it.
Now I'm the only one working on the language.
By the way, the language is called Lazay, which was the successor to Zula, the first language we made together which is now deleted.
We started writing the language on paper, but then I started a Google Doc.
I'm sure the papers are still here somewhere.
I'm just too lazy to find them.
I’m back again.
I haven’t been ending these sections with goodbyes recently.
But whatever.
We’re on our way to IKEA to get a dresser for my room.
We’re listening to Queens of the Stone Age right now, and I’m just waiting for “Fortress” to come on.
I sing that song in Viesa, but I make up half of the lyrics.
It goes: Ванавар јак фиртрас кува, ма башег ђара, ја сок.
Try and translate that! The song is playing now.
I like this song.
We’re back from IKEA now.
Actually, we’ve been home for hours now, and we’ve already built the dresser.
My computer crashed (but don’t worry, I started writing this in Google Docs on my phone), and now Google Chrome won’t open.
So I have to use Microsoft Edge for now.
I’m gonna sleep now.
Goodnight! Hello, I'm back.
My sister is brushing my back with a hairbrush, and I don't know why.
I asked her what I should write about (because I have zero creativity), and she said I should write about that.
I'm gonna type whatever comes to my head now.
Hi, I'm a boring human being who has zero creativity whatsoever and still happens to be writing an LTE.
Isn't that insane? How could this be? Nobody knows, and nobody will ever know.
It is a strange mystery that has yet to be solved.
Hmm, I wonder if I should go and eat pancakes now? I'm so random right now.
In fact, there's an entire subreddit for that: r/iamsorandom.
You should check it out! I mean, you don't really have to, but it would be nice if you did.
I use Reddit a lot, but I only use it for language-related stuff.
Well, I make posts in language-related subreddits, but the non-language subs that I look at are ones that I don't post anything to, because I know nothing about literally anything that isn't languages.
And heck, I don't even know much about languages! I only make English codes and call them "conlangs".
Sort of.
I usually don't actually call them conlangs, but I use them for such purposes.
I speak Viesa as if it were a real language, but it simply is not.
Why did I make Viesa in the first place? Well, you see, it all started out as a joke for April Fools' Day.
I called it "the new universal language", despite it literally being a cipher of English.
What!? A cipher of English being a universal language? How silly! What a funny joke, right? Maybe? Somewhat? Anyways, I then made a SECOND VERSION! DUN DUN DUN! This second version had CLICKY SOUNDS which, spoiler alert, dissapear in the next version of Viesa.
Sad, right? RIP CLICKS 2018-2018 NEVER FORGET! I also added WACKY GRAMMAR STUFF and PRONOUNS! WOAH! How crazy! Then I made the next version: VERSION 3.0! This version added CYRILLIC! (you know, that alphabet the Russians use, as well as the Serbs, whose version of the Cyrillic alphabet I stole for Viesa.
Hehehe!) And that's the entire history of Viesa, explained in a Zany way! Do you like how I capitalized "Zany" there? Aren't capital letters so cool? They let you YELL AND SCREAM AT THE TOP OF YOUR LUNGS! They add EXCITEMENT! And most of all, they let you capitalize words like This.
lowercase letters are also cool.
without them, we'd all be yelling and screaming all the time.
That would be pretty tiring, wouldn't it? I see two water bottles.
One is empty, while the other still has some water in it.
The empty one is blue, and the one with the water is pink.
I should also mention that the blue one is mine, while the pink one is my sister's.
I got that water bottle because I lost my other one at school.
But GUESS WHAT? I FOUND IT IN THE LOST AND FOUND! Wow! Now I had two water bottles.
How Wacky and Crazy and Zany and Bizzare and all those adjectives that perfectly describe this epic moment! Wow, writing your mind is a great way to increase your LTEs length! Before I was actually THINKING about what I was writing.
But now I barely do, and it's greatly improving my LTE! Except the overuse of capital letters might throw the reader off guard a little because of how sparingly I've used them in the past, but oh well.
I could fix it, but I don't feel like it.
I want to continue writing, but I need to sleep now.
Goodnight! Hi, I'm back again.
My computer crashed AGAIN, and I was ignorant enough to not save my work, so that means I have to start this part of the text all over again.
That's quite unfortunate.
But did I mention that my Google Chrome is working again? That's the good news.
It's good news because Google Chrome has all my logins, websites, and stuff like that.
Hopefully you know what I mean when I say that.
Maybe you do, maybe you don't.
I don't even know what I mean right now! I'm probably insane right now.
Especially since I'm writing this right now, as I have been for about 18 days minus the four month gap...
I think.
I hope I did that right.
As I've said before, I'm bad at math.
My sister just read the entirety of what I've written today for some reason.
My sister just sang "I want your computer to crash again because I'm evil".
She IS evil if she wants my computer to crash.
At least I'll have this section saved.
In fact, right now I'm pressing Ctrl+S after every sentence! Including this one.
And this one.
Also this one.
I think you get the point now.
My sister keeps typing into this LTE without my consent, and I keep having to delete it all.
It's pretty annoying.
Hey, flashback to when I said that way at the beginning of this text! You know, the part where I talk about the Teen Titans Go episode called "Waffles" where the word "Waffles" is said a hundred-something times.
You know what else is said a hundred something times (in this LTE)? The letter J.
So far it's been used 115 times in this LTE.
That's your Interesting LTE Fact of the Day! Well, not really "daily", but whatever.
Here's a story: Once upon a time, people got tired of starting off their stories with "Once upon a time", so they stopped doing that.
But one person decided not to stop using "Once upon a time", and used it at the beginning of this story.
And that person is ME! The end.
Wasn't that a lovely story? You're probably not thinking that.
Again, I'm not creative in any way whatsoever.
That's why I don't usually write stories and instead write giant walls of text full of meaningless information, like the one and only WhileTrue's Longest Text Ever that you're reading right now.
Hopefully nobody died of boredom from reading between "Wow, it has been a while" and the EMT.
That's the most boring part of the LTE! 90% of it is just me talking about LTEs themselves.
How uninteresting is that? Very uninteresting.
Penguins.
What are they? I don't know.
What am I even writing right now? I haven't a clue.
Isn't it weird that I said "haven't a clue" like that? Normally "haven't" isn't used if it's alone as a verb, as in "I haven't my keys".
Who says that? Nobody, that's who.
And yet "I haven't a clue" is an actual thing I've heard people say.
Anyways, AFRICA! That was random, but let's discuss it anyway.
Africa is a well-known song by Toto.
It's a good song.
I can kinda sorta play it on piano? Maybe? I don't know.
Another song I can play on the piano is All Star by Smash Mouth.
You know, the Shrek song? Anyways, I once made a video called "All Star but it's played on a Sesame Street piano" and it got almost a million views.
It's been stuck at 900,000 for what seems like forever now.
I'm gonna check to see if it's at a million now.
I doubt it, though.
Nope, still at 926,000 views.
And I doubt it's gonna get any more, to be honest.
It had a good run though.
My sister is chugging applesauce.
She thinks she's epic because of it.
I don't know anymore.
I seem to keep saying that after everything I type at this point.
It's strange.
Hello, I have returned after yet another long absence.
When was the last time I added to this? I think it was somewhere in July.
So yeah, it’s been three months, as it is now October 17, 2019.
The end of the decade is approaching fast.
I’m a bit excited, because I’ll have significant memories from more than just one decade! My earliest significant memories started in Kindergarden, which was in 2010.
This means that I only really remember one decade.
But now that an entirely new decade is coming up, I’ll be able to remember another! Part of me feels like I shouldn’t be excited over this, since the boundaries between years is arbitrary, and a decade is 10 years only because we count in base 10, so if we counted in base 12 or something, a decade would be 12 years long.
That was kind of a run-on sentence, but I don’t really feel like making this text perfect, anyway.
Have you heard of the Library of Babel? libraryofbabel.info is a website containing every possible combination of the lowercase letters a-z, space, comma, and period.
The library is divided into hexagonal chambers.
Each hex contains four walls.
Each wall contains three shelves.
Each shelf contains 32 volumes.
Each volume contains 410 pages of 3200 characters each.
Everything you could ever say or write is on this website.
Even this LTE! See for yourself: https://libraryofbabel.info/bookmark.cgi?lte.
Okay, that’s only the first bit of it, but every other bit of this LTE is somewhere in the library! In fact, here’s the next bit: https://libraryofbabel.info/bookmark.cgi?lte:1.
It’s split up into about 20 different pages.
I don’t feel like putting links to all of them here.
It also removes punctuation that the library doesn’t use, like the exclamation point, question mark, colon, and so on.
But it’s pretty mind-blowing stuff, if you ask me.
If you try and browse the library yourself though, you probably won’t find much more than total gibberish.
It’s crazy to think that everything we could ever possibly say or write is massively outweighed by meaningless strings of letters and punctuation.
Hey, sexy.



 

                   

I love that dress.



 

                   

Of course you do, Lorenzo.

You made it.



 

                   

- Hi, sweetie.

- Hey, guys.



 

                   

- There you are.

- Lena.



 

                   

- You've done it again.

- Well, it's all for you, Bradlee.



 

                   

Gotta mingle.



 

                   

Oh, the girls are by the pool.



 

                   

Well, well, well, Lena. So where's

this sexy boy toy of yours hiding?



  

                   

I didn't know you were

a football fan, Patrick.



  

                   

I've never watched a game. I'm just

a big fan of his old underwear ads.



  

                   

Well, he's probably just getting out of

the shower. Let me go hurry his ass up.



  

                   

- Hi.

- Hey, babe.



  

                   

Start of the fourth quarter, and Owens

will throw. He's got Brown wide open!



  

                   

You have got to be kidding me.



  

                   

Honey, just let me finish the game,

I'll take you to the movies.



  

                   

Take me to the movies?



  

                   

Hello! There's a huge party

going on downstairs.



  

                   

Remember the catering trucks

and the valet parkers?



  

                   

Oh, shit, I forgot.



  

                   

I'll tell you what

you should forget about.



  

                   

Football.



  

                   

Because it's forgotten all about you.



  

                   

Now, you're going to put this outfit on

that I bought you,



  

                   

drag your drunken ass downstairs



  

                   

and mingle with my clients

like a good boy.



  

                   

Who am I? Elton John?

I ain't wearing that shit.



  

                   

- Yes, you are.

- I'm not your trained monkey, honey.



  

                   

No. You're much more

expensive than that.



  

                   

But I tell you what.



  

                   

If you're not downstairs

in five minutes,



  

                   

I'm gonna throw you out of my bed,



  

                   

out of my house and out of my life.



  

                   

Then you're gonna have to

pay for your own bananas.



  

                   

I'm just so mad at you

because you're not wearing my gift.



  

                   

Gift?



  

                   

What gift?



  

                   

It's like a I-love-you gift.

I left it in the closet for you.



  

                   

Really?



  

                   

Paul, I'm so excited.



  

                   

I can't believe you did this.



  

                   

- Where'd you put it?

- In the back, on the right.



  

                   

Paul? Paul, what are you doing?



  

                   

I think we need some

alone time, honey,



  

                   

so I'm gonna go take a cruise

in your Bentley.



  

                   

Don't you dare take my car,

you drunken bastard!



  

                   

- I own you!

- I love you.



  

                   

Somebody please open

this damn door! Patrick?



  

                   

- Lena?

- Patrick.



  

                   

What happened to you?



  

                   

He locked me in the closet

and left me to die.



  

                   

Oh, my God, he is deranged!



  

                   

He thinks he can mess with me.



  

                   

   .



  

                   

Oh, man.

Here come the party poopers.



  

                   

Well, well, well. I'll be damned.

If it isn't Paul Crewe.



  

                   

So, what did I do wrong?

Was I driving poorly?



  

                   

Nope. Nope.

This car was reported stolen.



  

                   

No, no, no.

It's actually my girlfriend's car.



  

                   

Shit happens.



  

                   

Shit does happen. I mean,

look what happened to your ears.



  

                   

I gotta ask you something.

Does he get XM Radio with those?



  

                   

Actually, they get

a couple of channels.



  

                   

It's Paul Crewe.



  

                   

Another question, though.



  

                   

Santa Claus. What's he like?



  

                   

Boy, I hate to arrest a public figure

like yourself,



  

                   

but, hell, I don't think

you got too many



  

                   

endorsement deals to worry about,

now, do you?



  

                   

Now, listen here, Mr. Frodo.

Don't get short with me.



  

                   

That was good. I mean, he's good.



  

                   

Man. I hope you got a lot of money

for that game you threw,



  

                   

because that was the most pathetic

thing I ever saw.



  

                   

Now, step out of the vehicle,

Mr. Crewe.



  

                   

Don't you think I should pull the car

over more? I could get sideswiped.



  

                   

You're slurring your words a bit there,

Paul. You been drinking tonight?



  

                   

Absolutely not. Now, could you do me a

favor? Hold this beer while I back it up.



  

                   

Hey, you can finish that one.

I got five more. Take care, guys.



  

                   

We got a  -   in progress.



  

                   

Okay, remain calm.



  

                   

How you doing? What's up?

What's up? What's up?



  

                   

What you are watching is live footage

of a vehicle, apparently stolen,



  

                   

being pursued by police. 



  

                   

We're receiving word now

that the driver of that vehicle



  

                   

is former Pittsburgh football star

Paul Crewe. 



  

                   

Crewe, you might remember,



  

                   

was the only man ever to be indicted

on federal racketeering charges



  

                   

for shaving points

in a professional football game,



  

                   

although it was never fully proven. 



  

                   

Yeah!



  

                   

- Hello.

- Do not get one more scratch



  

                   

on my car, or I will slit your throat.



  

                   

See, that's our problem, sweetie.



  

                   

You care about this car

more than you do us.



  

                   

And how'd you even know

there was a scratch on this baby?



  

                   

Because I am watching you on TV,

as is the whole country.



  

                   

Once again,

you are proving to everyone



  

                   

what a worthless piece of shit

you are.



  

                   

Well, I hope they like this.



   

                   

Hey, Lena!



   

                   

I think we should start

seeing other people!



   

                   

I think I'm in love.



   

                   

Good news, boys,

I didn't spill my beer.



   

                   

Without question, Crewe's five-year

federal probation for point-shaving



   

                   

has been severely violated tonight. 



   

                   

The future of this once-great football

star looks very dark indeed. 



   

                   

Long way from the big city,

huh, superstar?



   

                   

Staying with the times

around here, huh?



   

                   

Ain't she beautiful?



   

                   

Home sweet home, boy.



   

                   

Get on your feet.



   

                   

You're one lucky son of a bitch,

Crewe.



   

                   

- Is that right?

- That's right.



   

                   

See, the warden loves his football.



   

                   

Fact, he was on the winning side

of your little thing.



   

                   

- Well, tell him congratulations.

- But I wasn't.



   

                   

Welcome to Allenville.



   

                   

Thank you, sergeant.

I'll take it from here.



   

                   

- Afternoon, inmate Crewe.

- Yeah.



   

                   

Come on. Warden wants to see you.



   

                   

Let's do it.



   

                   

Move it.



   

                   

I used to play

a little college ball myself.



   

                   

Down at the University of Miami.



   

                   

I bet a lot of your old teammates

are locked up in here.



   

                   

No inmates from my playing days.

Couple of guards, though.



   

                   

See, we got us a fine

prison-guard league down here.



   

                   

It's like a company softball team.



   

                   

Now, the warden...



   

                   

...he's gonna ask you to help out.



   

                   

Okay. With what?



   

                   

That wasn't nice.



   

                   

When the warden asks you,



   

                   

what are you gonna say?



   

                   

Yes?



   

                   

You're gonna tell him "no. "

You got it?



   

                   

You're gonna tell the warden



   

                   

that you want nothing to do

with his football fantasies.



   

                   

Not in my back yard.



   

                   

Because the warden

don't run this prison. I do.



   

                   

You understand?



   

                   

Not entirely.



   

                   

Okay. I feel you, dog. I feel you.



   

                   

Paul "Wrecking" Crewe.



   

                   

I don't get to say this

to my new guests very often,



   

                   

but it's an honor to have you

here at this institution.



   

                   

It's an honor to be

locked up here, sir.



   

                   

Oh, well, this is Errol Dandridge.



   

                   

Colonel Sanders

been eating his own chicken.



   

                   

He's my political adviser.



   

                   

See, I've been approached

by several very influential people



   

                   

wondering if I'd be interested

in standing for governor.



   

                   

They see the way I run this prison,

think maybe I should run this state.



   

                   

Only with less sodomy, right?



   

                   

Hopefully none.



   

                   

Sorry.



   

                   

Now, there are two things we take very

seriously here in the state of Texas.



   

                   

Prison and football.



   

                   

We play a little of the latter here.



   

                   

The warden is too modest to admit

that his team is rather good.



   

                   

But not good enough.



   

                   

Five years since

our last championship.



   

                   

Five years.



   

                   

Now, I've worked real hard,

pulled strings,



   

                   

called in quite a few favors

to get you here, Paul.



   

                   

Now, why would you go and do that?



   

                   

Because I am convinced that

you can get us back on track.



   

                   

I haven't played football in I don't

know how long. I don't really want to.



   

                   

You wouldn't be playing, Paul.

Just consulting.



   

                   

Anyone who was once the MVP

of the National Football League



   

                   

must have a great deal

of expertise to offer.



   

                   

Captain, what would you say

to Mr. Crewe looking in,



   

                   

giving us the benefit

of his experience?



   

                   

I think that's a real good idea, warden.

We can use all the help we can get.



   

                   

Well, then, it's all settled.



   

                   

What you say, Paul?



   

                   

I appreciate the offer,

but I'm gonna have to pass.



   

                   

Now, I can assure you



   

                   

that your time here will be a whole

lot easier if you just participate.



   

                   

I just wanna do my time

and go home. Nothing else.



   

                   

If you'll excuse us, Mr. Crewe.



   

                   

Captain Knauer, you can stay.



   

                   

Sit down!



   

                   

I used to love

your underwear commercials.



   

                   

Thank you very much.



   

                   

My ex-husband wore the

same brand of tighty whities.



   

                   

He didn't fill them out

quite as well as you, though.



   

                   

Special effects. Hollywood.

Not all me.



   

                   

Oh, I doubt that very seriously.



   

                   

Well, then get him enthusiastic,

damn it!



   

                   

Come on, get up.



   

                   

How'd it go in there?

We all set now?



   

                   

Oh, yeah, we're real tight.



   

                   

Only the finest for you, superstar.



   

                   

I was just playing.



   

                   

I ain't gonna forget you, Crewe.



   

                   

Hey, yo, you owe me money

on that game, punk!



   

                   

Better watch yourself, Mr. Football!



   

                   

Bitch!



   

                   

Yeah, you better run, woman.



   

                   

Yo, football.



   

                   

Take a seat.



   

                   

Thanks.



   

                   

You know, I have never seen

one inmate just walk in here



   

                   

and be unanimously hated

by the entire population.



   

                   

- I ain't never seen it.

- How'd I get so lucky?



   

                   

You could have robbed banks,

sold crack,



   

                   

stole your grandmama's pension,

and nobody would have cared.



   

                   

But shaving points off a football game?

Man, that's just un-American.



   

                   

- You play football?

- Me? No.



   

                   

I suck so bad, they used to pick me

after the white kids.



   

                   

Used to be mad too. It's like, "I can't

believe I picked a nigga that can't play. "



   

                   

- Caretaker.

- Paul Crewe.



   

                   

Whatever your pleasure,

I can facilitate.



   

                   

You need weed, you need meth...

Hey, you need Prozac, I'm your man.



   

                   

I know how you white boys

always deal with that depression.



   

                   

I mean, me personally, I don't

understand what you white boys



   

                   

all depressed about.

Hey, you're white. Smile.



   

                   

And for a small fee,

I can even get you McDonald's.



   

                   

- Really?

- Yeah, that's right. Mickey D's.



   

                   

My man Cheeseburger Eddy

got the hookup.



   

                   

Cheeseburger Eddy?



   

                   

That's right.

We can get our McFlurry on.



   

                   

Enjoy it, fat man.



   

                   

What about the love

of a beautiful woman?



   

                   

Well, you're gonna have

to lower your standards



   

                   

on the beautiful part

and on the woman part.



   

                   

Hey.



   

                   

Let's just stick

with the cheeseburgers.



   

                   

Oh, they ugly now, but in eight months,

he gonna look like Beyoncé.



   

                   

No, thanks.



   

                   

Now, here's the most important part.



   

                   

You can't let these guys scare you.

You can't let them punk you.



   

                   

Because if you do that, you gonna

end up being somebody's bitch.



   

                   

Don't want that.

Thanks for the advice.



   

                   

Hey. Let me take that tray

out for you.



   

                   

I ain't done eating yet.



   

                   

Oh, you're not?

I'll give it back to you, then.



   

                   

You're dead!



   

                   

Hornet's Nest!



   

                   

Everybody stay down.



   

                   

Stay quiet!



   

                   

Come on, Crewe, get up.



   

                   

Get up, superstar.



   

                   

Yes, sir.



   

                   

You think you can do anything

you want around here, don't you?



   

                   

Well, you are no different

than any other piece of shit



   

                   

that calls this place home.



   

                   

Really? These guys think

you're a dumb redneck too?



   

                   

Girl, that's your new boo.



   

                   

You better cut that shit out.

It's getting old.



   

                   

That's gonna cost you.



   

                   

Looking forward to it.



   

                   

Wake up, Sleeping Beauty.



   

                   

Hey, superdick.



   

                   

Warden's wondering if your stay

in the hotbox has changed your mind.



   

                   

How long have I been in here?



   

                   

One week. Wanna go for two?



   

                   

How'd you find these guys anyways?



   

                   

Recruitment, boy.



   

                   

When college stars don't get drafted,

they need a place to go.



   

                   

A job, money, security.



   

                   

Who drank all the damn Gatorade?!



   

                   

Damn it!



   

                   

And apparently steroids.



   

                   

Look, seems like you got all the talent

you'd want. So why do you need me?



   

                   

Well, now, you might

find this hard to believe,



   

                   

but there's folks here in the prison

league don't care for me very much.



   

                   

- You, warden?

- They thought it might be amusing



   

                   

to schedule the defending

league champs as our first game.



   

                   

And me? Well, I thought

an old pro like yourself



   

                   

might have some training-camp tricks,

drills, insights to offer up.



   

                   

Give us the competitive edge.



   

                   

All right. Relatively simple.

You need a tune-up game.



   

                   

A tune-up game?



   

                   

Yeah. In college, we'd start every

season against Appalachian State



   

                   

or some slack Division II team.



   

                   

Kick the living shit out of them.

Get their confidence up.



   

                   

You know something, Paul?



   

                   

- You've just given me an inspiration.

- That's great. What?



   

                   

You're gonna assemble a team

to play the first game against us.



   

                   

And you, Mr. Crewe,

are gonna be the quarterback.



   

                   

I don't think so.



   

                   

Let me tell you something.



   

                   

In my prison, to get along,

you gotta go along.



   

                   

I just wanna do my three years

and be done.



   

                   

Three years is before

you assaulted Captain Knauer.



   

                   

Now, you could be with us

for a very long time, Mr. Crewe.



   

                   

Fine, I'll do it.



   

                   

Good choice.



   

                   

But one condition, though.



   

                   

Gotta promise me to keep

Captain Knauer off my back.



   

                   

It's a deal.



   

                   

Now, you got four weeks

to assemble a team and train them.



   

                   

What, are we gonna have a half-hour

a day to practice with a Nerf ball?



   

                   

Oh, I'll make sure my boys allow you

sufficient freedom, within these walls,



   

                   

to get your team in shape.



   

                   

What's this? "Football 'tree-outs. "'



   

                   

What the hell is a "tree-out"?



   

                   

"Tryout," you half a meatball.



   

                   

- What's this football thing about, man?

- Crewe's getting a team together.



   

                   

- To play against who?

- The guards.



   

                   

Now, I don't know about y'all,

but I occasionally have the impulse



   

                   

to physically assault one of our

finer correctional officers.



   

                   

Yeah? Well, how the hell

we gonna get to do that?



   

                   

Just show up at the "tree-outs,"

you big, dumb bitch.



   

                   

Do the girls get to play?



   

                   

We're playing footballs,

not balls-balls.



   

                   

This is bullshit. Just another chance

for the guards to beat on us.



   

                   

Don't you idiots get it? We could get

a free shot at the guards.



   

                   

This is our turn.

We could beat up on them.



   

                   

We could kill them.



   

                   

Kill them.



   

                   

You know MVP

sold his own teammates out.



   

                   

What do you think

he's gonna do to you fools?



   

                   

And that's the truth.

With some cheese on it.



   

                   

There ain't no meat loaf

between these buns.



   

                   

Yo, man, that's my flier, man!

I worked hard on it!



   

                   

You see? He ran like a little bitch,

right? You saw that, right?



   

                   

Yo, team needs you.

Team needs you.



   

                   

You sh... You come to the tr...

Come to the tree-outs.



   

                   

Crappy field, shit-ass equipment...



   

                   

Hey, man, at least we got some

world-class players over there.



   

                   

Forty-five.



   

                   

Forty-six.



   

                   

Forty-seven.



   

                   

He might make the team.



   

                   

Well, if we gotta cut him,

you're doing it.



   

                   

Forty-nine.



   

                   

Fifty.



   

                   

- All right, man.

- Good job, man.



   

                   

Well, well, well.

You a football player?



   

                   

Oh, no. I never played

no football, mister.



   

                   

So, what happened? You read the flier,

thought it looked like some fun?



   

                   

- Oh, I can't read.

- Oh, don't worry.



   

                   

Reading's for rich people.



   

                   

So you know, we're putting together

a football team. Love you to join.



   

                   

Will you teach me to football?



   

                   

Sure we'll teach you to football.

Won't we, Caretaker?



   

                   

Hey, I'll teach you anything.

Just don't eat me.



   

                   

Okay.



   

                   

Down, Shrek. Down!



   

                   

Okay, bring it in. Whoever's trying out

for the team, wake up.



   

                   

Can you give a brother

a little hustle?



   

                   

Very good.



   

                   

For those of you who don't know

who I am, I'm Paul Crewe.



   

                   

I'm gonna be your coach,

your captain, your quarterback.



   

                   

You haven't played in years.

Why can't I be quarterback?



   

                   

- You're right. Let's see what you got.

- All right.



   

                   

- Hit me, I'm open.

- Hike, hike! Hike!



   

                   

That's why.

Now, sit down and shut up.



   

                   

It slipped. I just ate popcorn.



   

                   

Question: Any of you gentlemen

ever play football before?



   

                   

- You did? Where?

- Kansas State.



   

                   

Are you shitting me?

For Coach Snyder?



   

                   

Kansas State Prison.



   

                   

Now, I hear they have

the softest mattresses out there.



   

                   

Yeah, they do.



   

                   

Not as soft as the ones

at West Texas Mental Institution.



   

                   

- Really?

- Let's finish this conversation later.



   

                   

For now, I wanna see

what you got out there.



   

                   

We'll grade them

on a scale of one to ten.



   

                   

Move it! Hustle, hustle, hustle!



   

                   

Give these guys sixes.

Give these guys fives.



   

                   

Good. Good.

Give them threes.



   

                   

Very nice!



   

                   

- Aren't we missing somebody?

- Where's the Kansas State guy?



   

                   

You assholes better not cut me!

I'm still on this team!



   

                   

Negative two.



   

                   

All right, go with negative two.



   

                   

Hey! Somebody bring me

a Diet Coke!



   

                   

- Let's do this!

- That's it!



   

                   

Five.



   

                   

Good. Seven.



   

                   

Stupid tire! You're a fricking tire!



   

                   

You think you're better than me?!

I'll kick your ass!



   

                   

Three.



   

                   

And a half?



   

                   

Yeah. That's better.



   

                   

Okay. Good.



   

                   

Yeah. Hit that bag, man.

There you go, man.



   

                   

Four.



   

                   

- Five. I don't know.

- I go.



   

                   

Come on, Switowski!



   

                   

Daddy!



   

                   

Oh, man!



   

                   

- Look at that.

- He got it off the hinge.



   

                   

- I think that's a ten.

- Let's go with a ten.



   

                   

I'm sorry. I "brokeded" your toy.



   

                   

No, that's a good thing. You should

have a victory hug with Caretaker.



   

                   

What? What you

talking about, man? Hey!



   

                   

Asshole!



   

                   

Okay, fellas, it's pretty simple.

You do a buttonhook.



   

                   

The rest of you guys block for me.

I'll take care of the rest.



   

                   

Okay? On "go. " On "go. "



   

                   

Ready? Break!



   

                   

We'll work on that.



   

                   

Okay, half speed on this one, guys.

Slow and easy.



   

                   

Ready?!



   

                   

Go!



   

                   

Stop it!



   

                   

Stop the violence!



   

                   

Can't we all get along?



   

                   

- Hey, Paul.

- Unger.



   

                   

- Team's looking great.

- Oh, yeah.



   

                   

- So are you.

- Yep. Working on it.



   

                   

The blood of the guards is gonna flow

like the rivers of ancient Babylon.



   

                   

That's good news.

Unger, you're the man.



   

                   

Good job today. You're all starting

to look really sharp out there. Yeah.



   

                   

See you tomorrow.



   

                   

- We're gonna suck.

- Yeah. No doubt about it.



   

                   

You look like

you could use a little help.



   

                   

No offense, my man,

but you're a little seasoned.



   

                   

Seasoned?



   

                   

I'm not asking to play. I'll coach.

I'm Nate Scarborough.



   

                   

Nate Scarborough?



   

                   

The Heisman Trophy winner

from Oklahoma?



   

                   

The inmate from cellblock D.



   

                   

But about a hundred years ago,

when I could run and gun,



   

                   

yeah, I was a Sooner then.



   

                   

I heard you were dead.



   

                   

No, I ain't dead.

I've been right here, rotting.



   

                   

Waiting for a chance to get back

at those sadistic guards.



   

                   

Waiting. For this.



   

                   

Well, coach, as you can see,



   

                   

we don't exactly have the cream

of the crop to work with here.



   

                   

Well, what are we gonna do?

How are we gonna find players?



   

                   

How'd they get you

to go to Florida State?



   

                   

They recruited me.



   

                   

I'll get the strippers.



   

                   

Well, now, Lindsay, this isn't

about credit or congratulations. 



   

                   

This is about giving men

who've made mistakes in their lives



   

                   

an opportunity

to rise above themselves.



   

                   

To move beyond

the bars of containment.



   

                   

Say what?



   

                   

What I would do to you.



   

                   

Yeah. Nice boot, skin man.



   

                   

Hey, why does he get to be

the kicker? I was All-State, man.



   

                   

Let's see what you got.



   

                   

That's why, you dumb-ass.



   

                   

Just go do some laps.



   

                   

I heard you boys needed to see me.



   

                   

Yeah. I want you to meet Skitchy.



   

                   

Hey, dog.

Check that building over there.



   

                   

They keep all the records

in the basement.



   

                   

He's been here so long,

he knows where everything is.



   

                   

That ain't necessarily

a good thing, is it?



   

                   

I had a parole date in '  .

But I got in a tussle with a guard and...



   

                   

One punch and it went away.



   

                   

Twenty extra years for one punch?



   

                   

Well, unfortunately for him,

the guard he punched



   

                   

just happens to be the warden now.



   

                   

Oh, shit. Warden Hazen?



   

                   

"Oh, shit" is right.



   

                   

Fight in the yard. Send backup.



   

                   

Right on time.



   

                   

- Let's do it.

- Let's do it.



   

                   

Ain't you guys glad you got

a black man for a friend?



   

                   

- Hell, yeah.

- Come on.



   

                   

Hazen has a rating system

for every con.



   

                   

What's three stars?



   

                   

The more prone to violence that the

inmate is, the more stars he gets.



   

                   

Five stars is the max.



   

                   

I didn't know that. Let's see how many

stars my maniacal ass got.



   

                   

Half a star? That's gotta be a mistake.

Check it again. Check it again.



   

                   

You're about as maniacal

as a boxful of kittens.



   

                   

Come on, that's not funny, man.



   

                   

I'm gonna have to stab somebody

or something. Get my rep up.



   

                   

Why don't we have a maniacal pillow

fight tonight. That could get it up some.



   

                   

Yeah. We can sell it to pay-per-view.



   

                   

Superstar Versus Half-a-Star. 



   

                   

Why don't you shut up before I slit your

throat and watch the dust come out.



   

                   

Come on, guys,

we only got a couple minutes.



   

                   

How about this guy?



   

                   

Damn, this fool got the chair

three times, ain't died yet.



   

                   

Well, we may not have

the most talented team,



   

                   

but we will definitely

have the meanest.



   

                   

- What's he doing that for?

- Because he's a freak.



   

                   

Hey, Sasquatch!

Someone's here to see you!



   

                   

Not too smart on your part.



   

                   

Hey.



   

                   

How's the headbanging coming?



   

                   

You're bleeding. Just so you know.



   

                   

People have told me that

you and I look a lot alike,



   

                   

so I wanted to see for myself.



   

                   

I'm gonna take a piss.



   

                   

You scared him away, dumbshit.



   

                   

You're kidding. Five-star Torres

likes The View?



   

                   

No, just Joy Behar.



   

                   

The good news is she can

breast-feed standing up. That's it. 



   

                   

Where does she come up

with this shit?



   

                   

I'm a Star Jones man myself.

I love that big bitch.



   

                   

That was, like, the furthest thing. 



   

                   

I got married so young, so, I mean,



   

                   

they weren't pressuring me,

the society was pressuring me... 



   

                   

Mr. Torres.



   

                   

Us convicts are starting up

a football team.



   

                   

Not interested.



   

                   

We're playing the guards.



   

                   

Walk away.



   

                   

Good idea.



   

                   

  for  .



   

                   

You're putting the pressure

on her right now. 



   

                   

Show's over, amigo.



   

                   

I still got    minutes of Joy Behar.



   

                   

Well, I'm cutting you short.

Back to your cell, asswipe.



   

                   

Hey, white boy.



   

                   

Cherryhead gonna play?



   

                   

Yes, he is.



   

                   

Crewe, don't forget,

I'm gonna be open.



   

                   

Green   ! Hut!



   

                   

Damn!



   

                   

Brucie. Brucie. You all right?

You breathing?



   

                   

I got a bird. His name is Ronnie.



   

                   

Well, tell Ronnie you got

knocked the fuck out.



   

                   

Wow, no bullshit. Real football?

Against the guards?



   

                   

Full contact.



   

                   

Captain Knauer is their quarterback?



   

                   

- Yep.

- So I get to tackle him?



   

                   

Yeah. You can either tackle him or hit

him over the head with that hammer.



   

                   

I wanna hurt him. Not kill him.



   

                   

Let's get out of here

before that thing bites somebody.



   

                   

All right. We'll see you

and your pet iguana at practice.



   

                   

Down, set!



   

                   

Hut! Hut!



   

                   

Hey!



   

                   

- Hit me.

- Get rid of it.



   

                   

Get rid of it!



   

                   

He didn't get rid of it.



   

                   

Sacked your ass.



   

                   

Somebody's gotta get open, guys.



   

                   

You got hammered by the hammer.



   

                   

I think I felt it on my leg.

We gotta get some speed, man.



   

                   

What'd you expect?

You got no brothers out there.



   

                   

What are you talking about?

We got Switowski.



   

                   

Switowski? That's one brother.



   

                   

That's a lonely nigga.

This ain't hockey.



   

                   

You want some speed,

you know where to go.



   

                   

Hey, yo, check out

this fake Slim Shady, man.



   

                   

I knew you couldn't resist my shit.



   

                   

I got the shakes

that'll make you quake.



   

                   

I got the fries that'll cross your eyes.



   

                   

I got the burgers that'Il...



   

                   

I just got burgers.



   

                   

I'm all right. Thank you.



   

                   

Just wanted to talk to you fellas about

possibly joining the football team.



   

                   

The only game we'd play with you is



   

                   

Slap the Point-Shaving White Boy

Till He Cries Like a Baby-Back Bitch.



   

                   

Baby-back bitch, baby-back bitch

Baby-back bitch



   

                   

- That's a big-ass robot.

- Yeah.



   

                   

You gonna help me out here?



   

                   

Thank you, Half-a-Star.



   

                   

Just so you know,

we are playing the guards.



   

                   

That ain't a team.

That's just a bunch of dumb rednecks



   

                   

giving themselves excuses

to grab each other.



   

                   

This guy must be

quite the athlete, huh?



   

                   

You risk bringing your ass in the jungle

because you know I am.



   

                   

Yeah, so you'd beat me

in a game of one-on-one, right?



   

                   

- What?

- I think it's time for you to get stepping.



   

                   

How's this, though? One game.



   

                   

I beat you, you guys play for the team.

You beat me, I'll leave you alone.



   

                   

Take that. Take that, Deac.



   

                   

This fool ain't nothing

but a thing, baby.



   

                   

- Ball, dog.

- Ball up!



   

                   

Can Crewe play ball?



   

                   

He's a natural athlete.



   

                   

So is Greg Louganis, but I bet you

he'd get his ass whupped out here.



   

                   

- Game's   . Call your own fouls.

- Okay.



   

                   

- Come on, come on.

- Give it to him, Deac!



   

                   

Did I get you?



   

                   

No, that was clean.



   

                   

He'll be all right. Call his mama.



   

                   

- If I foul you, tell me, dog.

- Okay, baby.



   

                   

Take this f... Take this foul.



   

                   

What happened there?

I think it's my ball, right?



   

                   

All right.



   

                   

Get up! Get up, Deac!



   

                   

Come on, Paul!



   

                   

- Calm down.

- What?



   

                   

Now, don't stir up

the brothers, now. Come on.



   

                   

Come on, Deacon!



   

                   

Did I get you, dog?



   

                   

Hell, no, baby. That was clean.

Good D.



   

                   

I thought he didn't wanna get hurt.



   

                   

It ain't about getting hurt.

It's about pride.



   

                   

I bet you he's pretty proud right now.



   

                   

It ain't easy being cheesy!



   

                   

Did I get you? Did I get you?



   

                   

- No, I think I'm okay, baby.

- I didn't get you, did I?



   

                   

That's traveling, bitch.



   

                   

You keep coming, huh?



   

                   

Game point, baby.

How you want the game put up?



   

                   

Foul.



   

                   

That was a bullshit call!



   

                   

My court, my ball.



   

                   

All right, y'all. Let Deac speak!



   

                   

Nice spanking that ass, dog.



   

                   

- Now, get stepping.

- Hold up.



   

                   

Y'all got a running back?



   

                   

Not any good ones.



   

                   

No disrespect, Deac...



   

                   

...but any man that can take

that kind of beating out here,



   

                   

I can't wait to see what he can do

in a contact sport.



   

                   

Shit, I'm in.



   

                   

Man, give me that cheeseburger.

You acting like a real McAsshole.



   

                   

Cheeseburger, he wants to run

with the white boys, we will let him.



   

                   

Let's do this.



   

                   

Earl Megget.



   

                   

Well, we didn't get the whole chocolate

bar, but we got a Hershey's Kiss.



   

                   

I'll take it.



   

                   

Let's get this over with, rookie,

I'm starving.



   

                   

Fresh meat, boys! Fresh meat!



   

                   

Down, set!



   

                   

Battle, you're a psycho!



   

                   

Tony, you're a fat shit! Hut!



   

                   

Holy shit!



   

                   

Get him!



   

                   

Ran right out of your shoes, huh?

Hey, manager, don't you think



   

                   

we can get our new star running back

a decent pair of cleats?



   

                   

Yeah. I think I got a cousin

that drives a truck for Reebok.



   

                   

It's cool, man.

I never had shoes growing up no way.



   

                   

- I'll be all right for now.

- Oh, okay.



   

                   

Get your country ass

back in the huddle.



   

                   

That boy got some slave feet,

you see that?



   

                   

Defense! Huddle up over there!



   

                   

Paul. Paul.



   

                   

Hey, ladies. How's it hanging?



   

                   

- Tell him.

- I'm gonna say something to him.



   

                   

I just wanted to let you know

I am your biggest fan.



   

                   

And I will be cheering my jailhouse

boobies off for you at game day.



   

                   

I appreciate that. Thank you.



   

                   

Paul.



   

                   

I appreciate you.



   

                   

Okay, thanks. I'm glad to know that.



   

                   

Okay, are you done now?



   

                   

What's wrong with you? Jealous

because I don't cheer for you anymore?



   

                   

I don't know what

you're talking about, freak show.



   

                   

Whatever, back freckles.



   

                   

Oh, yeah, back freckles.

She's making up shit now.



   

                   

I'm gonna get some water.



   

                   

That feature interview

worked better than I thought.



   

                   

I just got off the phone with ESPN .



   

                   

They want to televise

the football game.



   

                   

Guards, cons, Paul Crewe,

it's compelling stuff.



   

                   

Lots of human interest.



   

                   

Don't do that in here.



   

                   

Television.



   

                   

Dandridge, do you think

that might help my visibility



   

                   

with the registered voters

of this fine state?



   

                   

Oh, yes.



   

                   

The freak is back!



   

                   

Hey, hey. It's me again.



   

                   

You know, if I take this half down,

we could play together.



   

                   

I'm just gonna take this half down.



   

                   

Don't worry. Don't worry.

I got another ball.



   

                   

It's okay.



   

                   

You wanna serve?



   

                   

I'll serve.



   

                   

Really good news.

We started a football team.



   

                   

You like football?



   

                   

It's kind of like Ping-Pong.



   

                   

Only the ball's a little bigger

and egg-shaped, like my head.



   

                   

Just a joke. Stay calm.



   

                   

Give you a good chance

to throw people on the ground,



   

                   

hurt them like you used to when you

were a kid,    feet   inches ago.



   

                   

We'd be playing the guards.



   

                   

I think Papajohn's their safety.



   

                   

Turley, nobody gets to me.

We'll play more Ping-Pong later, okay?



   

                   

Hut!



   

                   

Effective.



   

                   

- All right.

- He brokeded my nose.



   

                   

I don't wanna play no more.



   

                   

Hey, hey, hey. Switowski,

what are you talking about?



   

                   

This is football. Shit happens.



   

                   

Paul, he brokeded my nose.



   

                   

Okay. Stop crying.



   

                   

All right. We can fix this.

Here we go.



   

                   

Okay. Good, good.



   

                   

How's it look?



   

                   

How's it look? It looks... It looks like...

It looks better than before.



   

                   

- Really?

- Yeah, it's straighter.



   

                   

More distinguished.

Kind of like a young Michael Jackson.



   

                   

I love little Michael.



   

                   

That's great. That's great.



   

                   

I think he did it on purpose.



   

                   

No, he didn't.



   

                   

Okay, maybe he did.



   

                   

You gotta apologize to him.

Come on, Turley.



   

                   

Say you're sorry.



   

                   

Come on. Say it.



   

                   

He said he's sorry.

I got him to say he's sorry.



   

                   

Yeah, yeah. We're all impressed.



   

                   

Looking good, gentlemen.

Way to work hard.



   

                   

Good practice, Paul!

Me and the girls wanna show you



   

                   

- what we've been practicing.

- Okay, hit me.



   

                   

- What we've been practicing.

- Okay, hit me.



   

                   

Come on, let's go. One, two, three.



   

                   

Give me a...



   

                   

D, D, give me a I

I, I, give me a C



   

                   

C, give me a...



   

                   

All right, all right! I got it.

Just save it for the game.



   

                   

Don't act like you ain't

want to see more, Brucie!



   

                   

- Yeah, you wish, pal.

- No, you wish I'd kiss you again,



   

                   

because your breath

smell like eight cans of shark shit.



   

                   

I wouldn't touch her

with a   -foot pole.



   

                   

- What's he talking about?

- He's a freak.



   

                   

Run, Forrest, run!



   

                   

That's how a white man plays guitar.



   

                   

Captain, he said he had some info.



   

                   

You guys have "Halo  ."

I didn't even think that was out yet.



   

                   

Focus. Turn the music off!



   

                   

Yeah, captain.

You know them convicts?



   

                   

They're starting to get

some serious players.



   

                   

But their biggest threat?

A running back. Megget.



   

                   

- He's good?

- He's fast.



   

                   

He's really, really fast.



   

                   

I mean, he's so fast,

he makes fast people look not fast.



   

                   

I got it, he's fast.



   

                   

Now, why don't you show us your speed

and get your pyro ass out of here.



   

                   

Yes, sir. Here I go. I'm sorry.



   

                   

Any books

you'd recommend, inmate?



   

                   

No, sir.



   

                   

Not much of a reader.



   

                   

Oh, come on, now, maggot.

I've seen you in here reading before.



   

                   

You requested this detail.

Isn't that right?



   

                   

No. It's the quiet time I like, sir.



   

                   

Maybe you'd like to read this.



   

                   

What the hell kind of bullshit

book is that?



   

                   

It's historical. Sir.



   

                   

Now, why would he want to read

a book about a four-eyed nigger?



   

                   

Does the N word

offend you, nigger?



   

                   

No, sir.



   

                   

Sorry about that.



   

                   

You mind fetching

these books for me, boy?



   

                   

No, sir.



   

                   

Just pick them up.

Put them on the table.



   

                   

There you go.



   

                   

You forgot one.



   

                   

Bet you'd like to hit us, huh?



   

                   

Hit you, sir? No.



   

                   

Y'all my friends.



   

                   

Pick these up.



   

                   

Go!



   

                   

Hit me! I'm open! I'm open!



   

                   

Come on! We got one week

before we play that game.



   

                   

We can't complete a pass yet.



   

                   

- Megget can't run the ball every play.

- I know, coach.



   

                   

What the hell is he smiling at?



   

                   

This better be on the up and up.



   

                   

I guarantee it.



   

                   

Let's do this shit.



   

                   

There goes the neighborhood.



   

                   

Now I'll never get to play.



   

                   

Did you see that? Did you see that?

The Deac is here!



   

                   

Nice.



   

                   

Okay, we seal off here, seal off here.



   

                   

- Cheeseburger.

- Yeah.



   

                   

You're just gonna chip this guy...



   

                   

That stings.



   

                   

It's nothing a Quarter Pounder

can't fix.



   

                   

With cheese on it?



   

                   

Hut!



   

                   

Man, that boy would catch a cold

in the desert. Here you go.



   

                   

- Everything's looking up.

- Yeah.



   

                   

Still got one more

pain in the ass to deal with.



   

                   

All right, what do you say?

How about a little best ball?



   

                   

No, I hate that bullshit.

Everyone play their own damn ball.



   

                   

Holy shit, is that Paul Crewe?



   

                   

How do you like that, boys?

The MVP coming to kiss my ass.



   

                   

So, what's on your mind, Paul?



   

                   

Got a problem with inmate Unger.



   

                   

- Is he on your little squad?

- I believe he's on your little squad.



   

                   

Mr. Crewe, would you mind

if we had a picture? Please?



   

                   

That's up to the warden.



   

                   

- Damn it. All right.

- Rewound it. Did everything.



   

                   

- The flash is ready.

- You don't need a flash. It's daylight.



   

                   

Oh, my bad.

I just want a good picture.



   

                   

You know, I think you had sex

with my wife before I married her.



   

                   

- Sorry about that.

- Oh, hell, no.



   

                   

If she's hot enough to have

a one-nighter with a pro football player,



   

                   

I must be doing all right.



   

                   

Okay, here we go.



   

                   

- Sergeant Engleheart?

- Yes, warden.



   

                   

Would you step out

of the picture, please?



   

                   

Yes, sir.



   

                   

- His wife has got the hottest ass.

- Great.



   

                   

Just cut to the chase, shall we?



   

                   

You don't actually think you have

a chance of winning, now, do you?



   

                   

We're gonna get

our asses handed to us.



   

                   

I know it. You know it.

I just don't want my players to know it.



   

                   

Your players?



   

                   

Just when I thought

I had you all figured out.



   

                   

- What does that mean?

- In the time you've been here,



   

                   

you haven't made or received

one telephone call.



   

                   

You haven't opened so much

as a single shred of mail.



   

                   

What do you give a damn

about those slimeballs?



   

                   

You never cared about anybody

in your entire life.



   

                   

Well, maybe I finally found

that sense of family



   

                   

I been yearning for since I'm a baby.



   

                   

And gosh almighty,



   

                   

my new family and I

would sure appreciate it



   

                   

if you got Unger off the field.

You hear?



   

                   

Sergeant Engleheart.



   

                   

Thank you.



   

                   

Oh, and as for your request...



   

                   

...you'll have my answer

soon enough.



   

                   

Did it rain last night?



   

                   

Not a drop.



   

                   

Son of a bitch.



   

                   

All right, boys.



   

                   

The warden is trying

to break our spirit.



   

                   

He thinks we're gonna

skip practice today,



   

                   

wait for the field to dry,

make it up tomorrow.



   

                   

You know what? Who gives a shit?



   

                   

Three days till game time.

We can handle it.



   

                   

But let me say this:



   

                   

That old man flooding this field

tells me something.



   

                   

The guy is scared.



   

                   

Scared of you sick,

degenerate convicts.



   

                   

And you know what?



   

                   

He should be.



   

                   

Because I got news for you guys.



   

                   

We're gonna win this thing.



   

                   

Did he say "win"?



   

                   

What's it gonna be, boys?



   

                   

Do we go back to our cells,

call it a day?



   

                   

Or do we get ourselves ready

for the greatest ass-kicking fiesta



   

                   

in the history of football?



   

                   

I'll leave it up to you guys.



   

                   

Hey. You're part

of the goddamn team.



   

                   

Get your point-shaving ass in there.



   

                   

You got it.



   

                   

I guess that asshole Hazen

wants to play dirty.



   

                   

- We all convicts, right?

- Right.



   

                   

Maybe it's time

we started acting like it.



   

                   

Right here. Right here.



   

                   

Take it, Deac.



   

                   

Let's see which guards

have some broken bones.



   

                   

Yeah!



   

                   

Shoes, nigga!



   

                   

Check this out. These be brass

knuckles. They damn near old as me.



   

                   

Hut!



   

                   

That's perfect, Cheeseburger!

Never been better.



   

                   

Good ball. Good ball.



   

                   

Okay.



   

                   

- Who we gonna crush?

- The guards!



   

                   

- Who we gonna kill?

- The guards!



   

                   

- Who we gonna kiss?

- The guards!



   

                   

Gotcha.



   

                   

Lights out!



   

                   

Good night, ladies.



   

                   

- Yo, Crewe!

- Yes, Mr. Caretaker.



   

                   

Check your toilet. There should be

a little surprise in there for you.



   

                   

You took a shit in my toilet?



   

                   

No, that's the surprise

I left in Brucie's toilet.



   

                   

- You got something else.

- All right.



   

                   

Well, would you look at this.



   

                   

A bottle of Ketel One

and two glasses?



   

                   

Now, what would I need two for?



   

                   

Just shut up

and pour me a drink, bitch.



   

                   

- Man, who taught you to be so cool?

- My mama.



   

                   

Now, when I get out of here, I don't

want you to get all Hollywood on us.



   

                   

I want you to meet her.



   

                   

Here, look at my girl.

She's your biggest fan.



   

                   

Your mom's beautiful.



   

                   

And you, you are ugly.



   

                   

Thank you. Got it.



   

                   

Here's to...



   

                   

...the first friend I've had

in I don't know how long.



   

                   

Hey, I thought

I was your friend, Paul.



   

                   

You are, Switowski. Just finish your

coloring book and go back to sleep.



   

                   

Okay.



   

                   

And here's to having one of these

with you on the outside,



   

                   

sometime in the next

three to five years.



   

                   

- Yo, Crewe.

- Yes, sir.



   

                   

You being a ex-football player

and all,



   

                   

I'm sure you got a lot

of hot ass on the outside.



   

                   

Well, let's not forget I wasn't

the most popular guy out there.



   

                   

Don't give me that shit.



   

                   

O.J. Chopped his wife's head off

and still got some ass.



   

                   

Yeah.



   

                   

My mama taught me not to kiss

and tell. Now, go to sleep.



   

                   

All right. I got one more question

to ask you.



   

                   

Okay. What is it?



   

                   

Why'd you shave those points?



   

                   

Didn't you read the papers?

I'm innocent.



   

                   

Yeah. Ain't we all?



   

                   

Yo, Crewe, what would you say



   

                   

if I could get you film

from the guards' games last year?



   

                   

I would say that's incredible,

but how?



   

                   

Thanks, gentlemen.



   

                   

The warden will be done with him

in    minutes.



   

                   

- We can handle him.

- Yes, ma'am.



   

                   

Then you're gonna, ma'am.



   

                   

Nice job.



   

                   

I can't tell you how much this means

to me. Thank you, Lynette.



   

                   

Now Nate can study

all the guards' formations.



   

                   

Not so fast, sugar bear.



   

                   

You gotta earn them.



   

                   

We only got    minutes,



   

                   

but, sunshine, we're gonna

make them all count.



   

                   

One more, please?



   

                   

Let's go.



   

                   

- Quiet down. Guys.

- Let's go.



   

                   

Before we watch the guards'

game film from last season,



   

                   

we have a special presentation

from our very own Mr. Paul Crewe.



   

                   

What are you talking about?



   

                   

What's going on?



   

                   

Now I gotta relive this shit?



   

                   

Yeah!



   

                   

You can say this,

my man's a team player!



   

                   

You know what they say. Once

you go gray, there ain't no other way!



   

                   

Hey, hey, hey. Brucie! Brucie!

I'm glad you think that's funny,



   

                   

because I got something pretty funny

to show you guys.



   

                   

Tony, hit it. You're gonna like this.



   

                   

- What the hell is this?

- What? It's good. It keeps going.



   

                   

- Hi. 

- Here I am. 



   

                   

Turn this shit off. Turn it off.



   

                   

No!



   

                   

Yeah, yeah, yeah. Very funny.

Trick photography.



   

                   

Nothing happened.

Nothing happened.



   

                   

I was showing a little wrestling move.

That's all.



   

                   

Knock it off!



   

                   

Knock it off!



   

                   

It's time we took a look

at what we came here to see



   

                   

before the guards come back.



   

                   

The first film is the guards' offense

against Texas Southern.



   

                   

Now, as you can see,

they're running a standard wishbone.



   

                   

So you're telling me that these animals

are watching our game films.



   

                   

- Is that right?

- Yes, sir, boss.



   

                   

They got all last season.



   

                   

Seems to me that we ought to

do something about this.



   

                   

What do you want me to do?



   

                   

You're the criminal. Be creative.



   

                   

But on game day, if I so much as...



   

                   

What are you doing?



   

                   

I don't know.

I've had hot flashes all shift,



   

                   

and now my nipples are killing me.



   

                   

Why are we talking about

your nipples?



   

                   

We're not. Just go do

what you're doing there.



   

                   

Guys.



   

                   

I want Crewe finished.



   

                   

Yes, sir. You give me the inspiration,

sir. I got something for him.



   

                   

Hut!



   

                   

Everybody!



   

                   

Huddle up!



   

                   

Every day we've been taking shit,

for a long time.



   

                   

Tomorrow, payback.

Now, think about that for a second.



   

                   

- What time is it?

- Game time!



   

                   

- What time is it?

- Game time!



   

                   

- What time is it?

- Game time!



   

                   

Tomorrow,   :   the bus leaves.

Don't be late!



   

                   

Where the hell is Caretaker?



   

                   

I don't know.



   

                   

A gift for you, Mr. Crewe.



   

                   

How does he listen

to that cracker shit?



   

                   

We're here deep in the heart

of toothless country,



   

                   

coming to you from a simple

Texas high school stadium



   

                   

that's been retrofitted

for the big event. 



   

                   

Now, when my man Travis

tried to drag me out here, I said,



   

                   

"What are you, brain-dead from

talking to too many Raider fans?



   

                   

It's not going to work. "



   

                   

But the fact of the matter is,

this could shape up as an epic day.



   

                   

Hot-dog vendors, high-powered rifles,

I love the combination. 





 

                   

And apparently so do the fans. 



 

                   

Hey, shitheads! Listen up!



 

                   

Everybody on their feet

for the warden.



 

                   

Anthony, wow. You can sit down.



 

                   

Thank God.



 

                   

Gentlemen, Texas marshals

have been kind enough



 

                   

to supply us with a dozen

of their finest sharpshooters.



 

                   

So for those of you thinking

of mingling with the civilians



 

                   

or trying to make a break for it,



  

                   

you will be shot.



  

                   

In the head.



  

                   

Now, let's all go out there

and have some fun!



  

                   

Crewe! I'll see you on the field!



  

                   

I think he's in love with you.



  

                   

All right, listen up.



  

                   

I know it's hard to get psyched for

the game without Caretaker being here.



  

                   

But somehow that sick,

skinny bastard



  

                   

found a way to get us all fired up

from beyond the grave.



  

                   

Caretaker's last gift to us.



  

                   

Battle, I presume this is yours.



  

                   

I still don't think that's big enough.



  

                   

- That's it?

- No, that ain't it.



  

                   

Caretaker said he'd find us

some gear to wear.



  

                   

I think he found us a name too.



  

                   

Mean Machine! Mean Machine!

Mean Machine! Mean Machine!



  

                   

Good afternoon and welcome to a

very special edition of ESPN football. 



  

                   

As today, the semipro

Allenville Federal Prison guards



  

                   

will be taking on the very prisoners

they guard. 



  

                   

And with this special game, folks,

comes a special broadcast,



  

                   

as I'm joined in the booth

by Baby Face Bob.



  

                   

Say hi to the folks, Bob-O.



  

                   

Chris, we went to a commercial.



  

                   

This job, Bob,

it's a lot of give and take.



  

                   

So when I bring you in,

don't be afraid to talk to the folks.



  

                   

Unless you don't want to.



  

                   

And here come the cons,



  

                   

led by former NFL MVP quarterback

Paul Crewe. 



  

                   

Holy shit. Hey, hey, hey.



  

                   

Well, hello. How are you?



  

                   

Back away from the girls!



  

                   

- Hey, now.

- Call me!



  

                   

What the hell

are you dressed up for?



  

                   

Hey, I didn't spend    years

in the joint just to watch this game.



  

                   

And there in the

high-security bleachers



  

                   

are the good-behavior cons,

along with their... 



  

                   

... cheerleaders?



  

                   

We're the mean machine

Don't mean to dis you



  

                   

We're gonna kick your ass

And then we'll kiss you



  

                   

Hey! Ho!

What?



  

                   

I didn't do it!



  

                   

Come on, Batt!



  

                   

- What's that?

- Did you see that?



  

                   

Damn it!



  

                   

Papajohn's at the    the   .

And he will score. 



  

                   

Sweet dreams, bitch.



  

                   

That's a   -yard return. 



  

                   

And I gotta tell you, the cons seem

more interested in hitting the guards



  

                   

than tackling the ball carrier.



  

                   

Hey, Mom. Hey, Dad.

Thanks for picking me up from school.



  

                   

And here comes the big story

of the day. 



  

                   

Paul Crewe,

serving a three-year sentence,



  

                   

hasn't played since he was banned

from the NFL six years ago. 



  

                   

Center, shift it! Shift it!



  

                   

Hey, Sasquatch!



  

                   

Twenty, hut!



  

                   

Crewe drops back to pass. 

Turley's leaving him unprotected. 



  

                   

Fumble!



  

                   

Holy shit!



  

                   

Goddamn it.



  

                   

That's gonna be a personal foul

on the big guy. 



  

                   

And this is certainly an inauspicious

start for the cons. 



  

                   

Come here! All right! You got him.

Now, protect me!



  

                   

Let's go! Hold them!



  

                   

And here comes Knauer and that

big offensive unit for the guards. 



  

                   

Eighty-six.



  

                   

Back to your cell.



  

                   

Hut! Hut!



  

                   

Knauer has Potter wide open. 

Touchdown, guards. 



  

                   

- Son of a bitch!

- And in the first    seconds,



  

                   

the guards are up

by two touchdowns. 



  

                   

This one looks like

it could be over early.



  

                   

Sorry.



  

                   

What are we celebrating for?!

It's   -nothing!



  

                   

You guys wanna beat these assholes,

do it on the scoreboard!



  

                   

Are you okay? Oh, God,

you're not hurt, are you?



  

                   

Jesus, you sound like my mother.



  

                   

Listen, if you wanna cry,

you go ahead and cry. I'll cry with you.



  

                   

Get off me! Get back out there

and kick some ass!



  

                   

Why are you yelling at me?

All I did was care!



  

                   

Look! A broken leg will heal.



  

                   

A loss to the Mean Machine

lasts forever.



  

                   

Sorry, guys.



  

                   

Yeah, yeah. Me too.



  

                   

All right. Now, let's get started!



  

                   

Now, get the hell out there! Let's go!



  

                   

Way to go! Way to go!



  

                   

There's the first sign of life

from the cons. 



  

                   

Let's see if Paul "Motley" Crewe

can make something happen.



  

                   

Hut!



   

                   

On first down, Crewe will throw. 

He's got Deacon wide open. 



   

                   

That's gotta be pass interference. 



   

                   

But the ref is waving it off. 



   

                   

- What?!

- Oh, come on!



   

                   

Come on, now. I'm in this hellhole

for less than that.



   

                   

- Be a man and make a call.

- You're right.



   

                   

Unsportsmanlike conduct!

Eighty-eight black!



   

                   

What?!



   

                   

Come on!



   

                   

This is baby-back bullshit!



   

                   

- Bullshit, D.

- Calm down. Let it go.



   

                   

Let's call that one

a questionable call.



   

                   

Blue    hut!



   

                   

The give is to Megget. He spins

to the outside. Megget has room. 



   

                   

He's at the   . The   .



   

                   

He's brought down hard,

by his facemask. 



   

                   

What? Oh, come on, man!

That was a facemask!



   

                   

- You're not gonna call that?

- I saw a clean tackle, sir.



   

                   

What you looking at?

Are you serious?



   

                   

Tell it to the parole board, criminal.



   

                   

I mean, this is absurd.



   

                   

We can't win with the refs

on the payroll!



   

                   

Listen up. I got an idea

to end all this bullshit.



   

                   

Come on, let's all stay up! Come on!



   

                   

Down, set!



   

                   

Red   .



   

                   

Cover your man!



   

                   

Red   . Hut!



   

                   

That one hurt my marble sack.



   

                   

All right!



   

                   

- You all right?

- Yeah.



   

                   

- What down is it?

- Fifth.



   

                   

- No, no. It would be fourth down.

- Okay.



   

                   

What do you think?

Should I go for the left nut this time?



   

                   

Underneath! Let's go!



   

                   

Ref, you gotta get in the game!

Right over here!



   

                   

Well, I don't quite get this, but on fourth

and    the cons are gonna go for it. 



   

                   

Down, set!



   

                   

Red   .



   

                   

Red   . Hut!



   

                   

You gotta always protect

the McNuggets.



   

                   

How about from now on, you call

a fair game? How's that sound?



   

                   

Sounds good.



   

                   

Okay. Wet Willie.



   

                   

Yeah, you like that.



   

                   

And so the guards will take over



   

                   

after one of the strangest

offensive series I've ever seen. 



   

                   

Okay, boys. We know who doesn't

have any balls out there now.



   

                   

Have we got any?

Have we got some balls?



   

                   

- Yeah!

- All right! Let's go kick some ass!



   

                   

Come on, Swit, stand them up, baby.



   

                   

White   . White   . Hut, hut, hut!



   

                   

Knauer, play action. 

Here comes the blitz. 



   

                   

Switowski is so big, it's like being

tackled by a Coke machine with legs. 



   

                   

This is fun!



   

                   

Nice to see you smiling, Bob.



   

                   

Thanks, Chris.



   

                   

Green   ! Hut!



   

                   

Third and  

and the give is to Megget. 



   

                   

He's to the   

where he'll come up short. 



   

                   

But look at Turley push the pile. 



   

                   

And now Crewe. 



   

                   

And that's a first down!



   

                   

And look out. Boy, somebody better

take control of this game soon,



   

                   

or they're gonna need body bags

on the sidelines. 



   

                   

Let's go, guys.



   

                   

Start of the second quarter. 



   

                   

Cons still down by two touchdowns,

but they finally have some momentum. 



   

                   

Hut!



   

                   

Crewe with a shovel pass to Megget. 



   

                   

And Megget scrambles

for a first down. 



   

                   

Oh, you fooled me.



   

                   

- I got you there, didn't I?

- You did.



   

                   

You know, Engleheart, you are

the best-looking guy on your team.



   

                   

You know, Paul, in the midst of all this,

for you to say something like that is...



   

                   

Come on, let's go. Let's go, D.



   

                   

First and    at the guards'   .



   

                   

Crewe dumps it over the middle

to Deacon Moss. 



   

                   

And he's hammered at the    for a

  -yard pickup, and that's a first down. 



   

                   

- Hut!

- Crewe, trying to get his team



   

                   

on the scoreboard. 



   

                   

He will throw. 



   

                   

And it's caught by Deacon Moss

for a touchdown!



   

                   

All right!



   

                   

And so there'll be no shutout today,

as the cons are on the board. 



   

                   

Quit booing, people.

Both teams are trying very hard!



   

                   

What the hell's wrong with you?

Stop acting like a damn cheerleader!



   

                   

- Sportsmanship, try it.

- Shut up.



   

                   

Damn.



   

                   

 :   left in the first half. 

And Dunham is back in at fullback. 



   

                   

And he is a load, at  ' ",    .



   

                   

Dunham, breaking tackles. 



   

                   

He refuses to go down. 



   

                   

But he finally does

after a   -yard gain. 



   

                   

That's how a white man

runs a football.



   

                   

If I was on D, I'd crack you square

in that egg-ass head of yours.



   

                   

Yeah, but you ain't on D.

Are you, bitch?



   

                   

Switowski! Come here.



   

                   

Do you know what

he said to me in the library?



   

                   

Yes. Him. Out.



   

                   

D, D, defense

D, D, defense



   

                   

The cons don't seem to have

an answer for Dunham,



   

                   

who's averaging close to    yards

a carry this half. 



   

                   

Green   .



   

                   

Green   . Hut!



   

                   

Oh, what a hit on Dunham

by Switowski. 



   

                   

I think I made him shit himself.



   

                   

- Shit!

- I think he just shit himself.



   

                   

I think he just shit himself.



   

                   

Good Lord.

This guy shit himself bigtime.



   

                   

See? I told you

I made him shit himself!



   

                   

Yo! I'll make sure I send

them books to the hospital, pimp.



   

                   

And some diapers.



   

                   

Nineteen seconds.

We got a lot of ground to cover.



   

                   

So you bastards remember

that play we practiced in the mud?



   

                   

What are you talking about?

That was some schoolyard bullshit.



   

                   

Yeah. Let's try some

schoolyard bullshit.



   

                   

Come on, D, let's go.



   

                   

Down, set! Green   .



   

                   

Green   . Hut!



   

                   

The clock starts to run. Crewe hands

the ball to Megget. It's a reverse. 



   

                   

Cheeseburger Eddy's got it. 



   

                   

Go, baby, go!



   

                   

He laterals to Deacon. 



   

                   

Tackle him!



   

                   

To Turley. 



   

                   

The clock is running. To Brucie. 



   

                   

Shades of Cal-Stanford. 



   

                   

Back to Crewe. 



   

                   

He tosses to Megget. 



   

                   

Tackle him!



   

                   

And look at that little Megget run. 



   

                   

Three seconds left. 



   

                   

Yeah! Go!



   

                   

He could go all the way. Touchdown!



   

                   

Did you see that?!



   

                   

Do that sound again.



   

                   

I like that.



   

                   

And so, on a miraculous play,



   

                   

the cons end the first half

with the score:   -all. 



   

                   

Bring it in.



   

                   

Do you have any idea

who's beating you out there?



   

                   

This was supposed to be a blowout,



   

                   

and they're showing you up

in front of the whole nation.



   

                   

The whole nation!



   

                   

I like it when he's angry.



   

                   

- I told you!

- Way to go, baby, way to go.



   

                   

What in the hell do you think

you're doing out there?



   

                   

Playing football, sir.



   

                   

I didn't say nothing about winning.



   

                   

We're not winning. Not yet.



   

                   

You got yourself in quite

a predicament, Mr. Crewe.



   

                   

- Is that right?

- See, it's just come to my attention



   

                   

that inmate Unger

has been taken into custody



   

                   

for the murder of Caretaker.



   

                   

- Good.

- Oh, yeah, it's good.



   

                   

Only thing is, he claims

to have an accomplice.



   

                   

Claims you knew all about it.



   

                   

Hell, he even says

you sent Caretaker to your cell.



   

                   

Bullshit.



   

                   

Captain Knauer says

he saw you planning it with Unger.



   

                   

There's no way

that could hold up in court.



   

                   

Court?



   

                   

Hell, boy, in Allenville,

I'm the judge, I'm the jury,



   

                   

and in your particular case,

I'm the executioner.



   

                   

What do you want?



   

                   

I want you to lose.



   

                   

I can't do that.



   

                   

Of course you can. After all,

you've had plenty of practice.



   

                   

But the men. It's more important

to them than it is to you.



   

                   

Okay. Suit yourself.



   

                   

Spend the next    years

of your useless life in prison.



   

                   

All right, I'll do it.



   

                   

But I don't want my guys hurt.

You get ahead, you coast. We clear?



   

                   

Fine. Right after I get

a two-touchdown lead.



   

                   

I tell you what bothers me

the most, warden.



   

                   

That you're not gonna be

out there on that field with us,



   

                   

getting what you got coming to you.



   

                   

The only thing coming to me

is victory.



   

                   

Mean Machine.



   

                   

It's cute.



   

                   

- Let's go, boy!

- We can do it, baby!



   

                   

Captain.



   

                   

May I have a word?



   

                   

Don't worry, warden,

we'll take care of business.



   

                   

I already have.



   

                   

What? We can win this on our own.



   

                   

Captain, a man in my position

doesn't leave things to chance.



   

                   

Now, after you get a comfortable

three-touchdown lead,



   

                   

I want you to inflict as much pain

as humanly possible.



   

                   

Do not let up, you hear?



   

                   

I want those cons to understand

who owns them.



   

                   

Do I make myself clear?



   

                   

Oh, yes, sir.



   

                   

Good.



   

                   

There's the kickoff, and we're

under way in the second half. 



   

                   

Megget is finally brought down

at the guards'   



   

                   

where Paul Crewe will take over. 



   

                   

And what a first half he's had. 



   

                   

Here we go! Here we go!



   

                   

Down, set!



   

                   

Y   . Hut!



   

                   

On first and    Crewe will pass. 



   

                   

- He's got Deacon wide open. 

- Come on.



   

                   

Oh, incomplete. 



   

                   

It's okay. Get your head up.



   

                   

It's all right, man.



   

                   

Come on, Paulie.



   

                   

Second and    from the   . Crewe's

looking for Deacon once again. 



   

                   

- He's open!

- He's open!



   

                   

But overthrows it. 

And it's picked off by Papajohn. 



   

                   

Look out! He might go. 



   

                   

Say goodbye. 



   

                   

Touchdown!



   

                   

The first mistake

Crewe's made all day.



   

                   

Short memory, baby.

We'll get it back. We'll get it back.



   

                   

Defense, let's do this!



   

                   

 :   left in the third quarter,



   

                   

and Crewe has struggled

thus far in the second half. 



   

                   

Hut!



   

                   

The pitch to Megget. 

Oh, my! That ball is live!



   

                   

It's picked up by Lambert. 



   

                   

He's at the    the   

and he will score!



   

                   

Yeah! Touchdown! Yeah!



   

                   

Crewe took a shot on that play

and he's getting up slowly. 



   

                   

Meanwhile, in the end zone, the guards

have something to celebrate,



   

                   

as they find themselves up

by two touchdowns. 



   

                   

This is simply a different Paul Crewe

we're seeing here in the second half. 



   

                   

There's the old Paul Crewe

we love to write about.



   

                   

What the hell are you

doing out there?



   

                   

I'm done.



   

                   

I'm out. That's it.



   

                   

- Where you hurting?

- My knee.



   

                   

- Seems okay to me.

- Well, it ain't.



   

                   

If Crewe can't go, I don't know how

deep these guys are at quarterback.



   

                   

The guards will try to keep it away

from Megget, so they'll pooch kick. 



   

                   

Fair catch. Fair catch.



   

                   

As Big Tony calls for the fair catch. 



   

                   

Watch out. That was as late a hit

as I've ever seen. 



   

                   

And even some of the home crowd

not liking that one. 



   

                   

Hang in there, partner.



   

                   

Can of corn. Can of corn,

and I'll be fine. Can of corn.



   

                   

Yeah, I'd have a hard time

looking at me too.



   

                   

Brucie.



   

                   

Yeah, coach.



   

                   

You're the only one that knows

this offense, son. Now, do it.



   

                   

Coming into the game,

replacing the injured Paul Crewe,



   

                   

is number   Brucie. 



   

                   

All right, all right.

Crewe's playing like shit.



   

                   

That's his problem.

I'm gonna bring us back.



   

                   

Right,    Flex Dive Motion

on one. Ready!



   

                   

Break!



   

                   

Yeah. It's Brucie's

time to shine, baby.



   

                   

Okay. Down, set. Hut!



   

                   

There's the snap and the ball is

fumbled. And the guards recover. 



   

                   

I knew I shouldn't

have had that popcorn.



   

                   

The guards are in command here

as we move late into the third quarter.



   

                   

Ninety-eight. Hut! Hut!



   

                   

The give is to Potter. 

Back to Knauer. 



   

                   

He's got a man open

deep downfield. 



   

                   

He'll throw the flea-flicker!



   

                   

And he's got it. Touchdown, guards. 



   

                   

And this game is starting

to look like a blowout. 



   

                   

Hey, man, after all Caretaker did,

this is how you show him love?



   

                   

Don't worry about it.



   

                   

You haven't changed one damn bit.



   

                   

All right. Down, set!



   

                   

Back in at quarterback is Brucie,



   

                   

who will try to find a handle

on the ball this time. 



   

                   

Throw it, Brucie!



   

                   

Oh, shit!



   

                   

And look out. 



   

                   

What a shot he took!



   

                   

How much more blood do you want?



   

                   

I think the cons are just about

out of options at quarterback. 



   

                   

Hey, Skitchy,

let me ask you something.



   

                   

When you popped the warden,

was it worth it?



   

                   

Was it worth spending

the rest of your life in here?



   

                   

Was it worth it? It was worth

every goddamn second.



   

                   

What the hell is he doing?



   

                   

Paul Crewe must be feeling better,

because here he comes.



   

                   

All right, I missed you guys,

so I'm back.



   

                   

We got a lot of work to do.

Let's get it going.



   

                   

Deuce right,   . Fly on two. Ready?



   

                   

Break.



   

                   

As we start the fourth quarter,

cons down by three touchdowns. 



   

                   

Wide left! Tight left!



   

                   

Black   . Hut! Hut!



   

                   

Here comes the blitz,

and no one's blocking!



   

                   

And Crewe will be sacked

for a big loss. 



   

                   

That looked like a message to Crewe

from his offensive line. 



   

                   

Did you see that, man?

They're quitting on him.



   

                   

Okay, baby. Jailbreak Blitz. Ready?



   

                   

We got that out of the way.

I deserved it.



   

                   

- Now we gotta play some football.

- Switch it! Switch it!



   

                   

Cons need to do something

to get back in this game. 



   

                   

And that's not it!



   

                   

And Crewe is leveled!



   

                   

I don't think he's gonna get up

from that one.



   

                   

Nice hit!



   

                   

But he is. And I don't know how,

after that last hit. 



   

                   

All right, punt team!



   

                   

Keep them off the field!

We're going for it.



   

                   

Dumbshits are going for it!

Let's go! Let's go!



   

                   

Come on back, if he wants to get

his ass kicked. Come on back.



   

                   

This is unbelievable. 



   

                   

Fine. You guys don't wanna help me,

I'll do it on my own. On two.



   

                   

Let's go, to the line.



   

                   

On fourth and   



   

                   

the cons are gonna go for it. 

This could be the ball game right here. 



   

                   

Red   . Hut! Hut!



   

                   

Crewe dodges the blitz,

but he loses his helmet. 



   

                   

And he's not going down. 



   

                   

He's got the first down. 



   

                   

Time-out!



   

                   

- Man, oh, man.

- Not bad.



   

                   

Huddle up.



   

                   

Look.



   

                   

I'm sure you already know this,

but I never said it out loud.



   

                   

I did throw that game.



   

                   

I did it.



   

                   

I was in a bad way

with some worse people.



   

                   

After I did it,



   

                   

I felt so shitty I wish I would have

just let them kill me instead.



   

                   

Now the warden wants to pin

Caretaker's murder on me



   

                   

if I don't throw this game.



   

                   

So it looks like I'm gonna get

to know you guys a lot better,



   

                   

because I ain't doing that

twice in a lifetime.



   

                   

We got a little time left.

We can still do this.



   

                   

I'm begging you.

Put your hands in here.



   

                   

Okay. Thank you. Now, who are we?



   

                   

Mean Machine!



   

                   

Come on, Mean Machine, let's go!



   

                   

That's great news.



   

                   

All right. We got ourselves a game.



   

                   

Brown   . Hut!



   

                   

First and    from the   .

Crewe finds Deacon open in the flat. 



   

                   

Hut!



   

                   

The give is to Megget. And he fights

his way for a  -yard gain. 



   

                   

One yard, baby. One more yard.



   

                   

Hut! Hut!



   

                   

Crewe tries a sneak. Or is it?



   

                   

He flips it back to Megget. 



   

                   

Megget's got the first down

and more. 



   

                   

And Megget is down to the  -yard

line, where it'll be first and goal. 



   

                   

Hut!



   

                   

Crewe hands it to Turley. 

And look at the big man go. 



   

                   

Tackle him!



   

                   

Touchdown!



   

                   

That was some rumbling, bumbling

stumbling right there.



   

                   

And listen to the crowd



   

                   

as this underdog con team

is starting to win them over. 



   

                   

Third down and  . Guards have

the ball on their own   -yard line. 



   

                   

Knauer needs a first down

to put this game away. 



   

                   

White   !



   

                   

White   !



   

                   

And look at Battle take off. 



   

                   

He knocks the ball loose!



   

                   

There's a dogpile in the backfield. 

The refs are trying to sort it out. 



   

                   

My arm!



   

                   

The cons recover!



   

                   

We got the ball! We got the ball!

We got it! We got it!



   

                   

With just over two minutes left to be

played, this has turned into a game.



   

                   

Crewe will start in great field position

at the guards'   .



   

                   

And look at this formation. 

The guards, they're confused. 



   

                   

Shift over! Move!



   

                   

They're trying to call time-out,

but there's the snap. 



   

                   

Moss is behind a wall of cons. I

wouldn't wanna be in front of that thing. 



   

                   

And they'll score!



   

                   

- Hey! Is that legal?

- Yeah, it is.



   

                   

- Is that a touchdown?

- Yes, it is.



   

                   

What is going on here? Shit!



   

                   

And with the extra point,

the cons are down by just seven. 



   

                   

- Brucie!

- Yeah. Yeah, coach.



   

                   

I want you to go out there

and kick off.



   

                   

- I can do it.

- Kick off!



   

                   

Brucie can't kick worth a shit.



   

                   

I know. Recover the ball.



   

                   

Jesus Christ, my savior.

If you help me out with this one,



   

                   

I promise to stop cheating on my wife

with black guys. Amen.



   

                   

Back in the game is Brucie,

and he'll do the honors. 



   

                   

And it's a horrible kick. 



   

                   

But the ball is tipped!



   

                   

And the cons have come up with it!



   

                   

- We got it! One time-out.

- Got it. Got it.



   

                   

That's it, Brucie. Hey, hey!

My bad. My bad. My bad. Come on.



   

                   

Give me that.



   

                   

Damn...



   

                   

Well, that felt unnecessary.



   

                   

Cons have enough time

for one final drive. 



   

                   

Crewe drops back to pass. 

He's under pressure. 



   

                   

- Watch the pass!

- He's looking for Deacon. 



   

                   

He gets the ball up, but he's leveled. 



   

                   

And Deacon's got it for a first down,

but he stayed inbounds. 



   

                   

Tick, tick, tick. 

The clock keeps running. 



   

                   

Clock's running. Clock's still running!

Clock's still running!



   

                   

On the ball!



   

                   

Goddamn it! Do something!



   

                   

Hut!



   

                   

Crewe. He's looking to throw. 

Under pressure again. 



   

                   

Go! Get rid of it! Go! Go!



   

                   

He pitches it to Megget. 

He's got some room. 



   

                   

Here we go. Here we go.

Go, Megg! Go, Megget!



   

                   

- Go, Megget!

- Get him!



   

                   

He could go all the way!



   

                   

But he won't!



   

                   

Goddamn it!



   

                   

And Megget is hit hard

at the   and he's hurt. 



   

                   

My knee, man!



   

                   

You busted your knee for us,

we'll bust our ass for you.



   

                   

Hey, coach, I need a back!



   

                   

Just win this shit.



   

                   

I'm going in.



   

                   

Coach, you serious?



   

                   

Yeah, I'm serious.



   

                   

And look who's

coming into the game. 



   

                   

You can do it!



   

                   

Get that old ass of yours

in the end zone!



   

                   

We gotta win this thing! Come on!



   

                   

No, no, no. Hey, old man.



   

                   

Absolutely not.

You're gonna get killed out here.



   

                   

They've been trying that for years.

Don't worry, I got the perfect play.



   

                   

- I ain't handing you the ball.

- You don't have to.



   

                   

Nate Scarborough, the former

Heisman Trophy winner from     



   

                   

is gonna play tailback,



   

                   

but he's gotta be in there more

for moral support than anything. 



   

                   

Mean Machine. Mean Machine.



   

                   

Mean Machine. Mean Machine.



   

                   

Mean Machine, Mean Machine

Mean Machine



   

                   

Mean Machine!



   

                   

Mean Machine!



   

                   

Six seconds left on the clock. 

Cons down by seven. 



   

                   

They must score on this play. 



   

                   

Don't let them through!



   

                   

Down, set!



   

                   

- Black   !

- Come on, D!



   

                   

Black   ! Hut! Hut!



   

                   

Black   ! Hut! Hut!



   

                   

The give is to the big man, Turley. 



   

                   

He's stopped by Lambert

at the line for no gain. 



   

                   

No! Wait!



   

                   

The ball's picked up

by Scarborough. 



   

                   

Come on!



   

                   

Touchdown!



   

                   

What an amazing comeback, folks!



   

                   

Taking a play from

the old Nebraska playbook. 



   

                   

The Fumblerooskie.



   

                   

Easy. Easy.



   

                   

You still alive, old man?



   

                   

Never felt better in my life.



   

                   

You're a sick bastard. Come here.



   

                   

All right.



   

                   

And now the cons are a mere

extra point away from overtime.



   

                   

Mean Machine!



   

                   

Team vote: We go for the win?

We go for the tie?



   

                   

Hell, guys, we're convicts.

We always go for it all.



   

                   

Unfortunately, that's why

we're all in the joint.



   

                   

What would Caretaker do?



   

                   

Give me that blackboard.



   

                   

Yeah, come on!



   

                   

Come on.



   

                   

Are you serious?



   

                   

I don't know. That play is wack.



   

                   

It's gonna work.



   

                   

It's gonna work. Let's go. On the ball.



   

                   

Come on! Let's go!



   

                   

Let's go, y'all! Let's go!



   

                   

I think it's gonna work.



   

                   

Get them out there.



   

                   

And wait a minute. 

Crewe is coming back into the game. 



   

                   

The cons are gonna go for the win. 



   

                   

They're going for it.



   

                   

Crewe, trying to settle his team

into formation. 



   

                   

But there seems to be

a lot of confusion. 



   

                   

Come on! Run the play!



   

                   

Turley! Turley. Over here.



   

                   

Move your giant ass right here!

Right here.



   

                   

Come on, baby. Come on.



   

                   

The play clock is still running. 

Crewe better call a time-out. 



   

                   

Come on, Crewe!



   

                   

They don't know what we're doing!



   

                   

Run the play we set up.



   

                   

I think you're still dizzy from that hit!



   

                   

The snap is to Deacon. 



   

                   

It's a trick.



   

                   

He throws it to Crewe. 



   

                   

They did it! Unbelievable!



   

                   

The cons win!



   

                   

We win!



   

                   

Group hug in the shower tonight!



   

                   

Or not. Or not.



   

                   

Well, there you have it. 



   

                   

A bunch of ruthless criminals

have beaten



   

                   

the men that uphold

our justice system. 



   

                   

Criminals are people too, Chris.



   

                   

Now, give me your wallet.



   

                   

What?



   

                   

Just kidding.



   

                   

You got a lot of balls, Crewe.

You played a hell of a game.



   

                   

And don't worry, I know you had

nothing to do with Caretaker's murder.



   

                   

And I'll back that up.



   

                   

Thank you, baby.



   

                   

Mean Machine! Mean Machine!



   

                   

You humiliated me. I can't believe

you couldn't even win a fixed game.



   

                   

Now, where the hell

does he think he's going?



   

                   

He's escaping.



   

                   

He's escaping.



   

                   

Officer, shoot that man!



   

                   

But, sir, there's people.



   

                   

Shoot him.



   

                   

Crewe!



   

                   

Captain, I order you

to shoot that prisoner.



   

                   

Shoot him! Fire!



   

                   

Crewe!



   

                   

Damn it, I'm giving you an order,

captain!



   

                   

Crewe!



   

                   

Pull the trigger!



   

                   

It's the game ball.



   

                   

Hey.



   

                   

Why don't you stick this

in your trophy case.



   

                   

- You have a nice time, old man?

- Yeah.



   

                   

Yeah? Okay.

So, what do we do now?



   

                   

Well, the first thing is, we tell the

team where they're hiding Unger.



   

                   

Oh, I can't wait to see

what Switowski does to him.



   

                   

Great game, sir.



   

                   

That's a week in the hotbox!



   

                   

Who gives a shit?
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
