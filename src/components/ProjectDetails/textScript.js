import imageWork from '../images/WorkD.jpg';
import raisis from '../images/raisis.PNG';
import socket from '../images/personalS.PNG';
import simetiaWork from '../images/workBackSimetia.PNG';
import breakingBad from '../images/breakingBad.PNG';

export const detailsProject= {
    Axiotas: {
        title: 'Axiotas',
        img: imageWork,
        dayWork: '22',
        techUsed: '8',
        taskWork: '24',
        dateStart: '05/06/2021',
        dateEnd: 'Present',
        category: 'Work',
        tehnology: 'ReactJs',
        headTitle: 'Axiotas Type CRM',
        skillsFront: ["ReactJs", "Material UI","Typescript", "Context"],
        skillsBack: ["Apollo", "GraphQL", "Prisma", "Nexus"],
        subHeadTitle: 
        {
            EN: "It's a software application which is build based on CRM that provides a way to help the business manage many key processes, that includes customer data, interactions, sales automation, contracts, marketing, customer support, clients information, employee records.",
            RO: "Este o aplicație software bazată pe CRM care oferă o modalitate de a ajuta afacerea să gestioneze mai ușor procese cheie, care includ, date despre clienți, interacțiuni, automatizare a vânzărilor, contracte, marketing, asistență pentru clienți, informații despre clienți, înregistrări ale angajaților."
        },
        linkHead: '',
    },
    Simetia: {
        title: 'Simetia',
        img: simetiaWork,
        dayWork: '127',
        techUsed: '9',
        taskWork: '432',
        dateStart: '11/18/2020',
        dateEnd: '03/01/2021',
        category: 'Work',
        tehnology: 'ReactJs',
        skillsFront: ["ReactJs", "Material UI", "DayJs","Typescript", "Redux"],
        skillsBack: ["NextJs", "Express", "Restful API", "MySQL"],
        headTitle: 'Simetia For Science, Media and Democracy',
        subHeadTitle: {
            EN: 'Advancing the global collaboration between academia and business.Simetia finds the world’s most qualified researchers to help companies resolve their complex problems.Joining Simetia’s exclusive network of highly experienced researchers opens up vast financial opportunities from the global marketplace and is an excellent way to put your specific expertise to use outside of academia.',
            RO: "Promovarea colaborării globale dintre mediul academic și mediul de afaceri. Simetia găsește cei mai calificați cercetători din lume pentru a ajuta companiile să-și rezolve problemele complexe. Alăturarea la rețeaua exclusivă de cercetători cu experiență de la Simetia deschide vaste oportunități financiare de pe piața globală și este o modalitate excelentă de a vă pune expertiză de utilizat în afara mediului academic."
        },    
        linkHead: 'https://simetia.com/',
    },
    RaisisSoftware: {
        title: 'RaisisSoftware',
        img: raisis,
        dayWork: '15',
        techUsed: '2',
        taskWork: '5',
        dateStart: '03/08/2021',
        dateEnd: '03/26/2021',
        category: 'Work',
        tehnology: 'ReactJs',
        skillsFront: ["ReactJs", "Material UI"],
        skillsBack: ["NextJs", "Express", "MySQL"],
        headTitle: 'RaisisSoftware Group SRL',
        subHeadTitle: {
            EN: 'Raisis Software offers integrated solutions to increase the profit of a business by implementing software solutions. It is focused on delivering intelligent solutions, being focused on efficiency, process optimization and innovation. Specialized in Outsourcing, WebDesign and custom software implementation, it uses the latest technologies in the field to perform our services to the highest standards.',
            RO: "Raisis Software oferă soluții integrate pentru a crește profitul afacerii prin implementarea de soluții software. Acesta este centralizată pe furnizarea de soluții inteligente, fiind axat pe eficiență, optimizarea proceselor și inovație. Specializată în outsourcing, WebDesign și implementare software personalizată, utilizează cele mai noi tehnologii din domeniu pentru a ne oferi serviciile la cele mai înalte standarde."
        },
        linkHead: 'https://raisissoftware.com/',
    },
    SocketChat: {
        title: 'SocketChat',
        img: socket,
        dayWork: '2',
        techUsed: '2',
        taskWork: '3',
        dateStart: '05/30/2021',
        dateEnd: 'Present',
        category: 'Work',
        tehnology: 'ReactJs',
        headTitle: 'SocketChat Easy & Fast',
        subHeadTitle: {
            EN: 'An application in which people can chat easier without creating an account, they can also use video call.',
            RO: "O aplicație în care oamenii pot discuta mai ușor fără a crea un cont, pot folosi și apeluri video."
        },
        skillsFront: ["ReactJs", "Typescript"],
        skillsBack: ["NextJs", "Express", "Socket"],
        linkHead: '',
    },
    BreakingBad: {
        title: 'BreakingBad',
        img: breakingBad,
        dayWork: '6',
        techUsed: '2',
        taskWork: '5',
        dateStart: '08/01/2020',
        dateEnd: '08/07/2020',
        category: 'Personal',
        tehnology: 'ReactJs',
        skillsFront: ["ReactJs"],
        skillsBack: ["Heroku", "Restful API"],
        headTitle: 'Breaking Bad Character Finder',
        subHeadTitle: {
            EN: "An application which can generate the characters from the series Breaking Bad and let's the user search for the favorite cast. Learned to fetch data from an API and show the characters based on the input proveded. As a way to make it responsive I used Grid approach.",
            RO: "O aplicație care poate genera personaje din seria Breaking Bad și permite utilizatorului să caute personajul preferat. Am învățat să extrag date dintr-un API și să afișez personajele pe baza datelor introduse. Ca o modalitate de a-l face Responsive, am folosit abordarea Grid."
        },
        linkHead: 'https://breakingapp.herokuapp.com/',
    },
}