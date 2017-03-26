using LearnEnglish.Business.Builders.Interfaces;
using LearnEnglish.Business.Models;
using LearnEnglish.Data.Entities;

namespace LearnEnglish.Business.Builders
{
    public class VideoModelBuilder : IVideoModelBuilder
    {
        public VideoModel Build(Video video)
        {
            return new VideoModel
            {
                Id = video.Id,
                Language = video.Language,
                Level = video.Level,
                Name = video.Name,
                Url = video.Url,
                Title = video.Title,
                TotalTime = video.TotalTime
                //ListeningModulePassed = j == null ? false : j.WritingModulePassed,
                //WritingModulePassed = j == null ? false : j.WritingModulePassed
            };
        }
       
    }
}