import m from 'mithril';

function tableCell(text) {
  return m('td.TableCell', {
    onclick(e) {
      console.log('Clicked ' + text);
      e.stopPropagation();
    }
  }, text);
};

function tableRow(data) {
  return m(`tr[data-id=${data.id}]`, {
      class: data.active ? 'TableRow active' : 'TableRow'
    }, [
      tableCell(`#${data.id}`),
      data.props.map(tableCell)
    ]);
};

const Table = {
  view(vnode) {
    return m('table.Table', [
      m('tbody', [
        vnode.attrs.data.items.map(tableRow)
      ])
    ]);
  }
};

const AnimBox = {
  view(vnode) {
    return m(`div.AnimBox[data-id=${vnode.attrs.data.id}]`, {
      style: {
        borderRadius: (vnode.attrs.data.time % 10).toString() + 'px',
        background: 'rgba(0,0,0,' + (0.5 + ((vnode.attrs.data.time % 10) / 10)).toString() + ')'
      }
    });
  }
};

const Anim = {
  view(vnode) {
    return m('div.Anim', [
      vnode.attrs.data.items.map(i => m(AnimBox, { key: i.id, data: i }))
    ]);
  }
};

const TreeLeaf = {
  view(vnode) {
    return m('li.TreeLeaf', vnode.attrs.data.id);
  }
};

const TreeNode = {
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

const Tree = {
  onbeforeupdate(vnode) {
    if (this.root === vnode.attrs.data.root) return false
  },

  view(vnode) {
    this.root = vnode.attrs.data.root
    return m('div.Tree', m(TreeNode, { data: vnode.attrs.data.root }));
  }
};



const Main = {
  oninit(vnode) {
    let location = vnode.attrs.data.location;
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
  let container = document.getElementById('App');

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
