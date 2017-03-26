namespace LearnEnglish.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addVideos : DbMigration
    {
        public override void Up()
        {
            Sql("SET IDENTITY_INSERT [dbo].[Videos] ON");
            Sql("INSERT INTO [dbo].[Videos] ([Id], [Title], [Url], [Language], [Level], [Name], [TotalTime]) VALUES (60, N'01_03-.NET.mp4', N'Videos/01_03-.NET.mp4', N'en', 0, N'C# Fundamentals with Visual Studio 2015 ---> An Introduction to C# and .NET', N'0:00:59')");
            Sql("INSERT INTO [dbo].[Videos] ([Id], [Title], [Url], [Language], [Level], [Name], [TotalTime]) VALUES (61, N'01_04-The Common Language Runtime.mp4', N'Videos/01_04-The Common Language Runtime.mp4', N'en', 0, N'C# Fundamentals with Visual Studio 2015 ---> An Introduction to C# and .NET', N'0:02:00')");
            Sql("INSERT INTO [dbo].[Videos] ([Id], [Title], [Url], [Language], [Level], [Name], [TotalTime]) VALUES (62, N'01_05-The Framework.mp4', N'Videos/01_05-The Framework.mp4', N'en', 0, N'C# Fundamentals with Visual Studio 2015 ---> An Introduction to C# and .NET', N'0:01:25')");


        }

        public override void Down()
        {
        }
    }
}
