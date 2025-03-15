import { type MApp, NodeType } from '@tmagic/core';

const dsl: MApp = {
  id: '1',
  name: 'default_page',
  type: NodeType.ROOT,
  codeBlocks: {
  },
  items: [
    {
      type: NodeType.PAGE,
      id: 'page_1',
      name: 'index',
      style: {
        position: 'relative',
        left: 0,
        top: 0,
        right: '',
        bottom: '',
        width: '100%',
        height: '100%',
        color: '',
        fontSize: '',
        fontWeight: '',
      },
      events: [],
      created: {},
      items: [
        {
          id: 'form_1',
          name: 'root_form',
          type: 'form',
          props: {},
          style: {},
          items: []
        }
      ],
    },
  ],
  dataSources: [],
};

export default dsl;
