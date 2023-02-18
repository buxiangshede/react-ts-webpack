/*
 * @Author: shasha0102 shasha.liu@bizops.com.cn
 * @Date: 2023-02-18 22:36:41
 * @LastEditors: shasha0102 shasha.liu@bizops.com.cn
 * @LastEditTime: 2023-02-18 22:52:02
 * @FilePath: /ts/react-ts-project/src/Com1.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {PureComponent, ReactNode} from 'react';
// 装饰器为,组件添加age属性
function addAge(Target: Function)  {
  Target.prototype.age = 11;
}
// 使用装饰圈
@addAge
class Component1 extends PureComponent {

  age?: number

  render() {
    return (
      <h2>我是类组件---{this.age}</h2>
    )
  }
}

export default Component1