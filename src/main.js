import m from 'mithril';

var TableCell = {
  view(vnode) {
    return m('td.TableCell', {
      onclick(e) {
        console.log('Clicked' + vnode.attrs.text);
        e.stopPropagation();
      },
      key: vnode.attrs.key
    }, vnode.attrs.text);
  }
};

var TableRow = {
  view(vnode) {
    return m(`tr[data-id=${vnode.attrs.data.id}]`, {
        class: vnode.attrs.data.active ? 'TableRow active' : 'TableRow'
      }, [
      m(TableCell, { text: `#${vnode.attrs.data.id}` }),
      vnode.attrs.data.props.map((c, i) => m(TableCell, { key: i, text: c }))
    ]);
  }
};

var Table = {
  view(vnode) {
    return m('table.Table', [
      m('tbody', [
        vnode.attrs.data.items.map(i => m(TableRow, { key: i.id, data: i }))
      ])
    ]);
  }
};

var AnimBox = {
  view(vnode) {
    return m(`div.AnimBox[data-id=${vnode.attrs.data.id}]`, {
      style: {
        borderRadius: (vnode.attrs.data.time % 10).toString() + 'px',
        background: 'rgba(0,0,0,' + (0.5 + ((vnode.attrs.data.time % 10) / 10)).toString() + ')'
      }
    });
  }
};

var Anim = {
  view(vnode) {
    return m('div.Anim', [
      vnode.attrs.data.items.map(i => m(AnimBox, { key: i.id, data: i }))
    ]);
  }
};

var TreeLeaf = {
  view(vnode) {
    return m('li.TreeLeaf', vnode.attrs.data.id);
  }
};

var TreeNode = {
  view(vnode) {
    return m('ul.TreeNode', [
      vnode.attrs.data.children.map(c => c.container ?
          m(TreeNode, { key: c.id, data: c })
        :
          m(TreeLeaf, { key: c.id, data: c })
        )
    ]);
  }
};

var Tree = {
  view(vnode) {
    return m('div.Tree', m(TreeNode, { data: vnode.attrs.data.root }));
  }
};



var Main = {
  oninit(vnode) {
    var location = vnode.attrs.data.location;
    if (location === 'table') {
      vnode.data = m(Table, { data: vnode.attrs.data.table });
    } else if (location === 'anim') {
      vnode.data = m(Anim, { data: vnode.attrs.data.anim });
    } else if (location === 'tree') {
      vnode.data = m(Tree, { data: vnode.attrs.data.tree });
    }
  },
  view(vnode) {
    return m('div.Main', vnode.data);
  }
};

uibench.init('Mithril', '1.0.0');

document.addEventListener('DOMContentLoaded', e => {
  var container = document.getElementById('App');

  uibench.run(
    state => {
      m.mount(container, {
        view(vnode) {
          return m(Main, { data: state });
        }
      });
    },
    samples => {
      m.mount(container, {
        view(vnode) {
          return m('pre', JSON.stringify(samples, null, ' '));
        }
      });
    }
  );
});