import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../About.css";
import MarkdownRenderer from "../MarkdownRenderer";

const markdownContent = `
# Mohammed Elmostafa  
**Front-End Developer**

## Summary
Hello, I'm Mohammed Elmostafa, a Front-End Developer specializing in performance optimization, user experience, and interactive design. Despite my short experience of less than a year, I have successfully completed several freelance projects and held leadership roles.

## Education
**Self-Learning**  
Continuously expanding my knowledge through self-learning and staying updated with the latest industry trends.

## Professional Experience
**CEO and Co-Founder, Eltech**  
Leading a tech startup, overseeing technical and strategic initiatives.

**Freelance Front-End Developer**  
Developed several successful projects for clients, demonstrating expertise in creating performant and user-friendly web applications.

**Technical Sponsor**  
Provided technical sponsorship for several events, including:
- Takaful Forum
- VMC5 Program
- YDC23
- TEDxMST

## Skills
- **Core Skills:** HTML, CSS, JavaScript, Bootstrap, React.js
- **Additional Skills:** Performance optimization, User Experience (UX), Interactive design, Research and analysis, Problem-solving, Individual and team work, Flexibility and fast learning
- **Tools:** Git, GitHub, Command Line (CMD)

## Competitions
**IEEE Xtreme Competition**  
Participated in IEEE Xtreme 16 and 17, showcasing problem-solving skills and coding proficiency in a competitive environment.

## Interests
I am passionate about improving website performance and user experience. I enjoy designing interactive and appealing interfaces and constantly strive to enhance my skills and stay updated with the latest trends in web development.

## Projects
I have some previous work you can see in the portfolio section.

## Contact
If you would like to get in touch to discuss a project or a job opportunity, you can reach me through the [Contact](#contact) section. I am always happy to receive inquiries and collaborate on new projects.
`;
const markdownContentAr = `
# محمد المصطفى
**مطور واجهات أمامية**

## ملخص
مرحباً، أنا محمد المصطفى، مطور واجهات أمامية متخصص في تحسين الأداء وتجربة المستخدم والتصميم التفاعلي. رغم أن تجربتي القصيرة أقل من سنة، فقد أتممت بنجاح العديد من المشاريع الحرة وتوليت أدواراً قيادية.

## التعليم
**التعلم الذاتي**  
أعمل على توسيع معرفتي باستمرار من خلال التعلم الذاتي والبقاء محدثاً بآخر اتجاهات الصناعة.

## الخبرة المهنية
**المدير التنفيذي والشريك المؤسس، شركة إلتك**  
قيادة شركة تقنية، والإشراف على المبادرات التقنية والاستراتيجية.

**مطور واجهات أمامية حر**  
طورت عدة مشاريع ناجحة للعملاء، مما يدل على خبرتي في إنشاء تطبيقات ويب ذات أداء عالي وتجربة مستخدم ممتازة.

**الراعي التقني**  
قدمت رعاية تقنية للعديد من الفعاليات، بما في ذلك:
- منتدى التكافل
- برنامج VMC5
- YDC23
- TEDxMST

## المهارات
- **المهارات الأساسية:** HTML، CSS، JavaScript، Bootstrap، React.js
- **المهارات الإضافية:** تحسين الأداء، تجربة المستخدم (UX)، التصميم التفاعلي، البحث والتحليل، حل المشكلات، العمل الفردي والجماعي، المرونة والتعلم السريع
- **الأدوات:** Git، GitHub، سطر الأوامر (CMD)

## المسابقات
**مسابقة IEEE Xtreme**  
شاركت في مسابقة IEEE Xtreme 16 و17، مما يظهر مهاراتي في حل المشكلات والبرمجة في بيئة تنافسية.

## الاهتمامات
أنا شغوف بتحسين أداء المواقع وتجربة المستخدم. أستمتع بتصميم واجهات تفاعلية وجذابة وأعمل باستمرار على تحسين مهاراتي والبقاء على اطلاع بآخر اتجاهات تطوير الويب.

## المشاريع
لدي بعض الأعمال السابقة التي يمكنك الاطلاع عليها في قسم المحفظة.

## التواصل
إذا كنت ترغب في التواصل لمناقشة مشروع أو فرصة عمل، يمكنك الوصول إليّ عبر قسم التواصل. أنا دائماً سعيد بتلقي الاستفسارات والتعاون في مشاريع جديدة.

`;
export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <section className="about">
        <span className="aboutAr"><MarkdownRenderer content={markdownContentAr}/></span>
        <span className="aboutEn"><MarkdownRenderer content={markdownContent}/></span>
      </section>
<br/>
<br/>
      <a
        href="https://drive.google.com/uc?export=download&id=1dBfAG-n1ndqYvdUSo_vgk_xC8_XTq-8y"
        style={{
          textDecoration: "none",
          color: "#eee",
          fontWeight: "500",
          borderBottom: "#eee solid 2px",
        }}
      >
        {t('downloadresume')}
      </a> 
    </>
  );
}
