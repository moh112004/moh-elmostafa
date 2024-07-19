import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../About.css";
import MarkdownRenderer from "../MarkdownRenderer";

const markdownContent = `
# Mohammed Elmostafa
**Frontend Developer**

## Summary
Hello, I'm Mohammed Elmostafa, a frontend developer specializing in performance optimization, user experience, and interactive design. Although my professional experience is less than a year, I have successfully completed many projects.

## Education
### Self-Learning
I continuously expand my knowledge through self-learning and staying updated with the latest industry trends.

## Professional Experience
### CEO and Co-Founder, ELTECH Company
I lead the tech company, overseeing strategic and technical initiatives.

### Freelance Frontend Developer
I worked on developing a number of successful projects that were approved for clients.

### Technical Sponsor
I have provided technical sponsorship for several events, including:
- Takaful Forum
- VMC5 Program
- YDC23
- TEDxMST

## Skills
- **Core Skills:** HTML, CSS, JavaScript, Bootstrap, React.js
- **Additional Skills:** Performance optimization, User Experience (UX), Interactive design, Research and analysis, Problem-solving, Individual and team work, Flexibility and quick learning
- **Tools:** Git, GitHub, Command Line (CMD)

## Activities
### IEEExtreme Competition
I participated in the 16th and 17th editions of the IEEExtreme competition.

## Interests
I am passionate about improving website performance and user experience. I enjoy designing interactive and attractive interfaces and constantly work on enhancing my skills and staying informed about the latest web development trends.

## Projects
You can check out some of my previous work in the [projects](#portfolio) section.

## Contact
If you would like to discuss a project or job opportunity, you can reach me through the [contact](#contact) section. I am always open to inquiries and collaboration on new projects.
`;
const markdownContentAr = `
# محمد المصطفى
**مطور واجهات أمامية**

## نبذة
مرحباً، أنا محمد المصطفى، مطور واجهات أمامية متخصص في تحسين الأداء وتجربة المستخدم والتصميم التفاعلي. رغم أن تجربتي المهنية لا تتجاوز السنة، فقد أنجزت العديد من المشاريع بنجاح.

## التعليم
### التعلم الذاتي
أحرص على توسيع معرفتي باستمرار من خلال التعلم الذاتي ومتابعة آخر مستجدات الصناعة.

## الخبرة المهنية
### المدير التنفيذي والشريك المؤسس، شركة إلتك
أشرف على قيادة الشركة التقنية وتوجيه المبادرات الاستراتيجية والتقنية.

### مطور واجهات أمامية فريلانسر
عملت على تطوير عدد من المشاريع الناجحة و التي تم إعتمادها للعملاء.

### الراعي التقني
قدمت الدعم التقني للعديد من الفعاليات، بما في ذلك:
- ملتقى تكافل
- برنامج VMC5
- YDC23
- TEDxMST

## المهارات
- **المهارات الأساسية:** HTML، CSS، JavaScript، Bootstrap، React.js
- **المهارات الإضافية:** تحسين الأداء، تجربة المستخدم (UX)، التصميم التفاعلي، البحث والتحليل، حل المشكلات، العمل الفردي والجماعي، المرونة والتعلم السريع
- **الأدوات:** Git، GitHub، سطر الأوامر (CMD)

## الأنشطة
### مسابقة IEEExtreme
شاركت في النسختين 16 و17 من مسابقة IEEExtreme.

## الاهتمامات
أهتم بتحسين أداء المواقع وتجربة المستخدم، وأستمتع بتصميم واجهات تفاعلية وجذابة. أعمل باستمرار على تطوير مهاراتي ومتابعة أحدث اتجاهات تطوير الويب.

## المشاريع
لدي بعض الأعمال السابقة التي يمكنك الاطلاع عليها في قسم [الأعمال](#portfolio).

## التواصل
إذا كنت ترغب في مناقشة مشروع أو فرصة عمل، يمكنك التواصل معي عبر قسم [التواصل](#contact). أنا دائماً مستعد للاستفسارات والتعاون في مشاريع جديدة.


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
