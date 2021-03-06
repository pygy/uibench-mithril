function tableCell(text) {
  return m('td.TableCell', {
    onclick: function onclick(e) {
      console.log('Clicked ' + text);
      e.stopPropagation();
    }
  }, text);
};

function tableRow(data) {
  return m(("tr[data-id=" + (data.id) + "]"), {
      class: data.active ? 'TableRow active' : 'TableRow'
    }, [
      tableCell(("#" + (data.id))),
      data.props.map(tableCell)
    ]);
};

var Table = {
  view: function view(vnode) {
    return m('table.Table', [
      m('tbody', [
        vnode.attrs.data.items.map(tableRow)
      ])
    ]);
  }
};

var AnimBox = {
  view: function view$1(vnode) {
    return m(("div.AnimBox[data-id=" + (vnode.attrs.data.id) + "]"), {
      style: {
        borderRadius: (vnode.attrs.data.time % 10).toString() + 'px',
        background: 'rgba(0,0,0,' + (0.5 + ((vnode.attrs.data.time % 10) / 10)).toString() + ')'
      }
    });
  }
};

var Anim = {
  view: function view$2(vnode) {
    return m('div.Anim', [
      vnode.attrs.data.items.map(function (i) { return m(AnimBox, { key: i.id, data: i }); })
    ]);
  }
};

var TreeLeaf = {
  view: function view$3(vnode) {
    return m('li.TreeLeaf', vnode.attrs.data.id);
  }
};

var TreeNode = {
  view: function view$4(vnode) {
    return m('ul.TreeNode', [
      vnode.attrs.data.children.map(function (c) { return c.container ?
          m(TreeNode, { key: c.id, data: c })
        :
          m(TreeLeaf, { key: c.id, data: c }); }
        )
    ]);
  }
};

var Tree = {
  onbeforeupdate: function onbeforeupdate(vnode) {
    if (this.root === vnode.attrs.data.root) return false
  },

  view: function view$5(vnode) {
    this.root = vnode.attrs.data.root
    return m('div.Tree', m(TreeNode, { data: vnode.attrs.data.root }));
  }
};



var Main = {
  oninit: function oninit(vnode) {
    var location = vnode.attrs.data.location;
    if (location === 'table') {
      vnode.data = m(Table, { data: vnode.attrs.data.table });
    } else if (location === 'anim') {
      vnode.data = m(Anim, { data: vnode.attrs.data.anim });
    } else if (location === 'tree') {
      vnode.data = m(Tree, { data: vnode.attrs.data.tree });
    }
  },
  view: function view$6(vnode) {
    return m('div.Main', vnode.data);
  }
};

uibench.init('Mithril', '1.0.0');

document.addEventListener('DOMContentLoaded', function (e) {
  var container = document.getElementById('App');

  uibench.run(
    function (state) {
      m.mount(container, {
        view: function view(vnode) {
          return m(Main, { data: state });
        }
      });
    },
    function (samples) {
      m.mount(container, {
        view: function view(vnode) {
          return m('pre', JSON.stringify(samples, null, ' '));
        }
      });
    }
  );
});
