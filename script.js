// ---------- Language Toggle ----------
const translations = {
  th: {
    pageTitle: 'Portfolio | วรเทพจักษ์ สุระขัน',
    navCaption: 'PERSONAL PROFILE',
    navAboutGroup: 'เกี่ยวกับผม',
    navWorkGroup: 'ผลงาน',
    navExperienceGroup: 'ประสบการณ์',
    navAbout: 'ประวัติส่วนตัว',
    navEducation: 'ประวัติการศึกษา',
    navResume: 'Resume',
    navResearch: 'ผลงานวิจัย',
    navWebsites: 'ผลงานเว็บไซต์',
    navAirConditioning: 'ผลงานติดตั้งแอร์',
    navComputerRepair: 'ซ่อมคอมและ Printer',
    navExperience: 'ประสบการณ์ทำงาน',
    navCertificates: 'เกียรติบัตร',
    navContact: 'ติดต่อเรา',
    heroEyebrow: 'PORTFOLIO · 2025',
    heroGreeting: 'สวัสดีครับ ผม',
    personName: 'วรเทพจักษ์ สุระขัน',
    heroRole: 'COMPUTER ENGINEERING',
    heroDescription: 'ผู้มีความสนใจด้านเทคโนโลยี งานระบบ และการแก้ปัญหาอย่างเป็นระบบ พร้อมนำความรู้มาสร้างประโยชน์ให้กับองค์กร',
    heroPrimaryAction: 'ทำความรู้จักกัน',
    heroContactAction: 'ติดต่อผม',
    heroLocation: 'อุตรดิตถ์, ประเทศไทย',
    heroAvailability: 'พร้อมเรียนรู้และเติบโต',
    scrollHint: 'เลื่อนเพื่อดูเพิ่มเติม',
    profileAlt: 'วรเทพจักษ์ สุระขัน',
    applicationPhotoAlt: 'รูปสมัครงานของวรเทพจักษ์ สุระขัน',
    aboutTitle: 'ประวัติส่วนตัว',
    aboutDescription: 'ผู้มีความรับผิดชอบสูงและทำงานอย่างเป็นระบบ มีทักษะด้านไอทีและวิศวกรรม สามารถดูแลและซ่อมบำรุงอุปกรณ์ เช่น คอมพิวเตอร์, ปริ้นเตอร์, โน้ตบุ๊ก, UPS รวมถึงระบบปฏิบัติการและเครือข่ายพื้นฐาน เชี่ยวชาญในการนำเทคโนโลยีมาปรับใช้เพื่อเพิ่มประสิทธิภาพงาน ทำงานเป็นทีมได้ดี ลำดับงานเป็น และพร้อมเติบโตไปกับองค์กร ปัจจุบันอาศัยที่จังหวัดอุตรดิตถ์',
    educationTitle: 'ประวัติการศึกษา',
    education1: 'ปริญญาตรี วิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยราชภัฏอุตรดิตถ์ (2567)',
    education2: 'ปวส. เทคนิคคอมพิวเตอร์ วิทยาลัยเทคนิคอุตดิตถ์ (2559)',
    education3: 'ปวช. การบัญชี วิทยาลัยอาชีวศึกษาอุตรดิตถ์ (2557)',
    resumeTitle: 'Resume',
    resumeDownload: 'ดาวน์โหลด Resume PDF',
    resumePrint: 'พิมพ์ / บันทึกเป็น PDF',
    resumeAlt: 'เรซูเม่ของวรเทพจักษ์ สุระขัน',
    resumeProfileAlt: 'รูปโปรไฟล์ของวรเทพจักษ์ สุระขัน',
    resumeName: 'วรเทพจักษ์ สุระขัน',
    resumeRole: 'IT SUPPORT · วิศวกรรมคอมพิวเตอร์',
    resumeContactTitle: 'CONTACT',
    resumePortfolioTitle: 'เว็บไซต์ Portfolio',
    resumePortfolioAlt: 'QR Code เว็บไซต์ Portfolio',
    resumePortfolioUrl: 'giemystick.github.io',
    resumeSkillsTitle: 'ทักษะ',
    resumeSkill1: 'IT Support และการแก้ไขปัญหา',
    resumeSkill2: 'การพัฒนาเว็บไซต์ Full-stack',
    resumeSkill3: 'WordPress และ Web Hosting',
    resumeSkill4: 'การดูแล Server, Network และ System',
    resumeSkill5: 'ติดตั้งและ Service เครื่องปรับอากาศ',
    resumeEducationTitle: 'การศึกษา',
    resumeEducationDegree: 'ปริญญาตรี วิศวกรรมคอมพิวเตอร์',
    resumeEducationUniversity: 'มหาวิทยาลัยราชภัฏอุตรดิตถ์',
    resumeEducationVocational: 'ประกาศนียบัตรวิชาชีพชั้นสูง',
    resumeEducationCollege: 'วิทยาลัยเทคนิคอุตรดิตถ์',
    resumeFocusTitle: 'จุดเด่นในการทำงาน',
    resumeFocus1: 'ให้การสนับสนุนด้านเทคนิคอย่างเป็นระบบ',
    resumeFocus2: 'วิเคราะห์และแก้ไขปัญหาอย่างมีขั้นตอน',
    resumeFocus3: 'พร้อมเรียนรู้และพัฒนาอย่างต่อเนื่อง',
    resumeLanguagesTitle: 'ทักษะทางภาษา',
    resumeLanguageHeader: 'ภาษา',
    resumeSpeakHeader: 'พูด',
    resumeListenHeader: 'ฟัง',
    resumeReadHeader: 'อ่าน',
    resumeWriteHeader: 'เขียน',
    resumeThai: 'ไทย',
    resumeThaiLevel: 'ดีมาก',
    resumeEnglish: 'อังกฤษ',
    resumeEnglishLevel: 'พอใช้',
    resumeEyebrow: 'โปรไฟล์การทำงาน',
    resumeHeadline: 'IT SUPPORT · วิศวกรรมคอมพิวเตอร์',
    resumeSummary: 'ผู้ปฏิบัติงานด้าน IT ที่มีความรับผิดชอบและทำงานอย่างเป็นระบบ มีประสบการณ์ด้าน Technical Support, การพัฒนาเว็บไซต์ การดูแล Server และระบบธุรกิจ มุ่งเน้นการแก้ปัญหาอย่างมีประสิทธิภาพและสร้างประโยชน์ที่ใช้งานได้จริงให้กับองค์กร',
    resumeExperienceTitle: 'ประสบการณ์ทำงาน',
    resumeJob1Title: 'IT Support',
    resumeJob1Company: 'บริษัท กีร่า ฮอสพิทัลลิตี้ จำกัด',
    resumeJob1Period: '2025 – ปัจจุบัน',
    resumeJob1Point1: 'ดูแลระบบ CM Manager, PMS, BE, Aiosell, Exely และ eZee รวมถึงประสานการเชื่อมต่อกับที่พักภายใต้การดูแลของบริษัท',
    resumeJob1Point2: 'ดูแลและสนับสนุนระบบ Odoo, Zoho, PMSuite และระบบภายใน พร้อมร่วมวางแผน Product กับผู้บริหาร',
    resumeJob1Point3: 'ดูแลเว็บไซต์ WordPress และ Hostinger มากกว่า 20 เว็บไซต์ รวมถึงพัฒนาเว็บไซต์ Full-stack ด้วย Next.js, Node.js, PHP, MySQL, React และ Tailwind CSS',
    resumeJob1Point4: 'ให้การสนับสนุน แก้ไขปัญหา และบำรุงรักษาคอมพิวเตอร์ อุปกรณ์ และระบบ IT ภายในองค์กร',
    resumeJob2Title: 'นักวิชาการพลังงาน',
    resumeJob2Company: 'มหาวิทยาลัยราชภัฏอุตรดิตถ์',
    resumeJob2Point1: 'รวบรวม จัดทำ และส่งรายงานข้อมูลการใช้พลังงานของมหาวิทยาลัยตามข้อกำหนดของกระทรวงพลังงาน (กรมพัฒนาพลังงานทดแทนและอนุรักษ์พลังงาน: พพ.) ครอบคลุมปริมาณการใช้ไฟฟ้า น้ำมันเชื้อเพลิง และค่าใช้จ่ายด้านพลังงานในช่วงเวลาที่กำหนด',
    resumeJob2Point2: 'พัฒนา Dashboard แสดงข้อมูลการชาร์จพลังงานของสถานีชาร์จรถบัสมหาวิทยาลัย โดยใช้ Digital Meter INT1422 สื่อสารผ่าน RS485 และ USR-IOT ส่งข้อมูลด้วย Node-RED ไปยัง MariaDB และ phpMyAdmin บน Raspberry Pi CM4 พร้อมพัฒนาโปรแกรมด้วย PHP เพื่อรายงานการใช้พลังงานรายวัน แจ้งเตือนผ่าน Telegram และสรุปค่าใช้จ่ายของสถานีชาร์จ',
    resumeJob2Point3: 'พัฒนา Dashboard แสดงข้อมูลการผลิตไฟฟ้าจากระบบโซลาร์เซลล์แบบติดตั้งบนหลังคาขนาด 500 kW โดยใช้ Digital Meter INT-1422 สื่อสารผ่าน RS485 และ USR-IOT ส่งข้อมูลด้วย Node-RED ไปยัง MariaDB และ phpMyAdmin บน Raspberry Pi CM4 พร้อมใช้ Node.js แสดงผลการผลิตไฟฟ้าแบบ Real-time ในรูปแบบกราฟเส้นและรายงานปริมาณการผลิตรายวัน',
    resumeJob3Title: 'ผู้ช่วยเจ้าหน้าที่ฝ่ายสารสนเทศ',
    resumeJob3Company: 'บริษัท ศักดิ์สยามลิสซิ่ง จำกัด (มหาชน) · สำนักงานใหญ่',
    resumeJob3Point1: 'ซ่อมบำรุงและตรวจสอบอุปกรณ์อิเล็กทรอนิกส์ให้พร้อมใช้งาน เช่น Printer, UPS, Laptop, Smartphone และ Computer PC',
    resumeJob3Point2: 'ช่วยเหลือและแก้ไขปัญหาแบบรีโมทระยะไกลให้กับสาขาและหน่วยงานต่าง ๆ เพื่อให้ปฏิบัติงานได้อย่างราบรื่น ทั้งด้านโปรแกรมคอมพิวเตอร์ การแชร์ Printer และการติดตั้ง Driver',
    resumeJob3Point3: 'จัดการอุปกรณ์อิเล็กทรอนิกส์ที่ไม่สามารถใช้งานได้ คัดแยกและจัดเก็บอะไหล่เพื่อนำกลับมาใช้กับงานที่เหมาะสม',
    resumeJob4Title: 'ธุรการฝ่ายกำลังพล',
    resumeJob4Company: 'ม.2 กรมทหารม้าที่ 2 · ทหารกองประจำการ',
    resumeJob4Point1: 'จัดทำเอกสารราชการและดำเนินงานตามระเบียบงานประจำวัน',
    resumeProjectsTitle: 'ผลงานและความสามารถที่เกี่ยวข้อง',
    resumeProject1: 'พัฒนาเว็บไซต์ Full-stack ด้วย Next.js, Node.js, PHP, MySQL และจัดการโค้ดผ่าน GitHub',
    resumeProject2: 'พัฒนา Frontend ด้วย React, CSS และ Tailwind CSS พร้อม Backend ด้วย Node.js และ MySQL',
    resumeProject3Title: 'งานเครื่องปรับอากาศ',
    resumeProject3: 'ติดตั้งและ Service แอร์ ความรู้ระบบทำความเย็น และการทำ Vacuum ระบบ',
    researchTitle: 'ผลงานวิจัย',
    researchPosterTitle: 'ระบบติดตามคุณภาพน้ำในบ่อบำบัดน้ำเสียมหาวิทยาลัยราชภัฏอุตรดิตถ์',
    researchPosterAlt: 'โปสเตอร์ผลงานวิจัยระบบติดตามคุณภาพน้ำในบ่อบำบัดน้ำเสีย',
    websitesTitle: 'ผลงานเว็บไซต์',
    websitesIntroduction: 'รวมผลงานเว็บไซต์ที่พัฒนาและดูแล โดยนำเสนอแต่ละโปรเจกต์ในรูปแบบหน้าต่างเบราว์เซอร์',
    website1Title: 'relaxsha.com',
    website1Description: 'เว็บไซต์รีสอร์ตและบริการที่พัก พร้อมการนำเสนอข้อมูลที่ใช้งานง่าย',
    website2Title: 'keera.co.th',
    website2Description: 'เว็บไซต์ธุรกิจที่พัฒนาแบบ Full-stack พร้อมระบบจัดการเนื้อหาและข้อมูล',
    website3Title: 'pailinhillpatong.com',
    website3Description: 'เว็บไซต์แนะนำที่พักและประสบการณ์การเข้าพักในป่าตอง',
    website4Title: 'hrresortbuengkhonglong.com',
    website4Description: 'เว็บไซต์รีสอร์ตสำหรับนำเสนอห้องพัก สิ่งอำนวยความสะดวก และการติดต่อ',
    website5Title: 'tierra-en-sierra.com',
    website5Description: 'เว็บไซต์ที่พักบรรยากาศเป็นธรรมชาติ พร้อมภาพลักษณ์ที่อบอุ่นและเป็นมืออาชีพ',
    website6Title: 'mairoodresort.com',
    website6Description: 'เว็บไซต์รีสอร์ตสำหรับสื่อสารจุดเด่นของสถานที่พักและบริการ',
    website7Title: 'jamjanresort.com',
    website7Description: 'เว็บไซต์รีสอร์ตที่ออกแบบเพื่อสร้างความน่าสนใจและความมั่นใจก่อนเข้าพัก',
    websiteVisit: 'เปิดเว็บไซต์',
    airTitle: 'ผลงานการติดตั้งแอร์',
    airIntroduction: 'มีประสบการณ์ด้านการติดตั้งและบำรุงรักษาเครื่องปรับอากาศ พร้อมความเข้าใจพื้นฐานของระบบทำความเย็น การตรวจสอบหน้างาน และการทำ Vacuum เพื่อเตรียมระบบให้พร้อมก่อนใช้งาน',
    airServiceTitle: 'ติดตั้งและ Service เครื่องปรับอากาศ',
    airServiceDescription: 'ติดตั้งเครื่องปรับอากาศ เดินระบบ ตรวจเช็ก ล้างทำความสะอาด และบำรุงรักษาอย่างเป็นระบบ',
    airRefrigerationTitle: 'ความรู้ระบบทำความเย็น',
    airRefrigerationDescription: 'เข้าใจหลักการทำงานของวงจรสารทำความเย็น อุปกรณ์หลัก การถ่ายเทความร้อน และการตรวจสอบอาการเบื้องต้น',
    airVacuumTitle: 'Vacuum ระบบ',
    airVacuumDescription: 'ทำ Vacuum เพื่อขจัดอากาศและความชื้นออกจากระบบก่อนเปิดใช้งาน ช่วยสนับสนุนประสิทธิภาพและความเสถียรของระบบ',
    airPhotoAlt1: 'ผลงานการติดตั้งเครื่องปรับอากาศภาพที่ 1',
    airPhotoAlt2: 'ผลงานการเตรียมพื้นที่และอุปกรณ์ติดตั้งแอร์ภาพที่ 2',
    airPhotoAlt3: 'ผลงานการเดินท่อและจัดวางระบบแอร์ภาพที่ 3',
    airPhotoAlt4: 'ผลงานการติดตั้งชุดภายในอาคารภาพที่ 4',
    airPhotoAlt5: 'ผลงาน Service และบำรุงรักษาเครื่องปรับอากาศภาพที่ 5',
    airPhotoAlt6: 'ผลงานการตรวจสอบระบบทำความเย็นภาพที่ 6',
    airPhotoCaption1: 'การติดตั้งเครื่องปรับอากาศ',
    airPhotoCaption2: 'การเตรียมพื้นที่และอุปกรณ์',
    airPhotoCaption3: 'การเดินท่อและจัดวางระบบ',
    airPhotoCaption4: 'การติดตั้งชุดภายในอาคาร',
    airPhotoCaption5: 'งาน Service และบำรุงรักษา',
    airPhotoCaption6: 'การตรวจสอบระบบทำความเย็น',
    computerTitle: 'ประสบการณ์ซ่อมคอมพิวเตอร์และ Printer',
    computerIntroduction: 'มีประสบการณ์ด้านการติดตั้งระบบปฏิบัติการ การวิเคราะห์และแก้ไขปัญหาคอมพิวเตอร์และ Printer รวมถึงการประกอบคอมพิวเตอร์ให้เหมาะกับลักษณะงาน โดยเน้นความพร้อมใช้งาน ความเสถียร และการดูแลหลังการซ่อม',
    computerOsTitle: 'ติดตั้งระบบปฏิบัติการ',
    computerOsDescription: 'ติดตั้งและตั้งค่าระบบ Windows, Linux และ Ubuntu พร้อม Driver โปรแกรมพื้นฐาน และการปรับแต่งระบบให้พร้อมใช้งาน',
    computerPrinterTitle: 'ซ่อมและดูแล Printer',
    computerPrinterDescription: 'ตรวจวิเคราะห์อาการเสียของ Printer ทั้งระบบกลไก ระบบไฟฟ้า คุณภาพการพิมพ์ กระดาษติด และการเชื่อมต่อกับคอมพิวเตอร์',
    computerBuildTitle: 'ประกอบคอมพิวเตอร์',
    computerBuildDescription: 'เลือกสเปก ประกอบเครื่อง ติดตั้ง BIOS และทดสอบประสิทธิภาพ โดยคำนึงถึงงบประมาณและลักษณะการใช้งาน',
    computerPhotoAlt: 'ผลงานซ่อมคอมพิวเตอร์และ Printer',
    experienceTitle: 'ประสบการณ์ทำงาน',
    currentPeriod: '2025 – ปัจจุบัน',
    currentRole: 'CURRENT ROLE',
    currentCompany: 'บริษัท กีร่า ฮอสพิทัลลิตี้ จำกัด <span>(Keera Hospitality)</span>',
    currentPoint1: 'ดูแลและบริหารระบบ CM Manager, PMS และ BE รวมถึงระบบจัดการโรงแรม Aiosell, Exely และ eZee พร้อมประสานการเชื่อมต่อกับที่พักภายใต้การดูแลของบริษัท',
    currentPoint2: 'ดูแลและสนับสนุนระบบ ERP ได้แก่ Odoo, Zoho และ PMSuite รวมถึงมีส่วนร่วมในการพัฒนาระบบภายในของบริษัท',
    currentPoint3: 'ดูแลเว็บไซต์บน WordPress และออกแบบพร้อมบริหารจัดการเซิร์ฟเวอร์บน Hostinger สำหรับเว็บไซต์ของบริษัทมากกว่า 20 เว็บไซต์',
    currentPoint4: 'พัฒนาเว็บไซต์ <strong>keera.co.th</strong> แบบ Full Stack ด้วย Next.js และ Node.js บน Frontend พร้อมพัฒนาระบบ Backend ด้วย Node.js, PHP และ MySQL จัดการเวอร์ชันโค้ดผ่าน GitHub',
    currentPoint5: 'พัฒนาเว็บไซต์ <strong>relaxsha.com</strong> ด้วย React, CSS และ Tailwind CSS บน Frontend พร้อมพัฒนา Backend ด้วย Node.js และจัดการฐานข้อมูล MySQL ผ่าน phpMyAdmin',
    currentPoint6: 'ดูแล บำรุงรักษา และแก้ไขปัญหาคอมพิวเตอร์ รวมถึงอุปกรณ์และระบบ IT ภายในบริษัท',
    currentPoint7: 'ร่วมวางแผนและพัฒนา Product กับผู้บริหาร เพื่อสนับสนุนเป้าหมายทางธุรกิจของบริษัท',
    energyPeriod: '2025 – 2025',
    energyRole: 'นักวิชาการพลังงาน',
    energyCompany: 'มหาวิทยาลัยราชภัฏอุตรดิตถ์',
    energyPoint1: 'รวบรวม จัดทำ และส่งรายงานข้อมูลการใช้พลังงานของมหาวิทยาลัยตามข้อกำหนดของกระทรวงพลังงาน (กรมพัฒนาพลังงานทดแทนและอนุรักษ์พลังงาน: พพ.) ครอบคลุมปริมาณการใช้ไฟฟ้า น้ำมันเชื้อเพลิง และค่าใช้จ่ายด้านพลังงานในช่วงเวลาที่กำหนด',
    energyPoint2: 'พัฒนา Dashboard แสดงข้อมูลการชาร์จพลังงานของสถานีชาร์จรถบัสมหาวิทยาลัย โดยใช้ Digital Meter INT1422 สื่อสารผ่าน RS485 และ USR-IOT ส่งข้อมูลด้วย Node-RED ไปยัง MariaDB และ phpMyAdmin บน Raspberry Pi CM4 พร้อมพัฒนาโปรแกรมด้วย PHP เพื่อรายงานการใช้พลังงานรายวัน แจ้งเตือนผ่าน Telegram และสรุปค่าใช้จ่ายของสถานีชาร์จ',
    energyPoint3: 'พัฒนา Dashboard แสดงข้อมูลการผลิตไฟฟ้าจากระบบโซลาร์เซลล์แบบติดตั้งบนหลังคาขนาด 500 kW โดยใช้ Digital Meter INT-1422 สื่อสารผ่าน RS485 และ USR-IOT ส่งข้อมูลด้วย Node-RED ไปยัง MariaDB และ phpMyAdmin บน Raspberry Pi CM4 พร้อมใช้ Node.js พัฒนาโปรแกรมแสดงผลการผลิตไฟฟ้าแบบ Real-time ในรูปแบบกราฟเส้นและรายงานปริมาณการผลิตรายวัน',
    informationPeriod: '2024 – 2025',
    informationRole: 'ผู้ช่วยเจ้าหน้าที่ฝ่ายสารสนเทศ',
    informationCompany: 'บริษัท ศักดิ์สยามลิสซิ่ง จำกัด (มหาชน) · สำนักงานใหญ่',
    internshipNote: 'ปฏิบัติงานสหกิจศึกษา',
    informationPoint1: 'มีความสามารถซ่อมบำรุงและตรวจสอบอุปกรณ์อิเล็กทรอนิกส์ให้พร้อมใช้งาน เช่น Printer, UPS, Laptop, Smartphone และ Computer PC',
    informationPoint2: 'ช่วยเหลือและแก้ไขปัญหาแบบรีโมทระยะไกลให้กับสาขาและหน่วยงานต่าง ๆ เพื่อให้ปฏิบัติงานได้อย่างราบรื่น ทั้งด้านโปรแกรมคอมพิวเตอร์ การแชร์ Printer และการติดตั้ง Driver',
    informationPoint3: 'จัดการอุปกรณ์อิเล็กทรอนิกส์ที่ไม่สามารถใช้งานได้ คัดแยกและจัดเก็บอะไหล่เพื่อนำกลับมาใช้กับงานที่เหมาะสม',
    adminPeriod: '2019 – 2021',
    adminRole: 'ธุรการฝ่ายกำลังพล',
    adminCompany: 'ม.2 กรมทหารม้าที่ 2 · ทหารกองประจำการ',
    adminPoint1: 'จัดทำเอกสารราชการ เช่น หนังสือขอความอนุเคราะห์ข้อมูล และดำเนินงานตามระเบียบงานประจำวัน',
    certificatesTitle: 'เกียรติบัตร',
    certificateAlt1: 'เกียรติบัตรใบที่ 1',
    certificateAlt2: 'เกียรติบัตรใบที่ 2',
    certificateAlt3: 'เกียรติบัตรใบที่ 3',
    contactTitle: 'ติดต่อเรา',
    lineLabel: 'แชท LINE',
    contactFormKicker: 'ติดต่อเพื่อพูดคุยหรือร่วมงาน',
    contactFormTitle: 'ส่งข้อความถึงผม',
    contactFormDescription: 'กรอกข้อมูลด้านล่าง แล้วข้อความของคุณจะถูกส่งไปยังอีเมลของผมโดยตรง',
    contactNameLabel: 'ชื่อ - นามสกุล',
    contactNamePlaceholder: 'กรอกชื่อ - นามสกุล',
    contactEmailLabel: 'อีเมล',
    contactEmailPlaceholder: 'กรอกอีเมลสำหรับติดต่อกลับ',
    contactSubjectLabel: 'หัวข้อ',
    contactSubjectPlaceholder: 'หัวข้อที่ต้องการติดต่อ',
    contactMessageLabel: 'ข้อความ',
    contactMessagePlaceholder: 'เขียนข้อความของคุณที่นี่',
    contactFormNote: 'ข้อมูลจะถูกส่งไปที่ kie_zii@hotmail.co.th',
    contactSubmit: 'ส่งข้อความ',
    footerDescription: 'ผลงานและประสบการณ์ด้านวิศวกรรมคอมพิวเตอร์ IT Support และงานระบบ',
    footerNavigationTitle: 'นำทาง',
    footerWorkTitle: 'ผลงาน',
    footerContactTitle: 'ติดต่อ',
    footerCopyright: '© 2025 วรเทพจักษ์ สุระขัน. สงวนลิขสิทธิ์',
    footerBackToTop: 'กลับขึ้นด้านบน ↑',
    backToTopAria: 'กลับขึ้นด้านบน'
  },
  en: {
    pageTitle: 'Portfolio | Mr. Whorathepchak Surakhan',
    navCaption: 'PERSONAL PROFILE',
    navAboutGroup: 'About Me',
    navWorkGroup: 'Portfolio',
    navExperienceGroup: 'Experience',
    navAbout: 'About Me',
    navEducation: 'Education',
    navResume: 'Resume',
    navResearch: 'Research',
    navWebsites: 'Websites',
    navAirConditioning: 'Air Conditioning',
    navComputerRepair: 'Computer & Printer Repair',
    navExperience: 'Experience',
    navCertificates: 'Certificates',
    navContact: 'Contact',
    heroEyebrow: 'PORTFOLIO · 2025',
    heroGreeting: "Hello, I'm",
    personName: 'Mr. Whorathepchak Surakhan',
    heroRole: 'COMPUTER ENGINEERING',
    heroDescription: 'A technology enthusiast interested in systems and structured problem-solving, ready to turn technical knowledge into value for an organization.',
    heroPrimaryAction: 'Get to know me',
    heroContactAction: 'Contact me',
    heroLocation: 'Uttaradit, Thailand',
    heroAvailability: 'Ready to learn and grow',
    scrollHint: 'Scroll to explore',
    profileAlt: 'Mr. Whorathepchak Surakhan',
    applicationPhotoAlt: 'Application photo of Mr. Whorathepchak Surakhan',
    aboutTitle: 'About Me',
    aboutDescription: 'A highly responsible and systematic professional with IT and engineering skills. Experienced in maintaining and repairing equipment such as computers, printers, laptops, UPS systems, operating systems, and basic networks. Skilled at applying technology to improve work efficiency, collaborating with teams, prioritizing tasks, and growing with an organization. Currently based in Uttaradit.',
    educationTitle: 'Education',
    education1: 'Bachelor of Computer Engineering, Uttaradit Rajabhat University (2024)',
    education2: 'Higher Vocational Certificate in Computer Technology, Uttaradit Technical College (2016)',
    education3: 'Vocational Certificate in Accounting, Uttaradit Vocational College (2014)',
    resumeTitle: 'Resume',
    resumeDownload: 'Download Resume PDF',
    resumePrint: 'Print / Save as PDF',
    resumeAlt: 'Resume of Mr. Whorathepchak Surakhan',
    resumeProfileAlt: 'Profile photo of Mr. Whorathepchak Surakhan',
    resumeName: 'Mr. Whorathepchak Surakhan',
    resumeRole: 'IT SUPPORT · COMPUTER ENGINEERING',
    resumeContactTitle: 'CONTACT',
    resumePortfolioTitle: 'PORTFOLIO WEBSITE',
    resumePortfolioAlt: 'QR Code for portfolio website',
    resumePortfolioUrl: 'giemystick.github.io',
    resumeSkillsTitle: 'SKILLS',
    resumeSkill1: 'IT Support & Troubleshooting',
    resumeSkill2: 'Full-stack Web Development',
    resumeSkill3: 'WordPress & Web Hosting',
    resumeSkill4: 'Server, Network & System Support',
    resumeSkill5: 'Air Conditioning Installation & Service',
    resumeEducationTitle: 'EDUCATION',
    resumeEducationDegree: 'BACHELOR OF COMPUTER ENGINEERING',
    resumeEducationUniversity: 'Uttaradit Rajabhat University',
    resumeEducationVocational: 'HIGHER VOCATIONAL CERTIFICATE',
    resumeEducationCollege: 'Uttaradit Technical College',
    resumeFocusTitle: 'PROFESSIONAL FOCUS',
    resumeFocus1: 'Reliable technical support',
    resumeFocus2: 'Structured problem-solving',
    resumeFocus3: 'Continuous learning and growth',
    resumeLanguagesTitle: 'LANGUAGES',
    resumeLanguageHeader: 'Language',
    resumeSpeakHeader: 'Speak',
    resumeListenHeader: 'Listen',
    resumeReadHeader: 'Read',
    resumeWriteHeader: 'Write',
    resumeThai: 'Thai',
    resumeThaiLevel: 'Excellent',
    resumeEnglish: 'English',
    resumeEnglishLevel: 'Fair',
    resumeEyebrow: 'PROFESSIONAL PROFILE',
    resumeHeadline: 'IT SUPPORT · COMPUTER ENGINEERING',
    resumeSummary: 'Responsible and systematic IT professional with hands-on experience in technical support, web development, server management, and business systems. Focused on solving problems efficiently and creating practical value for the organization.',
    resumeExperienceTitle: 'PROFESSIONAL EXPERIENCE',
    resumeJob1Title: 'IT Support',
    resumeJob1Company: 'Keera Hospitality Co., Ltd.',
    resumeJob1Period: '2025 – Present',
    resumeJob1Point1: 'Manage CM Manager, PMS, BE, Aiosell, Exely, and eZee systems, including integrations with properties under the company’s care.',
    resumeJob1Point2: 'Support Odoo, Zoho, PMSuite, and internal business systems while contributing to product planning with management.',
    resumeJob1Point3: 'Maintain more than 20 WordPress websites and Hostinger servers, and develop full-stack web solutions using Next.js, Node.js, PHP, MySQL, React, and Tailwind CSS.',
    resumeJob1Point4: 'Provide troubleshooting and technical support for computers, equipment, and IT systems across the organization.',
    resumeJob2Title: 'Energy Academic Officer',
    resumeJob2Company: 'Uttaradit Rajabhat University',
    resumeJob2Point1: 'Collected, prepared, and submitted university energy consumption reports according to Ministry of Energy requirements, covering electricity, fuel, and energy costs within the required reporting periods.',
    resumeJob2Point2: 'Developed an energy dashboard for the university bus charging station using Digital Meter INT1422, RS485, USR-IOT, Node-RED, MariaDB, phpMyAdmin, Raspberry Pi CM4, and PHP. The system reports daily energy usage, Telegram alerts, and charging station costs.',
    resumeJob2Point3: 'Developed a real-time dashboard for a 500 kW rooftop solar power system using Digital Meter INT-1422, RS485, USR-IOT, Node-RED, MariaDB, phpMyAdmin, Raspberry Pi CM4, and Node.js. The system displays line charts and daily generation reports.',
    resumeJob3Title: 'Information Technology Assistant',
    resumeJob3Company: 'Saksiam Leasing Public Company Limited · Head Office',
    resumeJob3Point1: 'Repair, maintain, and inspect electronic equipment to keep it operational, including printers, UPS units, laptops, smartphones, and desktop PCs.',
    resumeJob3Point2: 'Provide remote troubleshooting support for branches and departments to keep operations running smoothly, including computer software, printer sharing, and driver installation.',
    resumeJob3Point3: 'Manage non-working electronic equipment by sorting and storing usable parts for appropriate future repairs.',
    resumeJob4Title: 'Personnel Administration Clerk',
    resumeJob4Company: '2nd Cavalry Battalion · Military service',
    resumeJob4Point1: 'Prepared official documents and carried out routine administrative procedures.',
    resumeProjectsTitle: 'SELECTED PROJECTS & CAPABILITIES',
    resumeProject1: 'Full-stack website development with Next.js, Node.js, PHP, MySQL, and GitHub.',
    resumeProject2: 'Frontend development with React, CSS, and Tailwind CSS, supported by Node.js and MySQL.',
    resumeProject3Title: 'Air Conditioning',
    resumeProject3: 'Installation, service, refrigeration system knowledge, and system vacuuming.',
    researchTitle: 'Research',
    researchPosterTitle: 'Water Quality Monitoring System for the Wastewater Treatment Pond at Uttaradit Rajabhat University',
    researchPosterAlt: 'Research poster for a wastewater treatment pond water quality monitoring system',
    websitesTitle: 'Website Portfolio',
    websitesIntroduction: 'A curated collection of websites I developed and maintained, presented as layered browser windows.',
    website1Title: 'relaxsha.com',
    website1Description: 'A resort and accommodation website with a clear, user-friendly presentation.',
    website2Title: 'keera.co.th',
    website2Description: 'A full-stack business website with content and data management capabilities.',
    website3Title: 'pailinhillpatong.com',
    website3Description: 'An accommodation website presenting a stay experience in Patong.',
    website4Title: 'hrresortbuengkhonglong.com',
    website4Description: 'A resort website for presenting rooms, facilities, and contact information.',
    website5Title: 'tierra-en-sierra.com',
    website5Description: 'A nature-inspired accommodation website with a warm, professional identity.',
    website6Title: 'mairoodresort.com',
    website6Description: 'A resort website communicating the property’s highlights and services.',
    website7Title: 'jamjanresort.com',
    website7Description: 'A resort website designed to build interest and confidence before booking.',
    websiteVisit: 'Visit website',
    airTitle: 'Air Conditioning Installation Portfolio',
    airIntroduction: 'Hands-on experience in air conditioning installation and service, supported by practical knowledge of refrigeration systems, on-site inspection, and system evacuation (vacuuming) before commissioning.',
    airServiceTitle: 'Installation & Service',
    airServiceDescription: 'Install air conditioning systems, route equipment and piping, inspect operation, clean units, and perform routine maintenance.',
    airRefrigerationTitle: 'Refrigeration Systems',
    airRefrigerationDescription: 'Understand refrigeration cycles, major components, heat transfer principles, and basic troubleshooting procedures.',
    airVacuumTitle: 'System Evacuation',
    airVacuumDescription: 'Perform system evacuation to remove air and moisture before commissioning, supporting reliable and efficient operation.',
    airPhotoAlt1: 'Air conditioning installation work, photo 1',
    airPhotoAlt2: 'Air conditioning worksite and equipment preparation, photo 2',
    airPhotoAlt3: 'Air conditioning piping and system installation, photo 3',
    airPhotoAlt4: 'Indoor air conditioning unit installation, photo 4',
    airPhotoAlt5: 'Air conditioning service and maintenance work, photo 5',
    airPhotoAlt6: 'Refrigeration system inspection, photo 6',
    airPhotoCaption1: 'Air conditioning installation',
    airPhotoCaption2: 'Worksite and equipment preparation',
    airPhotoCaption3: 'Piping and system installation',
    airPhotoCaption4: 'Indoor unit installation',
    airPhotoCaption5: 'Service and maintenance',
    airPhotoCaption6: 'Refrigeration system inspection',
    computerTitle: 'Computer & Printer Repair Experience',
    computerIntroduction: 'Hands-on experience in operating system installation, computer and printer troubleshooting, and custom PC assembly, with a focus on reliability, readiness for use, and professional after-service support.',
    computerOsTitle: 'Operating Systems',
    computerOsDescription: 'Install and configure Windows, Linux, and Ubuntu, including drivers, essential software, and system optimization for reliable use.',
    computerPrinterTitle: 'Printer Repair & Service',
    computerPrinterDescription: 'Diagnose printer faults across mechanical and electrical systems, print quality, paper jams, and computer or network connectivity.',
    computerBuildTitle: 'PC Assembly',
    computerBuildDescription: 'Select compatible components, assemble PCs, configure BIOS, and test performance based on budget and intended workloads.',
    computerPhotoAlt: 'Computer and printer repair work',
    experienceTitle: 'Work Experience',
    currentPeriod: '2025 – Present',
    currentRole: 'CURRENT ROLE',
    currentCompany: 'Keera Hospitality Co., Ltd. <span>(Keera Hospitality)</span>',
    currentPoint1: 'Manage CM Manager, PMS, and BE systems, as well as hotel management platforms including Aiosell, Exely, and eZee, coordinating integrations with properties under the company\'s care.',
    currentPoint2: 'Support ERP systems including Odoo, Zoho, and PMSuite, while contributing to the development of the company\'s internal systems.',
    currentPoint3: 'Maintain WordPress websites and design and manage Hostinger servers for more than 20 company websites.',
    currentPoint4: 'Develop <strong>keera.co.th</strong> as a full-stack website using Next.js and Node.js on the frontend, with Node.js, PHP, and MySQL on the backend; manage code versions through GitHub.',
    currentPoint5: 'Develop <strong>relaxsha.com</strong> using React, CSS, and Tailwind CSS on the frontend, with a Node.js backend and MySQL database management through phpMyAdmin.',
    currentPoint6: 'Maintain, troubleshoot, and repair computers, equipment, and IT systems within the company.',
    currentPoint7: 'Plan and develop products with management to support the company\'s business goals.',
    energyPeriod: '2025 – 2025',
    energyRole: 'Energy Academic Officer',
    energyCompany: 'Uttaradit Rajabhat University',
    energyPoint1: 'Collect, prepare, and submit university energy consumption reports according to Ministry of Energy requirements, covering electricity, fuel, and energy costs within the required reporting periods.',
    energyPoint2: 'Develop an energy dashboard for the university bus charging station using Digital Meter INT1422, RS485, USR-IOT, Node-RED, MariaDB, phpMyAdmin, Raspberry Pi CM4, and PHP. The system reports daily energy usage, sends Telegram alerts, and summarizes charging station costs.',
    energyPoint3: 'Develop a real-time dashboard for a 500 kW rooftop solar power system using Digital Meter INT-1422, RS485, USR-IOT, Node-RED, MariaDB, phpMyAdmin, Raspberry Pi CM4, and Node.js. The system displays line charts and daily power generation reports.',
    informationPeriod: '2024 – 2025',
    informationRole: 'Information Technology Assistant',
    informationCompany: 'Saksiam Leasing Public Company Limited · Head Office',
    internshipNote: 'Cooperative education placement',
    informationPoint1: 'Repair, maintain, and inspect electronic equipment to keep it operational, including printers, UPS units, laptops, smartphones, and desktop PCs.',
    informationPoint2: 'Provide remote troubleshooting support for branches and departments to keep operations running smoothly, including computer software, printer sharing, and driver installation.',
    informationPoint3: 'Manage non-working electronic equipment by sorting and storing usable parts for appropriate future repairs.',
    adminPeriod: '2019 – 2021',
    adminRole: 'Personnel Administration Clerk',
    adminCompany: '2nd Cavalry Battalion · Military service',
    adminPoint1: 'Prepared official documents, including data request letters, and carried out routine administrative procedures.',
    certificatesTitle: 'Certificates',
    certificateAlt1: 'Certificate 1',
    certificateAlt2: 'Certificate 2',
    certificateAlt3: 'Certificate 3',
    contactTitle: 'Contact',
    lineLabel: 'Chat on LINE',
    contactFormKicker: 'Let’s connect and work together',
    contactFormTitle: 'Send me a message',
    contactFormDescription: 'Fill in the form below and your message will be sent directly to my email.',
    contactNameLabel: 'Full name',
    contactNamePlaceholder: 'Enter your full name',
    contactEmailLabel: 'Email',
    contactEmailPlaceholder: 'Enter your email for reply',
    contactSubjectLabel: 'Subject',
    contactSubjectPlaceholder: 'What would you like to discuss?',
    contactMessageLabel: 'Message',
    contactMessagePlaceholder: 'Write your message here',
    contactFormNote: 'Your message will be sent to kie_zii@hotmail.co.th',
    contactSubmit: 'Send message',
    footerDescription: 'Portfolio and experience in computer engineering, IT support, and systems work.',
    footerNavigationTitle: 'Navigation',
    footerWorkTitle: 'Selected Work',
    footerContactTitle: 'Contact',
    footerCopyright: '© 2025 Mr. Whorathepchak Surakhan. All rights reserved.',
    footerBackToTop: 'Back to top ↑',
    backToTopAria: 'Back to top'
  }
};

const languageToggle = document.getElementById('language-toggle');
const menuToggle = document.getElementById('menu-toggle');
const siteHeader = document.querySelector('.site-header');
const logoLink = document.querySelector('.logo');
const navLinks = document.querySelectorAll('#site-nav a');
const navGroups = document.querySelectorAll('.nav-group');
const navGroupToggles = document.querySelectorAll('.nav-group-toggle');
const resumeDownload = document.getElementById('resume-download');
const resumePrint = document.getElementById('resume-print');
const backToTop = document.getElementById('back-to-top');
const urlLanguage = new URLSearchParams(window.location.search).get('lang');
const savedLanguage = urlLanguage || localStorage.getItem('language');
let currentLanguage = savedLanguage === 'en' ? 'en' : 'th';

function updateMenuLabel() {
  const isOpen = siteHeader.classList.contains('menu-open');
  const label = currentLanguage === 'th'
    ? (isOpen ? 'ปิดเมนู' : 'เปิดเมนู')
    : (isOpen ? 'Close menu' : 'Open menu');
  menuToggle.textContent = isOpen ? '×' : '☰';
  menuToggle.setAttribute('aria-label', label);
  menuToggle.title = label;
}

function closeMobileMenu() {
  if (window.innerWidth <= 980) {
    siteHeader.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    navGroups.forEach((group) => {
      group.classList.remove('is-open');
      group.querySelector('.nav-group-toggle').setAttribute('aria-expanded', 'false');
    });
    updateMenuLabel();
  }
}

function applyLanguage(language) {
  currentLanguage = language;
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.title = dictionary.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.innerHTML = dictionary[element.dataset.i18n];
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.alt = dictionary[element.dataset.i18nAlt];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = dictionary[element.dataset.i18nPlaceholder];
  });

  languageToggle.textContent = language === 'th' ? 'EN' : 'TH';
  languageToggle.setAttribute('aria-label', language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย');
  languageToggle.title = language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย';
  if (resumeDownload) {
    resumeDownload.href = language === 'th' ? 'output/pdf/resume-th.pdf' : 'output/pdf/resume-en.pdf';
    resumeDownload.download = language === 'th' ? 'resume-th.pdf' : 'resume-en.pdf';
    resumeDownload.setAttribute('aria-label', dictionary.resumeDownload);
  }
  if (backToTop) {
    backToTop.setAttribute('aria-label', dictionary.backToTopAria);
    backToTop.title = dictionary.backToTopAria;
  }
  updateMenuLabel();
  localStorage.setItem('language', language);
}

applyLanguage(currentLanguage);

languageToggle.addEventListener('click', () => {
  applyLanguage(currentLanguage === 'th' ? 'en' : 'th');
});

if (resumePrint) resumePrint.addEventListener('click', () => window.print());

menuToggle.addEventListener('click', () => {
  const isOpen = siteHeader.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  updateMenuLabel();
});

navGroupToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const group = toggle.closest('.nav-group');
    const isOpen = group.classList.toggle('is-open');
    navGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        otherGroup.classList.remove('is-open');
        otherGroup.querySelector('.nav-group-toggle').setAttribute('aria-expanded', 'false');
      }
    });
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});

navLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));
if (logoLink) logoLink.addEventListener('click', closeMobileMenu);
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) {
    siteHeader.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    updateMenuLabel();
  }
});

function updateBackToTop() {
  if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 500);
}

if (backToTop) backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', updateBackToTop, { passive: true });
updateBackToTop();

// ---------- Theme Toggle ----------
const toggleBtn = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', saved);
if (toggleBtn) toggleBtn.textContent = saved === 'dark' ? '☀️' : '🌙';

if (toggleBtn) toggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggleBtn.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ---------- AOS ----------
if (window.AOS) AOS.init({ once: true, duration: 700 });

// ---------- GSAP Hero Text ----------
if (window.gsap) {
  gsap.from('#hero-title .line', {
    y: 35,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.2
  });

  gsap.from(['.eyebrow', '.hero-role', '.hero-description', '.hero-actions', '.hero-meta'], {
    y: 18,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.1,
    delay: 0.35
  });

  if (document.querySelector('#hero') && window.ScrollTrigger) {
    gsap.to('.hero-img-wrap', {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
  }
}

// ---------- Active Nav Link ----------
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('#site-nav a');
const currentPage = document.body.dataset.page || 'home';

function updateActiveNav() {
  let current = currentPage;
  if (currentPage === 'home') {
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id');
    });
  }
  links.forEach((link) => {
    const href = link.getAttribute('href') || '';
    const targetPage = href.split('#')[0].replace(/\.html$/, '').replace(/^\.\//, '').replace(/\/$/, '') || 'home';
    link.classList.toggle('active', targetPage === current);
  });
  navGroups.forEach((group) => {
    group.classList.toggle('has-active', Boolean(group.querySelector('a.active')));
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

function openPosterModal(src) {
  const modal = document.getElementById('posterModal');
  const modalImg = document.getElementById('posterModalImg');
  if (!modal || !modalImg) return;
  modalImg.src = src;
  modal.classList.add('open');
}
function closePosterModal() {
  const modal = document.getElementById('posterModal');
  if (modal) modal.classList.remove('open');
}
