//es6导出
//默认导出，导出的东西可以没有名字
//只能使用一次
export default function (){
    console.log('a1')
}

//可以使用多次，不限制类型
export function hhc(){
    return console.log('a222222222')
}
export function hhc1(){
    return console.log('a3333')
}

// import a,{hhc,hhc1} from './modules/a'
//hhc();
// hhc1()
//a();