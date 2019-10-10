using System;
using System.ComponentModel.DataAnnotations;

namespace SkillsApi {
    public class Skill {
        public int id { get; set; }

        [RequiredAttribute]
        public int topicId { get; set; }

        [RequiredAttribute]
        public string title { get; set; }
        public int hours { get; set; }
        public bool completed { get; set; }

        public DateTime duedate { get; set; }

        public int sortOrder { get; set; }
    }
}