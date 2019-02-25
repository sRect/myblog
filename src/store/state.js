import { fromJS } from 'immutable';

export const headerState = fromJS({
  inputVal: '',
  foucused: false
})

export const mainState = fromJS({
  articleList: [
    {
      title: '测试标题1',
      description: '这是文章简述这是文章简述这是文章简述这是文章简述这是文章简述这是文章简述这是文是文章简述这是文章简述这是文章简述',
      titleHref: `javascript:;`
    },
    {
      title: '测试标题2',
      description: '这是文章简述',
      titleHref: `javascript:;`
    }
  ]
})