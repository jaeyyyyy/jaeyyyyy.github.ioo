const quotes = [
{
    quote: "지난 일은 어쩔 수 없는 바 슬퍼한 들 이미 엎질러진 물이다.",
    author: "윌리엄 셰익스피어",
},
{
    quote: "자신감은 전염된다. 자신감의 부족도 마찬가지다.",
    author: "빈스 롬바르디",
},
{
    quote: "얕은 사람은 행운을 믿으며, 강한 사람은 원인과 결과를 믿는다.",
    author: "랄프 왈도 에머슨",
},
{
    quote: "크게 실패할 용기 있는 자만이 크게 이룰 수 있습니다.",
    author: "존 F. 케네디",
},
{
    quote: "나이가 들수록 나는 사람들이 하는 말에 귀를 덜 기울인다. 다만 그들의 행동을 살핀다.",
    author: "앤드류 카네기",
},
{
    quote: "하지 말아야 할 것을 효율적으로 하는 것 보다 더 비생산적인 것은 없다.",
    author: "피터 드러커",
},
{
    quote: "길이 이끄는 대로 가지 마라. 대신 길이 없는 곳으로 가서 발자국을 남겨라.",
    author: "랄프 왈도 에머슨",
},
{
    quote: "사랑에 의해 행해지는 것은 언제나 선악을 초월한다.",
    author: "프레드리히 빌헬름 니체",
},
{
    quote: "가장 적은 것으로도 만족하는 사람이 가장 부유한 사람이다.",
    author: "소크라테스",
},
{
    quote: "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해 무엇인가 하고 있어야 한다.",
    author: "마하트마 간디",
},
{
    quote: "좋아하는 직업을 택하면 평생 하루도 일하지 않아도 될 것이니라.",
    author: "공자"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;