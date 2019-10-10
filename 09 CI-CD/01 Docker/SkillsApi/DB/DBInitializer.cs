using System;
using System.Linq;

namespace SkillsApi
{
    public static class DBInitializer
    {
        public static void Initialize(SkillDBContext context)
        {
            context.Database.EnsureCreated();

            if (context.Topics.FirstOrDefault() == null)
            {
                var t1 = new Topic { title = "Theming" };
                var t2 = new Topic { title = "RxJS" };

                context.Topics.AddRange(t1, t2);

                var sk1 = new Skill { title = "Custom Theme", completed = true, hours = 4, duedate = DateTime.Now.AddMonths(-1), topicId = t1.id };
                var sk2 = new Skill { title = "Theme Mixins", completed = false, hours = 3, duedate = DateTime.Now.AddMonths(-2), topicId = t1.id };
                var sk3 = new Skill { title = "Light & Dark Theme", completed = false, hours = 2, duedate = DateTime.Now.AddMonths(2), topicId = t1.id };
                var sk4 = new Skill { title = "RxJS Operators", completed = true, hours = 5, duedate = DateTime.Now.AddDays(2), topicId = t2.id };
                var sk5 = new Skill { title = "Custom Operators", completed = false, hours = 1, duedate = DateTime.Now.AddYears(1), topicId = t2.id };

                context.Skills.AddRange(sk1, sk2, sk3, sk4, sk5);

                var d1 = new Demo { topicId = 1, title = "Last Demo", url = "last", component = "last" };
                context.Demos.Add(d1);

                context.SaveChanges();
            }
        }
    }
}