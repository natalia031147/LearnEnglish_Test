namespace LearnEnglish.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addVideo2 : DbMigration
    {
        public override void Up()
        {
            Sql("SET IDENTITY_INSERT [dbo].[Videos] ON");
            Sql("INSERT INTO [dbo].[Videos] ([Id], [Title], [Url], [Language], [Level], [Name], [TotalTime]) VALUES (63, N'01_06-The C Language.mp4', N'Videos/01_06-The C Language.mp4', N'en', 0, N'C# Fundamentals with Visual Studio 2015 ---> An Introduction to C# and .NET', N'0:01:44')");
            Sql("INSERT INTO [dbo].[Videos] ([Id], [Title], [Url], [Language], [Level], [Name], [TotalTime]) VALUES (64, N'01_07-Hello, World.mp4', N'Videos/01_07-Hello, World.mp4', N'en', 0, N'C# Fundamentals with Visual Studio 2015 ---> An Introduction to C# and .NET', N'0:07:04')");
            Sql("INSERT INTO [dbo].[Videos] ([Id], [Title], [Url], [Language], [Level], [Name], [TotalTime]) VALUES (65, N'01_08-The Compiler.mp4', N'Videos/01_08-The Compiler.mp4', N'en', 0, N'C# Fundamentals with Visual Studio 2015 ---> An Introduction to C# and .NET', N'0:01:47')");
            Sql("INSERT INTO [dbo].[Videos] ([Id], [Title], [Url], [Language], [Level], [Name], [TotalTime]) VALUES (66, N'01_09-Visual Studio.mp4', N'Videos/01_09-Visual Studio.mp4', N'en', 0, N'C# Fundamentals with Visual Studio 2015 ---> An Introduction to C# and .NET', N'0:10:21')");
            Sql("INSERT INTO [dbo].[Videos] ([Id], [Title], [Url], [Language], [Level], [Name], [TotalTime]) VALUES (67, N'01_10-Debugging.mp4', N'Videos/01_10-Debugging.mp4', N'en', 0, N'C# Fundamentals with Visual Studio 2015 ---> An Introduction to C# and .NET', N'0:07:53')");
            Sql("INSERT INTO [dbo].[Videos] ([Id], [Title], [Url], [Language], [Level], [Name], [TotalTime]) VALUES (68, N'01_11-Are You Sleepy.mp4', N'Videos/01_11-Are You Sleepy.mp4', N'en', 0, N'C# Fundamentals with Visual Studio 2015 ---> An Introduction to C# and .NET', N'0:07:03')");
            Sql("INSERT INTO [dbo].[Videos] ([Id], [Title], [Url], [Language], [Level], [Name], [TotalTime]) VALUES (69, N'01_12-Summary.mp4', N'Videos/01_12-Summary.mp4', N'en', 0, N'C# Fundamentals with Visual Studio 2015 ---> An Introduction to C# and .NET', N'0:00:38')");

        }
        public override void Down()
        {
        }
    }
}
