﻿using Autofac;
using LearnEnglish.Business.Builders;
using LearnEnglish.Business.Logic;
using LearnEnglish.Data.Framework;

namespace LearnEnglish.Business.Framework
{
    public static class AutofacConfig
    {
        public static void Configure(ContainerBuilder builder)
        {
            builder.RegisterType<ApplicationDbContext>().AsSelf().InstancePerRequest();
            builder.RegisterType<VideoLogic>().AsImplementedInterfaces().InstancePerRequest();
            builder.RegisterType<VideoPhraseLogic>().AsImplementedInterfaces().InstancePerRequest();
            builder.RegisterType<LevelLogic>().AsImplementedInterfaces().InstancePerRequest();
            builder.RegisterType<VideoModelBuilder>().AsImplementedInterfaces().InstancePerRequest();
            builder.RegisterType<VideoPhraseModelBuilder>().AsImplementedInterfaces().InstancePerRequest();
            
            
        }
    }
}