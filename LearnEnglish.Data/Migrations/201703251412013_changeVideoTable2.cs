namespace LearnEnglish.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeVideoTable2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Videos", "TotalTime", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Videos", "TotalTime");
        }
    }
}
