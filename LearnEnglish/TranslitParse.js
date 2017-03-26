//de inlocuit caracterele ' cu ''
var beginId = 70; //nou id
var beginPhraseId = 723; //nou id
var courseName = "C# Fundamentals with Visual Studio 2015"; //nou titlul
var sqlCommand = "Sql(\"SET IDENTITY_INSERT [dbo].[Videos] ON\");"
var sqlCommandPhrases = "Sql(\"SET IDENTITY_INSERT [dbo].[VideoPhrases] ON\");"
console.log(sqlCommand);
console.log(sqlCommandPhrases);
translit.modules.forEach(module => module.clips.forEach(function (clip){ 
	console.log("Sql(\"INSERT INTO [dbo].[Videos] ([Id], [Title], [Url], [Language], [Level], [Name], [TotalTime]) VALUES (" + 
				 beginId + ", N'" + clip.title + ".mp4', N'Videos/" + clip.title + ".mp4'+ "', N'en', 0, N'" + courseName + " ---> " + module.title + "', N'0:00:00')\");");
				 clip.segments.forEach((segment, item) => 
					 item ===   clip.segments.length - 1 ?
					 console.log("Sql(\"INSERT INTO [dbo].[VideoPhrases] ([Id], [OrderNumber], [StartTime], [EndTime], [Phrase], [TranslateLanguage], [PhraseTranslated], [Video_Id]) VALUES (" + 
									(beginPhraseId++) + ", " + (item + 1) + ", " + segment.displayTime + ", " + (clip.segments[item].displayTime + 20) + ", N'" + segment.text + "', N'ro', N'', " + beginId + ");\");") : 
					 console.log("Sql(\"INSERT INTO [dbo].[VideoPhrases] ([Id], [OrderNumber], [StartTime], [EndTime], [Phrase], [TranslateLanguage], [PhraseTranslated], [Video_Id]) VALUES (" + 
									(beginPhraseId++) + ", " + (item + 1) + ", " + segment.displayTime + ", " + clip.segments[item + 1].displayTime + ", N'" + segment.text + "', N'ro', N'', " + beginId + ");\");"));
				 beginId++;
				 }
			 
			 ));
			 
			 
			 
			 
var translit = {
  "modules": [
	{
	  "title": "Course Overview",
	  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m0&clip=0&mode=live",
	  "clips": [
		{
		  "title": "Course Overview",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m0&clip=0&mode=live",
		  "segments": [
			{
			  "text": "Hi, this is Scott Allen",
			  "displayTime": -0.5
			},
			{
			  "text": "and welcome to my course on the C# programming language.",
			  "displayTime": 7.5
			},
			{
			  "text": "I've been using the C# language",
			  "displayTime": 10.5
			},
			{
			  "text": "for over 15 years at this point",
			  "displayTime": 11.5
			},
			{
			  "text": "because I love working in C#, and I want to show you",
			  "displayTime": 14.5
			},
			{
			  "text": "all the great features of this language",
			  "displayTime": 16.5
			},
			{
			  "text": "so that you will love it too.",
			  "displayTime": 18.5
			},
			{
			  "text": "In the course we'll work",
			  "displayTime": 20.5
			},
			{
			  "text": "on building some simple applications",
			  "displayTime": 21.5
			},
			{
			  "text": "and focusing on different areas of the language.",
			  "displayTime": 22.5
			},
			{
			  "text": "Like how to use classes,",
			  "displayTime": 25.5
			},
			{
			  "text": "how to write methods and properties,",
			  "displayTime": 26.5
			},
			{
			  "text": "and how to raise and handle events.",
			  "displayTime": 28.5
			},
			{
			  "text": "I'll also give you some tips",
			  "displayTime": 31.5
			},
			{
			  "text": "on how to keep your code readable",
			  "displayTime": 32.5
			},
			{
			  "text": "and tell about common conventions that you'll see",
			  "displayTime": 33.5
			},
			{
			  "text": "in day-to-day programming with C#.",
			  "displayTime": 35.5
			},
			{
			  "text": "We'll also be looking at how to handle errors in your program.",
			  "displayTime": 38.5
			},
			{
			  "text": "And of course, I'll show you a few features",
			  "displayTime": 40.5
			},
			{
			  "text": "of Visual Studio, too.",
			  "displayTime": 42.5
			},
			{
			  "text": "It will be fun for you to follow along.",
			  "displayTime": 44.5
			},
			{
			  "text": "By the end of the course you'll feel comfortable",
			  "displayTime": 46.5
			},
			{
			  "text": "reading and writing C# code in your own applications.",
			  "displayTime": 48.5
			},
			{
			  "text": "I do expect that you have some programming experience",
			  "displayTime": 51.5
			},
			{
			  "text": "before you start this course.",
			  "displayTime": 54.5
			},
			{
			  "text": "Ideally you feel comfortable with concepts",
			  "displayTime": 55.5
			},
			{
			  "text": "like loops and branching in programming.",
			  "displayTime": 58.5
			},
			{
			  "text": "I'll show you how to write loops and branches in C#,",
			  "displayTime": 60.5
			},
			{
			  "text": "but the course will definitely be easier if you know",
			  "displayTime": 63.5
			},
			{
			  "text": "some of these fundamental programming concepts already.",
			  "displayTime": 66.5
			},
			{
			  "text": "And if not, there are plenty of courses on Pluralsight.com",
			  "displayTime": 69.5
			},
			{
			  "text": "to help you get started programming as an absolute beginner.",
			  "displayTime": 72.5
			}
		  ]
		}
	  ]
	},
	{
	  "title": "An Introduction to C# and .NET",
	  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=0&mode=live",
	  "clips": [
		{
		  "title": "Introduction",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=0&mode=live",
		  "segments": [
			{
			  "text": "Hi, this is Scott Allen, and this module is the first module of the course designed to give you everything you",
			  "displayTime": 0.0
			},
			{
			  "text": "should know about the C# programming language. In this first module, I want to spend some time showing you",
			  "displayTime": 5.0
			},
			{
			  "text": "the environment and tools you'll be working with and allow you to get everything set up and installed to",
			  "displayTime": 10.0
			},
			{
			  "text": "write your first simple program. C# is a wonderful and popular programming language that you can use to",
			  "displayTime": 15.0
			},
			{
			  "text": "write programs that run tablets, phones, webservers, and desktops.",
			  "displayTime": 20.0
			},
			{
			  "text": "In this module, we'll start to talk about the syntax of the C# language and the different types of programs",
			  "displayTime": 24.0
			},
			{
			  "text": "that you can write. But before all the fun can begin, we do need to install some software to help us create",
			  "displayTime": 28.0
			},
			{
			  "text": "our C# programs, and we'll get started with that in the next video clip.",
			  "displayTime": 34.0
			}
		  ]
		},
		{
		  "title": "Setup",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=1&mode=live",
		  "segments": [
			{
			  "text": "In this course, we will use a tool from Microsoft named Visual Studio to work with C#.",
			  "displayTime": 1.617
			},
			{
			  "text": "Visual Studio is a Windows-only application, but there is a free version called Visual Studio Community.",
			  "displayTime": 6.617
			},
			{
			  "text": "All you need to do is go to www.visualstudio.com and click on Download Visual Studio Community,",
			  "displayTime": 12.617
			},
			{
			  "text": "start the installation running, and take all the default options.",
			  "displayTime": 19.617
			},
			{
			  "text": "After that, you will have installed Visual Studio Community, currently the 2015 version.",
			  "displayTime": 21.617
			},
			{
			  "text": "If you have access to a different edition of Visual Studio, like Visual Studio Professional,",
			  "displayTime": 27.617
			},
			{
			  "text": "everything I'm going to show you in this course will work in there to.",
			  "displayTime": 32.617
			},
			{
			  "text": "And if you're using an older version of Visual Studio, like Visual Studio 2013 or 2010, then 95% of the",
			  "displayTime": 35.617
			},
			{
			  "text": "things I cover in this course will work there too. There are only a few topics near the end of this course that",
			  "displayTime": 41.617
			},
			{
			  "text": "will require 2013 or above. Once you're installation has finished, you should be able to launch Visual Studio",
			  "displayTime": 45.617
			},
			{
			  "text": "and write your first program. But before we jump in, let's take a moment to understand what we have installed.",
			  "displayTime": 52.617
			}
		  ]
		},
		{
		  "title": ".NET",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=2&mode=live",
		  "segments": [
			{
			  "text": "Now that I've Visual Studio on my machine, I've also installed the .NET Framework because the .NET Framework",
			  "displayTime": 0.0
			},
			{
			  "text": "is part of the Visual Studio installation. When we write our applications in C# with Visual Studio,",
			  "displayTime": 6.0
			},
			{
			  "text": "our applications run on top of the .NET Framework, and then our applications can take advantage of services",
			  "displayTime": 12.717
			},
			{
			  "text": "and programming interfaces that the framework provides. These programming interfaces include the ability",
			  "displayTime": 18.717
			},
			{
			  "text": "to save information into a database, the ability to read information from an XML file, as well as",
			  "displayTime": 23.717
			},
			{
			  "text": "cryptography, configuration, network communications, and all the basic core features that nearly every",
			  "displayTime": 29.717
			},
			{
			  "text": "application needs, and that means you can use C# to build business applications, to build games,",
			  "displayTime": 34.717
			},
			{
			  "text": "web applications, and apps that run on different types of phones and mobile devices.",
			  "displayTime": 40.717
			},
			{
			  "text": "We commonly think of the .NET Framework as consisting of two distinct pieces.",
			  "displayTime": 44.717
			},
			{
			  "text": "First there is the Common Language Runtime, or the CLR, and there's also the Framework Class Library, or the FCL.",
			  "displayTime": 49.717
			},
			{
			  "text": "Let's talk about these two pieces in more detail.",
			  "displayTime": 56.0
			}
		  ]
		},
		{
		  "title": "The Common Language Runtime",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=3&mode=live",
		  "segments": [
			{
			  "text": "In various parts of the course, I'll talk about the Common Language Runtime, the CLR, so it's important to",
			  "displayTime": 0.5
			},
			{
			  "text": "note that the CLR is an execution environment for .NET applications, and that includes applications written in C#.",
			  "displayTime": 4.810
			},
			{
			  "text": "It is the CLR that is responsible for bringing your application to life and managing it while it executes,",
			  "displayTime": 11.810
			},
			{
			  "text": "and it's also the CLR's job to tear down your application when it's finished executing or if it has an unrecoverable error.",
			  "displayTime": 17.810
			},
			{
			  "text": "And here some of the services that the CLR provides when it's managing your application.",
			  "displayTime": 24.810
			},
			{
			  "text": "One is memory management. The CLR is actively tracking all of the memory that your program uses to do work,",
			  "displayTime": 27.810
			},
			{
			  "text": "and it knows when your program is finished with memory, so it will clean things up and allow your program",
			  "displayTime": 33.810
			},
			{
			  "text": "to continue to have enough memory as it runs. The CLR also virtualizes your execution environment,",
			  "displayTime": 38.810
			},
			{
			  "text": "so for the most part you do not need to worry about what version of the operating system that your",
			  "displayTime": 44.810
			},
			{
			  "text": "application is executing on, you don't need to worry about the specific CPU that is installed on the machine,",
			  "displayTime": 48.810
			},
			{
			  "text": "whether that CPU is 32-bit or 64-bit, or how many cores are present, or what instruction set is available.",
			  "displayTime": 54.810
			},
			{
			  "text": "The CLR will take care of all those things and make sure that your application will execute correctly.",
			  "displayTime": 60.810
			},
			{
			  "text": "The CLR was also designed to support multiple languages. You can write programs in C#, but you can also write",
			  "displayTime": 64.810
			},
			{
			  "text": ".NET programs in Visual Basic or F#. In fact, there are many different languages you can use to write .NET",
			  "displayTime": 70.810
			},
			{
			  "text": "applications, and all those applications will be managed by the same CLR.",
			  "displayTime": 75.810
			},
			{
			  "text": "The CLR is available for every version of Windows since Windows XP.",
			  "displayTime": 80.810
			},
			{
			  "text": "There's also a CLR for mobile phones like Windows Phone 8 and a new version of the CLR, the CoreCLR,",
			  "displayTime": 84.810
			},
			{
			  "text": "will even run on non-Windows machines, like MacBook's running OS X and Linux machines.",
			  "displayTime": 90.810
			},
			{
			  "text": "For the most part, you don't care which operating system you are on.",
			  "displayTime": 95.810
			},
			{
			  "text": "Certainly what we will cover in this course will be code that can run anywhere; although, there's always an",
			  "displayTime": 97.810
			},
			{
			  "text": "option to use an operating-specific feature that would tie your code to a specific platform.",
			  "displayTime": 103.5
			},
			{
			  "text": "But, as I said, we'll focus on the features of C# and the .NET Framework Class Library that will work anywhere.",
			  "displayTime": 108.0
			},
			{
			  "text": "And speaking of the Framework Class Library, let me give you a quick overview of the FCL.",
			  "displayTime": 114.0
			}
		  ]
		},
		{
		  "title": "The Framework",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=4&mode=live",
		  "segments": [
			{
			  "text": "While the CLR works in the background to manage your application while it is running, it is the Framework",
			  "displayTime": 0.0
			},
			{
			  "text": "Class Library of .NET that you will interact with on a day-to-day basis because it's the FCL that contains",
			  "displayTime": 5.0
			},
			{
			  "text": "reusable software that you use to build applications. It provides you all the functionality to do useful",
			  "displayTime": 10.589
			},
			{
			  "text": "work like use regular expressions and read and write data from a disk.",
			  "displayTime": 15.589
			},
			{
			  "text": "You will also hear people refer to the BCL, or Base Case Library, which technically is a subset of the FCL.",
			  "displayTime": 20.589
			},
			{
			  "text": "It's contained inside the FCL, but it's a subset so it doesn't contain quiet as many features, but it does",
			  "displayTime": 26.589
			},
			{
			  "text": "work everywhere, and that's what we'll be using for this course, the subset that works everywhere.",
			  "displayTime": 31.589
			},
			{
			  "text": "But chances are when you start building your own applications you'll be using pieces of the more expansive",
			  "displayTime": 36.589
			},
			{
			  "text": "Framework Class Library because it is the Framework Class Library that includes software to help you write",
			  "displayTime": 41.589
			},
			{
			  "text": "desktop applications and web applications and web services and apps.",
			  "displayTime": 46.589
			},
			{
			  "text": "The FCL is so large and so varied that it is rare for one person to know all the ins and outs of the entire library.",
			  "displayTime": 50.589
			},
			{
			  "text": "Typically you're going to focus on just a couple areas of the FCL and master those.",
			  "displayTime": 57.589
			},
			{
			  "text": "Like you might become a master of ASP.NET to build web applications because that's what your business requires.",
			  "displayTime": 61.589
			},
			{
			  "text": "ASP.NET is just one part of this .NET Framework. And now that we know that we're using C# on top of .NET,",
			  "displayTime": 67.589
			},
			{
			  "text": "and .NET gives us the CLR to run our applications and the Framework Class Library to give us software",
			  "displayTime": 73.589
			},
			{
			  "text": "components to build on, let's make this all a little more concrete by writing our first C# program.",
			  "displayTime": 78.589
			}
		  ]
		},
		{
		  "title": "The C# Language",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=5&mode=live",
		  "segments": [
			{
			  "text": "C# is one of the languages that you can use to write applications with .NET, and the syntax of C# was",
			  "displayTime": 0.0
			},
			{
			  "text": "inspired by C++, so C#, Java, and JavaScript, all three of these languages look somewhat similar.",
			  "displayTime": 7.792
			},
			{
			  "text": "Here is a snippet of C# code. This snippet contains many different concepts that we will investigate further",
			  "displayTime": 14.792
			},
			{
			  "text": "throughout this course, but let me give you a quick preview. This snippet of code is defining a method named Main.",
			  "displayTime": 19.792
			},
			{
			  "text": "A method is a place where you can organize your code so that you can call this method from other places and",
			  "displayTime": 26.792
			},
			{
			  "text": "force the code inside to execute and run. The code inside of this method is using the DateTime class,",
			  "displayTime": 31.792
			},
			{
			  "text": "which is part of the .NET Framework Class Library. I can use DateTime.Now to find out the current time,",
			  "displayTime": 37.792
			},
			{
			  "text": "and I can use .DayOFWeek after that to find out the current day of the week.",
			  "displayTime": 44.792
			},
			{
			  "text": "And if the current day of the week is equal to Monday, and we'll check that by using a double equal sign,",
			  "displayTime": 48.792
			},
			{
			  "text": "that checks to see if two values are equal, if the current day of the week is Monday, then we will branch",
			  "displayTime": 53.792
			},
			{
			  "text": "inside of this if statement and execute the code inside of the curly braces.",
			  "displayTime": 58.792
			},
			{
			  "text": "Inside of here we're calling another method, WriteLine. This method is attached to a console class,",
			  "displayTime": 63.792
			},
			{
			  "text": "also part of the FCL, so we're forcing WriteLine to execute, and we're passing it some data, a parameter.",
			  "displayTime": 69.792
			},
			{
			  "text": "We're passing it information that is going to write onto the screen.",
			  "displayTime": 76.792
			},
			{
			  "text": "In this case, it's going to write out the text, Another case of the Mondays!",
			  "displayTime": 78.792
			},
			{
			  "text": "But again, that only happens if the current day is a Monday. If the current day is not a Monday,",
			  "displayTime": 82.792
			},
			{
			  "text": "we don't execute the code inside of here. We come straight down to the bottom where the method will exit and",
			  "displayTime": 87.792
			},
			{
			  "text": "return without writing any information to the screen. Let's take code very similar to this code and place it",
			  "displayTime": 93.792
			},
			{
			  "text": "into a program that we can execute from the command line.",
			  "displayTime": 98.792
			}
		  ]
		},
		{
		  "title": "Hello, World",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=6&mode=live",
		  "segments": [
			{
			  "text": "Inside of Windows I'm going to go to the Start menu, and I'm going to do a search just by typing for command",
			  "displayTime": 0.0
			},
			{
			  "text": "because what I want to open up is the command prompt. We're going to write our first program using some",
			  "displayTime": 9.627
			},
			{
			  "text": "low-level tools and without Visual Studio just so you can see a little bit about what is happening behind the scenes.",
			  "displayTime": 13.627
			},
			{
			  "text": "When you install Visual Studio, Visual Studio will install some command line tools that you can use to create applications.",
			  "displayTime": 19.627
			},
			{
			  "text": "Not many people will use the command line tools on a day-to-day basis, they'll use Visual Studio instead,",
			  "displayTime": 26.627
			},
			{
			  "text": "but what I'm just trying to do right now is simplify some things.",
			  "displayTime": 31.627
			},
			{
			  "text": "So I'm going to go into my Documents folder, and I'm just going to use notepad to create a file called hello.cs.",
			  "displayTime": 33.627
			},
			{
			  "text": "The goal is to create the canonical hello world example, something I can run and just print the string hello",
			  "displayTime": 40.627
			},
			{
			  "text": "world to the screen, and I'll do that by placing my code inside a file called hello.cs.",
			  "displayTime": 46.627
			},
			{
			  "text": "Dot cs is the common extension for C# source code. All of the .NET tools and every .NET developer will know",
			  "displayTime": 50.627
			},
			{
			  "text": "that a .cs file will contain C# source code. And inside of here I'm going to create a class.",
			  "displayTime": 57.627
			},
			{
			  "text": "So there are many concepts that we're going to have to come to grips with in this very simple demo,",
			  "displayTime": 65.627
			},
			{
			  "text": "things like classes and strange keywords, and we will cover all of these things in detail throughout this course.",
			  "displayTime": 69.627
			},
			{
			  "text": "For right now, just know that most of the code that you write for .NET will live inside of a class.",
			  "displayTime": 75.627
			},
			{
			  "text": "And inside of a class I can create methods. I'm going to create a method called Main.",
			  "displayTime": 80.627
			},
			{
			  "text": "The start of this method begins with this opening curly brace and ends with this closing curly brace.",
			  "displayTime": 88.627
			},
			{
			  "text": "Just like with the class, anything I put between those outer curly braces will be part of this class or",
			  "displayTime": 93.627
			},
			{
			  "text": "inside of this class, and now anything I put inside of this Main method will be code that executes when I",
			  "displayTime": 99.627
			},
			{
			  "text": "run this program. And that's because there's a little bit of magic happening here.",
			  "displayTime": 105.627
			},
			{
			  "text": "When the CLR starts a command line application, what we call a console application, something that I would",
			  "displayTime": 108.627
			},
			{
			  "text": "run from the command prompt, it will automatically look for a program class with a Main method and just start",
			  "displayTime": 114.627
			},
			{
			  "text": "executing the code inside of there for me. So if I were to place inside of here something like",
			  "displayTime": 120.627
			},
			{
			  "text": "System.Console.WriteLine, Hello World, then this is something very similar to the code that we had on the slide.",
			  "displayTime": 126.627
			},
			{
			  "text": "We had Console.WriteLine. What's new here is this System word, and this System word exists because inside",
			  "displayTime": 134.627
			},
			{
			  "text": "of .NET there are thousands and thousands of classes that I can use, classes like Console.",
			  "displayTime": 140.627
			},
			{
			  "text": "And we don't want all 10,000 or more classes available at one time, so what .NET does is it partitions",
			  "displayTime": 146.627
			},
			{
			  "text": "classes into various namespaces. And to use a class, you have to be very explicit and let .NET know from",
			  "displayTime": 151.627
			},
			{
			  "text": "what namespace that class lives in. So to use the Console class, it lives in the namespace called System,",
			  "displayTime": 158.627
			},
			{
			  "text": "so I either have to use the word System here or there's another way to tell .NET about the namespaces that I",
			  "displayTime": 164.627
			},
			{
			  "text": "need, and that is with the using keyword. So if I say using System and a semicolon, and yes there are",
			  "displayTime": 171.627
			},
			{
			  "text": "certain pieces of code that have to end with a semicolon and certain pieces of code that don't need a",
			  "displayTime": 177.627
			},
			{
			  "text": "semicolon, we'll talk about that more throughout the course, when I say using System, I'm telling .NET and",
			  "displayTime": 181.627
			},
			{
			  "text": "this tool we're about to see, known as the C# compiler, that when it encounters classes inside of this",
			  "displayTime": 187.627
			},
			{
			  "text": "program, classes like Console, it should look for them inside of the System namespace.",
			  "displayTime": 193.627
			},
			{
			  "text": "And this is about the simplest possible C# program that I could write.",
			  "displayTime": 198.627
			},
			{
			  "text": "I'm going to save this file and come out to the command line and run a tool called csc.exe.",
			  "displayTime": 201.627
			},
			{
			  "text": "This tool exists, by default, in my Windows directory under a folder called Microsoft.NET.",
			  "displayTime": 208.627
			},
			{
			  "text": "Inside of there, there will be a Framework folder, and then inside of a Framework folder you can have various",
			  "displayTime": 214.627
			},
			{
			  "text": "installations of the .NET Framework, multiple versions. And if I tab through here, you can see I have",
			  "displayTime": 220.627
			},
			{
			  "text": "various versions installed, version 1, version 1.1, version 2. I want to go to the latest version,",
			  "displayTime": 226.627
			},
			{
			  "text": "which is the version 4 directory because inside of there, there will be a little program that I can run called csc.",
			  "displayTime": 231.627
			},
			{
			  "text": "Csc, as you can see, is the Visual C# Compiler, so C# code is code that needs to be compiled before it can execute.",
			  "displayTime": 238.627
			},
			{
			  "text": "This is unlike some other languages, languages like Perl, and Ruby, and Python.",
			  "displayTime": 246.627
			},
			{
			  "text": "What I need to do with the C# code is pass it through the C# compiler, and what the C# compiler will do is",
			  "displayTime": 251.627
			},
			{
			  "text": "produce an executable that I can run. So if I say csc, and then follow that with the parameter hello.cs,",
			  "displayTime": 257.627
			},
			{
			  "text": "I'm asking the C# compiler to compile hello.cs. And if the compiler encounters any problems, it will complain,",
			  "displayTime": 264.627
			},
			{
			  "text": "but it looks like it finished successfully. And inside of this folder now I can see hello.exe, so the act of",
			  "displayTime": 272.627
			},
			{
			  "text": "compiling hello.cs produced hello.exe, and the exe extension means this is a executable file,",
			  "displayTime": 277.627
			},
			{
			  "text": "something that I can run from the command line. And if I run it just by typing in hello.exe, I get Hello, World!",
			  "displayTime": 285.627
			},
			{
			  "text": "Now as I said before, typically you don't use csc directly. Instead, you use Visual Studio, and Visual Studio",
			  "displayTime": 292.627
			},
			{
			  "text": "will figure out the way to call csc correctly. But I do just want to point out that csc might give you some error messages.",
			  "displayTime": 297.627
			},
			{
			  "text": "So, for example, let's say that I forget the semicolon after using system, and I recompile the application.",
			  "displayTime": 304.627
			},
			{
			  "text": "The C# compiler here is very explicit, and it says semicolon was expected on line 1, column 13.",
			  "displayTime": 311.627
			},
			{
			  "text": "Unfortunately, not all error messages are so explicit. Let's come down and leave off an opening curly brace",
			  "displayTime": 320.627
			},
			{
			  "text": "here on my method because now the C# compiler won't know where this method starts.",
			  "displayTime": 327.627
			},
			{
			  "text": "And if I save that file and try to compile it again, this one missing character actually generated three",
			  "displayTime": 331.627
			},
			{
			  "text": "different error messages, is telling me a semicolon was expected, and there's an invalid token.",
			  "displayTime": 336.627
			},
			{
			  "text": "And over time you'll become accustomed to these error messages and become accustomed to looking at your C#",
			  "displayTime": 342.627
			},
			{
			  "text": "code and figuring out things like, oh I just had a missing curly brace here.",
			  "displayTime": 346.627
			},
			{
			  "text": "And if I save this file again, we should be back in working order, but let's make one more change.",
			  "displayTime": 351.627
			},
			{
			  "text": "Instead of displaying the text Hello, World, let's use some more code from that previous slide, and I want",
			  "displayTime": 356.627
			},
			{
			  "text": "to print out the current day of the week. And I can do that by using the DateTime class.",
			  "displayTime": 362.627
			},
			{
			  "text": "That DateTime class is also in the system namespace, so it is available to me.",
			  "displayTime": 366.627
			},
			{
			  "text": "I can have multiple using statements here, but the only classes I'm using for this simple example are classes",
			  "displayTime": 371.627
			},
			{
			  "text": "that are in the System namespace. I'm going to say please print out DataTime.Now.DayOfWeek.",
			  "displayTime": 376.627
			},
			{
			  "text": "And I'll save hello.cs again. I need to recompile it for csc to pick up those changes and produce a new",
			  "displayTime": 385.627
			},
			{
			  "text": "executable, but now I should be able to run hello.exe. And you can see that this example is being recorded",
			  "displayTime": 392.627
			},
			{
			  "text": "on a Wednesday. So this simple example has a lot of very deep concepts, concepts like classes and strange",
			  "displayTime": 398.627
			},
			{
			  "text": "keywords like static and void. I want you to ignore some of those specific syntax details for right now.",
			  "displayTime": 404.627
			},
			{
			  "text": "We'll get to the point where you can understand all of those. For right now, I just want to take a step back",
			  "displayTime": 410.627
			},
			{
			  "text": "and talk about this compiler that we're using, and after that we can jump into Visual Studio",
			  "displayTime": 414.627
			},
			{
			  "text": "and get the same code running from Visual Studio.",
			  "displayTime": 419.627
			}
		  ]
		},
		{
		  "title": "The Compiler",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=7&mode=live",
		  "segments": [
			{
			  "text": "We've just used the command line C# compiler, csc.exe, and we gave the compiler one job that was to compile a",
			  "displayTime": 0.0
			},
			{
			  "text": "single file, hello.cs, but you can tell the compiler about multiple files to compile all at once.",
			  "displayTime": 7.627
			},
			{
			  "text": "And certainly when you start building real applications you don't want all of your code inside of a single file.",
			  "displayTime": 13.627
			},
			{
			  "text": "You'll take all of your code and spread it across multiple files, even across multiple directories,",
			  "displayTime": 18.627
			},
			{
			  "text": "and pass everything to csc.exe, which will produce a single executable or library.",
			  "displayTime": 22.627
			},
			{
			  "text": "When it comes to using multiple files, this is where Visual Studio is useful because Visual Studio can",
			  "displayTime": 28.627
			},
			{
			  "text": "manage all of those files and call the compiler for us, and we never have to worry about the details,",
			  "displayTime": 33.627
			},
			{
			  "text": "but it is good to know what happens behind the scenes. And it's also good to know with the C# Compiler is actually doing.",
			  "displayTime": 37.627
			},
			{
			  "text": "It's taking your C# code, and its transforming it into something called Microsoft Intermediate Language.",
			  "displayTime": 43.627
			},
			{
			  "text": "Some people will refer to this as M-S-I-L, or MSIL for short. MSIL defines instructions for the CLR.",
			  "displayTime": 49.627
			},
			{
			  "text": "It's the CLR's job then to read those instructions and transform those instructions into instructions that",
			  "displayTime": 56.627
			},
			{
			  "text": "the CPU on your machine will understand. So the processor that is inside your computer by itself, it cannot",
			  "displayTime": 62.627
			},
			{
			  "text": "execute the code that you write with .NET even after the compiler has transformed that code into an executable.",
			  "displayTime": 68.627
			},
			{
			  "text": "You need to have the CLR, the Common Language Runtime, to take those intermediate instructions inside an",
			  "displayTime": 74.627
			},
			{
			  "text": "executable and transform them into native instructions, native meaning the instructions work on the real",
			  "displayTime": 80.627
			},
			{
			  "text": "hardware where the program is running. All of that happens without us needing to do anything special,",
			  "displayTime": 84.627
			},
			{
			  "text": "and it's somewhat similar to what happens in the Java space, with Java compilers producing bytecode as an intermediate language.",
			  "displayTime": 90.627
			},
			{
			  "text": "But now that we know some of these low level details that are good to know, let's jump up into the space",
			  "displayTime": 96.627
			},
			{
			  "text": "we'll be working in for the rest of the course, which is inside of Visual Studio.",
			  "displayTime": 101.627
			}
		  ]
		},
		{
		  "title": "Visual Studio",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=8&mode=live",
		  "segments": [
			{
			  "text": "Now let's go into Windows and open up the Start menu and search for Visual because I want to launch",
			  "displayTime": 0.0
			},
			{
			  "text": "Visual Studio 2015 and create this hello world program in the Visual Studio environment.",
			  "displayTime": 7.060
			},
			{
			  "text": "And pretty much every application that you ever build with Visual Studio will start by saying File, New,",
			  "displayTime": 14.060
			},
			{
			  "text": "and then selecting this Project menu item. This will launch a dialogue that presents me with many different",
			  "displayTime": 20.060
			},
			{
			  "text": "project types that I can build across various languages that are supported by Visual Studio.",
			  "displayTime": 26.060
			},
			{
			  "text": "But I want to build a Visual C# application, specifically a Windows application, and even more specifically",
			  "displayTime": 30.5
			},
			{
			  "text": "a Console Application, so an application that runs form the command line.",
			  "displayTime": 37.060
			},
			{
			  "text": "Down here at the bottom of the dialogue I can select a Name for my project, I'm going to call it Hello,",
			  "displayTime": 41.060
			},
			{
			  "text": "and I will leave it inside of this default location, which is a project subfolder underneath of",
			  "displayTime": 47.060
			},
			{
			  "text": "documents/visual studio 2015, but you can place this anywhere on the hard drive that you like.",
			  "displayTime": 52.060
			},
			{
			  "text": "I will just select OK, and Visual Studio will go out and create this project for me.",
			  "displayTime": 57.060
			},
			{
			  "text": "Now depending on your configuration, you might have different windows that open up inside of Visual Studio.",
			  "displayTime": 62.060
			},
			{
			  "text": "I just really want to focus on one for right now, which is the Solution Explorer window.",
			  "displayTime": 67.060
			},
			{
			  "text": "I'm going to close everything else. And if for some reason you don't have the Solution Explorer window or",
			  "displayTime": 72.060
			},
			{
			  "text": "you accidently close the Solution Explorer window, you can always reopen this by going to the View menu.",
			  "displayTime": 78.060
			},
			{
			  "text": "Selecting this item will open that Solution Explorer window if it's not already open.",
			  "displayTime": 83.060
			},
			{
			  "text": "The Solution Explorer window is a window that organizes all of my code and all of my projects.",
			  "displayTime": 87.060
			},
			{
			  "text": "So the currently highlighted node in this tree in the Solution Explorer, this is my project.",
			  "displayTime": 92.060
			},
			{
			  "text": "It's called Hello. Inside of that project I have one source code file, one C# source code file called Program.cs.",
			  "displayTime": 98.060
			},
			{
			  "text": "I can click on any .cs file inside of Solution Explorer, double-click on it, and it will open over here in a",
			  "displayTime": 104.5
			},
			{
			  "text": "text editor window. And in bigger applications you'll have multiple .cs files inside of a project.",
			  "displayTime": 111.060
			},
			{
			  "text": "In fact, you'll probably have folders inside of your project and organize your source code files into folders.",
			  "displayTime": 116.5
			},
			{
			  "text": "And then project goes into a Solution, also named Hello, and in a larger application you can have multiple",
			  "displayTime": 123.060
			},
			{
			  "text": "projects inside of a Solution. We'll see both of those scenarios as the course progresses.",
			  "displayTime": 130.060
			},
			{
			  "text": "We'll work with multiple source code files; we will work with multiple projects inside of a Solution.",
			  "displayTime": 135.060
			},
			{
			  "text": "For right now, I just want to focus on Program.cs and recreating our Hello World application.",
			  "displayTime": 139.060
			},
			{
			  "text": "So the code that is inside of Program.cs looks a little bit different then what we wrote inside of Hello.cs.",
			  "displayTime": 145.060
			},
			{
			  "text": "For starters, there are quite a few namespaces that are listed here.",
			  "displayTime": 151.060
			},
			{
			  "text": "These are just namespaces that Visual Studio included by default because these are common namespaces that you",
			  "displayTime": 154.060
			},
			{
			  "text": "typically use on a day-to-day basis. There is no harm in leaving these namespaces here, but for right now",
			  "displayTime": 159.060
			},
			{
			  "text": "I'm just going to delete all of those namespaces. And then I'll point out that I also have a custom namespace here.",
			  "displayTime": 166.060
			},
			{
			  "text": "The namespace is Hello. Everything inside of the curly braces that delimit this namespace will be a part of",
			  "displayTime": 172.060
			},
			{
			  "text": "that namespace, so my class Program, it's full name now is not just Program, it's really Hello.Program.",
			  "displayTime": 178.060
			},
			{
			  "text": "And this program still has a method named Main, just like we had in Hello.cs.",
			  "displayTime": 186.060
			},
			{
			  "text": "We'll talk about this additional args thing here in just a minute.",
			  "displayTime": 190.060
			},
			{
			  "text": "For right now, I just want to use Console to do a WriteLine. And now we'll start to see one advantage of",
			  "displayTime": 193.060
			},
			{
			  "text": "using Visual Studio over Notepad. Visual Studio is constantly evaluating the code that you're writing with",
			  "displayTime": 200.060
			},
			{
			  "text": "every keystroke, and it's trying to detect anyway that it can help you write that code or if there's any",
			  "displayTime": 205.060
			},
			{
			  "text": "problems with that code. Right now it has detected a problem. It'll express that with a red squiggly line",
			  "displayTime": 210.060
			},
			{
			  "text": "that appears underneath of Console. And the problem here is that Visual Studio knows if you try to compile",
			  "displayTime": 216.060
			},
			{
			  "text": "this file that the compiler will not know what this Console thing is, and that's because, as we discussed",
			  "displayTime": 221.060
			},
			{
			  "text": "earlier, this Console class that we want to use, it's really system.console.",
			  "displayTime": 227.060
			},
			{
			  "text": "And if I come over here and click on this lightbulb, then whenever you see that lightbulb appear you can",
			  "displayTime": 232.060
			},
			{
			  "text": "click on it. That's Visual Studio's way of saying I might be able to help you with this problem, and it will",
			  "displayTime": 237.060
			},
			{
			  "text": "give you a big list of suggestions on how to fix this problem that Console does not exist.",
			  "displayTime": 242.060
			},
			{
			  "text": "The first suggestion is to add a using System to the top of the file.",
			  "displayTime": 247.060
			},
			{
			  "text": "That's the suggestion that I want to take because once I choose that the red squiggly goes away, at least the",
			  "displayTime": 251.060
			},
			{
			  "text": "red squiggly that's under Console, and now Visual Studio's just telling me that I need to do something with Console.",
			  "displayTime": 257.060
			},
			{
			  "text": "So let me backspace a bit and then hit period, and here's another way that Visual Studio tries to help you.",
			  "displayTime": 262.060
			},
			{
			  "text": "This is the IntelliSense window. Visual Studio knows about everything that you can do with a Console.",
			  "displayTime": 267.060
			},
			{
			  "text": "It knows that you can do things like set the cursor position, and it knows that I can do things like",
			  "displayTime": 273.060
			},
			{
			  "text": "WriteLine, so I'm going to select this method just by pressing enter because I want to write the string Hello, World.",
			  "displayTime": 278.060
			},
			{
			  "text": "So a string in C# is just a sequence of characters that appear between double quotes.",
			  "displayTime": 287.060
			},
			{
			  "text": "Almost every programming language has the concept of strings. Some languages use single quotes,",
			  "displayTime": 292.060
			},
			{
			  "text": "some languages use double quotes, C# is one of those languages where a string has to be inside of double quotes.",
			  "displayTime": 298.060
			},
			{
			  "text": "C# is also a case sensitive language, so Console, the C has to be uppercase; otherwise, you can see I get the red squiggly.",
			  "displayTime": 304.060
			},
			{
			  "text": "And the method call WriteLine, that has be an upper case W and an uppercase L.",
			  "displayTime": 311.060
			},
			{
			  "text": "But since I don't currently have any red squigglies on the screen, I should be able to run this program.",
			  "displayTime": 316.060
			},
			{
			  "text": "The easiest way to run a console application is to go to the Debug menu and say Start Without Debugging.",
			  "displayTime": 321.060
			},
			{
			  "text": "Visual Studio will automatically compile all of my source code, it will produce an executable, and then it",
			  "displayTime": 327.060
			},
			{
			  "text": "will launch that executable inside of a new console window. Visual Studio is also smart enough to add a",
			  "displayTime": 333.060
			},
			{
			  "text": "feature where you have to press a key for this console window to go away.",
			  "displayTime": 338.060
			},
			{
			  "text": "If that feature wasn't there, the console would just flash on the screen and go away immediately because my",
			  "displayTime": 343.060
			},
			{
			  "text": "program exits immediately after displaying Hello, World. But now that I can see this running, I will press",
			  "displayTime": 348.060
			},
			{
			  "text": "any key, and now I can come back and edit some more source code.",
			  "displayTime": 353.060
			},
			{
			  "text": "I also want to run this directly from the command line myself, and I can do that.",
			  "displayTime": 357.060
			},
			{
			  "text": "I can see down here in the Output window, which will appear anytime you build or run an application,",
			  "displayTime": 361.060
			},
			{
			  "text": "I can see in this window exactly where Hello.exe lives. It's underneath of the location that I specified in",
			  "displayTime": 367.060
			},
			{
			  "text": "the File, New, Project dialogue, and then it falls under a folder called Bin, which is short for binaries,",
			  "displayTime": 374.060
			},
			{
			  "text": "which are executable files that are on file system, bin\\Debug\\Hello.exe.",
			  "displayTime": 380.060
			},
			{
			  "text": "The Debug is here because by default Visual Studio will build your application in a way that makes it easy",
			  "displayTime": 385.060
			},
			{
			  "text": "to debug, that is easy to find problems and errors that occur during runtime.",
			  "displayTime": 389.060
			},
			{
			  "text": "We'll look at debugging in just a bit. For right now, I actually want to go to a console window and find",
			  "displayTime": 395.060
			},
			{
			  "text": "this directory, which is Visual Studio 2015\\Projects\\Hello\\Hello\\bin\\Debug.",
			  "displayTime": 399.060
			},
			{
			  "text": "And if I do a directory of this folder, I can see inside of here, Hello.exe.",
			  "displayTime": 407.060
			},
			{
			  "text": "There are some additional files here, but again most of those are related to debugging.",
			  "displayTime": 411.060
			},
			{
			  "text": "I just want to be able to run Hello.exe from this folder and see that still works.",
			  "displayTime": 415.060
			},
			{
			  "text": "And I'm thinking it would be nice to be able to type Hello and run this program and also pass this program a",
			  "displayTime": 420.060
			},
			{
			  "text": "parameter like the name of a person so the program will say Hello Scott or Hello Alex.",
			  "displayTime": 427.060
			},
			{
			  "text": "Currently I don't have that ability. Every time I run the program it will just say Hello, World, but this is",
			  "displayTime": 433.060
			},
			{
			  "text": "easy enough to change. Whenever I type additional arguments to my program, those arguments will be passed",
			  "displayTime": 439.060
			},
			{
			  "text": "into my Main method in this method parameter names args. So just like WriteLine takes a parameter and I can",
			  "displayTime": 445.060
			},
			{
			  "text": "pass it something like Hello, World, this Main method can take a parameter.",
			  "displayTime": 452.060
			},
			{
			  "text": "In this case it is an array of strings, and the name of this parameter is args.",
			  "displayTime": 457.060
			},
			{
			  "text": "We will be talking in more detail about arrays later in this course, but for now just know that inside of a",
			  "displayTime": 462.060
			},
			{
			  "text": "console window I could do something like Hello Scott, Joy, Chris, Sarah, and I could keep typing words out",
			  "displayTime": 466.060
			},
			{
			  "text": "here, and when my program runs each of these will be an individual string inside of a collection of strings.",
			  "displayTime": 474.060
			},
			{
			  "text": "And this is the syntax in C# to say I don't have just one string, I can take 0 or more strings.",
			  "displayTime": 481.060
			},
			{
			  "text": "So if someone wants to pass me three names, those three names will be packaged up into this parameter called args.",
			  "displayTime": 487.060
			},
			{
			  "text": "Again, more on arrays later in this course, but these two square brackets indicate that I have an array of strings.",
			  "displayTime": 493.060
			},
			{
			  "text": "My ultimate goal is to pull out just the first string in that parameter and use that to write out a greeting here.",
			  "displayTime": 499.060
			},
			{
			  "text": "So let me show you something else I can do. Just before we do that, I'm going to add a double quote here",
			  "displayTime": 506.060
			},
			{
			  "text": "after Hello comma and a space, and then use the plus sign or an addition symbol to say Hello plus World.",
			  "displayTime": 510.060
			},
			{
			  "text": "The addition symbol does what you might think it would do. It's going to concatenate those two strings",
			  "displayTime": 517.060
			},
			{
			  "text": "together so that I get one string, Hello comma space World. And if I were to run this program Without",
			  "displayTime": 521.060
			},
			{
			  "text": "Debugging, I get the same output that I had before, Hello, World.",
			  "displayTime": 528.060
			},
			{
			  "text": "But now let's get this working with a name. So instead of concatenating this hard-coded string World,",
			  "displayTime": 532.060
			},
			{
			  "text": "I want to take the first argument out of this argument array and concatenate that after the string Hello comma.",
			  "displayTime": 539.060
			},
			{
			  "text": "Arrays in C# start with a base index of 0. That means to get the first element in an array you use the",
			  "displayTime": 546.060
			},
			{
			  "text": "square brackets, and you place a 0 inside. It's a common beginner mistake to ask for the first element of an",
			  "displayTime": 552.060
			},
			{
			  "text": "array by using args sub 1, but sub 1 would actually give you the second element in an array.",
			  "displayTime": 558.060
			},
			{
			  "text": "I want args sub 0. And after I do that I'm going to save the file, come back to the command line,",
			  "displayTime": 564.060
			},
			{
			  "text": "and type Hello Scott, and you'll notice I still get the text Hello, World.",
			  "displayTime": 569.060
			},
			{
			  "text": "That's because I was very careful to just save this program and not recompile the program, which means my",
			  "displayTime": 573.060
			},
			{
			  "text": "source code is different. But I never had Visual Studio build that source code into a new version of",
			  "displayTime": 580.060
			},
			{
			  "text": "Hello.exe, so I'm still running an older version of Hello.exe, I don't have a new one yet.",
			  "displayTime": 585.060
			},
			{
			  "text": "If I want to make sure that Visual Studio builds this, I can go to the Build menu and say Build Solution.",
			  "displayTime": 591.060
			},
			{
			  "text": "When you run the program from the Debug menu, Visual Studio automatically does the build, but if I'm going to",
			  "displayTime": 596.060
			},
			{
			  "text": "run from the command line like this, I have to explicitly ask Visual Studio to build, and now I should be",
			  "displayTime": 601.060
			},
			{
			  "text": "able to come out and say Hello Scott, and I can see Hello Scott, or Hello Joy, and I see Hello Joy.",
			  "displayTime": 606.060
			},
			{
			  "text": "And I now have a program that accepts some command line parameters from the user and uses those parameters to",
			  "displayTime": 613.060
			},
			{
			  "text": "change the display, to change its output.",
			  "displayTime": 618.060
			}
		  ]
		},
		{
		  "title": "Debugging",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=9&mode=live",
		  "segments": [
			{
			  "text": "Let's talk about the types of things that could go wrong when",
			  "displayTime": 0.0
			},
			{
			  "text": "you're writing a C# application. There are two general categories of errors.",
			  "displayTime": 4.5
			},
			{
			  "text": "The first type of error, sometimes the easiest type of error to fix, is when you have an error that will not",
			  "displayTime": 9.369
			},
			{
			  "text": "allow the C# compiler to compile your code. And these can be easy problems to fix because Visual Studio can",
			  "displayTime": 14.369
			},
			{
			  "text": "show you little red squigglies when you're missing something like a semicolon or if you're missing something",
			  "displayTime": 20.369
			},
			{
			  "text": "like a curly brace. And perhaps I have an error like this where I'm missing a curly brace inside of a source",
			  "displayTime": 25.369
			},
			{
			  "text": "code file that I don't even have open and I cannot see the red squigglies.",
			  "displayTime": 31.369
			},
			{
			  "text": "In that case I might think I'm okay and try to build the solution, but I will get an error list that shows",
			  "displayTime": 34.369
			},
			{
			  "text": "me output from the C# compiler. And this output is saying that there is a curly brace expected,",
			  "displayTime": 40.369
			},
			{
			  "text": "a closing curly brace somewhere. Any time this error list window is open I can double-click on a line inside",
			  "displayTime": 45.369
			},
			{
			  "text": "of the error list, and Visual Studio will open the file that has the error and put the cursor on the position",
			  "displayTime": 51.369
			},
			{
			  "text": "where the C# compiler thinks the error is. And we looked at this scenario earlier in the module.",
			  "displayTime": 56.369
			},
			{
			  "text": "Some errors the C# compiler can be very specific and say you are missing a semicolon at this exact location.",
			  "displayTime": 62.369
			},
			{
			  "text": "In this case, it's just telling me I'm missing a curly brace. It's not really sure where that curly brace",
			  "displayTime": 67.369
			},
			{
			  "text": "should be, but it does know that the count of curly braces doesn't add up.",
			  "displayTime": 72.369
			},
			{
			  "text": "There are three opening curly braces, but only two closing curly braces.",
			  "displayTime": 76.369
			},
			{
			  "text": "If I just type a curly brace down here at the bottom of the file, you'll see that Visual Studio is smart",
			  "displayTime": 79.369
			},
			{
			  "text": "enough to say, oh this is working now. It reformates my code, puts all the curly braces in the right",
			  "displayTime": 84.369
			},
			{
			  "text": "position, and I should now be back to having a working application.",
			  "displayTime": 89.369
			},
			{
			  "text": "So any time the Error List window opens up, just double-click on an error in this table of errors,",
			  "displayTime": 92.369
			},
			{
			  "text": "and Visual Studio will take you to the location where you can start to look around and see what needs to be fixed up.",
			  "displayTime": 97.369
			},
			{
			  "text": "The other type of error that you can commonly encounter when writing a C# application is a runtime error.",
			  "displayTime": 102.369
			},
			{
			  "text": "Let me show you an example of what one would like. Let me build this solution again just to make sure we",
			  "displayTime": 107.369
			},
			{
			  "text": "are up-to-date, and I'm going to come out and run this solution Hello without passing any parameters.",
			  "displayTime": 111.369
			},
			{
			  "text": "That means the argument's parameter, the string array that is passed into Main, will be empty.",
			  "displayTime": 117.369
			},
			{
			  "text": "There are no arguments available. So when I run the program, all sorts of catastrophic error messages pop up.",
			  "displayTime": 122.369
			},
			{
			  "text": "I can see in the command line window that there was an Unhandled Exception.",
			  "displayTime": 129.369
			},
			{
			  "text": "We'll be talking more about exceptions in this course, how to both generate exceptions when your application",
			  "displayTime": 132.369
			},
			{
			  "text": "logic detects something has gone wrong, as well as handling exceptions at runtime so that they don't crash your program.",
			  "displayTime": 137.369
			},
			{
			  "text": "But here we have a program that doesn't handle any exceptions. That means an error occurred inside the",
			  "displayTime": 145.369
			},
			{
			  "text": "application, and the runtime, the CLR, is going to shut down the application so that it cannot continue.",
			  "displayTime": 149.369
			},
			{
			  "text": "It's usually not a good idea to allow a program to continue executing when it has some sort of fatal exception.",
			  "displayTime": 156.369
			},
			{
			  "text": "Windows has detected that something has gone wrong also, so it pops up this message box, but let me dismiss",
			  "displayTime": 161.369
			},
			{
			  "text": "this and talk to you a little bit about the debugger. So when you have runtime errors inside of your",
			  "displayTime": 167.369
			},
			{
			  "text": "application, sometimes you need to do a deep investigation of what is actually happening inside of your",
			  "displayTime": 172.369
			},
			{
			  "text": "application, and that's when the debugger is useful. The debugger allows me to step through line-by-line",
			  "displayTime": 176.369
			},
			{
			  "text": "all of the code inside of my application, and inspect variables, and inspect the environment, and try to",
			  "displayTime": 181.369
			},
			{
			  "text": "figure out where the logic has gone wrong. When you use the debugger, it's very useful to set breakpoints",
			  "displayTime": 186.369
			},
			{
			  "text": "inside of your application. Breakpoints allow you to stop the application right on a specific line of code,",
			  "displayTime": 191.369
			},
			{
			  "text": "and then you can start inspecting the environment. To set a breakpoint, just come over out here on the left",
			  "displayTime": 196.369
			},
			{
			  "text": "hand side of the editor window, this grey strip that I have here, and I can click here, and now I have a red dot.",
			  "displayTime": 201.369
			},
			{
			  "text": "That is how Visual Studio tells me that I have set a breakpoint on this line.",
			  "displayTime": 207.369
			},
			{
			  "text": "And now I can come into the Debug menu, and this time instead of Starting Without Debugging I'm going to",
			  "displayTime": 211.369
			},
			{
			  "text": "Start With Debugging. I could also just press F5. And Visual Studio is going to launch the application,",
			  "displayTime": 216.369
			},
			{
			  "text": "and it's going to stop execution right on this line of code. Down here in the Windows menu, I can see the application running.",
			  "displayTime": 223.369
			},
			{
			  "text": "It hasn't produced any output as of yet because we've stopped the program before it got to the WriteLine statement.",
			  "displayTime": 230.369
			},
			{
			  "text": "And inside of Visual Studio I've had all sort of windows open up.",
			  "displayTime": 235.369
			},
			{
			  "text": "I'm just going to shut down a few that I don't really need, and I'll show you just a couple of things.",
			  "displayTime": 238.369
			},
			{
			  "text": "First of all, by default, you should have an Autos window that pops up.",
			  "displayTime": 242.369
			},
			{
			  "text": "This Autos window will show you some of the variables that are available in the current context where you're debugging.",
			  "displayTime": 246.369
			},
			{
			  "text": "Right now the only real variable I have is the parameter args, and I can see the value for this is string with",
			  "displayTime": 252.369
			},
			{
			  "text": "a 0 inside of the square brackets. That's the debuggers way of telling me that args is a string array,",
			  "displayTime": 260.369
			},
			{
			  "text": "and it's a string array of length 0. That means there are no arguments inside.",
			  "displayTime": 265.369
			},
			{
			  "text": "I could also do that by hovering the mouse over args. So anything in a C# application that is holding data,",
			  "displayTime": 270.369
			},
			{
			  "text": "you could put your mouse over this symbol and get this little popup window that shows you what's inside of a",
			  "displayTime": 276.369
			},
			{
			  "text": "particular variable or data structure. And once you have stopped execution at a breakpoint and you've",
			  "displayTime": 280.369
			},
			{
			  "text": "inspected some things, you might want to resume the application running.",
			  "displayTime": 286.369
			},
			{
			  "text": "There are a couple of ways to do that. I can us the F10 and F11 keys to step through my program,",
			  "displayTime": 289.369
			},
			{
			  "text": "that is step line-by-line. If I'm inside of a method that's calling into another method, F11 will Step Into",
			  "displayTime": 296.369
			},
			{
			  "text": "the lines of code inside that other method. If I just want the debugger to execute that method and then give",
			  "displayTime": 303.369
			},
			{
			  "text": "me back control when that method has finished executing, I can use this Step Over command.",
			  "displayTime": 309.369
			},
			{
			  "text": "And if I think everything is going to work and I just want to continue with the application running,",
			  "displayTime": 314.369
			},
			{
			  "text": "I can just press F5, and the application will execute until it hits another breakpoint.",
			  "displayTime": 318.369
			},
			{
			  "text": "Let's try the Step Over command, which is F10, and I can see that this little yellow arrow has advanced one line.",
			  "displayTime": 323.369
			},
			{
			  "text": "You can think of that yellow arrow as an instruction pointer. It's showing you the current instruction or",
			  "displayTime": 329.369
			},
			{
			  "text": "the current line of code that's going to be executed. And now I'll just use the shortcut key, F10, to try to",
			  "displayTime": 334.369
			},
			{
			  "text": "step over this line of code, and this is the line of code that's generating the exception.",
			  "displayTime": 340.369
			},
			{
			  "text": "And now since I'm in the debugger, Visual Studio is going to halt execution there and pop up a dialogue that",
			  "displayTime": 344.369
			},
			{
			  "text": "will tell me I'm getting an IndexOutofRangeException. So that is something that you get when you try to",
			  "displayTime": 350.369
			},
			{
			  "text": "index into an array and you try to grab an element that doesn't exist.",
			  "displayTime": 354.369
			},
			{
			  "text": "So this code is using args sub 0, it's trying to get to the first element of the array,",
			  "displayTime": 359.369
			},
			{
			  "text": "but unfortunately args, as we saw before, is a completely empty array so there is no first element,",
			  "displayTime": 363.369
			},
			{
			  "text": "and that's an error condition that in this scenario is going to force my program to crash.",
			  "displayTime": 368.369
			},
			{
			  "text": "Something has gone wrong, and the CLR won't allow my program to continue executing.",
			  "displayTime": 372.369
			},
			{
			  "text": "So let's go into the Debug menu and Stop Debugging. Now one question you may have is how can I pass in some",
			  "displayTime": 376.369
			},
			{
			  "text": "arguments when I'm running from this Debug menu? It's very easy to do when I'm running from the command line.",
			  "displayTime": 383.369
			},
			{
			  "text": "I can just type Hello Scott or Hello Joy, but what about when I'm running with the debugger?",
			  "displayTime": 389.369
			},
			{
			  "text": "To do that, I'm going to go and click on the project Hello. In fact, I'm going to right-click on that project.",
			  "displayTime": 393.369
			},
			{
			  "text": "Pretty much everything in Visual Studio you can right-click on to get a context menu, and in this case what",
			  "displayTime": 399.369
			},
			{
			  "text": "I want to do is open up the Properties for this project. This is going to open up a window that shows me all",
			  "displayTime": 404.369
			},
			{
			  "text": "sorts of configuration and build-related settings for my application, what's the target framework,",
			  "displayTime": 411.369
			},
			{
			  "text": "what's the name of the executable it's going to produce. There are lots and lots of settings inside of here,",
			  "displayTime": 416.369
			},
			{
			  "text": "but I just want to, for now, focus on the Debug settings. And in the Debug settings you can see that there",
			  "displayTime": 420.369
			},
			{
			  "text": "are Start Options where I can specify command line arguments that I want past to this program when I'm",
			  "displayTime": 426.369
			},
			{
			  "text": "running with the debugger. So let's pass in Scott, and I'll close this window, and now let me press F5 to",
			  "displayTime": 431.369
			},
			{
			  "text": "run with the debugger. We're going to stop on our breakpoint again.",
			  "displayTime": 438.369
			},
			{
			  "text": "This time I can see that args is a string array with a length of one, so there's something inside of args.",
			  "displayTime": 442.369
			},
			{
			  "text": "I can expand this and see that the first element inside of args is Scott.",
			  "displayTime": 448.369
			},
			{
			  "text": "I can also mouse over args and do the same thing here. And if I press F10 a couple times, I can see that I",
			  "displayTime": 452.369
			},
			{
			  "text": "stepped over two lines of code, and I should be able to see Hello Scott.",
			  "displayTime": 459.369
			},
			{
			  "text": "If I come out here to the running program, I can see that it produced the right output.",
			  "displayTime": 463.369
			},
			{
			  "text": "So let me just press F5 to continue running, and the program will exit.",
			  "displayTime": 467.369
			}
		  ]
		},
		{
		  "title": "Are You Sleepy?",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=10&mode=live",
		  "segments": [
			{
			  "text": "Now that we know a little bit more about Visual Studio, let's create a more interesting program.",
			  "displayTime": 2.0
			},
			{
			  "text": "What I want to happen is instead of forcing the user to pass in their name as a command line parameter,",
			  "displayTime": 6.669
			},
			{
			  "text": "I want the user to be able to start the program running without any command line parameters, and then the",
			  "displayTime": 10.669
			},
			{
			  "text": "program will prompt the user and ask them to enter the user name.",
			  "displayTime": 15.669
			},
			{
			  "text": "So I want to accept user input as the program is running, and this is something that I can do with another",
			  "displayTime": 20.669
			},
			{
			  "text": "method on the Console class. This method is Console.ReadLine. So WriteLine puts something onto the screen;",
			  "displayTime": 24.669
			},
			{
			  "text": "ReadLine will allow the user to type characters and then press the return key, and ReadLine will take those",
			  "displayTime": 32.669
			},
			{
			  "text": "characters, put them into a string, and return that string to me.",
			  "displayTime": 37.669
			},
			{
			  "text": "That's what his IntelliSense window is trying to tell me. The return value of calling this Console.ReadLine",
			  "displayTime": 41.0
			},
			{
			  "text": "method is a string, so I will need to take that string, and I will need to save it somewhere so that I have",
			  "displayTime": 45.669
			},
			{
			  "text": "access to the user's name later inside of this method. That's when I can declare a variable.",
			  "displayTime": 51.669
			},
			{
			  "text": "C# is a typed language, so I need to have type for every variable that I define.",
			  "displayTime": 56.669
			},
			{
			  "text": "In this case the type is string, and the variable is called name.",
			  "displayTime": 61.669
			},
			{
			  "text": "And we'll be talking in a lot more detail about the types of variables that you can have, but for now you can",
			  "displayTime": 65.669
			},
			{
			  "text": "effectively think of this name variable as holding on to that user input so that I can use it later.",
			  "displayTime": 70.669
			},
			{
			  "text": "Name will be available anywhere else throughout the rest of this method after it's been defined.",
			  "displayTime": 75.669
			},
			{
			  "text": "I want to say Console.WriteLine Hello and then plus the name. Now it would probably also be a good idea",
			  "displayTime": 80.669
			},
			{
			  "text": "before I accept that user input to write out something that tells the user they need to input their name.",
			  "displayTime": 87.669
			},
			{
			  "text": "So let's just WriteLine, Your name, and then read the result of that, and then echo it back out,",
			  "displayTime": 93.669
			},
			{
			  "text": "Hello plus name. Let's try this real quick. I'll do a build just by hitting the shortcut keys Shift+Ctrl+V.",
			  "displayTime": 99.669
			},
			{
			  "text": "Let's come out and run the program. I'm just going to type Hello this time.",
			  "displayTime": 105.669
			},
			{
			  "text": "It's going to prompt me for my name. I will type in Allen just to try something different, and we get Hello, Allen.",
			  "displayTime": 109.669
			},
			{
			  "text": "Very good. Let's take this one step further. Let's try to find out if the user had enough sleep last night.",
			  "displayTime": 115.669
			},
			{
			  "text": "We'll just basically ask how many hours of sleep did you get, and then use some logic to determine if the",
			  "displayTime": 121.669
			},
			{
			  "text": "user is well-rested or not. So first let's do the prompt. I want to WriteLine something and ask the user,",
			  "displayTime": 125.669
			},
			{
			  "text": "How many hours of sleep did you get last night? And now I expect the user to type in a number,",
			  "displayTime": 133.669
			},
			{
			  "text": "a number between let's say 0 and 24, and I want to store this value so I can inspect it later and figure out",
			  "displayTime": 140.669
			},
			{
			  "text": "if the user got enough sleep to be rested. So because I expect the user to type in a number, I'm going to",
			  "displayTime": 147.669
			},
			{
			  "text": "this time declare a variable as type int, which is short for integer.",
			  "displayTime": 153.669
			},
			{
			  "text": "This will be a variable that can store a number, hours of sleep, which would be a common naming convention",
			  "displayTime": 157.669
			},
			{
			  "text": "for a C# variable. Variables that you define inside of a method, they always start with a lower case letter.",
			  "displayTime": 164.669
			},
			{
			  "text": "If they contain multiple words in that name, then you upper case the letters of those words.",
			  "displayTime": 169.669
			},
			{
			  "text": "That's a little bit different from class names, which always start with an uppercase letter and method",
			  "displayTime": 174.669
			},
			{
			  "text": "names, which always start with an uppercase letter. So now I have this integer variable, HoursOfSleep,",
			  "displayTime": 177.669
			},
			{
			  "text": "that can store the amount of sleep that a user has. Let's try to do another Console.ReadLine to allow the",
			  "displayTime": 182.669
			},
			{
			  "text": "user to input this value, and you'll notice that I get a red squiggly inside of Visual Studio.",
			  "displayTime": 189.669
			},
			{
			  "text": "If I hover over that line, I will see the problem here, the error message.",
			  "displayTime": 194.669
			},
			{
			  "text": "It says it cannot implicitly convert type string to int. So C# is a typed language, and not all variables are compatible.",
			  "displayTime": 198.669
			},
			{
			  "text": "If you try to assign something like string to an integer, Console.ReadLine returns a string, a sequence of characters.",
			  "displayTime": 204.669
			},
			{
			  "text": "It could be anything like ABC. How can you possible take that value and put it into a variable that holds a number?",
			  "displayTime": 211.669
			},
			{
			  "text": "That's something that the C# compiler and the runtime just won't do for me automatically.",
			  "displayTime": 216.669
			},
			{
			  "text": "I have to do some explicit conversion. I need to take this string and turn it into an integer.",
			  "displayTime": 220.669
			},
			{
			  "text": "That's something that I can do by invoking a method on int. It's a method called Parse.",
			  "displayTime": 226.669
			},
			{
			  "text": "You pass in a string, and Parse will try to take that string and turn it into an integer value.",
			  "displayTime": 232.669
			},
			{
			  "text": "So the user types in the characters 1, 2, int.Parse will turn that into the number 12.",
			  "displayTime": 238.669
			},
			{
			  "text": "The user could also type in the characters A, B, C, and int.Parse is going to through an exception and crash",
			  "displayTime": 243.669
			},
			{
			  "text": "the program because it cannot convert A, B, C into a number. We'll talk about how to deal with that type of",
			  "displayTime": 249.669
			},
			{
			  "text": "scenario later in the course. For right now we'll assume that the user is a good user; they always type in numbers.",
			  "displayTime": 254.669
			},
			{
			  "text": "And now I can make a determination if the user has enough sleep or not.",
			  "displayTime": 261.669
			},
			{
			  "text": "Let's say that if the user has more than eight hours of sleep that they should be well-rested, so we want to",
			  "displayTime": 264.669
			},
			{
			  "text": "write a message that tells them they should be well-rested. Let's do this after we say their name.",
			  "displayTime": 270.669
			},
			{
			  "text": "I want to say Console.WriteLine, You are well rested, but remember I only want to do this if the user had",
			  "displayTime": 276.669
			},
			{
			  "text": "more than eight hours of sleep, and this is a place where I can use an if statement in C#.",
			  "displayTime": 285.669
			},
			{
			  "text": "If allows me to write an expression that will evaluate to true or false.",
			  "displayTime": 290.669
			},
			{
			  "text": "So if hoursOfSleep is greater than eight, then do what is inside of these curly braces, so I want to take",
			  "displayTime": 295.669
			},
			{
			  "text": "this Console.WriteLine method and cut it and move it inside of that if condition.",
			  "displayTime": 303.669
			},
			{
			  "text": "And now what if the user didn't have more than eight hours of sleep?",
			  "displayTime": 309.669
			},
			{
			  "text": "Well then I can use the else keyword. If else logic is very common logic in a C# application.",
			  "displayTime": 312.669
			},
			{
			  "text": "You can say if you meet some condition do this; otherwise, do this other thing.",
			  "displayTime": 317.669
			},
			{
			  "text": "The other thing could be that we could Console.WriteLine, You need more sleep.",
			  "displayTime": 322.669
			},
			{
			  "text": "And now we have an application that not only takes some user input, but also branches the execution of the",
			  "displayTime": 328.669
			},
			{
			  "text": "application in different directions depending on that input. And let's just run this with the debugger to",
			  "displayTime": 334.669
			},
			{
			  "text": "see how it works. I'll press F5. We will hit our opening breakpoint here at the beginning of the program.",
			  "displayTime": 339.669
			},
			{
			  "text": "Let me F10 over a couple of lines. We hit the ReadLine statement, and Visual Studio is smart enough to switch",
			  "displayTime": 345.669
			},
			{
			  "text": "over to the application and show it because it's expecting some input here.",
			  "displayTime": 351.669
			},
			{
			  "text": "I'll put in my name, which is Scott. I can use the mouse, hover over this, see that name does contain the",
			  "displayTime": 355.669
			},
			{
			  "text": "value Scott, that's good. Now let's get the number of hoursOfSleep.",
			  "displayTime": 360.669
			},
			{
			  "text": "Let me enter the value nine. Again I can hover over hoursOfSleep, see that there is a nine there.",
			  "displayTime": 364.669
			},
			{
			  "text": "We will WriteLine out the name, and now you can watch this: If hoursOfSleep is greater than eight,",
			  "displayTime": 370.669
			},
			{
			  "text": "I press F10. Yes, we're going to branch into that condition, and we will Write.Line You are well rested,",
			  "displayTime": 375.669
			},
			{
			  "text": "and we will skip the else part. So I only get to execute one of those two branches.",
			  "displayTime": 382.669
			},
			{
			  "text": "And let me just flip over to the program. I can see it produced the right output, Hello, Scott You are well rested.",
			  "displayTime": 386.669
			},
			{
			  "text": "So I will press F5 and allow the application to finish executing, and then the debugger exits, and I can go",
			  "displayTime": 392.669
			},
			{
			  "text": "back to editing some source code. And now I encourage you to try out this same program, and try it out with",
			  "displayTime": 398.669
			},
			{
			  "text": "different inputs, see what happens if hoursOfSleep is less than eight, see what happens when the user enters",
			  "displayTime": 402.669
			},
			{
			  "text": "characters for the hoursOfSleep, something like ABC, see how the program crashes and how it behaves.",
			  "displayTime": 408.669
			},
			{
			  "text": "Try some of these things until you are comfortable with Visual Studio and the debugger, and then you can",
			  "displayTime": 414.669
			},
			{
			  "text": "move on to the next module.",
			  "displayTime": 419.669
			}
		  ]
		},
		{
		  "title": "Summary",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=11&mode=live",
		  "segments": [
			{
			  "text": "In this first module I intended to introduce you to Visual Studio and get you up and running by writing a simple program.",
			  "displayTime": 0.0
			},
			{
			  "text": "This program gives you an idea of what the C# language looks like.",
			  "displayTime": 7.939
			},
			{
			  "text": "And we talked about quite a few concepts, concepts like classes, types, variables, expressions.",
			  "displayTime": 11.939
			},
			{
			  "text": "Those are all topics that we'll cover in more detail throughout the rest of this course.",
			  "displayTime": 15.939
			},
			{
			  "text": "What you really want to do right now is try your hand at writing that same program and just getting familiar",
			  "displayTime": 19.939
			},
			{
			  "text": "with the Visual Studio environment. Make sure you know how to create a new project, edit some source code,",
			  "displayTime": 23.939
			},
			{
			  "text": "save a file, build a project, and run with the debugger. Learning those basics will help you move a little",
			  "displayTime": 28.939
			},
			{
			  "text": "bit quicker in the rest of the course.",
			  "displayTime": 34.939
			}
		  ]
		}
	  ]
	},
	{
	  "title": "Classes and Objects",
	  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m2&clip=0&mode=live",
	  "clips": [
		{
		  "title": "Introduction",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m2&clip=0&mode=live",
		  "segments": [
			{
			  "text": "Hi this is Scott, and this module",
			  "displayTime": 1.5
			},
			{
			  "text": "is about classes in C#.",
			  "displayTime": 3.5
			},
			{
			  "text": "Classes allow us to module the world around us in software.",
			  "displayTime": 5.5
			},
			{
			  "text": "We create custom classes to represent purchase orders,",
			  "displayTime": 8.5
			},
			{
			  "text": "automobile parts, employees, accounts",
			  "displayTime": 11.5
			},
			{
			  "text": "or spaceships in a game.",
			  "displayTime": 13.5
			},
			{
			  "text": "Anything you need to write software about,",
			  "displayTime": 15.5
			},
			{
			  "text": "you can create a set of C# classes to help.",
			  "displayTime": 17.5
			},
			{
			  "text": "In this module, we'll talk about the relationship",
			  "displayTime": 19.5
			},
			{
			  "text": "between classes and objects and start to learn",
			  "displayTime": 21.5
			},
			{
			  "text": "how you can use C# as an object-oriented",
			  "displayTime": 24.5
			},
			{
			  "text": "programming language.",
			  "displayTime": 26.5
			}
		  ]
		},
		{
		  "title": "The Grade Book",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m2&clip=1&mode=live",
		  "segments": [
			{
			  "text": "When you sit down to write a class in C#,",
			  "displayTime": 1.557
			},
			{
			  "text": "it's usually because you need to write some code",
			  "displayTime": 3.557
			},
			{
			  "text": "to create a program for something that you need",
			  "displayTime": 5.557
			},
			{
			  "text": "or something your business needs.",
			  "displayTime": 7.557
			},
			{
			  "text": "So pretend someone comes to you",
			  "displayTime": 9.557
			},
			{
			  "text": "with the following requirements:",
			  "displayTime": 10.557
			},
			{
			  "text": "We need an electronic grade book to read the scores",
			  "displayTime": 12.557
			},
			{
			  "text": "of an individual student and then compute",
			  "displayTime": 14.557
			},
			{
			  "text": "some simple statistics from the scores.",
			  "displayTime": 16.557
			},
			{
			  "text": "The grades are entered as floating point numbers",
			  "displayTime": 18.557
			},
			{
			  "text": "from zero to 100, and the statistics should show us",
			  "displayTime": 20.557
			},
			{
			  "text": "the highest grade, the lowest grade and the average grade.",
			  "displayTime": 23.557
			},
			{
			  "text": "These requirements describe the program we need to write,",
			  "displayTime": 25.557
			},
			{
			  "text": "but where do we get started?",
			  "displayTime": 28.557
			},
			{
			  "text": "Well, fundamentally, C# is a language",
			  "displayTime": 29.557
			},
			{
			  "text": "where you write classes to implement features",
			  "displayTime": 31.557
			},
			{
			  "text": "in your software, so these requirements will force us",
			  "displayTime": 33.557
			},
			{
			  "text": "to write at least one class and to use other classes",
			  "displayTime": 35.557
			},
			{
			  "text": "that have already been written for us",
			  "displayTime": 38.557
			},
			{
			  "text": "by the framework class library.",
			  "displayTime": 39.557
			},
			{
			  "text": "But what class should we write?",
			  "displayTime": 41.557
			},
			{
			  "text": "This is one of the toughest questions to answer",
			  "displayTime": 43.557
			},
			{
			  "text": "if you are new to programming.",
			  "displayTime": 45.557
			},
			{
			  "text": "But generally, we use classes to create abstractions",
			  "displayTime": 46.557
			},
			{
			  "text": "for the different nouns that we need to work with,",
			  "displayTime": 49.557
			},
			{
			  "text": "or a noun is a person, a place, a thing, an idea.",
			  "displayTime": 52.557
			},
			{
			  "text": "So when I scan through the requirements,",
			  "displayTime": 55.557
			},
			{
			  "text": "a noun like grade book will instantly jump out at me",
			  "displayTime": 57.557
			},
			{
			  "text": "because it is a noun that the business is using.",
			  "displayTime": 60.557
			},
			{
			  "text": "It's in the requirements, and it would seem like",
			  "displayTime": 62.557
			},
			{
			  "text": "a good place to get started is to create a class",
			  "displayTime": 64.557
			},
			{
			  "text": "named grade book that will implement the functionality",
			  "displayTime": 66.557
			},
			{
			  "text": "to store grades and compute statistics.",
			  "displayTime": 69.557
			},
			{
			  "text": "Let's get started on these requirements",
			  "displayTime": 71.557
			},
			{
			  "text": "by creating a new project.",
			  "displayTime": 73.557
			},
			{
			  "text": "So once again, I'll go to the File, New Project menu.",
			  "displayTime": 75.557
			},
			{
			  "text": "Once again, I want a console application,",
			  "displayTime": 78.557
			},
			{
			  "text": "and I'm going to give the project the name Grade,",
			  "displayTime": 80.557
			},
			{
			  "text": "with the capital G.",
			  "displayTime": 82.557
			},
			{
			  "text": "I'll let Visual Studio create this project for me and",
			  "displayTime": 84.557
			},
			{
			  "text": "Visual Studio will give me my first class.",
			  "displayTime": 87.557
			},
			{
			  "text": "The program class, just like we saw in the last module,",
			  "displayTime": 89.557
			},
			{
			  "text": "here's the mean method on that program class.",
			  "displayTime": 92.557
			},
			{
			  "text": "That's the entry point for the application,",
			  "displayTime": 95.557
			},
			{
			  "text": "and that's where I want to use a grade book class",
			  "displayTime": 97.557
			},
			{
			  "text": "that I'm going to create.",
			  "displayTime": 99.557
			},
			{
			  "text": "So where do I put the GradeBook class?",
			  "displayTime": 100.557
			},
			{
			  "text": "Well, it's perfectly legal to define multiple classes",
			  "displayTime": 102.557
			},
			{
			  "text": "inside of the same file, but most C# developers",
			  "displayTime": 105.557
			},
			{
			  "text": "will follow a convention where each class",
			  "displayTime": 108.557
			},
			{
			  "text": "gets its own individual file.",
			  "displayTime": 110.557
			},
			{
			  "text": "So I'm going to right-click the project that opens up",
			  "displayTime": 111.557
			},
			{
			  "text": "this context menu, and then I can say",
			  "displayTime": 114.557
			},
			{
			  "text": "let's add a class to this project.",
			  "displayTime": 116.557
			},
			{
			  "text": "The dialog that opened contains a number of templates",
			  "displayTime": 119.557
			},
			{
			  "text": "for all sorts of different things that you can add",
			  "displayTime": 121.557
			},
			{
			  "text": "to a project, but I just want to add a class.",
			  "displayTime": 123.557
			},
			{
			  "text": "And down here, I can give that class a name,",
			  "displayTime": 126.557
			},
			{
			  "text": "give this file a name.",
			  "displayTime": 128.557
			},
			{
			  "text": "It's going to be GradeBook.cs.",
			  "displayTime": 129.557
			},
			{
			  "text": "And by convention, the file will have the same name",
			  "displayTime": 131.557
			},
			{
			  "text": "as the class.",
			  "displayTime": 134.557
			},
			{
			  "text": "So Visual Studio has already given me",
			  "displayTime": 135.557
			},
			{
			  "text": "a class definition here.",
			  "displayTime": 137.557
			},
			{
			  "text": "The class is GradeBook.",
			  "displayTime": 138.557
			},
			{
			  "text": "A class definition always starts with the class keyword",
			  "displayTime": 139.557
			},
			{
			  "text": "and then the name of the class.",
			  "displayTime": 142.557
			},
			{
			  "text": "Everything between these curly braces then will be",
			  "displayTime": 144.557
			},
			{
			  "text": "what we call members of this class,",
			  "displayTime": 146.557
			},
			{
			  "text": "just like this class is nested inside of a namespace",
			  "displayTime": 148.557
			},
			{
			  "text": "called Grades, so GradeBook is a member of grades.",
			  "displayTime": 151.557
			},
			{
			  "text": "And here at the top, we have a number of using statements.",
			  "displayTime": 155.557
			},
			{
			  "text": "We won't use classes from all of those namespaces,",
			  "displayTime": 157.557
			},
			{
			  "text": "but I'll leave them there because they don't hurt anything.",
			  "displayTime": 160.557
			},
			{
			  "text": "And now inside of GradeBook, anything that I add here",
			  "displayTime": 162.557
			},
			{
			  "text": "will be a member of the class.",
			  "displayTime": 164.557
			},
			{
			  "text": "And class members broadly fall into one of two categories.",
			  "displayTime": 166.557
			},
			{
			  "text": "One category would be members of this class",
			  "displayTime": 169.557
			},
			{
			  "text": "that hold state or data, because state is the data",
			  "displayTime": 172.557
			},
			{
			  "text": "that you need to work with inside of the class.",
			  "displayTime": 175.557
			},
			{
			  "text": "The state for GradeBook would be the grades",
			  "displayTime": 177.557
			},
			{
			  "text": "that a user is entering for a student.",
			  "displayTime": 179.557
			},
			{
			  "text": "So somewhere inside of this GradeBook,",
			  "displayTime": 181.557
			},
			{
			  "text": "I'm going to need to store each grade as it is entered,",
			  "displayTime": 183.557
			},
			{
			  "text": "and then the other category of class members",
			  "displayTime": 185.557
			},
			{
			  "text": "would be behavior-related members,",
			  "displayTime": 187.557
			},
			{
			  "text": "that is members that do work.",
			  "displayTime": 189.557
			},
			{
			  "text": "These members are typically methods,",
			  "displayTime": 191.557
			},
			{
			  "text": "methods that I want to write to allow someone",
			  "displayTime": 193.557
			},
			{
			  "text": "to interact with a GradeBook and ask it to do something",
			  "displayTime": 195.557
			},
			{
			  "text": "like add a grade or compute statistics.",
			  "displayTime": 197.557
			},
			{
			  "text": "The class is a noun, and methods that do work on that class",
			  "displayTime": 200.557
			},
			{
			  "text": "are typically verbs, like AddGrade, ComputeStatistics.",
			  "displayTime": 203.557
			},
			{
			  "text": "So they are members that start with a verb.",
			  "displayTime": 208.557
			},
			{
			  "text": "And let's start by adding a member that will allow me",
			  "displayTime": 210.557
			},
			{
			  "text": "to add a grade into the GradeBook.",
			  "displayTime": 212.557
			},
			{
			  "text": "I'll do that first by using two C# keywords,",
			  "displayTime": 213.557
			},
			{
			  "text": "public and void.",
			  "displayTime": 216.557
			},
			{
			  "text": "We will circle back later and talk about",
			  "displayTime": 218.557
			},
			{
			  "text": "what those two keywords mean,",
			  "displayTime": 220.557
			},
			{
			  "text": "and I'm going to create a method called AddGrade.",
			  "displayTime": 221.557
			},
			{
			  "text": "It's a method because it's going to have",
			  "displayTime": 223.557
			},
			{
			  "text": "parentheses at the end.",
			  "displayTime": 225.557
			},
			{
			  "text": "And then there's an opening curly brace",
			  "displayTime": 227.557
			},
			{
			  "text": "and a closing curly brace.",
			  "displayTime": 228.557
			},
			{
			  "text": "Everything that goes between those curly braces",
			  "displayTime": 229.557
			},
			{
			  "text": "will be the code that executes when someone",
			  "displayTime": 231.557
			},
			{
			  "text": "invokes this method and executes this method.",
			  "displayTime": 233.557
			},
			{
			  "text": "The parentheses here contain the parameter list",
			  "displayTime": 236.557
			},
			{
			  "text": "for this method, that is, what is the data",
			  "displayTime": 239.557
			},
			{
			  "text": "that someone wants to pass into this method?",
			  "displayTime": 241.557
			},
			{
			  "text": "Right now, this method doesn't take any parameters,",
			  "displayTime": 243.557
			},
			{
			  "text": "but obviously when I want to add a grade to the GradeBook,",
			  "displayTime": 246.557
			},
			{
			  "text": "I will need to take some data, which is the grade,",
			  "displayTime": 248.557
			},
			{
			  "text": "and I could do that by asking someone to pass in",
			  "displayTime": 250.557
			},
			{
			  "text": "an integer value.",
			  "displayTime": 253.557
			},
			{
			  "text": "Let's call it grade.",
			  "displayTime": 255.557
			},
			{
			  "text": "And you can see that defining this parameter",
			  "displayTime": 256.557
			},
			{
			  "text": "is very much like how we defined a variable",
			  "displayTime": 259.557
			},
			{
			  "text": "in the last module.",
			  "displayTime": 261.557
			},
			{
			  "text": "I have to give that parameter a type, which is integer,",
			  "displayTime": 262.557
			},
			{
			  "text": "and I have to give that parameter a name, which is grade.",
			  "displayTime": 265.557
			},
			{
			  "text": "But in this case, the requirements did say",
			  "displayTime": 268.557
			},
			{
			  "text": "that these grades would be floating point numbers,",
			  "displayTime": 270.557
			},
			{
			  "text": "and integer is not a good way to hold",
			  "displayTime": 272.557
			},
			{
			  "text": "a floating point number.",
			  "displayTime": 274.557
			},
			{
			  "text": "There's a couple other classes that .NET provides",
			  "displayTime": 275.557
			},
			{
			  "text": "that I should use for floating point numbers.",
			  "displayTime": 277.557
			},
			{
			  "text": "There is double, which is a double precision",
			  "displayTime": 280.557
			},
			{
			  "text": "floating point number; and there's float,",
			  "displayTime": 283.557
			},
			{
			  "text": "which takes up less space, it's a single precision",
			  "displayTime": 286.557
			},
			{
			  "text": "floating point number.",
			  "displayTime": 288.557
			},
			{
			  "text": "And for this application, float should be good enough.",
			  "displayTime": 289.557
			},
			{
			  "text": "We'll have a high enough precision.",
			  "displayTime": 291.557
			},
			{
			  "text": "And at this point, this grade variable will be available",
			  "displayTime": 293.557
			},
			{
			  "text": "throughout the rest of the method.",
			  "displayTime": 296.557
			},
			{
			  "text": "We say that it is scoped to this method",
			  "displayTime": 298.557
			},
			{
			  "text": "between these two curly braces.",
			  "displayTime": 300.557
			},
			{
			  "text": "I cannot use it anywhere outside of those curly braces,",
			  "displayTime": 301.557
			},
			{
			  "text": "but I can use this parameter, grade,",
			  "displayTime": 304.557
			},
			{
			  "text": "which I can just think of now as a variable",
			  "displayTime": 306.557
			},
			{
			  "text": "anywhere inside the curly braces.",
			  "displayTime": 308.557
			},
			{
			  "text": "I could, for instance, say",
			  "displayTime": 310.557
			},
			{
			  "text": "grade = grade + 5.",
			  "displayTime": 312.557
			},
			{
			  "text": "That would add five points to every grade",
			  "displayTime": 315.557
			},
			{
			  "text": "before we store it, but I don't need to do that.",
			  "displayTime": 317.557
			},
			{
			  "text": "What I really need to do is store this grade,",
			  "displayTime": 319.557
			},
			{
			  "text": "make it part of the state of this class.",
			  "displayTime": 322.557
			},
			{
			  "text": "I don't know how many grades",
			  "displayTime": 324.557
			},
			{
			  "text": "someone will pass to me ultimately.",
			  "displayTime": 325.557
			},
			{
			  "text": "They can invoke AddGrade 10 times.",
			  "displayTime": 327.557
			},
			{
			  "text": "I would need to store all 10 grades.",
			  "displayTime": 329.557
			},
			{
			  "text": "And I'll need access to those grades outside of this method,",
			  "displayTime": 331.557
			},
			{
			  "text": "outside of AddGrade, because when someone calls",
			  "displayTime": 334.557
			},
			{
			  "text": "a different method, ComputeStatistics,",
			  "displayTime": 336.557
			},
			{
			  "text": "the parameter grade won't be available.",
			  "displayTime": 338.557
			},
			{
			  "text": "So I need to store that somewhere.",
			  "displayTime": 340.557
			},
			{
			  "text": "And to do that, I'll use another class",
			  "displayTime": 342.557
			},
			{
			  "text": "from the framework class library,",
			  "displayTime": 344.557
			},
			{
			  "text": "one that is in the namespace System.Collections.Generic.",
			  "displayTime": 345.557
			},
			{
			  "text": "As the name of that namespace implies,",
			  "displayTime": 348.557
			},
			{
			  "text": "this namespace is full of collection classes,",
			  "displayTime": 350.557
			},
			{
			  "text": "that is, classes that allow you to store multiple things.",
			  "displayTime": 352.557
			},
			{
			  "text": "One such collection is the list collection.",
			  "displayTime": 356.557
			},
			{
			  "text": "A list can store zero items or 10 items or 1000 items.",
			  "displayTime": 359.557
			},
			{
			  "text": "But before I can use a list, I have to tell the list",
			  "displayTime": 363.557
			},
			{
			  "text": "what type of items it's going to be storing.",
			  "displayTime": 366.557
			},
			{
			  "text": "Is it going to be storing a list of strings",
			  "displayTime": 368.557
			},
			{
			  "text": "or a list of integers?",
			  "displayTime": 371.557
			},
			{
			  "text": "Or a list of floating point numbers?",
			  "displayTime": 372.557
			},
			{
			  "text": "That's what I want because the grades are being",
			  "displayTime": 375.557
			},
			{
			  "text": "passed to me as floating point numbers.",
			  "displayTime": 377.557
			},
			{
			  "text": "Later in this course, I'll describe exactly",
			  "displayTime": 379.557
			},
			{
			  "text": "what this syntax means, this syntax with the angle brackets.",
			  "displayTime": 381.557
			},
			{
			  "text": "It's part of what we call the generic type syntax in C#,",
			  "displayTime": 385.557
			},
			{
			  "text": "but that's a preview for a later module",
			  "displayTime": 387.557
			},
			{
			  "text": "when I talk about generics.",
			  "displayTime": 389.557
			},
			{
			  "text": "For right now, you can think about this as a list",
			  "displayTime": 391.557
			},
			{
			  "text": "that can hold zero or more floating point numbers.",
			  "displayTime": 393.557
			},
			{
			  "text": "And this is going to be one of the members of the class",
			  "displayTime": 396.557
			},
			{
			  "text": "that holds the state for the class.",
			  "displayTime": 398.557
			},
			{
			  "text": "It's what we would call a field.",
			  "displayTime": 400.557
			},
			{
			  "text": "So right now, we have a method called AddGrade,",
			  "displayTime": 402.557
			},
			{
			  "text": "and this is going to be a field.",
			  "displayTime": 404.557
			},
			{
			  "text": "And just like a method, this field has to have a name.",
			  "displayTime": 406.557
			},
			{
			  "text": "I'm going to call it grades for now.",
			  "displayTime": 408.557
			},
			{
			  "text": "For fields, the naming convention is to use lowercase names.",
			  "displayTime": 411.557
			},
			{
			  "text": "And to place a grade into this collection of grades,",
			  "displayTime": 414.557
			},
			{
			  "text": "I just need to come into my method and say grades,",
			  "displayTime": 417.557
			},
			{
			  "text": "and that will be available to me inside of this method",
			  "displayTime": 420.557
			},
			{
			  "text": "because grades is a member of the class.",
			  "displayTime": 422.557
			},
			{
			  "text": "And once I hit the period character,",
			  "displayTime": 424.557
			},
			{
			  "text": "the IntelliSense window pops up to show me",
			  "displayTime": 426.557
			},
			{
			  "text": "all of the different things that I can do with a list.",
			  "displayTime": 428.557
			},
			{
			  "text": "That includes things like clear the list, to empty it out,",
			  "displayTime": 430.557
			},
			{
			  "text": "flush all the grades out.",
			  "displayTime": 434.557
			},
			{
			  "text": "I could also sort the list in some specific order.",
			  "displayTime": 435.557
			},
			{
			  "text": "But what I want to do is just to add something to the list.",
			  "displayTime": 439.557
			},
			{
			  "text": "I want to add the grade that is being passed in",
			  "displayTime": 442.557
			},
			{
			  "text": "to the AddGrade method.",
			  "displayTime": 446.557
			},
			{
			  "text": "Now there's at least one more thing that we have to do",
			  "displayTime": 447.557
			},
			{
			  "text": "to make this class usable, but we'll see that next.",
			  "displayTime": 449.557
			},
			{
			  "text": "For right now, I just want you to know that this is how",
			  "displayTime": 452.557
			},
			{
			  "text": "you create classes.",
			  "displayTime": 454.557
			},
			{
			  "text": "I now have two classes in this project,",
			  "displayTime": 455.557
			},
			{
			  "text": "Program and GradeBook.",
			  "displayTime": 457.557
			},
			{
			  "text": "The project system in Visual Studio will make sure",
			  "displayTime": 459.557
			},
			{
			  "text": "both of these files go to the C# compiler,",
			  "displayTime": 461.557
			},
			{
			  "text": "which will compile them both into my application.",
			  "displayTime": 463.557
			},
			{
			  "text": "And each of these classes, GradeBook and Program,",
			  "displayTime": 465.557
			},
			{
			  "text": "they both have their own file to live in",
			  "displayTime": 468.557
			},
			{
			  "text": "with a .cs extension.",
			  "displayTime": 470.557
			},
			{
			  "text": "And in this GradeBook class, we have one method",
			  "displayTime": 472.557
			},
			{
			  "text": "and we have one field.",
			  "displayTime": 474.557
			},
			{
			  "text": "Throughout this course, we'll discover other types",
			  "displayTime": 475.557
			},
			{
			  "text": "of members that we can add to a class.",
			  "displayTime": 477.557
			},
			{
			  "text": "But for right now, let's work with this method in this field.",
			  "displayTime": 479.957
			}
		  ]
		},
		{
		  "title": "Classes and Objects",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m2&clip=2&mode=live",
		  "segments": [
			{
			  "text": "Let's return to Program.cs and the main method which is the entry point",
			  "displayTime": 1.946
			},
			{
			  "text": "for the application.",
			  "displayTime": 6.946
			},
			{
			  "text": "And now that I have a class, GradeBook,",
			  "displayTime": 7.946
			},
			{
			  "text": "I can have define variables of type GradeBook.",
			  "displayTime": 9.946
			},
			{
			  "text": "And the name of this variable could be GradeBook or Grades.",
			  "displayTime": 12.946
			},
			{
			  "text": "Let's just call it book.",
			  "displayTime": 15.946
			},
			{
			  "text": "And through that variable,",
			  "displayTime": 17.946
			},
			{
			  "text": "I should be able to invoke methods",
			  "displayTime": 19.946
			},
			{
			  "text": "like the AddGrade method that we gave a GradeBook,",
			  "displayTime": 21.946
			},
			{
			  "text": "and I can pass in a parameter to that method.",
			  "displayTime": 23.946
			},
			{
			  "text": "Let's pass in a 91.",
			  "displayTime": 26.946
			},
			{
			  "text": "Now if I were to build the application at this point,",
			  "displayTime": 28.946
			},
			{
			  "text": "I would get a compiler error,",
			  "displayTime": 30.946
			},
			{
			  "text": "and Visual Studio is already indicating",
			  "displayTime": 31.946
			},
			{
			  "text": "that there's going to be an error",
			  "displayTime": 33.946
			},
			{
			  "text": "with the red squiggly line.",
			  "displayTime": 35.946
			},
			{
			  "text": "And the error is the use of an unassigned",
			  "displayTime": 36.946
			},
			{
			  "text": "local variable, book.",
			  "displayTime": 38.946
			},
			{
			  "text": "Once I have a class definition,",
			  "displayTime": 40.946
			},
			{
			  "text": "I can use that to create variables like book.",
			  "displayTime": 42.946
			},
			{
			  "text": "But just by adding a variable of type book to this method,",
			  "displayTime": 44.946
			},
			{
			  "text": "that doesn't give me an actual GradeBook.",
			  "displayTime": 46.946
			},
			{
			  "text": "All it does is give me a variable that I can use",
			  "displayTime": 49.946
			},
			{
			  "text": "to access a GradeBook.",
			  "displayTime": 51.946
			},
			{
			  "text": "And here's an important concept in C#",
			  "displayTime": 53.946
			},
			{
			  "text": "that we will talk about several times in this course.",
			  "displayTime": 55.946
			},
			{
			  "text": "When I create a class definition,",
			  "displayTime": 57.946
			},
			{
			  "text": "I can think of that class definition like a cookie-cutter.",
			  "displayTime": 59.946
			},
			{
			  "text": "A cookie-cutter allows me to create one or more cookies",
			  "displayTime": 62.946
			},
			{
			  "text": "with a specific shape just by applying the cutter",
			  "displayTime": 64.946
			},
			{
			  "text": "to some dough.",
			  "displayTime": 67.946
			},
			{
			  "text": "And its cookies that I really want to work with and eat,",
			  "displayTime": 68.946
			},
			{
			  "text": "but cookie-cutter only exists to create cookies",
			  "displayTime": 70.946
			},
			{
			  "text": "with a consistent and specific shape.",
			  "displayTime": 73.946
			},
			{
			  "text": "A class definition is similar to this",
			  "displayTime": 75.946
			},
			{
			  "text": "because I don't do any actual work",
			  "displayTime": 77.946
			},
			{
			  "text": "with the class definition, but I can use the class",
			  "displayTime": 79.946
			},
			{
			  "text": "to create objects with a specific and consistent shape",
			  "displayTime": 81.946
			},
			{
			  "text": "and then work with those objects.",
			  "displayTime": 85.946
			},
			{
			  "text": "The class is a cookie-cutter.",
			  "displayTime": 86.946
			},
			{
			  "text": "But instead of stamping out cookies from dough,",
			  "displayTime": 88.946
			},
			{
			  "text": "a class will stamp out objects",
			  "displayTime": 90.946
			},
			{
			  "text": "from the memory of the computer.",
			  "displayTime": 92.946
			},
			{
			  "text": "And it objects that I need to work with in my program.",
			  "displayTime": 94.946
			},
			{
			  "text": "It is objects that are allocated into the memory",
			  "displayTime": 96.946
			},
			{
			  "text": "of my computer and hold the data that I need.",
			  "displayTime": 99.946
			},
			{
			  "text": "The way I create a real GradeBook object",
			  "displayTime": 102.946
			},
			{
			  "text": "using that GradeBook class is to use another keyword in C#,",
			  "displayTime": 104.946
			},
			{
			  "text": "the new keyword.",
			  "displayTime": 107.946
			},
			{
			  "text": "And I'll say new GradeBook.",
			  "displayTime": 109.946
			},
			{
			  "text": "Literally, I am asking for a new instance",
			  "displayTime": 111.946
			},
			{
			  "text": "of this GradeBook class, and I'm going to store a reference",
			  "displayTime": 113.946
			},
			{
			  "text": "to that object, this new GradeBook object,",
			  "displayTime": 117.946
			},
			{
			  "text": "in the variable book.",
			  "displayTime": 119.946
			},
			{
			  "text": "I'm also going to apply a parenthesis here,",
			  "displayTime": 120.946
			},
			{
			  "text": "and it looks like I'm invoking a method.",
			  "displayTime": 123.946
			},
			{
			  "text": "That's because behind the scenes,",
			  "displayTime": 125.946
			},
			{
			  "text": "I actually am invoking a method.",
			  "displayTime": 126.946
			},
			{
			  "text": "I'm using the name of the class, GradeBook,",
			  "displayTime": 128.946
			},
			{
			  "text": "and then applying parentheses.",
			  "displayTime": 130.946
			},
			{
			  "text": "Behind the scenes, that will invoke what's known",
			  "displayTime": 132.946
			},
			{
			  "text": "as a constructor.",
			  "displayTime": 134.946
			},
			{
			  "text": "And a constructor is responsible for creating a new instance",
			  "displayTime": 135.946
			},
			{
			  "text": "of this GradeBook by allocating memory",
			  "displayTime": 138.946
			},
			{
			  "text": "and initializing the state inside.",
			  "displayTime": 139.946
			},
			{
			  "text": "We are going to talk more about instructors in just a bit.",
			  "displayTime": 141.946
			},
			{
			  "text": "But now that I've created a new GradeBook",
			  "displayTime": 144.946
			},
			{
			  "text": "and I've assigned that to book,",
			  "displayTime": 146.946
			},
			{
			  "text": "that takes care of the uninitialized variable,",
			  "displayTime": 147.946
			},
			{
			  "text": "that is, a variable that just wasn't assigned anything.",
			  "displayTime": 149.946
			},
			{
			  "text": "The C# compiler was smart enough to know",
			  "displayTime": 152.946
			},
			{
			  "text": "that, that variable was going to create a problem,",
			  "displayTime": 154.946
			},
			{
			  "text": "it didn't point to an actual GradeBook.",
			  "displayTime": 156.946
			},
			{
			  "text": "And now let me try to run this program with the debugger",
			  "displayTime": 158.946
			},
			{
			  "text": "to see if we can add a grade.",
			  "displayTime": 162.946
			},
			{
			  "text": "I'll do that just by pressing F5 to run with the debugger.",
			  "displayTime": 163.946
			},
			{
			  "text": "And after Visual Studio builds the project,",
			  "displayTime": 167.946
			},
			{
			  "text": "it will start the application running and",
			  "displayTime": 170.946
			},
			{
			  "text": "we will get an exception inside of our AddGrade method.",
			  "displayTime": 174.946
			},
			{
			  "text": "This exception is a NullReferenceException.",
			  "displayTime": 178.946
			},
			{
			  "text": "Is an exception that you are sure to see many times",
			  "displayTime": 181.946
			},
			{
			  "text": "over the course of a career in C# programming.",
			  "displayTime": 184.946
			},
			{
			  "text": "And in this case, it means I'm using",
			  "displayTime": 186.946
			},
			{
			  "text": "an uninitialized variable, and that uninitialized variable",
			  "displayTime": 188.946
			},
			{
			  "text": "is the field, grades, that I have inside of GradeBook.",
			  "displayTime": 191.946
			},
			{
			  "text": "Let me stop the debugger",
			  "displayTime": 195.946
			},
			{
			  "text": "and show you that Visual Studio tried to indicate",
			  "displayTime": 198.946
			},
			{
			  "text": "that this was going to be a problem.",
			  "displayTime": 200.946
			},
			{
			  "text": "It did that with a warning or a green squiggly line.",
			  "displayTime": 202.946
			},
			{
			  "text": "It's not an error because the C# compiler",
			  "displayTime": 205.946
			},
			{
			  "text": "cannot tell with 100% accuracy that this was going",
			  "displayTime": 207.946
			},
			{
			  "text": "to create a problem.",
			  "displayTime": 210.946
			},
			{
			  "text": "It was able to do that inside of Program.cs",
			  "displayTime": 211.946
			},
			{
			  "text": "with this very simple logic before I had new GradeBook.",
			  "displayTime": 213.946
			},
			{
			  "text": "The C# compiler knew that book was uninitialized",
			  "displayTime": 216.946
			},
			{
			  "text": "and I was certainly going to have a problem.",
			  "displayTime": 219.946
			},
			{
			  "text": "In the case of the class, it wasn't so clear.",
			  "displayTime": 221.946
			},
			{
			  "text": "But I did get a warning here that this grades field",
			  "displayTime": 223.946
			},
			{
			  "text": "was never assigned to and will always have",
			  "displayTime": 226.946
			},
			{
			  "text": "the default value, null, which means I will not have",
			  "displayTime": 228.946
			},
			{
			  "text": "an object that is a list of floating point numbers.",
			  "displayTime": 230.946
			},
			{
			  "text": "I will have a variable that points to nothing.",
			  "displayTime": 234.946
			},
			{
			  "text": "There's nothing I can do with it.",
			  "displayTime": 236.946
			},
			{
			  "text": "Just like with the GradeBook in Program.cs,",
			  "displayTime": 237.946
			},
			{
			  "text": "I have to make sure that this field is initialized",
			  "displayTime": 239.946
			},
			{
			  "text": "and actually points to an object,",
			  "displayTime": 241.946
			},
			{
			  "text": "a list of float that will do real work.",
			  "displayTime": 243.946
			},
			{
			  "text": "And once again, I can do that with a new keyword.",
			  "displayTime": 245.946
			},
			{
			  "text": "So I could say this list of floats",
			  "displayTime": 248.946
			},
			{
			  "text": "should be initialized and start off",
			  "displayTime": 250.946
			},
			{
			  "text": "with a new object that is constructed for me,",
			  "displayTime": 253.946
			},
			{
			  "text": "because now the C# compiler can see that this field",
			  "displayTime": 255.946
			},
			{
			  "text": "is assigned to.",
			  "displayTime": 257.946
			},
			{
			  "text": "And now I'm pretty sure that this program should work,",
			  "displayTime": 259.946
			},
			{
			  "text": "and I'm so sure that I want to come back to Program.cs",
			  "displayTime": 261.946
			},
			{
			  "text": "and actually add another grade here.",
			  "displayTime": 263.946
			},
			{
			  "text": "Let me add the grade,",
			  "displayTime": 265.946
			},
			{
			  "text": "89.5.",
			  "displayTime": 267.946
			},
			{
			  "text": "And I just want to show you another interesting",
			  "displayTime": 270.946
			},
			{
			  "text": "error message.",
			  "displayTime": 272.946
			},
			{
			  "text": "If I hover over this error, I can see that",
			  "displayTime": 273.946
			},
			{
			  "text": "the argument I'm passing to AddGrade is getting an error,",
			  "displayTime": 276.946
			},
			{
			  "text": "cannot convert from double to float.",
			  "displayTime": 279.946
			},
			{
			  "text": "So when we defined AddGrade,",
			  "displayTime": 281.946
			},
			{
			  "text": "we said that when someone invokes this method,",
			  "displayTime": 283.946
			},
			{
			  "text": "they need to pass us a number that is typed as float,",
			  "displayTime": 286.946
			},
			{
			  "text": "which is a single precision floating point number.",
			  "displayTime": 290.946
			},
			{
			  "text": "But when I use this literal value here, 89.5,",
			  "displayTime": 292.946
			},
			{
			  "text": "by default, that's going to be a double precision",
			  "displayTime": 295.946
			},
			{
			  "text": "floating point number, a double.",
			  "displayTime": 298.946
			},
			{
			  "text": "And the C# compiler, it's very picky about types.",
			  "displayTime": 300.946
			},
			{
			  "text": "Now 91, this integer value,",
			  "displayTime": 302.946
			},
			{
			  "text": "the C# compiler will allow me to pass that value",
			  "displayTime": 305.946
			},
			{
			  "text": "into AddGrade, because it will implicitly convert that value",
			  "displayTime": 308.946
			},
			{
			  "text": "into a float.",
			  "displayTime": 312.946
			},
			{
			  "text": "Any integer value will convert to a float,",
			  "displayTime": 313.946
			},
			{
			  "text": "but the C# compiler is not going to do that",
			  "displayTime": 315.946
			},
			{
			  "text": "with the double precision floating point number.",
			  "displayTime": 317.946
			},
			{
			  "text": "It's not going to try to place it or convert it",
			  "displayTime": 319.946
			},
			{
			  "text": "into a single precision floating point number",
			  "displayTime": 321.946
			},
			{
			  "text": "because you might lose some information.",
			  "displayTime": 323.946
			},
			{
			  "text": "This is just like if I declared a variable of type double",
			  "displayTime": 325.946
			},
			{
			  "text": "and I initialized it with a value 91.5,",
			  "displayTime": 330.946
			},
			{
			  "text": "that's going to work just fine.",
			  "displayTime": 333.946
			},
			{
			  "text": "But if I change this type to float,",
			  "displayTime": 334.946
			},
			{
			  "text": "that will be an error.",
			  "displayTime": 336.946
			},
			{
			  "text": "What I need to do is I need to tell the C# compiler",
			  "displayTime": 338.946
			},
			{
			  "text": "that this value should be treated",
			  "displayTime": 340.946
			},
			{
			  "text": "as a floating point number.",
			  "displayTime": 343.946
			},
			{
			  "text": "And the way I can do that is by appending an F",
			  "displayTime": 344.946
			},
			{
			  "text": "at the end of this number.",
			  "displayTime": 347.946
			},
			{
			  "text": "And now that line of code would work,",
			  "displayTime": 349.946
			},
			{
			  "text": "so let me also apply an F here to AddGrade.",
			  "displayTime": 351.946
			},
			{
			  "text": "And now let's set a breakpoint here",
			  "displayTime": 354.946
			},
			{
			  "text": "at the bottom of the program.",
			  "displayTime": 356.946
			},
			{
			  "text": "I'll press F5 to run with the debugger,",
			  "displayTime": 357.946
			},
			{
			  "text": "and I just want to inspect my variable book",
			  "displayTime": 359.946
			},
			{
			  "text": "to see what's inside.",
			  "displayTime": 362.946
			},
			{
			  "text": "I can see that, that grades field",
			  "displayTime": 363.946
			},
			{
			  "text": "has two items inside of it",
			  "displayTime": 365.946
			},
			{
			  "text": "and that the grades are 91 and 89.5.",
			  "displayTime": 367.946
			},
			{
			  "text": "So now I know that the GradeBook",
			  "displayTime": 369.946
			},
			{
			  "text": "is successfully storing my grades.",
			  "displayTime": 371.946
			},
			{
			  "text": "And that's good, we have a working GradeBook.",
			  "displayTime": 374.946
			},
			{
			  "text": "Now let's go back and talk about the construction",
			  "displayTime": 376.946
			},
			{
			  "text": "of this GradeBook just a bit.",
			  "displayTime": 378.946
			}
		  ]
		},
		{
		  "title": "Constructors",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m2&clip=3&mode=live",
		  "segments": [
			{
			  "text": "When I use the new keyword and then the name of the class",
			  "displayTime": 0.688
			},
			{
			  "text": "with parentheses, this is instantiating an instance",
			  "displayTime": 2.688
			},
			{
			  "text": "of that class, it's creating an object.",
			  "displayTime": 6.688
			},
			{
			  "text": "And instantiating a class will invoke a special method",
			  "displayTime": 8.688
			},
			{
			  "text": "we call a constructor, because a constructor",
			  "displayTime": 11.688
			},
			{
			  "text": "helps construct an object.",
			  "displayTime": 13.688
			},
			{
			  "text": "Every class will have a default constructor",
			  "displayTime": 15.688
			},
			{
			  "text": "that exists implicitly, unless I do something special.",
			  "displayTime": 17.688
			},
			{
			  "text": "And this is why I can create an instance of GradeBook",
			  "displayTime": 20.688
			},
			{
			  "text": "and use it even though I don't have a constructor",
			  "displayTime": 23.688
			},
			{
			  "text": "explicitly defined in that class.",
			  "displayTime": 25.688
			},
			{
			  "text": "If I do want to define my own constructor,",
			  "displayTime": 27.688
			},
			{
			  "text": "it's very much like defining a method.",
			  "displayTime": 29.688
			},
			{
			  "text": "I'll use the public keyword and then the name of the class",
			  "displayTime": 31.688
			},
			{
			  "text": "followed by parentheses.",
			  "displayTime": 34.688
			},
			{
			  "text": "Just like a method, I had those parentheses",
			  "displayTime": 36.688
			},
			{
			  "text": "at the end of my curly braces to denote the start",
			  "displayTime": 38.688
			},
			{
			  "text": "and the end of the method.",
			  "displayTime": 40.688
			},
			{
			  "text": "There are many scenarios where you will want to write",
			  "displayTime": 42.688
			},
			{
			  "text": "your own constructor for a class,",
			  "displayTime": 44.688
			},
			{
			  "text": "because writing your own constructor gives you control",
			  "displayTime": 46.688
			},
			{
			  "text": "over the initialization of an object.",
			  "displayTime": 48.688
			},
			{
			  "text": "You can initialize fields and data for the object.",
			  "displayTime": 51.688
			},
			{
			  "text": "You can set default values.",
			  "displayTime": 53.688
			},
			{
			  "text": "You can create other objects that your object uses.",
			  "displayTime": 55.688
			},
			{
			  "text": "And you can even have multiple constructors defined,",
			  "displayTime": 57.688
			},
			{
			  "text": "but we'll look at that later in the course.",
			  "displayTime": 60.688
			},
			{
			  "text": "For now, let's look at implementing a constructor",
			  "displayTime": 62.688
			},
			{
			  "text": "for our GradeBook.",
			  "displayTime": 64.688
			},
			{
			  "text": "Currently in my program, when I say new GradeBook,",
			  "displayTime": 66.688
			},
			{
			  "text": "we will be using an implicit constructor",
			  "displayTime": 69.688
			},
			{
			  "text": "that is defined for us, because we never wrote",
			  "displayTime": 71.688
			},
			{
			  "text": "an explicit constructor for GradeBook.",
			  "displayTime": 73.688
			},
			{
			  "text": "But now let's take control over the initialization",
			  "displayTime": 75.688
			},
			{
			  "text": "of a GradeBook, and write a constructor.",
			  "displayTime": 78.688
			},
			{
			  "text": "There's a very easy way to do this in Visual Studio.",
			  "displayTime": 80.688
			},
			{
			  "text": "If I just typed ctor,",
			  "displayTime": 83.688
			},
			{
			  "text": "those characters are recognized as one of the code snippets",
			  "displayTime": 86.688
			},
			{
			  "text": "in Visual Studio.",
			  "displayTime": 89.688
			},
			{
			  "text": "What a code snippet allows you to do is just type",
			  "displayTime": 90.688
			},
			{
			  "text": "some short sequence of characters, like ctor,",
			  "displayTime": 93.688
			},
			{
			  "text": "and this is the code snippet for a constructor.",
			  "displayTime": 96.688
			},
			{
			  "text": "And if I press tab twice,",
			  "displayTime": 98.688
			},
			{
			  "text": "Visual Studio will do a little bit of code generation",
			  "displayTime": 101.688
			},
			{
			  "text": "and write the constructor for me.",
			  "displayTime": 104.688
			},
			{
			  "text": "I already have the public keyword in place,",
			  "displayTime": 106.688
			},
			{
			  "text": "and a constructor is a method definition",
			  "displayTime": 108.688
			},
			{
			  "text": "where the method name is the same as the class.",
			  "displayTime": 110.688
			},
			{
			  "text": "Like every method, it has some parentheses",
			  "displayTime": 112.688
			},
			{
			  "text": "where I can take parameters, and then the opening",
			  "displayTime": 114.688
			},
			{
			  "text": "and closing curly braces.",
			  "displayTime": 116.688
			},
			{
			  "text": "There's some other snippets that we'll see",
			  "displayTime": 118.688
			},
			{
			  "text": "throughout this course, but ctor,",
			  "displayTime": 120.688
			},
			{
			  "text": "that's one I use every day.",
			  "displayTime": 121.688
			},
			{
			  "text": "It's short for constructor, that's easy to remember.",
			  "displayTime": 122.688
			},
			{
			  "text": "And now it's inside of this constructor",
			  "displayTime": 125.688
			},
			{
			  "text": "where I can take explicit control over the initialization",
			  "displayTime": 127.688
			},
			{
			  "text": "of my object.",
			  "displayTime": 129.688
			},
			{
			  "text": "It turns out we're already doing some initialization",
			  "displayTime": 131.688
			},
			{
			  "text": "during the construction of a GradeBook,",
			  "displayTime": 133.688
			},
			{
			  "text": "because when we defined this field,",
			  "displayTime": 135.688
			},
			{
			  "text": "this field being grades, I'm using what's known",
			  "displayTime": 137.688
			},
			{
			  "text": "as a field initializer syntax here.",
			  "displayTime": 139.688
			},
			{
			  "text": "I'm saying I want a field named grades,",
			  "displayTime": 142.688
			},
			{
			  "text": "and I want to immediately initialize it to a new list",
			  "displayTime": 144.688
			},
			{
			  "text": "for each GradeBook that is constructed.",
			  "displayTime": 146.688
			},
			{
			  "text": "So each GradeBook maintains its own list of grades.",
			  "displayTime": 148.688
			},
			{
			  "text": "Instead of using field initializer syntax,",
			  "displayTime": 153.688
			},
			{
			  "text": "I could cut this line of code out of here",
			  "displayTime": 155.688
			},
			{
			  "text": "and inside of the constructor, say",
			  "displayTime": 158.688
			},
			{
			  "text": "grade equals a new list of float.",
			  "displayTime": 159.688
			},
			{
			  "text": "For the most part, it doesn't matter if you use",
			  "displayTime": 163.688
			},
			{
			  "text": "that field initializer syntax or if you initialize",
			  "displayTime": 165.688
			},
			{
			  "text": "a field and constructor.",
			  "displayTime": 168.688
			},
			{
			  "text": "There's no obvious differences in terms of performance.",
			  "displayTime": 170.688
			},
			{
			  "text": "It really comes down to the syntax",
			  "displayTime": 172.688
			},
			{
			  "text": "that you're most comfortable with,",
			  "displayTime": 174.688
			},
			{
			  "text": "and also some special circumstances.",
			  "displayTime": 175.688
			},
			{
			  "text": "For example, in a constructor, since it is a method,",
			  "displayTime": 177.688
			},
			{
			  "text": "I can take some parameters here like maybe I want",
			  "displayTime": 180.688
			},
			{
			  "text": "the maximum grade or the maximum number of items",
			  "displayTime": 182.688
			},
			{
			  "text": "that I'm going to store in a grade,",
			  "displayTime": 185.688
			},
			{
			  "text": "and then I need that parameter to pass along",
			  "displayTime": 187.688
			},
			{
			  "text": "to other constructors.",
			  "displayTime": 189.688
			},
			{
			  "text": "That's a case where I probably wouldn't use",
			  "displayTime": 190.688
			},
			{
			  "text": "field initializer syntax.",
			  "displayTime": 192.688
			},
			{
			  "text": "I would use explicit initialization inside of a constructor.",
			  "displayTime": 194.688
			},
			{
			  "text": "But for right now, let's keep what is known",
			  "displayTime": 198.688
			},
			{
			  "text": "as a default constructor.",
			  "displayTime": 200.688
			},
			{
			  "text": "A default constructor is a constructor",
			  "displayTime": 201.688
			},
			{
			  "text": "that doesn't take any parameters.",
			  "displayTime": 203.688
			},
			{
			  "text": "So when someone initializes a GradeBook",
			  "displayTime": 205.688
			},
			{
			  "text": "and creates an instance using the new keyword,",
			  "displayTime": 207.688
			},
			{
			  "text": "they don't have to pass any parameters that arrive here",
			  "displayTime": 209.688
			},
			{
			  "text": "to the constructor method.",
			  "displayTime": 212.688
			},
			{
			  "text": "Just like I'm using the default constructor",
			  "displayTime": 214.688
			},
			{
			  "text": "for a list of float, I'm using the new keyword",
			  "displayTime": 216.688
			},
			{
			  "text": "and invoking that constructor,",
			  "displayTime": 219.688
			},
			{
			  "text": "and I don't pass any parameters along.",
			  "displayTime": 220.688
			},
			{
			  "text": "And the important concept to take away here",
			  "displayTime": 222.688
			},
			{
			  "text": "is that GradeBook is a class, it's a blueprint",
			  "displayTime": 224.688
			},
			{
			  "text": "for creating objects.",
			  "displayTime": 227.688
			},
			{
			  "text": "It's a cookie-cutter.",
			  "displayTime": 228.688
			},
			{
			  "text": "In order to get an object that is an instance",
			  "displayTime": 229.688
			},
			{
			  "text": "of this GradeBook class, something that I can use",
			  "displayTime": 231.688
			},
			{
			  "text": "and something that I can actually add grades to,",
			  "displayTime": 233.688
			},
			{
			  "text": "I need to create an object.",
			  "displayTime": 236.688
			},
			{
			  "text": "And I do that using the new keyword.",
			  "displayTime": 237.688
			},
			{
			  "text": "I want a new GradeBook or a new list of float.",
			  "displayTime": 239.688
			},
			{
			  "text": "And now that we know a little bit more about constructors,",
			  "displayTime": 242.188
			},
			{
			  "text": "let's really drill into the details about the differences",
			  "displayTime": 244.688
			},
			{
			  "text": "between objects and variables.",
			  "displayTime": 247.688
			}
		  ]
		},
		{
		  "title": "Classes and Variables",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m2&clip=4&mode=live",
		  "segments": [
			{
			  "text": "One topic I want to make clear before removal",
			  "displayTime": 0.752
			},
			{
			  "text": "is the distinction between a class and a variable.",
			  "displayTime": 3.021
			},
			{
			  "text": "A class is a blueprint for creating objects.",
			  "displayTime": 6.021
			},
			{
			  "text": "I can use the new keyword with the GradeBook class,",
			  "displayTime": 9.021
			},
			{
			  "text": "and that creates a GradeBook object for me in memory.",
			  "displayTime": 12.021
			},
			{
			  "text": "And that GradeBook and hold a list of grades.",
			  "displayTime": 15.021
			},
			{
			  "text": "I can also use a class to define the type of a variable,",
			  "displayTime": 17.021
			},
			{
			  "text": "because in C#, every variable needs a type,",
			  "displayTime": 21.021
			},
			{
			  "text": "and a class defines a particular type.",
			  "displayTime": 23.021
			},
			{
			  "text": "We'll see other categories of types in this course.",
			  "displayTime": 25.021
			},
			{
			  "text": "A class is just one way to create a type.",
			  "displayTime": 28.021
			},
			{
			  "text": "But when I use a class to type a variable,",
			  "displayTime": 30.021
			},
			{
			  "text": "it's because I want to remember some specific object",
			  "displayTime": 32.021
			},
			{
			  "text": "when I'm inside of a method.",
			  "displayTime": 35.021
			},
			{
			  "text": "I want to remember the GradeBook so that I can add grades",
			  "displayTime": 37.021
			},
			{
			  "text": "to that specific object and eventually ask it",
			  "displayTime": 40.021
			},
			{
			  "text": "to compute some statistical results.",
			  "displayTime": 42.021
			},
			{
			  "text": "You can think of the variable as a storage location",
			  "displayTime": 44.021
			},
			{
			  "text": "that points to a specific object.",
			  "displayTime": 47.021
			},
			{
			  "text": "Let's make that concept a little more concrete",
			  "displayTime": 49.021
			},
			{
			  "text": "using the debugger.",
			  "displayTime": 52.021
			},
			{
			  "text": "Inside the application, I've created a new GradeBook",
			  "displayTime": 54.021
			},
			{
			  "text": "and I'm holding on to that book",
			  "displayTime": 58.021
			},
			{
			  "text": "through a variable named book.",
			  "displayTime": 59.021
			},
			{
			  "text": "But what would happen after I add these two grades",
			  "displayTime": 61.021
			},
			{
			  "text": "to that GradeBook if I reassign that variable",
			  "displayTime": 63.021
			},
			{
			  "text": "and said book is now equal to new GradeBook?",
			  "displayTime": 66.021
			},
			{
			  "text": "And to make things interesting, let's add a grade",
			  "displayTime": 69.021
			},
			{
			  "text": "to that GradeBook, something different than we have.",
			  "displayTime": 72.021
			},
			{
			  "text": "So just a 75.",
			  "displayTime": 75.021
			},
			{
			  "text": "And now I'll press F10 to start the debugger.",
			  "displayTime": 76.021
			},
			{
			  "text": "F10 will step through each line of code.",
			  "displayTime": 79.021
			},
			{
			  "text": "I want to step until I get to the bottom of the program,",
			  "displayTime": 82.021
			},
			{
			  "text": "and I want to investigate this book variable.",
			  "displayTime": 85.021
			},
			{
			  "text": "Now the question is, does this book variable",
			  "displayTime": 87.021
			},
			{
			  "text": "point to a GradeBook that holds two grades,",
			  "displayTime": 89.021
			},
			{
			  "text": "the 91 and the 89.5?",
			  "displayTime": 91.021
			},
			{
			  "text": "Or does it hold one grade, the 75?",
			  "displayTime": 94.021
			},
			{
			  "text": "Or does it hold three grades?",
			  "displayTime": 96.021
			},
			{
			  "text": "And the answer is, if I hover over book,",
			  "displayTime": 98.021
			},
			{
			  "text": "I can see there's one grade inside, it is the 75.",
			  "displayTime": 100.021
			},
			{
			  "text": "And that's because this line of code I added,",
			  "displayTime": 104.021
			},
			{
			  "text": "book = new GradeBook,",
			  "displayTime": 106.021
			},
			{
			  "text": "that's creating a brand-new instance of a GradeBook,",
			  "displayTime": 108.021
			},
			{
			  "text": "a second instance.",
			  "displayTime": 110.021
			},
			{
			  "text": "And this new GradeBook will start with an empty",
			  "displayTime": 112.021
			},
			{
			  "text": "list of grades until I add that first grade, the 75.",
			  "displayTime": 114.021
			},
			{
			  "text": "And that is now the object that this book variable refers to",
			  "displayTime": 117.021
			},
			{
			  "text": "throughout the rest of the method.",
			  "displayTime": 120.021
			},
			{
			  "text": "And the lesson is that when I declare a variable",
			  "displayTime": 122.021
			},
			{
			  "text": "of type GradeBook, that variable isn't stuck",
			  "displayTime": 124.021
			},
			{
			  "text": "referring to a single object throughout its lifetime.",
			  "displayTime": 127.021
			},
			{
			  "text": "That's why it is a variable.",
			  "displayTime": 129.021
			},
			{
			  "text": "I can take the variable and point it",
			  "displayTime": 131.021
			},
			{
			  "text": "to any GradeBook object that I have available,",
			  "displayTime": 133.021
			},
			{
			  "text": "and then I can invoke methods and do other",
			  "displayTime": 135.021
			},
			{
			  "text": "interesting things with that variable.",
			  "displayTime": 137.021
			},
			{
			  "text": "And in this program now, I've created two",
			  "displayTime": 138.021
			},
			{
			  "text": "separate GradeBook instances.",
			  "displayTime": 141.021
			},
			{
			  "text": "But by the time I reach this line of code,",
			  "displayTime": 143.021
			},
			{
			  "text": "I only have access to the second instance.",
			  "displayTime": 145.021
			},
			{
			  "text": "I don't have any variables that refer to that first",
			  "displayTime": 148.021
			},
			{
			  "text": "GradeBook that I created.",
			  "displayTime": 150.021
			},
			{
			  "text": "There's no way to get back to that, and it's become garbage.",
			  "displayTime": 151.021
			},
			{
			  "text": "That's what we call objects that are no longer being used",
			  "displayTime": 155.021
			},
			{
			  "text": "by the program, and the Common Language Runtime",
			  "displayTime": 157.021
			},
			{
			  "text": "is smart enough to periodically scan through memory",
			  "displayTime": 160.021
			},
			{
			  "text": "and figure out which objects are garbage.",
			  "displayTime": 162.021
			},
			{
			  "text": "The CLR can then clean those objects up and free up memory",
			  "displayTime": 164.021
			},
			{
			  "text": "so that we have more space for other objects.",
			  "displayTime": 167.021
			},
			{
			  "text": "This is just like cleaning up a hard drive",
			  "displayTime": 170.021
			},
			{
			  "text": "by removing files that you no longer need.",
			  "displayTime": 172.021
			},
			{
			  "text": "You remove files and make space for new files",
			  "displayTime": 174.021
			},
			{
			  "text": "that you're going to use.",
			  "displayTime": 176.021
			},
			{
			  "text": "But what happens if I want access",
			  "displayTime": 177.021
			},
			{
			  "text": "to two different GradeBooks?",
			  "displayTime": 179.021
			},
			{
			  "text": "Well, that's when I would need two different variables.",
			  "displayTime": 181.021
			},
			{
			  "text": "So let's call this variable book2.",
			  "displayTime": 184.021
			},
			{
			  "text": "And since this is a new variable, I'm going to need",
			  "displayTime": 187.021
			},
			{
			  "text": "to properly declare that variable and provide a type.",
			  "displayTime": 190.021
			},
			{
			  "text": "So book2 is a variable of type GradeBook.",
			  "displayTime": 193.021
			},
			{
			  "text": "And now let me right click on the bottom of this program",
			  "displayTime": 196.021
			},
			{
			  "text": "and say run to cursor.",
			  "displayTime": 199.021
			},
			{
			  "text": "That's another easy way to get the debugger",
			  "displayTime": 200.021
			},
			{
			  "text": "just to run to a specific point in your code.",
			  "displayTime": 202.021
			},
			{
			  "text": "And now I can investigate book2",
			  "displayTime": 205.021
			},
			{
			  "text": "and see that it has my one grade, the 75.",
			  "displayTime": 207.021
			},
			{
			  "text": "But I still have access to the first GradeBook",
			  "displayTime": 210.021
			},
			{
			  "text": "through the book variable, and that's still holding on",
			  "displayTime": 212.021
			},
			{
			  "text": "to the two grades that I put inside of there.",
			  "displayTime": 214.021
			},
			{
			  "text": "And now let's try one more experiment.",
			  "displayTime": 216.021
			},
			{
			  "text": "Instead of staying book2 equals a new GradeBook,",
			  "displayTime": 219.021
			},
			{
			  "text": "let's say book2 = book.",
			  "displayTime": 222.021
			},
			{
			  "text": "And the right question to ask would be to figure out",
			  "displayTime": 226.021
			},
			{
			  "text": "if this is making a copy of the original GradeBook.",
			  "displayTime": 228.021
			},
			{
			  "text": "In other words, will I now have two objects",
			  "displayTime": 231.021
			},
			{
			  "text": "of type GradeBook, one with two grades in it?",
			  "displayTime": 234.021
			},
			{
			  "text": "And will book2, will that GradeBook have three grades in it",
			  "displayTime": 236.021
			},
			{
			  "text": "or one grade in it?",
			  "displayTime": 239.021
			},
			{
			  "text": "I'll show you the answer in the next clip.",
			  "displayTime": 240.021
			}
		  ]
		},
		{
		  "title": "Reference Types",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m2&clip=5&mode=live",
		  "segments": [
			{
			  "text": "When we define a class in C#,",
			  "displayTime": 0.5
			},
			{
			  "text": "we are creating something that is called a reference type.",
			  "displayTime": 2.316
			},
			{
			  "text": "We will explore another category of types",
			  "displayTime": 5.316
			},
			{
			  "text": "later in the course, but reference types",
			  "displayTime": 7.316
			},
			{
			  "text": "are important to understand in C#",
			  "displayTime": 9.316
			},
			{
			  "text": "because when we have a variable that is typed",
			  "displayTime": 11.316
			},
			{
			  "text": "as a class like GradeBook, which is a reference type,",
			  "displayTime": 13.316
			},
			{
			  "text": "the variable gives us a place to remember the GradeBook.",
			  "displayTime": 16.316
			},
			{
			  "text": "But the variable does not hold the GradeBook itself.",
			  "displayTime": 19.316
			},
			{
			  "text": "The GradeBook is somewhere else in memory,",
			  "displayTime": 22.316
			},
			{
			  "text": "and the variable holds a pointer to that object in memory.",
			  "displayTime": 24.316
			},
			{
			  "text": "The variable literally contains a memory address.",
			  "displayTime": 27.316
			},
			{
			  "text": "So imagine the table on the right-hand side of the screen",
			  "displayTime": 30.316
			},
			{
			  "text": "representing a section of memory on your computer,",
			  "displayTime": 33.316
			},
			{
			  "text": "and each memory location has an address like",
			  "displayTime": 35.316
			},
			{
			  "text": "six, seven, eight, nine, 10.",
			  "displayTime": 38.316
			},
			{
			  "text": "There are billions of these memory cells.",
			  "displayTime": 40.316
			},
			{
			  "text": "Let's say when we create the GradeBook object,",
			  "displayTime": 41.316
			},
			{
			  "text": "the runtime placed the start of the object",
			  "displayTime": 44.316
			},
			{
			  "text": "at location eight in our computer.",
			  "displayTime": 46.316
			},
			{
			  "text": "That means the book1 variable, you can think of it",
			  "displayTime": 48.316
			},
			{
			  "text": "as holding the value eight, which indicates where",
			  "displayTime": 50.316
			},
			{
			  "text": "the GradeBook lives inside of those billions",
			  "displayTime": 52.316
			},
			{
			  "text": "of memory addresses in the computer.",
			  "displayTime": 55.316
			},
			{
			  "text": "It's like when someone gives you their business card,",
			  "displayTime": 57.316
			},
			{
			  "text": "you don't hold the other person, you hold a pointer",
			  "displayTime": 59.316
			},
			{
			  "text": "or an address and something that can lead you",
			  "displayTime": 61.316
			},
			{
			  "text": "to that person when you need to talk to them",
			  "displayTime": 63.316
			},
			{
			  "text": "or you need them to do something for you.",
			  "displayTime": 65.316
			},
			{
			  "text": "A variable for a reference type holds a pointer.",
			  "displayTime": 67.316
			},
			{
			  "text": "And when I do something like invoke a method",
			  "displayTime": 69.316
			},
			{
			  "text": "with .AddGrade, the runtime takes care",
			  "displayTime": 71.316
			},
			{
			  "text": "of following that pointer for me",
			  "displayTime": 74.316
			},
			{
			  "text": "and invoking the correct method on the proper object.",
			  "displayTime": 76.316
			},
			{
			  "text": "One important implication of reference types",
			  "displayTime": 78.316
			},
			{
			  "text": "is that I can have multiple variables",
			  "displayTime": 81.316
			},
			{
			  "text": "all pointing to the same object.",
			  "displayTime": 83.316
			},
			{
			  "text": "If I use a line of code like book2 = book1,",
			  "displayTime": 85.316
			},
			{
			  "text": "then the runtime will copy the value of the book1 variable",
			  "displayTime": 88.316
			},
			{
			  "text": "into book2, which means the runtime will copy",
			  "displayTime": 91.316
			},
			{
			  "text": "the memory address, eight, into book2.",
			  "displayTime": 94.316
			},
			{
			  "text": "And now I can use both book1 and book2",
			  "displayTime": 97.316
			},
			{
			  "text": "to interact with the exact same GradeBook object.",
			  "displayTime": 99.316
			},
			{
			  "text": "Let's take a look at this scenario with the debugger.",
			  "displayTime": 103.316
			},
			{
			  "text": "At the end of the last clip, I included this line of code",
			  "displayTime": 106.316
			},
			{
			  "text": "in the project that says book2 = book.",
			  "displayTime": 108.316
			},
			{
			  "text": "And the way to think about this is that the value",
			  "displayTime": 111.316
			},
			{
			  "text": "that is inside of book is copied and placed into book2.",
			  "displayTime": 113.316
			},
			{
			  "text": "But you must always remember with C#,",
			  "displayTime": 116.316
			},
			{
			  "text": "that the value inside of book is not a GradeBook object.",
			  "displayTime": 118.316
			},
			{
			  "text": "It's just a pointer to a GradeBook object.",
			  "displayTime": 122.316
			},
			{
			  "text": "So what I'm doing is I'm copying that pointer",
			  "displayTime": 124.316
			},
			{
			  "text": "into another variable, and both book and book2",
			  "displayTime": 126.316
			},
			{
			  "text": "should now be referencing the same GradeBook.",
			  "displayTime": 130.316
			},
			{
			  "text": "I can verify that by right clicking and saying",
			  "displayTime": 132.316
			},
			{
			  "text": "run to cursor here at the bottom of the main method.",
			  "displayTime": 135.316
			},
			{
			  "text": "And if we look inside of book, we will see it has",
			  "displayTime": 138.316
			},
			{
			  "text": "three grades, 91, 89.5, and then the 75 was added through",
			  "displayTime": 140.316
			},
			{
			  "text": "the book2 variable, because book2 points",
			  "displayTime": 145.316
			},
			{
			  "text": "to the exact same GradeBook.",
			  "displayTime": 148.316
			},
			{
			  "text": "Now one thing that might have occurred to you",
			  "displayTime": 150.316
			},
			{
			  "text": "as we've been using the debugger is:  why can the debugger",
			  "displayTime": 152.316
			},
			{
			  "text": "see the grades that are inside of a GradeBook,",
			  "displayTime": 154.316
			},
			{
			  "text": "but I cannot see those same grades if I stop debugging",
			  "displayTime": 157.316
			},
			{
			  "text": "and try to access those grades through",
			  "displayTime": 161.316
			},
			{
			  "text": "one of these variables?",
			  "displayTime": 164.316
			},
			{
			  "text": "For instance, if I say book2.grades,",
			  "displayTime": 166.316
			},
			{
			  "text": "this isn't available in the IntelliSense list.",
			  "displayTime": 168.316
			},
			{
			  "text": "The only thing I can get to is really AddGrade",
			  "displayTime": 171.316
			},
			{
			  "text": "on that book2 variable; and the same goes",
			  "displayTime": 173.316
			},
			{
			  "text": "for the book variable.",
			  "displayTime": 175.316
			},
			{
			  "text": "So what is it that makes AddGrade available to me",
			  "displayTime": 177.316
			},
			{
			  "text": "but not the grades field that is the list of float",
			  "displayTime": 179.316
			},
			{
			  "text": "that is inside of a GradeBook?",
			  "displayTime": 182.316
			},
			{
			  "text": "Let's talk about that topic next.",
			  "displayTime": 183.816
			}
		  ]
		},
		{
		  "title": "Access Modifiers",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m2&clip=6&mode=live",
		  "segments": [
			{
			  "text": "I'd like you to be familiar with all of the keywords",
			  "displayTime": 1.758
			},
			{
			  "text": "in the program that we've been writing",
			  "displayTime": 4.258
			},
			{
			  "text": "before we leave this module, and we've already talked about",
			  "displayTime": 6.258
			},
			{
			  "text": "keywords like namespace and class.",
			  "displayTime": 8.581
			},
			{
			  "text": "But one keyword we haven't talked about",
			  "displayTime": 10.581
			},
			{
			  "text": "is the public keyword that appears in a few places.",
			  "displayTime": 12.581
			},
			{
			  "text": "C# was designed as an object-oriented language,",
			  "displayTime": 15.581
			},
			{
			  "text": "meaning it has a built-in syntax to make it easy to define",
			  "displayTime": 18.581
			},
			{
			  "text": "and work with objects, like this GradeBook.",
			  "displayTime": 21.581
			},
			{
			  "text": "The class we wrote defines a blueprint for creating objects",
			  "displayTime": 24.581
			},
			{
			  "text": "of type GradeBook.",
			  "displayTime": 27.581
			},
			{
			  "text": "And one fundamental pillar of object-oriented programming",
			  "displayTime": 28.581
			},
			{
			  "text": "is encapsulation.",
			  "displayTime": 31.581
			},
			{
			  "text": "We use objects that encapsulate the behavior",
			  "displayTime": 33.581
			},
			{
			  "text": "in the data that we need the software to perform.",
			  "displayTime": 35.581
			},
			{
			  "text": "Encapsulation means we are enclosing or hiding",
			  "displayTime": 37.581
			},
			{
			  "text": "certain details of how the software works.",
			  "displayTime": 40.581
			},
			{
			  "text": "Since some details will be hidden from me",
			  "displayTime": 43.581
			},
			{
			  "text": "when I use an object, I don't need to worry about",
			  "displayTime": 45.581
			},
			{
			  "text": "those details, and I can be a little more productive.",
			  "displayTime": 47.581
			},
			{
			  "text": "Software has a tendency to become very complex,",
			  "displayTime": 49.581
			},
			{
			  "text": "and some applications are so complex,",
			  "displayTime": 52.581
			},
			{
			  "text": "it's impossible for one person to know all of the details",
			  "displayTime": 54.581
			},
			{
			  "text": "inside of every class.",
			  "displayTime": 57.581
			},
			{
			  "text": "So encapsulation plays an extremely important role",
			  "displayTime": 59.581
			},
			{
			  "text": "in software because I can work with objects",
			  "displayTime": 61.581
			},
			{
			  "text": "that other people have written without knowing the details",
			  "displayTime": 63.581
			},
			{
			  "text": "of how those objects are implemented.",
			  "displayTime": 66.581
			},
			{
			  "text": "Even a simple class like GradeBook,",
			  "displayTime": 68.581
			},
			{
			  "text": "which has an AddGrade method,",
			  "displayTime": 70.581
			},
			{
			  "text": "that encapsulates how the GradeBook is actually",
			  "displayTime": 72.581
			},
			{
			  "text": "storing a grade.",
			  "displayTime": 74.581
			},
			{
			  "text": "When I use a GradeBook object, I don't care if the grade",
			  "displayTime": 75.581
			},
			{
			  "text": "is stored in memory or on disk or in a database",
			  "displayTime": 77.581
			},
			{
			  "text": "in the cloud, the GradeBook actually stores",
			  "displayTime": 80.581
			},
			{
			  "text": "the grades in a list.",
			  "displayTime": 82.581
			},
			{
			  "text": "And as I pointed out in the last clip,",
			  "displayTime": 83.581
			},
			{
			  "text": "I can access this AddGrade method from code",
			  "displayTime": 85.581
			},
			{
			  "text": "inside of my program, but I cannot access the list of grades",
			  "displayTime": 88.581
			},
			{
			  "text": "in code that is outside of this GradeBook class.",
			  "displayTime": 91.581
			},
			{
			  "text": "That's because of the keyword public that appears in front",
			  "displayTime": 94.581
			},
			{
			  "text": "of the AddGrade method.",
			  "displayTime": 97.581
			},
			{
			  "text": "Public is what we call an access modifier.",
			  "displayTime": 98.581
			},
			{
			  "text": "Access modifiers are keywords in C#,",
			  "displayTime": 101.581
			},
			{
			  "text": "and public is one modifier.",
			  "displayTime": 103.581
			},
			{
			  "text": "Another access modifier is private.",
			  "displayTime": 105.581
			},
			{
			  "text": "As the names imply, public makes a class member",
			  "displayTime": 108.581
			},
			{
			  "text": "publicly available so that someone can reach and invoke",
			  "displayTime": 112.581
			},
			{
			  "text": "a public member like AddGrade from outside of this class.",
			  "displayTime": 115.581
			},
			{
			  "text": "But if I don't explicitly specify the access modifier",
			  "displayTime": 118.581
			},
			{
			  "text": "for a member of the class, the default is to make",
			  "displayTime": 121.581
			},
			{
			  "text": "the member private.",
			  "displayTime": 124.581
			},
			{
			  "text": "And that means the member is only usable from code",
			  "displayTime": 125.581
			},
			{
			  "text": "inside of the same class.",
			  "displayTime": 128.581
			},
			{
			  "text": "This is why inside of AddGrade, I can use the grades list,",
			  "displayTime": 129.581
			},
			{
			  "text": "but no one outside of GradeBook can see this field.",
			  "displayTime": 133.581
			},
			{
			  "text": "We can say that the storage for grades is encapsulated",
			  "displayTime": 136.581
			},
			{
			  "text": "inside of the GradeBook.",
			  "displayTime": 139.581
			},
			{
			  "text": "We'll see how this works in code in just a bit.",
			  "displayTime": 140.581
			},
			{
			  "text": "And I want you to know that public and private",
			  "displayTime": 142.581
			},
			{
			  "text": "are just two of the available access modifiers.",
			  "displayTime": 144.581
			},
			{
			  "text": "We'll cover more modifiers later in the course.",
			  "displayTime": 147.581
			},
			{
			  "text": "For now, let's take a closer look at public and private.",
			  "displayTime": 149.581
			},
			{
			  "text": "These are arguably the two most important access modifiers.",
			  "displayTime": 153.581
			},
			{
			  "text": "Inside of our application, let's see what would happen",
			  "displayTime": 158.581
			},
			{
			  "text": "if I were to add the public keyword to my grades field.",
			  "displayTime": 160.581
			},
			{
			  "text": "Now I will tell you, if you make a member public,",
			  "displayTime": 165.581
			},
			{
			  "text": "you typically want to expose that member",
			  "displayTime": 167.581
			},
			{
			  "text": "with an uppercase letter.",
			  "displayTime": 169.581
			},
			{
			  "text": "I'm not going to do that for now because we're not",
			  "displayTime": 170.581
			},
			{
			  "text": "going to leave the public modifier here,",
			  "displayTime": 172.581
			},
			{
			  "text": "but an uppercase letter would be the convention.",
			  "displayTime": 174.581
			},
			{
			  "text": "Now back in Program.cs, I would have the ability",
			  "displayTime": 177.581
			},
			{
			  "text": "to look at the grades through either the book variable",
			  "displayTime": 180.581
			},
			{
			  "text": "or the book2 variable.",
			  "displayTime": 183.581
			},
			{
			  "text": "And this is usually not what you want to do.",
			  "displayTime": 185.581
			},
			{
			  "text": "You typically want to encapsulate your field",
			  "displayTime": 187.581
			},
			{
			  "text": "and encapsulate your data inside of an object.",
			  "displayTime": 189.581
			},
			{
			  "text": "So I'm going to come back to the GradeBook and remove",
			  "displayTime": 191.581
			},
			{
			  "text": "that public access modifier.",
			  "displayTime": 194.581
			},
			{
			  "text": "And now if we take a look at Program.cs,",
			  "displayTime": 197.581
			},
			{
			  "text": "I can see the red squiggly line because",
			  "displayTime": 199.581
			},
			{
			  "text": "GradeBook.grades is inaccessible",
			  "displayTime": 201.581
			},
			{
			  "text": "due to its protection level.",
			  "displayTime": 204.581
			},
			{
			  "text": "These access modifiers you can think about using them",
			  "displayTime": 205.581
			},
			{
			  "text": "to apply protection and encapsulate certain aspects",
			  "displayTime": 208.581
			},
			{
			  "text": "of your objects.",
			  "displayTime": 211.581
			},
			{
			  "text": "If you're defining a member of a class, like AddGrade,",
			  "displayTime": 213.581
			},
			{
			  "text": "and you do not provide an access modifier,",
			  "displayTime": 216.581
			},
			{
			  "text": "that class member will be a private member.",
			  "displayTime": 218.581
			},
			{
			  "text": "So now, I cannot even access AddGrade",
			  "displayTime": 221.581
			},
			{
			  "text": "outside of the GradeBook.",
			  "displayTime": 223.581
			},
			{
			  "text": "So AddGrade is certainly something that I want to be public.",
			  "displayTime": 225.581
			},
			{
			  "text": "I also want the constructor to be public.",
			  "displayTime": 229.581
			},
			{
			  "text": "Otherwise, the code inside of Program.cs",
			  "displayTime": 231.581
			},
			{
			  "text": "wouldn't be able to instantiate a GradeBook.",
			  "displayTime": 234.581
			},
			{
			  "text": "The constructor would be hidden,",
			  "displayTime": 236.581
			},
			{
			  "text": "and many people like to be very explicit",
			  "displayTime": 238.581
			},
			{
			  "text": "when they define a field and use the private keyword",
			  "displayTime": 240.581
			},
			{
			  "text": "so that when you're looking through the code,",
			  "displayTime": 244.581
			},
			{
			  "text": "it's very obvious that grades is going to be",
			  "displayTime": 245.581
			},
			{
			  "text": "a private member of this class.",
			  "displayTime": 246.581
			},
			{
			  "text": "If I did want to hide AddGrade, I could use",
			  "displayTime": 249.581
			},
			{
			  "text": "the private keyword here also.",
			  "displayTime": 251.581
			},
			{
			  "text": "But this is how I want to design the class.",
			  "displayTime": 253.581
			},
			{
			  "text": "I want the constructor and the AddGrade method",
			  "displayTime": 255.581
			},
			{
			  "text": "to be public numbers.",
			  "displayTime": 257.581
			},
			{
			  "text": "I want the grades, the list of float that stores my data,",
			  "displayTime": 258.581
			},
			{
			  "text": "I want that to be private;",
			  "displayTime": 261.581
			},
			{
			  "text": "and that gives me some encapsulation.",
			  "displayTime": 263.581
			},
			{
			  "text": "So we're just about ready to add some more features",
			  "displayTime": 265.581
			},
			{
			  "text": "to our GradeBook, but before we do let's take a look",
			  "displayTime": 267.581
			},
			{
			  "text": "at one more keyword.",
			  "displayTime": 269.581
			}
		  ]
		},
		{
		  "title": "Statics",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m2&clip=7&mode=live",
		  "segments": [
			{
			  "text": "One more keyword I want to make you aware of in C#",
			  "displayTime": 0.5
			},
			{
			  "text": "is the static keyword.",
			  "displayTime": 2.769
			},
			{
			  "text": "The static keyword is a bit of an advanced topic,",
			  "displayTime": 4.769
			},
			{
			  "text": "which we'll return to in a later module to see",
			  "displayTime": 7.769
			},
			{
			  "text": "in more detail.",
			  "displayTime": 9.769
			},
			{
			  "text": "But I want to give you a basic introduction now",
			  "displayTime": 10.769
			},
			{
			  "text": "to explain some of the code that we've seen already",
			  "displayTime": 12.769
			},
			{
			  "text": "and some of the code that we still need to write.",
			  "displayTime": 14.769
			},
			{
			  "text": "Members of a class can be marked as static,",
			  "displayTime": 16.769
			},
			{
			  "text": "meaning static is a keyword that you can apply",
			  "displayTime": 19.769
			},
			{
			  "text": "to a method or field.",
			  "displayTime": 21.769
			},
			{
			  "text": "The code on the screen, imagine it inside",
			  "displayTime": 23.769
			},
			{
			  "text": "of the GradeBook class.",
			  "displayTime": 25.769
			},
			{
			  "text": "It is defining two publicly available fields,",
			  "displayTime": 26.769
			},
			{
			  "text": "one called minimum grade and one called maximum grade.",
			  "displayTime": 29.769
			},
			{
			  "text": "And it's using that field initializer syntax",
			  "displayTime": 32.769
			},
			{
			  "text": "to initialize these fields to zero and 100, respectively.",
			  "displayTime": 34.769
			},
			{
			  "text": "These fields are static fields,",
			  "displayTime": 38.769
			},
			{
			  "text": "and here's what's important about a static field.",
			  "displayTime": 40.769
			},
			{
			  "text": "A static field or method is something you can access in code",
			  "displayTime": 42.769
			},
			{
			  "text": "without creating an instance of a class.",
			  "displayTime": 46.769
			},
			{
			  "text": "Generally speaking, to do any useful work with a class,",
			  "displayTime": 49.769
			},
			{
			  "text": "you need to use the new keyword to call a constructor",
			  "displayTime": 51.769
			},
			{
			  "text": "and create an instance of the class,",
			  "displayTime": 54.769
			},
			{
			  "text": "but there are classes out there with static members",
			  "displayTime": 56.769
			},
			{
			  "text": "that can do work without creating an instance.",
			  "displayTime": 58.769
			},
			{
			  "text": "Instead, you reference the field or the method",
			  "displayTime": 61.769
			},
			{
			  "text": "using the type name, and then the name of the field",
			  "displayTime": 63.769
			},
			{
			  "text": "or the method.",
			  "displayTime": 66.769
			},
			{
			  "text": "So GradeBook.MaximumGrade is an expression",
			  "displayTime": 67.769
			},
			{
			  "text": "that returned 100.",
			  "displayTime": 70.769
			},
			{
			  "text": "And I don't need an instance of GradeBook to use that.",
			  "displayTime": 71.769
			},
			{
			  "text": "This is how Console.WriteLine works.",
			  "displayTime": 74.769
			},
			{
			  "text": "Console is a class, but I don't need to create",
			  "displayTime": 77.769
			},
			{
			  "text": "an instance of console to use the class.",
			  "displayTime": 80.769
			},
			{
			  "text": "It has static methods that I can reach",
			  "displayTime": 82.769
			},
			{
			  "text": "and invoke, like WriteLines.",
			  "displayTime": 84.769
			},
			{
			  "text": "I just use the name of the class and then a dot.",
			  "displayTime": 86.769
			},
			{
			  "text": "So Console.WriteLine.",
			  "displayTime": 88.769
			},
			{
			  "text": "I will warn you now that you have to be a little bit careful",
			  "displayTime": 91.769
			},
			{
			  "text": "about using statics.",
			  "displayTime": 93.769
			},
			{
			  "text": "They can have some unfortunate and negative impacts",
			  "displayTime": 94.769
			},
			{
			  "text": "on the design of your software.",
			  "displayTime": 96.769
			},
			{
			  "text": "We'll talk about some of the ramifications of static",
			  "displayTime": 98.769
			},
			{
			  "text": "later in the course, but right now I wanted to make you",
			  "displayTime": 100.769
			},
			{
			  "text": "aware of what was happening with that static keyword",
			  "displayTime": 103.769
			},
			{
			  "text": "and how we were invoking code like Console.WriteLine.",
			  "displayTime": 106.769
			},
			{
			  "text": "And we'll use this knowledge in the next clip",
			  "displayTime": 109.769
			},
			{
			  "text": "when we add some more features to the GradeBook.",
			  "displayTime": 111.769
			}
		  ]
		},
		{
		  "title": "Statistics",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m2&clip=8&mode=live",
		  "segments": [
			{
			  "text": "What I'd like to do next is figure out how to get",
			  "displayTime": 2.0
			},
			{
			  "text": "statistics out of the GradeBook.",
			  "displayTime": 3.784
			},
			{
			  "text": "Remember the requirements wanting to know",
			  "displayTime": 5.784
			},
			{
			  "text": "for a given set of grades,",
			  "displayTime": 7.784
			},
			{
			  "text": "what's the highest score, the lowest score",
			  "displayTime": 9.784
			},
			{
			  "text": "and the average score?",
			  "displayTime": 11.784
			},
			{
			  "text": "Sometimes, when I'm not sure what to do,",
			  "displayTime": 12.784
			},
			{
			  "text": "I make stuff up and then I see if I can get it to work.",
			  "displayTime": 13.784
			},
			{
			  "text": "For example, I'm thinking if I want a GradeBook",
			  "displayTime": 16.784
			},
			{
			  "text": "to compute statistics, then that phrase,",
			  "displayTime": 18.784
			},
			{
			  "text": "ComputeStatistics, it's a pretty good",
			  "displayTime": 21.784
			},
			{
			  "text": "verb-oriented behavior that I can add to a GradeBook",
			  "displayTime": 23.784
			},
			{
			  "text": "as a method.",
			  "displayTime": 26.784
			},
			{
			  "text": "It's very clear when I look at a piece of code like this",
			  "displayTime": 27.784
			},
			{
			  "text": "what the GradeBook will be doing.",
			  "displayTime": 31.784
			},
			{
			  "text": "But what will the GradeBook do with those statistics?",
			  "displayTime": 33.784
			},
			{
			  "text": "Will it store those statistics internally?",
			  "displayTime": 36.784
			},
			{
			  "text": "Will it expose them somehow so I could see something",
			  "displayTime": 38.784
			},
			{
			  "text": "like the lowest grade that is associated with the GradeBook?",
			  "displayTime": 41.784
			},
			{
			  "text": "But if I can walk up to a GradeBook at any time",
			  "displayTime": 45.784
			},
			{
			  "text": "and look at the lowest grade, then why doesn't the GradeBook",
			  "displayTime": 47.784
			},
			{
			  "text": "just compute statistics for me all of the time",
			  "displayTime": 49.784
			},
			{
			  "text": "after each grade is added?",
			  "displayTime": 51.784
			},
			{
			  "text": "This is where you just have to think about",
			  "displayTime": 53.784
			},
			{
			  "text": "how are people going to use your objects?",
			  "displayTime": 55.784
			},
			{
			  "text": "How do people want to use your classes?",
			  "displayTime": 57.784
			},
			{
			  "text": "And here's how I think I would want to solve this problem.",
			  "displayTime": 59.784
			},
			{
			  "text": "I do want to call a method called ComputeStatistics.",
			  "displayTime": 62.784
			},
			{
			  "text": "I do want that word to be explicit",
			  "displayTime": 65.784
			},
			{
			  "text": "because the program has reached a point where",
			  "displayTime": 67.784
			},
			{
			  "text": "all of the grades are entered and now,",
			  "displayTime": 69.784
			},
			{
			  "text": "I want to generate those statistics so I can display them",
			  "displayTime": 71.784
			},
			{
			  "text": "to the user.",
			  "displayTime": 73.784
			},
			{
			  "text": "But I don't want those statistics to be part",
			  "displayTime": 74.784
			},
			{
			  "text": "of the GradeBook, and I don't want something called",
			  "displayTime": 76.784
			},
			{
			  "text": "lowest score to be part of the GradeBook.",
			  "displayTime": 78.784
			},
			{
			  "text": "I'd rather have ComputeStatistics return statistics to me",
			  "displayTime": 80.784
			},
			{
			  "text": "or have that method return some object to me",
			  "displayTime": 85.784
			},
			{
			  "text": "that will hold the statistics that I need.",
			  "displayTime": 87.784
			},
			{
			  "text": "That way, the GradeBook is just responsible",
			  "displayTime": 89.784
			},
			{
			  "text": "for storing the grades and computing the statistics.",
			  "displayTime": 91.784
			},
			{
			  "text": "And I have another object that is responsible for",
			  "displayTime": 94.784
			},
			{
			  "text": "and encapsulates the statistical results themselves.",
			  "displayTime": 96.784
			},
			{
			  "text": "Sometimes, we talk about encapsulation as hiding things",
			  "displayTime": 99.784
			},
			{
			  "text": "and certainly, this method, ComputeStatistics",
			  "displayTime": 102.784
			},
			{
			  "text": "will hide the algorithms that I need to compute",
			  "displayTime": 104.784
			},
			{
			  "text": "the statistics, and that's nice.",
			  "displayTime": 106.784
			},
			{
			  "text": "But encapsulation can also be the concept of",
			  "displayTime": 109.784
			},
			{
			  "text": "surrounding something, putting information together",
			  "displayTime": 111.784
			},
			{
			  "text": "into a single context and into one place,",
			  "displayTime": 113.784
			},
			{
			  "text": "and that's what I want the statistics to be.",
			  "displayTime": 115.784
			},
			{
			  "text": "In other words, perhaps what I really want here",
			  "displayTime": 118.784
			},
			{
			  "text": "is to write a new class, GradeStatistics",
			  "displayTime": 120.784
			},
			{
			  "text": "so that I can define a variable.",
			  "displayTime": 124.784
			},
			{
			  "text": "Let's call it stats.",
			  "displayTime": 126.784
			},
			{
			  "text": "And when I call ComputeStatistics, I can store a reference",
			  "displayTime": 127.784
			},
			{
			  "text": "to the computed results inside of the stats variable.",
			  "displayTime": 130.784
			},
			{
			  "text": "This gives me a separation between the active",
			  "displayTime": 133.784
			},
			{
			  "text": "computing statistics and the result of those calculations.",
			  "displayTime": 135.784
			},
			{
			  "text": "It does mean I'm going to have to create another class,",
			  "displayTime": 139.784
			},
			{
			  "text": "GradeStatistics, but many times you can reduce",
			  "displayTime": 141.784
			},
			{
			  "text": "the complexity of an application by adding more classes.",
			  "displayTime": 143.784
			},
			{
			  "text": "The GradeBook will now hold the grades.",
			  "displayTime": 146.784
			},
			{
			  "text": "This GradeStatistics class will hold",
			  "displayTime": 148.784
			},
			{
			  "text": "statistical information.",
			  "displayTime": 150.784
			},
			{
			  "text": "So Let's see if we can get this to run or at least compile.",
			  "displayTime": 152.784
			},
			{
			  "text": "So I'll come into the grades project and add another class.",
			  "displayTime": 157.784
			},
			{
			  "text": "So select class and this add new item dialog.",
			  "displayTime": 161.784
			},
			{
			  "text": "This will be called GradeStatistics.CS.",
			  "displayTime": 164.784
			},
			{
			  "text": "I don't actually have to put the .cs into this dialog box.",
			  "displayTime": 167.784
			},
			{
			  "text": "Visual Studio will do that for me.",
			  "displayTime": 170.784
			},
			{
			  "text": "Now I have this class.",
			  "displayTime": 172.784
			},
			{
			  "text": "If I come back to Program.cs,",
			  "displayTime": 173.784
			},
			{
			  "text": "you can see I don't have an error anymore.",
			  "displayTime": 175.784
			},
			{
			  "text": "Visual Studio now knows what GradeStatistics is,",
			  "displayTime": 177.784
			},
			{
			  "text": "but we still don't have a ComputeStatistics",
			  "displayTime": 180.784
			},
			{
			  "text": "on our GradeBook.",
			  "displayTime": 182.784
			},
			{
			  "text": "So let's add that.",
			  "displayTime": 184.784
			},
			{
			  "text": "I will expect this to be a public method",
			  "displayTime": 185.784
			},
			{
			  "text": "so I can invoke it from outside of GradeBook.",
			  "displayTime": 187.784
			},
			{
			  "text": "And I expect this method to return an object",
			  "displayTime": 190.784
			},
			{
			  "text": "of type GradeStatistics.",
			  "displayTime": 193.784
			},
			{
			  "text": "That's another key that we haven't talked about yet,",
			  "displayTime": 195.784
			},
			{
			  "text": "but public is an access modifier and then",
			  "displayTime": 197.784
			},
			{
			  "text": "just before the method name, you always have to describe",
			  "displayTime": 199.784
			},
			{
			  "text": "what a method returns.",
			  "displayTime": 202.784
			},
			{
			  "text": "In this case, I'm going to have a method",
			  "displayTime": 204.784
			},
			{
			  "text": "named ComputeStatistics,",
			  "displayTime": 206.784
			},
			{
			  "text": "and this method will return an object",
			  "displayTime": 209.784
			},
			{
			  "text": "of type GradeStatistics.",
			  "displayTime": 212.784
			},
			{
			  "text": "If a method doesn't need to return anything,",
			  "displayTime": 214.784
			},
			{
			  "text": "you can use the void keyword to say that this method",
			  "displayTime": 216.784
			},
			{
			  "text": "doesn't return a value.",
			  "displayTime": 219.784
			},
			{
			  "text": "So now we've learned another keyword in the C# language.",
			  "displayTime": 220.784
			},
			{
			  "text": "And when you write a constructor,",
			  "displayTime": 223.784
			},
			{
			  "text": "that's the only method that you ever write",
			  "displayTime": 225.784
			},
			{
			  "text": "where you do not specify a return type.",
			  "displayTime": 227.784
			},
			{
			  "text": "It's just an access modifier",
			  "displayTime": 229.784
			},
			{
			  "text": "and then the name of the constructor,",
			  "displayTime": 230.784
			},
			{
			  "text": "which is always the same as the name of the class.",
			  "displayTime": 232.784
			},
			{
			  "text": "That makes constructors look a little bit different.",
			  "displayTime": 234.784
			},
			{
			  "text": "So AddGrade doesn't return anything.",
			  "displayTime": 236.784
			},
			{
			  "text": "Compute statistics will return a GradeStatistics object.",
			  "displayTime": 239.784
			},
			{
			  "text": "And right now, Visual Studio will give me an error",
			  "displayTime": 243.784
			},
			{
			  "text": "because ComputeStatistics does not return a value.",
			  "displayTime": 245.784
			},
			{
			  "text": "It's an error to say you'll return GradeStatistics",
			  "displayTime": 248.784
			},
			{
			  "text": "but then not have a return statement inside of the method.",
			  "displayTime": 250.784
			},
			{
			  "text": "For right now, let's just return",
			  "displayTime": 254.784
			},
			{
			  "text": "a new instance of GradeStatistics.",
			  "displayTime": 256.784
			},
			{
			  "text": "We'll need to populate this and do some computations.",
			  "displayTime": 259.784
			},
			{
			  "text": "But for right now, I'm just trying to get the program",
			  "displayTime": 262.784
			},
			{
			  "text": "to build, and I should be able to, at this point,",
			  "displayTime": 264.784
			},
			{
			  "text": "build the solution.",
			  "displayTime": 267.784
			},
			{
			  "text": "We are not actually computing any statistics,",
			  "displayTime": 268.784
			},
			{
			  "text": "but that's okay.",
			  "displayTime": 271.784
			},
			{
			  "text": "Sometimes in software, you just have to feel your way",
			  "displayTime": 272.784
			},
			{
			  "text": "through to the final solution,",
			  "displayTime": 274.784
			},
			{
			  "text": "and I think, looking at this code,",
			  "displayTime": 276.784
			},
			{
			  "text": "that we're on the right track to computing some statistics.",
			  "displayTime": 278.784
			},
			{
			  "text": "In the next clip, we can take a closer look at this method",
			  "displayTime": 281.784
			},
			{
			  "text": "and figure out how we actually are",
			  "displayTime": 283.784
			},
			{
			  "text": "going to do these computations.",
			  "displayTime": 285.784
			}
		  ]
		},
		{
		  "title": "Computation",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m2&clip=9&mode=live",
		  "segments": [
			{
			  "text": "Inside of ComputeStatistics in the GradeBook, I need to be able to work with this object",
			  "displayTime": 1.75
			},
			{
			  "text": "of type GradeStatistics.",
			  "displayTime": 5.708
			},
			{
			  "text": "I need to do some calculations and ultimately,",
			  "displayTime": 6.708
			},
			{
			  "text": "I will need to add some fields to that class",
			  "displayTime": 8.708
			},
			{
			  "text": "so that I can store the calculation somewhere.",
			  "displayTime": 10.708
			},
			{
			  "text": "So instead of returning an object immediately,",
			  "displayTime": 13.708
			},
			{
			  "text": "let me create a variable of type GradeStatistics.",
			  "displayTime": 15.708
			},
			{
			  "text": "We can call it stats, point it to that new instance",
			  "displayTime": 18.708
			},
			{
			  "text": "of GradeStatistics.",
			  "displayTime": 21.708
			},
			{
			  "text": "Then we'll need to write some code",
			  "displayTime": 23.708
			},
			{
			  "text": "to compute the statistics and then ultimately,",
			  "displayTime": 24.708
			},
			{
			  "text": "here at the bottom of the method,",
			  "displayTime": 26.708
			},
			{
			  "text": "we will return those statistics.",
			  "displayTime": 27.708
			},
			{
			  "text": "I know I need to find the highest grade, the lowest grade",
			  "displayTime": 29.708
			},
			{
			  "text": "and the average grade, so let's start by computing",
			  "displayTime": 31.708
			},
			{
			  "text": "the average grade.",
			  "displayTime": 33.708
			},
			{
			  "text": "We all know that to compute an average,",
			  "displayTime": 34.708
			},
			{
			  "text": "I need to sum all of the grades in the grades list",
			  "displayTime": 37.708
			},
			{
			  "text": "and then divided by the total number of grades.",
			  "displayTime": 39.708
			},
			{
			  "text": "So let me create a variable.",
			  "displayTime": 41.708
			},
			{
			  "text": "Let's call it sum and initialize it to zero.",
			  "displayTime": 43.708
			},
			{
			  "text": "This will represent the sum of all the grades",
			  "displayTime": 46.708
			},
			{
			  "text": "in the GradeBook, and now I need to go to each grade",
			  "displayTime": 48.708
			},
			{
			  "text": "that is in that GradeBook and add it to the sum.",
			  "displayTime": 50.708
			},
			{
			  "text": "There's an easy way to do this in C#,",
			  "displayTime": 52.708
			},
			{
			  "text": "and that is to use a foreach statement.",
			  "displayTime": 54.708
			},
			{
			  "text": "We will look at the statement in a little more depth",
			  "displayTime": 57.708
			},
			{
			  "text": "later in this course, but what I can do with a foreach",
			  "displayTime": 59.708
			},
			{
			  "text": "is say foreach grade in the grade collection,",
			  "displayTime": 62.708
			},
			{
			  "text": "please take that grade and put it into a variable for me.",
			  "displayTime": 65.708
			},
			{
			  "text": "And I can actually declare this variable inside",
			  "displayTime": 67.708
			},
			{
			  "text": "of the foreach statement.",
			  "displayTime": 70.708
			},
			{
			  "text": "Let's declare the variable, its name will be grade.",
			  "displayTime": 71.708
			},
			{
			  "text": "And I say foreach grade in this field grades,",
			  "displayTime": 74.708
			},
			{
			  "text": "then I apply some curly braces and here's what will happen.",
			  "displayTime": 79.708
			},
			{
			  "text": "Any code that I put inside of these curly braces",
			  "displayTime": 82.708
			},
			{
			  "text": "will execute once for each grade",
			  "displayTime": 84.708
			},
			{
			  "text": "that is in the grades collection.",
			  "displayTime": 86.708
			},
			{
			  "text": "If I have the grades 93, 85 and 80,",
			  "displayTime": 88.708
			},
			{
			  "text": "I'll execute the code inside of this foreach",
			  "displayTime": 91.708
			},
			{
			  "text": "once with the value 93 inside of grade,",
			  "displayTime": 93.708
			},
			{
			  "text": "and then with an 85 and then with an 80.",
			  "displayTime": 96.708
			},
			{
			  "text": "So we are looping over this code once for each grade.",
			  "displayTime": 98.708
			},
			{
			  "text": "And what I need to do with each grade is add that grade",
			  "displayTime": 101.708
			},
			{
			  "text": "to the sum, so I can say sum = sum",
			  "displayTime": 104.708
			},
			{
			  "text": "plus the current grade that I'm looking at.",
			  "displayTime": 107.708
			},
			{
			  "text": "And there's actually a shortcut syntax for this in C#.",
			  "displayTime": 109.708
			},
			{
			  "text": "I can say sum = sum + grade,",
			  "displayTime": 113.708
			},
			{
			  "text": "or I can say sum += grade,",
			  "displayTime": 114.708
			},
			{
			  "text": "and those two statements are equivalent.",
			  "displayTime": 118.708
			},
			{
			  "text": "So sum = sum + grade or sum += grade.",
			  "displayTime": 120.708
			},
			{
			  "text": "That will add the value of the grade into that sum variable,",
			  "displayTime": 123.708
			},
			{
			  "text": "and then I can compute the average just by taking the sum",
			  "displayTime": 126.708
			},
			{
			  "text": "and dividing it by the total number of grades",
			  "displayTime": 129.708
			},
			{
			  "text": "that are in the list, which I can get easily",
			  "displayTime": 131.708
			},
			{
			  "text": "because the list will tell me how many items it holds.",
			  "displayTime": 133.708
			},
			{
			  "text": "But where do I store that value?",
			  "displayTime": 135.708
			},
			{
			  "text": "That number, the AverageGrade,",
			  "displayTime": 136.708
			},
			{
			  "text": "is part of the statistics that I want to publish.",
			  "displayTime": 137.708
			},
			{
			  "text": "So it's probably something that I want to add",
			  "displayTime": 140.708
			},
			{
			  "text": "to the GradeStatistics class.",
			  "displayTime": 142.708
			},
			{
			  "text": "Let's come over there,",
			  "displayTime": 144.708
			},
			{
			  "text": "and I'm going to give this class three fields.",
			  "displayTime": 146.708
			},
			{
			  "text": "The AverageGrade, and I also need to store",
			  "displayTime": 148.708
			},
			{
			  "text": "the HighestGrade and the LowestGrade.",
			  "displayTime": 152.708
			},
			{
			  "text": "So these are three fields that will be present",
			  "displayTime": 156.708
			},
			{
			  "text": "for every instance of GradeStatistics.",
			  "displayTime": 158.708
			},
			{
			  "text": "And over in the GradeBook, I ultimately want to say",
			  "displayTime": 160.708
			},
			{
			  "text": "stats.AverageGrade equals the average,",
			  "displayTime": 163.708
			},
			{
			  "text": "except I don't have access to AverageGrade",
			  "displayTime": 166.708
			},
			{
			  "text": "because AverageGrade, remember,",
			  "displayTime": 169.708
			},
			{
			  "text": "if I don't specify an access modifier for a field or method,",
			  "displayTime": 171.708
			},
			{
			  "text": "the default is for that class member to be private.",
			  "displayTime": 175.708
			},
			{
			  "text": "So AverageGrade is only available",
			  "displayTime": 177.708
			},
			{
			  "text": "inside of the class, GradeStatistics.",
			  "displayTime": 179.708
			},
			{
			  "text": "I need to add public in front of all three of these fields.",
			  "displayTime": 181.708
			},
			{
			  "text": "Now earlier, I said you typically want",
			  "displayTime": 184.708
			},
			{
			  "text": "to encapsulate fields.",
			  "displayTime": 185.708
			},
			{
			  "text": "But in this case, the entire purpose of GradeStatistics",
			  "displayTime": 187.708
			},
			{
			  "text": "is to collect all those data together and expose it.",
			  "displayTime": 189.708
			},
			{
			  "text": "I'm going to make all three of these public.",
			  "displayTime": 193.708
			},
			{
			  "text": "There's an easy way to do that with Visual Studio.",
			  "displayTime": 195.708
			},
			{
			  "text": "I'm going to hold down the alt key on the keyboard",
			  "displayTime": 197.708
			},
			{
			  "text": "and then click the mouse to select",
			  "displayTime": 199.708
			},
			{
			  "text": "three rows inside of the editor.",
			  "displayTime": 202.708
			},
			{
			  "text": "And now when I type the word public,",
			  "displayTime": 204.708
			},
			{
			  "text": "I'm typing that across all three lines of code.",
			  "displayTime": 206.708
			},
			{
			  "text": "So just hold down the alt key and then click",
			  "displayTime": 208.708
			},
			{
			  "text": "and hold the mouse to select multiple lines of code.",
			  "displayTime": 210.708
			},
			{
			  "text": "So I now have three public fields inside of GradeStatistics,",
			  "displayTime": 214.708
			},
			{
			  "text": "and I should be able to say stats.AverageGrade.",
			  "displayTime": 216.708
			},
			{
			  "text": "I can see I have access to that now.",
			  "displayTime": 218.708
			},
			{
			  "text": "It will equal sum divided by,",
			  "displayTime": 222.708
			},
			{
			  "text": "and this is where I can walk up to that list of float,",
			  "displayTime": 225.708
			},
			{
			  "text": "the grades field, and one of the members that it has in here",
			  "displayTime": 227.708
			},
			{
			  "text": "is a member called Count, which will tell me exactly",
			  "displayTime": 231.708
			},
			{
			  "text": "how many items are in that list.",
			  "displayTime": 233.708
			},
			{
			  "text": "One thing I should be careful about is what happens",
			  "displayTime": 236.708
			},
			{
			  "text": "if there are no grades that have been entered?",
			  "displayTime": 238.708
			},
			{
			  "text": "What if I tried to divide by zero",
			  "displayTime": 240.708
			},
			{
			  "text": "because grades.Count is zero?",
			  "displayTime": 242.708
			},
			{
			  "text": "That would be a runtime error",
			  "displayTime": 244.708
			},
			{
			  "text": "and something that would crash the program.",
			  "displayTime": 245.708
			},
			{
			  "text": "This will be a line of code that I need to be careful about.",
			  "displayTime": 247.708
			},
			{
			  "text": "We're going to talk about error handling",
			  "displayTime": 249.708
			},
			{
			  "text": "in a later module of this course.",
			  "displayTime": 251.708
			},
			{
			  "text": "For now, we're just going to assume that the user",
			  "displayTime": 253.708
			},
			{
			  "text": "knows what they're doing",
			  "displayTime": 254.708
			},
			{
			  "text": "and they'll always add at least one grade to the gradebook",
			  "displayTime": 256.708
			},
			{
			  "text": "before they call ComputeStatistics.",
			  "displayTime": 258.708
			},
			{
			  "text": "If the user doesn't enter a grade, the program will crash",
			  "displayTime": 260.708
			},
			{
			  "text": "and say that it tried to divide something by zero.",
			  "displayTime": 263.708
			},
			{
			  "text": "But now we have the average grade computer.",
			  "displayTime": 265.708
			},
			{
			  "text": "What about the highest grade and the lowest grade?",
			  "displayTime": 267.708
			},
			{
			  "text": "In order to compute that, I'm going to need to keep track",
			  "displayTime": 269.708
			},
			{
			  "text": "of what is the highest grade that I've seen so far.",
			  "displayTime": 271.708
			},
			{
			  "text": "So as I'm looking at each grade inside of a foreach loop,",
			  "displayTime": 274.708
			},
			{
			  "text": "I need to compare that grade to some sort of record",
			  "displayTime": 277.708
			},
			{
			  "text": "that I've kept about the current highest grade.",
			  "displayTime": 279.708
			},
			{
			  "text": "And one way to do that would just be",
			  "displayTime": 281.708
			},
			{
			  "text": "to keep a running record of what is the highest grade",
			  "displayTime": 284.708
			},
			{
			  "text": "that I've seen so far.",
			  "displayTime": 286.708
			},
			{
			  "text": "I can do that directly on the stats class and say",
			  "displayTime": 288.708
			},
			{
			  "text": "let's initialize stats.HighestGrade to a very small value,",
			  "displayTime": 290.708
			},
			{
			  "text": "like zero, so that as we're executing the code",
			  "displayTime": 294.708
			},
			{
			  "text": "inside of here, we can always check to see",
			  "displayTime": 296.708
			},
			{
			  "text": "if the current grade is greater than stats.HighestGrade.",
			  "displayTime": 298.708
			},
			{
			  "text": "But many times, I want to examine a piece of code",
			  "displayTime": 301.708
			},
			{
			  "text": "and really think a minute about the responsibilities",
			  "displayTime": 303.708
			},
			{
			  "text": "about the line of code.",
			  "displayTime": 305.708
			},
			{
			  "text": "Where does this code belong?",
			  "displayTime": 306.708
			},
			{
			  "text": "Where should I initialize highest grade?",
			  "displayTime": 307.708
			},
			{
			  "text": "And I'm thinking that the initialization",
			  "displayTime": 310.708
			},
			{
			  "text": "of the highest grade and the lowest grade members",
			  "displayTime": 312.708
			},
			{
			  "text": "will ideally be inside of the GradeStatistics class itself.",
			  "displayTime": 314.708
			},
			{
			  "text": "I could do that by adding a constructor to this class.",
			  "displayTime": 318.708
			},
			{
			  "text": "So once again, the code snippet, ctor, press tab twice,",
			  "displayTime": 321.708
			},
			{
			  "text": "and I can now say inside of here",
			  "displayTime": 325.708
			},
			{
			  "text": "that HighestGrade = 0.",
			  "displayTime": 327.708
			},
			{
			  "text": "And notice I don't have to say stats",
			  "displayTime": 328.708
			},
			{
			  "text": "or access highest grade through some variable.",
			  "displayTime": 330.708
			},
			{
			  "text": "When you're inside of a class, you can always access",
			  "displayTime": 333.708
			},
			{
			  "text": "a member of that class without going through",
			  "displayTime": 335.708
			},
			{
			  "text": "some sort of variable.",
			  "displayTime": 337.708
			},
			{
			  "text": "More on that later, but HighestGrade now starts",
			  "displayTime": 339.708
			},
			{
			  "text": "as a very small value, and I need to initialize LowestGrade",
			  "displayTime": 341.708
			},
			{
			  "text": "ideally to some really high value.",
			  "displayTime": 346.708
			},
			{
			  "text": "Perhaps I could just initialize LowestGrade to 100.",
			  "displayTime": 348.708
			},
			{
			  "text": "I know all of my grades are between zero and 100,",
			  "displayTime": 351.708
			},
			{
			  "text": "but I do want to show you that on this float type,",
			  "displayTime": 354.708
			},
			{
			  "text": "there are some static members.",
			  "displayTime": 357.708
			},
			{
			  "text": "I can see that if I just type float.,",
			  "displayTime": 358.708
			},
			{
			  "text": "the IntelliSense window shows me some static members",
			  "displayTime": 360.708
			},
			{
			  "text": "that are available on the float type.",
			  "displayTime": 363.708
			},
			{
			  "text": "And one of the static members is max value.",
			  "displayTime": 365.708
			},
			{
			  "text": "That's the largest possible number that you could fit",
			  "displayTime": 368.708
			},
			{
			  "text": "into a variable of type float.",
			  "displayTime": 370.708
			},
			{
			  "text": "So I'm going to make LowestGrade this really high value,",
			  "displayTime": 372.708
			},
			{
			  "text": "and now I can come back to the GradeBook",
			  "displayTime": 375.708
			},
			{
			  "text": "and as I inspect each grade, I can see if that grade",
			  "displayTime": 377.708
			},
			{
			  "text": "is higher than the highest grade",
			  "displayTime": 379.708
			},
			{
			  "text": "or lower than the lowest grade.",
			  "displayTime": 381.708
			},
			{
			  "text": "I could do that with an if statement.",
			  "displayTime": 383.708
			},
			{
			  "text": "I could say if the grade is greater than",
			  "displayTime": 385.708
			},
			{
			  "text": "stats.HighestGrade, only then will I execute",
			  "displayTime": 388.708
			},
			{
			  "text": "the following code.",
			  "displayTime": 393.708
			},
			{
			  "text": "We've talked about if statements and branching execution",
			  "displayTime": 394.708
			},
			{
			  "text": "earlier in the course.",
			  "displayTime": 396.708
			},
			{
			  "text": "It's inside of here where I would say okay,",
			  "displayTime": 397.708
			},
			{
			  "text": "the new highest grade for stats",
			  "displayTime": 399.708
			},
			{
			  "text": "will be the grade that I'm currently looking at.",
			  "displayTime": 401.708
			},
			{
			  "text": "This is one way to write the code.",
			  "displayTime": 404.708
			},
			{
			  "text": "But let me show you another approach.",
			  "displayTime": 406.708
			},
			{
			  "text": "I'm going to remove the if statement,",
			  "displayTime": 408.708
			},
			{
			  "text": "and now I'm going to use another class",
			  "displayTime": 410.708
			},
			{
			  "text": "of the .NET framework, the Math class.",
			  "displayTime": 412.708
			},
			{
			  "text": "Math also has some static members,",
			  "displayTime": 415.708
			},
			{
			  "text": "members that make it easy to compute a cosine",
			  "displayTime": 417.708
			},
			{
			  "text": "or a sine, raise a number to a power and so forth.",
			  "displayTime": 420.708
			},
			{
			  "text": "It also has these static members, max and min.",
			  "displayTime": 423.708
			},
			{
			  "text": "These are methods that I can invoke.",
			  "displayTime": 426.708
			},
			{
			  "text": "And what I do when I invoke Math.Max",
			  "displayTime": 428.708
			},
			{
			  "text": "is I pass in two numbers, and Math.Max will return",
			  "displayTime": 430.708
			},
			{
			  "text": "the highest or the maximum of those two numbers.",
			  "displayTime": 433.708
			},
			{
			  "text": "So if I just pass in grade and stats.HighestGrade",
			  "displayTime": 435.708
			},
			{
			  "text": "and assign the result of this operation",
			  "displayTime": 439.708
			},
			{
			  "text": "to stats.HighestGrade, stats.HighestGrade will contain",
			  "displayTime": 442.708
			},
			{
			  "text": "the highest number of these two.",
			  "displayTime": 445.708
			},
			{
			  "text": "I can also do this to set the lowest grade.",
			  "displayTime": 447.708
			},
			{
			  "text": "So the lowest grade would equal Math.Min,",
			  "displayTime": 450.708
			},
			{
			  "text": "or the minimum value between grade and stats.LowestGrade.",
			  "displayTime": 454.708
			},
			{
			  "text": "And now we have some code that will loop over",
			  "displayTime": 459.708
			},
			{
			  "text": "all of the grades in our grade collection,",
			  "displayTime": 462.708
			},
			{
			  "text": "keep track of the highest grade its seen,",
			  "displayTime": 464.708
			},
			{
			  "text": "the lowest grade its seen;",
			  "displayTime": 465.708
			},
			{
			  "text": "and also compute a sum so that it can compute an average.",
			  "displayTime": 467.708
			},
			{
			  "text": "Once all those numbers are put together",
			  "displayTime": 470.708
			},
			{
			  "text": "inside of the GradeStatistics object,",
			  "displayTime": 472.708
			},
			{
			  "text": "we'll return it from ComputeStatistics,",
			  "displayTime": 474.708
			},
			{
			  "text": "and now I should be able to come over into my program",
			  "displayTime": 476.708
			},
			{
			  "text": "and use those statistics.",
			  "displayTime": 479.708
			},
			{
			  "text": "Let's remove some of those code we added earlier,",
			  "displayTime": 481.708
			},
			{
			  "text": "and I just want to write out the stats.",
			  "displayTime": 483.708
			},
			{
			  "text": "First I will also add another grade.",
			  "displayTime": 485.708
			},
			{
			  "text": "Let's add a grade of 75,",
			  "displayTime": 487.708
			},
			{
			  "text": "then we will compute statistics.",
			  "displayTime": 490.708
			},
			{
			  "text": "And I want to write out the average, the highest",
			  "displayTime": 492.708
			},
			{
			  "text": "and the lowest.",
			  "displayTime": 494.708
			},
			{
			  "text": "One way to do a Console.WriteLine really quickly",
			  "displayTime": 495.708
			},
			{
			  "text": "is to use another code snippet, a cw snippet.",
			  "displayTime": 497.708
			},
			{
			  "text": "All I need to do is type the characters cw, press tab twice,",
			  "displayTime": 500.708
			},
			{
			  "text": "and I now have a line of code to invoke Console.WriteLine.",
			  "displayTime": 505.708
			},
			{
			  "text": "Let's write out stats.AverageGrade",
			  "displayTime": 508.708
			},
			{
			  "text": "and then Console.WriteLine, stats.HighestGrade",
			  "displayTime": 511.708
			},
			{
			  "text": "and Console.WriteLine, stats.LowestGrade.",
			  "displayTime": 515.708
			},
			{
			  "text": "I want to run this program without the debugger",
			  "displayTime": 519.708
			},
			{
			  "text": "so Control + F5 will do that,",
			  "displayTime": 521.708
			},
			{
			  "text": "or go to the Debug menu.",
			  "displayTime": 524.708
			},
			{
			  "text": "And the results I get out would show me that",
			  "displayTime": 525.708
			},
			{
			  "text": "the average grade is an 85.16.",
			  "displayTime": 527.708
			},
			{
			  "text": "The highest grade is a 91, the lowest grade is a 75,",
			  "displayTime": 530.708
			},
			{
			  "text": "this whole looks correct.",
			  "displayTime": 533.708
			},
			{
			  "text": "I should change the output so that I put some",
			  "displayTime": 534.708
			},
			{
			  "text": "additional text in front of these numbers",
			  "displayTime": 536.708
			},
			{
			  "text": "to tell the user exactly what numbers they're seeing,",
			  "displayTime": 538.708
			},
			{
			  "text": "but it does look like the gradebook",
			  "displayTime": 540.708
			},
			{
			  "text": "is doing the right computations,",
			  "displayTime": 542.708
			},
			{
			  "text": "and that's all thanks to a couple of classes",
			  "displayTime": 543.708
			},
			{
			  "text": "that we've implemented: the GradeBook and GradeStatistics.",
			  "displayTime": 546.708
			},
			{
			  "text": "Also, thanks to some static members on types",
			  "displayTime": 548.708
			},
			{
			  "text": "in the .NET Framework,",
			  "displayTime": 550.708
			},
			{
			  "text": "things like Float.MaxValue and Math.Min.",
			  "displayTime": 551.708
			},
			{
			  "text": "And we now have a GradeBook with some minimal features",
			  "displayTime": 554.708
			},
			{
			  "text": "but it's something that we can build on",
			  "displayTime": 557.708
			},
			{
			  "text": "throughout the rest of this course.",
			  "displayTime": 559.408
			}
		  ]
		},
		{
		  "title": "Summary",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m2&clip=10&mode=live",
		  "segments": [
			{
			  "text": "In this module, we looked at quite a few features of the C# language.",
			  "displayTime": 2.0
			},
			{
			  "text": "We learned how to create a class definition",
			  "displayTime": 5.075
			},
			{
			  "text": "and give a class a constructor.",
			  "displayTime": 7.575
			},
			{
			  "text": "A constructor is a special method used when we create",
			  "displayTime": 9.575
			},
			{
			  "text": "an instance of the class using the new keyword.",
			  "displayTime": 11.575
			},
			{
			  "text": "We also learned how we can construct multiple instances",
			  "displayTime": 13.575
			},
			{
			  "text": "of the class, and we can have variables that point",
			  "displayTime": 16.575
			},
			{
			  "text": "to these instances, these objects.",
			  "displayTime": 18.575
			},
			{
			  "text": "Two variables can point to the same object,",
			  "displayTime": 20.575
			},
			{
			  "text": "but also point to two different objects.",
			  "displayTime": 23.575
			},
			{
			  "text": "We also learned about the public and private",
			  "displayTime": 25.575
			},
			{
			  "text": "access modifiers.",
			  "displayTime": 27.575
			},
			{
			  "text": "Those play an important role in encapsulation.",
			  "displayTime": 28.575
			},
			{
			  "text": "And most importantly, we talked about taking",
			  "displayTime": 31.575
			},
			{
			  "text": "some requirements for a GradeBook",
			  "displayTime": 33.575
			},
			{
			  "text": "and using those requirements to create classes",
			  "displayTime": 35.575
			},
			{
			  "text": "like GradeBook and GradeBook statistics.",
			  "displayTime": 37.575
			},
			{
			  "text": "Over time, you'll figure out that these syntax",
			  "displayTime": 39.575
			},
			{
			  "text": "of a programming language,",
			  "displayTime": 41.575
			},
			{
			  "text": "while it can be challenging to learn,",
			  "displayTime": 42.575
			},
			{
			  "text": "can always be mastered over time.",
			  "displayTime": 44.575
			},
			{
			  "text": "What's a little more difficult is learning",
			  "displayTime": 46.575
			},
			{
			  "text": "good programming practices.",
			  "displayTime": 48.575
			},
			{
			  "text": "That requires you to always think about",
			  "displayTime": 49.575
			},
			{
			  "text": "the responsibilities of each class and method",
			  "displayTime": 51.575
			},
			{
			  "text": "and which class is going to encapsulate and be responsible",
			  "displayTime": 54.575
			},
			{
			  "text": "for which feature.",
			  "displayTime": 57.575
			},
			{
			  "text": "We're going to continue to build on our GradeBook",
			  "displayTime": 58.575
			},
			{
			  "text": "and touch on those topics throughout the rest of the course.",
			  "displayTime": 60.575
			}
		  ]
		}
	  ]
	},
	{
	  "title": "Assemblies",
	  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m3&clip=0&mode=live",
	  "clips": [
		{
		  "title": "Introduction",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m3&clip=0&mode=live",
		  "segments": [
			{
			  "text": "Hi this is Scott, and in this module we are going to focus on an important topic in C# development.",
			  "displayTime": 0.0
			},
			{
			  "text": "The topic is Assemblies. Assemblies are the files the C# compiler creates for us, and inside of an assembly",
			  "displayTime": 7.0
			},
			{
			  "text": "is the code we've written for our application. It is nearly impossible to write a C# programming using",
			  "displayTime": 13.0
			},
			{
			  "text": "only a single assembly, so in this module we will learn how to build assemblies and reference other",
			  "displayTime": 18.0
			},
			{
			  "text": "assemblies provided by the .NET Framework, as well as third-party assemblies in general.",
			  "displayTime": 23.0
			},
			{
			  "text": "Along the way, we'll learn about another vital topic in software development.",
			  "displayTime": 27.0
			},
			{
			  "text": "The topic is unit testing, and we will learn to write some tests to verify the behavior and functionality of",
			  "displayTime": 31.0
			},
			{
			  "text": "our GradeBook class.",
			  "displayTime": 36.0
			}
		  ]
		},
		{
		  "title": "Assemblies",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m3&clip=1&mode=live",
		  "segments": [
			{
			  "text": "Earlier in this course I showed you how to use the C# compiler from the command line.",
			  "displayTime": 0.0
			},
			{
			  "text": "Remember, the compiler's name is csc.exe, and I can pass one or more C# source code files to csc,",
			  "displayTime": 4.867
			},
			{
			  "text": "and the compiler will produce an executable that I can run in a command window.",
			  "displayTime": 11.867
			},
			{
			  "text": "That's how we wrote a hello world program in the first module. Now technically what the C# compiler produces",
			  "displayTime": 15.867
			},
			{
			  "text": "is called an assembly. A .NET assembly is a file that contains our compiled code, code that can execute",
			  "displayTime": 21.867
			},
			{
			  "text": "under the supervision of the Common Language Runtime. When we are writing a simple program like the Grade",
			  "displayTime": 27.867
			},
			{
			  "text": "Book program that we've been working on, we don't need to think about assemblies.",
			  "displayTime": 32.867
			},
			{
			  "text": "We can just compile and run our program. But on more sophisticated projects, we do need to learn a bit more",
			  "displayTime": 35.867
			},
			{
			  "text": "about how to make and also use other assemblies. .NET assemblies are just files that you will store on disk with a",
			  "displayTime": 41.867
			},
			{
			  "text": ".exe or .dll extension. Exe is short of executable. An exe file is a file that you can execute directly",
			  "displayTime": 48.867
			},
			{
			  "text": "by double-clicking on the file in Windows or using the name of the program from the command line.",
			  "displayTime": 56.867
			},
			{
			  "text": "The .dll extension is short for dynamic-link library. A dll is a file that you cannot execute directly,",
			  "displayTime": 61.867
			},
			{
			  "text": "but another program can load a dll and use the code inside, which means one reason to put code inside of a",
			  "displayTime": 68.867
			},
			{
			  "text": "dll is when you are writing code that you want to reuse in multiple applications.",
			  "displayTime": 74.867
			},
			{
			  "text": "A good example of a reuse is the .NET Framework itself. Some of the classes we've been using,",
			  "displayTime": 79.867
			},
			{
			  "text": "classes like Console and DateTime, they live inside an assembly that .NET provides.",
			  "displayTime": 84.867
			},
			{
			  "text": "The assembly's name is MSCorLib.dll. It is a core library that contains core types.",
			  "displayTime": 89.867
			},
			{
			  "text": "And many of this cor .NET assemblies like MSCorLib, they live inside a place known as the Global Assembly",
			  "displayTime": 96.867
			},
			{
			  "text": "Cache on a Windows machine. You will find the Global Assembly Cache underneath your Windows folder where",
			  "displayTime": 102.867
			},
			{
			  "text": "Windows installs inside a folder named Assembly. Inside of there you'll see additional folders beginning",
			  "displayTime": 108.867
			},
			{
			  "text": "with the letters G-A-C, GAC for short. That's what we call the Global Assembly Cache, the GAC.",
			  "displayTime": 114.867
			},
			{
			  "text": "The assemblies stored in the GAC are available to use from any .NET program that runs on a machine.",
			  "displayTime": 120.867
			},
			{
			  "text": "That's why popular assemblies like MSCorLib, which has the Console and DateTime classes, as well as classes",
			  "displayTime": 125.867
			},
			{
			  "text": "like String, these assemblies live in the GAC, so there's only one copy for the entire machine.",
			  "displayTime": 131.867
			},
			{
			  "text": "And now that we know that our GradeBook program is a .NET assembly and that we use classes from other",
			  "displayTime": 136.867
			},
			{
			  "text": "assemblies like MSCorLib, let's take a look in Visual Studio to explore this in more detail.",
			  "displayTime": 142.867
			}
		  ]
		},
		{
		  "title": "Browsing Assemblies",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m3&clip=2&mode=live",
		  "segments": [
			{
			  "text": "In this module we're going to continue to work with the GradeBook that we created in the last video module,",
			  "displayTime": 1.0
			},
			{
			  "text": "and here inside of Visual Studio I want to point out some features that relate to creating and using other assemblies.",
			  "displayTime": 6.864
			},
			{
			  "text": "First of all, we know now that when I do a build in Visual Studio all of my source code files, all of the .cs",
			  "displayTime": 12.0
			},
			{
			  "text": "files will be collected together and built into an assembly, and we can find that assembly if we go to the",
			  "displayTime": 18.864
			},
			{
			  "text": "location where we stored this project on disk and open up a command prompt.",
			  "displayTime": 24.864
			},
			{
			  "text": "The compiler by default will build an assembly into the bin, for binaries, Debug directory.",
			  "displayTime": 29.864
			},
			{
			  "text": "And inside of here if I list the files, I told you before there's a number of files in here that are related",
			  "displayTime": 35.864
			},
			{
			  "text": "to just debugging information, but Grades.exe that is the assembly that the C# compiler produced, and that is",
			  "displayTime": 40.864
			},
			{
			  "text": "an assembly that I can run because it's an executable, and it prints out statistical information about the",
			  "displayTime": 46.864
			},
			{
			  "text": "grades that I've entered into the GradeBook. Now what rules does the C# compiler use to produce Grades.exe?",
			  "displayTime": 51.864
			},
			{
			  "text": "Why does it pick that name? Why does it pick that extension, .exe?",
			  "displayTime": 57.864
			},
			{
			  "text": "I'm going to right-click on the project node Grades and go to Properties, and under Properties I want to go",
			  "displayTime": 62.864
			},
			{
			  "text": "to the Application tab. Now back in the last module when we created this project with File, New, Project,",
			  "displayTime": 69.864
			},
			{
			  "text": "I told Visual Studio that I wanted to create a console application name Grades, so by default Visual Studio",
			  "displayTime": 75.864
			},
			{
			  "text": "just configured a number of settings for me. For example, it configured the assembly name to have the same",
			  "displayTime": 81.864
			},
			{
			  "text": "name as my project, so the assembly name is going to be Grades.",
			  "displayTime": 86.864
			},
			{
			  "text": "But how does Visual Studio and the C# compiler then know whether to put on an .exe or a .dll extension?",
			  "displayTime": 90.864
			},
			{
			  "text": "The extension is controlled by this Output type setting. It's in here where I can select if I want this to",
			  "displayTime": 97.864
			},
			{
			  "text": "be an application, Console Application or Windows Application. A Windows Application would be an application",
			  "displayTime": 102.864
			},
			{
			  "text": "that puts up windows on the screen. Since we're running this from the command line, we have Console Application selected.",
			  "displayTime": 107.864
			},
			{
			  "text": "But I just want to show you what would happen if I selected Class Library instead.",
			  "displayTime": 113.864
			},
			{
			  "text": "A Class Library produces a dll, and if I build this project and I come back out to the console window,",
			  "displayTime": 119.864
			},
			{
			  "text": "let's do a directory again, and now I can see I have Grades.dll.",
			  "displayTime": 127.864
			},
			{
			  "text": "Unfortunately, Grades.dll is not something that I can execute.",
			  "displayTime": 131.864
			},
			{
			  "text": "Windows will give me an error and says it doesn't know what to do with this .dll file.",
			  "displayTime": 136.864
			},
			{
			  "text": "I would get the same sort of error if I came into Visual Studio and tried to run this with the debugger or",
			  "displayTime": 140.864
			},
			{
			  "text": "even without the debugger. Visual Studio will tell me a project with an output type of Class Library cannot",
			  "displayTime": 145.864
			},
			{
			  "text": "be started directly. So a dynamic-length library that is a .dll file, or what we would more commonly call",
			  "displayTime": 150.864
			},
			{
			  "text": "inside of Visual Studio a class library, that is an assembly, but it's not an assembly that can execute directly.",
			  "displayTime": 157.864
			},
			{
			  "text": "It has to be loaded into some other program, which will use the classes inside of that dll to do work.",
			  "displayTime": 163.864
			},
			{
			  "text": "So let me come back and change this back to being a Console Application, and then if I try to run with or",
			  "displayTime": 169.864
			},
			{
			  "text": "without the debugger, Visual Studio will rebuild that project, and I have a working executable again.",
			  "displayTime": 175.864
			},
			{
			  "text": "So Grades.exe is again an assembly that I have on disk that I can execute directly.",
			  "displayTime": 181.864
			},
			{
			  "text": "And this is not the only assembly involved in the execution of this program.",
			  "displayTime": 188.864
			},
			{
			  "text": "I'm also relying on other assemblies like MSCorLib to give me classes like Console and Math.",
			  "displayTime": 192.864
			},
			{
			  "text": "We used the Math class in the last module to help compute some of our statistics like highest grade and lowest grade.",
			  "displayTime": 198.864
			},
			{
			  "text": "That was inside of GradeBook.cs. Here you can see I'm using the Math type.",
			  "displayTime": 204.864
			},
			{
			  "text": "Whenever you're using a class from the .NET Framework, or really any other third-party assembly,",
			  "displayTime": 209.864
			},
			{
			  "text": "you can always place the cursor on the name of that class and press the F12 key.",
			  "displayTime": 214.864
			},
			{
			  "text": "What Visual Studio will do is open up an editor window with what looks like the source code to that particular class.",
			  "displayTime": 220.864
			},
			{
			  "text": "It's not really the full source code, Visual Studio is just trying to show you what's available on the Math",
			  "displayTime": 227.864
			},
			{
			  "text": "class, and here I can see there are methods to call to get an absolute number and an arctangent and a logarithm.",
			  "displayTime": 231.864
			},
			{
			  "text": "What I just want to point out here is at the very top of the file Visual Studio will tell me what assembly",
			  "displayTime": 237.864
			},
			{
			  "text": "this type lives in. So the Math class that has static methods we can invoke directly, it lives in the assembly mscorlib.",
			  "displayTime": 242.864
			},
			{
			  "text": "And if I want to see all of the assemblies that I might be using during execution of my program, I can come",
			  "displayTime": 250.864
			},
			{
			  "text": "into the Solution Explorer window and open this References node.",
			  "displayTime": 256.864
			},
			{
			  "text": "All of the little block icons in here are specifying the names of other assemblies that my project references.",
			  "displayTime": 260.864
			},
			{
			  "text": "So there's a couple of things to note here. One, by default when you create a new project with Visual Studio,",
			  "displayTime": 267.864
			},
			{
			  "text": "Visual Studio will give you a number of assembly references. These are common assemblies that many",
			  "displayTime": 272.864
			},
			{
			  "text": "applications use, but our application doesn't actually use all of the assemblies that are listed here.",
			  "displayTime": 276.864
			},
			{
			  "text": "And that's okay. It's not an error to reference an assembly that you don't use.",
			  "displayTime": 281.864
			},
			{
			  "text": "In fact, there may not even be a performance overhead to that because .NET will only load an assembly when",
			  "displayTime": 285.864
			},
			{
			  "text": "you actually start to use a class from that assembly inside of a program.",
			  "displayTime": 291.864
			},
			{
			  "text": "But an assembly like System.Net.Http, that's an assembly that I could use to make calls over the network",
			  "displayTime": 295.864
			},
			{
			  "text": "using the HTTP protocol. It's not something that my program actually does.",
			  "displayTime": 302.864
			},
			{
			  "text": "I can right-click this assembly and Remove, and I'll still be able to build the program and everything works.",
			  "displayTime": 306.864
			},
			{
			  "text": "If you remove an assembly that has a class that you are using, you will get a build error.",
			  "displayTime": 313.864
			},
			{
			  "text": "Now one assembly that you might notice is not here is MSCorLib, and that's because MSCorLib is such an",
			  "displayTime": 317.864
			},
			{
			  "text": "essential assembly that nearly every .NET application has to have that Visual Studio doesn't even list that",
			  "displayTime": 323.864
			},
			{
			  "text": "assembly in the references. It's just implied that you'll be using MSCorLib.",
			  "displayTime": 329.864
			},
			{
			  "text": "Now one additional feature that I want to point out is quite often you'll want to be able to see what",
			  "displayTime": 334.864
			},
			{
			  "text": "inside of an assembly. You just want to be able to explore and see what classes might be available.",
			  "displayTime": 338.864
			},
			{
			  "text": "That's the job of the Object Browser. So if I come to the View menu one, of the options here will be the",
			  "displayTime": 343.864
			},
			{
			  "text": "Object Browser window. There's actually a couple of ways to open this.",
			  "displayTime": 349.864
			},
			{
			  "text": "I can get to it from the View menu. I can also right-click an assembly over here and say View in Object Browser.",
			  "displayTime": 352.864
			},
			{
			  "text": "That will open the Object Browser and put the focus right on that assembly inside the Object Browser.",
			  "displayTime": 358.864
			},
			{
			  "text": "So the Object Browser allows you to look through all of the namespaces and all of the types that are inside",
			  "displayTime": 363.864
			},
			{
			  "text": "of an assembly. So I can see here's my Grades assembly. What's inside of my Grades assembly?",
			  "displayTime": 369.864
			},
			{
			  "text": "There is a Grades namespace, and inside of that namespace I have three classes, the GradeBook Class,",
			  "displayTime": 375.864
			},
			{
			  "text": "and the GradeStatistics, and the Program classes. Those are all classes that we implemented.",
			  "displayTime": 381.864
			},
			{
			  "text": "And what's inside of mscorlib? Inside of mscorlib you'll find dozens of namespaces, and inside of each",
			  "displayTime": 386.864
			},
			{
			  "text": "namespace can be dozens, maybe even over a hundred different types.",
			  "displayTime": 392.864
			},
			{
			  "text": "So here inside of mscorlib inside of the System namespace, this is where I will find classes like Console.",
			  "displayTime": 396.864
			},
			{
			  "text": "And if I click on Console, the Object Browser goes one step further.",
			  "displayTime": 403.864
			},
			{
			  "text": "Over here on the right hand side I can see all of the methods that are available on that Console class.",
			  "displayTime": 406.864
			},
			{
			  "text": "So I can see that there is a ReadLine, which is a method we used in the first module of this course to read a",
			  "displayTime": 411.864
			},
			{
			  "text": "user's name and find out how much sleep they had the previous evening.",
			  "displayTime": 417.864
			},
			{
			  "text": "Also inside of here would be the Math class, so that's another way I could look and explore what can I do",
			  "displayTime": 421.864
			},
			{
			  "text": "with this Math class that is in mscorlib. Now so far inside of our Grades program we haven't needed any",
			  "displayTime": 426.864
			},
			{
			  "text": "classes from assemblies that we don't have referenced. That is when Visual Studio set up this project,",
			  "displayTime": 433.864
			},
			{
			  "text": "it gave us access to all of the classes that we'd ever need for this GradeBook.",
			  "displayTime": 439.864
			},
			{
			  "text": "Most of things that we use are in mscorlib or in System. But in the next clip let's try something a little",
			  "displayTime": 443.864
			},
			{
			  "text": "bit different and see what we have to do if we need to use a class that is in an assembly that we don't",
			  "displayTime": 448.864
			},
			{
			  "text": "currently have referenced.",
			  "displayTime": 454.864
			}
		  ]
		},
		{
		  "title": "Referencing Assemblies",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m3&clip=3&mode=live",
		  "segments": [
			{
			  "text": "When we are executing a program and we want to use a class or a type defined in another assembly,",
			  "displayTime": 0.0
			},
			{
			  "text": "we must have that assembly loaded into memory with our program, and this can happen automatically with",
			  "displayTime": 7.968
			},
			{
			  "text": "the .NET runtime. The easiest way for assembly loading to happen is to establish what we call an assembly reference.",
			  "displayTime": 12.968
			},
			{
			  "text": "We can do this inside of Visual Studio and have an assembly appear in that references node that we were just looking at.",
			  "displayTime": 18.968
			},
			{
			  "text": "When you right-click that node, you can select an option that says Add Reference, which will bring up a",
			  "displayTime": 25.968
			},
			{
			  "text": "dialog box, which will allow you to select assemblies from the .NET Framework, as well as assemblies defined",
			  "displayTime": 30.968
			},
			{
			  "text": "by other projects that you've created in solution or even just assemblies that are just lying around",
			  "displayTime": 35.968
			},
			{
			  "text": "somewhere on the disk. But the important part is once I've established a reference inside of a project with",
			  "displayTime": 40.968
			},
			{
			  "text": "Visual Studio, I can start using the types inside, and the .NET Framework will automatically load that",
			  "displayTime": 45.968
			},
			{
			  "text": "assembly when I start using pieces from it during runtime. Let's take a look and see how that works.",
			  "displayTime": 50.968
			},
			{
			  "text": "Inside of the GradeBook application, I want to try a little experiment with speech and see if I can get our",
			  "displayTime": 57.968
			},
			{
			  "text": "program to speak a greeting and perhaps even the grades that are inside of the GradeBook.",
			  "displayTime": 62.968
			},
			{
			  "text": "And to do this, I've read about a class on MSDN, the Microsoft Developer Network, that has a lot of the C# documentation.",
			  "displayTime": 68.968
			},
			{
			  "text": "The class is called SpeechSynthesizer. And the problem right now is that class lives in an assembly that I don't reference.",
			  "displayTime": 75.968
			},
			{
			  "text": "So not only would my program not run, it currently won't build because I have to have all of my assembly",
			  "displayTime": 84.968
			},
			{
			  "text": "references in place for the classes that I'm using before the C# compiler will even build my project.",
			  "displayTime": 88.968
			},
			{
			  "text": "And Visual Studio's trying to give me a clue about this. It tells me that the type or the namespace",
			  "displayTime": 94.968
			},
			{
			  "text": "SpeechSynthesizer could not be found. Are you missing a using directive or an assembly reference?",
			  "displayTime": 97.968
			},
			{
			  "text": "And in this case the problem is an assembly reference. So let me right-click on the References node and",
			  "displayTime": 103.968
			},
			{
			  "text": "say Add Reference. Inside of this dialog box under Assemblies I can see a list of all of the framework",
			  "displayTime": 109.968
			},
			{
			  "text": "assemblies that are installed on this machine, and there are a number of different ways to establish an",
			  "displayTime": 114.968
			},
			{
			  "text": "assembly reference including just browsing to an assembly that is living on my file system somewhere.",
			  "displayTime": 119.968
			},
			{
			  "text": "But the assembly I want for the SpeechSynthesizer, it is an assembly in the .NET Framework, so I'll come up",
			  "displayTime": 124.968
			},
			{
			  "text": "to the text box here in the upper right of the screen and just search for speech, and I can see there is a",
			  "displayTime": 130.968
			},
			{
			  "text": "System.Speech assembly. If I select that checkbox and say OK, I can now see that System.Speech is added to",
			  "displayTime": 135.968
			},
			{
			  "text": "my list of assembly references. I can even right-click this assembly, view it in the Object Browser,",
			  "displayTime": 144.968
			},
			{
			  "text": "and inside of the Object Browser I can see there's a System.Speech.Synthesis namespace, and it's actually",
			  "displayTime": 151.968
			},
			{
			  "text": "inside of here where I would find the SpeechSynthesizer class that I want.",
			  "displayTime": 157.968
			},
			{
			  "text": "And this class has a large number of methods that allow you to select different voices and do all sorts of",
			  "displayTime": 162.968
			},
			{
			  "text": "tweaks to the sound and the speech that it's going to produce, but one of the easiest methods to use is just",
			  "displayTime": 167.968
			},
			{
			  "text": "a method called Speak, which takes a string, and the synthesizer will speak the contents of that string.",
			  "displayTime": 173.968
			},
			{
			  "text": "This is not a static method, so I do need to instantiate the SpeechSynthesizer.",
			  "displayTime": 180.968
			},
			{
			  "text": "But now when I come back to my program, I still have an error that I might be missing a using directive or an",
			  "displayTime": 185.968
			},
			{
			  "text": "assembly reference, but this time I have the assembly reference.",
			  "displayTime": 190.968
			},
			{
			  "text": "I just need to add a using statement so that the compiler knows this is the",
			  "displayTime": 193.968
			},
			{
			  "text": "System.Speech.Synthesis.SpeechSynthesizer class. And now I can create a variable called synth.",
			  "displayTime": 198.968
			},
			{
			  "text": "Let's set that equal to a new instance of the SpeechSynthesizer class, and let's say synth.Speak",
			  "displayTime": 205.968
			},
			{
			  "text": "(\"Hello this is the grade book program.\") And now when I run the application, that assembly will be loaded",
			  "displayTime": 213.968
			},
			{
			  "text": "into my program; I'll be able to instantiate that class. And if I run this without the debugger,",
			  "displayTime": 222.968
			},
			{
			  "text": "which is Ctrl+F5, that's the shortcut, hello this is the grade book program, then I have now successfully",
			  "displayTime": 227.968
			},
			{
			  "text": "used the speech synthesizer. If I were to come back into Visual Studio and remove this reference, now I will",
			  "displayTime": 234.968
			},
			{
			  "text": "start to have errors appear as the compiler, when I do a build, no longer knows where SpeechSynthesizer comes from.",
			  "displayTime": 244.968
			},
			{
			  "text": "I get an error not only trying to use SpeechSynthesizer, but also just trying to use System.Speech.Synthesis.",
			  "displayTime": 251.968
			},
			{
			  "text": "That's not a namespace that the compiler sees in any of the assemblies that I have referenced.",
			  "displayTime": 258.968
			},
			{
			  "text": "So for most projects that you work on, the default assembly references will not be enough to get the job done.",
			  "displayTime": 263.968
			},
			{
			  "text": "Quite often you're going to have some feature like talking to a database or executing business algorithms",
			  "displayTime": 269.968
			},
			{
			  "text": "that someone else in your company has written and produced into an assembly.",
			  "displayTime": 275.968
			},
			{
			  "text": "There are going to be some other features that you need to grab by referencing other assemblies.",
			  "displayTime": 278.968
			},
			{
			  "text": "Another place where you will have to learn to manage assembly references is when you have multiple projects",
			  "displayTime": 283.968
			},
			{
			  "text": "in the solution, and one project depends on another type of project.",
			  "displayTime": 287.968
			},
			{
			  "text": "Let me clean up this program by removing code that will produce an error, and then we'll take a look at that",
			  "displayTime": 291.968
			},
			{
			  "text": "topic as I introduce you to unit testing with C#.",
			  "displayTime": 296.968
			}
		  ]
		},
		{
		  "title": "Unit Testing",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m3&clip=4&mode=live",
		  "segments": [
			{
			  "text": "In software development, we often need to run our program to see if it is working correctly, but why run and",
			  "displayTime": 0.0
			},
			{
			  "text": "inspect the results yourself when you can automate a test and have the computer verify the results?",
			  "displayTime": 6.809
			},
			{
			  "text": "This is one advantage to writing unit tests. A unit test is where I write some C# code to test my other C#",
			  "displayTime": 12.809
			},
			{
			  "text": "code in an automatic manner. Pluralsight has several courses that cover unit testing in more detail,",
			  "displayTime": 18.809
			},
			{
			  "text": "so in this course I'm going to stick to some brute force information to get you started.",
			  "displayTime": 23.809
			},
			{
			  "text": "Visual Studio provides a special project type dedicated to unit test code.",
			  "displayTime": 28.809
			},
			{
			  "text": "As a software developer, I can use this project to write tests for my classes and verify that they're behaving correctly.",
			  "displayTime": 32.809
			},
			{
			  "text": "The unit test project produces an assembly with my test code, and my test assembly typically has to reference",
			  "displayTime": 39.809
			},
			{
			  "text": "another assembly with the code that is being tested. For example, if I want to make sure that the GradeBook",
			  "displayTime": 45.809
			},
			{
			  "text": "computes the proper statistics, I'd create a new test project and write some test code where that test",
			  "displayTime": 50.809
			},
			{
			  "text": "project will reference the assembly with the GradeBook. That way inside of a unit test I can use the",
			  "displayTime": 55.809
			},
			{
			  "text": "GradeBook, I can instantiate that class, I can give it different grades and look at the output.",
			  "displayTime": 60.809
			},
			{
			  "text": "Let's take a look and see how this works and start writing some tests, which throughout the rest of this",
			  "displayTime": 65.809
			},
			{
			  "text": "course you'll learn not only how to verify the behavior of your code, but I'll show you how you can use unit",
			  "displayTime": 69.809
			},
			{
			  "text": "tests to experiment and learn about the C# language.",
			  "displayTime": 75.809
			},
			{
			  "text": "Inside of Visual Studio, before I can begin testing my GradeBook, I have to be set up with a unit testing project.",
			  "displayTime": 79.809
			},
			{
			  "text": "There are many ways to run unit tests on the .NET Framework. I'm going to show you one way to do this with Visual Studio.",
			  "displayTime": 86.809
			},
			{
			  "text": "I'm going to go to the Solution Explorer window and right-click on the Solution, the Grades Solution,",
			  "displayTime": 92.809
			},
			{
			  "text": "because what I want to do is add another project to the Solution.",
			  "displayTime": 97.809
			},
			{
			  "text": "One of the nice things about solutions in Visual Studio is they can contain multiple projects.",
			  "displayTime": 100.809
			},
			{
			  "text": "Each project has its own set of source code for a particular piece of the application.",
			  "displayTime": 105.809
			},
			{
			  "text": "I'm going to Add a New Project that will be a unit testing project.",
			  "displayTime": 110.809
			},
			{
			  "text": "So instead of selecting Console Application, which we did for the GradeBook, I'm going to go to this Test",
			  "displayTime": 114.809
			},
			{
			  "text": "node and select Unit Test Project, and let's call this project Grades.UnitTests, or perhaps let's just call",
			  "displayTime": 119.809
			},
			{
			  "text": "it Grades.Test. So that will be the name of my project and also the name of the assembly that this project",
			  "displayTime": 129.809
			},
			{
			  "text": "produces, Grades.Tests.dll. This assembly will just contain the compiled test code.",
			  "displayTime": 134.809
			},
			{
			  "text": "There will be a different tool, a different program that will load this library and execute the tests inside",
			  "displayTime": 140.809
			},
			{
			  "text": "and show me the results. And once I select OK, Visual Studio will create this project, add it to my",
			  "displayTime": 146.809
			},
			{
			  "text": "solution, and any time I do a build I'll be building both the Grades assembly and the Grades.Tests assembly.",
			  "displayTime": 153.809
			},
			{
			  "text": "Now before we even write any code, let me go to the Test menu in Visual Studio, and I'm going to say Run All the Tests.",
			  "displayTime": 161.809
			},
			{
			  "text": "This will launch a test runner that is included in Visual Studio, and after building both of my projects,",
			  "displayTime": 168.809
			},
			{
			  "text": "this test runner will go looking for tests that are in Grades.Tests.",
			  "displayTime": 174.809
			},
			{
			  "text": "And I can see in this Test Explorer window that popped up on the left hand side there's a single method,",
			  "displayTime": 178.809
			},
			{
			  "text": "TestMethod1, and the green checkmark tells me that test passed.",
			  "displayTime": 183.809
			},
			{
			  "text": "Of course we're not really testing any functionality yet, and before we do I just want to run through some of",
			  "displayTime": 187.809
			},
			{
			  "text": "the basics of a unit test. And one of the first things I'm going to do is actually drab this Test Explorer",
			  "displayTime": 192.809
			},
			{
			  "text": "window and dock it down here beneath my Solution Explorer just because I always prefer my code to be on the",
			  "displayTime": 197.809
			},
			{
			  "text": "left hand side of the screen. And now let me introduce you to some of the code that is inside of a file here.",
			  "displayTime": 203.809
			},
			{
			  "text": "This file is called UnitTest1.cs, and inside of here is a class, UnitTest1, and a method, TestMethod1.",
			  "displayTime": 209.809
			},
			{
			  "text": "We also have a new syntax feature of C#, a syntax feature that allows us to tell a test runner what methods",
			  "displayTime": 217.809
			},
			{
			  "text": "are tests methods, that is methods that should be executed and checked to see if they passed or failed,",
			  "displayTime": 224.809
			},
			{
			  "text": "and also a piece of information to identify a class that has test methods.",
			  "displayTime": 229.809
			},
			{
			  "text": "So this syntax with the square brackets, these are known as attributes in C#.",
			  "displayTime": 234.809
			},
			{
			  "text": "We're going to talk about attributes in more detail later in the course, but for now you can think of an",
			  "displayTime": 238.809
			},
			{
			  "text": "attribute as a piece of data that is associated with a class or a method.",
			  "displayTime": 242.809
			},
			{
			  "text": "You can actually associate an attribute with all sorts of different types and members in a C# application,",
			  "displayTime": 247.809
			},
			{
			  "text": "but again that's later in the course. For right now, just know that if you're going to write a test that the",
			  "displayTime": 252.809
			},
			{
			  "text": "test runner will run for you, you want to put that code inside of a method that has a TestMethod attribute",
			  "displayTime": 257.809
			},
			{
			  "text": "with the square brackets around it, and that method goes into a class, a public class that has this TestClass",
			  "displayTime": 263.809
			},
			{
			  "text": "attribute, and these attributes just sit directly on top of the language element that they are associated with.",
			  "displayTime": 269.809
			},
			{
			  "text": "So TestClass is associated with a class; TestMethod is associated with a method.",
			  "displayTime": 275.809
			},
			{
			  "text": "And what the test runner will do is just find all of your test classes, instantiate each one,",
			  "displayTime": 280.809
			},
			{
			  "text": "execute the methods that are inside of each one, and then determine if a method passes or fails.",
			  "displayTime": 284.809
			},
			{
			  "text": "How does the test runner know if a method passed or failed? Well, if there was no error that occurs inside",
			  "displayTime": 290.809
			},
			{
			  "text": "of test method, the test runner will assume that the test has passed.",
			  "displayTime": 295.809
			},
			{
			  "text": "But I can use a class that is in this namespace, Microsoft.VisualStudio.TestTools.UnitTesting.",
			  "displayTime": 299.809
			},
			{
			  "text": "This class is called a Assert, and I can use this Assert class to make assertions about a particular piece of",
			  "displayTime": 306.809
			},
			{
			  "text": "data or a particular facet of my program. And if those assertions don't hold true, they will raise an error",
			  "displayTime": 312.809
			},
			{
			  "text": "and fail my test. In other words, once I dot into this Assert class, I can see all sorts of methods that are",
			  "displayTime": 318.809
			},
			{
			  "text": "available like AreEqual, AreNotSame, AreSame, Fail, IsFalse, IsTrue, so I can try to make an assertion like",
			  "displayTime": 324.809
			},
			{
			  "text": "are 3 and 4 equal? And if I run all of my tests again, the Test Explorer will tell me that no I have a failing test.",
			  "displayTime": 333.809
			},
			{
			  "text": "I know that now because of all the red that shows up. And I can actually click on TestMethod1, and I can see",
			  "displayTime": 342.809
			},
			{
			  "text": "some more detail here on the right side, AreEqual failed. Expected 3, Actual 4.",
			  "displayTime": 348.809
			},
			{
			  "text": "That means I expected a value 3, I expected that to match the value 4, but we all know that 3 is not equal",
			  "displayTime": 353.809
			},
			{
			  "text": "to 4, so this test failed. And if I double-click on this method, Visual Studio will actually place the cursor",
			  "displayTime": 360.809
			},
			{
			  "text": "inside of that method. That way if a test fails and I don't have the file open, it's very easy to double-click",
			  "displayTime": 366.809
			},
			{
			  "text": "a test and go directly to the source code. If I change Assert.AreEqual where I expect a 3 and the result to",
			  "displayTime": 371.809
			},
			{
			  "text": "compare it to is a 3, now if I run all the tests, I am back to having a passing test.",
			  "displayTime": 378.809
			},
			{
			  "text": "And so the ultimate goal with my unit test will be this: I want to make sure that the GradeBook is behaving",
			  "displayTime": 385.809
			},
			{
			  "text": "correctly, so I want to write one or more test methods that will feed some data into the GradeBook and then",
			  "displayTime": 389.809
			},
			{
			  "text": "make assertions about the GradeStatistics that the GradeBook returns.",
			  "displayTime": 395.809
			},
			{
			  "text": "Did it find the correct high grade, the correct low grade? Did it compute the correct average?",
			  "displayTime": 399.809
			},
			{
			  "text": "In order to do that, I'm going to create a new test class with new test methods, and for now I'm going to get",
			  "displayTime": 403.809
			},
			{
			  "text": "rid of UnitTest1. This is really just sort of a sample file that Visual Studio gives you so that you can see",
			  "displayTime": 409.809
			},
			{
			  "text": "the proper syntax for writing a unit test. But now that we know that syntax, we can create a source code",
			  "displayTime": 414.809
			},
			{
			  "text": "file with a better name and better tests name inside, test names that are related to the GradeBook.",
			  "displayTime": 420.809
			},
			{
			  "text": "Let's do that next.",
			  "displayTime": 425.809
			}
		  ]
		},
		{
		  "title": "Tests and Access Modifiers",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m3&clip=5&mode=live",
		  "segments": [
			{
			  "text": "I want to be able to write some tests that will test the functionality of my GradeBook, so I'm going to",
			  "displayTime": 0.0
			},
			{
			  "text": "right-click on Grades.Tests on that project, and let's Add a Class because tests are nothing more than code",
			  "displayTime": 6.307
			},
			{
			  "text": "that exists inside of test methods that are inside of a test class.",
			  "displayTime": 14.307
			},
			{
			  "text": "So I will call this class GradeBookTests and press Enter. Visual Studio will add that class to the project.",
			  "displayTime": 18.307
			},
			{
			  "text": "I want this to be a test class, and in order to use that attribute I'm going to need the namespace that we",
			  "displayTime": 27.307
			},
			{
			  "text": "talked about earlier, Microsoft.VisualStudio.TestTools.UnitTesting.",
			  "displayTime": 34.307
			},
			{
			  "text": "And the easiest way to add that is to click on the lightbulb and then select that option.",
			  "displayTime": 38.307
			},
			{
			  "text": "I now have that using statement in place, and I can write a TestMethod, my first TestMethod.",
			  "displayTime": 42.307
			},
			{
			  "text": "So there are various philosophies about how to name your test classes, how to name your test methods,",
			  "displayTime": 48.307
			},
			{
			  "text": "how much code to put inside of a method and a class. I'm going to leave it up to all the other Pluralsight",
			  "displayTime": 53.307
			},
			{
			  "text": "video's about unit testing to talk about the different perspectives and subtleties of how to organize test codes.",
			  "displayTime": 58.307
			},
			{
			  "text": "For right now, I'm just going to brute force my way, and here's what I want to do.",
			  "displayTime": 64.307
			},
			{
			  "text": "I want to be able to instantiate a GradeBook, I want to be able to give it some data, and I want to write",
			  "displayTime": 67.307
			},
			{
			  "text": "assertions to make sure that the GradeBook computes the correct highest grade.",
			  "displayTime": 71.307
			},
			{
			  "text": "And to do that I'm going to write a public method that does not return anything, so I'll use the void keyword.",
			  "displayTime": 76.307
			},
			{
			  "text": "This method I'll just name it ComputesHighestGrade, and inside of the method I want to use the GradeBook.",
			  "displayTime": 81.307
			},
			{
			  "text": "Right now there are a couple of obstacles that will prevent me from using the GradeBook.",
			  "displayTime": 90.307
			},
			{
			  "text": "One obstacle is that Grades.Test, this assembly doesn't know about the other project, the Grades project.",
			  "displayTime": 95.307
			},
			{
			  "text": "Even though they're in the same solution, I'm not going to be able to use GradeBook until I establish a",
			  "displayTime": 101.307
			},
			{
			  "text": "reference from Grades.Test to the Grades. So just like I did with the speech synthesizer, let me right-click",
			  "displayTime": 107.307
			},
			{
			  "text": "References and select Add Reference, but this time instead of selecting a framework assembly I'm going to go",
			  "displayTime": 113.307
			},
			{
			  "text": "to this Projects node. The Projects node will list all of the other projects that are available in a",
			  "displayTime": 120.307
			},
			{
			  "text": "solution, which makes it very easy to just come in and select a checkbox and say yes, I want to reference the",
			  "displayTime": 125.307
			},
			{
			  "text": "assembly that is produced by this other project, the Grades assembly.",
			  "displayTime": 131.307
			},
			{
			  "text": "That will give me a reference to that other project, but I still have another obstacle.",
			  "displayTime": 136.307
			},
			{
			  "text": "If I look at the error that Visual Studio is giving me, it's telling me that GradeBook is inaccessible due to",
			  "displayTime": 140.307
			},
			{
			  "text": "its protection level. So when you start working with multiple assemblies, you need to know a little bit more",
			  "displayTime": 145.307
			},
			{
			  "text": "about protection levels than I've described so far. Let's look at the GradeBook.",
			  "displayTime": 150.307
			},
			{
			  "text": "Protection levels are established by those access modifiers that we talked about in the last module,",
			  "displayTime": 154.307
			},
			{
			  "text": "access modifiers like public and private. We know that if I mark a field or any class member as private that",
			  "displayTime": 160.307
			},
			{
			  "text": "that field is not available to the code that is outside of this class.",
			  "displayTime": 168.307
			},
			{
			  "text": "That's one way to achieve encapsulation in C#. And anything I make public will be available to anyone who",
			  "displayTime": 172.307
			},
			{
			  "text": "writes code who has an instance of GradeBook around. So we've seen these keywords on class members,",
			  "displayTime": 177.307
			},
			{
			  "text": "but what I didn't tell you is that there are also access modifiers available at the class level.",
			  "displayTime": 183.307
			},
			{
			  "text": "And by default if you don't specify the access level for a class, by default it will be internal,",
			  "displayTime": 189.307
			},
			{
			  "text": "and there's actually a C# keyword that I could place here to make that very explicit.",
			  "displayTime": 195.307
			},
			{
			  "text": "This is an internal class, and internal class can only be used by code that is inside of the same project.",
			  "displayTime": 199.307
			},
			{
			  "text": "So when a grade book is internal, I can use this in other places inside of the same project, so I can use the",
			  "displayTime": 206.307
			},
			{
			  "text": "GradeBook from Program.cs, it's part of the same assembly, but I will not be able to use GradeBook from GradeBookTests.",
			  "displayTime": 212.307
			},
			{
			  "text": "It's essentially hidden from this project. If I want to make GradeBook available, I need to explicitly mark",
			  "displayTime": 220.307
			},
			{
			  "text": "this class as public. That means I can use this GradeBook inside of this assembly, the Grades assembly,",
			  "displayTime": 225.307
			},
			{
			  "text": "as well from any assembly that references the Grades assembly. And yes, Grades is an .exe file,",
			  "displayTime": 232.307
			},
			{
			  "text": "which we don't typically think of as a library that someone else would consume, but in .NET it's perfectly",
			  "displayTime": 238.307
			},
			{
			  "text": "legal to reference a dll or an exe file. So the Test project is referencing the Grades project.",
			  "displayTime": 243.307
			},
			{
			  "text": "It will now have access to this GradeBook class. It will be able to instantiate it except the C# compiler is",
			  "displayTime": 250.307
			},
			{
			  "text": "going to check the access levels of all the classes that are involved with the GradeBook, and you can see",
			  "displayTime": 256.307
			},
			{
			  "text": "right now I have an error. This error is an inconsistent accessibility error.",
			  "displayTime": 261.307
			},
			{
			  "text": "It's telling me that GradeStatistics is less accessible then the method ComputeStatistics.",
			  "displayTime": 265.307
			},
			{
			  "text": "It's a complicated error message, but it's actually easy to reason through this one.",
			  "displayTime": 271.307
			},
			{
			  "text": "ComputeStatistics is available to anyone who has access to a GradeBook, but ComputeStatistics returns an",
			  "displayTime": 275.307
			},
			{
			  "text": "object that is of type GradeStatistics. And if we look at GradeStatistics, the problem is that this class,",
			  "displayTime": 281.307
			},
			{
			  "text": "by default, is an internal class, it's not visible outside of the project, so it doesn't make sense to give",
			  "displayTime": 288.307
			},
			{
			  "text": "access to a method that anyone can use if it returns a type that no one outside can see.",
			  "displayTime": 294.307
			},
			{
			  "text": "And there are a couple of different ways to solve this problem.",
			  "displayTime": 301.307
			},
			{
			  "text": "One way to solve this problem is that I can use that internal keyword to mark just this method as internal,",
			  "displayTime": 302.307
			},
			{
			  "text": "and that means anyone will be able to see this class even outside assemblies, but only code inside of the",
			  "displayTime": 309.307
			},
			{
			  "text": "same assembly will be able to see and invoke this method. But I consider this part of the public API for our",
			  "displayTime": 315.307
			},
			{
			  "text": "GradeBook, and certainly for my unit testing project I want to be able to instantiate a GradeBook and give it",
			  "displayTime": 321.307
			},
			{
			  "text": "some data and then ask it to compute statistics, so I want this to be a public method.",
			  "displayTime": 326.307
			},
			{
			  "text": "And because I'm returning something that is of GradeStatistics, the other way to solve this problem is to",
			  "displayTime": 332.307
			},
			{
			  "text": "make this class public also. Now anyone who references the assembly can reach the GradeBook, they can reach",
			  "displayTime": 338.307
			},
			{
			  "text": "GradeStatistics, they can invoke ComputeStatistics, everything should work for me.",
			  "displayTime": 345.307
			},
			{
			  "text": "So inside of GradeBooksTests all I need now is my namespace, Grades, and I should be able to declare a",
			  "displayTime": 349.307
			},
			{
			  "text": "variable of type GradeBook and instantiate a GradeBook, tell the book to add a grade, let's choose a grade of 10,",
			  "displayTime": 357.307
			},
			{
			  "text": "and let's choose a grade of 90. And now let's get some statistics, so GradeStatistics the result.",
			  "displayTime": 367.307
			},
			{
			  "text": "That is what happens when I call book.ComputeStatistics. And now I want to write an assertion.",
			  "displayTime": 376.307
			},
			{
			  "text": "I want to assert that the following two things are equal: I expect a value of 90 when I ask for result.HighestGrade.",
			  "displayTime": 381.307
			},
			{
			  "text": "And with that assert in place, let me go to Test and say run all the tests, Visual Studio will build the",
			  "displayTime": 393.307
			},
			{
			  "text": "project, and then you'll notice a funny thing here. It doesn't seem to execute the test; it doesn't seem to",
			  "displayTime": 399.307
			},
			{
			  "text": "find that test. Over here it says one test passed, but that was the last test run, and I don't see a test",
			  "displayTime": 405.307
			},
			{
			  "text": "listing in this window. That's because the test runner, it's only going to execute the test code that is",
			  "displayTime": 411.307
			},
			{
			  "text": "inside of a class marked with TestClass, that attribute, and it also has to be a public class.",
			  "displayTime": 417.307
			},
			{
			  "text": "By default this class was internal. It was only visible to code that was inside of the same project.",
			  "displayTime": 424.307
			},
			{
			  "text": "Now I've made it public. Let me try to run the test one more time, and I can see that that test is passing,",
			  "displayTime": 429.307
			},
			{
			  "text": "and my GradeBook is producing the right result. What happens if someone comes into the GradeBook and they",
			  "displayTime": 436.307
			},
			{
			  "text": "manipulate code to the point where the GradeBook no longer works properly?",
			  "displayTime": 442.307
			},
			{
			  "text": "That's when my tests should fail. Slash, Slash, by the way, is a way to comment out a single line of code in",
			  "displayTime": 445.307
			},
			{
			  "text": "C# so it doesn't execute. And now anytime I make changes to ComputeStatistics, I at least of have one test",
			  "displayTime": 451.5
			},
			{
			  "text": "in place that will make sure the GradeBook is doing part of its job correctly.",
			  "displayTime": 459.0
			},
			{
			  "text": "Let's write just a few more tests and see if we can make this a little more robust.",
			  "displayTime": 464.5
			}
		  ]
		},
		{
		  "title": "Tests and Floats",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m3&clip=6&mode=live",
		  "segments": [
			{
			  "text": "Let's write some tests to make sure that the GradeBook is computing the proper lowest grade and proper average grade.",
			  "displayTime": 0.0
			},
			{
			  "text": "To do this, I'm going to make a copy of ComputesHighestGrade by selecting that method, pressing Ctrl+C,",
			  "displayTime": 8.274
			},
			{
			  "text": "and then Ctrl+V to paste it in. Anytime you do a copy, paste operation in code, you should really take a",
			  "displayTime": 14.274
			},
			{
			  "text": "step back and make sure that that's the proper approach to solving a problem.",
			  "displayTime": 19.274
			},
			{
			  "text": "Copy and paste is duplicating code throughout the software, and that's generally something that we try to avoid.",
			  "displayTime": 23.274
			},
			{
			  "text": "However, inside of a unit test we often allow for duplicate code because it makes the tests a little more",
			  "displayTime": 27.274
			},
			{
			  "text": "explicit and clear, and that's what I'm going to do here. I'm going to duplicate a lot of code, but I am",
			  "displayTime": 33.274
			},
			{
			  "text": "also going to change the name of this method because now we're going to check that we compute the lowest grade properly.",
			  "displayTime": 37.274
			},
			{
			  "text": "I'll still add the same grades to the GradeBook, but now I want to have an assertion that 10 is result.LowestGrade.",
			  "displayTime": 43.274
			},
			{
			  "text": "Now I can run all tests by going the test menu or by pressing Ctrl+R and then the A key that will run all tests.",
			  "displayTime": 51.274
			},
			{
			  "text": "And I now have two passing tests. Let me paste a copy of ComputesHighestGrade, which I still have in my",
			  "displayTime": 60.274
			},
			{
			  "text": "clipboard, only this time we will check to see if we compute the average grade.",
			  "displayTime": 67.274
			},
			{
			  "text": "And this time I want to add some slightly different data to the GradeBook to make things a little more interesting.",
			  "displayTime": 73.274
			},
			{
			  "text": "So instead of adding 10 and 90, let's add the same grades that we are adding inside of Program.cs.",
			  "displayTime": 77.274
			},
			{
			  "text": "So I will take that code and copy and paste it inside of here. Then we can compute the statistics,",
			  "displayTime": 87.274
			},
			{
			  "text": "and this time I want to check the result.AverageGrade. And if I enter those results into a calculator,",
			  "displayTime": 93.274
			},
			{
			  "text": "the calculator will tell me that the average of those three numbers is an 85 followed by 1 and then 12 6's,",
			  "displayTime": 100.274
			},
			{
			  "text": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, and then a 7. Let me run all the tests again, Ctrl+R and then A,",
			  "displayTime": 107.274
			},
			{
			  "text": "and I now have a failing test, which will teach us an interesting lesson.",
			  "displayTime": 116.274
			},
			{
			  "text": "Let me click on that test, and I will see that this 85.16 number is not equal to an 85.16 number that is slightly different.",
			  "displayTime": 120.274
			},
			{
			  "text": "And the important lesson is that it's very difficult to make assertions about floating point numbers and say",
			  "displayTime": 129.274
			},
			{
			  "text": "that two numbers are going to be exactly equal because there can always be a little bit of imprecision inside",
			  "displayTime": 134.274
			},
			{
			  "text": "of the computer because of the way that it represents floating point numbers.",
			  "displayTime": 140.274
			},
			{
			  "text": "This could be a topic that we could spend a lot of time on, but let me just show you a couple different solutions.",
			  "displayTime": 144.274
			},
			{
			  "text": "One is you might remember there are two ways to represent a floating point number in C#.",
			  "displayTime": 149.274
			},
			{
			  "text": "There's the double type and there's the float type. Double is double-precision floating-point, and the float",
			  "displayTime": 153.274
			},
			{
			  "text": "type is single-precision floating-point. You might remember from an earlier module when I tried to assign a",
			  "displayTime": 158.274
			},
			{
			  "text": "number like this to a variable of type float the C# compiler wouldn't allow me to do that because by default",
			  "displayTime": 164.274
			},
			{
			  "text": "a number like this will be treated as a double-precision floating-point number.",
			  "displayTime": 169.274
			},
			{
			  "text": "And really what's happening here is I'm comparing a double-precision floating-point number to a single-",
			  "displayTime": 174.274
			},
			{
			  "text": "precision floating-point number, and just like I did in a previous module I could append an f to this literal",
			  "displayTime": 178.274
			},
			{
			  "text": "number, and now at least the C# compiler will treat that as a single-precision floating-point number and",
			  "displayTime": 184.274
			},
			{
			  "text": "compare it to another single-precision floating-point number. But more commonly what you want to do is this:",
			  "displayTime": 189.274
			},
			{
			  "text": "I don't particularly need the GradeBook to store this many digits after the decimal.",
			  "displayTime": 195.274
			},
			{
			  "text": "Perhaps I really only care about two digits after the decimal. And any time you compare floating-point",
			  "displayTime": 200.274
			},
			{
			  "text": "numbers or double-precision floating-point numbers inside of a unit test with things like AreEqual,",
			  "displayTime": 206.274
			},
			{
			  "text": "there's typically an option that allows you to specify are these two numbers close enough?",
			  "displayTime": 211.274
			},
			{
			  "text": "And you can see in this IntelliSense window when I Assert.AreEqual on types of double or of float,",
			  "displayTime": 216.274
			},
			{
			  "text": "I would find that inside of here also. I can specify the expected value, what the actual computed value is,",
			  "displayTime": 221.274
			},
			{
			  "text": "and then a delta, which allows those two numbers to vary by that delta amount.",
			  "displayTime": 228.274
			},
			{
			  "text": "Let me specify a delta of 0.01 and run these tests. And I'm back to three passing tests, and I now know that",
			  "displayTime": 233.274
			},
			{
			  "text": "the GradeBook is going to compute the proper average with the right amount of precision that I need for",
			  "displayTime": 241.274
			},
			{
			  "text": "whatever application that I'm building with this GradeBook.",
			  "displayTime": 246.5
			}
		  ]
		},
		{
		  "title": "Summary",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m3&clip=7&mode=live",
		  "segments": [
			{
			  "text": "In this module we learned that Visual Studio and the C# compiler will compile our code into an assembly.",
			  "displayTime": 0.0
			},
			{
			  "text": "By default the assembly name will have the same name as the project, and then we'll have a dll or exe",
			  "displayTime": 7.541
			},
			{
			  "text": "extension depending on if you were building a class library or a program to execute directly.",
			  "displayTime": 12.541
			},
			{
			  "text": "We also learned that we need more than one assembly for most applications, and we now know how to add",
			  "displayTime": 17.541
			},
			{
			  "text": "references to other assemblies, both .NET assemblies, as well as other assemblies in our solution.",
			  "displayTime": 22.541
			},
			{
			  "text": "In our solution we had to add a reference from the testing project to the grades project so that the test",
			  "displayTime": 28.541
			},
			{
			  "text": "could see the GradeBook. Remember we also had to mark our Grade and our GradeStatistics classes as public so",
			  "displayTime": 32.541
			},
			{
			  "text": "that the test project could use the GradeBook and the statistics that it computes.",
			  "displayTime": 38.541
			},
			{
			  "text": "So in .NET all the types we create will live in an assembly, and the classes that we've built they are one",
			  "displayTime": 43.541
			},
			{
			  "text": "specific type that we can create in .NET. In the next module we'll see additional types that we create and",
			  "displayTime": 49.541
			},
			{
			  "text": "understand two fundamental categories of types in .NET.",
			  "displayTime": 55.541
			}
		  ]
		}
	  ]
	},
	{
	  "title": "Types",
	  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m4&clip=0&mode=live",
	  "clips": [
		{
		  "title": "Introduction",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m4&clip=0&mode=live",
		  "segments": [
			{
			  "text": "Hi, this is Scott Allen, and this module is about the different Types in C#.",
			  "displayTime": 0.0
			},
			{
			  "text": "Specifically I want to make sure that you know how every C# type falls into one of two categories.",
			  "displayTime": 5.0
			},
			{
			  "text": "Every type is either a reference type or a value type, and it's very important to understand how these different types behave.",
			  "displayTime": 11.0
			},
			{
			  "text": "We will look at reference types versus value types and also see how to create these different types of types,",
			  "displayTime": 17.0
			},
			{
			  "text": "all of this and more in this fourth module of the course.",
			  "displayTime": 22.5
			}
		  ]
		},
		{
		  "title": "Reference Types",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m4&clip=1&mode=live",
		  "segments": [
			{
			  "text": "Reference types in C# are types created from class definitions, like the GradeBook that we created in the",
			  "displayTime": 0.483
			},
			{
			  "text": "second module of this course. Any time I write a class I'm creating a new reference type, and we talked a",
			  "displayTime": 6.483
			},
			{
			  "text": "little bit about the behavior of reference types in the second video module.",
			  "displayTime": 11.483
			},
			{
			  "text": "I told you that when I have a variable typed as GradeBook, which is a reference type, the variable holds a",
			  "displayTime": 15.483
			},
			{
			  "text": "reference or a pointer to an object. What's inside the variable is literally an address that tells the",
			  "displayTime": 20.483
			},
			{
			  "text": "runtime where to find the object in memory, and I can have multiple variables all pointing to the exact same",
			  "displayTime": 26.483
			},
			{
			  "text": "object instance, and I can have multiple objects, and I can have multiple variables pointing to all different objects.",
			  "displayTime": 32.483
			},
			{
			  "text": "I can even take a variable and reassign the object that it's referencing, so it points to a new object,",
			  "displayTime": 37.483
			},
			{
			  "text": "a different object then what it started with. Let's do some more experiments in Visual Studio to see how this works.",
			  "displayTime": 44.483
			},
			{
			  "text": "Let's pick up in the grade solution that we were working on in the last two modules, and I want to do a few",
			  "displayTime": 51.483
			},
			{
			  "text": "different experiments with the GradeBook, and before I start what I want to do is temporarily comment out",
			  "displayTime": 56.483
			},
			{
			  "text": "this code so that this code doesn't execute, and there's a couple different ways to comment out these multiple lines.",
			  "displayTime": 61.483
			},
			{
			  "text": "One is I could go to the Edit menu, I can select this command Comment Selection, that will comment out each",
			  "displayTime": 67.483
			},
			{
			  "text": "line of code that I have selected with the curser, and there's a hot key combination that you can use to do",
			  "displayTime": 74.483
			},
			{
			  "text": "that, Ctrl+K, Ctrl+C, I'll select this option, and now if I run the program nothing will happen because I",
			  "displayTime": 78.483
			},
			{
			  "text": "don't really have any substantial code inside of my main method, it's just going to start, and exit,",
			  "displayTime": 85.483
			},
			{
			  "text": "and the program's done, and that's thanks to this single line comment, which is a //.",
			  "displayTime": 89.483
			},
			{
			  "text": "Any where you put a // you can add text, or you can comment out code, or you can have a note about something",
			  "displayTime": 95.483
			},
			{
			  "text": "that is in your code. Another way to do this would be to make it a multiline comment, so first I'm going to",
			  "displayTime": 103.483
			},
			{
			  "text": "uncomment the selection, which is Ctrl+ KU, you can also get to that command from the Edit Advanced menu.",
			  "displayTime": 109.483
			},
			{
			  "text": "And now I'm going to use a /*, this is a multiline comment in C#, everything after /* is going to be",
			  "displayTime": 117.483
			},
			{
			  "text": "commented out and not execute until I put in a */ to end that comment.",
			  "displayTime": 124.483
			},
			{
			  "text": "So now that we have that code marked to not execute, let me go into the GradeBook itself, and I want to give",
			  "displayTime": 130.483
			},
			{
			  "text": "the GradeBook the ability to have a name so I can identify the GradeBooks with some friendly identifier,",
			  "displayTime": 136.483
			},
			{
			  "text": "and one easy way to do that is just to give this class a public field of type string, and let's call it Name.",
			  "displayTime": 142.483
			},
			{
			  "text": "I'll use an uppercase N just because public class members typically start with an uppercase letter,",
			  "displayTime": 152.483
			},
			{
			  "text": "whereas private class members like this grades field, it's going to start with a lowercase G.",
			  "displayTime": 157.483
			},
			{
			  "text": "And now that I have a name let me go into Program.cs, and what I want to do is to create two GradeBooks.",
			  "displayTime": 164.483
			},
			{
			  "text": "We'll call the first GradeBook g1, that's a not a great variable name, but this is just for experimental",
			  "displayTime": 170.483
			},
			{
			  "text": "purposes, I typically want to have a more descriptive name. And then let's create a second variable g2,",
			  "displayTime": 175.483
			},
			{
			  "text": "and give it a copy of what is in g1 because GradeBook is a class, and it's a reference type.",
			  "displayTime": 182.483
			},
			{
			  "text": "The value that is inside of that g1 variable is going to be a pointer, so I'm copying that pointer from g1",
			  "displayTime": 188.483
			},
			{
			  "text": "into g2, and that means if I set the name of the GradeBook through the g1 variable, and let's call it Scott's",
			  "displayTime": 194.483
			},
			{
			  "text": "grade book, and then I Console.write g2.Name. What I should see when I run this program by hitting Ctrl+F5 is Scott's GradeBook.",
			  "displayTime": 203.483
			},
			{
			  "text": "That's because I have two variables that are pointing to the exact same GradeBook object.",
			  "displayTime": 214.483
			},
			{
			  "text": "Now if I exit this command prompt, and I come into the program, and just before assigning name I say g1",
			  "displayTime": 219.483
			},
			{
			  "text": "equals another new grade book, now if I run the program when I write out g2.Name I don't have any output,",
			  "displayTime": 225.483
			},
			{
			  "text": "that's because there are two GradeBook objects floating around in memory, and by the time we reach this",
			  "displayTime": 234.483
			},
			{
			  "text": "g1.Name line of code, g1 is pointing to a different GradeBook than g2, g2 is still pointing to this original",
			  "displayTime": 239.483
			},
			{
			  "text": "GradeBook, which we haven't given a name. Now one way to do these types of experiments is just to write some",
			  "displayTime": 245.483
			},
			{
			  "text": "code inside of a console application, and run the program, and look at the output.",
			  "displayTime": 250.483
			},
			{
			  "text": "That can be useful, and it's a good way to learn C#, and some of the topics like we're talking about now,",
			  "displayTime": 254.483
			},
			{
			  "text": "reference types, how do they behave, but an even better way to do this I think is to use unit tests.",
			  "displayTime": 258.483
			},
			{
			  "text": "Generally you're going to write unit tests to prove the correctness of your program, and make sure it's",
			  "displayTime": 265.483
			},
			{
			  "text": "behaving correctly, but when I'm learning a topic like a new library, or a new API, or a new language,",
			  "displayTime": 269.483
			},
			{
			  "text": "I find unit tests to be an invaluable way to create some experiments, and test some hypotheses, and see if my",
			  "displayTime": 276.483
			},
			{
			  "text": "understanding of a particular behavior is correct. Since we already have a unit testing project that we",
			  "displayTime": 283.483
			},
			{
			  "text": "created in the last module, Grades.Test, let's take advantage of that, and put some code inside of here that",
			  "displayTime": 287.483
			},
			{
			  "text": "is really code that you can use to test yourself and experiment with the language.",
			  "displayTime": 293.483
			},
			{
			  "text": "I'm going to Add a New Folder to this test project, and I will give it the name Types, and I can place all of",
			  "displayTime": 297.483
			},
			{
			  "text": "the C# code related to my experiments with reference types inside of this folder, as well as other types that",
			  "displayTime": 306.483
			},
			{
			  "text": "we're going to be creating, so inside of here let me add a Class, and let's just call this ReferenceTypeTests.",
			  "displayTime": 311.483
			},
			{
			  "text": "I'll click Add, Visual Studio will add a class for me. Remember I want to make this a public class,",
			  "displayTime": 320.483
			},
			{
			  "text": "and I want to give this class the attribute TestClass, which means I need to bring in the namespace,",
			  "displayTime": 327.483
			},
			{
			  "text": "which is Microsoft.VisualStudio.TestTools.UnitTesting. Any this light bulb appears you can open up that",
			  "displayTime": 334.483
			},
			{
			  "text": "light bulb by pressing Ctrl and period. That's really handy if you want to keep your hands-on the keyboard",
			  "displayTime": 342.483
			},
			{
			  "text": "and not use the mouse to select the light bulb. I'm going to press Ctrl+ period, I'm going to select the",
			  "displayTime": 347.483
			},
			{
			  "text": "first option here by just pressing Enter, which is to add that namespace to the top of the file for me,",
			  "displayTime": 352.483
			},
			{
			  "text": "and now I can write a TestMethod, so first the attribute TestMethod, and this will be a public void returning",
			  "displayTime": 358.483
			},
			{
			  "text": "method, let's call it VariablesHoldAReference, and now let me go back to Program.cs, select this code that I",
			  "displayTime": 366.483
			},
			{
			  "text": "have here, and cut it out, come back into my Test, and paste it in, and really what I want to do in this Test",
			  "displayTime": 376.483
			},
			{
			  "text": "is just some experiments, so my first experiment will be I want to instantiate a new GradeBook, I want to",
			  "displayTime": 384.483
			},
			{
			  "text": "have two variables that I think are pointing to the same GradeBook, so I'll set the name through one",
			  "displayTime": 389.483
			},
			{
			  "text": "variable, g1, and then I want to make an assertion, I want to Assert that the following two things are equal,",
			  "displayTime": 395.483
			},
			{
			  "text": "I want to assert that g1's name, which I just set, is the same as g2's name because g2 is pointing to the",
			  "displayTime": 402.483
			},
			{
			  "text": "same object, and when I look at g2.Name I will see that the name has been set by that previous line of code,",
			  "displayTime": 410.483
			},
			{
			  "text": "and now back in the program I just want to clean things up a little bit, so let's get rid of our",
			  "displayTime": 416.483
			},
			{
			  "text": "console.write line here, and let me get rid of the comment so that we put our program back in a correct state.",
			  "displayTime": 421.483
			},
			{
			  "text": "I'm not interested in running the program right now, I'm more interested in running this test, so let me hit",
			  "displayTime": 427.483
			},
			{
			  "text": "Ctrl+R and then A, and our Test Explorer pops up, and I can see that test passed, so my understanding of",
			  "displayTime": 433.483
			},
			{
			  "text": "reference types seems to be working. Now what you can do inside of this Test Project is do different",
			  "displayTime": 441.483
			},
			{
			  "text": "experiments with different variables, and write some assertions based on what you believe should happen,",
			  "displayTime": 446.483
			},
			{
			  "text": "and then run the test to see if your beliefs are true. We'll continue writing some tests throughout the rest module also.",
			  "displayTime": 452.483
			}
		  ]
		},
		{
		  "title": "Value Types",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m4&clip=2&mode=live",
		  "segments": [
			{
			  "text": "As I mentioned earlier, every type in .NET falls into one of two categories. Every time is either a",
			  "displayTime": 0.0
			},
			{
			  "text": "reference type or a value type. A variable that is typed as a value type does not hold a memory address or a",
			  "displayTime": 6.715
			},
			{
			  "text": "pointer, it holds a value itself. For example, integers and floats are value types in .NET.",
			  "displayTime": 13.715
			},
			{
			  "text": "If I have a variable called x1, and it's of type int, and I use it as a variable inside of a method,",
			  "displayTime": 20.715
			},
			{
			  "text": "if I give that variable the value 100, the value 100 is literally stored inside the memory location of variable x1.",
			  "displayTime": 25.715
			},
			{
			  "text": "There's no pointer here, the value is wholly inside that variable.",
			  "displayTime": 32.715
			},
			{
			  "text": "I can have another variable of type int, let's call it x2, and I can assign it the value 4, and that value 4",
			  "displayTime": 35.715
			},
			{
			  "text": "is inside the variable, this is unlike the GradeBook variables we've created, g1 and g2,",
			  "displayTime": 40.715
			},
			{
			  "text": "because those variables hold pointers to an object. Now why do we have these two different types?",
			  "displayTime": 46.715
			},
			{
			  "text": "Well value types exist because they are generally faster to allocate in memory than reference types,",
			  "displayTime": 51.715
			},
			{
			  "text": "that's one reason for the distinction. Creating an object is more expensive than creating a value type like",
			  "displayTime": 56.715
			},
			{
			  "text": "an integer, and some programs need lots of value types to exist, millions of number for example in a mathematically-oriented program.",
			  "displayTime": 62.715
			},
			{
			  "text": "So value types are very fast, and they are also usually small. It takes a lot less memory to store an",
			  "displayTime": 70.715
			},
			{
			  "text": "integer than it does to store an entire GradeBook. Many primitive types in .NET are value types,",
			  "displayTime": 74.715
			},
			{
			  "text": "primitive types being those low-level primitives that we can't program without, types like integers and",
			  "displayTime": 80.715
			},
			{
			  "text": "floating point numbers, these are small values that store themselves directly in a variable.",
			  "displayTime": 85.715
			},
			{
			  "text": "And one thing we'll revisit later is that value types are typically immutable, meaning you cannot change the",
			  "displayTime": 90.715
			},
			{
			  "text": "value of a value type. That doesn't mean I cannot change the value inside of a variable, I can always walk",
			  "displayTime": 95.715
			},
			{
			  "text": "up to an integer variable named x2 and give it a different value, I could change it from a 4 to a 3,",
			  "displayTime": 102.715
			},
			{
			  "text": "but that value 4 and that value 3, those values I cannot change, the value 4 is always the value 4,",
			  "displayTime": 108.715
			},
			{
			  "text": "the value 3 is always the value 3. And an obvious question at this point would be how do you know when",
			  "displayTime": 114.715
			},
			{
			  "text": "you're working with a value type, and how do you know when you're working with a reference type, and how do",
			  "displayTime": 119.715
			},
			{
			  "text": "you create your own value types, we've seen how to create reference types.",
			  "displayTime": 123.715
			},
			{
			  "text": "Any time we create a class like the GradeBook we're creating a reference type, but what about value types,",
			  "displayTime": 127.715
			},
			{
			  "text": "we'll answer these questions very soon, but first let's jump into Visual Studio, and do some more experiments.",
			  "displayTime": 132.715
			},
			{
			  "text": "Inside of Visual Studio we're doing some experiments with types inside of unit tests, and so far we've",
			  "displayTime": 137.715
			},
			{
			  "text": "written a test that says variables hold a reference, but now we know this is only true if the variable is",
			  "displayTime": 143.715
			},
			{
			  "text": "typed as a reference type, which is the case for GradeBook, it's a reference type.",
			  "displayTime": 149.715
			},
			{
			  "text": "So let's be a little more explicit with this test name, and say that GradeBookVariablesHoldAReference,",
			  "displayTime": 153.715
			},
			{
			  "text": "and now write a test that looks very similar, but with a value type.",
			  "displayTime": 159.715
			},
			{
			  "text": "I'm going to create a new test by using a code snippet, we've use d code snippets before, in this case the",
			  "displayTime": 163.715
			},
			{
			  "text": "code snippet is testm, I just need to type those characters, and press Tab twice, Visual Studio will generate",
			  "displayTime": 168.715
			},
			{
			  "text": "a test method for me, so press Tab twice, and now after inserting the snippet the name of this method is",
			  "displayTime": 175.715
			},
			{
			  "text": "selected by the editor, I can immediately start typing to change the name, so let's name this method IntVariablesHoldavalue.",
			  "displayTime": 180.715
			},
			{
			  "text": "And I want to write a test that is very similar to our other test, I want to create one variable,",
			  "displayTime": 189.715
			},
			{
			  "text": "let's call it x1, and we'll give it the value 100, create a second variable x2, and copy the value that is",
			  "displayTime": 195.715
			},
			{
			  "text": "inside of x1 into x2. We did the same thing with the GradeBook, but in the case of the GradeBook the value",
			  "displayTime": 201.715
			},
			{
			  "text": "that is inside the variable is a pointer, so with GradeBooks we have two variables pointing to the same object.",
			  "displayTime": 207.715
			},
			{
			  "text": "The question is with integers, if I make a change to x1, and give it the value 4, can I still assert that x1",
			  "displayTime": 213.715
			},
			{
			  "text": "and x2 are equal? Let's press Ctrl+ RA to run all the tests and find out, and the answer is no,",
			  "displayTime": 222.715
			},
			{
			  "text": "that test failed because x1 now holds the value 4, x2 still holds the value 100 that I copied into it.",
			  "displayTime": 231.715
			},
			{
			  "text": "So with the GradeBook variables I can point two variables to the same object, and then make a change to that",
			  "displayTime": 239.715
			},
			{
			  "text": "object through either of those variables, and the change will be visible through the other variable,",
			  "displayTime": 244.715
			},
			{
			  "text": "but that's not the case with value types. If I copy a different value into the x2 variable,",
			  "displayTime": 248.715
			},
			{
			  "text": "that's completely independent from the storage location of x1, so I don't see that change reflected here,",
			  "displayTime": 253.715
			},
			{
			  "text": "I would have to assert that these two are not equal, and then run the test, it should pass, which it does.",
			  "displayTime": 258.715
			},
			{
			  "text": "Now if you want a good exercise to test yourself and really grasp this concept of reference types versus",
			  "displayTime": 268.715
			},
			{
			  "text": "values types, try to figure out what would happen if I add this line of code inside of GradeBookVariablesHoldAReference.",
			  "displayTime": 274.715
			},
			{
			  "text": "I'm going to say just before assigning g1.Name g1 equals a new GradeBook.",
			  "displayTime": 280.715
			},
			{
			  "text": "What you should do is pause the video, and then think about if any other changes are required inside of this",
			  "displayTime": 286.715
			},
			{
			  "text": "test method to make the test pass. That is do you have to change the assert from are equal to are not equal?",
			  "displayTime": 291.715
			},
			{
			  "text": "And hopefully you have tried that, hopefully you came up with the correct answer.",
			  "displayTime": 299.715
			},
			{
			  "text": "The correct answer is that I would have to change the assert because I have assigned a new value into g1,",
			  "displayTime": 302.715
			},
			{
			  "text": "I have given it a pointer to a new GradeBook, a second GradeBook object.",
			  "displayTime": 307.715
			},
			{
			  "text": "I'm changing the name of that second GradeBook, but g2 is still pointing to the first GradeBook that I",
			  "displayTime": 312.715
			},
			{
			  "text": "created, therefore that first GradeBook doesn't have a name, and that assert.AreEqual g1.Name, g2.Name, that would fail.",
			  "displayTime": 317.715
			},
			{
			  "text": "So these are the kinds of tests and experiments that you can do inside of Visual Studio with unit tests to",
			  "displayTime": 326.715
			},
			{
			  "text": "really see if you are understanding some of the language concepts and features.",
			  "displayTime": 330.715
			},
			{
			  "text": "And now that we've seen how these two behave, let's answer those questions of how do I know I'm working with",
			  "displayTime": 334.715
			},
			{
			  "text": "a value type, and how do I create a value type.",
			  "displayTime": 339.715
			}
		  ]
		},
		{
		  "title": "struct and enum",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m4&clip=3&mode=live",
		  "segments": [
			{
			  "text": "One way to create a value type with C# is to create a structure using the struct keyword.",
			  "displayTime": 1.5
			},
			{
			  "text": "A struct definition looks just like a class definition. A struct has a name, it has an opening and a closing",
			  "displayTime": 7.106
			},
			{
			  "text": "curly brace, and everything inside of those braces will be a member of the structure.",
			  "displayTime": 12.106
			},
			{
			  "text": "You can even apply an access modifier like public or internal, really the only syntactical difference is the",
			  "displayTime": 16.106
			},
			{
			  "text": "keyword that's being used, struct or class, which leads to the next obvious question, when should I write a",
			  "displayTime": 23.106
			},
			{
			  "text": "struct, and when should I write a class. The general rule of thumb is that you want to write a class by default.",
			  "displayTime": 28.106
			},
			{
			  "text": "Structs are meant for special cases when you need to write an abstraction that represents a single value,",
			  "displayTime": 32.106
			},
			{
			  "text": "like a DateTime that is inside of the .NET Framework that represents a single value even though you can break",
			  "displayTime": 37.106
			},
			{
			  "text": "a DateTime down into small constituent pieces like the current hour, or the current day, or the current year,",
			  "displayTime": 43.106
			},
			{
			  "text": "a DateTime does represent something that we can reason about as a single value, and it's a value that",
			  "displayTime": 49.106
			},
			{
			  "text": "represents a point in time. Other value types in the .NET Framework, types like int, very obviously hold",
			  "displayTime": 54.106
			},
			{
			  "text": "only a single value, but over the years I've built many custom value types using struct, and I've done this",
			  "displayTime": 61.106
			},
			{
			  "text": "to represent things like complex numbers, or a point in two or three demential space, or a currency amount,",
			  "displayTime": 65.106
			},
			{
			  "text": "which consists of a monetary value and a currency symbol, all of those abstractions represent single values",
			  "displayTime": 72.106
			},
			{
			  "text": "conceptually, and the other characteristic that those value types have in common is that they are all small.",
			  "displayTime": 78.106
			},
			{
			  "text": "Structs do best when they contain a small amount of data because as we'll see value types get copied around in memory frequently.",
			  "displayTime": 83.106
			},
			{
			  "text": "A value type like int in C#, that not only requires 4 bytes of data to store, and most CPUs will copy that data",
			  "displayTime": 89.5
			},
			{
			  "text": "just using a single CPU cycle, but more on that later. Another way to create a value type in C# is to use the enum keyword.",
			  "displayTime": 96.106
			},
			{
			  "text": "An enum creates a type that will only hold specific numerical values.",
			  "displayTime": 105.106
			},
			{
			  "text": "An enum, which is short for enumeration, and it's a good way to create named constants in your software.",
			  "displayTime": 108.106
			},
			{
			  "text": "So here's a scenario, let's say we're building an application to pay employees, and we already have an employee class.",
			  "displayTime": 114.106
			},
			{
			  "text": "One attribute we need to tract for each employee is how they are paid, are they paid on an hourly basis,",
			  "displayTime": 121.106
			},
			{
			  "text": "are they salaried, are they an executive, one way to represent those categories would be to give each",
			  "displayTime": 126.106
			},
			{
			  "text": "category a number, so an hourly employee has a payroll type of 4, and a salaried employee has a payroll type of 2.",
			  "displayTime": 132.106
			},
			{
			  "text": "The problem is if we actually use those numbers in our source code they become what we call magic numbers.",
			  "displayTime": 139.106
			},
			{
			  "text": "You look at the source code and you see a 2, what does that represent, is that employee hourly or salaried,",
			  "displayTime": 144.106
			},
			{
			  "text": "I'm not sure, those are the types of things that you forget about 24 hours after you write the code.",
			  "displayTime": 150.106
			},
			{
			  "text": "An enum can turn those magical numbers into symbols, so instead of using the value 4 for an hourly employee,",
			  "displayTime": 154.106
			},
			{
			  "text": "I can use the code Payroll.Type.Hourly, so an enum isn't something that I have to instantiate to use,",
			  "displayTime": 160.106
			},
			{
			  "text": "I can just use the name of the enum, and then one of the members of the enum that I have defined like",
			  "displayTime": 167.106
			},
			{
			  "text": ".constractor, .salaried, and so forth. So in the if statement we're looking at using an employee object,",
			  "displayTime": 172.106
			},
			{
			  "text": "every employee object has a field named Role that is defined of type PayrollType, so instead of saying",
			  "displayTime": 178.106
			},
			{
			  "text": ".Role=2 or .Role=3, I can involve this enum, and the code is a little bit clear.",
			  "displayTime": 186.106
			},
			{
			  "text": "Defining an enum is very simple, you use the enum keyword, give the enum a name, there's an opening and",
			  "displayTime": 190.106
			},
			{
			  "text": "closing curly brace just like a class, but what is inside are your symbols.",
			  "displayTime": 196.106
			},
			{
			  "text": "Here we have Contractor, Salaried, Executive, and Hourly. By default the first entry in an enum will carry",
			  "displayTime": 201.106
			},
			{
			  "text": "the value 0 because behind the scenes this enum is represented as an integer value like 1, or 2, or 3.",
			  "displayTime": 207.106
			},
			{
			  "text": "Inside the enum you can explicitly assign values as we've done here when we say Contractor = 1.",
			  "displayTime": 214.106
			},
			{
			  "text": "What the C# complier will do is automatically assign the next numerical value if I don't explicitly provide",
			  "displayTime": 219.106
			},
			{
			  "text": "one, so Salaried would be a 2, Executive would be a 3, Hourly would be a 4, and this code we'll just use the",
			  "displayTime": 225.106
			},
			{
			  "text": "defaults there, but we could've explicitly overwritten that and said hourly = 128 if we wanted to.",
			  "displayTime": 232.106
			},
			{
			  "text": "Let's take a look at this in code.",
			  "displayTime": 238.106
			},
			{
			  "text": "In Visual Studio let me first show you an easy way to figure out if you're working with a reference type or a value type.",
			  "displayTime": 241.106
			},
			{
			  "text": "When I declare a variable like g1, which is of type GradeBook, how do I know that's a reference type?",
			  "displayTime": 246.106
			},
			{
			  "text": "One way to do this is to put the curse on the GradeBook symbol and use the F12 key, we've used this before,",
			  "displayTime": 252.106
			},
			{
			  "text": "that will take me to the source code if Visual Studio has the source code available, and when I come to the",
			  "displayTime": 258.106
			},
			{
			  "text": "source code for GradeBook I can see it's defined as a class, therefore this is a reference type, and g1 will hold a pointer.",
			  "displayTime": 263.106
			},
			{
			  "text": "What about integers? I can use the same trick here. I can press F12, integer is part of the .NET Framework,",
			  "displayTime": 269.106
			},
			{
			  "text": "but what Visual Studio will do is recreate the structure of that type from metadata, so this is the metadata",
			  "displayTime": 275.106
			},
			{
			  "text": "view we used this earlier in the course. We can see that his is part of MSCorLib.",
			  "displayTime": 281.106
			},
			{
			  "text": "So that's where the int type lives. Now you'll notice the actual name of this type is system.In32,",
			  "displayTime": 286.106
			},
			{
			  "text": "it's not int, and that's just because in C# int is a C# keyword that will give you an in32, so I could define",
			  "displayTime": 291.106
			},
			{
			  "text": "these variables using either the C# keyword int or the type system.in32, it's all going to come out the same",
			  "displayTime": 299.106
			},
			{
			  "text": "in the end, those two are completely equivalent. I prefer to use the C# keyword int, but you can see here",
			  "displayTime": 307.106
			},
			{
			  "text": "that int, AKA an in32, it is a struct, therefore an int is a value type.",
			  "displayTime": 313.106
			},
			{
			  "text": "If I looked at the DateTime type in .NET I would see it as also a struct, and this metadata view, by the way,",
			  "displayTime": 320.106
			},
			{
			  "text": "can be very useful if you're trying to figure out what something can do for you, I can look at this in32",
			  "displayTime": 324.106
			},
			{
			  "text": "type, and I can see that I can convert an int to a string, I can compare integer values, I can parse an",
			  "displayTime": 330.106
			},
			{
			  "text": "integer out of a string, we will look at some of those features later in the course.",
			  "displayTime": 335.106
			},
			{
			  "text": "For right now I'd also like to show you how to write or use an enum that's built-in to the .NET Framework,",
			  "displayTime": 339.106
			},
			{
			  "text": "so let me create a new test method. This time what we're going to be experimenting with is StringComparisons.",
			  "displayTime": 346.106
			},
			{
			  "text": "So first I'll declare a variable, let's call it name1, and it's going to point to value Scott with an uppercase S.",
			  "displayTime": 352.106
			},
			{
			  "text": "So is string a value type or a reference type in .NET? If I press F12 I can see clearly that string is a",
			  "displayTime": 359.106
			},
			{
			  "text": "reference type, don't let anyone ever tell you anything different, however string is a little bit magical,",
			  "displayTime": 365.106
			},
			{
			  "text": "and we'll talk about that later in this module. So string is a reference type, name1 points to the string Scott.",
			  "displayTime": 371.106
			},
			{
			  "text": "Let me also declare name 2, and I want this to point to scott, but without an uppercase S, and now what I'd",
			  "displayTime": 377.106
			},
			{
			  "text": "like to do is do a StringComparison that will tell me these two strings are equivalent, so I need to do a",
			  "displayTime": 385.106
			},
			{
			  "text": "StringComparison that ignores the case of the individual characters, so an uppercase S should be equivalent",
			  "displayTime": 390.106
			},
			{
			  "text": "to a lowercase S. Let me declare another variable of type bool, so we can hold the value true or false.",
			  "displayTime": 396.106
			},
			{
			  "text": "What is bool by the way? Bool, also a value type, it's a struct. I'm going to say that result =",
			  "displayTime": 402.106
			},
			{
			  "text": "String.Equals, and I want to compare name1 and name 2, and there's an optional third parameter here where I",
			  "displayTime": 411.106
			},
			{
			  "text": "can specify the type of StringComparison to do, and StringComparison is an enum, so if I say",
			  "displayTime": 418.106
			},
			{
			  "text": "StringComparison., Visual Studio will show me the various StringComparisions I can do.",
			  "displayTime": 423.106
			},
			{
			  "text": "I can compare strings and take into effect the CurrentCulture, my CurrentCulture is set up for English.",
			  "displayTime": 428.106
			},
			{
			  "text": "I can also ask for InvariantCulture, so it doesn't matter whether my machine is set up for English,",
			  "displayTime": 435.106
			},
			{
			  "text": "or Spanish, or French, or Norwegian, and I'm going to select this option, InvariantCultureIgnoreCase.",
			  "displayTime": 439.106
			},
			{
			  "text": "And I want to assert it IsTrue this result because if I'm ignoring the case when I compare these two strings",
			  "displayTime": 445.106
			},
			{
			  "text": "I should get a true out, and I now have six passing tests, so that has worked.",
			  "displayTime": 454.106
			},
			{
			  "text": "Let's press F12 on StringComparison, and go to the metadata view, and here I can see how that enum is defined.",
			  "displayTime": 459.106
			},
			{
			  "text": "I'm using StringComparison.InvarientCultureIgnoreCase, which holds the value 3, that would actually be the",
			  "displayTime": 465.106
			},
			{
			  "text": "value that's passed around behind the scenes, but if I try to put a 3 in here you'll notice I do get the red",
			  "displayTime": 472.106
			},
			{
			  "text": "underline, which indicates there is an error, so even though that underlying value is a 3, I cannot pass the",
			  "displayTime": 478.106
			},
			{
			  "text": "integer value 3 into this method. The C# complier wants to see something that is one of these StringComparison values.",
			  "displayTime": 484.106
			},
			{
			  "text": "That's another benefit of using strong typing and using enums instead of just magic numbers.",
			  "displayTime": 491.106
			},
			{
			  "text": "And speaking of passing parameters to a method, another topic that we want to make that we're comfortable",
			  "displayTime": 497.106
			},
			{
			  "text": "with is how these different types, these reference types or value types, how they behave when we pass them to another method.",
			  "displayTime": 502.106
			}
		  ]
		},
		{
		  "title": "Passing Parameters",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m4&clip=4&mode=live",
		  "segments": [
			{
			  "text": "Understanding the difference between how reference types and value types behave becomes extremely important",
			  "displayTime": 0.0
			},
			{
			  "text": "when you write methods and pass parameters to a method. In C# the default is to pass parameters by value.",
			  "displayTime": 7.0
			},
			{
			  "text": "This means when you call a method that takes a parameter, by default the value in the variable you pass will",
			  "displayTime": 13.789
			},
			{
			  "text": "be copied into the variable that is a parameter to the method, and what you pass is always a copy unless you",
			  "displayTime": 18.789
			},
			{
			  "text": "add some additional keywords, which we will talk about, but you hardly ever want to use these keywords,",
			  "displayTime": 25.789
			},
			{
			  "text": "you want to use the default of pass by value, and that means for reference types you are passing a copy of a",
			  "displayTime": 30.789
			},
			{
			  "text": "reference, a copy of the pointer that is inside the variable, and when I pass a value type to a method,",
			  "displayTime": 36.789
			},
			{
			  "text": "a value type like an int, or a double float, or DateTime, I am passing a copy of the value, a copy of the",
			  "displayTime": 42.789
			},
			{
			  "text": "value that is inside the variable. So if I have a method that takes a GradeBook parameter, and I pass the",
			  "displayTime": 48.789
			},
			{
			  "text": "method of variable from my code, the method gets a copy of the pointer to a GradeBook, so both the calling",
			  "displayTime": 55.789
			},
			{
			  "text": "code and the method that is being called, they will both have pointers to the exact same object, and this has",
			  "displayTime": 61.789
			},
			{
			  "text": "profound implications for what happens inside the method, and what changes I can see when a method exits and",
			  "displayTime": 66.789
			},
			{
			  "text": "returns control to the caller. Let's take a look in Visual Studio.",
			  "displayTime": 73.789
			},
			{
			  "text": "Inside of our testing project we're really branching out beyond just reference type tests, so let's rename",
			  "displayTime": 77.789
			},
			{
			  "text": "our test class to just TypeTests. The name of a test class really doesn't matter except in the output of the",
			  "displayTime": 83.789
			},
			{
			  "text": "test explorer, and what I want to do now is write a couple test methods that I can use to explore the",
			  "displayTime": 89.789
			},
			{
			  "text": "difference between value types and reference types when it comes to calling methods.",
			  "displayTime": 94.789
			},
			{
			  "text": "The truth is there really is no difference, we're always passing something by value, but behavior may appear",
			  "displayTime": 99.789
			},
			{
			  "text": "differently, let's just take a look. Let me create another test method with a code snippet, and let's name",
			  "displayTime": 103.789
			},
			{
			  "text": "this method ReferenceTypesPassByValue, and what I want inside of here is code that is similar to some of the",
			  "displayTime": 108.789
			},
			{
			  "text": "other code that we've written. I want to create a new GradeBook, and I want to have two variables that point",
			  "displayTime": 115.789
			},
			{
			  "text": "to that GradeBook, so book2 will equal book1, what is this line of code doing, it's copying the reference",
			  "displayTime": 122.789
			},
			{
			  "text": "that is inside of book1 into book2, so now I have two variables both pointing to the same object,",
			  "displayTime": 128.789
			},
			{
			  "text": "and now let's call a method. I'm going to write a private method, GiveBookAName.",
			  "displayTime": 133.789
			},
			{
			  "text": "Since this method is private and doesn't have a test method attribute, it's not going to be a method that the",
			  "displayTime": 139.789
			},
			{
			  "text": "test runner tries to invoke to see if something is going to pass or fail, and simply a method that I can use",
			  "displayTime": 145.789
			},
			{
			  "text": "inside of my tests, and this method I want it to take a GradeBook parameter, and I want it to set the name of",
			  "displayTime": 150.789
			},
			{
			  "text": "the GradeBook, so book.Name = A GradeBook, and so back in my test method I want to invoke this method,",
			  "displayTime": 156.789
			},
			{
			  "text": "GiveBookAName, I want to pass in book2, and then I want to write an assertion that will pass that will look",
			  "displayTime": 166.789
			},
			{
			  "text": "at book1's name, and I'm going to paste in that string A GradeBook. We're going to see if book1.Name is",
			  "displayTime": 174.789
			},
			{
			  "text": "equal to a GradeBook, Ctrl+ RA to run all the tests, and I now have seven passing tests, so I can see that",
			  "displayTime": 182.789
			},
			{
			  "text": "test worked because when I invoke GiveBookAName, the value inside of book2 is copied into the parameter book,",
			  "displayTime": 191.789
			},
			{
			  "text": "and that value is a pointer, so there is a period of time during the execution of these tests where I have",
			  "displayTime": 200.789
			},
			{
			  "text": "three variables that are pointing to the same GradeBook object, book1, book2, and this parameter book,",
			  "displayTime": 207.789
			},
			{
			  "text": "and any changes that I make to the GradeBook through any of those variables, they will be visible if I look",
			  "displayTime": 213.789
			},
			{
			  "text": "at that object through any of the other variables. Now let's try a similar experiment, but with value types.",
			  "displayTime": 219.789
			},
			{
			  "text": "So let me create a test method, we'll call it ValueTypesPassedByValue, and in this method I want to just try",
			  "displayTime": 226.789
			},
			{
			  "text": "some things with a simple integer value, so let's say that x = 46, and again let me create a private method,",
			  "displayTime": 233.789
			},
			{
			  "text": "let's say that we'll increment a number that is passed in, so this method expects an integer parameter,",
			  "displayTime": 241.789
			},
			{
			  "text": "we can call it the number, and all I will do inside of here is say number = number + 1.",
			  "displayTime": 247.789
			},
			{
			  "text": "Another way to write that in C# is to say number += 1, so that's a way of saying take this value, add 1 to",
			  "displayTime": 255.789
			},
			{
			  "text": "it, and assign it back to the variable. And now the question is inside of this test method is I invoke",
			  "displayTime": 262.789
			},
			{
			  "text": "IncrementNumber, and I pass in x, should I assert that x is a 46 or a 47, let's say that we expect a 46 to be",
			  "displayTime": 268.789
			},
			{
			  "text": "the value inside of x, I will run all the tests, and that is also one of my passing tests.",
			  "displayTime": 281.789
			},
			{
			  "text": "So what is happening here is that I take this 46 that is inside of x, it's being copied into number when I",
			  "displayTime": 289.789
			},
			{
			  "text": "invoke method, but since this is a copy of that value I can make any changes that I want with this number variable.",
			  "displayTime": 296.789
			},
			{
			  "text": "I can add 1, subtract 1, divide by 3, multiple by 6, it really doesn't matter what I do to this number inside of here.",
			  "displayTime": 303.789
			},
			{
			  "text": "The changes I make are only visible inside of the code that is inside of IncrementNumber, it just has a copy",
			  "displayTime": 311.789
			},
			{
			  "text": "of that integer value, there's nothing I can do with number that could make a change that would be visible",
			  "displayTime": 317.789
			},
			{
			  "text": "from the code inside of ValueTypesPassByValue, and if that's a little bit confusing that's okay,",
			  "displayTime": 322.789
			},
			{
			  "text": "it takes some time for this to sink in, and that's one of the reasons that I wanted you to set up a unit test",
			  "displayTime": 327.789
			},
			{
			  "text": "project so you could explore some different scenarios with PassByValue, and write some tests, and see what",
			  "displayTime": 333.789
			},
			{
			  "text": "tests pass, and what tests fail, and become more comfortable with this behavior, but one thing that might",
			  "displayTime": 338.789
			},
			{
			  "text": "make this a little bit more clear is this, the only reason that I can call GiveBookAName, and see changes to",
			  "displayTime": 343.789
			},
			{
			  "text": "A GradeBook object from outside of this method is because I am working with a reference type, and I have a",
			  "displayTime": 349.789
			},
			{
			  "text": "reference to an object, and I'm making to the estate of some object, and that change is visible because",
			  "displayTime": 355.789
			},
			{
			  "text": "there's three different variables that can all hold a pointer to that same object, but just like with the",
			  "displayTime": 362.789
			},
			{
			  "text": "integer experiment above, there's no change that I can make to this book variable itself that would change",
			  "displayTime": 366.789
			},
			{
			  "text": "the value that is inside of book1 or book2. So for example, down here if I said book = new GradeBook,",
			  "displayTime": 372.789
			},
			{
			  "text": "this is not going to change the pointer or the reference inside of book2, it's only going to change the value",
			  "displayTime": 382.789
			},
			{
			  "text": "that is stored inside of this book variable inside of GiveBookAName, so that particular variable will be",
			  "displayTime": 389.789
			},
			{
			  "text": "pointing to a new GradeBook, but the variables that are back in the calling method, book1 and book2,",
			  "displayTime": 395.789
			},
			{
			  "text": "they won't be changed at all, and if I run this test I will find I have a failing test because we will no",
			  "displayTime": 401.789
			},
			{
			  "text": "longer be setting the name of this GradeBook that we created, we're creating a second GradeBook and setting its name.",
			  "displayTime": 407.789
			},
			{
			  "text": "So the way to think about this really is that both tests demonstrate that C# uses PassByValue, and in both",
			  "displayTime": 414.789
			},
			{
			  "text": "cases when I pass a parameter to a method, there's no way that the method that I call can make a change to",
			  "displayTime": 420.789
			},
			{
			  "text": "the value that I hold inside of my variable, but if what I'm holding is a pointer to an object,",
			  "displayTime": 427.789
			},
			{
			  "text": "that method can always make changes to an object that are visible to me as a caller.",
			  "displayTime": 433.789
			},
			{
			  "text": "Now there is a way in C# to make changes to the variable, the value of that variable when I invoke a method,",
			  "displayTime": 437.789
			},
			{
			  "text": "it's a rare scenario, but let's talk about that next.",
			  "displayTime": 445.789
			}
		  ]
		},
		{
		  "title": "ref and out",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m4&clip=5&mode=live",
		  "segments": [
			{
			  "text": "In C# there are two keywords that can change this",
			  "displayTime": 0.0
			},
			{
			  "text": "default behavior of PassByValue, these two keywords are ref and out.",
			  "displayTime": 3.5
			},
			{
			  "text": "I'm going to show you how they work, but I will say that in 15 years of developing with C# I rarely if ever use these keywords.",
			  "displayTime": 8.008
			},
			{
			  "text": "There's a few special methods that Microsoft provides in the .NET Framework where I have to use these",
			  "displayTime": 15.008
			},
			{
			  "text": "keywords, but I rarely if ever use these keywords in methods and classes that I build.",
			  "displayTime": 19.5
			},
			{
			  "text": "I will cover these key words for those of you that want to get a complete picture of the C# language,",
			  "displayTime": 24.008
			},
			{
			  "text": "but feel free to skip this clip and move to the next one if this something that doesn't interest you.",
			  "displayTime": 28.5
			},
			{
			  "text": "So the two keywords are ref and out. Let's go back to the situation where I am saying book = new GradeBook",
			  "displayTime": 33.5
			},
			{
			  "text": "inside of GiveBookAName, and I've already demonstrated that this test will fail now because when I change the",
			  "displayTime": 41.008
			},
			{
			  "text": "value inside of book that does not change the value inside of book2, therefore book2 still pointing to the",
			  "displayTime": 47.008
			},
			{
			  "text": "original GradeBook, and I'm only changing the name on a new GradeBook that is created here inside of",
			  "displayTime": 53.008
			},
			{
			  "text": "GiveBookAName, but all that can change if I use on of these two keywords, ref or out.",
			  "displayTime": 59.008
			},
			{
			  "text": "These keywords go in front of the type for the parameter, and this is the ref keyword, and the way to think",
			  "displayTime": 64.008
			},
			{
			  "text": "about it now is what I'm receiving inside of the book parameter is a reference to the variable in the calling",
			  "displayTime": 69.008
			},
			{
			  "text": "code, and there's a couple observations to make. For those of you with a computer science background, yes,",
			  "displayTime": 76.008
			},
			{
			  "text": "you can think of book as a pointer to a pointer, but the syntax that I use inside of the method doesn't have to change.",
			  "displayTime": 81.008
			},
			{
			  "text": "If I assign a new value to this parameter you can think of that value being written into the book2 variable,",
			  "displayTime": 88.008
			},
			{
			  "text": "but the way I access the GradeBook doesn't change, I can still just say book., and I get to any instance",
			  "displayTime": 96.008
			},
			{
			  "text": "member of that object. The next observation to make is that I have a complier error.",
			  "displayTime": 101.008
			},
			{
			  "text": "When the C# complier see you're invoking a method that has a ref parameter, it also wants to see the ref",
			  "displayTime": 106.008
			},
			{
			  "text": "keyword in front of the parameter when you invoke the method. That just makes it very explicit when you're",
			  "displayTime": 112.008
			},
			{
			  "text": "calling another method, that you are passing this variable by reference, and it's quite possible that the",
			  "displayTime": 117.008
			},
			{
			  "text": "method you are calling can change the underlying value inside of book2.",
			  "displayTime": 122.008
			},
			{
			  "text": "So I'm about to run the tests, and I want you to take a guess whether the test will pass or fail.",
			  "displayTime": 127.008
			},
			{
			  "text": "Let me give you a little bit of a hint, the assertion right now is still looking at book1.Name, so if I run",
			  "displayTime": 133.008
			},
			{
			  "text": "the test, the test is still failing because when I say book = new GradeBook down here, yes, I'm writing a new",
			  "displayTime": 139.008
			},
			{
			  "text": "value into book2, but that doesn't influence book1, I don't have a reference into that variable, I have a",
			  "displayTime": 146.008
			},
			{
			  "text": "reference into book2, so book1 is still pointing to the original GradeBook, but book2 now, let's write an",
			  "displayTime": 151.008
			},
			{
			  "text": "assertion against that, and just to make this clearer perhaps, let's get rid of the ref keyword for just a second.",
			  "displayTime": 158.008
			},
			{
			  "text": "I'm going to run all the tests, that test should still fail because in this scenario when I say book = new",
			  "displayTime": 165.008
			},
			{
			  "text": "GradeBook, we're back into the scenario that we previously looked at where I am writing a new value into this",
			  "displayTime": 171.008
			},
			{
			  "text": "book parameter, but there's nothing I can do here that can change the value that is inside of book2,",
			  "displayTime": 177.008
			},
			{
			  "text": "so book2 is still pointing to the original GradeBook. Let's change this back to ref, and I'm writing the",
			  "displayTime": 181.008
			},
			{
			  "text": "assertion against book2.Name, let's run all the tests, and the tests now passes because when I say book = new",
			  "displayTime": 188.008
			},
			{
			  "text": "GradeBook inside of GiveBookAName, I can think of this book as pointing to the new GradeBook,",
			  "displayTime": 195.008
			},
			{
			  "text": "and because this is a by ref parameter I've also changed where book2 is pointing, so it's pointing to that new GradeBook also.",
			  "displayTime": 200.008
			},
			{
			  "text": "The ref keyword, I can also use this against value types, so we've already seen if I call IncrementNumber on",
			  "displayTime": 208.008
			},
			{
			  "text": "x, there's nothing I can do inside of IncrementNumber that will actually change the value that is inside of",
			  "displayTime": 214.008
			},
			{
			  "text": "x, but that's all different if I use the ref keyword. If I use the ref keyword, and I also use it here where",
			  "displayTime": 220.008
			},
			{
			  "text": "I am invoking the method, I can think of number as a reference to this variable location, the x,",
			  "displayTime": 227.008
			},
			{
			  "text": "so any changes that I make to that value like incrementing the number, that change will be reflected inside",
			  "displayTime": 232.008
			},
			{
			  "text": "of x, so Ctrl+ RA to run the tests, I expected a 46, but now the actual is 47, I did increment that number.",
			  "displayTime": 238.008
			},
			{
			  "text": "Let's change the assert, run all the tests, and now we have a passing test.",
			  "displayTime": 250.008
			},
			{
			  "text": "Let me show you the other keyword, the out keyword that also changes the behavior of PassByValue, and the out",
			  "displayTime": 255.008
			},
			{
			  "text": "keyword is pretty much identical to ref. Let me just change both the method and the calling of that method",
			  "displayTime": 262.008
			},
			{
			  "text": "to use the out keyword, and here we will see what the real difference is between ref and out, with out the C#",
			  "displayTime": 268.008
			},
			{
			  "text": "complier assumes that you are creating an output here. Most methods produce an output by returning a value,",
			  "displayTime": 275.008
			},
			{
			  "text": "but when you use the out keyword, the semantics are that you are producing an output through this parameter,",
			  "displayTime": 281.008
			},
			{
			  "text": "and one of the things the C# complier wants to see is a definite assignment to that parameter.",
			  "displayTime": 289.008
			},
			{
			  "text": "Right now the error is Use of unassigned out parameter number, that's because in order to add 1 to number,",
			  "displayTime": 293.008
			},
			{
			  "text": "and say number += 1, I first have to read the number, and then add 1 to it, but the C# complier is saying",
			  "displayTime": 298.008
			},
			{
			  "text": "since this is an output I cannot guarantee that the caller gave you an initialized value that you can use,",
			  "displayTime": 306.008
			},
			{
			  "text": "and so for this scenario I have to use the ref keyword if I want to increment an existing number,",
			  "displayTime": 311.008
			},
			{
			  "text": "and with ref the initialization rules are just on the other side of the fence.",
			  "displayTime": 318.008
			},
			{
			  "text": "So with the ref keyword if I did not have a definite assignment to the variable x, now I would get an error",
			  "displayTime": 322.008
			},
			{
			  "text": "in this method that I'm using an unassigned local variable. So with the ref keyword the C# complier will",
			  "displayTime": 329.008
			},
			{
			  "text": "make sure that you initialize a variable before you call a method.",
			  "displayTime": 335.008
			},
			{
			  "text": "If I have the out parameter here I wouldn't need this initialization statement, I could just say int x,",
			  "displayTime": 338.008
			},
			{
			  "text": "and invoke a method that passes x as an out parameter. And that's the story with the ref and out keywords.",
			  "displayTime": 344.008
			},
			{
			  "text": "Again these are keywords that I rarely use, there's usually a better way to design a method than by taking a",
			  "displayTime": 350.008
			},
			{
			  "text": "ref or an out parameter, but hopefully I've given you enough information if you do encounter one of those",
			  "displayTime": 357.008
			},
			{
			  "text": "keywords you'll know what to do, and you can always explore and experiment with unit tests like this to make",
			  "displayTime": 360.008
			},
			{
			  "text": "sure that you understand the behavior correctly.",
			  "displayTime": 366.008
			}
		  ]
		},
		{
		  "title": "Immutability",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m4&clip=6&mode=live",
		  "segments": [
			{
			  "text": "One special behavior that I need to point out about value types is that value types are typically immutable,",
			  "displayTime": 0.0
			},
			{
			  "text": "which means they cannot change, and certainly the value types that Microsoft provides as primitives for us to",
			  "displayTime": 6.808
			},
			{
			  "text": "work with from the .NET Framewrk, those value types are immutable, and that means that once you create a",
			  "displayTime": 12.808
			},
			{
			  "text": "value you cannot change the value. That doesn't mean that the value stored in a variable cannot change.",
			  "displayTime": 17.808
			},
			{
			  "text": "We call them variables because the data inside can vary, but the actual value of the value type cannot change.",
			  "displayTime": 23.808
			},
			{
			  "text": "So for example you cannot change the value of the integer value 4, that seems obvious, but it also means that",
			  "displayTime": 29.808
			},
			{
			  "text": "once you've constructed a DateTime, which is a value type, that particular value cannot change.",
			  "displayTime": 36.808
			},
			{
			  "text": "So with this in mind I want to cover two common errors that new C# developers frequently run into,",
			  "displayTime": 41.808
			},
			{
			  "text": "one error with a DateTime value type, and one error with a string type.",
			  "displayTime": 48.808
			},
			{
			  "text": "Once you construct a DataTime, and yes, you can use the new operator, you can construct a DateTime,",
			  "displayTime": 51.808
			},
			{
			  "text": "and set that DateTime value to August 11, of the year 2002, which is what the code on the screen is doing.",
			  "displayTime": 56.808
			},
			{
			  "text": "That's because the DateTime constructor takes the year, the month, and the day.",
			  "displayTime": 62.808
			},
			{
			  "text": "Once I create this value I cannot change it, I can assign a different value into that date variable even",
			  "displayTime": 66.808
			},
			{
			  "text": "though the DateTime exposes members like AddDays, which makes it look like I can add one day to an existing",
			  "displayTime": 72.808
			},
			{
			  "text": "DateTime value, but this code has a problem because AddDays will never change the underlying DateTime value.",
			  "displayTime": 78.808
			},
			{
			  "text": "Instead what AddDays will do is return a new DateTime instance, so I need to assign the return value of",
			  "displayTime": 84.808
			},
			{
			  "text": "AddDays into a variable if I really want to capture the date. The string type in .NET also has these qualities.",
			  "displayTime": 92.808
			},
			{
			  "text": "What's interesting about string is that string is a reference type, and as I said before, don't let anyone",
			  "displayTime": 97.808
			},
			{
			  "text": "tell you that string is not a reference type. When working with strings your variables will be a reference",
			  "displayTime": 103.808
			},
			{
			  "text": "that point to a sequence of characters, and that makes it easy to pass strings around to different methods",
			  "displayTime": 109.808
			},
			{
			  "text": "because we pass a reference instead of copying the entire value of the string, and that's good because",
			  "displayTime": 113.808
			},
			{
			  "text": "strings can contain millions of characters and can be quite large.",
			  "displayTime": 119.808
			},
			{
			  "text": "A string is a reference type then, but it behaves like a value type in many ways because a string is immutable.",
			  "displayTime": 123.808
			},
			{
			  "text": "One of the methods on a string is a Trim method. What Trim will do is remove the leading or trailing white",
			  "displayTime": 129.808
			},
			{
			  "text": "space from a string, so the space characters before it and after the value Scott should be removed,",
			  "displayTime": 135.808
			},
			{
			  "text": "but Trim does not modify the string that I am pointing to, instead Trim will create a new string with the",
			  "displayTime": 140.808
			},
			{
			  "text": "characters removed, and return that new string. If all I do is just call Trim, and I don't assign the return",
			  "displayTime": 146.808
			},
			{
			  "text": "value of that method call to a variable, I've lost all the work that the Trim method performed, and so the",
			  "displayTime": 151.808
			},
			{
			  "text": "code on the screen is all wrong, don't use it, instead use the code that I'll show you now.",
			  "displayTime": 157.808
			},
			{
			  "text": "Inside of Visual Studio let's experiment with the code that was just on the slide, so first I will write a",
			  "displayTime": 164.808
			},
			{
			  "text": "new test method, this test method will test how to add days to a DateTime.",
			  "displayTime": 169.808
			},
			{
			  "text": "So first I will need a DateTime variable, let's just call it date, and I could assign to that variable",
			  "displayTime": 176.808
			},
			{
			  "text": "DateTime.Now, we've seen that earlier in the course, that will give me the current time as this program is",
			  "displayTime": 182.808
			},
			{
			  "text": "executing, but instead let's use a specific date. I can do that using the new keyword, and there is a",
			  "displayTime": 188.808
			},
			{
			  "text": "constructor for DateTime where I can pass in the year, let's say 2015, and then the month, let's just use",
			  "displayTime": 194.808
			},
			{
			  "text": "January, and then the day of the month, let's just use the first day, and there's also constructors that",
			  "displayTime": 201.808
			},
			{
			  "text": "would allow me to construct that day with a specific time during the day, but let's go with that value,",
			  "displayTime": 207.808
			},
			{
			  "text": "and now say DateTime.AddDays1, and like I say it's very easy to think that now you have a DateTime that",
			  "displayTime": 212.808
			},
			{
			  "text": "represents January 2, but if I write an assert, and I try to assert that the following two things are equal,",
			  "displayTime": 220.808
			},
			{
			  "text": "the value 2, and date.Day, I will find this test will fail. Before I do that I'll just point out that",
			  "displayTime": 228.808
			},
			{
			  "text": "there's all sorts of ways to look at various different pieces of the date, I could look at the specific hour,",
			  "displayTime": 235.808
			},
			{
			  "text": "or the specific millisecond, but I just want to look at the day, and if I run the test the failing test will",
			  "displayTime": 240.808
			},
			{
			  "text": "tell me that I expected a 2, but the actual value is 1, so Date.Day is still a 1, and that's because AddDays",
			  "displayTime": 249.808
			},
			{
			  "text": "will construct a new DateTime, so let me assign that new DateTime into the date variable, and run the test",
			  "displayTime": 256.808
			},
			{
			  "text": "again, and now we have a passing test. Next let's try something with a string, so another test method,",
			  "displayTime": 264.808
			},
			{
			  "text": "and let's test how to uppercase a string. So if I have a string variable, let's call it name, and I point it",
			  "displayTime": 271.808
			},
			{
			  "text": "to the string scott, with all lowercase characters, and yes, I do point it to that string value because if I",
			  "displayTime": 281.808
			},
			{
			  "text": "press F12 on string I do see that it is a class defined inside of MSCorLib, and you'll notice the class name",
			  "displayTime": 287.808
			},
			{
			  "text": "is actually uppercase S, it just so happens that once again C# provides a magic keyword, string with a",
			  "displayTime": 294.808
			},
			{
			  "text": "lowercase letter, that will map to that stystem.stringtype, so the two are equivalent.",
			  "displayTime": 300.808
			},
			{
			  "text": "C# is a case sensitive language, so if I didn't have that keyword in C# I would have to stay String uppercase",
			  "displayTime": 305.808
			},
			{
			  "text": "S, but now that we know that let's try to do something with our name.",
			  "displayTime": 311.808
			},
			{
			  "text": "Ultimately what I want to do is invoke a ToUpper method, which is one of many methods on the string type that",
			  "displayTime": 315.808
			},
			{
			  "text": "looks like it would change the underlying string, so you can Trim a string, you can Trim from the start,",
			  "displayTime": 323.808
			},
			{
			  "text": "or Trim just from the end. You can say ToUpper, ToLower, but if I write an assertion here, and try to assert",
			  "displayTime": 329.808
			},
			{
			  "text": "that the value I expect is SCOTT, all uppercase, and compare that to the actual value, which is the value",
			  "displayTime": 337.808
			},
			{
			  "text": "in name, if I run this test I will find that it fails because even though string is a reference type,",
			  "displayTime": 344.808
			},
			{
			  "text": "it behaves very much like a value type, and I can see that I expected an all uppercase SCOTT, but I actually",
			  "displayTime": 353.808
			},
			{
			  "text": "got an all lowercase scott, and that's because all of these methods like Trim, and ToUpper, and ToLower,",
			  "displayTime": 358.808
			},
			{
			  "text": "they don't modify the string that I'm pointing to, instead they create a new string, and return that string",
			  "displayTime": 363.808
			},
			{
			  "text": "from the method, so I really need to capture that by assigning a reference to that new string back into my",
			  "displayTime": 370.808
			},
			{
			  "text": "name variable, and once I do that, and I run all the tests I should find that this passes, which it does,",
			  "displayTime": 375.808
			},
			{
			  "text": "and hopefully this will save you some time in the future. Always remember when working with a value type",
			  "displayTime": 382.808
			},
			{
			  "text": "that the value type might be immutable, but methods you see on that value type might be methods that return a",
			  "displayTime": 386.808
			},
			{
			  "text": "new value or a new instance, and not change the underlying value, and that rule also applies to string,",
			  "displayTime": 391.808
			},
			{
			  "text": "which behaves like a value type.",
			  "displayTime": 397.808
			}
		  ]
		},
		{
		  "title": "Arrays",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m4&clip=7&mode=live",
		  "segments": [
			{
			  "text": "One more reference type that I want to cover in more depth is the array.",
			  "displayTime": 0.0
			},
			{
			  "text": "The array is a simple data structure to manage a collection of multiple objects or multiple values,",
			  "displayTime": 3.835
			},
			{
			  "text": "and the array itself is always a reference type. Now you might remember that in our GradeBook we are",
			  "displayTime": 8.835
			},
			{
			  "text": "managing a collection of multiple floating point values, those values represent the grades in the GradeBook,",
			  "displayTime": 14.835
			},
			{
			  "text": "but we are using a list to store those grades in the GradeBook, not an array, primarily because arrays have",
			  "displayTime": 19.835
			},
			{
			  "text": "a fixed size, that means when I create an array I have to specify the size of the array, which is how many",
			  "displayTime": 25.835
			},
			{
			  "text": "items the array can hold, and that size, although you can change it, changing the size of an array can be a relatively expensive operation.",
			  "displayTime": 31.835
			},
			{
			  "text": "In our program if we new exactly how many grades we might need to store, or at least the maximum number of",
			  "displayTime": 40.835
			},
			{
			  "text": "grades, then it might make sense to use an array instead of a list, but since we don't know how many grades",
			  "displayTime": 45.835
			},
			{
			  "text": "someone might want to store we use a list because a list will just grow automatically, and grab the space",
			  "displayTime": 51.835
			},
			{
			  "text": "needed to keep storing new items every time we call Add on that list, but one thing both the list and the",
			  "displayTime": 56.835
			},
			{
			  "text": "array have in common is that they are both 0 indexed, meaning the first item in a list or an array is at",
			  "displayTime": 62.835
			},
			{
			  "text": "index 0, which is sometimes confusing because we tend to think of the first item being in position 1,",
			  "displayTime": 69.835
			},
			{
			  "text": "but in C# and many other languages actually, the first item is position 0.",
			  "displayTime": 74.835
			},
			{
			  "text": "You might remember we encountered this indexing already when we worked with the args array passed to our",
			  "displayTime": 79.835
			},
			{
			  "text": "program in the first module, the args array contained the command line parameters, and the first parameter",
			  "displayTime": 86.835
			},
			{
			  "text": "to the program was in position 0. Here in this code snippet we see the syntax for declaring an array.",
			  "displayTime": 91.835
			},
			{
			  "text": "First is a const int variable. The const keyword is something that you can add to a variable if that",
			  "displayTime": 97.835
			},
			{
			  "text": "variable if that variable is going to hold a constant value. Once I've declared and initialized the",
			  "displayTime": 103.835
			},
			{
			  "text": "variable, the value of that variable cannot be changed. And in this code we will store the final score for",
			  "displayTime": 108.835
			},
			{
			  "text": "four students, so students so the syntax for declaring an array is to use the type that the array is going to",
			  "displayTime": 114.835
			},
			{
			  "text": "hold, followed by square brackets. What we're declaring here is an array called scores, it's going to hold integers.",
			  "displayTime": 119.835
			},
			{
			  "text": "We will construct a new array that can hold exactly four integers, and this is all strongly typed, so if I",
			  "displayTime": 126.835
			},
			{
			  "text": "try to assign a string or a floating point number into one of the positions of the aray, I would get a complier error.",
			  "displayTime": 132.835
			},
			{
			  "text": "The array can only store integer values. And then we have a foreach loop very similar to the foreach loop",
			  "displayTime": 140.835
			},
			{
			  "text": "that we have inside of the GradeBook when we're computing statistics.",
			  "displayTime": 145.835
			},
			{
			  "text": "It's going to look at each integer value in that array of scores, and add that score to another variable",
			  "displayTime": 148.835
			},
			{
			  "text": "where we're keeping track of the total score. Let's work with arrays a bit inside of our unit tests.",
			  "displayTime": 154.835
			},
			{
			  "text": "Inside of our test project let me set you up with a test method that you can use to start experimenting with arrays.",
			  "displayTime": 162.835
			},
			{
			  "text": "So let's just call this test UsingArrays, and I'll need to declare an array, so let's create an array of",
			  "displayTime": 169.835
			},
			{
			  "text": "floating point numbers, that means I need to use the float keyword, and then I need to use the square",
			  "displayTime": 175.835
			},
			{
			  "text": "brackets, that tells the C# complier this is an array. Let's just call the array grades, and now instead of",
			  "displayTime": 179.835
			},
			{
			  "text": "initializing that variable immediately, let me just declare the variable because right now I have a variable",
			  "displayTime": 186.835
			},
			{
			  "text": "that can point to any array of floating point numbers, it doesn't matter what the size is.",
			  "displayTime": 192.835
			},
			{
			  "text": "In order to effectively use that variable, however, I will need to point it to a specific array,",
			  "displayTime": 198.835
			},
			{
			  "text": "so let's assign a reference to a new floating point array. This time when I use the square brackets I need",
			  "displayTime": 205.835
			},
			{
			  "text": "to specify the size of that array. Let's give the array the ability to store three numbers, then let's call",
			  "displayTime": 211.835
			},
			{
			  "text": "a method that will add grades into that array, so a method that doesn't exist yet, it will be called",
			  "displayTime": 218.835
			},
			{
			  "text": "AddGrades, and I'll pass in the grades, and then I'll want to write an assertion, I want to Assert,",
			  "displayTime": 224.835
			},
			{
			  "text": "let's say, that the value 89.1 is in array index sub1. So we need to create this method AddGrades,",
			  "displayTime": 230.835
			},
			{
			  "text": "and let me show you a trick. Visual Studio is smart enough that if you've written a method that doesn't",
			  "displayTime": 240.835
			},
			{
			  "text": "exist yet, Visual Studio has the ability to create that method for you, it doesn't know how you want to",
			  "displayTime": 246.835
			},
			{
			  "text": "implement that method, but if I go to the light bulb, and select generate the method, I now have a private",
			  "displayTime": 251.835
			},
			{
			  "text": "void method called AddGrades that takes as a parameter a reference to an array of floating point numbers.",
			  "displayTime": 257.835
			},
			{
			  "text": "The code that is inside this method right now, I want to remove that, and I want to be able to say that",
			  "displayTime": 263.835
			},
			{
			  "text": "grades sub 1 = 89.1 , the floating point number. Again you do have to be very careful when comparing numbers",
			  "displayTime": 268.835
			},
			{
			  "text": "for strict equality, that will always work for integers, but for floating point numbers you can sometimes",
			  "displayTime": 276.835
			},
			{
			  "text": "run into trouble as we saw earlier, but you might be wondering since float is a value type, will the calling",
			  "displayTime": 281.835
			},
			{
			  "text": "method using arrays actually see this value placed into the array, and the answer is yes because an array is",
			  "displayTime": 287.835
			},
			{
			  "text": "a reference type, and even though I'm dealing with a value type, which is a floating point number,",
			  "displayTime": 294.835
			},
			{
			  "text": "that number is stored inside the array, and both the grades variable inside of using arrays and the grades",
			  "displayTime": 300.835
			},
			{
			  "text": "variable that is the parameter to add grades, those are both references to the exact same array.",
			  "displayTime": 305.835
			},
			{
			  "text": "If I run the test with Ctrl+ RA I will see that is a passing test, and let's recreate a scenario that we were looking at earlier.",
			  "displayTime": 311.835
			},
			{
			  "text": "What happens here on the first line of code, if I say grades = a new array of floating point number,",
			  "displayTime": 319.835
			},
			{
			  "text": "let's say of size 5, what happens when I run the test now? Well the test will fail because now I've created",
			  "displayTime": 326.835
			},
			{
			  "text": "a new array, I've placed this value inside of that new array, the grades variable that is inside of using",
			  "displayTime": 334.835
			},
			{
			  "text": "arrays, that's still pointing to the original array of floating point number that we had, and this method",
			  "displayTime": 340.835
			},
			{
			  "text": "AddGrades no longer uses that. This is not placing the value into the array that we need, so let me remove",
			  "displayTime": 345.835
			},
			{
			  "text": "that line of code, rerun the test, leave you with all passing tests, and now I encourage you to experiment",
			  "displayTime": 350.835
			},
			{
			  "text": "with the code that is inside of this unit test project, try some different scenarios passing around value",
			  "displayTime": 357.835
			},
			{
			  "text": "types and reference types, and using arrays, and using strings, and with every little bit of code that you",
			  "displayTime": 362.835
			},
			{
			  "text": "write you'll become more comfortable with the C# language.",
			  "displayTime": 368.835
			}
		  ]
		},
		{
		  "title": "Summary",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m4&clip=8&mode=live",
		  "segments": [
			{
			  "text": "What we've seen in this module is that every type falls into one of two categories, every type is a value",
			  "displayTime": 0.0
			},
			{
			  "text": "type or a reference type. You can use the struct keyword to create a new value type, but the majority of",
			  "displayTime": 6.085
			},
			{
			  "text": "what you'll be creating in day-to-day software is reference types, and you'll do that using a class keyword.",
			  "displayTime": 12.0
			},
			{
			  "text": "We also looked a little bit at strings and arrays, these are both reference types, but remember the string",
			  "displayTime": 17.5
			},
			{
			  "text": "behaves like a value type because strings are immutable, and you cannot change a string value that already",
			  "displayTime": 23.0
			},
			{
			  "text": "exists, you can only build new strings. In the next module we're going to build on this knowledge,",
			  "displayTime": 28.5
			},
			{
			  "text": "and we're going to start adding some additional features to our GradeBook.",
			  "displayTime": 33.0
			},
			{
			  "text": "We'll add those features by adding new members to our GradeBook, class members like methods, but we're also",
			  "displayTime": 36.5
			},
			{
			  "text": "going to look at some different types of members, members like properties and events.",
			  "displayTime": 42.0
			}
		  ]
		}
	  ]
	},
	{
	  "title": "Methods, Fields, Events, and Properties",
	  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m5&clip=0&mode=live",
	  "clips": [
		{
		  "title": "Introduction",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m5&clip=0&mode=live",
		  "segments": [
			{
			  "text": "Hi, this is Scott, and in this module we're going to look at the members that you can attach to a type in the C# programming language.",
			  "displayTime": 0.0
			},
			{
			  "text": "This includes some familiar members we've already used, members like methods and fields, we've attached these",
			  "displayTime": 8.0
			},
			{
			  "text": "to classes and structs. We're going to go into more detail on those members, but also",
			  "displayTime": 13.5
			},
			{
			  "text": "introduce new members that you can use, the new members being properties and events.",
			  "displayTime": 18.0
			}
		  ]
		},
		{
		  "title": "Methods",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m5&clip=1&mode=live",
		  "segments": [
			{
			  "text": "Let's start this module by reviewing a few things that we know about methods.",
			  "displayTime": 1.526
			},
			{
			  "text": "Methods define behavior, they are our place where we can write code, and we can invoke a method to execute that code inside.",
			  "displayTime": 5.526
			},
			{
			  "text": "Every method has an access modifier, the default is private where the method is only available to other code",
			  "displayTime": 12.526
			},
			{
			  "text": "inside of the same class, but we can mark a method as internal to make it available to all the code inside of",
			  "displayTime": 17.526
			},
			{
			  "text": "the same project, or use the public keyword to make the method available everywhere.",
			  "displayTime": 23.526
			},
			{
			  "text": "Every method also has a return type, the method that we are looking at on the screen has a return type of",
			  "displayTime": 27.526
			},
			{
			  "text": "void, meaning the method doesn't return a value to the caller, it executes the code inside, but it doesn't",
			  "displayTime": 32.526
			},
			{
			  "text": "need a return statement to give anything back. Then we have the method name, and then 0 or more parameters,",
			  "displayTime": 37.526
			},
			{
			  "text": "which are listed in the parentheses after the name. This method takes one parameter, a numerical value of",
			  "displayTime": 43.526
			},
			{
			  "text": "type int, and the parameter is then a variable that is available throughout the rest of the method.",
			  "displayTime": 50.526
			},
			{
			  "text": "The method we are looking at takes this integer and passes it through to another method, the static GetBytes",
			  "displayTime": 54.526
			},
			{
			  "text": "method of the BitCoverter class. This BitConverter has a number of methods available to turn values into",
			  "displayTime": 60.526
			},
			{
			  "text": "bytes, and once we have the byte for our integer we will write out each byte to the console using some",
			  "displayTime": 65.526
			},
			{
			  "text": "special formatting symbols that know how to write out those values as hexadecimal numbers.",
			  "displayTime": 71.526
			},
			{
			  "text": "More on the formatting symbols in just a bit. Now here's a couple of new concepts about methods,",
			  "displayTime": 76.526
			},
			{
			  "text": "first there is a params keyword I want to show you in the demo.",
			  "displayTime": 81.526
			},
			{
			  "text": "The params keyword allows you to take a variable number of arguments because sometimes you might not know how",
			  "displayTime": 85.526
			},
			{
			  "text": "many parameters a method will need. Params is not typically something that you use on a regular basis,",
			  "displayTime": 89.526
			},
			{
			  "text": "but it's extremely useful in some scenarios. Another concept I want to introduce you to in the demo is the",
			  "displayTime": 95.526
			},
			{
			  "text": "concept of a method signature. You can think of a method signature as the unique identifier for a method.",
			  "displayTime": 101.526
			},
			{
			  "text": "The signature consists of the name of the method, as well as the number and the types of the parameters that the method takes.",
			  "displayTime": 108.526
			},
			{
			  "text": "The method signature allows the C# complier to distinguish between a method named WriteAsBytes that takes a",
			  "displayTime": 114.526
			},
			{
			  "text": "single int and another method with the same name, WriteAsBytes, but it takes a parameter of type string.",
			  "displayTime": 119.526
			},
			{
			  "text": "Those are two different methods, and I can have both methods in my class, and really I could have as many",
			  "displayTime": 126.526
			},
			{
			  "text": "methods named WriteAsBytes as I need, as long as the parameter lists are unique because parameter lists are",
			  "displayTime": 131.526
			},
			{
			  "text": "part of the signature. This is a feature in C# known as method overloading, and I do want to point out that",
			  "displayTime": 138.526
			},
			{
			  "text": "the return type of a method is not part of the method signature, let's take a closer look.",
			  "displayTime": 143.526
			},
			{
			  "text": "In this module we're going to continue to work with the GradeBook project that we created earlier in the",
			  "displayTime": 150.526
			},
			{
			  "text": "course, and if I run this project with Ctrl+F5 you can see we are outputting statistics, but without any",
			  "displayTime": 153.526
			},
			{
			  "text": "descriptive text for these numbers. So while you might be able to infer what is the average, the highest,",
			  "displayTime": 159.526
			},
			{
			  "text": "and the lowest grades, it would be nice if we added some text to make that more descriptive.",
			  "displayTime": 165.526
			},
			{
			  "text": "So each time I write out a result, I also want to write out a description of what that result is, and to do",
			  "displayTime": 169.526
			},
			{
			  "text": "that I'm going to create a helper method, a method that I can invoke from the main method of the program class.",
			  "displayTime": 175.526
			},
			{
			  "text": "Let's call this method WriteResult, I'll use the void keyword because this method doesn't need to return a",
			  "displayTime": 180.526
			},
			{
			  "text": "value, and this has to be a static method because I want to invoke this method from another static method,",
			  "displayTime": 186.526
			},
			{
			  "text": "and when you are inside a static member of a type you can only reach other static members of that same type,",
			  "displayTime": 193.526
			},
			{
			  "text": "so this has to be a static method that's called WriteResult. Every time I invoke this method I want to pass",
			  "displayTime": 198.526
			},
			{
			  "text": "in a description of the result that I'm going to write, and then the value of the result itself.",
			  "displayTime": 204.526
			},
			{
			  "text": "And inside of here let's just do a Console.WriteLine, I'll do that with the code snippet in Visual Studio CW,",
			  "displayTime": 210.526
			},
			{
			  "text": "press Tab and Tab, I want to write out the description, and let's just do some string concatenation to format",
			  "displayTime": 215.526
			},
			{
			  "text": "the output, so description plus a colon and a space, and then the result.",
			  "displayTime": 221.526
			},
			{
			  "text": "Let's try this out just with the average grade for right now, so I want to WriteResult, pass in the text",
			  "displayTime": 227.526
			},
			{
			  "text": "Average, and then the AverageGrade itself. Let's give that a quick run with Ctrl+F5, and that looks like the",
			  "displayTime": 234.526
			},
			{
			  "text": "type of output that I want, so I can change over some of the other values.",
			  "displayTime": 242.526
			},
			{
			  "text": "Before I do, let me take this WriteResult method, and make a copy of that with Ctrl+C, and then paste it with",
			  "displayTime": 244.526
			},
			{
			  "text": "Ctrl+V, and as soon as I do that Visual Studio will tell me that the C# complier sees an error, and the error",
			  "displayTime": 251.526
			},
			{
			  "text": "is that I cannot have two methods on a type with the same signature, so now I have two methods,",
			  "displayTime": 257.526
			},
			{
			  "text": "they're both called WriteResult, they both take two parameters of type string and float, so this is illegal,",
			  "displayTime": 262.526
			},
			{
			  "text": "but what happens if I change this version of WriteResult to take an integer value instead.",
			  "displayTime": 268.526
			},
			{
			  "text": "Now the C# complier sees two different methods, one that takes a string and an int, one that takes a string and a float.",
			  "displayTime": 275.526
			},
			{
			  "text": "So when I call write result here, which method will the C# complier choose, well generally speaking the C#",
			  "displayTime": 279.526
			},
			{
			  "text": "complier will choose the method that makes the most sense. So if I am invoking WriteResult, and I'm passing",
			  "displayTime": 285.526
			},
			{
			  "text": "a string and a floating point number, if the C# complier sees a method signature that matches those parameter",
			  "displayTime": 290.526
			},
			{
			  "text": "types exactly, that's the version of the overloaded method that it's going to invoke.",
			  "displayTime": 296.526
			},
			{
			  "text": "Now there are some subtleties and some crazy edge cases where sometimes the C# complier can choose a method",
			  "displayTime": 301.526
			},
			{
			  "text": "that you didn't expect, but for the most part the C# complier is going to do something sensible, so you can",
			  "displayTime": 306.526
			},
			{
			  "text": "see just based on the highlighting in Visual Studio that the version of WriteResult I'll be invoking is the",
			  "displayTime": 311.526
			},
			{
			  "text": "one that takes a string and a float. Now let's change over highest grade, and what I want to do is a",
			  "displayTime": 316.526
			},
			{
			  "text": "WriteResult, and I'll pass in the text Highest, and this time I want to take this highest grade and do an",
			  "displayTime": 321.526
			},
			{
			  "text": "explicit conversion to an integer, so this syntax in C# where you have a type name, or in this case the",
			  "displayTime": 329.526
			},
			{
			  "text": "keyword int, which maps to a type, the int 32 type, this is a type corrosion, some people would call this a",
			  "displayTime": 335.526
			},
			{
			  "text": "type cast, this is explicitly telling the C# complier I want to take this floating point number and convert",
			  "displayTime": 341.526
			},
			{
			  "text": "that value into an integer, and when you do this at runtime the floating point number will just be truncated.",
			  "displayTime": 347.526
			},
			{
			  "text": "If you actually wanted to do some rounding when you do the conversion there are some methods on the math",
			  "displayTime": 353.526
			},
			{
			  "text": "class that will allow you to round a number, but this time when I call WriteResult you can see based on the",
			  "displayTime": 358.526
			},
			{
			  "text": "highlighting the C# complier will choose the method that takes a string and an int.",
			  "displayTime": 363.526
			},
			{
			  "text": "So for the most part, the C# complier is just going to match up the parameters and their types so that everything works together.",
			  "displayTime": 367.526
			},
			{
			  "text": "And let's do this one more time, I want to WriteResult on the LowestGrade by passing in lowest, and now if I",
			  "displayTime": 373.526
			},
			{
			  "text": "run the program I have some nice output. And this is the essence of method overloading in C#.",
			  "displayTime": 381.526
			},
			{
			  "text": "Typically when you overload methods to take these different parameter types it's because you want to do",
			  "displayTime": 388.526
			},
			{
			  "text": "something different with those parameter types, in this case all we're really doing is just doing a",
			  "displayTime": 391.526
			},
			{
			  "text": "Console.WriteLine, but I want to show you the Console.WriteLine itself, it is an overloaded method.",
			  "displayTime": 396.526
			},
			{
			  "text": "So if I remove and retype the opening parenthesis that will bring up the IntellSense window that shows me all",
			  "displayTime": 402.526
			},
			{
			  "text": "of the different overloads of Console.WriteLine. Here's one that takes a bool, one that takes a character,",
			  "displayTime": 407.526
			},
			{
			  "text": "I can navigate through this using the arrow keys, here's a character array, a decimal value, a double value.",
			  "displayTime": 412.526
			},
			{
			  "text": "I want to show you a special version of WriteLine that is in here, the fifteenth overload of WriteLine,",
			  "displayTime": 420.526
			},
			{
			  "text": "this one takes a string and then an object array. Notice that object array has the params keywords in front.",
			  "displayTime": 425.526
			},
			{
			  "text": "That params keyword means that you can pass a variable number of arguments to this method, and a parameter to",
			  "displayTime": 431.526
			},
			{
			  "text": "a method that is marked with this params keyword, it's always the last parameter to a method because what the",
			  "displayTime": 437.526
			},
			{
			  "text": "C# complier will do as you start to pass parameters to this method, everything after the initial string,",
			  "displayTime": 443.526
			},
			{
			  "text": "the C# complier is just going to take all those parameters, package them up into an array, and pass them to",
			  "displayTime": 449.526
			},
			{
			  "text": "the method that you are invoking. So in other words, just as an experiment, if I used the params keyword",
			  "displayTime": 453.526
			},
			{
			  "text": "here, then my result would not be a single floating point number, instead it would be an array of floating",
			  "displayTime": 459.526
			},
			{
			  "text": "point number, and now what I can do is I can pass just a single value, but I could also continue to pass",
			  "displayTime": 465.526
			},
			{
			  "text": "values in here, so I could pass the lowest grade, and then a 2, and a 3, and a 4, and of course inside of",
			  "displayTime": 472.526
			},
			{
			  "text": "WriteResult what we'd have to do then is loop through this array, and display each result, this isn't really",
			  "displayTime": 477.526
			},
			{
			  "text": "what we want to do, I just want to demonstrate how you would use the params keyword, we just want a single",
			  "displayTime": 482.526
			},
			{
			  "text": "floating point result, so let me change this back, but what I do want to do is use this version of WriteLine",
			  "displayTime": 487.526
			},
			{
			  "text": "that takes what's known as a formatting string, and then a variable number of parameters because you'll see",
			  "displayTime": 493.526
			},
			{
			  "text": "this quite commonly in C# code. A formatting string looks like this, let's say I want to display the",
			  "displayTime": 498.526
			},
			{
			  "text": "description, and then a colon, and a space, and then the result.",
			  "displayTime": 504.526
			},
			{
			  "text": "One way to do that is with string concatenation, another way to do that is to use a formatting string like",
			  "displayTime": 507.526
			},
			{
			  "text": "so, and you can think of the pieces inside of the curly braces as placeholders, so I have placeholders 0 and",
			  "displayTime": 513.526
			},
			{
			  "text": "placeholder 1, and then the values that I pass here, that runtime will be placed into those placeholders.",
			  "displayTime": 519.526
			},
			{
			  "text": "In other words if I pass description and result, then at runtime instead of displaying curly brace 0 curly",
			  "displayTime": 525.526
			},
			{
			  "text": "brace, the runtime is going to go off looking for the first element in the array of parameters that I have",
			  "displayTime": 533.526
			},
			{
			  "text": "passed, so these two parameters, they are packaged up into an array, the first element would be description,",
			  "displayTime": 540.526
			},
			{
			  "text": "so description goes here. Now we have some literal text, which is the colon and the space, and then here's",
			  "displayTime": 545.526
			},
			{
			  "text": "another placeholder where I want array index 1 placed into here, so this will take the result and place it here.",
			  "displayTime": 550.526
			},
			{
			  "text": "If I run this program again, you'll see I still get the same output, which is quite often it's sometimes",
			  "displayTime": 556.526
			},
			{
			  "text": "easier to work with a formatting string than it is string concatenation because you can think of that",
			  "displayTime": 562.526
			},
			{
			  "text": "formatting string as a template, and it's sometimes a little bit easier to see the resulting string that",
			  "displayTime": 567.526
			},
			{
			  "text": "you're hoping to build. Now as the slide eluded to, there's also some special formatting characters that you",
			  "displayTime": 573.526
			},
			{
			  "text": "can add to these placeholders. I am not going to go into detail on all of the formatting options that are",
			  "displayTime": 576.526
			},
			{
			  "text": "available, you can go to your favorite search engine, and search for C# string formatting, and you'll find",
			  "displayTime": 583.526
			},
			{
			  "text": "lots of documentation because there are many formatting options.",
			  "displayTime": 587.526
			},
			{
			  "text": "There are all sorts of pneumonics to format DateTime values in a specific way, or to take this floating point",
			  "displayTime": 591.526
			},
			{
			  "text": "number and format it as a currency or in scientific notation. Here's an example, if I place a colon and a",
			  "displayTime": 596.526
			},
			{
			  "text": "F2, what I'm asking the runtime to do is to take my number, the result, and format it as a floating point",
			  "displayTime": 604.526
			},
			{
			  "text": "number with two digits after the decimal place, so you can see now instead of getting 85.166666, I get 85.17.",
			  "displayTime": 610.526
			},
			{
			  "text": "So this has even rounded the number for me. I can also place a C in here to format that value as a currency.",
			  "displayTime": 619.526
			},
			{
			  "text": "Notice that highest isn't formatted that way because when we displayed the highest grade we were displaying",
			  "displayTime": 627.526
			},
			{
			  "text": "it using this version of WriteResult that takes an integer. And now one more quick tip, if you're using",
			  "displayTime": 633.526
			},
			{
			  "text": "Visual Studio 2015 and the C# 6 complier, there's a new feature in C# version 6 called string interpolation,",
			  "displayTime": 639.526
			},
			{
			  "text": "it works like this. Instead of using these formatting strings, which can sometimes create trouble because",
			  "displayTime": 646.526
			},
			{
			  "text": "you forget that you really need two parameters in here, and you only pass one, a new feature of C# 6 string",
			  "displayTime": 651.526
			},
			{
			  "text": "interpolation allows you to place a dollar sign in front of the opening quote for this formatting string,",
			  "displayTime": 657.526
			},
			{
			  "text": "and instead of using numbers to index into an array, I can use the variable name directly, so this is a way",
			  "displayTime": 665.526
			},
			{
			  "text": "of saying please write out the description, whatever that string value is, and then the literal text colon",
			  "displayTime": 670.526
			},
			{
			  "text": "space, and now I want to write out the result, and I can still use a formatting string, so I want it to write",
			  "displayTime": 675.526
			},
			{
			  "text": "out as a floating point number with two digits after the decimal, and if we run this we're still getting the",
			  "displayTime": 681.526
			},
			{
			  "text": "output that we desire. So the key take-aways are that you can have overloaded methods in C#, that is methods",
			  "displayTime": 687.526
			},
			{
			  "text": "that have the same name, but different signatures, or the signature consists not only of the method name,",
			  "displayTime": 693.526
			},
			{
			  "text": "but also the number and the types of parameters, and the easy way to think about it is when you write code to",
			  "displayTime": 699.526
			},
			{
			  "text": "invoke WriteResult, will there be a way to distinguish between these two different methods, and in this case",
			  "displayTime": 704.526
			},
			{
			  "text": "since they both take two parameters, fortunately the last parameter has different types, so the C# complier",
			  "displayTime": 710.526
			},
			{
			  "text": "will choose the int method or the float method depending on the type of the value that you have to pass in.",
			  "displayTime": 715.526
			}
		  ]
		},
		{
		  "title": "Fields and Properties",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m5&clip=2&mode=live",
		  "segments": [
			{
			  "text": "Another type of member we've already been using is the field. Fields define the variables inside of a class,",
			  "displayTime": 0.0
			},
			{
			  "text": "so they define the state or the data that you want to hold as part of an object.",
			  "displayTime": 7.935
			},
			{
			  "text": "Previously we added a name field to our GradeBook class, and we made that field public, so anyone could go to",
			  "displayTime": 11.935
			},
			{
			  "text": "the GradeBook and change the name at anytime, but it is more common to make fields private and hide them,",
			  "displayTime": 16.935
			},
			{
			  "text": "so that no code outside of the class has access to the field. Data is something you typically want to",
			  "displayTime": 22.935
			},
			{
			  "text": "protect and validate, you don't want just anyone to be able to change the data inside of an object,",
			  "displayTime": 27.935
			},
			{
			  "text": "so the code on the screen is using a private field of type string, the name of the field is _name,",
			  "displayTime": 32.935
			},
			{
			  "text": "the underscore isn't required for private fields, that's just a naming convention that some developers use",
			  "displayTime": 38.935
			},
			{
			  "text": "for private fields, you don't have to use that convention, but this field is inside of a class named Animal,",
			  "displayTime": 43.935
			},
			{
			  "text": "and in the constructor for Animal we force someone to construct an animal by passing a name,",
			  "displayTime": 48.935
			},
			{
			  "text": "and the constructor saves the name in the private field, so it's available for the rest of the object to use.",
			  "displayTime": 54.935
			},
			{
			  "text": "Notice this field has a readonly keyword attached, that means the code inside of this class can only assign a",
			  "displayTime": 59.0
			},
			{
			  "text": "name in the constructor, or when the field is defined with a field initializer, so I could say private",
			  "displayTime": 64.935
			},
			{
			  "text": "readonly string _name = and some string value. If I try to set name to a new value in any other method other",
			  "displayTime": 70.935
			},
			{
			  "text": "than the constructor, the C# complier will give me an error for this class.",
			  "displayTime": 77.935
			},
			{
			  "text": "Now you might wonder how could I let code outside of my class get to the value of this field like the name,",
			  "displayTime": 81.935
			},
			{
			  "text": "do I have to write a method to return that value for other people to be able to read the name, and the answer",
			  "displayTime": 86.935
			},
			{
			  "text": "is no, that's where properties come in.",
			  "displayTime": 92.935
			},
			{
			  "text": "A property is similar to a field because it controls state and data associated with an object, but unlike a",
			  "displayTime": 95.935
			},
			{
			  "text": "field a property has a special syntax we can use to control what happens when someone reads the data or writes the data.",
			  "displayTime": 101.935
			},
			{
			  "text": "These are known as the get and set accessors, and these accessors can contain code, you can almost think of",
			  "displayTime": 108.935
			},
			{
			  "text": "them as methods, and we can do things like computations or validation.",
			  "displayTime": 113.935
			},
			{
			  "text": "In this code snippet we have a field called _name again, it is private, so I can only access the field",
			  "displayTime": 117.935
			},
			{
			  "text": "directly from code inside of the same class, but I also have a property called Name, and that's capitalized",
			  "displayTime": 121.935
			},
			{
			  "text": "because the naming guidelines for C# tell us to capitalize property names, as well as method names,",
			  "displayTime": 127.935
			},
			{
			  "text": "and I know this is a property because it has get and set accessors.",
			  "displayTime": 132.935
			},
			{
			  "text": "Inside of a get accessor I have some code, it's inside of curly braces just like the code inside of a method.",
			  "displayTime": 136.935
			},
			{
			  "text": "I can write as much code as I want inside of the get accessor, but ultimately I have to return a value,",
			  "displayTime": 143.935
			},
			{
			  "text": "and that value has to be of type string because that's the type of property that I'm inside, and this code is",
			  "displayTime": 147.935
			},
			{
			  "text": "just returning the same string that I already have in _name, but I could also return the name as uppercased,",
			  "displayTime": 153.935
			},
			{
			  "text": "or lowercased, or just the first three letters, whatever I want as long as I return a string.",
			  "displayTime": 159.935
			},
			{
			  "text": "Even more important here is the set accessor, inside of set, this is the code that will be invoked any time",
			  "displayTime": 163.935
			},
			{
			  "text": "someone tries to write a value into this name property, and whatever value someone is trying to write,",
			  "displayTime": 170.935
			},
			{
			  "text": "that will be passed to me implicitly through a variable called value.",
			  "displayTime": 174.935
			},
			{
			  "text": "You can think of this almost as a parameter to this set accessor if you're thinking of it as a method.",
			  "displayTime": 180.0
			},
			{
			  "text": "So I can take that value and store it directly under _name, but first do some validation to make sure that",
			  "displayTime": 184.935
			},
			{
			  "text": "someone's not trying to set name to null or to an empty string.",
			  "displayTime": 191.935
			},
			{
			  "text": "I want to make sure that the name actually has some characters, and that's a common use of set logic,",
			  "displayTime": 195.935
			},
			{
			  "text": "to validate an incoming value to make sure it meets some standards before you accept that value into your object.",
			  "displayTime": 200.935
			},
			{
			  "text": "There's another type of property in C# known as the auto-implemented property, this is a property that just",
			  "displayTime": 206.935
			},
			{
			  "text": "has the keywords get and set inside, there's semicolons after get and set, there's no curly braces or code,",
			  "displayTime": 212.935
			},
			{
			  "text": "and it's known as an auto-implemented property because behind the scenes the C# complier will automatically",
			  "displayTime": 219.935
			},
			{
			  "text": "create a field to store the value for this property, and it will automatically read that field during a get",
			  "displayTime": 223.935
			},
			{
			  "text": "operation, and write to that field during a set operation, but I never have to write that field or the code",
			  "displayTime": 229.935
			},
			{
			  "text": "explicitly, the C# complier will do that for me behind the scenes.",
			  "displayTime": 234.935
			},
			{
			  "text": "Let's take a closer look at this in code. Inside of our program let's open up the GradeBook, so I can remind",
			  "displayTime": 237.935
			},
			{
			  "text": "you about the public field that we added to this class earlier in the course, it's a field called Name,",
			  "displayTime": 247.935
			},
			{
			  "text": "and I have capitalized this member because it is a public member, and that's the typical convention in the C# program.",
			  "displayTime": 251.935
			},
			{
			  "text": "Inside of Program.cs I can make an assignment to that Name field just by saying book.Name = Scott's",
			  "displayTime": 258.935
			},
			{
			  "text": "GradeBook, so you can think of that as writing a reference into that field, a reference to a string that says",
			  "displayTime": 266.935
			},
			{
			  "text": "Scott's GradeBook, and I can read that value just by using the .operator and saying book.Name.",
			  "displayTime": 272.935
			},
			{
			  "text": "That will write out the name of the GradeBook when I run the program, and now I can see Scott's GradeBook.",
			  "displayTime": 280.935
			},
			{
			  "text": "Now let's change this over to being a property, and I'll start by implementing an auto-implemented property,",
			  "displayTime": 288.935
			},
			{
			  "text": "that's where I just have get and set with semicolons immediately after the keywords, there's no code",
			  "displayTime": 294.935
			},
			{
			  "text": "involved, but I have now changed this member of the GradeBook class from being a field to a property,",
			  "displayTime": 299.935
			},
			{
			  "text": "and you might be wondering what is the difference, well from a client's perspective, that is someone who's",
			  "displayTime": 304.935
			},
			{
			  "text": "using the Gradebook, there is no difference, I still say book.Name = to assign to that property,",
			  "displayTime": 309.935
			},
			{
			  "text": "that will call the setter, and I still use book.Name to retrieve the value of that property, and read the",
			  "displayTime": 315.935
			},
			{
			  "text": "property, that will call the getter, and behind the scenes the C# complier has automatically created a",
			  "displayTime": 320.935
			},
			{
			  "text": "backing field for this property, that's what we would call the field behind a property that actually stores the value.",
			  "displayTime": 326.935
			},
			{
			  "text": "So this change hasn't made a huge difference in my code, but I will tell you there are some parts to the .NET",
			  "displayTime": 333.935
			},
			{
			  "text": "Framework and other frameworks that treat properties and fields differently, specifically if you're doing",
			  "displayTime": 338.935
			},
			{
			  "text": "serialization, that is if you're taking an object, and you're serializing it into XML, or JSON, or saving it",
			  "displayTime": 343.935
			},
			{
			  "text": "to a database, there are some frameworks that only look at properties when they do the serialization,",
			  "displayTime": 349.935
			},
			{
			  "text": "they do not look at fields by default. There are also data-binding features in the .NET Framework,",
			  "displayTime": 355.935
			},
			{
			  "text": "these are features where you assign an object to some part of your user interface, and the data-binding",
			  "displayTime": 360.935
			},
			{
			  "text": "features will automatically move data from an object onto the screen, and some of these data-binding features",
			  "displayTime": 366.935
			},
			{
			  "text": "will only move properties, they won't look at fields, so again there can be a very subtle difference between",
			  "displayTime": 371.935
			},
			{
			  "text": "fields and properties, and I would say in general in you're going to make the member publically available,",
			  "displayTime": 376.935
			},
			{
			  "text": "we typically do that through a property instead of a field. In other words I will keep the grades field as a",
			  "displayTime": 382.935
			},
			{
			  "text": "field and keep that private, I only want to be able to change grades inside of this class, but names,",
			  "displayTime": 390.935
			},
			{
			  "text": "since I'm making that publically available, I will make that a property, and I will make it a capitalized",
			  "displayTime": 395.935
			},
			{
			  "text": "member of the type, although it is perfectly legal to have private properties or internal properties,",
			  "displayTime": 400.935
			},
			{
			  "text": "but I would say you just don't see them that often. But what if we wanted to protect against this situation,",
			  "displayTime": 407.935
			},
			{
			  "text": "what if we wanted to protect against someone saying book.Name = an empty string, or book.Name = null,",
			  "displayTime": 412.935
			},
			{
			  "text": "so null is a keyword in C#, and as we talked about before a field or a variable that holds a null value,",
			  "displayTime": 421.935
			},
			{
			  "text": "it doesn't point to anything, it doesn't reference anything, there's no object, or there's no string there",
			  "displayTime": 429.935
			},
			{
			  "text": "now to interact with, and currently if I run the program, if I try to Console.WriteLine that null value it",
			  "displayTime": 433.935
			},
			{
			  "text": "just comes out as blank. I want to prevent that, and that means I won't be able to use an auto-implemented",
			  "displayTime": 439.935
			},
			{
			  "text": "property, I'm going to need to add some logic to my setter to perform some validation, and as soon as I start",
			  "displayTime": 445.935
			},
			{
			  "text": "to add code to the setter then I either need to get rid of my getter or also add code to the getter,",
			  "displayTime": 453.935
			},
			{
			  "text": "and because I'm not using an auto-implemented property anymore I'm going to need to create a field explicitly",
			  "displayTime": 458.935
			},
			{
			  "text": "that will be able to hold that string value, so I will create a private field called _name, and when someone",
			  "displayTime": 465.935
			},
			{
			  "text": "wants to read the name property I'll just return name, but again I could do anything that I wanted to in here.",
			  "displayTime": 472.935
			},
			{
			  "text": "I could return a new string that was uppercased, or lowercased, or a sub string, I'll just return _name,",
			  "displayTime": 479.935
			},
			{
			  "text": "and when someone's trying to write to this property I want to check to see if the string is null or empty,",
			  "displayTime": 487.935
			},
			{
			  "text": "so I can write String.IsNullOrEmpty, that is a static method on the string class.",
			  "displayTime": 491.935
			},
			{
			  "text": "I will pass in value, which is the implicit variable that I have inside of a setter that will contain the",
			  "displayTime": 498.935
			},
			{
			  "text": "value that someone is trying to write into my property, and then IsNullOrEmpty will return true is value IsNullOrEmpty.",
			  "displayTime": 503.935
			},
			{
			  "text": "If I put an exclamation point here, that is a logical not operation that would turn that true into a false,",
			  "displayTime": 511.935
			},
			{
			  "text": "so I'm saying if the string is not null or empty only then will I assign that value into the name,",
			  "displayTime": 518.935
			},
			{
			  "text": "otherwise I will ignore this value. What I'd really like to do is create an error condition if someone gives",
			  "displayTime": 526.935
			},
			{
			  "text": "me an empty name, that way I can let the caller know that they did something wrong, but we'll talk about",
			  "displayTime": 534.935
			},
			{
			  "text": "error conditions like that more in the next module when we talk about exceptions.",
			  "displayTime": 538.935
			},
			{
			  "text": "For right now I just want to show you when I run the program, this assignment Book.Name = null, we should be",
			  "displayTime": 542.935
			},
			{
			  "text": "ignoring that value, we'll stick with Scott's GradeBook, and that's the real power of properties.",
			  "displayTime": 548.935
			},
			{
			  "text": "You can write logic inside of a get accessor and a set accessor.",
			  "displayTime": 553.935
			},
			{
			  "text": "The get accessor can perform computations, or just retrieve some field value, and return it, the set accessor",
			  "displayTime": 557.935
			},
			{
			  "text": "can perform validations, and it can protect the internal state of your object, and make sure that someone",
			  "displayTime": 563.935
			},
			{
			  "text": "isn't giving you a value that you don't want. So properties are really all about state, methods are still",
			  "displayTime": 568.935
			},
			{
			  "text": "all about behavior, and next let's turn our attention to one more type of member that we can add to a type.",
			  "displayTime": 574.935
			}
		  ]
		},
		{
		  "title": "Events",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m5&clip=3&mode=live",
		  "segments": [
			{
			  "text": "Another type of member that you can have in a class is an event.",
			  "displayTime": 0.0
			},
			{
			  "text": "To understand events we need to delve into some new concepts in C# and .NET, but before we do let me give you",
			  "displayTime": 4.5
			},
			{
			  "text": "a high-level overview of why events are useful. Many times in software development we need to interact with",
			  "displayTime": 10.045
			},
			{
			  "text": "or keep track of components that do interesting things at unpredictable times.",
			  "displayTime": 17.045
			},
			{
			  "text": "For example, a button on a screen is a component that we want to keep track of, and we want to know when a",
			  "displayTime": 21.045
			},
			{
			  "text": "user clicks on this button. We don't know exactly when the user will click on the button, but we do need to",
			  "displayTime": 26.045
			},
			{
			  "text": "be notified because when the user does click we typically need to then execute some code.",
			  "displayTime": 32.045
			},
			{
			  "text": "Sometimes we need to save data to a file or read data from a database, and this isn't just about components",
			  "displayTime": 37.045
			},
			{
			  "text": "on the screen like a button. We might need to also keep track of a directory on the hard drive and be",
			  "displayTime": 43.045
			},
			{
			  "text": "notified when a user places a new file on that directory, or when a timer expires because I want to execute",
			  "displayTime": 47.045
			},
			{
			  "text": "some code every 60 seconds, and refresh some data, like refreshing stock quotes.",
			  "displayTime": 54.045
			},
			{
			  "text": "All these are examples of when events are useful. Events allow an object, like an object that represents a",
			  "displayTime": 59.045
			},
			{
			  "text": "button, events allow that object to announce to anyone who is listening that something interesting happened,",
			  "displayTime": 65.045
			},
			{
			  "text": "like when the user clicks on that button. We call the announcement an event, and we say that the button publishes this event.",
			  "displayTime": 70.045
			},
			{
			  "text": "The code that is interested in the click event is code that subscribes to the event.",
			  "displayTime": 77.5
			},
			{
			  "text": "You can have multiple subscribers listening to a single click event, so that when the user clicks a button 0",
			  "displayTime": 82.045
			},
			{
			  "text": "or more independent pieces of code will execute. One piece of code might save data to a file,",
			  "displayTime": 90.045
			},
			{
			  "text": "another piece might change the color of the screen, another piece might log information to a database,",
			  "displayTime": 95.045
			},
			{
			  "text": "those are three independent pieces of code all executing off of the same event, and the beauty of events is",
			  "displayTime": 100.045
			},
			{
			  "text": "that the button object itself, it doesn't need to keep track of who is subscribing, and the subscribers don't",
			  "displayTime": 108.045
			},
			{
			  "text": "need to know about each other. This is all done through the magic of delegates in C#, so in order to",
			  "displayTime": 113.045
			},
			{
			  "text": "understand events we really need to understand delegates first.",
			  "displayTime": 119.045
			}
		  ]
		},
		{
		  "title": "Delegates",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m5&clip=4&mode=live",
		  "segments": [
			{
			  "text": "Imagine that you want to declare a variable that references a method, so not a variable to hold an integer,",
			  "displayTime": 0.0
			},
			{
			  "text": "or point to a string, or point to any class object, you want to declare a variable, and point the variable to",
			  "displayTime": 8.225
			},
			{
			  "text": "a method, that means you'll have a variable that encapsulates executable code, and you can invoke the",
			  "displayTime": 14.225
			},
			{
			  "text": "variable just like you would invoke a method by using parentheses and optionally passing some arguments along.",
			  "displayTime": 19.225
			},
			{
			  "text": "In order for this to work you'll need to create a delegate type, so a delegate is a type just like we used",
			  "displayTime": 26.225
			},
			{
			  "text": "the class keyword to create a type, or the struct keyword to create a type, there is a delegate keyword in",
			  "displayTime": 32.225
			},
			{
			  "text": "the C# language, and that keyword will allow me to create a type that is dedicated to referencing methods,",
			  "displayTime": 37.225
			},
			{
			  "text": "and that means the type definition for a delegate looks much different than a class definition.",
			  "displayTime": 43.225
			},
			{
			  "text": "The type definition looks almost like a method definition, the type definition describes the methods that I want to call.",
			  "displayTime": 48.225
			},
			{
			  "text": "In this code snippet I'm creating a delegate called Writer. I know this is a delegate because I can see the",
			  "displayTime": 56.225
			},
			{
			  "text": "delegate keyword, and a variable of this type will point to a method that returns void and takes a string parameter.",
			  "displayTime": 61.225
			},
			{
			  "text": "There's no curly braces here, I'm not defining a method with executable code, I just end the statement with a semicolon.",
			  "displayTime": 68.225
			},
			{
			  "text": "I am defining a type that I can use to create variables, and point those variables to methods that have this",
			  "displayTime": 75.225
			},
			{
			  "text": "same signature and same return type. Again the name of this type is Writer.",
			  "displayTime": 80.225
			},
			{
			  "text": "Now imagine I have a class called Logger. I can instantiate a Logger, and once I have a Logger I can invoke",
			  "displayTime": 86.225
			},
			{
			  "text": "a WriteMessage method, and have the Logger do something interesting like print a message to the screen.",
			  "displayTime": 92.225
			},
			{
			  "text": "I can also write a bit of code that instantiates a Logger and then instantiates a delegate that references",
			  "displayTime": 98.225
			},
			{
			  "text": "the WriteMessage method itself of the Logger object. That's what this bit of code here is doing.",
			  "displayTime": 105.225
			},
			{
			  "text": "Notice I'm not invoking logger.WriteMessage, there are no parentheses after WriteMessage, this code is",
			  "displayTime": 111.225
			},
			{
			  "text": "literally creating a new instance of a delegate and passing the WriteMessage method to this writer delegate.",
			  "displayTime": 117.225
			},
			{
			  "text": "That delegate is saved into a variable named Writer, and I can now invoke logger.WriteMessage just by",
			  "displayTime": 123.225
			},
			{
			  "text": "invoking this variable, all I need to do is apply parentheses to the variable and pass the string parameter",
			  "displayTime": 130.225
			},
			{
			  "text": "that I want the Logger to use. Now depending on what programming background you have, this information might",
			  "displayTime": 135.225
			},
			{
			  "text": "be a bit foreign. If you come from a C or C++ background you can think of a delegate as a way of creating a",
			  "displayTime": 140.5
			},
			{
			  "text": "type save function pointer, and if you come from any functional language like JavaScript, the idea of",
			  "displayTime": 146.0
			},
			{
			  "text": "having a variable that points to a function, that's not new, it's just going to be the C# syntax and all the",
			  "displayTime": 152.0
			},
			{
			  "text": "type checking that you'll need to get used to because the C# complier is very picky about the methods that I",
			  "displayTime": 157.5
			},
			{
			  "text": "can point to with a delegate. Like in this example, a writer delegate will only work with methods that",
			  "displayTime": 162.0
			},
			{
			  "text": "return void and take a single string parameter. Notice the name of the method doesn't matter, I can have the",
			  "displayTime": 167.5
			},
			{
			  "text": "delegate called Writer, and reference a method called WriteMessage, or any other name as long as that method",
			  "displayTime": 173.0
			},
			{
			  "text": "returns void and takes a string. Let's take a look at this in Visual Studio.",
			  "displayTime": 179.0
			},
			{
			  "text": "Back inside of the GradeBook let's look at a scenario where something else in the application needs to know",
			  "displayTime": 184.0
			},
			{
			  "text": "when the name of the GradeBook is changing. Maybe that something else is a data-binding framework that needs",
			  "displayTime": 190.0
			},
			{
			  "text": "to update the screen with the new GradeBook name whenever the name changes.",
			  "displayTime": 195.5
			},
			{
			  "text": "We don't know, we just know that the only place in the entire application that knows exactly when the",
			  "displayTime": 199.5
			},
			{
			  "text": "GradeBook name is changing is the code that is inside of the setter for the name property itself.",
			  "displayTime": 206.5
			},
			{
			  "text": "If from inside of here I could announce somehow that the name is changing and invoke some other code,",
			  "displayTime": 212.225
			},
			{
			  "text": "that would satisfy my requirements that I need to call something else in the application when the name",
			  "displayTime": 218.225
			},
			{
			  "text": "changes, but I don't know what. That's the perfect scenario for delegates because delegates essentially",
			  "displayTime": 222.225
			},
			{
			  "text": "allow you to have a variable that points to a method, and because it's a variable it can point to different",
			  "displayTime": 227.225
			},
			{
			  "text": "methods it can be assigned to, and that's what I need inside of my setter, I need to know when the name is",
			  "displayTime": 232.225
			},
			{
			  "text": "changing, perhaps I could have an additional if check here to say if _name is not equal to the incoming",
			  "displayTime": 237.225
			},
			{
			  "text": "value, so I know for a fact that the name is changing, that I want to be able to invoke some arbitrary code.",
			  "displayTime": 245.225
			},
			{
			  "text": "Let's say I have a delegate called NameChanged. I want to be able to invoke that, perhaps I pass in the",
			  "displayTime": 251.225
			},
			{
			  "text": "existing name, and the new value that will be assigned to the name, and that will fulfill my responsibility",
			  "displayTime": 258.225
			},
			{
			  "text": "to the outside world that I've made this announcement, my name is changing.",
			  "displayTime": 266.225
			},
			{
			  "text": "In order to pull this off I'm going to need a delegate, so let me right-click on the GradeBook project,",
			  "displayTime": 268.225
			},
			{
			  "text": "and I'm going to say Add, Class even though what I really want is a delegate, this is the easiest way to get",
			  "displayTime": 275.225
			},
			{
			  "text": "a .cs file into the project. I will call this NameChangedDelegate, and press Add.",
			  "displayTime": 280.225
			},
			{
			  "text": "Visual Studio will assume I want something with a .cs extension, and no, I don't want a class, and I don't",
			  "displayTime": 287.225
			},
			{
			  "text": "want the curly braces. What I do want is a new type, a public type that I'll create with delegate, and now I",
			  "displayTime": 294.225
			},
			{
			  "text": "need to describe the types of methods that this can invoke. I don't care about the return value from this",
			  "displayTime": 302.225
			},
			{
			  "text": "method, all I know is it's going to need to take two string values, so let me create this delegate by saying",
			  "displayTime": 308.225
			},
			{
			  "text": "the method will return void, and the method will take two string parameters, let's call them existingName and newName.",
			  "displayTime": 314.225
			},
			{
			  "text": "Just remember that the names of these parameters are arbitrary.",
			  "displayTime": 325.225
			},
			{
			  "text": "When the C# complier is checking to make sure this delegate points to the proper method it doesn't check the",
			  "displayTime": 329.225
			},
			{
			  "text": "parameter names to make sure they match, it's only going to check the type, so a method that returns void and",
			  "displayTime": 333.225
			},
			{
			  "text": "takes two strings, that's the type of method that I can point this delegate to.",
			  "displayTime": 339.225
			},
			{
			  "text": "And so with this delegate back in the GradeBook I can now create a public field using that delegate type,",
			  "displayTime": 343.225
			},
			{
			  "text": "so public NameChangedDelegate, let's call it NameChanged, and I now have a public member that other areas of",
			  "displayTime": 351.225
			},
			{
			  "text": "the application can walk up, and assign to this delegate, and give it the code that needs to be invoked out",
			  "displayTime": 358.225
			},
			{
			  "text": "there somewhere in the outside world. All I need to do in my GradeBook is just invoke that delegate at the",
			  "displayTime": 364.225
			},
			{
			  "text": "appropriate time when the name has changed. Now just so we get some interesting output let's initialize",
			  "displayTime": 371.225
			},
			{
			  "text": "_name to something inside of the constructor for the GradeBook just so there is always some value there.",
			  "displayTime": 377.225
			},
			{
			  "text": "Let's just use the text Empty, and now what I want to do back in my program is take advantage of this new",
			  "displayTime": 385.225
			},
			{
			  "text": "feature to execute arbitrary code when the name of the GradeBook changes.",
			  "displayTime": 391.225
			},
			{
			  "text": "So back in Program.cs at some point after I create the book I want to be able to say book.NameChanged = a new",
			  "displayTime": 396.225
			},
			{
			  "text": "instance of the NameChangedDelegate, and then pass in a method that can be invoked.",
			  "displayTime": 407.225
			},
			{
			  "text": "I currently don't have a method that returns void and takes two strings, so before we finish that line of",
			  "displayTime": 412.225
			},
			{
			  "text": "code, let's write something. This will have to be a static method so that I can reach it from the main method.",
			  "displayTime": 417.225
			},
			{
			  "text": "It has to be a method that returns void. I can call it anything I want, let's call it OnNameChanged,",
			  "displayTime": 423.225
			},
			{
			  "text": "and I just have to take two string parameters, the names don't matter, but I think existingName and newName,",
			  "displayTime": 429.225
			},
			{
			  "text": "those are pretty good parameter names, so we will stick with those, and when this method is invoked I want to",
			  "displayTime": 437.225
			},
			{
			  "text": "write out some information. Let's use some string interpolation, and say Grade book changing name from",
			  "displayTime": 443.225
			},
			{
			  "text": "existingName to newName, and that should be everything that I need, so let me take this method name,",
			  "displayTime": 451.225
			},
			{
			  "text": "and copy it, and I should be able to paste it here, and the delegate will be happy and say ah, you want me to",
			  "displayTime": 459.225
			},
			{
			  "text": "call OnNameChanged whenever someone invokes this delegate. Let's try it, Ctrl+F5 to run, and I can see",
			  "displayTime": 466.225
			},
			{
			  "text": "Grade book changing name from Empty to Scott's Grade Book, and this should happen anytime the name changes,",
			  "displayTime": 473.225
			},
			{
			  "text": "so I should be able to say book.Name = Scott's Grade Book, and let's say book.Name = just Grade Book.",
			  "displayTime": 478.5
			},
			{
			  "text": "We should see that method fire twice, and it does. It goes from Empty to Scott's Grade Book and then Scott's",
			  "displayTime": 486.225
			},
			{
			  "text": "to just Grade Book, and this is the type of situation where you want to use a delegate, so going back to the",
			  "displayTime": 492.225
			},
			{
			  "text": "UI example that we talked about earlier, let's say you're writing your class that's going to have a button",
			  "displayTime": 497.0
			},
			{
			  "text": "associated with it because it's a part of a user interface, and your class, the code inside of it will know",
			  "displayTime": 503.225
			},
			{
			  "text": "when the button is clicked, but how can your class announce to the rest of the world when that button is",
			  "displayTime": 508.225
			},
			{
			  "text": "clicked because chances are it might not be just you that is interested in that button click, you might need",
			  "displayTime": 514.225
			},
			{
			  "text": "to tell other pieces of the application when the button is clicked.",
			  "displayTime": 518.225
			},
			{
			  "text": "How can you do that? Ultimately it's done with events that build on top of delegates, and right now we're",
			  "displayTime": 521.225
			},
			{
			  "text": "just focusing on the delegate part. So let me show you a few other things that are interesting about delegates.",
			  "displayTime": 527.225
			},
			{
			  "text": "Let's come back to Program.cs, and let me create a copy of OnNameChanged, and I'm going to paste it,",
			  "displayTime": 533.225
			},
			{
			  "text": "and we know now that will create a complier error because we have two methods with the exact same signature,",
			  "displayTime": 542.225
			},
			{
			  "text": "but I will change the second one to be OnNameChanged2, and let's do something simple inside of here like",
			  "displayTime": 547.225
			},
			{
			  "text": "write out three asterix, and now back up at the top, what happens when if I say book.NameChanged = this new",
			  "displayTime": 555.225
			},
			{
			  "text": "NameChangedDelegate OnNameChanged, and then right after that line of code I assign again with OnNameChanged2.",
			  "displayTime": 563.225
			},
			{
			  "text": "Well if I run the program what we'll see is that we're only outputting asterixs now, and that's because I've",
			  "displayTime": 571.5
			},
			{
			  "text": "effectively overwritten the information inside of that delegate that would allow me to call OnNameChanged,",
			  "displayTime": 578.225
			},
			{
			  "text": "I've overwritten that delegate, I'm now calling OnNameChanged2 only.",
			  "displayTime": 583.225
			},
			{
			  "text": "However the interesting thing about delegates in C# is they can reference multiple methods, we call them",
			  "displayTime": 588.225
			},
			{
			  "text": "MutlicastDelegates because when I invoke a delegate that might call one method, but a delegate can also hold",
			  "displayTime": 594.225
			},
			{
			  "text": "references to multiple methods, so invoking NameChanged might actually call 10 different methods because",
			  "displayTime": 601.225
			},
			{
			  "text": "there might be 10 different pieces of the application that are interested in knowing when the name of a",
			  "displayTime": 608.225
			},
			{
			  "text": "GradeBook has changed, and the way I can get that to work is instead of doing an assignment I can use the += operation.",
			  "displayTime": 613.225
			},
			{
			  "text": "You might remember += from some of the mathematical operations we did with integers.",
			  "displayTime": 622.225
			},
			{
			  "text": "I can say some variable += 3, an integer variable, and that will take whatever is in that integer variable,",
			  "displayTime": 626.225
			},
			{
			  "text": "and add 3 to it, it's like saying x = x+3. This is the same concept, I'm saying take whatever is in",
			  "displayTime": 633.225
			},
			{
			  "text": "NameChanged, and add this additional delegate, and then add this additional delegate, so that now when I run",
			  "displayTime": 640.225
			},
			{
			  "text": "the program each time the name changes, not only do I invoke OnNameChanged, but I also invoke OnNameChanged2,",
			  "displayTime": 647.225
			},
			{
			  "text": "and just so you know there's also a -= operation to remove a reference to a method, that would effectively be",
			  "displayTime": 656.225
			},
			{
			  "text": "a way of saying I don't care about the NameChanged operation anymore, please remove me from your list of",
			  "displayTime": 664.225
			},
			{
			  "text": "methods that you call, but this capability of being able to invoke multiple methods, this is ideal again for",
			  "displayTime": 669.225
			},
			{
			  "text": "situations like building a UI component, or there might be multiple people, or multiple components that are",
			  "displayTime": 676.225
			},
			{
			  "text": "interested in that button click event, and although I could do that with delegates, delegates don't quite",
			  "displayTime": 681.225
			},
			{
			  "text": "offer enough encapsulation because someone can always walk up to book.NameChanged, and say I'm going to set",
			  "displayTime": 687.225
			},
			{
			  "text": "this to null, which is empty it out, and that effectively overwrites all the previous delegates that were in",
			  "displayTime": 693.5
			},
			{
			  "text": "there, and that's not something that I want to happen if I want different areas of the application to be able",
			  "displayTime": 699.225
			},
			{
			  "text": "to independently subscribe to this event that the GradeBook name is changing.",
			  "displayTime": 704.225
			},
			{
			  "text": "I want to prevent lines of code like this somehow, and that's exactly what I can do by using events instead",
			  "displayTime": 709.0
			},
			{
			  "text": "of delegates, let's look at that next.",
			  "displayTime": 715.225
			}
		  ]
		},
		{
		  "title": "Events Revisited",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m5&clip=5&mode=live",
		  "segments": [
			{
			  "text": "Once you have a handle on how delegates work, it's very easy to",
			  "displayTime": 0.0
			},
			{
			  "text": "understand events because events are based on and use delegates.",
			  "displayTime": 5.5
			},
			{
			  "text": "The only thing I need to do to make NameChanged a proper event is to add the C# keyword here event,",
			  "displayTime": 10.697
			},
			{
			  "text": "and now there is no code that I need to change inside of the GradeBook because events are based on delegates,",
			  "displayTime": 17.697
			},
			{
			  "text": "and I can still invoke NameChanged. The C# complier will still check to make sure that I pass along two",
			  "displayTime": 23.697
			},
			{
			  "text": "parameters, both of type string, and there's nothing that has to change inside of the GradeBook.",
			  "displayTime": 29.697
			},
			{
			  "text": "The reason that events are preferred to just exposing delegates is because of the error that we see inside of Program.cs.",
			  "displayTime": 34.697
			},
			{
			  "text": "The error is that NameChanged can only appear on the left-hand side of += or -=.",
			  "displayTime": 41.697
			},
			{
			  "text": "That means from outside of the GradeBook the only thing that other pieces of code can do is add a subscriber",
			  "displayTime": 48.697
			},
			{
			  "text": "to event, or remove a subscriber to this event, and it's no longer possible to do an assignment, and wipe out",
			  "displayTime": 54.697
			},
			{
			  "text": "everything that was inside, wipe out all the other subscriptions.",
			  "displayTime": 61.697
			},
			{
			  "text": "This is what we want for events because we want independent pieces of code being able to subscribe and",
			  "displayTime": 64.697
			},
			{
			  "text": "unsubscribe, and not interfere with others, so this line of code is now an error, I will remove that line of",
			  "displayTime": 70.697
			},
			{
			  "text": "code, and just show you that I can use += as many times as I want, I can even wire up the same method twice.",
			  "displayTime": 76.697
			},
			{
			  "text": "Now you can see every time the name changes I get two sets of asterix, and I will also point out now that the",
			  "displayTime": 84.697
			},
			{
			  "text": "C# complier is pretty intelligent when it comes to using Events and delegates, and the syntax that I'm",
			  "displayTime": 89.697
			},
			{
			  "text": "currently using to wire up a subscriber for that event is a little bit verbose.",
			  "displayTime": 95.697
			},
			{
			  "text": "I can actually remove new NameChangedDelegate, I can remove that from all three lines of code, and then once",
			  "displayTime": 101.0
			},
			{
			  "text": "I get rid of the parentheses at the end I will still have legal C# code, because the C# complier is smart",
			  "displayTime": 107.697
			},
			{
			  "text": "enough to look at NameChanged, and the method that I'm trying to add as a subscriber, and it can figure out",
			  "displayTime": 114.697
			},
			{
			  "text": "that those two things are compatible, and it will just automatically create that delegate instance for me",
			  "displayTime": 119.697
			},
			{
			  "text": "behind the scenes, I don't have to explicitly say new and then the name of some delegate.",
			  "displayTime": 124.697
			},
			{
			  "text": "So this code is a little bit easier on the eyes, and just as a quick quiz, what happens if I add another line",
			  "displayTime": 129.697
			},
			{
			  "text": "of code here with a -= operation, so now I'm subscribing OnNameChanged2 twice, and then unsubscribing once.",
			  "displayTime": 135.697
			},
			{
			  "text": "The question is will -= wipe out all of the subscriptions for OnNameChanged2 or just one of them, and if I",
			  "displayTime": 146.0
			},
			{
			  "text": "run the program we'll see I now have just one set of asterix, so OnNameChanged2 was subscribed twice,",
			  "displayTime": 152.697
			},
			{
			  "text": "removed once, and then that result was one subscription, therefore that method fires once every time the name changes.",
			  "displayTime": 161.697
			},
			{
			  "text": "Now I also want to point out that we're doing something unconventional with our event, and that is that we're",
			  "displayTime": 168.0
			},
			{
			  "text": "passing two string parameters along with this event. There is a convention in .NET, it's not a convention",
			  "displayTime": 174.697
			},
			{
			  "text": "that you have to follow, but it's a convention that 99.9% of all events in the .NET Framework follow.",
			  "displayTime": 181.697
			},
			{
			  "text": "It's a convention where an event always passes along two parameters, the first parameter is going to be the",
			  "displayTime": 186.697
			},
			{
			  "text": "sender of the event, in other words if the GradeBook is announcing that the name has changed, it's going to",
			  "displayTime": 193.697
			},
			{
			  "text": "send itself as the first parameter, and then the second parameter always contains all of the arguments or all",
			  "displayTime": 199.697
			},
			{
			  "text": "of the needed information about that event, which means I'm going to need to build a custom class to put",
			  "displayTime": 205.697
			},
			{
			  "text": "together the existing name and the new name into a single object so I can pass that object along as the arguments.",
			  "displayTime": 210.697
			},
			{
			  "text": "Let's make this change. I'm going to go to the GradeBook project, and add another class, I'll call this",
			  "displayTime": 217.697
			},
			{
			  "text": "class NameChangedEventArgs, which is another convention when you are working with events.",
			  "displayTime": 226.697
			},
			{
			  "text": "The parameter that passes along the argument for the event, the name of its type will always end with the words EventArgs.",
			  "displayTime": 232.697
			},
			{
			  "text": "So now I have my class, let me add the public keyword here to make this a public class, and now I need",
			  "displayTime": 240.0
			},
			{
			  "text": "properties for the existing name and the new name. The easiest way to add a property when you're using",
			  "displayTime": 246.0
			},
			{
			  "text": "Visual Studio is to use a code snippet p, r, o, p, I'll just type that and press Tab twice, now I can fill in",
			  "displayTime": 252.697
			},
			{
			  "text": "the type for my property, and then Tab twice over to the name, and fill out the name of my property,",
			  "displayTime": 258.697
			},
			{
			  "text": "and Visual Studio will give me an auto-implemented property. Let me go to the next line of code and p, r, o,",
			  "displayTime": 266.697
			},
			{
			  "text": "p again, this time I want the NewName property to be here. So this will give me my EventArgs class,",
			  "displayTime": 271.697
			},
			{
			  "text": "and something that we'll talk about in the Object Oriented Programming module of this course is how a class",
			  "displayTime": 279.697
			},
			{
			  "text": "can inherent from another class. If you haven't worked with inheritance before then you can just wait till",
			  "displayTime": 285.697
			},
			{
			  "text": "we get to that module for me to explain this in more detail, but in .NET anything that's going to pass along",
			  "displayTime": 292.697
			},
			{
			  "text": "arguments inside of an event, it should derive or inherent from an EventArgs base class that the .NET Framework provides.",
			  "displayTime": 298.697
			},
			{
			  "text": "That's what this syntax is doing, it's specifying an inheritance relationship where NameChangedEventArgs derives from EventArgs.",
			  "displayTime": 305.697
			},
			{
			  "text": "Again, more on inheritance later. Now I want to change over my delegate so it's not taking two string parameters any longer.",
			  "displayTime": 314.0
			},
			{
			  "text": "Instead, it needs to take the sender of this event, and then the NameChangedEventArgs, an object of that type.",
			  "displayTime": 322.697
			},
			{
			  "text": "Why am I specifying sender as an object? Object is another one of those topics that we'll talk a little more",
			  "displayTime": 331.697
			},
			{
			  "text": "about when we talk about object-oriented programming, but this is another convention in .NET around events,",
			  "displayTime": 336.697
			},
			{
			  "text": "and when I have a parameter typed in as an object, that means I can pass anything as a parameter here.",
			  "displayTime": 341.697
			},
			{
			  "text": "I can pass an integer value, or a string, or a GradeBook instance, and if the GradeBook is the sender of this",
			  "displayTime": 348.697
			},
			{
			  "text": "event, GradeBook is what I want to pass here, but I will type it as object because that's a common convention.",
			  "displayTime": 356.697
			},
			{
			  "text": "Now that I've changed the delegate around I will have some complier errors both in Program.cs and in GradeBook.cs.",
			  "displayTime": 362.0
			},
			{
			  "text": "In GradeBook.cs I need to pass EventArgs and the sender here instead of two strings.",
			  "displayTime": 369.0
			},
			{
			  "text": "So first let's create an instance of NameChangedEventArgs, I will just call it args, and initialize a new",
			  "displayTime": 375.697
			},
			{
			  "text": "instance, and say that the ExistingName equals the value that I currently have in _name, and the NewName that",
			  "displayTime": 382.697
			},
			{
			  "text": "will equal the incoming value, and now when I invoke NameChanged, I should really pass along myself and then these arguments.",
			  "displayTime": 392.697
			},
			{
			  "text": "How do I pass along myself? Well inside of every non-static method in a C# class or struct, there is an",
			  "displayTime": 401.697
			},
			{
			  "text": "implicit variable called this, and this will reference the object that I'm inside of, so this will reference",
			  "displayTime": 407.697
			},
			{
			  "text": "the GradeBook object that we're currently operating on. I just need to pass along this and args, and just to",
			  "displayTime": 414.697
			},
			{
			  "text": "show you if I type this., here you can see all of the members of the GradeBook, so there's _Name,",
			  "displayTime": 421.697
			},
			{
			  "text": "there's the property name, there's the private field grades, I can see private fields through this because",
			  "displayTime": 426.697
			},
			{
			  "text": "I'm using code that is inside of the same class, so this is a variable that you can use anywhere in your C#",
			  "displayTime": 432.697
			},
			{
			  "text": "code inside of an instance member if you need to refer to yourself, or pass yourself along as another",
			  "displayTime": 438.697
			},
			{
			  "text": "parameter, and now I will need to change Program.cs because delegates are very type safe, and now the C#",
			  "displayTime": 444.697
			},
			{
			  "text": "complier sees that I'm using these methods that no longer take the parameters that the delegate is",
			  "displayTime": 451.697
			},
			{
			  "text": "describing, so I wrote these methods as taking two strings, and now this delegate is trying to pass an object",
			  "displayTime": 456.697
			},
			{
			  "text": "and a NameChangedEventArgs, so I'm going to need to change these around.",
			  "displayTime": 462.697
			},
			{
			  "text": "Let's actually get rid of OnNameChanged2 all together, that makes this a little less work, and up here",
			  "displayTime": 467.697
			},
			{
			  "text": "OnNameChanged, I will change this around so that it can take a sender parameter, and then an instance of",
			  "displayTime": 473.697
			},
			{
			  "text": "NameChangedEventArgs, and down here I will just need to change these to use args.ExistingName,",
			  "displayTime": 481.697
			},
			{
			  "text": "and args.NewName, then let's remove the subscription to OnNameChanged2, that method no longer exists,",
			  "displayTime": 491.697
			},
			{
			  "text": "run the GradeBook, I can still see it's behaving correctly, and this is the magic of events in .NET.",
			  "displayTime": 498.697
			},
			{
			  "text": "Not all programming environments use events, but they are quite common if you're doing some sort of desktop",
			  "displayTime": 505.697
			},
			{
			  "text": "program, that is a C# application that runs under Windows or runs on a mobile phone.",
			  "displayTime": 509.697
			},
			{
			  "text": "It's quite common that your user interface elements will have events to let your code know when something",
			  "displayTime": 514.697
			},
			{
			  "text": "was clicked on or if something was hovered over, and now you'll know that you can subscribe to those events",
			  "displayTime": 519.697
			},
			{
			  "text": "using += and a method that accepts the parameters that event will raise.",
			  "displayTime": 525.697
			}
		  ]
		},
		{
		  "title": "Summary",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m5&clip=6&mode=live",
		  "segments": [
			{
			  "text": "In this module we looked at the different members that you can add to a class.",
			  "displayTime": 0.0
			},
			{
			  "text": "We looked at fields and properties, which can hold an exposed state.",
			  "displayTime": 6.0
			},
			{
			  "text": "We also looked at methods again, this time seeing how you can overload methods by writing multiple methods",
			  "displayTime": 9.395
			},
			{
			  "text": "with the same name, but different signatures. Remember the signature is defined not only by the name of the",
			  "displayTime": 14.395
			},
			{
			  "text": "method, but also the types and the number of parameters to that method.",
			  "displayTime": 19.395
			},
			{
			  "text": "And finally we looked at events, which allow subscribers to listen for interesting things that might happen in an object.",
			  "displayTime": 23.395
			},
			{
			  "text": "We saw how events are based on delegates, which are useful in other places in .NET programming too.",
			  "displayTime": 30.395
			},
			{
			  "text": "If you want more information on events and delegates I do spend some time on them in both my C# Generics",
			  "displayTime": 35.52
			},
			{
			  "text": "course and my Linq Fundamentals course. The whole goal of seeing fields, properties, methods, constructors,",
			  "displayTime": 40.5
			},
			{
			  "text": "and events all together is to know what tools are available when you want to build an abstraction in C#.",
			  "displayTime": 46.395
			},
			{
			  "text": "In this case we've built a GradeBook that encapsulates the behavior of the GradeBook.",
			  "displayTime": 52.395
			},
			{
			  "text": "It can computer statistics and raise events when important state changes happen.",
			  "displayTime": 56.395
			},
			{
			  "text": "We'll continue seeing how to build abstractions when we talk about object-oriented programming, but first we",
			  "displayTime": 60.0
			},
			{
			  "text": "will in the next module look at flow control in C#, which is how to branch, and loop, and both create,",
			  "displayTime": 66.0
			},
			{
			  "text": "and catch runtime errors.",
			  "displayTime": 71.395
			}
		  ]
		}
	  ]
	},
	{
	  "title": "Control Flow",
	  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m6&clip=0&mode=live",
	  "clips": [
		{
		  "title": "Introduction",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m6&clip=0&mode=live",
		  "segments": [
			{
			  "text": "Hi, this is Scott Allen, and in this module we're going to look at Control Flow in a C# application.",
			  "displayTime": 0.0
			},
			{
			  "text": "Specifically we're going to look at the keywords and constructs available in the language to perform",
			  "displayTime": 7.0
			},
			{
			  "text": "branching, looping, and to jump to different points in an execution path.",
			  "displayTime": 12.0
			},
			{
			  "text": "And finally, we'll look at error handling, that is how to throw errors, and how to catch errors,",
			  "displayTime": 17.0
			},
			{
			  "text": "and potentially resolve those errors.",
			  "displayTime": 22.0
			}
		  ]
		},
		{
		  "title": "Branching",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m6&clip=1&mode=live",
		  "segments": [
			{
			  "text": "Conditional branching is something that we're already using in this course, but we really haven't stopped to",
			  "displayTime": 1.924
			},
			{
			  "text": "dig into the details of the if statement, which is one way to branch execution.",
			  "displayTime": 5.924
			},
			{
			  "text": "And by branching, I mean we have some code where we want to go in one of two directions, it's like getting",
			  "displayTime": 10.924
			},
			{
			  "text": "into the branches of a tree where one branch sprouts out to the left, and one branch to the right,",
			  "displayTime": 15.924
			},
			{
			  "text": "which direction do we go? That's what an if statement can do. The if statement selects a statement for",
			  "displayTime": 20.924
			},
			{
			  "text": "execution based on the value of some Boolean expression. So, in the first if statement on the screen,",
			  "displayTime": 25.924
			},
			{
			  "text": "if age is less than or equal to a 2, that's a Boolean expression that we'll return true or false.",
			  "displayTime": 31.924
			},
			{
			  "text": "If the expression returns true, the if statement will execute the statement that immediately follows the if.",
			  "displayTime": 36.924
			},
			{
			  "text": "If the expression is false, we'll skip that statement. Notice that I don't need to use curly braces to",
			  "displayTime": 42.924
			},
			{
			  "text": "surround the call to ServeMilk, but it is a considered a good coding style to use curly braces,",
			  "displayTime": 47.924
			},
			{
			  "text": "because curly braces make the code easier to maintain and a little more readable.",
			  "displayTime": 53.924
			},
			{
			  "text": "The curly braces are required if I want to execute multiple statements when the expression returns true.",
			  "displayTime": 57.924
			},
			{
			  "text": "I need to use the curly braces to create a block of code, and that block can enclose multiple method",
			  "displayTime": 63.924
			},
			{
			  "text": "invocations, multiple statements, inside of the if. Without the curly braces, I will only execute the",
			  "displayTime": 69.924
			},
			{
			  "text": "statement that immediately follows the if. Now if the first expression inside of an if statement returns",
			  "displayTime": 74.924
			},
			{
			  "text": "false, let's say that age is a 10, we will not invoke ServeMilk, and instead we'll jump to the next if",
			  "displayTime": 80.924
			},
			{
			  "text": "statement, because this code snippet includes else statements. It's like saying I need to check to see if",
			  "displayTime": 87.924
			},
			{
			  "text": "the age is less than or equal to 2, if it's not, then I need to go and check to see if the age is less than 21.",
			  "displayTime": 93.924
			},
			{
			  "text": "And if both of the tasks were to return false, we will fall into the final else statement and invoke a method ServeDrink.",
			  "displayTime": 99.924
			},
			{
			  "text": "You don't need to include an else statement after every if that you write, but you can have as many else ifs",
			  "displayTime": 106.924
			},
			{
			  "text": "as you want after an if test. Notice that the curly braces are not required around ServeDrink either because",
			  "displayTime": 112.924
			},
			{
			  "text": "it's just a single statement, but again I believe it makes the code a little more readable.",
			  "displayTime": 118.924
			},
			{
			  "text": "And speaking of readability, it's also possible to nest if statements.",
			  "displayTime": 122.924
			},
			{
			  "text": "So any code that I would place where the comment is in the middle of the second code snippet,",
			  "displayTime": 126.924
			},
			{
			  "text": "that code will only execute if the age variable is less than or equal to 2 and the name variable is equal to Scott.",
			  "displayTime": 131.924
			},
			{
			  "text": "You have to be careful nesting too many statements together like this, because the code can become hard to",
			  "displayTime": 137.924
			},
			{
			  "text": "read when you have if statements inside of if statements inside of if statements.",
			  "displayTime": 142.924
			},
			{
			  "text": "Closely related to the if statement is the conditional operator.",
			  "displayTime": 146.924
			},
			{
			  "text": "It's also sometimes referred to as the ternary operator because it comes in three pieces.",
			  "displayTime": 150.924
			},
			{
			  "text": "The first piece is an expression that needs to return true or false, so age greater than 20.",
			  "displayTime": 155.924
			},
			{
			  "text": "And then the conditional operator will return one of two values based on the evaluation of that expression.",
			  "displayTime": 160.924
			},
			{
			  "text": "If the expression returns true, we'll return the value that is on the left-hand side of the colon.",
			  "displayTime": 167.924
			},
			{
			  "text": "And if the expression returns false, we'll return the value on the right-hand side of the colon.",
			  "displayTime": 172.924
			},
			{
			  "text": "So, for example, if the age variable contained the value 19, the expression will return false,",
			  "displayTime": 177.924
			},
			{
			  "text": "and the string pass would be assigned the value, nopass. This conditional operator is sometimes useful when",
			  "displayTime": 183.924
			},
			{
			  "text": "you just need a really quick conditional check to assign one of two different values.",
			  "displayTime": 189.924
			},
			{
			  "text": "You can write the exact same logic with an if statement, but with a conditional statement there's fewer",
			  "displayTime": 194.924
			},
			{
			  "text": "characters to type. You do have to be careful with the conditional operator because again,",
			  "displayTime": 198.924
			},
			{
			  "text": "sometimes it can make the code difficult to read. Let's take a look at branching in our Grade Book.",
			  "displayTime": 203.924
			},
			{
			  "text": "Let's take a look at branching using the Grades project that we've been working on throughout the course.",
			  "displayTime": 209.924
			},
			{
			  "text": "The first thing I'm going to do, just to simplify some of the output is remove some of the code that we used",
			  "displayTime": 214.924
			},
			{
			  "text": "to experiment with events. So I'm going to remove everything related to the Grade Book name,",
			  "displayTime": 220.924
			},
			{
			  "text": "and changing the name, and that includes writing out the name, and also this event handler that we had to",
			  "displayTime": 225.924
			},
			{
			  "text": "print out some output when the Grade Book name changed. Again just trying to simplify the program and I'm",
			  "displayTime": 233.924
			},
			{
			  "text": "trying to make all the changes to the code here in the video so you can follow along.",
			  "displayTime": 237.924
			},
			{
			  "text": "I can also get rid of one of these WriteResults if I remove that cast to an int that we placed here in the",
			  "displayTime": 242.924
			},
			{
			  "text": "previous module, and we did that just see an example of method overloading, but I'll give you another example",
			  "displayTime": 249.924
			},
			{
			  "text": "of method overloading here in just a bit. Here's what I'm thinking we could do, I want the GradeStatistics",
			  "displayTime": 254.924
			},
			{
			  "text": "class to compute a letter grade. What is a letter grade? Well here in the States when I was growing up,",
			  "displayTime": 259.924
			},
			{
			  "text": "my school teachers would grade all of my assignments, quizzes, and tests on a scale of 0 to 100,",
			  "displayTime": 265.924
			},
			{
			  "text": "where 100 was a perfect score, and then periodically they would take all my scores and compute an average,",
			  "displayTime": 271.924
			},
			{
			  "text": "and from that average, compute a letter grade. It was the letter grade that was sent home to my parents to",
			  "displayTime": 276.924
			},
			{
			  "text": "tell them how I was doing in school. And when I was growing up the letter grades were A, B, C, D, and F.",
			  "displayTime": 281.924
			},
			{
			  "text": "An A meant that you were doing wonderfully in a class, it was the best letter grade you could get.",
			  "displayTime": 287.924
			},
			{
			  "text": "And then there was a B, and then there was a C, a C was considered average, then there was a D,",
			  "displayTime": 291.924
			},
			{
			  "text": "and then there was an F. An F meant that you were failing a class.",
			  "displayTime": 296.924
			},
			{
			  "text": "And I think I can get the Grade Book statistics to compute this logic just using some simple if else statements.",
			  "displayTime": 300.924
			},
			{
			  "text": "So let's add another property to GradeStatistics, this is something the statistics can do all on their own,",
			  "displayTime": 307.924
			},
			{
			  "text": "given an average grade. So let's create a property called LetterGrade.",
			  "displayTime": 313.924
			},
			{
			  "text": "For this property, I'm only going to use a get accessor, that effectively makes this a read-only property,",
			  "displayTime": 320.924
			},
			{
			  "text": "no one will be able to assign to it, which is just what I want, I want the letter grade to be computed from",
			  "displayTime": 326.924
			},
			{
			  "text": "the average grade, there's reason to set the letter grade. And the letter grades work like this,",
			  "displayTime": 331.924
			},
			{
			  "text": "if your average grade was greater than or equal to a 90, then that was a letter grade of A.",
			  "displayTime": 336.924
			},
			{
			  "text": "And you might want to use something like math.round, so that a student with a score of 89.9 would also have",
			  "displayTime": 345.924
			},
			{
			  "text": "an A, but I'll leave that as an exercise for you to try out. But now if the average grade is less than 90,",
			  "displayTime": 351.924
			},
			{
			  "text": "I need to handle that situation too, so let me write an else if.",
			  "displayTime": 357.924
			},
			{
			  "text": "Else if the AverageGrade is greater than or equal to 80, that would be a letter grade of a B.",
			  "displayTime": 361.924
			},
			{
			  "text": "Now, generally speaking, I try to maintain a coding style where I only have a single return statement inside",
			  "displayTime": 369.924
			},
			{
			  "text": "of a method or a property. That's not always possible, but it does make the code sometimes easier to read.",
			  "displayTime": 375.924
			},
			{
			  "text": "I'm going to reach that goal, I'm going to try to do that by declaring a local variable result,",
			  "displayTime": 381.924
			},
			{
			  "text": "and in this case not even initialize that because I expect to initialize it in the logic that is inside of",
			  "displayTime": 386.924
			},
			{
			  "text": "this property, and instead of immediately returning, let me just say result = A, and result = B,",
			  "displayTime": 392.924
			},
			{
			  "text": "and at the bottom whatever we have computed for result, that is what we will return.",
			  "displayTime": 399.924
			},
			{
			  "text": "Currently we have an error because the C# compiler is smart enough to realize that you might be returning an",
			  "displayTime": 404.924
			},
			{
			  "text": "unassigned local variable. If the average grade right now is lower than an 80, then we never make an",
			  "displayTime": 409.924
			},
			{
			  "text": "assignment to result, and the C# compiler won't let us get away with that.",
			  "displayTime": 415.924
			},
			{
			  "text": "So let's continue writing out some of our logic. If the letter grade is less than an 80, we won't branch in",
			  "displayTime": 419.924
			},
			{
			  "text": "to assign a result of A, and we won't branch in to assign a result of B, so now we will have to check if the",
			  "displayTime": 424.924
			},
			{
			  "text": "average grade is greater than a 70, and if so the result is a C.",
			  "displayTime": 431.924
			},
			{
			  "text": "And notice one thing that I don't have to do here is I don't have to check that the average grade is greater",
			  "displayTime": 437.924
			},
			{
			  "text": "than 70 and the average grade is less than 80. Technically that is the rule to get a letter grade of C,",
			  "displayTime": 440.924
			},
			{
			  "text": "your average grade has to be greater than or equal to 70, or less than 80, but the way the if else statements",
			  "displayTime": 447.924
			},
			{
			  "text": "work, I know that this test I don't really need this, because if the average grade was greater than 80 we",
			  "displayTime": 452.924
			},
			{
			  "text": "already would have assigned a result here and skipped over this else if statement, we would never evaluate this.",
			  "displayTime": 459.924
			},
			{
			  "text": "We'll need one more else if to check for a letter grade of D, which would be an average grade greater than or",
			  "displayTime": 466.924
			},
			{
			  "text": "equal to 60, in that case, the letter grade is a D, and then finally, if I haven't branched into any of",
			  "displayTime": 473.924
			},
			{
			  "text": "those if statements, then I know that the average grade is less than a 60, and the result should be a failing",
			  "displayTime": 481.924
			},
			{
			  "text": "letter grade, a letter grade of F. And if I come back into the program, let's write out the letter grade,",
			  "displayTime": 488.924
			},
			{
			  "text": "let's try to do a WriteResult of Grade, with stats.LetterGrade, and this is one of those situations where the",
			  "displayTime": 493.924
			},
			{
			  "text": "C# compiler says, oh you're passing a string here, I don't see a version of WriteResult that takes a string,",
			  "displayTime": 501.924
			},
			{
			  "text": "so let me copy this method and paste it in here, and create a version a WriteResult that takes two strings,",
			  "displayTime": 508.924
			},
			{
			  "text": "one is the description, one is the result. I do not need to format result a floating point number,",
			  "displayTime": 515.924
			},
			{
			  "text": "so let me take off the :F2 here, and run the program, and I can see that the average grade is an 85 and the",
			  "displayTime": 521.924
			},
			{
			  "text": "letter grade is a B, so I think my logic is working correctly. Of course I should write a unit test to make",
			  "displayTime": 529.924
			},
			{
			  "text": "sure, but again I'll leave that as an exercise for you to try.",
			  "displayTime": 535.924
			}
		  ]
		},
		{
		  "title": "Switching",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m6&clip=2&mode=live",
		  "segments": [
			{
			  "text": "The C# language also includes a switch statement. What the switch statement allows you to do is branch the",
			  "displayTime": 1.249
			},
			{
			  "text": "execution of a program to a set of statements that are inside of a case label, which you create with the keyword case.",
			  "displayTime": 6.5
			},
			{
			  "text": "The switch statement does this by matching the value inside the switch against the values that you specify in",
			  "displayTime": 13.249
			},
			{
			  "text": "each case label. These values for each case statement, they must be compile-time constants,",
			  "displayTime": 19.249
			},
			{
			  "text": "and we can see in the code on the screen, we're checking a variable to see if the name is equal to one of the",
			  "displayTime": 24.249
			},
			{
			  "text": "string literals, Scott or Alex. If the name is Scott, we execute the method ServeSoda, and then we break out",
			  "displayTime": 30.249
			},
			{
			  "text": "of the switch, that is we jump to the line of code following the switch.",
			  "displayTime": 37.249
			},
			{
			  "text": "So we only execute the code inside of a single case. You can have multiple statements and multiple lines of",
			  "displayTime": 41.249
			},
			{
			  "text": "code inside of a case, but you also must have a break statement in each case, that's a little bit different",
			  "displayTime": 46.249
			},
			{
			  "text": "form other languages like C++ where you can fall through from one case to the next.",
			  "displayTime": 52.249
			},
			{
			  "text": "Now if the value you are switching on does not match any of the values in the case statements,",
			  "displayTime": 57.249
			},
			{
			  "text": "then the default path can be chosen, but you don't need to have a default label, so that's entirely optional.",
			  "displayTime": 62.249
			},
			{
			  "text": "Let's take a look in code.",
			  "displayTime": 68.249
			},
			{
			  "text": "Back in the Grades project, it might be useful to provide a textual description of the letter grade,",
			  "displayTime": 71.249
			},
			{
			  "text": "that is a grade of A should produce text like excellent, while a grade of F should produce text like failing.",
			  "displayTime": 77.249
			},
			{
			  "text": "This type of logic I could also add to GradeStatistics, and I could do this as another property.",
			  "displayTime": 82.249
			},
			{
			  "text": "So in addition to the LetterGrade property, here is another public property of type string,",
			  "displayTime": 88.249
			},
			{
			  "text": "let's call it Description, and just like LetterGrade, this will have only a get accessor.",
			  "displayTime": 94.249
			},
			{
			  "text": "And inside of here, I could look at the average grade, but I could also look at the letter grade.",
			  "displayTime": 100.249
			},
			{
			  "text": "I could say okay, if the letter grade is an A, let's produce this text, and if it's a B let's produce this",
			  "displayTime": 103.249
			},
			{
			  "text": "text, and that's the type of logic I could do with if else statements, but since we're looking at switch,",
			  "displayTime": 108.249
			},
			{
			  "text": "let's do a switch on LetterGrade instead. A switch statement is very much like a series of if else if",
			  "displayTime": 113.249
			},
			{
			  "text": "statements, and what I can do case the letter grade is the string A, let's execute the following code.",
			  "displayTime": 119.249
			},
			{
			  "text": "And what I want to do ultimately is compute some result, just like I did with LetterGrade,",
			  "displayTime": 126.249
			},
			{
			  "text": "and then return that result at the bottom of the property. So when we have a capital A, let's say that the",
			  "displayTime": 131.249
			},
			{
			  "text": "result = Excellent, and then you can think about this as else, if I have the sting B, the result would be",
			  "displayTime": 137.249
			},
			{
			  "text": "equal to Good, or we could say Above Average, and notice I have a compiler error right now because it's",
			  "displayTime": 148.249
			},
			{
			  "text": "illegal to fall through from one case label to another. And there's a couple ways to solve that error,",
			  "displayTime": 154.249
			},
			{
			  "text": "but by far the most common approach is to use a break statement, and what the break statement will do is",
			  "displayTime": 160.249
			},
			{
			  "text": "allow me to execute as many lines of code as I want inside of that case label, but once I hit the break",
			  "displayTime": 166.249
			},
			{
			  "text": "statement, I'll be jumping out of the switch. And if we have a letter grade of B we can then break,",
			  "displayTime": 171.249
			},
			{
			  "text": "of course a C, the result for a C would be Average, and then we break.",
			  "displayTime": 177.249
			},
			{
			  "text": "We also need to handle the D case, and for the result there we could say Below average, and then break,",
			  "displayTime": 184.249
			},
			{
			  "text": "and now I have a choice, I could either write another case statement and say, case letter grade is an F,",
			  "displayTime": 193.249
			},
			{
			  "text": "or I could have a default label, in which case if the letter grade is anything but an A, B, C, or D,",
			  "displayTime": 201.249
			},
			{
			  "text": "we will end up inside of here, and I can say the result is Failing, and once again I will still need a break.",
			  "displayTime": 208.249
			},
			{
			  "text": "Let's try this out in the program. Instead of writing out the text Grade, let's write out stats.Description.",
			  "displayTime": 218.249
			},
			{
			  "text": "I will run this program, and I can see that a B is a Good grade, so my switch statement appears to be working.",
			  "displayTime": 226.249
			},
			{
			  "text": "So switch is the type of logic that you could also implement using if and else if statements,",
			  "displayTime": 233.249
			},
			{
			  "text": "but note that I would not be able to implement LetterGrade using a switch statement.",
			  "displayTime": 240.249
			},
			{
			  "text": "In a switch statement I cannot write an expression like AverageGrade greater than or equal to 90,",
			  "displayTime": 246.249
			},
			{
			  "text": "all I'd be able to do is switch on AverageGrade, and have a case when AverageGrade is 90 exactly.",
			  "displayTime": 251.0
			},
			{
			  "text": "So switch statements, not so useful for evaluating ranges, but sometimes useful for replacing if else if statements.",
			  "displayTime": 256.249
			}
		  ]
		},
		{
		  "title": "Iterating",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m6&clip=3&mode=live",
		  "segments": [
			{
			  "text": "There are four different statements for iterating in the C# language, iterating being a fancy term for",
			  "displayTime": 2.616
			},
			{
			  "text": "looping over code and executing a block of code repeatedly. Typically you want to loop because you want to",
			  "displayTime": 8.616
			},
			{
			  "text": "execute some code for each item in a collection, like printing out each number in an array of integers,",
			  "displayTime": 13.616
			},
			{
			  "text": "and one statement we've already used is the foreach statement. This is where you use the foreach keyword,",
			  "displayTime": 19.616
			},
			{
			  "text": "and declare a variable before the keyword in. The code on the screen has a variable named value,",
			  "displayTime": 24.616
			},
			{
			  "text": "and I want to point out that this value variable, it's only available inside the block of code for the",
			  "displayTime": 30.616
			},
			{
			  "text": "foreach loop, so once you exit the foreach loop and you've moved beyond that closing curly brace you can no",
			  "displayTime": 35.616
			},
			{
			  "text": "longer access the variable named value. The code inside this loop, it will see each number in the array,",
			  "displayTime": 40.616
			},
			{
			  "text": "and the variable value will hold each item once. So the first time through the loop we'll see the value 2,",
			  "displayTime": 46.616
			},
			{
			  "text": "and the last time through the loop we see the value 100. This ages variable, by the way, it is an array of",
			  "displayTime": 51.616
			},
			{
			  "text": "integers and we are initializing that variable using a collection initializer syntax in C#.",
			  "displayTime": 57.616
			},
			{
			  "text": "This is where we just place objects or values between curly braces on the right-hand side of an assignment,",
			  "displayTime": 63.616
			},
			{
			  "text": "and the C# compiler is smart enough to say yes, I can create an array from those values.",
			  "displayTime": 68.616
			},
			{
			  "text": "Another looping construct in C# is the for statement. You can think of the for statement as being more",
			  "displayTime": 74.0
			},
			{
			  "text": "explicit about the starting and ending conditions for looping, because with foreach you basically say,",
			  "displayTime": 79.616
			},
			{
			  "text": "loop once for each item, but with a for loop, you have to say I'm going to start at 0 and I'm going to go to",
			  "displayTime": 84.616
			},
			{
			  "text": "the number 4, because I know I have an array that has 5 items inside.",
			  "displayTime": 89.616
			},
			{
			  "text": "To operate at this lower level, the for statement includes three pieces of information,",
			  "displayTime": 94.5
			},
			{
			  "text": "there's the initializer, the condition, and the iterator. This is the same as the for loop in C, C++,",
			  "displayTime": 98.616
			},
			{
			  "text": "Java, JavaScript, and many other languages. The for statement begins execution by executing any statements",
			  "displayTime": 104.616
			},
			{
			  "text": "that are specified in the initializer, and these statements are only executed once, no matter how many times",
			  "displayTime": 109.616
			},
			{
			  "text": "you're looping, that only executes once, then before any statements are executed inside of this for loop,",
			  "displayTime": 114.616
			},
			{
			  "text": "the condition is evaluated, the condition appears after the first semicolon.",
			  "displayTime": 122.616
			},
			{
			  "text": "The condition is always a Boolean expression that has to return true of false.",
			  "displayTime": 126.616
			},
			{
			  "text": "If the expression returns false, then we do not execute anything inside of the for loop, and we stop looping",
			  "displayTime": 130.616
			},
			{
			  "text": "and continue with the next statement after the for statement.",
			  "displayTime": 136.616
			},
			{
			  "text": "But if the condition evaluates to true, we'll execute the statements that are inside of the for statement,",
			  "displayTime": 140.616
			},
			{
			  "text": "that is everything inside the curly braces, and for that reason you could say that a for loop will execute",
			  "displayTime": 145.616
			},
			{
			  "text": "0 or more times because the program does test this condition before the first pass through the loop,",
			  "displayTime": 150.616
			},
			{
			  "text": "and if it returns false on the first test, we don't execute any code inside, but then after each execution of",
			  "displayTime": 156.616
			},
			{
			  "text": "the code inside, the iterator executes. In this case the iterator is incrementing the variable i,",
			  "displayTime": 161.616
			},
			{
			  "text": "and then we come back and check the condition, if it returns true, we execute again.",
			  "displayTime": 168.616
			},
			{
			  "text": "So the iterator is typically used to increment or decrement some sort of index variable, and I'm using a",
			  "displayTime": 173.616
			},
			{
			  "text": "variable named i, i is short for index, that's a fairly common convention in C# programming.",
			  "displayTime": 178.616
			},
			{
			  "text": "The while statement, this is another way to loop 0 or more times in a C# application.",
			  "displayTime": 184.616
			},
			{
			  "text": "In this case the while statement evaluates an expression, and if that expression returns true,",
			  "displayTime": 189.616
			},
			{
			  "text": "the statements inside the while loop will execute. Once the while loop is finished executing,",
			  "displayTime": 194.616
			},
			{
			  "text": "the condition is evaluated again, and at some point, that condition should return false, unless you're trying",
			  "displayTime": 199.616
			},
			{
			  "text": "to write an infinite loop, and infinite loops can be useful in some situations, but when that expression",
			  "displayTime": 205.616
			},
			{
			  "text": "returns false, that's when we finish executing the while loop. And closely related to the while loop is the do while loop.",
			  "displayTime": 210.616
			},
			{
			  "text": "The do while loop always executes one or more times, you're guaranteed to execute the code inside of here at",
			  "displayTime": 217.616
			},
			{
			  "text": "least once, because the primary difference between a while and a do while is that in a do while the condition",
			  "displayTime": 223.616
			},
			{
			  "text": "is checked after the code inside of the statement executes, so you're guaranteed to have control pass through",
			  "displayTime": 229.616
			},
			{
			  "text": "a do while loop at least once. Let's see an example in the Grade project.",
			  "displayTime": 235.616
			},
			{
			  "text": "Inside of the Grades project I'd like to give the GradeBook a new feature, I'd like to be able to walk up to",
			  "displayTime": 241.616
			},
			{
			  "text": "any GradeBook object, and tell it to loop through the available grades that is has and write them to the",
			  "displayTime": 246.616
			},
			{
			  "text": "screen, or write them to some destination. I'd like there to be a little bit of flexibility.",
			  "displayTime": 251.616
			},
			{
			  "text": "For example, I'd like to be able to say something like, GradeBook, please write out the grades,",
			  "displayTime": 255.616
			},
			{
			  "text": "and then pass in a parameter that will allow me to change destinations.",
			  "displayTime": 261.616
			},
			{
			  "text": "Maybe I want it to be on the screen, maybe I want it to be in a file, and fortunately, the .NET Framework",
			  "displayTime": 265.616
			},
			{
			  "text": "contains some abstractions that will allow me to do that. For example if I call WriteGrades,",
			  "displayTime": 271.616
			},
			{
			  "text": "which is a method we still have to implement, but I pass in a static member of the Console class,",
			  "displayTime": 275.616
			},
			{
			  "text": "which is the Out property, what that will do is send an object into that WriteGrades method that the",
			  "displayTime": 282.616
			},
			{
			  "text": "GradeBook can use to write out to the screen. The GradeBook doesn't know it's the screen,",
			  "displayTime": 287.616
			},
			{
			  "text": "but Console.Out, it represents the output stream that goes to this console window, to the screen.",
			  "displayTime": 292.616
			},
			{
			  "text": "We'll see the type of that parameter in just a second. Let me use Visual Studio to generate this method on",
			  "displayTime": 298.616
			},
			{
			  "text": "the GradeBook, I can do that by placing the cursor on WriteGrades and pressing Ctrl., you can see the",
			  "displayTime": 303.616
			},
			{
			  "text": "drop-down option here is to generate a method, GradeBook.WriteGrades, that's exactly what I wanted to do,",
			  "displayTime": 310.616
			},
			{
			  "text": "so I'll press Enter to take that selection, and now if I come over into the GradeBook I should be able to",
			  "displayTime": 316.616
			},
			{
			  "text": "find that method in this class, it is right here. Let's make it a public method, let's get rid of this line",
			  "displayTime": 321.616
			},
			{
			  "text": "of code that is inside the method, we'll replace it with something more useful, and let me change the name of",
			  "displayTime": 328.616
			},
			{
			  "text": "this parameter to destination. But before I do, why is there an @ sign here?",
			  "displayTime": 332.616
			},
			{
			  "text": "The @ sign is here because out is reserved keyword in C#, it's not legal to have a parameter named out,",
			  "displayTime": 336.616
			},
			{
			  "text": "but anytime you want to have a parameter or variable name that has the same name as a C# keyword,",
			  "displayTime": 343.616
			},
			{
			  "text": "you can escape that name using the @ sign. For example, I could also say @class if I wanted this parameter to be called class.",
			  "displayTime": 350.616
			},
			{
			  "text": "But I generally avoid names that require an @ sign, let's call this destination.",
			  "displayTime": 358.616
			},
			{
			  "text": "You'll see this destination is of type TextWriter, and this is a useful abstraction in the .NET Framework",
			  "displayTime": 364.616
			},
			{
			  "text": "because I can write information into a TextWriter, and ultimately I don't know if that's going to a file,",
			  "displayTime": 370.616
			},
			{
			  "text": "or to the console, or over the network, it just so happens that this particular TextWriter is going to be",
			  "displayTime": 375.616
			},
			{
			  "text": "Console.Out so it will send output to the screen, but we'll see later some of the flexibility that this",
			  "displayTime": 381.616
			},
			{
			  "text": "abstraction gives me. Now we've already seen how to use a foreach loop, so let's try using a for loop.",
			  "displayTime": 387.616
			},
			{
			  "text": "There's a code snippet where if I just type for and press Tab, Tab, Visual Studio will generate the",
			  "displayTime": 393.616
			},
			{
			  "text": "skeleton of for loop, it's going to do that by having an initializer i that starts at 0.",
			  "displayTime": 398.616
			},
			{
			  "text": "Before we enter the loop each time we'll check to make sure that i less than some value,",
			  "displayTime": 404.616
			},
			{
			  "text": "that's something we're going to have to change, and each time after the loop executes, we will add 1 to i using i++.",
			  "displayTime": 409.616
			},
			{
			  "text": "So I want to loop from i = 0 to i is less than the number of grades in my list.",
			  "displayTime": 416.616
			},
			{
			  "text": "Fortunately this private variable, grades, it has a Count property, and quite often if you're going to write",
			  "displayTime": 422.616
			},
			{
			  "text": "a for loop against a collection, that collection will be a list which has a Count property,",
			  "displayTime": 429.616
			},
			{
			  "text": "or an array which has a Length property, and you can use those properties in the conditions for your for loop.",
			  "displayTime": 434.616
			},
			{
			  "text": "And now what I can do, is use my destination to write a line, which is grades, and I'm going to index into",
			  "displayTime": 440.616
			},
			{
			  "text": "grades using that i variable to pull out a specific grade, the first grade will be index 0,",
			  "displayTime": 447.616
			},
			{
			  "text": "the last item will essentially be index grades.Count -1. If I run the program, then we're printing out the",
			  "displayTime": 453.616
			},
			{
			  "text": "3 grades that we entered into the GradeBook, 91, 89.5, 75. Very good.",
			  "displayTime": 461.616
			},
			{
			  "text": "What if we wanted to do them in reverse order? Well then I could start at grades.Count, and I could go and",
			  "displayTime": 467.616
			},
			{
			  "text": "loop while i is greater than 0, and each time through the loop I would decrement i, or subtract one from i.",
			  "displayTime": 475.616
			},
			{
			  "text": "And now because I'm starting this index at grades.Count, I just have to make sure that I subtract 1 from i",
			  "displayTime": 484.616
			},
			{
			  "text": "when I index in to the Grades list. That way I don't try to index in to the Grades list with a value of",
			  "displayTime": 490.616
			},
			{
			  "text": "3 when Grades only contains 3 items, so now we get the grades in reverse order, 75, 89.5, 91.",
			  "displayTime": 496.616
			},
			{
			  "text": "So the for loop is quite flexible, I prefer to use foreach when I can, and I would certainly use a foreach in this",
			  "displayTime": 504.616
			},
			{
			  "text": "scenario, and I could even use a while loop, like the while loop that we saw on the slide.",
			  "displayTime": 509.616
			},
			{
			  "text": "What I certainly wouldn't want to do is use a do while loop, at least not without writing some additional",
			  "displayTime": 514.616
			},
			{
			  "text": "code, because a do while loop always executes once, and there's a possibility someone might invoke",
			  "displayTime": 519.616
			},
			{
			  "text": "WriteGrades when there are no grades in the GradeBook, in which case we would never want to enter into a",
			  "displayTime": 524.616
			},
			{
			  "text": "loop that tried to index into the grades, that would create a runtime error.",
			  "displayTime": 529.616
			},
			{
			  "text": "We'll be talking more about runtime errors in this module, but next, let's talk about some statements that",
			  "displayTime": 533.616
			},
			{
			  "text": "allow us to jump around in code.",
			  "displayTime": 538.616
			}
		  ]
		},
		{
		  "title": "Jumping",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m6&clip=4&mode=live",
		  "segments": [
			{
			  "text": "C# includes a number of keywords that allow you to unconditionally jump to some target.",
			  "displayTime": 1.908
			},
			{
			  "text": "These keywords include break, continue, goto, return, and throw.",
			  "displayTime": 6.908
			},
			{
			  "text": "We've already seen break, we know that we can use break inside the case label of a switch statement,",
			  "displayTime": 10.5
			},
			{
			  "text": "but you can also use a break inside of a while loop, a do loop, a for loop, or a foreach loop,",
			  "displayTime": 14.908
			},
			{
			  "text": "to break out of a loop and stop looping. For example, here is a foreach statement that's going to loop",
			  "displayTime": 19.908
			},
			{
			  "text": "through some collection of integers, and inside of the code if the age variable holds the value 21,",
			  "displayTime": 24.908
			},
			{
			  "text": "we're going to break out of this loop. So if age is equal to 21, even if there are more items left on that",
			  "displayTime": 30.908
			},
			{
			  "text": "collection, we're going to stop execution of the foreach loop and continue execution on the statement that",
			  "displayTime": 35.908
			},
			{
			  "text": "is after the foreach statement. The continue statement in similar, except that instead of breaking out of",
			  "displayTime": 40.908
			},
			{
			  "text": "the foreach statement, we're going to skip executing any code after the continue statement and go to the next",
			  "displayTime": 45.908
			},
			{
			  "text": "iteration of a loop. So in the code if we encounter an age value equal to 2, we're going to continue the",
			  "displayTime": 51.908
			},
			{
			  "text": "loop, we're not going to execute anything that follows, and we're not going to jump out of the foreach statement.",
			  "displayTime": 57.908
			},
			{
			  "text": "Essentially the continue statement starts the next iteration, and you can use it again inside of a while,",
			  "displayTime": 61.908
			},
			{
			  "text": "a do while, a for, or a foreach statement. And then there is a goto statement in C#.",
			  "displayTime": 66.908
			},
			{
			  "text": "You can use the goto statement to jump to another statement that is marked by a label.",
			  "displayTime": 72.908
			},
			{
			  "text": "So in this version of the foreach loop, if we encounter age equal to 2, we're going to jump execution down to",
			  "displayTime": 76.908
			},
			{
			  "text": "the label with the name of skip, and jump over any code that was in between.",
			  "displayTime": 82.908
			},
			{
			  "text": "I do have to say in over 25 years of programming with various languages, I've never had to use a goto",
			  "displayTime": 86.908
			},
			{
			  "text": "statement, and most programmers avoid goto at all costs, because it does make a program harder to follow.",
			  "displayTime": 91.908
			},
			{
			  "text": "The return statement, this is something that we've also used in the demos of this course,",
			  "displayTime": 97.908
			},
			{
			  "text": "but I do want to point out that you can use a return statement with a void method.",
			  "displayTime": 102.908
			},
			{
			  "text": "So typically what we've done is, we'd have a method that has to return a string or an integer or some type of",
			  "displayTime": 106.908
			},
			{
			  "text": "object like a GradeBook Statistics object, and we used a return statement to return the value of some variable.",
			  "displayTime": 111.908
			},
			{
			  "text": "But it is legal to use return when you have a void method, you're just not allowed to pass a value back to the caller.",
			  "displayTime": 118.908
			},
			{
			  "text": "In that case you just have the return statement. So in this foreach loop, if we encounter an age equal to",
			  "displayTime": 124.908
			},
			{
			  "text": "21, we are not only going to break out of the loop, we're going to jump out of the method itself.",
			  "displayTime": 129.908
			},
			{
			  "text": "So if there was any additional code before we reach the end of the method, that code wouldn't execute.",
			  "displayTime": 135.908
			},
			{
			  "text": "The last jumping statement that we need to cover is the throw statement, which it means it's time to talk about exceptions.",
			  "displayTime": 141.908
			}
		  ]
		},
		{
		  "title": "Throwing",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m6&clip=5&mode=live",
		  "segments": [
			{
			  "text": "The throw keyword in C# is used to raise an exception. An exception is a signal that an error condition",
			  "displayTime": 1.5
			},
			{
			  "text": "exists, and as the name would imply, an exception should only be raised in exceptional circumstances,",
			  "displayTime": 8.768
			},
			{
			  "text": "that is, you shouldn't use exceptions to change the normal program flow.",
			  "displayTime": 13.768
			},
			{
			  "text": "Use exceptions when your software finds itself in a position where it cannot move forward.",
			  "displayTime": 18.768
			},
			{
			  "text": "Exceptions are what happens when you have a bad input value, or the program is out of memory,",
			  "displayTime": 22.768
			},
			{
			  "text": "or a network is not available for communication. Those are the types of situations that may require",
			  "displayTime": 27.768
			},
			{
			  "text": "exceptions, but not always. When you throw an exception, you are throwing an object, this is why we say",
			  "displayTime": 32.768
			},
			{
			  "text": "exception handling is type safe because every exception with C# is going to be of a known type,",
			  "displayTime": 38.768
			},
			{
			  "text": "and the compiler can help you handle exceptions. We also say that working with exceptions is structured,",
			  "displayTime": 43.768
			},
			{
			  "text": "because you can set up blocks of code to handle exceptions, meaning you can structure your program to",
			  "displayTime": 48.768
			},
			{
			  "text": "anticipate certain exceptions, and try to recover from those error conditions.",
			  "displayTime": 53.768
			},
			{
			  "text": "The reason we use a throw keyword, is you can picture your software throwing some error object,",
			  "displayTime": 57.768
			},
			{
			  "text": "and the error object is going to start travelling back through the program until it is either stopped by an",
			  "displayTime": 62.768
			},
			{
			  "text": "exception handler, which is a piece of code that tries to recover from an exception,",
			  "displayTime": 68.768
			},
			{
			  "text": "or if there are no exception handlers, we have what we call an unhandled exception.",
			  "displayTime": 72.768
			},
			{
			  "text": "With .NET an unhandled exception will terminate your program, which sounds terrible, but in reality it's",
			  "displayTime": 77.768
			},
			{
			  "text": "usually better to shut down a program that has an unhandled error than it is to let the program continue",
			  "displayTime": 83.768
			},
			{
			  "text": "because the program might be in a bad state after an error occurs, and it could save corrupt data,",
			  "displayTime": 88.768
			},
			{
			  "text": "it's much better to fail. In this code snippet, we're checking to see if the age value is equal to 21,",
			  "displayTime": 93.768
			},
			{
			  "text": "and if it is, we'll throw a new ArgumentException. So you can see that an exception object will have a type definition.",
			  "displayTime": 98.768
			},
			{
			  "text": "In this case ArgumentException is a built-in class in the .NET Framework, and we need to create a new",
			  "displayTime": 105.768
			},
			{
			  "text": "instance of that ArgumentException, and when we do, the constructor allows us to pass in a description so we",
			  "displayTime": 110.768
			},
			{
			  "text": "can give some additional information about this error. Now if it is a common occurrence that age could be",
			  "displayTime": 116.768
			},
			{
			  "text": "equal to 21, it's probably not something that you want to generate an exception for,",
			  "displayTime": 121.768
			},
			{
			  "text": "exceptions should be for exceptional circumstances. Let's take a look in our program.",
			  "displayTime": 125.768
			},
			{
			  "text": "Inside of the Grades project, you might remember that we gave the GradeBook a Name property in a previous",
			  "displayTime": 132.768
			},
			{
			  "text": "module, and then the logic for the setter of that property, we added some validation checks to make sure that",
			  "displayTime": 137.768
			},
			{
			  "text": "the incoming NewName value was not going to be null or empty. And currently, if a caller tries to set the",
			  "displayTime": 143.768
			},
			{
			  "text": "name of a GradeBook to something that is null or empty, we silently ignore that assignment.",
			  "displayTime": 149.768
			},
			{
			  "text": "What I'd like to do now is create an error condition so that if a caller tries to set the name to an invalid",
			  "displayTime": 154.768
			},
			{
			  "text": "value, we will create an error condition in this program, we'll do that by throwing an exception.",
			  "displayTime": 159.768
			},
			{
			  "text": "And to do this, I'm going to restructure the setter just a bit, I'm going to remove this if check,",
			  "displayTime": 164.768
			},
			{
			  "text": "actually I'm going to cut it out with Ctrl+X, and remove the curly braces that made that a block of code,",
			  "displayTime": 169.768
			},
			{
			  "text": "now I'm going to press Ctrl+K, followed by Ctrl+D, that allows Visual Studio to reformat that code,",
			  "displayTime": 176.768
			},
			{
			  "text": "and we've removed the indentation that was there, we don't need that indentation any longer.",
			  "displayTime": 183.768
			},
			{
			  "text": "And now what I want to do is have an if check, but this time I will remove the not operator,",
			  "displayTime": 187.768
			},
			{
			  "text": "so this time I want to check if string.IsNullOrEmpty, and I can do that just by going right the string",
			  "displayTime": 192.768
			},
			{
			  "text": "class and invoking the static method, I can also do that through the string keyword that is in C#,",
			  "displayTime": 198.768
			},
			{
			  "text": "and now if value is null or empty, I want to throw a new exception.",
			  "displayTime": 204.768
			},
			{
			  "text": "But what exception should I throw? There are many built-in exceptions in the .NET Framework,",
			  "displayTime": 209.768
			},
			{
			  "text": "you can also create your own custom exception classes. A class that represents an exception that you can",
			  "displayTime": 214.768
			},
			{
			  "text": "throw, it always ends with the word Exception, that is in the class name.",
			  "displayTime": 219.768
			},
			{
			  "text": "And you can see if I just start tying Exception, the IntelliSense window will filter things out so I'm only",
			  "displayTime": 223.768
			},
			{
			  "text": "looking at exception types. And just based on the few namespaces that we have imported right now,",
			  "displayTime": 229.768
			},
			{
			  "text": "you can see there are many built-in exceptions. These exceptions include everything from a",
			  "displayTime": 233.768
			},
			{
			  "text": "DirectoryNotFoundException, to a DivideByZeroException, and there's also some built-in argument exceptions,",
			  "displayTime": 240.768
			},
			{
			  "text": "so there's ArgumentNullException, I could throw this exception if someone passes me an argument and that",
			  "displayTime": 246.768
			},
			{
			  "text": "argument is null and I cannot work with a null value. There's also a slightly more generic",
			  "displayTime": 251.768
			},
			{
			  "text": "ArgumentException, which is just a way of saying something is wrong with one of the arguments.",
			  "displayTime": 256.768
			},
			{
			  "text": "And in the constructor for the particular type of exception, there's an overload of the constructor that",
			  "displayTime": 260.768
			},
			{
			  "text": "allows me to pass in a more explicit message, so I could say, Name cannot be null or empty.",
			  "displayTime": 266.768
			},
			{
			  "text": "This would be one way to do it, and let me hit Ctrl+K, Ctrl+D again to do some reformatting of the code,",
			  "displayTime": 272.768
			},
			{
			  "text": "and let's go back to program.cs, and try to set the book's name to a null value.",
			  "displayTime": 278.768
			},
			{
			  "text": "So using the null keyword in C#, run the program with Ctrl+F5, and I can see that the program has crashed",
			  "displayTime": 286.768
			},
			{
			  "text": "with an unhandled exception, a System.ArgumentException, Name cannot be null or empty.",
			  "displayTime": 292.768
			},
			{
			  "text": "Notice that this error information includes a line of code where this error occurred, and in order for",
			  "displayTime": 297.768
			},
			{
			  "text": "someone to help track down the error and why this occurred, there's a full stack trace printed.",
			  "displayTime": 303.768
			},
			{
			  "text": "So what is a stack? As a program is executing and you call a method, that calls another method,",
			  "displayTime": 307.768
			},
			{
			  "text": "that calls another method, there's a data structure being built internally that we call a stack,",
			  "displayTime": 312.768
			},
			{
			  "text": "and with each method that you call, something is pushed onto the stack.",
			  "displayTime": 317.768
			},
			{
			  "text": "You can imagine almost like a stack of papers on someone's desk, every time we call a method,",
			  "displayTime": 321.768
			},
			{
			  "text": "we write the method name down on a piece of paper, and add it to that stack, and every time a method finishes",
			  "displayTime": 325.768
			},
			{
			  "text": "executing and it returns, we pull a piece of paper off the stack and we can look at that next sheet and know",
			  "displayTime": 331.768
			},
			{
			  "text": "what method we came from, who was the caller, and go back there.",
			  "displayTime": 336.768
			},
			{
			  "text": "A stack trace is showing you how execution arrived at this point in code where the unhandled error occurred.",
			  "displayTime": 340.768
			},
			{
			  "text": "And it's telling us that the exception was thrown from line 53 of GradeBook.cs, but that's not really helpful",
			  "displayTime": 346.768
			},
			{
			  "text": "when you're trying to track down a problem. What's really helpful is usually something further up the stack,",
			  "displayTime": 352.768
			},
			{
			  "text": "and what's further up the stack is Program.cs line 14, and if I close the program and go to line 14,",
			  "displayTime": 357.768
			},
			{
			  "text": "I am on the line of code that is really responsible for creating this error condition because this is the",
			  "displayTime": 365.768
			},
			{
			  "text": "line of code that passed an illegal value. Reading the stack traces that come out in an error message can",
			  "displayTime": 370.768
			},
			{
			  "text": "quite often help you try to locate the piece of code that started all the problems and led to an unhandled error.",
			  "displayTime": 376.768
			},
			{
			  "text": "So now we've seen that an unhandled exception can terminate an application, but let's look at the other side",
			  "displayTime": 382.768
			},
			{
			  "text": "of exceptions now and see how they can handle an exception, and prevent a program from crashing.",
			  "displayTime": 388.768
			}
		  ]
		},
		{
		  "title": "Handling",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m6&clip=6&mode=live",
		  "segments": [
			{
			  "text": "In a C# application you have the option of trying to handle an exception using a try catch statement.",
			  "displayTime": 1.5
			},
			{
			  "text": "A try block is the try keyword followed by some curly braces, and inside the curly braces are the statements",
			  "displayTime": 7.089
			},
			{
			  "text": "that you want to execute that might throw an exception. The try block can be followed up by one or more catch statements.",
			  "displayTime": 13.089
			},
			{
			  "text": "In this case we have one catch statement. If ComputeStatistics were to throw an exception, the runtime will",
			  "displayTime": 19.089
			},
			{
			  "text": "go looking for the closest matching catch statement, and by matching I mean that if ComputeStatistics were to",
			  "displayTime": 25.089
			},
			{
			  "text": "throw a FailNotFoundException, the catch statement that I have here will not catch that exception,",
			  "displayTime": 30.089
			},
			{
			  "text": "because that's a different exception type. This catch statement is looking for a DivideByZeroException.",
			  "displayTime": 35.089
			},
			{
			  "text": "And when I say that the runtime looks for the closest matching type, I mean that the runtime is going to look",
			  "displayTime": 41.089
			},
			{
			  "text": "for the handler with the right type of exception that is nearest to the point where the exception occurred.",
			  "displayTime": 46.089
			},
			{
			  "text": "That doesn't mean closest in the source code, that means closest in the execution of the program.",
			  "displayTime": 51.089
			},
			{
			  "text": "So if ComputeStatistics were to throw an exception, but it already has an exception handler for a",
			  "displayTime": 57.089
			},
			{
			  "text": "DivideByZeroException inside of that method, then this catch statement would not get the opportunity to",
			  "displayTime": 62.089
			},
			{
			  "text": "catch the error, the exception would already be handled. Let's take a look in the program.",
			  "displayTime": 67.089
			},
			{
			  "text": "Inside of my program I know that if I set book.Name equal to null, that will cause the program to crash,",
			  "displayTime": 73.089
			},
			{
			  "text": "and it would be easy enough for me to fix this problem just by giving the GradeBook some name with characters inside.",
			  "displayTime": 79.089
			},
			{
			  "text": "But what if I didn't want to hard code a string, what if I needed to prompt the user for a GradeBook",
			  "displayTime": 85.089
			},
			{
			  "text": "name, and I'll ask them please Enter a name, and then instead of a hardcoded string I use Console.ReadLine.",
			  "displayTime": 90.089
			},
			{
			  "text": "Now I'm in a situation where I don't know when the program runs what value we'll try to write into book.Name,",
			  "displayTime": 100.089
			},
			{
			  "text": "but I do know if the user gives me an invalid value, that will cause the program to crash.",
			  "displayTime": 106.089
			},
			{
			  "text": "Now, ideally what would happen is, I would not assign Console.ReadLine directly into book.Name,",
			  "displayTime": 111.089
			},
			{
			  "text": "instead, I'd save the value into a variable, perform some validation, and only set book.Name if have a valid",
			  "displayTime": 115.089
			},
			{
			  "text": "value, and I might try to do that inside of a loop and continue to prompt the user to enter a name,",
			  "displayTime": 122.089
			},
			{
			  "text": "as long as they're giving me an invalid value. But I'll leave that as an exercise for you to try,",
			  "displayTime": 128.089
			},
			{
			  "text": "and instead what I want to do is just use some exception handling to prevent an application crash.",
			  "displayTime": 133.089
			},
			{
			  "text": "So if I know book.Name will throw an exception that could crash the program, I might use a try catch statement.",
			  "displayTime": 138.089
			},
			{
			  "text": "Inside of the try I can have as many lines of code inside of here as I want, so I could even include the",
			  "displayTime": 146.089
			},
			{
			  "text": "Console.WriteLine, and if any exceptions emerge from any of the statements that are inside of the try,",
			  "displayTime": 151.089
			},
			{
			  "text": "I will have the opportunity to catch those exceptions using a catch statement.",
			  "displayTime": 157.089
			},
			{
			  "text": "With a catch statement I first have to describe the type of exception that I want to catch,",
			  "displayTime": 162.089
			},
			{
			  "text": "in this case it would be an ArgumentException, and then I can optionally provide a variable where the runtime",
			  "displayTime": 166.089
			},
			{
			  "text": "will store the exception object that was thrown. So when book.Name does throw an ArgumentException,",
			  "displayTime": 173.089
			},
			{
			  "text": "I will capture a reference to that object inside of this variable ex.",
			  "displayTime": 178.089
			},
			{
			  "text": "And now I could Console.WriteLine and tell the user that they entered an invalid value,",
			  "displayTime": 183.089
			},
			{
			  "text": "I could also look inside of that exception object, and I can see there are properties like Message,",
			  "displayTime": 187.089
			},
			{
			  "text": "what is the message associated with the exception, even a StackTrace, so I could print out a stack trace if I",
			  "displayTime": 192.089
			},
			{
			  "text": "wanted the user to see things about method names and line numbers and .cs files.",
			  "displayTime": 199.089
			},
			{
			  "text": "But let's just print out a Message, and now run the program with Ctrl+F5, when prompted to enter a name,",
			  "displayTime": 204.089
			},
			{
			  "text": "I can just press the Enter key that will enter in an empty value, but now I'm catching the exception,",
			  "displayTime": 210.089
			},
			{
			  "text": "I'm displaying the text Name cannot be null or empty, that's the exception object's Message property,",
			  "displayTime": 216.089
			},
			{
			  "text": "and now the program can continue to run, there are no unhandled exceptions, and I print out the grades and the statistics.",
			  "displayTime": 221.089
			},
			{
			  "text": "When we get to our next demo, we'll see what dangerous things can happen when I actually enter a valid name.",
			  "displayTime": 227.089
			}
		  ]
		},
		{
		  "title": "Chaining",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m6&clip=7&mode=live",
		  "segments": [
			{
			  "text": "You can follow a try block with multiple catch statements. This is known as chaining the catch statements.",
			  "displayTime": 0.0
			},
			{
			  "text": "And even though we have multiple catch statements, only one of these catch blocks can execute after an",
			  "displayTime": 7.196
			},
			{
			  "text": "exception is thrown from inside of the try block. The catch blocks will be evaluated from top to bottom,",
			  "displayTime": 13.196
			},
			{
			  "text": "and the first one that specifies a matching exception type will be the catch block that executes.",
			  "displayTime": 18.196
			},
			{
			  "text": "And that's why when you chain blocks like this, you want to include the most specific exception types first.",
			  "displayTime": 23.196
			},
			{
			  "text": "And by specific I mean this, DivideByZeroException is specific exception type, but all exception types in",
			  "displayTime": 29.196
			},
			{
			  "text": ".NET derive or inherit from a base exception class with the name just Exception.",
			  "displayTime": 35.196
			},
			{
			  "text": "And we're going to talk more about inheritance and derivation in the next module, for now you can just know",
			  "displayTime": 42.196
			},
			{
			  "text": "that this exception type is special that will catch nearly every type of exception that can be thrown in a C#",
			  "displayTime": 47.196
			},
			{
			  "text": "application, there's just a few very special and very catastrophic exceptions that will always crash a",
			  "displayTime": 53.196
			},
			{
			  "text": "program, you cannot catch them. But because I can catch nearly everything with this exception type,",
			  "displayTime": 59.196
			},
			{
			  "text": "I want to include that catch statement after other catch statements, like a catch statement for",
			  "displayTime": 64.196
			},
			{
			  "text": "DivideByZeroException. If the exception was on the top I'd never get the DivideByZeroException because that",
			  "displayTime": 69.196
			},
			{
			  "text": "is also an instance of an exception type. Let's look at chaining in the demo.",
			  "displayTime": 74.196
			},
			{
			  "text": "Back in Visual Studio let's run the application with the debugger by pressing F5, and now let me enter a name",
			  "displayTime": 80.196
			},
			{
			  "text": "for the GradeBook, and when I press Enter the program generates an unhandled exception.",
			  "displayTime": 87.196
			},
			{
			  "text": "The debugger will automatically stop on a line of code that generates an unhandled exception,",
			  "displayTime": 92.196
			},
			{
			  "text": "and in this case we stopped on the line of code where we are invoking the NameChanged event.",
			  "displayTime": 97.196
			},
			{
			  "text": "And you can see the exception is a NullReferenceException. And what's happened here is that we have",
			  "displayTime": 102.196
			},
			{
			  "text": "declared this public event, NameChanged, but this event currently has the value null because there are no",
			  "displayTime": 107.196
			},
			{
			  "text": "subscribers to this event. And as I've said before, if you try to invoke or use a variable that contains a",
			  "displayTime": 113.196
			},
			{
			  "text": "null reference, you can end up with this NullReferenceException, and currently this exception is unhandled,",
			  "displayTime": 119.196
			},
			{
			  "text": "and this is something to be careful of when you're using events, if no one has subscribed to an event,",
			  "displayTime": 125.196
			},
			{
			  "text": "the event will be null, and that can create a NullReferenceException.",
			  "displayTime": 129.196
			},
			{
			  "text": "This is an unhandled exception because we do not have an exception handler for a NullReferenceException,",
			  "displayTime": 133.196
			},
			{
			  "text": "just an ArgumentException, but let's stop debugging and see if we can prevent the program from crashing.",
			  "displayTime": 139.196
			},
			{
			  "text": "Now the ideal solution to this problem is to make sure that that event is not null before trying to use that",
			  "displayTime": 145.196
			},
			{
			  "text": "NameChanged event. But before we do that, I wanted to use this scenario to show you how you can also catch",
			  "displayTime": 152.196
			},
			{
			  "text": "a NullReferenceException, I can also name this variable ex because it is in a different scope than the ex",
			  "displayTime": 157.196
			},
			{
			  "text": "variable for my ArgumentException, that only exists for the first catch block, and here in the second catch",
			  "displayTime": 165.196
			},
			{
			  "text": "block I can now do a Console.WriteLine, and perhaps just provide a generic error message here like Something",
			  "displayTime": 170.196
			},
			{
			  "text": "went wrong, and you'll notice in this case I'm not even using that variable ex, well the variable is",
			  "displayTime": 176.196
			},
			{
			  "text": "optional, this is a way of telling the C# compiler I want to catch a NullReferenceException, but then I don't",
			  "displayTime": 182.196
			},
			{
			  "text": "need a reference to that exception object, my code has all the logic and data that it needs, I don't need the variable.",
			  "displayTime": 187.196
			},
			{
			  "text": "Now if I run the program, this time I'll run it with Ctrl+F5 without the debugger, enter in some name,",
			  "displayTime": 194.196
			},
			{
			  "text": "and we now get the exception message Something went wrong. I could also try to catch Exception,",
			  "displayTime": 201.196
			},
			{
			  "text": "and let's try to do that first. If I catch Exception, so not ArgumentException but just Exception,",
			  "displayTime": 207.196
			},
			{
			  "text": "both ArgumentException and NullReferenceException, they both are of this exception type, and you can see I",
			  "displayTime": 215.196
			},
			{
			  "text": "even get a complier error that says A previous catch clause already catches all exceptions of this type or a super type.",
			  "displayTime": 222.196
			},
			{
			  "text": "So again more on super types and inheritance in the next module, but if I wanted to catch all exceptions,",
			  "displayTime": 228.196
			},
			{
			  "text": "that catch clause would have to come here at the end. And I could also just use my existing block,",
			  "displayTime": 235.196
			},
			{
			  "text": "and instead of catching a NullReferenceException just catch all exceptions and write out Something went wrong.",
			  "displayTime": 242.196
			},
			{
			  "text": "But I will caution you that that is potentially dangerous, because you won't know if you're catching an",
			  "displayTime": 248.196
			},
			{
			  "text": "exception that is related to security settings, or memory settings, or something went wrong in the input",
			  "displayTime": 253.196
			},
			{
			  "text": "output system, when you catch exception you're catching everything, and we might be allowing the program to",
			  "displayTime": 259.196
			},
			{
			  "text": "continue execution when what really should have let happen is let that exception go unhandled and terminate the program.",
			  "displayTime": 265.196
			},
			{
			  "text": "But when I catch exception I can still enter a name and get that message Something went wrong.",
			  "displayTime": 271.196
			},
			{
			  "text": "And like I say, the proper way to handle this is inside of the GradeBook, and it would actually be rather",
			  "displayTime": 276.196
			},
			{
			  "text": "important to make sure that NameChanged is not a null value before I try to invoke it, and I could do that by",
			  "displayTime": 281.196
			},
			{
			  "text": "adding an additional if statement here, we've talked about nested ifs earlier in this module, or I could also",
			  "displayTime": 288.196
			},
			{
			  "text": "add an additional condition to this Boolean expression. So I could say name is not equal to the existing",
			  "displayTime": 294.196
			},
			{
			  "text": "value, and NameChanged is not equal to null, that way both of those conditions have to be true before we go",
			  "displayTime": 298.196
			},
			{
			  "text": "out and instantiate NameChangedEventArgs and raise this event. And with logic in place, I shouldn't need to",
			  "displayTime": 307.196
			},
			{
			  "text": "catch a NullReferenceException, I should just be able to run the program, enter in a name, and the program continues normally.",
			  "displayTime": 315.196
			},
			{
			  "text": "We're not listening for the NameChanged event, but that's okay, we didn't need any logic in the program",
			  "displayTime": 323.0
			},
			{
			  "text": "to do any sort of processing when that event occurs.",
			  "displayTime": 327.196
			}
		  ]
		},
		{
		  "title": "Finally",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m6&clip=8&mode=live",
		  "segments": [
			{
			  "text": "After a try statement you can optionally include a finally statement.",
			  "displayTime": 0.0
			},
			{
			  "text": "The finally statement allows you to specify a block of code that is always going to execute even if there's",
			  "displayTime": 6.093
			},
			{
			  "text": "an exception inside of the try block. So the finally code executes when there is an exception,",
			  "displayTime": 12.093
			},
			{
			  "text": "and when there is no exception, and that makes the finally block a good place to add finalization code,",
			  "displayTime": 17.093
			},
			{
			  "text": "that is, code that will clean up resources that you might have acquired previously.",
			  "displayTime": 23.093
			},
			{
			  "text": "In .NET we talk about managed resources, but really the only resource being managed by the .NET runtime is memory.",
			  "displayTime": 27.093
			},
			{
			  "text": "The runtime knows what memory you are using and what memory you are no longer using and it cleans things up for you.",
			  "displayTime": 34.093
			},
			{
			  "text": "There are other resources you'll probably need in an application, resources like a data file,",
			  "displayTime": 40.093
			},
			{
			  "text": "or a network socket, or a database connection, and when you're working with these resources it's important",
			  "displayTime": 45.093
			},
			{
			  "text": "to close, or release, or free these resources when you're finished.",
			  "displayTime": 50.093
			},
			{
			  "text": "Otherwise you can leave behind corrupt data or run out of these resources.",
			  "displayTime": 54.093
			},
			{
			  "text": "In this sample we're opening up a file on disk, and we want to make sure it's closed even if there's an",
			  "displayTime": 58.093
			},
			{
			  "text": "exception that's thrown. We can do that with a try finally by putting a file.Close call inside of the",
			  "displayTime": 62.093
			},
			{
			  "text": "finally block, and although I didn't show it in this example, you can also have one or more catch statements",
			  "displayTime": 69.093
			},
			{
			  "text": "in here that try to catch exceptions. Many of the classes in .NET that represent unmanaged resources,",
			  "displayTime": 74.093
			},
			{
			  "text": "that is resources that you have to explicitly close, they all implement a special interface known as IDisposible.",
			  "displayTime": 80.093
			},
			{
			  "text": "We'll talk more about interfaces in the next module too, for now just know that if an object has",
			  "displayTime": 87.093
			},
			{
			  "text": "a disposed method that you can see in IntelliSense, chances are the object is a disposable object,",
			  "displayTime": 92.093
			},
			{
			  "text": "and you can implement the try finally logic in a cleaner way with a using statement.",
			  "displayTime": 98.093
			},
			{
			  "text": "This is not a using statement for namespaces like we saw earlier, this is a using statement that will make",
			  "displayTime": 102.093
			},
			{
			  "text": "sure an object is properly disposed and resources are freed, even if there is an exception.",
			  "displayTime": 107.093
			},
			{
			  "text": "So in the code snippet I'm using two FileStreams, and these FileStreams will be available throughout the code",
			  "displayTime": 113.093
			},
			{
			  "text": "that is inside of the curly braces beneath the using statements, and once we reach the bottom curly brace,",
			  "displayTime": 118.093
			},
			{
			  "text": "the C# compiler will generate code to make that these FileStreams are properly disposed and they're properly closed.",
			  "displayTime": 124.093
			},
			{
			  "text": "That makes sure that all the data that we might have written to a file will be flushed out to disk,",
			  "displayTime": 131.093
			},
			{
			  "text": "and also these files won't be locked and prevent someone else from opening up the file.",
			  "displayTime": 136.093
			},
			{
			  "text": "Let's take a closer look in code.",
			  "displayTime": 140.093
			},
			{
			  "text": "Let's work with a file in the Grades project. What I'd like to do is have the GradeBook write the grades",
			  "displayTime": 143.093
			},
			{
			  "text": "that it stores into a text file, and we already have a WriteGrades method on the GradeBook that allows the",
			  "displayTime": 148.093
			},
			{
			  "text": "caller to set the destination using a parameter. In this case the destination is the Console,",
			  "displayTime": 153.093
			},
			{
			  "text": "so all my program really needs to do is swap Console.Out with an object that will write to a file instead.",
			  "displayTime": 159.093
			},
			{
			  "text": "And this can be fairly easy with the .NET Framework. There is a file class in the .NET Framework,",
			  "displayTime": 166.093
			},
			{
			  "text": "it's in the System.IO namespace, so I'm going to type in file and press Ctrl., that will bring up the action",
			  "displayTime": 171.093
			},
			{
			  "text": "menu that allows me to select this top entry, which says please add a using statement for System.IO at the top of this file.",
			  "displayTime": 177.093
			},
			{
			  "text": "And now on this file class, there's number of static methods that allow me to easily create, and append,",
			  "displayTime": 184.093
			},
			{
			  "text": "and delete files from the file system. I'm going to choose the method CreateText, I need to give this method",
			  "displayTime": 190.093
			},
			{
			  "text": "a string parameter that tells the framework the name of the file that I want to create, and let's call that",
			  "displayTime": 196.093
			},
			{
			  "text": "file Grades.Text, and you can see this method returns an object that is of type StreamWriter, and it turns",
			  "displayTime": 202.093
			},
			{
			  "text": "out that a StreamWriter is compatible with a TextWriter that the WriteGrades methods expects.",
			  "displayTime": 209.093
			},
			{
			  "text": "So if I press F12 to go that method definition, you'll remember we created this method taking a TextWriter,",
			  "displayTime": 215.093
			},
			{
			  "text": "and a StreamWriter is a type of TextWriter. So let me save the return from File.CreateText into a new",
			  "displayTime": 221.093
			},
			{
			  "text": "variable of type StreamWriter, let's call it outputFile, and now what I should be able to do is pass",
			  "displayTime": 230.093
			},
			{
			  "text": "outputFile into the WriteGrades method, and let's try it out by running the program with Ctrl+F5.",
			  "displayTime": 235.093
			},
			{
			  "text": "I'll need to give the GradeBook a name, let's just give it the name Z, and now I no longer see the grades",
			  "displayTime": 243.093
			},
			{
			  "text": "being written to the console, but let's go out and check our Grades.Text file.",
			  "displayTime": 248.093
			},
			{
			  "text": "Since I didn't specify a full path when I did File.CreateText, this file should be created in the same",
			  "displayTime": 252.093
			},
			{
			  "text": "directory where the program is executing, and one easy way to get to that directory is right-click on the",
			  "displayTime": 258.093
			},
			{
			  "text": "Grades project, say Open Folder in File Explorer, and then I can navigate to the folder where the actual",
			  "displayTime": 263.093
			},
			{
			  "text": "assembly lives, so that's the bin, Debug folder, and it's inside of here where I can see a text document,",
			  "displayTime": 270.093
			},
			{
			  "text": "grades.Text, let's open that up and you can see that it is empty.",
			  "displayTime": 276.093
			},
			{
			  "text": "Now this file may not always be empty, it might depend on other things that you're doing in your program,",
			  "displayTime": 280.093
			},
			{
			  "text": "or if you're doing anything with the debugger, but what's happened here is I have written information into",
			  "displayTime": 284.093
			},
			{
			  "text": "a stream, and you have to be a little bit careful with any type of stream, whether it's a FileStream or a",
			  "displayTime": 290.093
			},
			{
			  "text": "NetworkStream, streams have a tendency to buffer information that you write into them, and if you don't",
			  "displayTime": 295.093
			},
			{
			  "text": "properly flush that stream, or close that stream, or dispose that stream, there's a chance your program could",
			  "displayTime": 301.093
			},
			{
			  "text": "exit without the information ever arriving at the actual destination.",
			  "displayTime": 307.093
			},
			{
			  "text": "So this StreamWriter, it does have a Close method, and let's just see what happens if I explicitly invoke",
			  "displayTime": 311.093
			},
			{
			  "text": "this Close method, run the program again, give the GradeBook a simple name, and now come back out to the",
			  "displayTime": 318.093
			},
			{
			  "text": "folder, and open up this text file, and I can see the grades did successfully arrive inside of the text file,",
			  "displayTime": 324.093
			},
			{
			  "text": "so that's good, but typically you don't want to write your code in this style when you're writing a real C# application.",
			  "displayTime": 330.093
			},
			{
			  "text": "Anytime you're working with input and output, there's always a chance for an exception, and you might say",
			  "displayTime": 337.093
			},
			{
			  "text": "well, what types of exceptions? For example, you might be wondering what types of exceptions could",
			  "displayTime": 342.093
			},
			{
			  "text": "File.CreateText throw? And one way to answer that question is to go to the documentation.",
			  "displayTime": 347.093
			},
			{
			  "text": "Since the File class is part of the .NET Framework, I can go to msdn.microsoft.com,",
			  "displayTime": 353.093
			},
			{
			  "text": "the Microsoft Developer Network, and I should be able to find documentation of File.Create.",
			  "displayTime": 358.093
			},
			{
			  "text": "So let me do a search for File.CreateText, and here is that method as the first result in the search list,",
			  "displayTime": 363.093
			},
			{
			  "text": "and as part of the documentation for this method, there will be a list of exceptions that this method could",
			  "displayTime": 373.093
			},
			{
			  "text": "potentially throw. And you can see there might be an UnauthorizedAccessException,",
			  "displayTime": 378.093
			},
			{
			  "text": "or an ArgumentException if I pass an invalid path. The path could also be too long, Windows has a limitation",
			  "displayTime": 382.093
			},
			{
			  "text": "on the maximum length of a path and file name. I could also be trying to create this file in a directory",
			  "displayTime": 389.093
			},
			{
			  "text": "that doesn't exist. So all sorts of things could go wrong. And ideally what I would do, is I would use this",
			  "displayTime": 396.093
			},
			{
			  "text": "StreamWriter inside of a try, catch, finally construct, where inside of the finally I would do something like,",
			  "displayTime": 402.093
			},
			{
			  "text": "outputFile.Close to make sure that no matter what goes wrong inside of creating the file or writing the",
			  "displayTime": 410.093
			},
			{
			  "text": "grades, I'll always be closing this file that I'm creating. But the try and the catch is only useful if I",
			  "displayTime": 415.093
			},
			{
			  "text": "actually want to do some sort of exception handling and process exceptions.",
			  "displayTime": 422.093
			},
			{
			  "text": "And so an alternative approach to making sure this output file is always closed, is to wrap this StreamWriter",
			  "displayTime": 426.093
			},
			{
			  "text": "with a using statement. The using statement is essentially saying I'm going to be using this unmanaged",
			  "displayTime": 433.093
			},
			{
			  "text": "resource, this StreamWriter in the following block of code. So I will use curly braces to contain all the",
			  "displayTime": 439.093
			},
			{
			  "text": "code that's going to be using that resource, and behind the scenes what the C# complier will do is",
			  "displayTime": 445.093
			},
			{
			  "text": "essentially set up a try finally to make sure that if there are any exceptions inside of this block of code,",
			  "displayTime": 450.093
			},
			{
			  "text": "then it will always dispose of this output file. And you can see in the IntelliSense window that there is",
			  "displayTime": 456.093
			},
			{
			  "text": "both a Close method and a Dispose method. And any time you see a Dispose method that's a good indication that",
			  "displayTime": 461.093
			},
			{
			  "text": "you would be able to use this object in a using statement. And many classes in .NET will offer both a",
			  "displayTime": 467.093
			},
			{
			  "text": "Dispose method and then some sort of explicit Close method, and you can think of them as synonyms for one",
			  "displayTime": 473.093
			},
			{
			  "text": "another, and they both ultimately achieve the same effect which is to make sure this unmanaged resources",
			  "displayTime": 478.093
			},
			{
			  "text": "released, and closed, and flushed properly. And since I now have outputFile wrapped with a using statement,",
			  "displayTime": 484.093
			},
			{
			  "text": "I no longer need to explicitly invoke close or dispose, that's going to happen for me.",
			  "displayTime": 490.093
			},
			{
			  "text": "And if book.WriteGrades does throw an exception, it will go unhandled and crash the program, but that's okay,",
			  "displayTime": 495.093
			},
			{
			  "text": "I'm still going to make that these resources are cleaned up. If CreateText throws an exception,",
			  "displayTime": 501.093
			},
			{
			  "text": "that will also be an unhandled exception, I have no try catch block here, and in that situation we'll have to",
			  "displayTime": 506.093
			},
			{
			  "text": "assume that the .NET Framework is properly cleaning things up, because if CreateText throws an exception,",
			  "displayTime": 511.093
			},
			{
			  "text": "I'm not going to get an outputFile object back, I'm not going to get a StreamWriter.",
			  "displayTime": 516.093
			},
			{
			  "text": "So this code should be a little more robust now, and I should be able to still run the program, enter a name",
			  "displayTime": 522.093
			},
			{
			  "text": "for my GradeBook, and come out to the Grades.Text file, and see that it's populated.",
			  "displayTime": 526.093
			},
			{
			  "text": "And any time you're working with an object and you see there is a dispose method, you'll probably want to",
			  "displayTime": 533.093
			},
			{
			  "text": "consider if you should be using a using statement or not. Now there's one more thing that I want to do to",
			  "displayTime": 537.093
			},
			{
			  "text": "this program before we leave, and that's just clean a few things up because we have various bits of code",
			  "displayTime": 542.093
			},
			{
			  "text": "scattered around this main method doing all sorts of different things, and to me the method just feels messy.",
			  "displayTime": 548.093
			},
			{
			  "text": "So one thing I would like to do is highlight the lines of code that try to achieve a specific goal,",
			  "displayTime": 554.093
			},
			{
			  "text": "like getting the name for a GradeBook, and refactor these bits into individual methods that have a name.",
			  "displayTime": 559.093
			},
			{
			  "text": "And one easy way to do that is to select the code, and then press Ctrl., the only option that pops up here",
			  "displayTime": 565.093
			},
			{
			  "text": "is an ExtractMethod option. This is part of the built-in refactoring tools in Visual Studio,",
			  "displayTime": 572.093
			},
			{
			  "text": "and if I just select this option, Visual Studio will create that method for me and I can name this method",
			  "displayTime": 577.093
			},
			{
			  "text": "now, I could name it something like GetBookName, and when I press Enter, Visual Studio will apply changes",
			  "displayTime": 582.093
			},
			{
			  "text": "throughout my source code, I now have a method that I can call GetBookName, which will contain the code that",
			  "displayTime": 591.093
			},
			{
			  "text": "was previously inside of the main method. Let's do this a few more times, let's also use ExtractMethod on",
			  "displayTime": 597.093
			},
			{
			  "text": "these three lines of code, because what these three lines of code are doing are really adding grades to the",
			  "displayTime": 604.093
			},
			{
			  "text": "GradeBook, then, I'm using a few lines of code here to save the grades to the file system, and finally at the",
			  "displayTime": 610.093
			},
			{
			  "text": "end I'm going to extract a method to write the results. And now to me the main method looks much better because",
			  "displayTime": 620.093
			},
			{
			  "text": "we're breaking down the small steps and individual pieces of the program into named methods that have just a",
			  "displayTime": 628.093
			},
			{
			  "text": "little bit of code inside of each one, and to me that's always a better design that is going to be easier to maintain.",
			  "displayTime": 634.093
			},
			{
			  "text": "We're going to be talking more about design in the next module on Object-Oriented Programming.",
			  "displayTime": 640.093
			}
		  ]
		},
		{
		  "title": "Summary",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m6&clip=9&mode=live",
		  "segments": [
			{
			  "text": "In this module we looked at flow control statements in C#. These statements included the conditional",
			  "displayTime": 0.0
			},
			{
			  "text": "branching statements like the if statement. We also looked at looping statements like the for loop and the",
			  "displayTime": 6.349
			},
			{
			  "text": "jumping statements like break and continue. Finally we took a close look at exceptions because exceptions",
			  "displayTime": 10.349
			},
			{
			  "text": "are the error handling mechanism that is built into .NET, and sooner or later you will either need to throw",
			  "displayTime": 16.349
			},
			{
			  "text": "an exception because your program has detected a critical error, or you will need to handle an exception and",
			  "displayTime": 21.349
			},
			{
			  "text": "try to either recover from the error or log the error and prevent the program from terminating.",
			  "displayTime": 26.349
			},
			{
			  "text": "We also saw the importance of cleaning up unmanaged resources like open files and how we can let the C# using",
			  "displayTime": 31.349
			},
			{
			  "text": "keyword help us clean up and free these unmanaged resources.",
			  "displayTime": 37.849
			}
		  ]
		}
	  ]
	},
	{
	  "title": "Object Oriented Programming",
	  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m7&clip=0&mode=live",
	  "clips": [
		{
		  "title": "Introduction",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m7&clip=0&mode=live",
		  "segments": [
			{
			  "text": "Hi, this is Scott, and this is the final module in this C# course.",
			  "displayTime": 0.0
			},
			{
			  "text": "In this module I want to give you the concepts and syntax for Object-Oriented Programming in C#.",
			  "displayTime": 6.0
			},
			{
			  "text": "C# is an object-oriented programming language, although you can do more than just object-oriented programming",
			  "displayTime": 11.0
			},
			{
			  "text": "in C#, and I talk about those topics in the C# Programming Paradigms course on Pluralsight.",
			  "displayTime": 17.0
			},
			{
			  "text": "In this module of this course we're going to look at inheritance and polymorphism and how to use abstract",
			  "displayTime": 22.0
			},
			{
			  "text": "classes and interfaces.",
			  "displayTime": 28.0
			}
		  ]
		},
		{
		  "title": "The Pillars",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m7&clip=1&mode=live",
		  "segments": [
			{
			  "text": "The C# language provides the syntax and tools to build on what is known as the three pillars of object-oriented programming.",
			  "displayTime": 1.0
			},
			{
			  "text": "These three pillars are encapsulation, inheritance, and polymorphism.",
			  "displayTime": 8.0
			},
			{
			  "text": "My personal view is that encapsulation is the primary pillar of object-oriented programming, and most classes",
			  "displayTime": 11.631
			},
			{
			  "text": "and training tend to overemphasize inheritance and polymorphism as being more useful than they really in day",
			  "displayTime": 17.631
			},
			{
			  "text": "to day programming. But that's my personal view. We are going to talk about all three pillars however,",
			  "displayTime": 23.631
			},
			{
			  "text": "and understanding how inheritance and polymorphism work in C# is important, even if you don't put those two",
			  "displayTime": 29.631
			},
			{
			  "text": "pillars to work all the time in the software that you write. Encapsulation is the key pillar of OOP,",
			  "displayTime": 34.631
			},
			{
			  "text": "because without encapsulation we could never build large applications or large systems.",
			  "displayTime": 40.631
			},
			{
			  "text": "Encapsulation helps us hide complexity, and it allows me to reason about something like a grade book,",
			  "displayTime": 45.631
			},
			{
			  "text": "which we've been building in this course, and think about what I can do with a grade book, which is add",
			  "displayTime": 50.631
			},
			{
			  "text": "grades and compute statistics. And I don't have to worry about the details, and the data structures,",
			  "displayTime": 54.631
			},
			{
			  "text": "and the calculations involved. So classes are one way to achieve encapsulation in C#, but taking 10 lines of",
			  "displayTime": 59.631
			},
			{
			  "text": "code and putting that code into a method is another form of encapsulation.",
			  "displayTime": 66.631
			},
			{
			  "text": "Instead of knowing the details about those 10 lines of code, I can now think and reason about just the method",
			  "displayTime": 70.631
			},
			{
			  "text": "and what it can do, what inputs does it take, what does it return.",
			  "displayTime": 75.631
			},
			{
			  "text": "And that method even has name that I can use to refer to everything that is happening within those 10 lines of code.",
			  "displayTime": 79.631
			},
			{
			  "text": "Encapsulation then is all about hiding complexity and building models, which logically group together functionality.",
			  "displayTime": 85.631
			},
			{
			  "text": "But inheritance and polymorphism are different, these two pillars of object-oriented programming are about",
			  "displayTime": 91.631
			},
			{
			  "text": "reusing code and reusing data. It's almost never a good idea to have duplicated code inside of an",
			  "displayTime": 96.631
			},
			{
			  "text": "application, and inheritance and polymorphism are two techniques to avoid duplicated code and reuse that code instead.",
			  "displayTime": 102.631
			},
			{
			  "text": "So let's turn our attention to inheritance.",
			  "displayTime": 109.631
			}
		  ]
		},
		{
		  "title": "Inheritance",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m7&clip=2&mode=live",
		  "segments": [
			{
			  "text": "Inheritance is a technique where I can define a relationship between two classes such that one class takes on",
			  "displayTime": 2.0
			},
			{
			  "text": "or inherits the members of another class. So if class A has one method, DoWork, then class B can also have",
			  "displayTime": 8.714
			},
			{
			  "text": "that same method, just by inheriting from class A and not writing any additional code, but reusing the code",
			  "displayTime": 15.714
			},
			{
			  "text": "already in the first class. If class B wanted to have an additional method, it can.",
			  "displayTime": 20.714
			},
			{
			  "text": "The syntax for inheritance is to use a colon after the name of your class, and then you specify the base",
			  "displayTime": 26.714
			},
			{
			  "text": "class, that is the class whose members you are going to inherit.",
			  "displayTime": 31.714
			},
			{
			  "text": "We've already seen some inheritance in this course when we defined a custom event arguments class for the",
			  "displayTime": 35.714
			},
			{
			  "text": "GradeBook's NameChanged event. All events in .NET should be pass an arguments parameter that inherits from",
			  "displayTime": 40.714
			},
			{
			  "text": "EventArgs in the framework class library. You can only inherit from a single class in C#, that is you can",
			  "displayTime": 46.714
			},
			{
			  "text": "only specify a single base class after the colon, but the inheritance chain is unlimited.",
			  "displayTime": 52.714
			},
			{
			  "text": "You can have class C inherit from class B, which inherits from class A, and in that case class C is inheriting",
			  "displayTime": 58.714
			},
			{
			  "text": "all the members from B and A. So class C would also have a DoWork method.",
			  "displayTime": 65.714
			},
			{
			  "text": "You do have to be cautious with inheritance because it does tie up your classes and your code into a tightly bound relationship.",
			  "displayTime": 69.714
			},
			{
			  "text": "I talk about that more in the Programming Paradigms course, for now let's take a look at inheritance in code.",
			  "displayTime": 77.714
			},
			{
			  "text": "Inside the Grades project that we've been working on throughout this course, let's imagine that our users",
			  "displayTime": 83.714
			},
			{
			  "text": "came to us and they've told us that occasionally they want a grade book that will through away the lowest grade",
			  "displayTime": 88.714
			},
			{
			  "text": "before computing statistics. That will allow a student who has a bad day or one bad assignment to not be",
			  "displayTime": 94.714
			},
			{
			  "text": "penalized as much for that one bad grade, and this is something that the users occasionally want to do,",
			  "displayTime": 99.714
			},
			{
			  "text": "they don't want to get rid of the original algorithm for the grade book, they just occasionally want to",
			  "displayTime": 105.714
			},
			{
			  "text": "compute statistics and throw away the lowest grade. Now what are some different approaches to implementing this?",
			  "displayTime": 109.714
			},
			{
			  "text": "Well I could take all of the code in the GradeBook and press Ctrl+A and copy this code and paste it into a",
			  "displayTime": 114.714
			},
			{
			  "text": "new class, perhaps we can call it the ThrowAwayGradeBook, and then I can go in and tweak the code,",
			  "displayTime": 120.714
			},
			{
			  "text": "and tweak ComputeStatistics to throw away the lowest grade before doing the rest of the computations.",
			  "displayTime": 126.714
			},
			{
			  "text": "But this copy and paste approach can lead to a lot of duplicated code inside of an application if that",
			  "displayTime": 131.714
			},
			{
			  "text": "happens too often. So another approach might be to modify the existing GradeBook, perhaps add a public",
			  "displayTime": 136.714
			},
			{
			  "text": "property, ThrowAwayLowest, and if I'm in a situation where the lowest grade needs to be thrown away,",
			  "displayTime": 143.714
			},
			{
			  "text": "I could always instantiate the GradeBook and then set this property to true, and inside of ComputeStatistics",
			  "displayTime": 149.714
			},
			{
			  "text": "check this property, and if it's true run a little bit of code to remove the lowest grade and then continue",
			  "displayTime": 155.714
			},
			{
			  "text": "with the execution that's computing the statistics. That's another approach.",
			  "displayTime": 161.714
			},
			{
			  "text": "And the approach that ultimately I would take really depends on the team that I'm working with and the type",
			  "displayTime": 165.714
			},
			{
			  "text": "of application I'm building, and most importantly the business, where else do I anticipate that the business",
			  "displayTime": 170.714
			},
			{
			  "text": "might want to make changes to the GradeBook or the algorithms that are involved?",
			  "displayTime": 174.714
			},
			{
			  "text": "And in some of those scenarios I would use inheritance to solve this problem, and that's the approach that",
			  "displayTime": 179.714
			},
			{
			  "text": "I'll show you today. Let's go into the Grades project and add a new class.",
			  "displayTime": 183.714
			},
			{
			  "text": "I will call this the ThrowAwayGradeBook, because it will throw away the lowest grade.",
			  "displayTime": 189.714
			},
			{
			  "text": "And I want this to also be a public class, and this is a class that I want to inherit from GradeBook.",
			  "displayTime": 197.714
			},
			{
			  "text": "So at this point, ThrowAwayGradeBook has all of the same capabilities as our regular GradeBook.",
			  "displayTime": 206.714
			},
			{
			  "text": "In fact I can come into Program.cs, and instead of instantiating a GradeBook, I can instantiate a",
			  "displayTime": 210.714
			},
			{
			  "text": "ThrowAwayGradeBook, and I can take that object and assign it to a variable of type GradeBook.",
			  "displayTime": 218.714
			},
			{
			  "text": "We would say that the ThrowAwayGradeBook is a GradeBook, because ThrowAwayGradeBook inherits from GradeBook,",
			  "displayTime": 223.714
			},
			{
			  "text": "it's a specific type of GradeBook. And in C# you can always take a derived type and assign it to a variable",
			  "displayTime": 229.714
			},
			{
			  "text": "of a base type and that's completely legal. At this point I could even run the program, first let me comment",
			  "displayTime": 235.714
			},
			{
			  "text": "out this line of code that would force me to input a GradeBook name, I can run this program with Ctrl+F5,",
			  "displayTime": 241.714
			},
			{
			  "text": "and I can see that we're still outputting the same numbers that we had before, the average is 85.17,",
			  "displayTime": 248.714
			},
			{
			  "text": "and the lowest grade is a 75. So currently, this new ThrowAwayGradeBook object behaves just like a regular GradeBook.",
			  "displayTime": 253.714
			},
			{
			  "text": "Now what I want to do is have ComputeStatistics behave a little bit differently, I want it to throw away the lowest grade.",
			  "displayTime": 261.714
			},
			{
			  "text": "So on the ThrowAwayGradeBook let me create a public method that will return an object of type",
			  "displayTime": 268.714
			},
			{
			  "text": "GradeStatistics, this is also called ComputeStatistics, and inside of here I want to reuse the existing",
			  "displayTime": 274.714
			},
			{
			  "text": "algorithm that is inside of the GradeBook as much as possible, because it's already doing the hard work of",
			  "displayTime": 282.714
			},
			{
			  "text": "the calculations, and I can do this. You might remember earlier in the course we talked about a special",
			  "displayTime": 287.714
			},
			{
			  "text": "implicit variable that's available inside of every instance method, that is a non-static method,",
			  "displayTime": 292.714
			},
			{
			  "text": "and that's the this variable. This is a keyword in C#, and this allows me to reference the object that I'm",
			  "displayTime": 297.714
			},
			{
			  "text": "currently inside of, and I can see in the IntelliSense window I can reach methods that are on my object instance,",
			  "displayTime": 303.714
			},
			{
			  "text": "methods that I've inherited, methods like AddGrade and ComputeStatistics.",
			  "displayTime": 309.714
			},
			{
			  "text": "There's another keyword in C#, a special implicit variable, it's called base, and what base will allow me to",
			  "displayTime": 313.714
			},
			{
			  "text": "do is reach specific methods in a class that I've inherited from.",
			  "displayTime": 319.714
			},
			{
			  "text": "So in this case when I say base.ComputeStatistics, I'm really referring to that ComputeStatistics method that",
			  "displayTime": 324.714
			},
			{
			  "text": "is available from the GradeBook. And ultimately what I could do is just say return whatever that",
			  "displayTime": 330.714
			},
			{
			  "text": "ComputeStatistics method comes up with that will use the existing code inside of the GradeBook.",
			  "displayTime": 336.714
			},
			{
			  "text": "But before I invoke that ComputeStatistics method in my base class, I need to remove the lowest grade.",
			  "displayTime": 341.714
			},
			{
			  "text": "So let's declare a variable of type float, I will call it lowest, and initialize it to float.MaxValue,",
			  "displayTime": 347.714
			},
			{
			  "text": "and what I need to do is loop through each grade that is in my grades collection, except I cannot reach the list",
			  "displayTime": 354.714
			},
			{
			  "text": "of grades from the ThrowAwayGradeBook. Notice the errors that grades is inaccessible due to its protection level.",
			  "displayTime": 365.714
			},
			{
			  "text": "Over in the GradeBook, you might remember that when we created this grades field, this list of grades,",
			  "displayTime": 371.714
			},
			{
			  "text": "we marked this field as private, and the only code that is allowed to access this field is code that inside",
			  "displayTime": 378.714
			},
			{
			  "text": "of the same class, inside of GradeBook.cs. But I do want to give the ThrowAwayGradeBook access to these grades.",
			  "displayTime": 384.714
			},
			{
			  "text": "Now I don't want to make grades public, that would give everyone access to this field, I need something in",
			  "displayTime": 390.714
			},
			{
			  "text": "between, and that in between level of access is protected. So a public member, anyone can access.",
			  "displayTime": 396.714
			},
			{
			  "text": "A private member, only code inside of the same class can access.",
			  "displayTime": 406.714
			},
			{
			  "text": "A protected member, whether it's a field, or an event, or a method, a protected member you can access from",
			  "displayTime": 410.714
			},
			{
			  "text": "code that is in this class, or code that is in a derived class. And by marking grades as protected,",
			  "displayTime": 416.714
			},
			{
			  "text": "I should now have access to that field from any class that ultimately inherits from GradeBook.",
			  "displayTime": 423.714
			},
			{
			  "text": "And I could now say lowest = Math.Min, between the grade that I'm looking at and my existing lowest score,",
			  "displayTime": 429.714
			},
			{
			  "text": "and when that loop is finished I should have the lowest grade in that variable, and now there's a very",
			  "displayTime": 439.714
			},
			{
			  "text": "convenient Remove method that I can use on a list, and I could say grades.Remove this lowest item.",
			  "displayTime": 443.714
			},
			{
			  "text": "Now there's a couple situations I should be careful with in this code, I should be careful if there's only",
			  "displayTime": 452.714
			},
			{
			  "text": "one grade in the grades collection, or if there's no grades in the grades collection, or if someone's going",
			  "displayTime": 456.714
			},
			{
			  "text": "to call ComputeStatistics multiple times and keep removing grades, those are all situations I need to worry",
			  "displayTime": 462.714
			},
			{
			  "text": "about, but I'm just making you aware of those, we want to focus on inheritance and this is about the simplest",
			  "displayTime": 468.714
			},
			{
			  "text": "possible thing I could do to remove the lowest grade. So let's run the application again, and you'll notice",
			  "displayTime": 473.714
			},
			{
			  "text": "I'm getting the same results as I did before, the average is still an 85.17, and the lowest grade is still a 75.",
			  "displayTime": 479.714
			},
			{
			  "text": "What's going wrong? Let's debug this a little bit using Console.WriteLine.",
			  "displayTime": 485.714
			},
			{
			  "text": "Sometimes Console.WriteLine is easier than using the debugger itself.",
			  "displayTime": 490.714
			},
			{
			  "text": "Here I'm going to say that we are inside of ThrowAwayGradeBook: :ComputeStatistics.",
			  "displayTime": 494.714
			},
			{
			  "text": "And I'm going to take this line of code and go to the GradeBook and paste that line of code into",
			  "displayTime": 501.714
			},
			{
			  "text": "ComputeStatistics, just so I know when we are inside of the GradeBook: :ComputeStatistics method.",
			  "displayTime": 506.714
			},
			{
			  "text": "Let me run this program again, and I can see that clearly I'm invoking ComputeStatistics on the GradeBook,",
			  "displayTime": 514.714
			},
			{
			  "text": "even though inside of my program I've instantiated a new ThrowAwayGradeBook.",
			  "displayTime": 521.714
			},
			{
			  "text": "So this isn't quite the behavior that I want, I want to be able to instantiate the ThrowAwayGradeBook,",
			  "displayTime": 527.714
			},
			{
			  "text": "and I want that new version of ComputeStatistics to work when I instantiate that GradeBook.",
			  "displayTime": 532.714
			},
			{
			  "text": "So let's take a look at solving that problem in the next clip, but right now I just want you to know that we have",
			  "displayTime": 536.714
			},
			{
			  "text": "an inheritance relationship now between ThrowAwayGradeBook and GradeBook.",
			  "displayTime": 541.714
			},
			{
			  "text": "Anything that I can do with a GradeBook I can also do with a ThrowAwayGradeBook, and when this program",
			  "displayTime": 546.714
			},
			{
			  "text": "executes I really am executing against a ThrowAwayGradeBook. That's the type of object that I pass to",
			  "displayTime": 552.714
			},
			{
			  "text": "WriteResults, and SaveGrades, and AddGrades, it's just that we need it to work a little bit differently.",
			  "displayTime": 559.714
			},
			{
			  "text": "So let's talk about that next.",
			  "displayTime": 565.214
			}
		  ]
		},
		{
		  "title": "Polymorphism",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m7&clip=3&mode=live",
		  "segments": [
			{
			  "text": "Polymorphism is the third pillar of object-oriented programming, and if you know a little bit about the Greek",
			  "displayTime": 2.0
			},
			{
			  "text": "language, which I don't, you'd know that poly stands for many, and morph stands for shape, and thus we're",
			  "displayTime": 7.174
			},
			{
			  "text": "talking about the concept of many shapes. That's a good description for the behavior that we can achieve with C#.",
			  "displayTime": 13.174
			},
			{
			  "text": "I can have a variable of type GradeBook, and I can point to objects with different shapes, so objects with",
			  "displayTime": 19.174
			},
			{
			  "text": "different types, as long as all those objects inherit from or are a GradeBook, then it's legal.",
			  "displayTime": 25.174
			},
			{
			  "text": "So my GradeBook variable can point to a GradeBook, but it can also point to a ThrowAwayGradeBook because",
			  "displayTime": 31.174
			},
			{
			  "text": "again, another way to think about inheritance is to think about is a relationships.",
			  "displayTime": 36.174
			},
			{
			  "text": "We say that a ThrowAwayGradeBook is a GradeBook, it derives from GradeBook, GradeBook is a base class,",
			  "displayTime": 40.174
			},
			{
			  "text": "and any time you have an inheritance relationship you can have a variable typed as a base class that points",
			  "displayTime": 46.174
			},
			{
			  "text": "to an object derived from that base class. I cannot have a variable typed as string that holds an integer",
			  "displayTime": 51.174
			},
			{
			  "text": "value because those two types have no inheritance relationship, but I can declare a variable typed as object",
			  "displayTime": 57.174
			},
			{
			  "text": "and point it to anything, a string, an integer, a date time, a GradeBook, because System.Object is the",
			  "displayTime": 63.174
			},
			{
			  "text": "ultimate base class for anything and everything in .NET. Everything in .NET ultimately derives from",
			  "displayTime": 70.174
			},
			{
			  "text": "System.Object, so if you declare a class and do not explicitly declare a base class for that class,",
			  "displayTime": 75.174
			},
			{
			  "text": "the base class is System.Object, just like the code on the screen is being very explicit in saying the class A",
			  "displayTime": 81.174
			},
			{
			  "text": "inherits from object. I could leave the :object off and have the same result.",
			  "displayTime": 87.174
			},
			{
			  "text": "And class B inherits from class A, which inherits from Object. So an instance of B is an A and is an object.",
			  "displayTime": 92.174
			},
			{
			  "text": "There's also a keyword in C# to work with System.Object, and that's just the word object with a lowercase O.",
			  "displayTime": 101.174
			},
			{
			  "text": "Now in this code, both class A and class B have a DoWork method, and just like with the GradeBooks that we're",
			  "displayTime": 107.174
			},
			{
			  "text": "working with, we want these two methods to behave differently.",
			  "displayTime": 113.174
			},
			{
			  "text": "Now currently we have a ThrowAwayGradeBook, but we assigned that object to a GradeBook variable,",
			  "displayTime": 116.174
			},
			{
			  "text": "and when I call ComputeStatistics, we saw that we're invoking the ComputeStatistics method in the GradeBook,",
			  "displayTime": 122.174
			},
			{
			  "text": "not the ThrowAwayGradeBook, and that's because the C# compiler without any other information, is going to",
			  "displayTime": 128.174
			},
			{
			  "text": "choose the method to invoke based on the type of the variable. If I define a method or a property with a",
			  "displayTime": 134.174
			},
			{
			  "text": "virtual keyword, then the C# compiler will generate code to invoke that method by looking at the type of",
			  "displayTime": 141.174
			},
			{
			  "text": "object it's working against at runtime. Without the virtual keyword the method we invoke is determined by",
			  "displayTime": 148.174
			},
			{
			  "text": "the type of variable that we're invoking the method through. It's the virtual keyword that gives us",
			  "displayTime": 153.174
			},
			{
			  "text": "polymorphism, because now, I can have a variable that points to different objects, and when I invoke methods",
			  "displayTime": 159.174
			},
			{
			  "text": "or properties on those objects, they can all behave differently.",
			  "displayTime": 164.174
			},
			{
			  "text": "Classes that inherit from class A can override that DoWork to behave differently.",
			  "displayTime": 169.174
			},
			{
			  "text": "Let's get a concrete example with our GradeBook.",
			  "displayTime": 175.174
			},
			{
			  "text": "Currently in the GradeBook project we are not achieving polymorphism.",
			  "displayTime": 180.174
			},
			{
			  "text": "We're not achieving polymorphism because ComputeStatistics in my GradeBook class does not use a virtual",
			  "displayTime": 184.174
			},
			{
			  "text": "keyword, and thus, when the C# compiler sees a call to ComputeStatistics through a variable typed as",
			  "displayTime": 191.174
			},
			{
			  "text": "GradeBook, the C# compiler will determine the method to call based on the type of this variable.",
			  "displayTime": 199.174
			},
			{
			  "text": "So it sees GradeBook.ComputeStatistics, it's going to invoke ComputeStatistics, the one that is defined",
			  "displayTime": 203.174
			},
			{
			  "text": "inside of GradeBook.cs. Now let's do a little bit of an experiment.",
			  "displayTime": 209.174
			},
			{
			  "text": "Let's temporarily say that WriteResults has to take an object of type ThrowAwayGradeBook, which means I also",
			  "displayTime": 213.174
			},
			{
			  "text": "need to type this variable as ThrowAwayGradeBook because WriteResults will no longer accept just a GradeBook,",
			  "displayTime": 220.174
			},
			{
			  "text": "it has to have a more specific type, the ThrowAwayGradeBook, and now if I run the program, I can see I call",
			  "displayTime": 227.174
			},
			{
			  "text": "into ThrowAwayGradeBook: :ComputeStatistics, which calls into GradeBook: :ComputeStatistics, and now the",
			  "displayTime": 234.174
			},
			{
			  "text": "average is up to a 90.25 which is an A, we've thrown away the lowest grade, which is what we wanted to do.",
			  "displayTime": 240.174
			},
			{
			  "text": "But I'd like to achieve the same behavior using polymorphism, I'd like to achieve the same behavior leaving",
			  "displayTime": 246.174
			},
			{
			  "text": "this variable typed as GradeBook, and having WriteResults take an object that is just a GradeBook,",
			  "displayTime": 251.174
			},
			{
			  "text": "because with the magic of polymorphism I can implement WriteResults to take a GradeBook and have many",
			  "displayTime": 258.174
			},
			{
			  "text": "different types of GradeBooks and have those objects behave differently without me doing any additional work",
			  "displayTime": 264.174
			},
			{
			  "text": "inside of WriteResults, or tying myself to a specific type of GradeBook, like the ThrowAwayGradeBook.",
			  "displayTime": 270.174
			},
			{
			  "text": "In fact, I'm even going to take this line of code and press Ctrl+., and tell Visual Studio that I want to",
			  "displayTime": 276.174
			},
			{
			  "text": "extract this into a new method. I'm going to call this method CreateGradeBook, and although it might not",
			  "displayTime": 283.174
			},
			{
			  "text": "make a lot of sense here in a simple application like we have with the GradeBook, but there are many times in",
			  "displayTime": 291.174
			},
			{
			  "text": "software where you want the flexibility of having something created for you via a factory class,",
			  "displayTime": 297.174
			},
			{
			  "text": "or a provider, or some sort of infrastructure that's in your application, you just want something to be",
			  "displayTime": 303.174
			},
			{
			  "text": "created for you, know that it has some type like a GradeBook type, that you don't ultimately want to know",
			  "displayTime": 308.174
			},
			{
			  "text": "exactly what type you're working with. Is it a regular GradeBook, is it a ThrowAwayGradeBook, really all the",
			  "displayTime": 314.174
			},
			{
			  "text": "rest of the code that I have inside of Program.cs doesn't care, so I want to work with variables of type",
			  "displayTime": 320.174
			},
			{
			  "text": "GradeBook, but have polymorphic behavior when I invoke methods like ComputeStatistics, and that's when I have",
			  "displayTime": 326.174
			},
			{
			  "text": "to come into GradeBook.cs and use the virtual keyword, because now when the C# compiler sees me invoke",
			  "displayTime": 332.174
			},
			{
			  "text": "ComputeStatistics through a variable typed as GradeBook, it's no longer going to use the type of variable to",
			  "displayTime": 341.174
			},
			{
			  "text": "figure out which method to call, instead it's going to use the type of object, the type that it sees at runtime.",
			  "displayTime": 347.174
			},
			{
			  "text": "So if it sees ultimately that that GradeBook is a ThrowAwayGradeBook it will go looking to see if the",
			  "displayTime": 353.174
			},
			{
			  "text": "ThrowAwayGradeBook overrides ComputeStatistics. And this doesn't mean that I hide or replace the",
			  "displayTime": 358.174
			},
			{
			  "text": "ComputeStatistics method that is in the GradeBook, I can still access that method using",
			  "displayTime": 365.174
			},
			{
			  "text": "base.ComputeStatistics, it just means that if someone does invoke ComputeStatistics, I have the ability,",
			  "displayTime": 370.174
			},
			{
			  "text": "if we're really working with a ThrowAwayGradeBook to change the behavior of what's going to happen,",
			  "displayTime": 376.174
			},
			{
			  "text": "in this case invoke my method that I've implemented for ComputeStatistics, instead of the method defined in GradeBook.",
			  "displayTime": 381.174
			},
			{
			  "text": "And just to go back and talk about what was on the slide GradeBook, I haven't defined a base class for",
			  "displayTime": 387.174
			},
			{
			  "text": "GradeBook, but technically GradeBook does inherit from System.Object, and that's why inside of Program.cs,",
			  "displayTime": 393.174
			},
			{
			  "text": "any time I'm using IntelliSense against GradeBook, I can see methods that I haven't defined in the GradeBook",
			  "displayTime": 401.174
			},
			{
			  "text": "methods like get GetHashCode, GetType, ToString, those are all methods that are defined on System.Object,",
			  "displayTime": 407.174
			},
			{
			  "text": "and those are all methods that I can override. If I just type override in Visual Studio and press space,",
			  "displayTime": 413.174
			},
			{
			  "text": "Visual Studio is smart enough to figure out which methods that I have my inheritance chain that are virtual",
			  "displayTime": 421.174
			},
			{
			  "text": "that I can override. So if I wanted ToString to behave differently, I can override that method,",
			  "displayTime": 426.174
			},
			{
			  "text": "and provide my own custom implementation of what will happen if someone says book.ToString.",
			  "displayTime": 432.174
			},
			{
			  "text": "But now we're working with variables of type GradeBook, but GradeBook has a virtual method, ComputeStatistics,",
			  "displayTime": 437.174
			},
			{
			  "text": "and ThrowAwayGradeBook, which inherits from GradeBook, it's going to override that behavior, I should be able",
			  "displayTime": 445.174
			},
			{
			  "text": "to achieve polymorphic behavior when I say book.ComputeStatistics.",
			  "displayTime": 450.174
			},
			{
			  "text": "I'm not going to know exactly what happens at this point at compile time, I don't know what ComputeStatistics",
			  "displayTime": 454.174
			},
			{
			  "text": "will be invoked, because the method that is invoked will depend of the type of object that is passed in here,",
			  "displayTime": 460.174
			},
			{
			  "text": "not the type of variable, so Ctrl+F5, and I can see, even though I'm working with a variable of type",
			  "displayTime": 465.174
			},
			{
			  "text": "GradeBook, I am calling ThrowAwayGradeBook, and the lowest grade is an 89.5, which means the low grade has",
			  "displayTime": 470.174
			},
			{
			  "text": "been thrown away, and the letter grade is an A.",
			  "displayTime": 476.174
			}
		  ]
		},
		{
		  "title": "Abstract Classes",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m7&clip=4&mode=live",
		  "segments": [
			{
			  "text": "Earlier I said that inheritance and polymorphism are overrated, and I can qualify that now by saying,",
			  "displayTime": 1.5
			},
			{
			  "text": "inheritance and polymorphism are overrated techniques for code reuse.",
			  "displayTime": 7.615
			},
			{
			  "text": "You can achieve some fantastic designs with polymorphism, which requires some inheritance, you just need to be",
			  "displayTime": 11.615
			},
			{
			  "text": "very careful of the inheritance part. Inheritance binds two classes together into a relationship that",
			  "displayTime": 16.615
			},
			{
			  "text": "cannot be broken, and over the years I've found that inheritance can make software harder to change and",
			  "displayTime": 22.615
			},
			{
			  "text": "harder to understand. Fortunately, there are a couple ways to reduce the amount of rigidity in inheritance,",
			  "displayTime": 28.615
			},
			{
			  "text": "one way is to use abstract classes, and the other way is to use interfaces.",
			  "displayTime": 34.615
			},
			{
			  "text": "Let's talk about abstract classes first. An abstract class is a class that you cannot instantiate",
			  "displayTime": 38.615
			},
			{
			  "text": "because it is not fully implemented. The code on the screen is showing an abstract class to represent a window.",
			  "displayTime": 43.615
			},
			{
			  "text": "So the scenario might be that we're building a UI toolkit, and we need some base type to represent all types",
			  "displayTime": 49.615
			},
			{
			  "text": "of windows on the screen, dialog windows, transparent windows, modal windows, this type is abstract,",
			  "displayTime": 54.615
			},
			{
			  "text": "I know, because it uses the abstract keyword in the type definition, and then the class goes on to define some members.",
			  "displayTime": 60.615
			},
			{
			  "text": "Every window will have a title, every window will have a draw method, and both title and draw have an",
			  "displayTime": 67.615
			},
			{
			  "text": "implementation, they are real working members. If you inherit from window, you don't need to do anything to",
			  "displayTime": 72.615
			},
			{
			  "text": "those members, they are all ready to go, although you can override either the property or the method because they're both virtual.",
			  "displayTime": 79.615
			},
			{
			  "text": "And you could, for example, make the window draw itself using a different piece of code.",
			  "displayTime": 85.615
			},
			{
			  "text": "But then there is the Open method, which is marked abstract, meaning this method has no implementation,",
			  "displayTime": 89.615
			},
			{
			  "text": "it ends with a semicolon, and there is no body defined. To instantiate any kind of window, you will need to",
			  "displayTime": 95.615
			},
			{
			  "text": "derive from this window class and provide an implementation for the Open method.",
			  "displayTime": 102.615
			},
			{
			  "text": "If you don't provide an implementation, you'll be building another abstract class that you cannot instantiate.",
			  "displayTime": 106.615
			},
			{
			  "text": "But a class that derives from window, and provides a definition for Open, that will be what we call a",
			  "displayTime": 111.615
			},
			{
			  "text": "concrete type, it's something that I can instantiate. So there's concrete types and abstract types.",
			  "displayTime": 116.615
			},
			{
			  "text": "You can only instantiate concrete types. If you cannot instantiate an abstract type, why is it useful?",
			  "displayTime": 122.615
			},
			{
			  "text": "It's useful because of polymorphism, because I can declare a variable of type window and use that variable to",
			  "displayTime": 128.615
			},
			{
			  "text": "point to any kind of concrete window that derives from this abstract type.",
			  "displayTime": 135.615
			},
			{
			  "text": "I can interact with any of those windows. I can set the title, I can tell them to draw, I can call open.",
			  "displayTime": 139.615
			},
			{
			  "text": "Those three members are guaranteed to be there if I have a real window object, it must have been created",
			  "displayTime": 145.615
			},
			{
			  "text": "from a concrete derive type. But when I wrote this window class I didn't know how Open needs to behave,",
			  "displayTime": 149.615
			},
			{
			  "text": "that's why it's left as abstract method, I just know there are other pieces of code in the application that",
			  "displayTime": 154.615
			},
			{
			  "text": "need to work with these windows, and they must be able to invoke an Open method to get those windows on the screen.",
			  "displayTime": 160.615
			},
			{
			  "text": "And again this goes back to topic of complexity, somewhere in the code I could be working with window",
			  "displayTime": 166.615
			},
			{
			  "text": "variables, and those window variables are useful because this window type will define everything I need,",
			  "displayTime": 171.615
			},
			{
			  "text": "I don't need to know the specific derived type of window that I'm working with, I don't need to know how it",
			  "displayTime": 177.615
			},
			{
			  "text": "was implemented, of if there are 2 types of windows, or 20 types of windows, I just have code that works with",
			  "displayTime": 182.615
			},
			{
			  "text": "windows, and that's simpler and reduces complexity. Now let's use an example with our GradeBook.",
			  "displayTime": 187.615
			},
			{
			  "text": "Imagine now that the change requests for GradeBook functionality are coming fast and furious.",
			  "displayTime": 195.615
			},
			{
			  "text": "The business is discovering all sorts of different uses for our GradeBook, different ways to compute",
			  "displayTime": 200.615
			},
			{
			  "text": "statistics, different ways to store the grades, people want grades in a database, or in an XML file,",
			  "displayTime": 205.615
			},
			{
			  "text": "they want report cards, they want dashboards, and the implementation of GradeBook.cs is starting to feel a",
			  "displayTime": 210.615
			},
			{
			  "text": "little bit strained, it's not fulfilling all the needs of these different types of GradeBooks.",
			  "displayTime": 216.615
			},
			{
			  "text": "In fact, I might even take a step back and say there's a more general case of we need to track some grades,",
			  "displayTime": 221.615
			},
			{
			  "text": "which is something a GradeBook does, but we're going to add all these other classes that also track grades.",
			  "displayTime": 227.615
			},
			{
			  "text": "And if that's the case I might come in to the project and create a more pure type, a type that defines the",
			  "displayTime": 232.615
			},
			{
			  "text": "things that I need to do without defining the implementation details, so an abstract class, let's call it GradeTracker.",
			  "displayTime": 239.615
			},
			{
			  "text": "In this GradeTracker, I want it to be a public class, but I also want it to be and abstract class,",
			  "displayTime": 249.615
			},
			{
			  "text": "because ultimately I want GradeBooks and ThrowAwayGradeBooks, I want them all to ultimately inherit from GradeTracker.",
			  "displayTime": 256.615
			},
			{
			  "text": "But when I'm building the GradeTracker, I only want to focus on the general capabilities of what these",
			  "displayTime": 262.615
			},
			{
			  "text": "different types of trackers can do, and I have a pretty good idea of what they need to do just based on the",
			  "displayTime": 266.615
			},
			{
			  "text": "program that I've written so far. I know, for instance, that I will need the ability to add a new grade to a",
			  "displayTime": 271.615
			},
			{
			  "text": "GradeTracker, but what I don't know is exactly how that grade is going to be stored, is it going to be in a",
			  "displayTime": 279.615
			},
			{
			  "text": "list, is going to go into a file, is it going to go into a database?",
			  "displayTime": 285.615
			},
			{
			  "text": "I'm going to leave those implementation details to a derive class, so I will mark this method as abstract also.",
			  "displayTime": 289.615
			},
			{
			  "text": "It has no implementation details. And I want to look at the public implementation details for GradeBook,",
			  "displayTime": 295.615
			},
			{
			  "text": "and give a GradeTracker all these capabilities, but without the details.",
			  "displayTime": 301.615
			},
			{
			  "text": "So for example, let's give all GradeTrackers the ability to ComputeStatistics, we're just not going to",
			  "displayTime": 304.615
			},
			{
			  "text": "provide implementation details there. Now this method will no longer be virtual, virtual methods need an",
			  "displayTime": 311.615
			},
			{
			  "text": "implementation, but this method can be abstract and implemented in a derive class.",
			  "displayTime": 316.615
			},
			{
			  "text": "Back in the GradeBook I will also need to do this with WriteGrades, so let me copy that method, the start of",
			  "displayTime": 322.615
			},
			{
			  "text": "that method, paste it here, and this method will also be abstract, and I do need to bring in the System.IO",
			  "displayTime": 329.615
			},
			{
			  "text": "namespace for TextWriter, so Ctrl+., and select System.IO, and then back in the GradeBook, I already have",
			  "displayTime": 338.615
			},
			{
			  "text": "AddGrade as an abstract member, and now this Name property and the NameChanged event, and the logic to track",
			  "displayTime": 346.615
			},
			{
			  "text": "changes, and detect changes, and manage this field, let's say that this is something that will not change",
			  "displayTime": 352.615
			},
			{
			  "text": "throughout all the different GradeTrackers. So what I'm going to do is actually cut this code out of the",
			  "displayTime": 358.615
			},
			{
			  "text": "GradeBook, and add it to the GradeTracker, because as an abstract class, this class is allowed to have some implementation details.",
			  "displayTime": 362.615
			},
			{
			  "text": "So here is a real property that can be used, a Name property, and a NameChanged event, and a private string,",
			  "displayTime": 372.615
			},
			{
			  "text": "_name, I might want to change this to protected, only if I wanted derive classes to directly access _name,",
			  "displayTime": 380.615
			},
			{
			  "text": "that's a decision I have to make, but in this case I'll make it protected.",
			  "displayTime": 389.615
			},
			{
			  "text": "And ultimately the entire purpose of GradeTracker is so that I can work with variables of type GradeTracker",
			  "displayTime": 391.615
			},
			{
			  "text": "in a place like my program, and not worry about the specific type of GradeTracker that I'm actually operating",
			  "displayTime": 397.615
			},
			{
			  "text": "against, just like we did with GradeBook and ThrowAwayGradeBook, but now we're introducing a new type,",
			  "displayTime": 403.615
			},
			{
			  "text": "a type that it even has fewer implementation details in it, and ultimately what I would like to do is work",
			  "displayTime": 408.615
			},
			{
			  "text": "with a GradeTracker here. Now currently CreateGradeBook returns a type that does not derive from GradeTracker.",
			  "displayTime": 413.615
			},
			{
			  "text": "I will need to set up GradeBook so that it inherits from GradeTracker.",
			  "displayTime": 421.615
			},
			{
			  "text": "But before I go over there, let me take this type Name, and I want all these methods, like WriteResults,",
			  "displayTime": 426.615
			},
			{
			  "text": "and CreateGradeBook, I want them to take parameters of type GradeTracker, in the case of Create return",
			  "displayTime": 432.615
			},
			{
			  "text": "something that is a GradeTracker, so that I'm working with this low-level type throughout my program.",
			  "displayTime": 439.615
			},
			{
			  "text": "And I think I've made all the changes there, so let's come back to GradeBook.cs, and now instead of",
			  "displayTime": 446.615
			},
			{
			  "text": "implicitly, or in this case explicitly inheriting from object, let's have this inherit from GradeTracker.",
			  "displayTime": 454.615
			},
			{
			  "text": "And there's just a couple other things that I need to change. You can see I currently have an error,",
			  "displayTime": 460.615
			},
			{
			  "text": "and if I hover over the red squiggly, Visual Studio tells me that GradeBook does not implement the abstract",
			  "displayTime": 464.615
			},
			{
			  "text": "member WriteGrades, or ComputeStatistics, or AddGrade. And the reason is this, when I implement",
			  "displayTime": 469.615
			},
			{
			  "text": "ComputeStatistics and GradeBook, if I want this method to provide an implementation for an abstract method",
			  "displayTime": 475.615
			},
			{
			  "text": "that is in my base class, then I can no longer use the virtual keyword, instead I have to use the override keyword.",
			  "displayTime": 482.615
			},
			{
			  "text": "So an abstract method is implicitly a virtual method, therefore ComputeStatistics is a virtual method in my",
			  "displayTime": 491.615
			},
			{
			  "text": "base class, and I'm not trying to define a new virtual method, I'm trying to override that existing method,",
			  "displayTime": 497.615
			},
			{
			  "text": "I'm also going to have to come to WriteGrades, and use the override keyword here, and with AddGrade,",
			  "displayTime": 503.615
			},
			{
			  "text": "all of these were abstract methods in my base class, therefore they're virtual and I need to override them.",
			  "displayTime": 510.615
			},
			{
			  "text": "And now I should be able to press Shift+Ctrl+B to do a build, and my build is successful, let me press",
			  "displayTime": 516.615
			},
			{
			  "text": "Ctrl+F5 to run the program, and I can still see that the results are the same, and the results are correct,",
			  "displayTime": 521.615
			},
			{
			  "text": "and the lowest grade is an 89.5, this is all good. But now inside of my application, I'm working with this",
			  "displayTime": 527.615
			},
			{
			  "text": "abstract type GradeTracker, and I no longer care when I call ComputeStatistics, or even AddGrade,",
			  "displayTime": 533.615
			},
			{
			  "text": "or WriteGrades what the implementation details are inside of here.",
			  "displayTime": 541.615
			},
			{
			  "text": "And just so you can see the error, if I try to instantiate a new instance of GradeTracker, that will give me",
			  "displayTime": 545.615
			},
			{
			  "text": "an error, I cannot create an instance of an abstract class. So although I can work with GradeTracker",
			  "displayTime": 551.615
			},
			{
			  "text": "throughout this program, when I actually instantiate an object, it needs to be a concrete type, so it needs",
			  "displayTime": 557.615
			},
			{
			  "text": "to be a GradeBook or a ThrowAwayGradeBook.",
			  "displayTime": 563.115
			}
		  ]
		},
		{
		  "title": "Interfaces",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m7&clip=5&mode=live",
		  "segments": [
			{
			  "text": "Building an abstract class is one way to define a type to achieve polymorphism, but another approach is to",
			  "displayTime": 0.0
			},
			{
			  "text": "define an interface. An interface definition uses the interface keyword, and an interface is a type in the .NET Framework.",
			  "displayTime": 8.051
			},
			{
			  "text": "Just like the class, struct, and delegate keywords define types, so does interface.",
			  "displayTime": 15.051
			},
			{
			  "text": "An interface is special because it can never contain any implementation details.",
			  "displayTime": 20.051
			},
			{
			  "text": "When you define an interface you're defining an API for an object, that is any object that implements an",
			  "displayTime": 24.051
			},
			{
			  "text": "interface is guaranteed to have the members an interface describes.",
			  "displayTime": 30.051
			},
			{
			  "text": "The code snippet on the screen if for IWindow, and it's a common naming convention to define interface types",
			  "displayTime": 34.051
			},
			{
			  "text": "with a leading capital I. That's how all the interfaces and the .NET Framework are defined.",
			  "displayTime": 40.051
			},
			{
			  "text": "So any object that implements IWindow must have a title property that is both readable and writeable,",
			  "displayTime": 44.051
			},
			{
			  "text": "it also must have a draw method that takes no parameters and returns void, and it must have an Open method,",
			  "displayTime": 50.051
			},
			{
			  "text": "also a no parameters and returns void. In some ways an interface is like an abstract type,",
			  "displayTime": 55.051
			},
			{
			  "text": "because in order to create a concrete class that implements this interface, I must implement those three members.",
			  "displayTime": 60.051
			},
			{
			  "text": "But there is one huge difference between an abstract class and interface.",
			  "displayTime": 66.051
			},
			{
			  "text": "When I define a class, I can only inherit from a single base class, but I can implement as many interfaces as I like.",
			  "displayTime": 70.051
			},
			{
			  "text": "I can inherit 1 interface, or 10. I can also inherit from a base class N, implement 10 interfaces, as long as",
			  "displayTime": 77.051
			},
			{
			  "text": "I have all the interface members defined. So the interface is the ultimate abstraction,",
			  "displayTime": 84.051
			},
			{
			  "text": "because an interface allows you to define the API your software needs without defining any of the",
			  "displayTime": 89.051
			},
			{
			  "text": "implementation details, and because any class or struct inherit from any interface, interfaces are extremely flexible.",
			  "displayTime": 94.051
			},
			{
			  "text": "People will occasionally ask me if they should be using abstract base classes or interfaces,",
			  "displayTime": 102.051
			},
			{
			  "text": "and I generally favor interfaces. That's just because over the years I've never looked at an interface and",
			  "displayTime": 107.051
			},
			{
			  "text": "said oh, I wish that was an abstract class. But I have looked at an abstract class and said,",
			  "displayTime": 112.051
			},
			{
			  "text": "oh, I wish that was an interface, because abstract classes can be a bit rigid, and make for a complicated",
			  "displayTime": 117.051
			},
			{
			  "text": "inheritance tree. So I prefer interfaces, but we can always debate this.",
			  "displayTime": 122.051
			},
			{
			  "text": "Let me show you some interfaces in code.",
			  "displayTime": 127.051
			},
			{
			  "text": "In the Grades project if I really do have to work with a wide variety of different types of GradeBooks",
			  "displayTime": 130.051
			},
			{
			  "text": "and GradeTrackers, I might decide that I want to work with an interface definition instead of an abstract base class.",
			  "displayTime": 135.051
			},
			{
			  "text": "So instead of a GradeTracker type, I would like an IGradeTracker, where IGradeTracker is an interface that",
			  "displayTime": 142.051
			},
			{
			  "text": "defines a programming API so I can add grades and ComputeStatistics.",
			  "displayTime": 149.051
			},
			{
			  "text": "In Visual Studio if I put the cursor on IGradeTracker and press Ctrl+., Visual Studio will give me an option to",
			  "displayTime": 153.051
			},
			{
			  "text": "generate an interface IGradeTracker in a new file, that's the option I'm going to select, so I press Enter.",
			  "displayTime": 160.051
			},
			{
			  "text": "And now in the project I have an IGradeTracker.cs, it's an interface that currently doesn't define any",
			  "displayTime": 167.051
			},
			{
			  "text": "members, so you'll notice inside of Program.cs, I'm going to have a number of compiler errors, let me go",
			  "displayTime": 173.051
			},
			{
			  "text": "ahead and make some changes so that CreateGradeBook returns something that implements IGradeTracker,",
			  "displayTime": 179.051
			},
			{
			  "text": "and WriteResults takes an IGradeTracker, so does SaveGrades, so does AddGrades, also GetBookName,",
			  "displayTime": 186.051
			},
			{
			  "text": "and that should be all of the changes that I need. Of course currently since this interface does not define",
			  "displayTime": 196.051
			},
			{
			  "text": "any members, I have no ability to WriteGrades, or AddGrades, or do anything useful with an IGradeTracker,",
			  "displayTime": 201.051
			},
			{
			  "text": "so let me borrow some of the code from GradeTracker. I'm going to take these first three lines and paste",
			  "displayTime": 210.051
			},
			{
			  "text": "them into my interface definition. Now inside of an interface, I cannot use an access modifier, so I cannot",
			  "displayTime": 217.051
			},
			{
			  "text": "say that a particular method like AddGrade is public, or protected, or private, and that's because when",
			  "displayTime": 223.051
			},
			{
			  "text": "someone has an object that is an instance of IGradeTracker, AddGrade has to be available, and there's no",
			  "displayTime": 229.051
			},
			{
			  "text": "sense in hiding AddGrade or explicitly saying in the interface definition that it has to be public.",
			  "displayTime": 235.051
			},
			{
			  "text": "Also these methods are implicitly virtual because they're part of an interface, so I do not need to the",
			  "displayTime": 239.051
			},
			{
			  "text": "abstract keyword. And all I'm left with now are these three members, AddGrade, ComputeStatistics,",
			  "displayTime": 244.051
			},
			{
			  "text": "and WriteGrades, and once again I do need to bring in the System.IO namespace for TextWriter.",
			  "displayTime": 249.051
			},
			{
			  "text": "And now I have a choice, I can have GradeTracker implement IGradeTracker, I can have GradeBook implement",
			  "displayTime": 255.051
			},
			{
			  "text": "IGradeTracker, the way you implement an interface is to use a colon, and list the interface name that you",
			  "displayTime": 261.051
			},
			{
			  "text": "want here, so this GradeTracker is now an IGradeTracker, and it's providing those members that IGradeTracker",
			  "displayTime": 267.051
			},
			{
			  "text": "demands, even if they are abstract members, so I'm satisfying the constraint to this interface.",
			  "displayTime": 274.051
			},
			{
			  "text": "But of course what's great about implementing an interface, or inheriting from an interface,",
			  "displayTime": 280.051
			},
			{
			  "text": "is I can also choose a base class that I want to inherit from. And if you do want to derive from a specific",
			  "displayTime": 285.051
			},
			{
			  "text": "class in addition to implementing an interface, the class that you're inheriting from, that has to come first",
			  "displayTime": 292.051
			},
			{
			  "text": "in this list, so I can say object, IGradeTracker, but really no one ever clutters up their code by",
			  "displayTime": 299.051
			},
			{
			  "text": "explicitly saying they inherit from System.Object, that's always implicit, so I'm going to leave that piece off.",
			  "displayTime": 306.051
			},
			{
			  "text": "Now back in Program.cs, I'm still going to have at least one error, because my interface doesn't say anything",
			  "displayTime": 312.051
			},
			{
			  "text": "about this object having a property name. And the C# compiler says, you're passing me an IGradeTracker,",
			  "displayTime": 320.051
			},
			{
			  "text": "but an object that implements this interface isn't guaranteed to have a name property, so it's giving me an error message.",
			  "displayTime": 326.051
			},
			{
			  "text": "I will also need to go my IGradeTracker, and say that anything that implements this interface needs to have a",
			  "displayTime": 333.051
			},
			{
			  "text": "Name property that you can read and write. And now I have an inheritance hierarchy where even my",
			  "displayTime": 339.051
			},
			{
			  "text": "ThrowAwayGradeBook is an IGradeTracker, because ThrowAwayGradeBook inherits from a class, which inherits from",
			  "displayTime": 347.051
			},
			{
			  "text": "a class, which implements this interface IGradeTracker. And now I should be able to build and run the",
			  "displayTime": 354.051
			},
			{
			  "text": "program, and it's still behaving the same, but my program is working through an interface, and that again",
			  "displayTime": 359.051
			},
			{
			  "text": "increases the flexibility of the software. Previously when I was working with the GradeTracker, I could get",
			  "displayTime": 366.051
			},
			{
			  "text": "back any type of object, but it ultimately had to be something that derived from this abstract class GradeTracker.",
			  "displayTime": 371.051
			},
			{
			  "text": "By working with an interface I can work with an even wider variety of objects, objects whose class definition",
			  "displayTime": 378.051
			},
			{
			  "text": "doesn't even inherit from a GradeTracker or a GradeBook. The only guarantee that I need is that the object",
			  "displayTime": 384.051
			},
			{
			  "text": "that's being created and worked with here implements this interface IGradeTracker.",
			  "displayTime": 390.051
			}
		  ]
		},
		{
		  "title": "Common Interfaces",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m7&clip=6&mode=live",
		  "segments": [
			{
			  "text": "Now that we know about interfaces, I wanted to tell you that .NET is full of many useful interface definitions.",
			  "displayTime": 0.0
			},
			{
			  "text": "Because the interfaces are flexible, and because C# allows you to implement multiple interfaces on a type,",
			  "displayTime": 7.687
			},
			{
			  "text": "you'll see interfaces in use to provide many low-level and essential features.",
			  "displayTime": 12.687
			},
			{
			  "text": "For example, one interface we've already used is IDisposible. You might remember in the last module when",
			  "displayTime": 16.687
			},
			{
			  "text": "we talked about exception handling, I showed you that we can have a using statement in C# to automatically close",
			  "displayTime": 22.687
			},
			{
			  "text": "a file, even if there is an exception. The interface that the using statement looks for is IDisposible.",
			  "displayTime": 27.687
			},
			{
			  "text": "Any object that implements IDisposible is an object that needs some help cleaning up.",
			  "displayTime": 34.687
			},
			{
			  "text": "So it opens files, or database connections, or network connections, and in order to keep this system running",
			  "displayTime": 38.687
			},
			{
			  "text": "in a good state, we want to make sure these resources are properly cleaned up, that's the purpose of IDisposible.",
			  "displayTime": 43.687
			},
			{
			  "text": "IDisposible forces an object to have a dispose method that you can call directly, or indirectly through a",
			  "displayTime": 48.687
			},
			{
			  "text": "using statement, and dispose will clean up resources. Another interface is IEnumerable.",
			  "displayTime": 54.687
			},
			{
			  "text": "An object that implements this interface is an object that you can enumerate, that is you can use it as a",
			  "displayTime": 60.687
			},
			{
			  "text": "collection in a foreach statement. There's also INotifyPropertyChanged.",
			  "displayTime": 65.687
			},
			{
			  "text": "This is an interface you'll implement if you get into desktop XAML development, it requires you to raise an",
			  "displayTime": 69.687
			},
			{
			  "text": "event when a property changes its value, much like we're doing in the GradeBook when we raise a NameChangedEvent.",
			  "displayTime": 74.687
			},
			{
			  "text": "The INotifyPropertyChanged interface defines an event that a UI framework can listen to and know when to",
			  "displayTime": 80.687
			},
			{
			  "text": "update the data on the screen. And then there are lots of little interfaces, interfaces like IComparable,",
			  "displayTime": 86.687
			},
			{
			  "text": "IEquatable, these interfaces allow you to compare objects, or check to see if two objects are equal.",
			  "displayTime": 92.687
			},
			{
			  "text": "And these types of interfaces are commonly used by collections, like the sorted list collection,",
			  "displayTime": 97.687
			},
			{
			  "text": "because the sorted list can use methods defined by IComparable to compare objects and keep them in sorted order.",
			  "displayTime": 102.687
			},
			{
			  "text": "Let's take a look.",
			  "displayTime": 109.0
			},
			{
			  "text": "Inside of the WriteResults method let's say that instead of just writing the statistical results to the",
			  "displayTime": 112.0
			},
			{
			  "text": "screen, I also want the ability to write out the individual grades.",
			  "displayTime": 118.0
			},
			{
			  "text": "And ideally what I'd like to be able to do is a foreach statement.",
			  "displayTime": 120.687
			},
			{
			  "text": "So I'd like to be able to say, foreach grade that is in the book, or the tracker, I'd like to be able to",
			  "displayTime": 123.687
			},
			{
			  "text": "Console.WriteLine that grade. But currently the C# compiler is going to give me an error because it knows",
			  "displayTime": 130.687
			},
			{
			  "text": "that book is not something that I can use the foreach statement against.",
			  "displayTime": 136.687
			},
			{
			  "text": "Technically what's happening is an object that implements IGradeTracker is not guaranteed to have a public",
			  "displayTime": 140.687
			},
			{
			  "text": "method GetEnumerator. At the lowest level that's all an object needs, just a method called GetEnumerator.",
			  "displayTime": 146.687
			},
			{
			  "text": "But it's more common if you have a type that you explicitly want to make enumerable, you will say that that",
			  "displayTime": 152.687
			},
			{
			  "text": "type inherits from the IEnumerable interface. So if I swing over to IGradeTracker, I can say that an",
			  "displayTime": 156.687
			},
			{
			  "text": "IGradeTracker is something that is also IEnumerable, and IEnumerable is an interface that is defined in the",
			  "displayTime": 163.687
			},
			{
			  "text": "System.Collections namespace, so I need to have a using statement for System.Collections.",
			  "displayTime": 173.687
			},
			{
			  "text": "And now back in Program.cs, I will have no problem using a foreach statement with an IGradeTracker,",
			  "displayTime": 178.687
			},
			{
			  "text": "because anything that isn't IGradeTracker is guaranteed to have GetEnumerator.",
			  "displayTime": 186.687
			},
			{
			  "text": "But just because I have that interface listed on IGradeTracker doesn't mean I'm completely finished,",
			  "displayTime": 191.687
			},
			{
			  "text": "because now what the C# complier will tell me if I do a build, is that I don't have any implementation of IEnumerable.",
			  "displayTime": 195.687
			},
			{
			  "text": "So GradeTracker, our abstract base class, it has to implement IGradeTracker, it does not define the method GetEnumerator.",
			  "displayTime": 202.687
			},
			{
			  "text": "And where does GetEnumerator come from? Well remember when I'm implementing an interface, I have to provide",
			  "displayTime": 212.687
			},
			{
			  "text": "a definition for all of the members that that interface defines.",
			  "displayTime": 217.687
			},
			{
			  "text": "So IGradeTracker defines four members, IEnumerable, if I go to the definition for that by pressing F12,",
			  "displayTime": 220.687
			},
			{
			  "text": "it's a very simple interface that only defines one method that you have to have, it's a method called",
			  "displayTime": 227.687
			},
			{
			  "text": "GetEnumerator, and GetEnumerator has to return an object that implements another interface, an IEnumerator.",
			  "displayTime": 232.687
			},
			{
			  "text": "Something that implements that interface knows how to step through a collection one object at a time.",
			  "displayTime": 239.687
			},
			{
			  "text": "And this is an extremely powerful interface definition, because you can hide all sorts of work behind an",
			  "displayTime": 244.687
			},
			{
			  "text": "IEnumerable and an IEnumerator. So what I currently need to do is I need to guarantee the GradeTracker",
			  "displayTime": 249.687
			},
			{
			  "text": "implements this interface, so I need to have a method, a public method, that returns an IEnumerator, and it's called GetEnumerator.",
			  "displayTime": 254.687
			},
			{
			  "text": "But the problem is a GradeTracker will not know how to enumerate the grades that it holds.",
			  "displayTime": 267.687
			},
			{
			  "text": "So first, IEnumerator, that's also an interface defined in the System.Collections namespace,",
			  "displayTime": 272.687
			},
			{
			  "text": "I'm going to bring that namespace in. And the problem is now I do not how to implement this method inside of",
			  "displayTime": 277.687
			},
			{
			  "text": "an abstract class GradeTracker. So I will also mark this member as abstract.",
			  "displayTime": 283.687
			},
			{
			  "text": "I don't know how to implement GetEnumerator, because from the perspective of GradeTracker, I don't know where",
			  "displayTime": 288.687
			},
			{
			  "text": "the grades are stored, are they in memory in a list? Are they in a database? Are they behind a web service call?",
			  "displayTime": 293.687
			},
			{
			  "text": "I don't know, but I need to have this member here to satisfy the constraint that I am in IGradeTracker,",
			  "displayTime": 299.687
			},
			{
			  "text": "I'll just mark this member as abstract, so whoever derives from this class will have to provide an implementation.",
			  "displayTime": 305.687
			},
			{
			  "text": "Now before we do that, I just want to show that a GradeTracker could implement as many interfaces as it likes.",
			  "displayTime": 311.687
			},
			{
			  "text": "So it could derive from a specific base class, like object, and then I could go on and say this also",
			  "displayTime": 317.687
			},
			{
			  "text": "implements IGradeTracker, and IDisposible, and IClonable, I could list all sorts of interfaces,",
			  "displayTime": 323.687
			},
			{
			  "text": "or course, I would have to have the members that these interfaces define, but I'm just trying to show you the",
			  "displayTime": 329.687
			},
			{
			  "text": "syntax for how this would work, I can list interfaces, as many I need, and just separate them with commas.",
			  "displayTime": 334.687
			},
			{
			  "text": "So let's go back to being just IGradeTracker, and of course if I do a Build now, my problem is pushed up one class.",
			  "displayTime": 341.687
			},
			{
			  "text": "Now if go to the GradeBook, well I've said that GradeBook is a concrete type, it's not using the abstract",
			  "displayTime": 349.687
			},
			{
			  "text": "keyword here, and therefore I need to provide an implementation for GetEnumerator.",
			  "displayTime": 355.687
			},
			{
			  "text": "And fortunately, a list is something that's also IEnumerable, so all the collection classes in .NET,",
			  "displayTime": 361.687
			},
			{
			  "text": "they implement the IEnumerable interface, and so I could provide an override for GetEnumerator,",
			  "displayTime": 368.687
			},
			{
			  "text": "that simply calls into Grades, and returns Grades.GetEnumerator.",
			  "displayTime": 376.687
			},
			{
			  "text": "That's the easiest way to implement this logic, and so now, inside of Program.cs, when I say foreach across",
			  "displayTime": 382.687
			},
			{
			  "text": "an IGradeTracker, I don't know if I'll be getting those numbers back out of a list, or a database, or a web",
			  "displayTime": 388.687
			},
			{
			  "text": "service call, again that's the great advantage to using interfaces, you can build very powerful abstractions,",
			  "displayTime": 394.687
			},
			{
			  "text": "and hide all sorts of complexity behind simple polymorphism. If I run the program, I am now printing out the",
			  "displayTime": 400.687
			},
			{
			  "text": "grades, as well as the statistics, as well as the letter grade.",
			  "displayTime": 406.687
			},
			{
			  "text": "And hopefully that will demonstrate some of the flexibilities that interfaces can provide.",
			  "displayTime": 411.0
			}
		  ]
		},
		{
		  "title": "Where to Go Next",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m7&clip=7&mode=live",
		  "segments": [
			{
			  "text": "If you enjoyed this course you might enjoy a few of my other courses.",
			  "displayTime": 0.0
			},
			{
			  "text": "I do suggest you watch these to get the complete C# fundamentals experience.",
			  "displayTime": 4.0
			},
			{
			  "text": "First is my C# Generics course, at least watch a couple modules here because generics are an incredibly",
			  "displayTime": 7.5
			},
			{
			  "text": "important feature of the C# language. We just didn't have time to cover generics in this course with the",
			  "displayTime": 12.726
			},
			{
			  "text": "amount of detail they deserve, although we did use a generic type when we declared a list to store our grades.",
			  "displayTime": 17.726
			},
			{
			  "text": "Another important set of features in the C# language are the LINQ features, where LINQ stands for Language Integrated Query.",
			  "displayTime": 23.726
			},
			{
			  "text": "It sounds like something data related, but in truth, LINQ added a number of wonderful features to the C#",
			  "displayTime": 29.726
			},
			{
			  "text": "language, features like extension methods and lambda expressions, and you don't have the full C# experience",
			  "displayTime": 34.726
			},
			{
			  "text": "until you see these features. And finally there is my C# Fundamentals Part 2 course, which is C# programming",
			  "displayTime": 39.726
			},
			{
			  "text": "paradigms, this course includes some additional material on not just object-oriented programming,",
			  "displayTime": 45.726
			},
			{
			  "text": "but also functional programming, and what I call language-oriented programming with C#.",
			  "displayTime": 50.726
			},
			{
			  "text": "I also offer some tips, tricks, and rules to live by as a C# developer.",
			  "displayTime": 55.726
			}
		  ]
		},
		{
		  "title": "Summary",
		  "playerUrl": "//app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m7&clip=8&mode=live",
		  "segments": [
			{
			  "text": "In this module we looked at object-oriented programming in C#, we talked about encapsulation, inheritance,",
			  "displayTime": 0.0
			},
			{
			  "text": "and polymorphism, and I showed you how to use abstract classes and interfaces.",
			  "displayTime": 7.0
			},
			{
			  "text": "If all this feels a bit overwhelming, and you're not sure when to use an interface and when to use an",
			  "displayTime": 12.0
			},
			{
			  "text": "abstract class, and when to use an inheritance, I'd say that's normal.",
			  "displayTime": 16.0
			},
			{
			  "text": "I believe object-oriented programming takes years to master. I started my first object-oriented language in",
			  "displayTime": 20.0
			},
			{
			  "text": "1992 with C++, and with every year that goes by I think I know object-oriented programming just a little bit better.",
			  "displayTime": 24.5
			},
			{
			  "text": "And that's it for C# Fundamentals Part 1. I hope you enjoyed the course, and continue on with the C# language.",
			  "displayTime": 31.0
			}
		  ]
		}
	  ]
	}
  ]
};


