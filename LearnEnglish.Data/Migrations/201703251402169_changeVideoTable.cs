namespace LearnEnglish.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeVideoTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Videos", "Name", c => c.String());
            DropColumn("dbo.Videos", "Thumbnail");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Videos", "Thumbnail", c => c.String(nullable: false));
            DropColumn("dbo.Videos", "Name");
        }
    }
}
