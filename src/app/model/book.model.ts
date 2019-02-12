export class BookModel {
    // 记录格式	BK
    recordType?: string;
    // 记录头标	     nam0 2200313   450
    recordHeadLabel?: string;
    // 记录标识号	000860011
    recordId?: string;
    // 记录版本标识	20181229105824.0
    recordVersionId ?: string;
    // ISBN	978-7-302-48812-5 : CNY79.00
    isbn?: string;
    // 通用处理数据	 20180326d2018    em y0chiy0150    ea
    generalDataProcessing?: string;
    // 作品语种	 chi
    language?: string;
    // 出版或制作国	 CN 110000
    publishFrom?: string;
    // 专著性文字资	 y   z   000yy
    monographs?: string;
    // 文字形态特征	 r
    morphologicalCharacteristics?: string;
    // 题名	 HTML5+CSS3+JavaScript网页设计实战 : 视频教学版 / 常新峰，王金柱编著
    title: string;
    // 出版发行项	 北京 : 清华大学出版社, 2018
    publications?: string;
    // 载体形态项	12,457页 ; 26cm
    carrierMorphologyTerm?: string;
    // 丛编项	 Web前端技术丛书
    seriesArea?: string;
    // 提要或文摘附	本书由浅入深，系统、详尽地介绍了HTML5、CSS3和JavaScript相关技术及其在Web前端及移动应用开发领域的应用。书中提供了大量的代码示例，从基本原理到实战应用，几乎涉及了Web前端及移动应用开发的绝大部分内容。
    summaryAndAbstract?: string;
    // 学科名称主题	 超文本标记语言 - 程序设计
    subjectNames?: string[] = ['超文本标记语言', '程序设计'];
    // 非控主题	 HTML CSS JavaScript
    uncontrolledTheme?: string;
    // 中图分类法	TP312HT
    chineseChartClassifications?: string[];
    // 个人名称-等同	常新峰 (1982-)
    personalNames?: string[];
    // 记录来源	 CN A230000HPL 20180326
    recordSources?: string[];
    // 索书号	2018/TP312HT/4
    callNumber?: string;
    // 架位	 BL29 SBL29 2018/TP312HT/4 中文图书可借 银杏书馆 银杏书馆
    shelfPosition?: string;
    // PST	 Z30 000881046000010 BL29 SBL29 BOOK 11 N SCL60-000000000 2018/TP312HT/4 图书 银杏书馆 银杏书馆 中文图书可借
    pst?: string;
    // SBL	 BL29
    sbl?: string;
    // LOC	银杏书馆  银杏书馆  2018/TP312HT/4/
    loc?: string;
    // STS	 11
    sts?: string;
    // 系统号	000860011
    id?: string;

    // extra
    isCollapsed = true;

    constructor() {
        this.subjectNames = ['超文本标记语言', '程序设计'];
        this.title = 'HTML5+CSS3+JavaScript网页设计实战 : 视频教学版 / 常新峰，王金柱编著';
    }
}
