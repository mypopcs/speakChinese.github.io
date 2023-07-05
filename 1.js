var dfProperty = Object.defineProperty; // 定义 dfProperty 为 Object.defineProperty 方法
// 定义 setProperty 函数，用于设置对象属性
var setProperty = (obj, key, value) => key in obj ? dfProperty(obj, key, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: value
}) : obj[key] = value;
var assignProperty = (target, propertyKey, value) => (setProperty(target, typeof propertyKey !== "symbol" ? propertyKey + "" : propertyKey, value), value);
(function() {
    // 获取 document.createElement("link").relList 对象
    const linkRelList = document.createElement("link").relList;
    // 检测是否支持 modulepreload，如果支持则直接返回
    if (linkRelList && linkRelList.supports && linkRelList.supports("modulepreload")) return;
    // 遍历所有 rel="modulepreload" 的 link 元素并调用 n 函数
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
    new MutationObserver(mutations => {
        for (const mutation of mutations)
            if (mutation.type === "childList")
            // 当有子节点添加到 document 时，检查是否有新添加的 rel="modulepreload" 的 link 元素并调用 n 函数
                for (const addedNode of mutation.addedNodes) addedNode.tagName === "LINK" && addedNode.rel === "modulepreload" && n(addedNode)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function parentNode(link) {
        const options = {};
        // 设置 options对象的属性
        return link.integrity && (options.integrity = link.integrity), link.referrerPolicy && (options.referrerPolicy = link.referrerPolicy), link.crossOrigin === "use-credentials" ? options.credentials = "include" : link.crossOrigin === "anonymous" ? options.credentials = "omit" : options.credentials = "same-origin", options
    }

    function n(link) {
        // 如果 link 元素的 preloaded 属性为真，则直接返回
        if (link.preloaded) return;
        // 将 link 元素的 preloaded 属性设置为真
        link.preloaded = !0;
        // 获取请求的选项对象
        const requestOptions = parentNode(link);
        // 发起 fetch 请求
        fetch(link.href, requestOptions)
    }
})();
//声明空对象
var wi, W, ef, Mr, Jc, tf, ls, rf, To = {},
    nf = [],
    // 正则表达式
    a0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    isArray = Array.isArray;

function mergeObj(target, source) {
    // 将 source 对象的属性合并到 target 对象
    for (var prop in source) target[prop] = source[prop];
    return target
}

function removeNode(node) {
    var nextSibling = node.parentNode;
    nextSibling && nextSibling.removeChild(node)
}

function createElement(type, props, children) {
    var key, ref, otherProps, childArgs = {};
    for (otherProps in props) otherProps == "key" ? key = props[otherProps] : otherProps == "ref" ? ref = props[otherProps] : childArgs[otherProps] = props[otherProps];
    if (arguments.length > 2 && (childArgs.children = arguments.length > 3 ? wi.call(arguments, 2) : children), typeof type == "function" && type.defaultProps != null)
        for (otherProps in type.defaultProps) childArgs[otherProps] === void 0 && (childArgs[otherProps] = type.defaultProps[otherProps]);
    return creatDom(type, childArgs, key, ref, null)
}

function creatDom(type, props, key, ref, vnode) {
    var DOM = {
        type: type,
        props: props,
        key: key,
        ref: ref,
        NULL: null,
        NULL2: null,
        zero: 0,
        NULL3: null,
        void0: void 0,
        NULL4: null,
        NULL5: null,
        constructor: void 0,
        vnode1: vnode ?? ++ef
    };
    return vnode == null && W.vnode != null && W.vnode(DOM), DOM
}

function returnNull() {
    return {
        current: null
    }
}

function newInt(props, context) {
    this.props = props, this.context = context
}

function findNextSiblingElement(currentElement, i) {
    if (i == null) return currentElement.NULL2 ? findNextSiblingElement(currentElement.NULL2, currentElement.NULL2.NULL.indexOf(currentElement) + 1) : null;
    for (var nextSibling; i < currentElement.NULL.length; i++)
        if ((nextSibling = currentElement.NULL[i]) != null && nextSibling.NULL3 != null) return nextSibling.NULL3;
    return typeof currentElement.type == "function" ? findNextSiblingElement(currentElement) : null
}

function unmountComponent(component) {
    var nextComponent, siblingComponent;
    if ((component = component.NULL2) != null && component.NULL4 != null) {
        for (component.NULL3 = component.NULL4.base = null, nextComponent = 0; nextComponent < component.NULL.length; nextComponent++)
            if ((siblingComponent = component.NULL[nextComponent]) != null && siblingComponent.NULL3 != null) {
                component.NULL3 = component.NULL4.base = siblingComponent.NULL3;
                break
            } return unmountComponent(component)
    }
}

function enqueueRender(component) {
    (!component.void0 && (component.void0 = !0) && Mr.push(component) && !sortComponent.index++ || Jc !== W.debounceRendering) && ((Jc = W.debounceRendering) || tf)(sortComponent)
}

function sortComponent() {
    var component, length, vnode, parentNode, isSVG, childContext, siblings, nextSibling;
    for (Mr.sort(ls); component = Mr.shift();) component.void0 && (length = Mr.length, parentNode = void 0, isSVG = void 0, siblings = (childContext = (vnode = component).vnode1).NULL3, (nextSibling = vnode.__P) && (parentNode = [], (isSVG = mergeObj({}, childContext)).vnode1 = childContext.vnode1 + 1, renderComponent(nextSibling, childContext, isSVG, vnode.__n, nextSibling.ownerSVGElement !== void 0, childContext.NULL5 != null ? [siblings] : null, parentNode, siblings ?? findNextSiblingElement(childContext), childContext.NULL5), procesCallback(parentNode, childContext), childContext.NULL3 != siblings && unmountComponent(childContext)), Mr.length > length && Mr.sort(ls));
    sortComponent.index = 0
}

function reconcile(parentNode, children, component, parentInstance, isSVG, parentContext, parentSiblings, nextSibling, ownerVNode, focusedVNode) {fp
    var i, child, oldVNode, key, newVNode, siblings, oldVNodeIndex, refStack = parentInstance && parentInstance.NULL || nf,
        nullArrayLength = refStack.length;
    for (component.NULL = [], i = 0; i < children.length; i++)
        if ((key = component.NULL[i] = (key = children[i]) == null || typeof key == "boolean" || typeof key == "function" ? null : typeof key == "string" || typeof key == "number" || typeof key == "bigint" ? creatDom(null, key, null, null, key) : isArray(key) ? creatDom(subDOM, {
                children: key
            }, null, null, null) : key.zero > 0 ? creatDom(key.type, key.props, key.key, key.ref ? key.ref : null, key.vnode1) : key) != null) {
            if (key.NULL2 = component, key.zero = component.zero + 1, (oldVNode = refStack[i]) === null || oldVNode && key.key == oldVNode.key && key.type === oldVNode.type) refStack[i] = void 0;
            else
                for (child = 0; child < nullArrayLength; child++) {
                    if ((oldVNode = refStack[child]) && key.key == oldVNode.key && key.type === oldVNode.type) {
                        refStack[child] = void 0;
                        break
                    }
                    oldVNode = null
                }
            renderComponent(parentNode, key, oldVNode = oldVNode || To, isSVG, parentContext, parentSiblings, nextSibling, ownerVNode, focusedVNode), newVNode = key.NULL3, (child = key.ref) && oldVNode.ref != child && (oldVNodeIndex || (oldVNodeIndex = []), oldVNode.ref && oldVNodeIndex.push(oldVNode.ref, null, key), oldVNodeIndex.push(child, key.NULL4 || newVNode, key)), newVNode != null ? (siblings == null && (siblings = newVNode), typeof key.type == "function" && key.NULL === oldVNode.NULL ? key.void0 = ownerVNode = traverseAndApply(key, ownerVNode, parentNode) : ownerVNode = updateComponent(parentNode, key, oldVNode, refStack, newVNode, ownerVNode), typeof component.type == "function" && (component.void0 = ownerVNode)) : ownerVNode && oldVNode.NULL3 == ownerVNode && ownerVNode.parentNode != parentNode && (ownerVNode = findNextSiblingElement(oldVNode))
        } for (component.NULL3 = siblings, i = nullArrayLength; i--;) refStack[i] != null && (typeof component.type == "function" && refStack[i].NULL3 != null && refStack[i].NULL3 == component.void0 && (component.void0 = findFirstChild(parentInstance).nextSibling), vf(refStack[i], refStack[i]));
    if (oldVNodeIndex)
        for (i = 0; i < oldVNodeIndex.length; i++) hf(oldVNodeIndex[i], oldVNodeIndex[++i], oldVNodeIndex[++i])
}

function traverseAndApply(component, nextSibling, parentNode) {
    for (var n, i = component.NULL, o = 0; i && o < i.length; o++)(n = i[o]) && (n.NULL2 = component, nextSibling = typeof n.type == "function" ? traverseAndApply(n, nextSibling, parentNode) : updateComponent(parentNode, n, n, i, n.NULL3, nextSibling));
    return nextSibling
}

function flattenNestedArray(input, output) {
    return output = output || [], input == null || typeof input == "boolean" || (isArray(input) ? input.some(function(item) {
        flattenNestedArray(item, output)
    }) : output.push(input)), output
}

function updateComponent(component, nextSibling, parentNode, n, i, o) {
    var a, s, d;
    if (nextSibling.void0 !== void 0) a = nextSibling.void0, nextSibling.void0 = void 0;
    else if (parentNode == null || i != o || i.parentNode == null) component: if (o == null || o.parentNode !== component) component.appendChild(i), a = null;
        else {
            for (s = o, d = 0;
                (s = s.nextSibling) && d < n.length; d += 1)
                if (s == i) break component;
            component.insertBefore(i, o), a = o
        } return a !== void 0 ? a : i.nextSibling
}

function findFirstChild(component) {
    var nextSibling, parentNode, n;
    if (component.type == null || typeof component.type == "string") return component.NULL3;
    if (component.NULL) {
        for (nextSibling = component.NULL.length - 1; nextSibling >= 0; nextSibling--)
            if ((parentNode = component.NULL[nextSibling]) && (n = findFirstChild(parentNode))) return n
    }
    return null
}

function updateProps(component, nextSibling, parentNode, n, i) {
    var o;
    for (o in parentNode) o === "children" || o === "key" || o in nextSibling || setAttribute(component, o, null, parentNode[o], n);
    for (o in nextSibling) i && typeof nextSibling[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || parentNode[o] === nextSibling[o] || setAttribute(component, o, nextSibling[o], parentNode[o], n)
}

function setStyle(component, nextSibling, parentNode) {
    nextSibling[0] === "-" ? component.setProperty(nextSibling, parentNode ?? "") : component[nextSibling] = parentNode == null ? "" : typeof parentNode != "number" || a0.test(nextSibling) ? parentNode : parentNode + "px"
}

function setAttribute(component, nextSibling, parentNode, n, i) {
    var o;
    component: if (nextSibling === "style")
        if (typeof parentNode == "string") component.style.cssText = parentNode;
        else {
            if (typeof n == "string" && (component.style.cssText = n = ""), n)
                for (nextSibling in n) parentNode && nextSibling in parentNode || setStyle(component.style, nextSibling, "");
            if (parentNode)
                for (nextSibling in parentNode) n && parentNode[nextSibling] === n[nextSibling] || setStyle(component.style, nextSibling, parentNode[nextSibling])
        }
    else if (nextSibling[0] === "o" && nextSibling[1] === "n") o = nextSibling !== (nextSibling = nextSibling.replace(/Capture$/, "")), nextSibling = nextSibling.toLowerCase() in component ? nextSibling.toLowerCase().slice(2) : nextSibling.slice(2), component.l || (component.l = {}), component.l[nextSibling + o] = parentNode, parentNode ? n || component.addEventListener(nextSibling, o ? handleEventCapture : handleEvent, o) : component.removeEventListener(nextSibling, o ? handleEventCapture : handleEvent, o);
    else if (nextSibling !== "dangerouslySetInnerHTML") {
        if (i) nextSibling = nextSibling.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (nextSibling !== "width" && nextSibling !== "height" && nextSibling !== "href" && nextSibling !== "list" && nextSibling !== "form" && nextSibling !== "tabIndex" && nextSibling !== "download" && nextSibling !== "rowSpan" && nextSibling !== "colSpan" && nextSibling in component) try {
            component[nextSibling] = parentNode ?? "";
            break component
        } catch {}
        typeof parentNode == "function" || (parentNode == null || parentNode === !1 && nextSibling[4] !== "-" ? component.removeAttribute(nextSibling) : component.setAttribute(nextSibling, parentNode))
    }
}

function handleEvent(component) {
    return this.l[component.type + !1](W.event ? W.event(component) : component)
}

function handleEventCapture(component) {
    return this.l[component.type + !0](W.event ? W.event(component) : component)
}


function c0(component, nextSibling, parentNode, n, i, o, a, s) {
    var d, f, c, p = parentNode.props,
        v = nextSibling.props,
        h = nextSibling.type,
        _ = 0;
    if (h === "svg" && (i = !0), o != null) {
        for (; _ < o.length; _++)
            if ((d = o[_]) && "setAttribute" in d == !!h && (h ? d.localName === h : d.nodeType === 3)) {
                component = d, o[_] = null;
                break
            }
    }
    if (component == null) {
        if (h === null) return document.createTextNode(v);
        component = i ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, v.is && v), o = null, s = !1
    }
    if (h === null) p === v || s && component.data === v || (component.data = v);
    else {
        if (o = o && wi.call(component.childNodes), f = (p = parentNode.props || To).dangerouslySetInnerHTML, c = v.dangerouslySetInnerHTML, !s) {
            if (o != null)
                for (p = {}, _ = 0; _ < component.attributes.length; _++) p[component.attributes[_].name] = component.attributes[_].value;
            (c || f) && (c && (f && c.__html == f.__html || c.__html === component.innerHTML) || (component.innerHTML = c && c.__html || ""))
        }
        if (updateProps(component, v, p, i, s), c) nextSibling.NULL = [];
        else if (reconcile(component, isArray(_ = nextSibling.props.children) ? _ : [_], nextSibling, parentNode, n, i && h !== "foreignObject", o, a, o ? o[0] : parentNode.NULL && findNextSiblingElement(parentNode, 0), s), o != null)
            for (_ = o.length; _--;) o[_] != null && removeNode(o[_]);
        s || ("value" in v && (_ = v.value) !== void 0 && (_ !== component.value || h === "progress" && !_ || h === "option" && _ !== p.value) && setAttribute(component, "value", _, p.value, !1), "checked" in v && (_ = v.checked) !== void 0 && _ !== component.checked && setAttribute(component, "checked", _, p.checked, !1))
    }
    return component
}

function hf(component, nextSibling, parentNode) {
    try {
        typeof component == "function" ? component(nextSibling) : component.current = nextSibling
    } catch (n) {
        W.NULL3(n, parentNode)
    }
}

function vf(component, nextSibling, parentNode) {
    var n, i;
    if (W.unmount && W.unmount(component), (n = component.ref) && (n.current && n.current !== component.NULL3 || hf(n, null, nextSibling)), (n = component.NULL4) != null) {
        if (n.componentWillUnmount) try {
            n.componentWillUnmount()
        } catch (o) {
            W.NULL3(o, nextSibling)
        }
        n.base = n.__P = null, component.NULL4 = void 0
    }
    if (n = component.NULL)
        for (i = 0; i < n.length; i++) n[i] && vf(n[i], nextSibling, parentNode || typeof component.type != "function");
    parentNode || component.NULL3 == null || removeNode(component.NULL3), component.NULL2 = component.NULL3 = component.void0 = void 0
}

function l0(component, nextSibling, parentNode) {
    return this.constructor(component, parentNode)
}
//组件渲染
function renderComponent(component, nextSibling, parentNode, n, i, o, a, s, d) {
    var f, c, p, v, h, _, y, S, w, x, R, I, E, N, C, T = nextSibling.type;
    if (nextSibling.constructor !== void 0) return null;
    parentNode.NULL5 != null && (d = parentNode.NULL5, s = nextSibling.NULL3 = parentNode.NULL3, nextSibling.NULL5 = null, o = [s]), (f = W.zero) && f(nextSibling);
    try {
        component: if (typeof T == "function") {
            if (S = nextSibling.props, w = (f = T.contextType) && n[f.NULL4], x = f ? w ? w.props.value : f.NULL2 : n, parentNode.NULL4 ? y = (c = nextSibling.NULL4 = parentNode.NULL4).NULL2 = c.__E : ("prototype" in T && T.prototype.render ? nextSibling.NULL4 = c = new T(S, x) : (nextSibling.NULL4 = c = new newInt(S, x), c.constructor = T, c.render = l0), w && w.sub(c), c.props = S, c.state || (c.state = {}), c.context = x, c.__n = n, p = c.void0 = !0, c.NULL5 = [], c._sb = []), c.__s == null && (c.__s = c.state), T.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = mergeObj({}, c.__s)), mergeObj(c.__s, T.getDerivedStateFromProps(S, c.__s))), v = c.props, h = c.state, c.vnode1 = nextSibling, p) T.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.NULL5.push(c.componentDidMount);
            else {
                if (T.getDerivedStateFromProps == null && S !== v && c.componentWillReceiveProps != null && c.componentWillReceiveProps(S, x), !c.NULL3 && c.shouldComponentUpdate != null && c.shouldComponentUpdate(S, c.__s, x) === !1 || nextSibling.vnode1 === parentNode.vnode1) {
                    for (nextSibling.vnode1 !== parentNode.vnode1 && (c.props = S, c.state = c.__s, c.void0 = !1), c.NULL3 = !1, nextSibling.NULL3 = parentNode.NULL3, nextSibling.NULL = parentNode.NULL, nextSibling.NULL.forEach(function(D) {
                            D && (D.NULL2 = nextSibling)
                        }), R = 0; R < c._sb.length; R++) c.NULL5.push(c._sb[R]);
                    c._sb = [], c.NULL5.length && a.push(c);
                    break component
                }
                c.componentWillUpdate != null && c.componentWillUpdate(S, c.__s, x), c.componentDidUpdate != null && c.NULL5.push(function() {
                    c.componentDidUpdate(v, h, _)
                })
            }
            if (c.context = x, c.props = S, c.__P = component, I = W.index, E = 0, "prototype" in T && T.prototype.render) {
                for (c.state = c.__s, c.void0 = !1, I && I(nextSibling), f = c.render(c.props, c.state, c.context), N = 0; N < c._sb.length; N++) c.NULL5.push(c._sb[N]);
                c._sb = []
            } else
                do c.void0 = !1, I && I(nextSibling), f = c.render(c.props, c.state, c.context), c.state = c.__s; while (c.void0 && ++E < 25);
            c.state = c.__s, c.getChildContext != null && (n = mergeObj(mergeObj({}, n), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (_ = c.getSnapshotBeforeUpdate(v, h)), reconcile(component, isArray(C = f != null && f.type === subDOM && f.key == null ? f.props.children : f) ? C : [C], nextSibling, parentNode, n, i, o, a, s, d), c.base = nextSibling.NULL3, nextSibling.NULL5 = null, c.NULL5.length && a.push(c), y && (c.__E = c.NULL2 = null), c.NULL3 = !1
        } else o == null && nextSibling.vnode1 === parentNode.vnode1 ? (nextSibling.NULL = parentNode.NULL, nextSibling.NULL3 = parentNode.NULL3) : nextSibling.NULL3 = c0(parentNode.NULL3, nextSibling, parentNode, n, i, o, a, d);
        (f = W.diffed) && f(nextSibling)
    }
    catch (D) {
        nextSibling.vnode1 = null, (d || o != null) && (nextSibling.NULL3 = s, nextSibling.NULL5 = !!d, o[o.indexOf(s)] = null), W.NULL3(D, nextSibling, parentNode)
    }
}
function procesCallback(component, nextSibling) {
    // 如果存在 NULL4 回调，则调用它
    W.NULL4 && W.NULL4(nextSibling, component),
    // 对于 component 数组中的每个父组件进行处理
    component.some(function(parentNode) {
        try {
            // 获取父节点中存储的回调函数数组
            component = parentNode.NULL5,
            // 清空存储的回调函数数组
            parentNode.NULL5 = [],
            // 执行 component 数组中的每个回调函数
            component.some(function(n) {
                n.call(parentNode)
            })
        } catch (error) {
            // 如果发生错误，调用 NULL3 回调，并传递错误和对应的 vnode1
            W.NULL3(error, parentNode.vnode1)
        }
    })
}
//封装子DOM，更方便地在组件中调用，提高代码的可读性和可维护性
function subDOM(DOM) {
    return DOM.children
}
// 创建根节点的 DOM
function createRootDOM(component, nextSibling, parentNode) {
    // 判断是否是函数作为父节点
    var isFunction = typeof parentNode == "function";
    // 获取上一个组件
    var previousComponent = nextSibling.NULL;
    // 判断是否是 SVG 元素
    var isSVG = nextSibling.ownerSVGElement !== void 0;
    // 确定插入节点的位置
    var insertBeforeNodes = !isFunction && parentNode ? [parentNode] : previousComponent ? null : nextSibling.firstChild ? Array.from(nextSibling.childNodes) : null;
    // 存储子组件的数组
    var array = [];
    // 渲染组件
    // renderComponent(nextSibling, component = (!isFunction && parentNode ? parentNode : nextSibling.NULL = createElement(subDOM, null, [component])), previousComponent || To, To, isSVG, insertBeforeNodes, array, !isFunction && parentNode ? parentNode : nextSibling || previousComponent || nextSibling.firstChild, isFunction);
    //调用renderComponent的写法
    renderComponent(
        nextSibling,
        //如果 isFunction 为假（即 false），并且 parentNode 存在，则将 parentNode 赋值给 component。否则，将使用 createElement 函数创建一个新的元素，该元素的类型是 subDOM，并且子元素是 [component]。然后，将这个新创建的元素赋值给 component。
        component = (!isFunction && parentNode ? parentNode : nextSibling.NULL = createElement(subDOM, null, [component])),
        //表示前一个组件或默认值 To，作为 renderComponent 函数的前一个组件参数。如果存在前一个组件，则使用该组件；否则使用默认值 To。
        previousComponent || To,
        //To：表示默认值 To，作为 renderComponent 函数的下一个兄弟节点参数。
        To,
        //isSVG：表示一个布尔值，指示是否在 SVG 环境中渲染组件。
        isSVG,
        //insertBeforeNodes：表示一个节点数组，用于指定组件的插入位置。如果存在可插入节点，则使用该数组；否则使用 null。
        insertBeforeNodes,
        //array：表示一个空数组，用于收集子组件。
        array,
        //这部分逻辑用于确定组件的父节点。如果 isFunction 为假且 parentNode 存在，则将 parentNode 作为组件的父节点。否则，通过逻辑运算符 || 的优先级来判断父节点的选择顺序。首先判断 nextSibling 是否存在，若存在则作为父节点；否则判断 previousComponent 是否存在，若存在则作为父节点；否则将 nextSibling.firstChild 作为父节点。
        !isFunction && parentNode ? parentNode : nextSibling || previousComponent || nextSibling.firstChild,
        //表示一个布尔值，指示组件是否是函数组件。
        isFunction
    )
    // 处理回调函数  
    procesCallback(array, component);
  }
  

function pf(component, nextSibling) {
    createRootDOM(component, nextSibling, pf)
}

function gf(component, nextSibling, parentNode) {
    var n, i, o, a, s = mergeObj({}, component.props);
    for (o in component.type && component.type.defaultProps && (a = component.type.defaultProps), nextSibling) o == "key" ? n = nextSibling[o] : o == "ref" ? i = nextSibling[o] : s[o] = nextSibling[o] === void 0 && a !== void 0 ? a[o] : nextSibling[o];
    return arguments.length > 2 && (s.children = arguments.length > 3 ? wi.call(arguments, 2) : parentNode), creatDom(component.type, s, n || component.key, i || component.ref, null)
}

function gt(component, nextSibling) {
    var parentNode = {
        NULL4: nextSibling = "__cC" + rf++,
        NULL2: component,
        Consumer: function(n, i) {
            return n.children(i)
        },
        Provider: function(n) {
            var i, o;
            return this.getChildContext || (i = [], (o = {})[nextSibling] = this, this.getChildContext = function() {
                return o
            }, this.shouldComponentUpdate = function(a) {
                this.props.value !== a.value && i.some(function(s) {
                    s.NULL3 = !0, enqueueRender(s)
                })
            }, this.sub = function(a) {
                i.push(a);
                var s = a.componentWillUnmount;
                a.componentWillUnmount = function() {
                    i.splice(i.indexOf(a), 1), s && s.call(a)
                }
            }), n.children
        }
    };
    return parentNode.Provider.NULL2 = parentNode.Consumer.contextType = parentNode
}
wi = nf.slice, W = {
    NULL3: function(component, nextSibling, parentNode, n) {
        for (var i, o, a; nextSibling = nextSibling.NULL2;)
            if ((i = nextSibling.NULL4) && !i.NULL2) try {
                if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(component)), a = i.void0), i.componentDidCatch != null && (i.componentDidCatch(component, n || {}), a = i.void0), a) return i.__E = i
            } catch (s) {
                component = s
            }
        throw component
    }
}, ef = 0, newInt.prototype.setState = function(component, nextSibling) {
    var parentNode;
    parentNode = this.__s != null && this.__s !== this.state ? this.__s : this.__s = mergeObj({}, this.state), typeof component == "function" && (component = component(mergeObj({}, parentNode), this.props)), component && mergeObj(parentNode, component), component != null && this.vnode1 && (nextSibling && this._sb.push(nextSibling), enqueueRender(this))
}, newInt.prototype.forceUpdate = function(component) {
    this.vnode1 && (this.NULL3 = !0, component && this.NULL5.push(component), enqueueRender(this))
}, newInt.prototype.render = subDOM, Mr = [], tf = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ls = function(component, nextSibling) {
    return component.vnode1.zero - nextSibling.vnode1.zero
}, sortComponent.index = 0, rf = 0;
var Qt, _e, Ma, Vc, Tn = 0,
    mf = [],
    ho = [],
    Zc = W.zero,
    Xc = W.index,
    qc = W.diffed,
    el = W.NULL4,
    tl = W.unmount;

function Gr(component, nextSibling) {
    W.NULL5 && W.NULL5(_e, component, Tn || nextSibling), Tn = 0;
    var parentNode = _e.__H || (_e.__H = {
        NULL2: [],
        NULL5: []
    });
    return component >= parentNode.NULL2.length && parentNode.NULL2.push({
        __V: ho
    }), parentNode.NULL2[component]
}

function ie(component) {
    return Tn = 1, rc(yf, component)
}

function rc(component, nextSibling, parentNode) {
    var n = Gr(Qt++, 2);
    if (n.nextSibling = component, !n.NULL4 && (n.NULL2 = [parentNode ? parentNode(nextSibling) : yf(void 0, nextSibling), function(s) {
            var d = n.__N ? n.__N[0] : n.NULL2[0],
                f = n.nextSibling(d, s);
            d !== f && (n.__N = [f, n.NULL2[1]], n.NULL4.setState({}))
        }], n.NULL4 = _e, !_e.u)) {
        var i = function(s, d, f) {
            if (!n.NULL4.__H) return !0;
            var c = n.NULL4.__H.NULL2.filter(function(v) {
                return v.NULL4
            });
            if (c.every(function(v) {
                    return !v.__N
                })) return !o || o.call(this, s, d, f);
            var p = !1;
            return c.forEach(function(v) {
                if (v.__N) {
                    var h = v.NULL2[0];
                    v.NULL2 = v.__N, v.__N = void 0, h !== v.NULL2[0] && (p = !0)
                }
            }), !(!p && n.NULL4.props === s) && (!o || o.call(this, s, d, f))
        };
        _e.u = !0;
        var o = _e.shouldComponentUpdate,
            a = _e.componentWillUpdate;
        _e.componentWillUpdate = function(s, d, f) {
            if (this.NULL3) {
                var c = o;
                o = void 0, i(s, d, f), o = c
            }
            a && a.call(this, s, d, f)
        }, _e.shouldComponentUpdate = i
    }
    return n.__N || n.NULL2
}

function be(component, nextSibling) {
    var parentNode = Gr(Qt++, 3);
    !W.__s && nc(parentNode.__H, nextSibling) && (parentNode.NULL2 = component, parentNode.i = nextSibling, _e.__H.NULL5.push(parentNode))
}

function Jr(component, nextSibling) {
    var parentNode = Gr(Qt++, 4);
    !W.__s && nc(parentNode.__H, nextSibling) && (parentNode.NULL2 = component, parentNode.i = nextSibling, _e.NULL5.push(parentNode))
}

function q(component) {
    return Tn = 5, $component(function() {
        return {
            current: component
        }
    }, [])
}

function Kr(component, nextSibling, parentNode) {
    Tn = 6, Jr(function() {
        return typeof component == "function" ? (component(nextSibling()), function() {
            return component(null)
        }) : component ? (component.current = nextSibling(), function() {
            return component.current = null
        }) : void 0
    }, parentNode == null ? parentNode : parentNode.concat(component))
}

function $component(component, nextSibling) {
    var parentNode = Gr(Qt++, 7);
    return nc(parentNode.__H, nextSibling) ? (parentNode.__V = component(), parentNode.i = nextSibling, parentNode.NULL5 = component, parentNode.__V) : parentNode.NULL2
}

function Qe(component, nextSibling) {
    return Tn = 8, $component(function() {
        return component
    }, nextSibling)
}

function Be(component) {
    var nextSibling = _e.context[component.NULL4],
        parentNode = Gr(Qt++, 9);
    return parentNode.c = component, nextSibling ? (parentNode.NULL2 == null && (parentNode.NULL2 = !0, nextSibling.sub(_e)), nextSibling.props.value) : component.NULL2
}

function _f(component, nextSibling) {
    W.useDebugValue && W.useDebugValue(nextSibling ? nextSibling(component) : component)
}

function u0(component) {
    var nextSibling = Gr(Qt++, 10),
        parentNode = ie();
    return nextSibling.NULL2 = component, _e.componentDidCatch || (_e.componentDidCatch = function(n, i) {
        nextSibling.NULL2 && nextSibling.NULL2(n, i), parentNode[1](n)
    }), [parentNode[0], function() {
        parentNode[1](void 0)
    }]
}

function bf() {
    var component = Gr(Qt++, 11);
    if (!component.NULL2) {
        for (var nextSibling = _e.vnode1; nextSibling !== null && !nextSibling.__m && nextSibling.NULL2 !== null;) nextSibling = nextSibling.NULL2;
        var parentNode = nextSibling.__m || (nextSibling.__m = [0, 0]);
        component.NULL2 = "P" + parentNode[0] + "-" + parentNode[1]++
    }
    return component.NULL2
}

function f0() {
    for (var component; component = mf.shift();)
        if (component.__P && component.__H) try {
            component.__H.NULL5.forEach(vo), component.__H.NULL5.forEach(fs), component.__H.NULL5 = []
        } catch (nextSibling) {
            component.__H.NULL5 = [], W.NULL3(nextSibling, component.vnode1)
        }
}
W.zero = function(component) {
    _e = null, Zc && Zc(component)
}, W.index = function(component) {
    Xc && Xc(component), Qt = 0;
    var nextSibling = (_e = component.NULL4).__H;
    nextSibling && (Ma === _e ? (nextSibling.NULL5 = [], _e.NULL5 = [], nextSibling.NULL2.forEach(function(parentNode) {
        parentNode.__N && (parentNode.NULL2 = parentNode.__N), parentNode.__V = ho, parentNode.__N = parentNode.i = void 0
    })) : (nextSibling.NULL5.forEach(vo), nextSibling.NULL5.forEach(fs), nextSibling.NULL5 = [], Qt = 0)), Ma = _e
}, W.diffed = function(component) {
    qc && qc(component);
    var nextSibling = component.NULL4;
    nextSibling && nextSibling.__H && (nextSibling.__H.NULL5.length && (mf.push(nextSibling) !== 1 && Vc === W.requestAnimationFrame || ((Vc = W.requestAnimationFrame) || d0)(f0)), nextSibling.__H.NULL2.forEach(function(parentNode) {
        parentNode.i && (parentNode.__H = parentNode.i), parentNode.__V !== ho && (parentNode.NULL2 = parentNode.__V), parentNode.i = void 0, parentNode.__V = ho
    })), Ma = _e = null
}, W.NULL4 = function(component, nextSibling) {
    nextSibling.some(function(parentNode) {
        try {
            parentNode.NULL5.forEach(vo), parentNode.NULL5 = parentNode.NULL5.filter(function(n) {
                return !n.NULL2 || fs(n)
            })
        } catch (n) {
            nextSibling.some(function(i) {
                i.NULL5 && (i.NULL5 = [])
            }), nextSibling = [], W.NULL3(n, parentNode.vnode1)
        }
    }), el && el(component, nextSibling)
}, W.unmount = function(component) {
    tl && tl(component);
    var nextSibling, parentNode = component.NULL4;
    parentNode && parentNode.__H && (parentNode.__H.NULL2.forEach(function(n) {
        try {
            vo(n)
        } catch (i) {
            nextSibling = i
        }
    }), parentNode.__H = void 0, nextSibling && W.NULL3(nextSibling, parentNode.vnode1))
};
var rl = typeof requestAnimationFrame == "function";

function d0(component) {
    var nextSibling, parentNode = function() {
            clearTimeout(n), rl && cancelAnimationFrame(nextSibling), setTimeout(component)
        },
        n = setTimeout(parentNode, 100);
    rl && (nextSibling = requestAnimationFrame(parentNode))
}

function vo(component) {
    var nextSibling = _e,
        parentNode = component.NULL4;
    typeof parentNode == "function" && (component.NULL4 = void 0, parentNode()), _e = nextSibling
}

function fs(component) {
    var nextSibling = _e;
    component.NULL4 = component.NULL2(), _e = nextSibling
}

function nc(component, nextSibling) {
    return !component || component.length !== nextSibling.length || nextSibling.some(function(parentNode, n) {
        return parentNode !== component[n]
    })
}

function yf(component, nextSibling) {
    return typeof nextSibling == "function" ? nextSibling(component) : nextSibling
}

function wf(component) {
    return component && component.__esModule && Object.prototype.hasOwnProperty.call(component, "default") ? component.default : component
}
var xf = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(component) {
    (function() {
        var nextSibling = {}.hasOwnProperty;

        function parentNode() {
            for (var n = [], i = 0; i < arguments.length; i++) {
                var o = arguments[i];
                if (o) {
                    var a = typeof o;
                    if (a === "string" || a === "number") n.push(o);
                    else if (Array.isArray(o)) {
                        if (o.length) {
                            var s = parentNode.apply(null, o);
                            s && n.push(s)
                        }
                    } else if (a === "object") {
                        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
                            n.push(o.toString());
                            continue
                        }
                        for (var d in o) nextSibling.call(o, d) && o[d] && n.push(d)
                    }
                }
            }
            return n.join(" ")
        }
        component.exports ? (parentNode.default = parentNode, component.exports = parentNode) : window.classNames = parentNode
    })()
})(xf);
var h0 = xf.exports;
const he = wf(h0);

function Ia() {
    const component = document.querySelector(".auto-midjourney-panel-prompt");
    component && (component.scrollTop = component.scrollHeight)
}
var Yt = {};
(function(component) {
    var nextSibling = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";

    function parentNode(o, a) {
        return Object.prototype.hasOwnProperty.call(o, a)
    }
    component.assign = function(o) {
        for (var a = Array.prototype.slice.call(arguments, 1); a.length;) {
            var s = a.shift();
            if (s) {
                if (typeof s != "object") throw new TypeError(s + "must be non-object");
                for (var d in s) parentNode(s, d) && (o[d] = s[d])
            }
        }
        return o
    }, component.shrinkBuf = function(o, a) {
        return o.length === a ? o : o.subarray ? o.subarray(0, a) : (o.length = a, o)
    };
    var n = {
            arraySet: function(o, a, s, d, f) {
                if (a.subarray && o.subarray) {
                    o.set(a.subarray(s, s + d), f);
                    return
                }
                for (var c = 0; c < d; c++) o[f + c] = a[s + c]
            },
            flattenChunks: function(o) {
                var a, s, d, f, c, p;
                for (d = 0, a = 0, s = o.length; a < s; a++) d += o[a].length;
                for (p = new Uint8Array(d), f = 0, a = 0, s = o.length; a < s; a++) c = o[a], p.set(c, f), f += c.length;
                return p
            }
        },
        i = {
            arraySet: function(o, a, s, d, f) {
                for (var c = 0; c < d; c++) o[f + c] = a[s + c]
            },
            flattenChunks: function(o) {
                return [].concat.apply([], o)
            }
        };
    component.setTyped = function(o) {
        o ? (component.Buf8 = Uint8Array, component.Buf16 = Uint16Array, component.Buf32 = Int32Array, component.assign(component, n)) : (component.Buf8 = Array, component.Buf16 = Array, component.Buf32 = Array, component.assign(component, i))
    }, component.setTyped(nextSibling)
})(Yt);
var xi = {},
    Ft = {},
    On = {},
    v0 = Yt,
    p0 = 4,
    nl = 0,
    il = 1,
    g0 = 2;

function Rn(component) {
    for (var nextSibling = component.length; --nextSibling >= 0;) component[nextSibling] = 0
}
var m0 = 0,
    Sf = 1,
    _0 = 2,
    b0 = 3,
    y0 = 258,
    ic = 29,
    Si = 256,
    ui = Si + 1 + ic,
    yn = 30,
    oc = 19,
    Ef = 2 * ui + 1,
    Rr = 15,
    Oa = 16,
    w0 = 7,
    ac = 256,
    Af = 16,
    Cf = 17,
    Tf = 18,
    ds = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    po = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    x0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    kf = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    S0 = 512,
    $nextSibling = new Array((ui + 2) * 2);
Rn($nextSibling);
var ti = new Array(yn * 2);
Rn(ti);
var fi = new Array(S0);
Rn(fi);
var di = new Array(y0 - b0 + 1);
Rn(di);
var sc = new Array(ic);
Rn(sc);
var Io = new Array(yn);
Rn(Io);

function Ra(component, nextSibling, parentNode, n, i) {
    this.static_tree = component, this.extra_bits = nextSibling, this.extra_base = parentNode, this.elems = n, this.max_length = i, this.has_stree = component && component.length
}
var Mf, If, Of;

function Na(component, nextSibling) {
    this.dyn_tree = component, this.max_code = 0, this.stat_desc = nextSibling
}

function Rf(component) {
    return component < 256 ? fi[component] : fi[256 + (component >>> 7)]
}

function hi(component, nextSibling) {
    component.pending_buf[component.pending++] = nextSibling & 255, component.pending_buf[component.pending++] = nextSibling >>> 8 & 255
}

function et(component, nextSibling, parentNode) {
    component.bi_valid > Oa - parentNode ? (component.bi_buf |= nextSibling << component.bi_valid & 65535, hi(component, component.bi_buf), component.bi_buf = nextSibling >> Oa - component.bi_valid, component.bi_valid += parentNode - Oa) : (component.bi_buf |= nextSibling << component.bi_valid & 65535, component.bi_valid += parentNode)
}

function Rt(component, nextSibling, parentNode) {
    et(component, parentNode[nextSibling * 2], parentNode[nextSibling * 2 + 1])
}

function Nf(component, nextSibling) {
    var parentNode = 0;
    do parentNode |= component & 1, component >>>= 1, parentNode <<= 1; while (--nextSibling > 0);
    return parentNode >>> 1
}

function E0(component) {
    component.bi_valid === 16 ? (hi(component, component.bi_buf), component.bi_buf = 0, component.bi_valid = 0) : component.bi_valid >= 8 && (component.pending_buf[component.pending++] = component.bi_buf & 255, component.bi_buf >>= 8, component.bi_valid -= 8)
}

function A0(component, nextSibling) {
    var parentNode = nextSibling.dyn_tree,
        n = nextSibling.max_code,
        i = nextSibling.stat_desc.static_tree,
        o = nextSibling.stat_desc.has_stree,
        a = nextSibling.stat_desc.extra_bits,
        s = nextSibling.stat_desc.extra_base,
        d = nextSibling.stat_desc.max_length,
        f, c, p, v, h, _, y = 0;
    for (v = 0; v <= Rr; v++) component.bl_count[v] = 0;
    for (parentNode[component.heap[component.heap_max] * 2 + 1] = 0, f = component.heap_max + 1; f < Ef; f++) c = component.heap[f], v = parentNode[parentNode[c * 2 + 1] * 2 + 1] + 1, v > d && (v = d, y++), parentNode[c * 2 + 1] = v, !(c > n) && (component.bl_count[v]++, h = 0, c >= s && (h = a[c - s]), _ = parentNode[c * 2], component.opt_len += _ * (v + h), o && (component.static_len += _ * (i[c * 2 + 1] + h)));
    if (y !== 0) {
        do {
            for (v = d - 1; component.bl_count[v] === 0;) v--;
            component.bl_count[v]--, component.bl_count[v + 1] += 2, component.bl_count[d]--, y -= 2
        } while (y > 0);
        for (v = d; v !== 0; v--)
            for (c = component.bl_count[v]; c !== 0;) p = component.heap[--f], !(p > n) && (parentNode[p * 2 + 1] !== v && (component.opt_len += (v - parentNode[p * 2 + 1]) * parentNode[p * 2], parentNode[p * 2 + 1] = v), c--)
    }
}

function Lf(component, nextSibling, parentNode) {
    var n = new Array(Rr + 1),
        i = 0,
        o, a;
    for (o = 1; o <= Rr; o++) n[o] = i = i + parentNode[o - 1] << 1;
    for (a = 0; a <= nextSibling; a++) {
        var s = component[a * 2 + 1];
        s !== 0 && (component[a * 2] = Nf(n[s]++, s))
    }
}

function C0() {
    var component, nextSibling, parentNode, n, i, o = new Array(Rr + 1);
    for (parentNode = 0, n = 0; n < ic - 1; n++)
        for (sc[n] = parentNode, component = 0; component < 1 << ds[n]; component++) di[parentNode++] = n;
    for (di[parentNode - 1] = n, i = 0, n = 0; n < 16; n++)
        for (Io[n] = i, component = 0; component < 1 << po[n]; component++) fi[i++] = n;
    for (i >>= 7; n < yn; n++)
        for (Io[n] = i << 7, component = 0; component < 1 << po[n] - 7; component++) fi[256 + i++] = n;
    for (nextSibling = 0; nextSibling <= Rr; nextSibling++) o[nextSibling] = 0;
    for (component = 0; component <= 143;) $nextSibling[component * 2 + 1] = 8, component++, o[8]++;
    for (; component <= 255;) $nextSibling[component * 2 + 1] = 9, component++, o[9]++;
    for (; component <= 279;) $nextSibling[component * 2 + 1] = 7, component++, o[7]++;
    for (; component <= 287;) $nextSibling[component * 2 + 1] = 8, component++, o[8]++;
    for (Lf($nextSibling, ui + 1, o), component = 0; component < yn; component++) ti[component * 2 + 1] = 5, ti[component * 2] = Nf(component, 5);
    Mf = new Ra($nextSibling, ds, Si + 1, ui, Rr), If = new Ra(ti, po, 0, yn, Rr), Of = new Ra(new Array(0), x0, 0, oc, w0)
}

function Pf(component) {
    var nextSibling;
    for (nextSibling = 0; nextSibling < ui; nextSibling++) component.dyn_ltree[nextSibling * 2] = 0;
    for (nextSibling = 0; nextSibling < yn; nextSibling++) component.dyn_dtree[nextSibling * 2] = 0;
    for (nextSibling = 0; nextSibling < oc; nextSibling++) component.bl_tree[nextSibling * 2] = 0;
    component.dyn_ltree[ac * 2] = 1, component.opt_len = component.static_len = 0, component.last_lit = component.matches = 0
}

function Df(component) {
    component.bi_valid > 8 ? hi(component, component.bi_buf) : component.bi_valid > 0 && (component.pending_buf[component.pending++] = component.bi_buf), component.bi_buf = 0, component.bi_valid = 0
}

function T0(component, nextSibling, parentNode, n) {
    Df(component), n && (hi(component, parentNode), hi(component, ~parentNode)), v0.arraySet(component.pending_buf, component.window, nextSibling, parentNode, component.pending), component.pending += parentNode
}

function ol(component, nextSibling, parentNode, n) {
    var i = nextSibling * 2,
        o = parentNode * 2;
    return component[i] < component[o] || component[i] === component[o] && n[nextSibling] <= n[parentNode]
}

function La(component, nextSibling, parentNode) {
    for (var n = component.heap[parentNode], i = parentNode << 1; i <= component.heap_len && (i < component.heap_len && ol(nextSibling, component.heap[i + 1], component.heap[i], component.depth) && i++, !ol(nextSibling, n, component.heap[i], component.depth));) component.heap[parentNode] = component.heap[i], parentNode = i, i <<= 1;
    component.heap[parentNode] = n
}

function al(component, nextSibling, parentNode) {
    var n, i, o = 0,
        a, s;
    if (component.last_lit !== 0)
        do n = component.pending_buf[component.d_buf + o * 2] << 8 | component.pending_buf[component.d_buf + o * 2 + 1], i = component.pending_buf[component.l_buf + o], o++, n === 0 ? Rt(component, i, nextSibling) : (a = di[i], Rt(component, a + Si + 1, nextSibling), s = ds[a], s !== 0 && (i -= sc[a], et(component, i, s)), n--, a = Rf(n), Rt(component, a, parentNode), s = po[a], s !== 0 && (n -= Io[a], et(component, n, s))); while (o < component.last_lit);
    Rt(component, ac, nextSibling)
}

function hs(component, nextSibling) {
    var parentNode = nextSibling.dyn_tree,
        n = nextSibling.stat_desc.static_tree,
        i = nextSibling.stat_desc.has_stree,
        o = nextSibling.stat_desc.elems,
        a, s, d = -1,
        f;
    for (component.heap_len = 0, component.heap_max = Ef, a = 0; a < o; a++) parentNode[a * 2] !== 0 ? (component.heap[++component.heap_len] = d = a, component.depth[a] = 0) : parentNode[a * 2 + 1] = 0;
    for (; component.heap_len < 2;) f = component.heap[++component.heap_len] = d < 2 ? ++d : 0, parentNode[f * 2] = 1, component.depth[f] = 0, component.opt_len--, i && (component.static_len -= n[f * 2 + 1]);
    for (nextSibling.max_code = d, a = component.heap_len >> 1; a >= 1; a--) La(component, parentNode, a);
    f = o;
    do a = component.heap[1], component.heap[1] = component.heap[component.heap_len--], La(component, parentNode, 1), s = component.heap[1], component.heap[--component.heap_max] = a, component.heap[--component.heap_max] = s, parentNode[f * 2] = parentNode[a * 2] + parentNode[s * 2], component.depth[f] = (component.depth[a] >= component.depth[s] ? component.depth[a] : component.depth[s]) + 1, parentNode[a * 2 + 1] = parentNode[s * 2 + 1] = f, component.heap[1] = f++, La(component, parentNode, 1); while (component.heap_len >= 2);
    component.heap[--component.heap_max] = component.heap[1], A0(component, nextSibling), Lf(parentNode, d, component.bl_count)
}

function sl(component, nextSibling, parentNode) {
    var n, i = -1,
        o, a = nextSibling[0 * 2 + 1],
        s = 0,
        d = 7,
        f = 4;
    for (a === 0 && (d = 138, f = 3), nextSibling[(parentNode + 1) * 2 + 1] = 65535, n = 0; n <= parentNode; n++) o = a, a = nextSibling[(n + 1) * 2 + 1], !(++s < d && o === a) && (s < f ? component.bl_tree[o * 2] += s : o !== 0 ? (o !== i && component.bl_tree[o * 2]++, component.bl_tree[Af * 2]++) : s <= 10 ? component.bl_tree[Cf * 2]++ : component.bl_tree[Tf * 2]++, s = 0, i = o, a === 0 ? (d = 138, f = 3) : o === a ? (d = 6, f = 3) : (d = 7, f = 4))
}

function cl(component, nextSibling, parentNode) {
    var n, i = -1,
        o, a = nextSibling[0 * 2 + 1],
        s = 0,
        d = 7,
        f = 4;
    for (a === 0 && (d = 138, f = 3), n = 0; n <= parentNode; n++)
        if (o = a, a = nextSibling[(n + 1) * 2 + 1], !(++s < d && o === a)) {
            if (s < f)
                do Rt(component, o, component.bl_tree); while (--s !== 0);
            else o !== 0 ? (o !== i && (Rt(component, o, component.bl_tree), s--), Rt(component, Af, component.bl_tree), et(component, s - 3, 2)) : s <= 10 ? (Rt(component, Cf, component.bl_tree), et(component, s - 3, 3)) : (Rt(component, Tf, component.bl_tree), et(component, s - 11, 7));
            s = 0, i = o, a === 0 ? (d = 138, f = 3) : o === a ? (d = 6, f = 3) : (d = 7, f = 4)
        }
}

function k0(component) {
    var nextSibling;
    for (sl(component, component.dyn_ltree, component.l_desc.max_code), sl(component, component.dyn_dtree, component.d_desc.max_code), hs(component, component.bl_desc), nextSibling = oc - 1; nextSibling >= 3 && component.bl_tree[kf[nextSibling] * 2 + 1] === 0; nextSibling--);
    return component.opt_len += 3 * (nextSibling + 1) + 5 + 5 + 4, nextSibling
}

function M0(component, nextSibling, parentNode, n) {
    var i;
    for (et(component, nextSibling - 257, 5), et(component, parentNode - 1, 5), et(component, n - 4, 4), i = 0; i < n; i++) et(component, component.bl_tree[kf[i] * 2 + 1], 3);
    cl(component, component.dyn_ltree, nextSibling - 1), cl(component, component.dyn_dtree, parentNode - 1)
}

function I0(component) {
    var nextSibling = 4093624447,
        parentNode;
    for (parentNode = 0; parentNode <= 31; parentNode++, nextSibling >>>= 1)
        if (nextSibling & 1 && component.dyn_ltree[parentNode * 2] !== 0) return nl;
    if (component.dyn_ltree[9 * 2] !== 0 || component.dyn_ltree[10 * 2] !== 0 || component.dyn_ltree[13 * 2] !== 0) return il;
    for (parentNode = 32; parentNode < Si; parentNode++)
        if (component.dyn_ltree[parentNode * 2] !== 0) return il;
    return nl
}
var ll = !1;

function O0(component) {
    ll || (C0(), ll = !0), component.l_desc = new Na(component.dyn_ltree, Mf), component.d_desc = new Na(component.dyn_dtree, If), component.bl_desc = new Na(component.bl_tree, Of), component.bi_buf = 0, component.bi_valid = 0, Pf(component)
}

function Ff(component, nextSibling, parentNode, n) {
    et(component, (m0 << 1) + (n ? 1 : 0), 3), T0(component, nextSibling, parentNode, !0)
}

function R0(component) {
    et(component, Sf << 1, 3), Rt(component, ac, $nextSibling), E0(component)
}

function N0(component, nextSibling, parentNode, n) {
    var i, o, a = 0;
    component.level > 0 ? (component.strm.data_type === g0 && (component.strm.data_type = I0(component)), hs(component, component.l_desc), hs(component, component.d_desc), a = k0(component), i = component.opt_len + 3 + 7 >>> 3, o = component.static_len + 3 + 7 >>> 3, o <= i && (i = o)) : i = o = parentNode + 5, parentNode + 4 <= i && nextSibling !== -1 ? Ff(component, nextSibling, parentNode, n) : component.strategy === p0 || o === i ? (et(component, (Sf << 1) + (n ? 1 : 0), 3), al(component, $nextSibling, ti)) : (et(component, (_0 << 1) + (n ? 1 : 0), 3), M0(component, component.l_desc.max_code + 1, component.d_desc.max_code + 1, a + 1), al(component, component.dyn_ltree, component.dyn_dtree)), Pf(component), n && Df(component)
}

function L0(component, nextSibling, parentNode) {
    return component.pending_buf[component.d_buf + component.last_lit * 2] = nextSibling >>> 8 & 255, component.pending_buf[component.d_buf + component.last_lit * 2 + 1] = nextSibling & 255, component.pending_buf[component.l_buf + component.last_lit] = parentNode & 255, component.last_lit++, nextSibling === 0 ? component.dyn_ltree[parentNode * 2]++ : (component.matches++, nextSibling--, component.dyn_ltree[(di[parentNode] + Si + 1) * 2]++, component.dyn_dtree[Rf(nextSibling) * 2]++), component.last_lit === component.lit_bufsize - 1
}
On._tr_init = O0;
On._tr_stored_block = Ff;
On._tr_flush_block = N0;
On._tr_tally = L0;
On._tr_align = R0;

function P0(component, nextSibling, parentNode, n) {
    for (var i = component & 65535 | 0, o = component >>> 16 & 65535 | 0, a = 0; parentNode !== 0;) {
        a = parentNode > 2e3 ? 2e3 : parentNode, parentNode -= a;
        do i = i + nextSibling[n++] | 0, o = o + i | 0; while (--a);
        i %= 65521, o %= 65521
    }
    return i | o << 16 | 0
}
var Bf = P0;

function D0() {
    for (var component, nextSibling = [], parentNode = 0; parentNode < 256; parentNode++) {
        component = parentNode;
        for (var n = 0; n < 8; n++) component = component & 1 ? 3988292384 ^ component >>> 1 : component >>> 1;
        nextSibling[parentNode] = component
    }
    return nextSibling
}
var F0 = D0();

function B0(component, nextSibling, parentNode, n) {
    var i = F0,
        o = n + parentNode;
    component ^= -1;
    for (var a = n; a < o; a++) component = component >>> 8 ^ i[(component ^ nextSibling[a]) & 255];
    return component ^ -1
}
var zf = B0,
    cc = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    },
    Ye = Yt,
    ft = On,
    jf = Bf,
    ar = zf,
    z0 = cc,
    Qr = 0,
    j0 = 1,
    H0 = 3,
    vr = 4,
    ul = 5,
    Nt = 0,
    fl = 1,
    dt = -2,
    U0 = -3,
    Pa = -5,
    $0 = -1,
    W0 = 1,
    Yi = 2,
    G0 = 3,
    J0 = 4,
    K0 = 0,
    Q0 = 2,
    Wo = 8,
    Y0 = 9,
    V0 = 15,
    Z0 = 8,
    X0 = 29,
    q0 = 256,
    vs = q0 + 1 + X0,
    ev = 30,
    tv = 19,
    rv = 2 * vs + 1,
    nv = 15,
    se = 3,
    ur = 258,
    wt = ur + se + 1,
    iv = 32,
    Go = 42,
    ps = 69,
    go = 73,
    mo = 91,
    _o = 103,
    Nr = 113,
    Vn = 666,
    Pe = 1,
    Ei = 2,
    Fr = 3,
    Nn = 4,
    ov = 3;

function fr(component, nextSibling) {
    return component.msg = z0[nextSibling], nextSibling
}

function dl(component) {
    return (component << 1) - (component > 4 ? 9 : 0)
}

function lr(component) {
    for (var nextSibling = component.length; --nextSibling >= 0;) component[nextSibling] = 0
}

function sr(component) {
    var nextSibling = component.state,
        parentNode = nextSibling.pending;
    parentNode > component.avail_out && (parentNode = component.avail_out), parentNode !== 0 && (Ye.arraySet(component.output, nextSibling.pending_buf, nextSibling.pending_out, parentNode, component.next_out), component.next_out += parentNode, nextSibling.pending_out += parentNode, component.total_out += parentNode, component.avail_out -= parentNode, nextSibling.pending -= parentNode, nextSibling.pending === 0 && (nextSibling.pending_out = 0))
}

function Ue(component, nextSibling) {
    ft._tr_flush_block(component, component.block_start >= 0 ? component.block_start : -1, component.strstart - component.block_start, nextSibling), component.block_start = component.strstart, sr(component.strm)
}

function de(component, nextSibling) {
    component.pending_buf[component.pending++] = nextSibling
}

function Gn(component, nextSibling) {
    component.pending_buf[component.pending++] = nextSibling >>> 8 & 255, component.pending_buf[component.pending++] = nextSibling & 255
}

function av(component, nextSibling, parentNode, n) {
    var i = component.avail_in;
    return i > n && (i = n), i === 0 ? 0 : (component.avail_in -= i, Ye.arraySet(nextSibling, component.input, component.next_in, i, parentNode), component.state.wrap === 1 ? component.adler = jf(component.adler, nextSibling, i, parentNode) : component.state.wrap === 2 && (component.adler = ar(component.adler, nextSibling, i, parentNode)), component.next_in += i, component.total_in += i, i)
}

function Hf(component, nextSibling) {
    var parentNode = component.max_chain_length,
        n = component.strstart,
        i, o, a = component.prev_length,
        s = component.nice_match,
        d = component.strstart > component.w_size - wt ? component.strstart - (component.w_size - wt) : 0,
        f = component.window,
        c = component.w_mask,
        p = component.prev,
        v = component.strstart + ur,
        h = f[n + a - 1],
        _ = f[n + a];
    component.prev_length >= component.good_match && (parentNode >>= 2), s > component.lookahead && (s = component.lookahead);
    do
        if (i = nextSibling, !(f[i + a] !== _ || f[i + a - 1] !== h || f[i] !== f[n] || f[++i] !== f[n + 1])) {
            n += 2, i++;
            do; while (f[++n] === f[++i] && f[++n] === f[++i] && f[++n] === f[++i] && f[++n] === f[++i] && f[++n] === f[++i] && f[++n] === f[++i] && f[++n] === f[++i] && f[++n] === f[++i] && n < v);
            if (o = ur - (v - n), n = v - ur, o > a) {
                if (component.match_start = nextSibling, a = o, o >= s) break;
                h = f[n + a - 1], _ = f[n + a]
            }
        } while ((nextSibling = p[nextSibling & c]) > d && --parentNode !== 0);
    return a <= component.lookahead ? a : component.lookahead
}

function Br(component) {
    var nextSibling = component.w_size,
        parentNode, n, i, o, a;
    do {
        if (o = component.window_size - component.lookahead - component.strstart, component.strstart >= nextSibling + (nextSibling - wt)) {
            Ye.arraySet(component.window, component.window, nextSibling, nextSibling, 0), component.match_start -= nextSibling, component.strstart -= nextSibling, component.block_start -= nextSibling, n = component.hash_size, parentNode = n;
            do i = component.head[--parentNode], component.head[parentNode] = i >= nextSibling ? i - nextSibling : 0; while (--n);
            n = nextSibling, parentNode = n;
            do i = component.prev[--parentNode], component.prev[parentNode] = i >= nextSibling ? i - nextSibling : 0; while (--n);
            o += nextSibling
        }
        if (component.strm.avail_in === 0) break;
        if (n = av(component.strm, component.window, component.strstart + component.lookahead, o), component.lookahead += n, component.lookahead + component.insert >= se)
            for (a = component.strstart - component.insert, component.ins_h = component.window[a], component.ins_h = (component.ins_h << component.hash_shift ^ component.window[a + 1]) & component.hash_mask; component.insert && (component.ins_h = (component.ins_h << component.hash_shift ^ component.window[a + se - 1]) & component.hash_mask, component.prev[a & component.w_mask] = component.head[component.ins_h], component.head[component.ins_h] = a, a++, component.insert--, !(component.lookahead + component.insert < se)););
    } while (component.lookahead < wt && component.strm.avail_in !== 0)
}

function sv(component, nextSibling) {
    var parentNode = 65535;
    for (parentNode > component.pending_buf_size - 5 && (parentNode = component.pending_buf_size - 5);;) {
        if (component.lookahead <= 1) {
            if (Br(component), component.lookahead === 0 && nextSibling === Qr) return Pe;
            if (component.lookahead === 0) break
        }
        component.strstart += component.lookahead, component.lookahead = 0;
        var n = component.block_start + parentNode;
        if ((component.strstart === 0 || component.strstart >= n) && (component.lookahead = component.strstart - n, component.strstart = n, Ue(component, !1), component.strm.avail_out === 0) || component.strstart - component.block_start >= component.w_size - wt && (Ue(component, !1), component.strm.avail_out === 0)) return Pe
    }
    return component.insert = 0, nextSibling === vr ? (Ue(component, !0), component.strm.avail_out === 0 ? Fr : Nn) : (component.strstart > component.block_start && (Ue(component, !1), component.strm.avail_out === 0), Pe)
}

function Da(component, nextSibling) {
    for (var parentNode, n;;) {
        if (component.lookahead < wt) {
            if (Br(component), component.lookahead < wt && nextSibling === Qr) return Pe;
            if (component.lookahead === 0) break
        }
        if (parentNode = 0, component.lookahead >= se && (component.ins_h = (component.ins_h << component.hash_shift ^ component.window[component.strstart + se - 1]) & component.hash_mask, parentNode = component.prev[component.strstart & component.w_mask] = component.head[component.ins_h], component.head[component.ins_h] = component.strstart), parentNode !== 0 && component.strstart - parentNode <= component.w_size - wt && (component.match_length = Hf(component, parentNode)), component.match_length >= se)
            if (n = ft._tr_tally(component, component.strstart - component.match_start, component.match_length - se), component.lookahead -= component.match_length, component.match_length <= component.max_lazy_match && component.lookahead >= se) {
                component.match_length--;
                do component.strstart++, component.ins_h = (component.ins_h << component.hash_shift ^ component.window[component.strstart + se - 1]) & component.hash_mask, parentNode = component.prev[component.strstart & component.w_mask] = component.head[component.ins_h], component.head[component.ins_h] = component.strstart; while (--component.match_length !== 0);
                component.strstart++
            } else component.strstart += component.match_length, component.match_length = 0, component.ins_h = component.window[component.strstart], component.ins_h = (component.ins_h << component.hash_shift ^ component.window[component.strstart + 1]) & component.hash_mask;
        else n = ft._tr_tally(component, 0, component.window[component.strstart]), component.lookahead--, component.strstart++;
        if (n && (Ue(component, !1), component.strm.avail_out === 0)) return Pe
    }
    return component.insert = component.strstart < se - 1 ? component.strstart : se - 1, nextSibling === vr ? (Ue(component, !0), component.strm.avail_out === 0 ? Fr : Nn) : component.last_lit && (Ue(component, !1), component.strm.avail_out === 0) ? Pe : Ei
}

function nn(component, nextSibling) {
    for (var parentNode, n, i;;) {
        if (component.lookahead < wt) {
            if (Br(component), component.lookahead < wt && nextSibling === Qr) return Pe;
            if (component.lookahead === 0) break
        }
        if (parentNode = 0, component.lookahead >= se && (component.ins_h = (component.ins_h << component.hash_shift ^ component.window[component.strstart + se - 1]) & component.hash_mask, parentNode = component.prev[component.strstart & component.w_mask] = component.head[component.ins_h], component.head[component.ins_h] = component.strstart), component.prev_length = component.match_length, component.prev_match = component.match_start, component.match_length = se - 1, parentNode !== 0 && component.prev_length < component.max_lazy_match && component.strstart - parentNode <= component.w_size - wt && (component.match_length = Hf(component, parentNode), component.match_length <= 5 && (component.strategy === W0 || component.match_length === se && component.strstart - component.match_start > 4096) && (component.match_length = se - 1)), component.prev_length >= se && component.match_length <= component.prev_length) {
            i = component.strstart + component.lookahead - se, n = ft._tr_tally(component, component.strstart - 1 - component.prev_match, component.prev_length - se), component.lookahead -= component.prev_length - 1, component.prev_length -= 2;
            do ++component.strstart <= i && (component.ins_h = (component.ins_h << component.hash_shift ^ component.window[component.strstart + se - 1]) & component.hash_mask, parentNode = component.prev[component.strstart & component.w_mask] = component.head[component.ins_h], component.head[component.ins_h] = component.strstart); while (--component.prev_length !== 0);
            if (component.match_available = 0, component.match_length = se - 1, component.strstart++, n && (Ue(component, !1), component.strm.avail_out === 0)) return Pe
        } else if (component.match_available) {
            if (n = ft._tr_tally(component, 0, component.window[component.strstart - 1]), n && Ue(component, !1), component.strstart++, component.lookahead--, component.strm.avail_out === 0) return Pe
        } else component.match_available = 1, component.strstart++, component.lookahead--
    }
    return component.match_available && (n = ft._tr_tally(component, 0, component.window[component.strstart - 1]), component.match_available = 0), component.insert = component.strstart < se - 1 ? component.strstart : se - 1, nextSibling === vr ? (Ue(component, !0), component.strm.avail_out === 0 ? Fr : Nn) : component.last_lit && (Ue(component, !1), component.strm.avail_out === 0) ? Pe : Ei
}

function cv(component, nextSibling) {
    for (var parentNode, n, i, o, a = component.window;;) {
        if (component.lookahead <= ur) {
            if (Br(component), component.lookahead <= ur && nextSibling === Qr) return Pe;
            if (component.lookahead === 0) break
        }
        if (component.match_length = 0, component.lookahead >= se && component.strstart > 0 && (i = component.strstart - 1, n = a[i], n === a[++i] && n === a[++i] && n === a[++i])) {
            o = component.strstart + ur;
            do; while (n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && i < o);
            component.match_length = ur - (o - i), component.match_length > component.lookahead && (component.match_length = component.lookahead)
        }
        if (component.match_length >= se ? (parentNode = ft._tr_tally(component, 1, component.match_length - se), component.lookahead -= component.match_length, component.strstart += component.match_length, component.match_length = 0) : (parentNode = ft._tr_tally(component, 0, component.window[component.strstart]), component.lookahead--, component.strstart++), parentNode && (Ue(component, !1), component.strm.avail_out === 0)) return Pe
    }
    return component.insert = 0, nextSibling === vr ? (Ue(component, !0), component.strm.avail_out === 0 ? Fr : Nn) : component.last_lit && (Ue(component, !1), component.strm.avail_out === 0) ? Pe : Ei
}

function lv(component, nextSibling) {
    for (var parentNode;;) {
        if (component.lookahead === 0 && (Br(component), component.lookahead === 0)) {
            if (nextSibling === Qr) return Pe;
            break
        }
        if (component.match_length = 0, parentNode = ft._tr_tally(component, 0, component.window[component.strstart]), component.lookahead--, component.strstart++, parentNode && (Ue(component, !1), component.strm.avail_out === 0)) return Pe
    }
    return component.insert = 0, nextSibling === vr ? (Ue(component, !0), component.strm.avail_out === 0 ? Fr : Nn) : component.last_lit && (Ue(component, !1), component.strm.avail_out === 0) ? Pe : Ei
}

function kt(component, nextSibling, parentNode, n, i) {
    this.good_length = component, this.max_lazy = nextSibling, this.nice_length = parentNode, this.max_chain = n, this.func = i
}
var pn;
pn = [new kt(0, 0, 0, 0, sv), new kt(4, 4, 8, 4, Da), new kt(4, 5, 16, 8, Da), new kt(4, 6, 32, 32, Da), new kt(4, 4, 16, 16, nn), new kt(8, 16, 32, 32, nn), new kt(8, 16, 128, 128, nn), new kt(8, 32, 128, 256, nn), new kt(32, 128, 258, 1024, nn), new kt(32, 258, 258, 4096, nn)];

function uv(component) {
    component.window_size = 2 * component.w_size, lr(component.head), component.max_lazy_match = pn[component.level].max_lazy, component.good_match = pn[component.level].good_length, component.nice_match = pn[component.level].nice_length, component.max_chain_length = pn[component.level].max_chain, component.strstart = 0, component.block_start = 0, component.lookahead = 0, component.insert = 0, component.match_length = component.prev_length = se - 1, component.match_available = 0, component.ins_h = 0
}

function fv() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Wo, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Ye.Buf16(rv * 2), this.dyn_dtree = new Ye.Buf16((2 * ev + 1) * 2), this.bl_tree = new Ye.Buf16((2 * tv + 1) * 2), lr(this.dyn_ltree), lr(this.dyn_dtree), lr(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Ye.Buf16(nv + 1), this.heap = new Ye.Buf16(2 * vs + 1), lr(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Ye.Buf16(2 * vs + 1), lr(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
}

function Uf(component) {
    var nextSibling;
    return !component || !component.state ? fr(component, dt) : (component.total_in = component.total_out = 0, component.data_type = Q0, nextSibling = component.state, nextSibling.pending = 0, nextSibling.pending_out = 0, nextSibling.wrap < 0 && (nextSibling.wrap = -nextSibling.wrap), nextSibling.status = nextSibling.wrap ? Go : Nr, component.adler = nextSibling.wrap === 2 ? 0 : 1, nextSibling.last_flush = Qr, ft._tr_init(nextSibling), Nt)
}

function $f(component) {
    var nextSibling = Uf(component);
    return nextSibling === Nt && uv(component.state), nextSibling
}

function dv(component, nextSibling) {
    return !component || !component.state || component.state.wrap !== 2 ? dt : (component.state.gzhead = nextSibling, Nt)
}

function Wf(component, nextSibling, parentNode, n, i, o) {
    if (!component) return dt;
    var a = 1;
    if (nextSibling === $0 && (nextSibling = 6), n < 0 ? (a = 0, n = -n) : n > 15 && (a = 2, n -= 16), i < 1 || i > Y0 || parentNode !== Wo || n < 8 || n > 15 || nextSibling < 0 || nextSibling > 9 || o < 0 || o > J0) return fr(component, dt);
    n === 8 && (n = 9);
    var s = new fv;
    return component.state = s, s.strm = component, s.wrap = a, s.gzhead = null, s.w_bits = n, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = i + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + se - 1) / se), s.window = new Ye.Buf8(s.w_size * 2), s.head = new Ye.Buf16(s.hash_size), s.prev = new Ye.Buf16(s.w_size), s.lit_bufsize = 1 << i + 6, s.pending_buf_size = s.lit_bufsize * 4, s.pending_buf = new Ye.Buf8(s.pending_buf_size), s.d_buf = 1 * s.lit_bufsize, s.l_buf = (1 + 2) * s.lit_bufsize, s.level = nextSibling, s.strategy = o, s.method = parentNode, $f(component)
}

function hv(component, nextSibling) {
    return Wf(component, nextSibling, Wo, V0, Z0, K0)
}

function vv(component, nextSibling) {
    var parentNode, n, i, o;
    if (!component || !component.state || nextSibling > ul || nextSibling < 0) return component ? fr(component, dt) : dt;
    if (n = component.state, !component.output || !component.input && component.avail_in !== 0 || n.status === Vn && nextSibling !== vr) return fr(component, component.avail_out === 0 ? Pa : dt);
    if (n.strm = component, parentNode = n.last_flush, n.last_flush = nextSibling, n.status === Go)
        if (n.wrap === 2) component.adler = 0, de(n, 31), de(n, 139), de(n, 8), n.gzhead ? (de(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), de(n, n.gzhead.time & 255), de(n, n.gzhead.time >> 8 & 255), de(n, n.gzhead.time >> 16 & 255), de(n, n.gzhead.time >> 24 & 255), de(n, n.level === 9 ? 2 : n.strategy >= Yi || n.level < 2 ? 4 : 0), de(n, n.gzhead.os & 255), n.gzhead.extra && n.gzhead.extra.length && (de(n, n.gzhead.extra.length & 255), de(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (component.adler = ar(component.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = ps) : (de(n, 0), de(n, 0), de(n, 0), de(n, 0), de(n, 0), de(n, n.level === 9 ? 2 : n.strategy >= Yi || n.level < 2 ? 4 : 0), de(n, ov), n.status = Nr);
        else {
            var a = Wo + (n.w_bits - 8 << 4) << 8,
                s = -1;
            n.strategy >= Yi || n.level < 2 ? s = 0 : n.level < 6 ? s = 1 : n.level === 6 ? s = 2 : s = 3, a |= s << 6, n.strstart !== 0 && (a |= iv), a += 31 - a % 31, n.status = Nr, Gn(n, a), n.strstart !== 0 && (Gn(n, component.adler >>> 16), Gn(n, component.adler & 65535)), component.adler = 1
        } if (n.status === ps)
        if (n.gzhead.extra) {
            for (i = n.pending; n.gzindex < (n.gzhead.extra.length & 65535) && !(n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (component.adler = ar(component.adler, n.pending_buf, n.pending - i, i)), sr(component), i = n.pending, n.pending === n.pending_buf_size));) de(n, n.gzhead.extra[n.gzindex] & 255), n.gzindex++;
            n.gzhead.hcrc && n.pending > i && (component.adler = ar(component.adler, n.pending_buf, n.pending - i, i)), n.gzindex === n.gzhead.extra.length && (n.gzindex = 0, n.status = go)
        } else n.status = go;
    if (n.status === go)
        if (n.gzhead.name) {
            i = n.pending;
            do {
                if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (component.adler = ar(component.adler, n.pending_buf, n.pending - i, i)), sr(component), i = n.pending, n.pending === n.pending_buf_size)) {
                    o = 1;
                    break
                }
                n.gzindex < n.gzhead.name.length ? o = n.gzhead.name.charCodeAt(n.gzindex++) & 255 : o = 0, de(n, o)
            } while (o !== 0);
            n.gzhead.hcrc && n.pending > i && (component.adler = ar(component.adler, n.pending_buf, n.pending - i, i)), o === 0 && (n.gzindex = 0, n.status = mo)
        } else n.status = mo;
    if (n.status === mo)
        if (n.gzhead.comment) {
            i = n.pending;
            do {
                if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (component.adler = ar(component.adler, n.pending_buf, n.pending - i, i)), sr(component), i = n.pending, n.pending === n.pending_buf_size)) {
                    o = 1;
                    break
                }
                n.gzindex < n.gzhead.comment.length ? o = n.gzhead.comment.charCodeAt(n.gzindex++) & 255 : o = 0, de(n, o)
            } while (o !== 0);
            n.gzhead.hcrc && n.pending > i && (component.adler = ar(component.adler, n.pending_buf, n.pending - i, i)), o === 0 && (n.status = _o)
        } else n.status = _o;
    if (n.status === _o && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && sr(component), n.pending + 2 <= n.pending_buf_size && (de(n, component.adler & 255), de(n, component.adler >> 8 & 255), component.adler = 0, n.status = Nr)) : n.status = Nr), n.pending !== 0) {
        if (sr(component), component.avail_out === 0) return n.last_flush = -1, Nt
    } else if (component.avail_in === 0 && dl(nextSibling) <= dl(parentNode) && nextSibling !== vr) return fr(component, Pa);
    if (n.status === Vn && component.avail_in !== 0) return fr(component, Pa);
    if (component.avail_in !== 0 || n.lookahead !== 0 || nextSibling !== Qr && n.status !== Vn) {
        var d = n.strategy === Yi ? lv(n, nextSibling) : n.strategy === G0 ? cv(n, nextSibling) : pn[n.level].func(n, nextSibling);
        if ((d === Fr || d === Nn) && (n.status = Vn), d === Pe || d === Fr) return component.avail_out === 0 && (n.last_flush = -1), Nt;
        if (d === Ei && (nextSibling === j0 ? ft._tr_align(n) : nextSibling !== ul && (ft._tr_stored_block(n, 0, 0, !1), nextSibling === H0 && (lr(n.head), n.lookahead === 0 && (n.strstart = 0, n.block_start = 0, n.insert = 0))), sr(component), component.avail_out === 0)) return n.last_flush = -1, Nt
    }
    return nextSibling !== vr ? Nt : n.wrap <= 0 ? fl : (n.wrap === 2 ? (de(n, component.adler & 255), de(n, component.adler >> 8 & 255), de(n, component.adler >> 16 & 255), de(n, component.adler >> 24 & 255), de(n, component.total_in & 255), de(n, component.total_in >> 8 & 255), de(n, component.total_in >> 16 & 255), de(n, component.total_in >> 24 & 255)) : (Gn(n, component.adler >>> 16), Gn(n, component.adler & 65535)), sr(component), n.wrap > 0 && (n.wrap = -n.wrap), n.pending !== 0 ? Nt : fl)
}

function pv(component) {
    var nextSibling;
    return !component || !component.state ? dt : (nextSibling = component.state.status, nextSibling !== Go && nextSibling !== ps && nextSibling !== go && nextSibling !== mo && nextSibling !== _o && nextSibling !== Nr && nextSibling !== Vn ? fr(component, dt) : (component.state = null, nextSibling === Nr ? fr(component, U0) : Nt))
}

function gv(component, nextSibling) {
    var parentNode = nextSibling.length,
        n, i, o, a, s, d, f, c;
    if (!component || !component.state || (n = component.state, a = n.wrap, a === 2 || a === 1 && n.status !== Go || n.lookahead)) return dt;
    for (a === 1 && (component.adler = jf(component.adler, nextSibling, parentNode, 0)), n.wrap = 0, parentNode >= n.w_size && (a === 0 && (lr(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), c = new Ye.Buf8(n.w_size), Ye.arraySet(c, nextSibling, parentNode - n.w_size, n.w_size, 0), nextSibling = c, parentNode = n.w_size), s = component.avail_in, d = component.next_in, f = component.input, component.avail_in = parentNode, component.next_in = 0, component.input = nextSibling, Br(n); n.lookahead >= se;) {
        i = n.strstart, o = n.lookahead - (se - 1);
        do n.ins_h = (n.ins_h << n.hash_shift ^ n.window[i + se - 1]) & n.hash_mask, n.prev[i & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = i, i++; while (--o);
        n.strstart = i, n.lookahead = se - 1, Br(n)
    }
    return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = se - 1, n.match_available = 0, component.next_in = d, component.input = f, component.avail_in = s, n.wrap = a, Nt
}
Ft.deflateInit = hv;
Ft.deflateInit2 = Wf;
Ft.deflateReset = $f;
Ft.deflateResetKeep = Uf;
Ft.deflateSetHeader = dv;
Ft.deflate = vv;
Ft.deflateEnd = pv;
Ft.deflateSetDictionary = gv;
Ft.deflateInfo = "pako deflate (from Nodeca project)";
var Yr = {},
    Jo = Yt,
    Gf = !0,
    Jf = !0;
try {
    String.fromCharCode.apply(null, [0])
} catch {
    Gf = !1
}
try {
    String.fromCharCode.apply(null, new Uint8Array(1))
} catch {
    Jf = !1
}
var vi = new Jo.Buf8(256);
for (var nr = 0; nr < 256; nr++) vi[nr] = nr >= 252 ? 6 : nr >= 248 ? 5 : nr >= 240 ? 4 : nr >= 224 ? 3 : nr >= 192 ? 2 : 1;
vi[254] = vi[254] = 1;
Yr.string2buf = function(component) {
    var nextSibling, parentNode, n, i, o, a = component.length,
        s = 0;
    for (i = 0; i < a; i++) parentNode = component.charCodeAt(i), (parentNode & 64512) === 55296 && i + 1 < a && (n = component.charCodeAt(i + 1), (n & 64512) === 56320 && (parentNode = 65536 + (parentNode - 55296 << 10) + (n - 56320), i++)), s += parentNode < 128 ? 1 : parentNode < 2048 ? 2 : parentNode < 65536 ? 3 : 4;
    for (nextSibling = new Jo.Buf8(s), o = 0, i = 0; o < s; i++) parentNode = component.charCodeAt(i), (parentNode & 64512) === 55296 && i + 1 < a && (n = component.charCodeAt(i + 1), (n & 64512) === 56320 && (parentNode = 65536 + (parentNode - 55296 << 10) + (n - 56320), i++)), parentNode < 128 ? nextSibling[o++] = parentNode : parentNode < 2048 ? (nextSibling[o++] = 192 | parentNode >>> 6, nextSibling[o++] = 128 | parentNode & 63) : parentNode < 65536 ? (nextSibling[o++] = 224 | parentNode >>> 12, nextSibling[o++] = 128 | parentNode >>> 6 & 63, nextSibling[o++] = 128 | parentNode & 63) : (nextSibling[o++] = 240 | parentNode >>> 18, nextSibling[o++] = 128 | parentNode >>> 12 & 63, nextSibling[o++] = 128 | parentNode >>> 6 & 63, nextSibling[o++] = 128 | parentNode & 63);
    return nextSibling
};

function Kf(component, nextSibling) {
    if (nextSibling < 65534 && (component.subarray && Jf || !component.subarray && Gf)) return String.fromCharCode.apply(null, Jo.shrinkBuf(component, nextSibling));
    for (var parentNode = "", n = 0; n < nextSibling; n++) parentNode += String.fromCharCode(component[n]);
    return parentNode
}
Yr.buf2binstring = function(component) {
    return Kf(component, component.length)
};
Yr.binstring2buf = function(component) {
    for (var nextSibling = new Jo.Buf8(component.length), parentNode = 0, n = nextSibling.length; parentNode < n; parentNode++) nextSibling[parentNode] = component.charCodeAt(parentNode);
    return nextSibling
};
Yr.buf2string = function(component, nextSibling) {
    var parentNode, n, i, o, a = nextSibling || component.length,
        s = new Array(a * 2);
    for (n = 0, parentNode = 0; parentNode < a;) {
        if (i = component[parentNode++], i < 128) {
            s[n++] = i;
            continue
        }
        if (o = vi[i], o > 4) {
            s[n++] = 65533, parentNode += o - 1;
            continue
        }
        for (i &= o === 2 ? 31 : o === 3 ? 15 : 7; o > 1 && parentNode < a;) i = i << 6 | component[parentNode++] & 63, o--;
        if (o > 1) {
            s[n++] = 65533;
            continue
        }
        i < 65536 ? s[n++] = i : (i -= 65536, s[n++] = 55296 | i >> 10 & 1023, s[n++] = 56320 | i & 1023)
    }
    return Kf(s, n)
};
Yr.utf8border = function(component, nextSibling) {
    var parentNode;
    for (nextSibling = nextSibling || component.length, nextSibling > component.length && (nextSibling = component.length), parentNode = nextSibling - 1; parentNode >= 0 && (component[parentNode] & 192) === 128;) parentNode--;
    return parentNode < 0 || parentNode === 0 ? nextSibling : parentNode + vi[component[parentNode]] > nextSibling ? parentNode : nextSibling
};

function mv() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
}
var Qf = mv,
    ri = Ft,
    ni = Yt,
    gs = Yr,
    ms = cc,
    _v = Qf,
    Yf = Object.prototype.toString,
    bv = 0,
    Fa = 4,
    wn = 0,
    hl = 1,
    vl = 2,
    yv = -1,
    wv = 0,
    xv = 8;

function zr(component) {
    if (!(this instanceof zr)) return new zr(component);
    this.options = ni.assign({
        level: yv,
        method: xv,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: wv,
        to: ""
    }, component || {});
    var nextSibling = this.options;
    nextSibling.raw && nextSibling.windowBits > 0 ? nextSibling.windowBits = -nextSibling.windowBits : nextSibling.gzip && nextSibling.windowBits > 0 && nextSibling.windowBits < 16 && (nextSibling.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new _v, this.strm.avail_out = 0;
    var parentNode = ri.deflateInit2(this.strm, nextSibling.level, nextSibling.method, nextSibling.windowBits, nextSibling.memLevel, nextSibling.strategy);
    if (parentNode !== wn) throw new Error(ms[parentNode]);
    if (nextSibling.header && ri.deflateSetHeader(this.strm, nextSibling.header), nextSibling.dictionary) {
        var n;
        if (typeof nextSibling.dictionary == "string" ? n = gs.string2buf(nextSibling.dictionary) : Yf.call(nextSibling.dictionary) === "[object ArrayBuffer]" ? n = new Uint8Array(nextSibling.dictionary) : n = nextSibling.dictionary, parentNode = ri.deflateSetDictionary(this.strm, n), parentNode !== wn) throw new Error(ms[parentNode]);
        this._dict_set = !0
    }
}
zr.prototype.push = function(component, nextSibling) {
    var parentNode = this.strm,
        n = this.options.chunkSize,
        i, o;
    if (this.ended) return !1;
    o = nextSibling === ~~nextSibling ? nextSibling : nextSibling === !0 ? Fa : bv, typeof component == "string" ? parentNode.input = gs.string2buf(component) : Yf.call(component) === "[object ArrayBuffer]" ? parentNode.input = new Uint8Array(component) : parentNode.input = component, parentNode.next_in = 0, parentNode.avail_in = parentNode.input.length;
    do {
        if (parentNode.avail_out === 0 && (parentNode.output = new ni.Buf8(n), parentNode.next_out = 0, parentNode.avail_out = n), i = ri.deflate(parentNode, o), i !== hl && i !== wn) return this.onEnd(i), this.ended = !0, !1;
        (parentNode.avail_out === 0 || parentNode.avail_in === 0 && (o === Fa || o === vl)) && (this.options.to === "string" ? this.onData(gs.buf2binstring(ni.shrinkBuf(parentNode.output, parentNode.next_out))) : this.onData(ni.shrinkBuf(parentNode.output, parentNode.next_out)))
    } while ((parentNode.avail_in > 0 || parentNode.avail_out === 0) && i !== hl);
    return o === Fa ? (i = ri.deflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === wn) : (o === vl && (this.onEnd(wn), parentNode.avail_out = 0), !0)
};
zr.prototype.onData = function(component) {
    this.chunks.push(component)
};
zr.prototype.onEnd = function(component) {
    component === wn && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = ni.flattenChunks(this.chunks)), this.chunks = [], this.err = component, this.msg = this.strm.msg
};

function lc(component, nextSibling) {
    var parentNode = new zr(nextSibling);
    if (parentNode.push(component, !0), parentNode.err) throw parentNode.msg || ms[parentNode.err];
    return parentNode.result
}

function Sv(component, nextSibling) {
    return nextSibling = nextSibling || {}, nextSibling.raw = !0, lc(component, nextSibling)
}

function Ev(component, nextSibling) {
    return nextSibling = nextSibling || {}, nextSibling.gzip = !0, lc(component, nextSibling)
}
xi.Deflate = zr;
xi.deflate = lc;
xi.deflateRaw = Sv;
xi.gzip = Ev;
var Ai = {},
    At = {},
    Vi = 30,
    Av = 12,
    Cv = function(nextSibling, parentNode) {
        var n, i, o, a, s, d, f, c, p, v, h, _, y, S, w, x, R, I, E, N, C, T, D, F, B;
        n = nextSibling.state, i = nextSibling.next_in, F = nextSibling.input, o = i + (nextSibling.avail_in - 5), a = nextSibling.next_out, B = nextSibling.output, s = a - (parentNode - nextSibling.avail_out), d = a + (nextSibling.avail_out - 257), f = n.dmax, c = n.wsize, p = n.whave, v = n.wnext, h = n.window, _ = n.hold, y = n.bits, S = n.lencode, w = n.distcode, x = (1 << n.lenbits) - 1, R = (1 << n.distbits) - 1;
        component: do {
            y < 15 && (_ += F[i++] << y, y += 8, _ += F[i++] << y, y += 8), I = S[_ & x];
            nextSibling: for (;;) {
                if (E = I >>> 24, _ >>>= E, y -= E, E = I >>> 16 & 255, E === 0) B[a++] = I & 65535;
                else if (E & 16) {
                    N = I & 65535, E &= 15, E && (y < E && (_ += F[i++] << y, y += 8), N += _ & (1 << E) - 1, _ >>>= E, y -= E), y < 15 && (_ += F[i++] << y, y += 8, _ += F[i++] << y, y += 8), I = w[_ & R];
                    parentNode: for (;;) {
                        if (E = I >>> 24, _ >>>= E, y -= E, E = I >>> 16 & 255, E & 16) {
                            if (C = I & 65535, E &= 15, y < E && (_ += F[i++] << y, y += 8, y < E && (_ += F[i++] << y, y += 8)), C += _ & (1 << E) - 1, C > f) {
                                nextSibling.msg = "invalid distance too far back", n.mode = Vi;
                                break component
                            }
                            if (_ >>>= E, y -= E, E = a - s, C > E) {
                                if (E = C - E, E > p && n.sane) {
                                    nextSibling.msg = "invalid distance too far back", n.mode = Vi;
                                    break component
                                }
                                if (T = 0, D = h, v === 0) {
                                    if (T += c - E, E < N) {
                                        N -= E;
                                        do B[a++] = h[T++]; while (--E);
                                        T = a - C, D = B
                                    }
                                } else if (v < E) {
                                    if (T += c + v - E, E -= v, E < N) {
                                        N -= E;
                                        do B[a++] = h[T++]; while (--E);
                                        if (T = 0, v < N) {
                                            E = v, N -= E;
                                            do B[a++] = h[T++]; while (--E);
                                            T = a - C, D = B
                                        }
                                    }
                                } else if (T += v - E, E < N) {
                                    N -= E;
                                    do B[a++] = h[T++]; while (--E);
                                    T = a - C, D = B
                                }
                                for (; N > 2;) B[a++] = D[T++], B[a++] = D[T++], B[a++] = D[T++], N -= 3;
                                N && (B[a++] = D[T++], N > 1 && (B[a++] = D[T++]))
                            } else {
                                T = a - C;
                                do B[a++] = B[T++], B[a++] = B[T++], B[a++] = B[T++], N -= 3; while (N > 2);
                                N && (B[a++] = B[T++], N > 1 && (B[a++] = B[T++]))
                            }
                        } else if (E & 64) {
                            nextSibling.msg = "invalid distance code", n.mode = Vi;
                            break component
                        } else {
                            I = w[(I & 65535) + (_ & (1 << E) - 1)];
                            continue parentNode
                        }
                        break
                    }
                } else if (E & 64)
                    if (E & 32) {
                        n.mode = Av;
                        break component
                    } else {
                        nextSibling.msg = "invalid literal/length code", n.mode = Vi;
                        break component
                    }
                else {
                    I = S[(I & 65535) + (_ & (1 << E) - 1)];
                    continue nextSibling
                }
                break
            }
        } while (i < o && a < d);
        N = y >> 3, i -= N, y -= N << 3, _ &= (1 << y) - 1, nextSibling.next_in = i, nextSibling.next_out = a, nextSibling.avail_in = i < o ? 5 + (o - i) : 5 - (i - o), nextSibling.avail_out = a < d ? 257 + (d - a) : 257 - (a - d), n.hold = _, n.bits = y
    },
    pl = Yt,
    on = 15,
    gl = 852,
    ml = 592,
    _l = 0,
    Ba = 1,
    bl = 2,
    Tv = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
    kv = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
    Mv = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
    Iv = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64],
    Ov = function(nextSibling, parentNode, n, i, o, a, s, d) {
        var f = d.bits,
            c = 0,
            p = 0,
            v = 0,
            h = 0,
            _ = 0,
            y = 0,
            S = 0,
            w = 0,
            x = 0,
            R = 0,
            I, E, N, C, T, D = null,
            F = 0,
            B, k = new pl.Buf16(on + 1),
            A = new pl.Buf16(on + 1),
            M = null,
            P = 0,
            j, H, G;
        for (c = 0; c <= on; c++) k[c] = 0;
        for (p = 0; p < i; p++) k[parentNode[n + p]]++;
        for (_ = f, h = on; h >= 1 && k[h] === 0; h--);
        if (_ > h && (_ = h), h === 0) return o[a++] = 1 << 24 | 64 << 16 | 0, o[a++] = 1 << 24 | 64 << 16 | 0, d.bits = 1, 0;
        for (v = 1; v < h && k[v] === 0; v++);
        for (_ < v && (_ = v), w = 1, c = 1; c <= on; c++)
            if (w <<= 1, w -= k[c], w < 0) return -1;
        if (w > 0 && (nextSibling === _l || h !== 1)) return -1;
        for (A[1] = 0, c = 1; c < on; c++) A[c + 1] = A[c] + k[c];
        for (p = 0; p < i; p++) parentNode[n + p] !== 0 && (s[A[parentNode[n + p]]++] = p);
        if (nextSibling === _l ? (D = M = s, B = 19) : nextSibling === Ba ? (D = Tv, F -= 257, M = kv, P -= 257, B = 256) : (D = Mv, M = Iv, B = -1), R = 0, p = 0, c = v, T = a, y = _, S = 0, N = -1, x = 1 << _, C = x - 1, nextSibling === Ba && x > gl || nextSibling === bl && x > ml) return 1;
        for (;;) {
            j = c - S, s[p] < B ? (H = 0, G = s[p]) : s[p] > B ? (H = M[P + s[p]], G = D[F + s[p]]) : (H = 32 + 64, G = 0), I = 1 << c - S, E = 1 << y, v = E;
            do E -= I, o[T + (R >> S) + E] = j << 24 | H << 16 | G | 0; while (E !== 0);
            for (I = 1 << c - 1; R & I;) I >>= 1;
            if (I !== 0 ? (R &= I - 1, R += I) : R = 0, p++, --k[c] === 0) {
                if (c === h) break;
                c = parentNode[n + s[p]]
            }
            if (c > _ && (R & C) !== N) {
                for (S === 0 && (S = _), T += v, y = c - S, w = 1 << y; y + S < h && (w -= k[y + S], !(w <= 0));) y++, w <<= 1;
                if (x += 1 << y, nextSibling === Ba && x > gl || nextSibling === bl && x > ml) return 1;
                N = R & C, o[N] = _ << 24 | y << 16 | T - a | 0
            }
        }
        return R !== 0 && (o[T + R] = c - S << 24 | 64 << 16 | 0), d.bits = _, 0
    },
    ot = Yt,
    _s = Bf,
    Mt = zf,
    Rv = Cv,
    ii = Ov,
    Nv = 0,
    Vf = 1,
    Zf = 2,
    yl = 4,
    Lv = 5,
    Zi = 6,
    jr = 0,
    Pv = 1,
    Dv = 2,
    ht = -2,
    Xf = -3,
    qf = -4,
    Fv = -5,
    wl = 8,
    ed = 1,
    xl = 2,
    Sl = 3,
    El = 4,
    Al = 5,
    Cl = 6,
    Tl = 7,
    kl = 8,
    Ml = 9,
    Il = 10,
    Oo = 11,
    jt = 12,
    za = 13,
    Ol = 14,
    ja = 15,
    Rl = 16,
    Nl = 17,
    Ll = 18,
    Pl = 19,
    Xi = 20,
    qi = 21,
    Dl = 22,
    Fl = 23,
    Bl = 24,
    zl = 25,
    jl = 26,
    Ha = 27,
    Hl = 28,
    Ul = 29,
    Se = 30,
    td = 31,
    Bv = 32,
    zv = 852,
    jv = 592,
    Hv = 15,
    Uv = Hv;

function $l(component) {
    return (component >>> 24 & 255) + (component >>> 8 & 65280) + ((component & 65280) << 8) + ((component & 255) << 24)
}

function $v() {
    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new ot.Buf16(320), this.work = new ot.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
}

function rd(component) {
    var nextSibling;
    return !component || !component.state ? ht : (nextSibling = component.state, component.total_in = component.total_out = nextSibling.total = 0, component.msg = "", nextSibling.wrap && (component.adler = nextSibling.wrap & 1), nextSibling.mode = ed, nextSibling.last = 0, nextSibling.havedict = 0, nextSibling.dmax = 32768, nextSibling.head = null, nextSibling.hold = 0, nextSibling.bits = 0, nextSibling.lencode = nextSibling.lendyn = new ot.Buf32(zv), nextSibling.distcode = nextSibling.distdyn = new ot.Buf32(jv), nextSibling.sane = 1, nextSibling.back = -1, jr)
}

function nd(component) {
    var nextSibling;
    return !component || !component.state ? ht : (nextSibling = component.state, nextSibling.wsize = 0, nextSibling.whave = 0, nextSibling.wnext = 0, rd(component))
}

function id(component, nextSibling) {
    var parentNode, n;
    return !component || !component.state || (n = component.state, nextSibling < 0 ? (parentNode = 0, nextSibling = -nextSibling) : (parentNode = (nextSibling >> 4) + 1, nextSibling < 48 && (nextSibling &= 15)), nextSibling && (nextSibling < 8 || nextSibling > 15)) ? ht : (n.window !== null && n.wbits !== nextSibling && (n.window = null), n.wrap = parentNode, n.wbits = nextSibling, nd(component))
}

function od(component, nextSibling) {
    var parentNode, n;
    return component ? (n = new $v, component.state = n, n.window = null, parentNode = id(component, nextSibling), parentNode !== jr && (component.state = null), parentNode) : ht
}

function Wv(component) {
    return od(component, Uv)
}
var Wl = !0,
    Ua, $a;

function Gv(component) {
    if (Wl) {
        var nextSibling;
        for (Ua = new ot.Buf32(512), $a = new ot.Buf32(32), nextSibling = 0; nextSibling < 144;) component.lens[nextSibling++] = 8;
        for (; nextSibling < 256;) component.lens[nextSibling++] = 9;
        for (; nextSibling < 280;) component.lens[nextSibling++] = 7;
        for (; nextSibling < 288;) component.lens[nextSibling++] = 8;
        for (ii(Vf, component.lens, 0, 288, Ua, 0, component.work, {
                bits: 9
            }), nextSibling = 0; nextSibling < 32;) component.lens[nextSibling++] = 5;
        ii(Zf, component.lens, 0, 32, $a, 0, component.work, {
            bits: 5
        }), Wl = !1
    }
    component.lencode = Ua, component.lenbits = 9, component.distcode = $a, component.distbits = 5
}

function ad(component, nextSibling, parentNode, n) {
    var i, o = component.state;
    return o.window === null && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new ot.Buf8(o.wsize)), n >= o.wsize ? (ot.arraySet(o.window, nextSibling, parentNode - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : (i = o.wsize - o.wnext, i > n && (i = n), ot.arraySet(o.window, nextSibling, parentNode - n, i, o.wnext), n -= i, n ? (ot.arraySet(o.window, nextSibling, parentNode - n, n, 0), o.wnext = n, o.whave = o.wsize) : (o.wnext += i, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += i))), 0
}

function Jv(component, nextSibling) {
    var parentNode, n, i, o, a, s, d, f, c, p, v, h, _, y, S = 0,
        w, x, R, I, E, N, C, T, D = new ot.Buf8(4),
        F, B, k = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    if (!component || !component.state || !component.output || !component.input && component.avail_in !== 0) return ht;
    parentNode = component.state, parentNode.mode === jt && (parentNode.mode = za), a = component.next_out, i = component.output, d = component.avail_out, o = component.next_in, n = component.input, s = component.avail_in, f = parentNode.hold, c = parentNode.bits, p = s, v = d, T = jr;
    component: for (;;) switch (parentNode.mode) {
        case ed:
            if (parentNode.wrap === 0) {
                parentNode.mode = za;
                break
            }
            for (; c < 16;) {
                if (s === 0) break component;
                s--, f += n[o++] << c, c += 8
            }
            if (parentNode.wrap & 2 && f === 35615) {
                parentNode.check = 0, D[0] = f & 255, D[1] = f >>> 8 & 255, parentNode.check = Mt(parentNode.check, D, 2, 0), f = 0, c = 0, parentNode.mode = xl;
                break
            }
            if (parentNode.flags = 0, parentNode.head && (parentNode.head.done = !1), !(parentNode.wrap & 1) || (((f & 255) << 8) + (f >> 8)) % 31) {
                component.msg = "incorrect header check", parentNode.mode = Se;
                break
            }
            if ((f & 15) !== wl) {
                component.msg = "unknown compression method", parentNode.mode = Se;
                break
            }
            if (f >>>= 4, c -= 4, C = (f & 15) + 8, parentNode.wbits === 0) parentNode.wbits = C;
            else if (C > parentNode.wbits) {
                component.msg = "invalid window size", parentNode.mode = Se;
                break
            }
            parentNode.dmax = 1 << C, component.adler = parentNode.check = 1, parentNode.mode = f & 512 ? Il : jt, f = 0, c = 0;
            break;
        case xl:
            for (; c < 16;) {
                if (s === 0) break component;
                s--, f += n[o++] << c, c += 8
            }
            if (parentNode.flags = f, (parentNode.flags & 255) !== wl) {
                component.msg = "unknown compression method", parentNode.mode = Se;
                break
            }
            if (parentNode.flags & 57344) {
                component.msg = "unknown header flags set", parentNode.mode = Se;
                break
            }
            parentNode.head && (parentNode.head.text = f >> 8 & 1), parentNode.flags & 512 && (D[0] = f & 255, D[1] = f >>> 8 & 255, parentNode.check = Mt(parentNode.check, D, 2, 0)), f = 0, c = 0, parentNode.mode = Sl;
        case Sl:
            for (; c < 32;) {
                if (s === 0) break component;
                s--, f += n[o++] << c, c += 8
            }
            parentNode.head && (parentNode.head.time = f), parentNode.flags & 512 && (D[0] = f & 255, D[1] = f >>> 8 & 255, D[2] = f >>> 16 & 255, D[3] = f >>> 24 & 255, parentNode.check = Mt(parentNode.check, D, 4, 0)), f = 0, c = 0, parentNode.mode = El;
        case El:
            for (; c < 16;) {
                if (s === 0) break component;
                s--, f += n[o++] << c, c += 8
            }
            parentNode.head && (parentNode.head.xflags = f & 255, parentNode.head.os = f >> 8), parentNode.flags & 512 && (D[0] = f & 255, D[1] = f >>> 8 & 255, parentNode.check = Mt(parentNode.check, D, 2, 0)), f = 0, c = 0, parentNode.mode = Al;
        case Al:
            if (parentNode.flags & 1024) {
                for (; c < 16;) {
                    if (s === 0) break component;
                    s--, f += n[o++] << c, c += 8
                }
                parentNode.length = f, parentNode.head && (parentNode.head.extra_len = f), parentNode.flags & 512 && (D[0] = f & 255, D[1] = f >>> 8 & 255, parentNode.check = Mt(parentNode.check, D, 2, 0)), f = 0, c = 0
            } else parentNode.head && (parentNode.head.extra = null);
            parentNode.mode = Cl;
        case Cl:
            if (parentNode.flags & 1024 && (h = parentNode.length, h > s && (h = s), h && (parentNode.head && (C = parentNode.head.extra_len - parentNode.length, parentNode.head.extra || (parentNode.head.extra = new Array(parentNode.head.extra_len)), ot.arraySet(parentNode.head.extra, n, o, h, C)), parentNode.flags & 512 && (parentNode.check = Mt(parentNode.check, n, h, o)), s -= h, o += h, parentNode.length -= h), parentNode.length)) break component;
            parentNode.length = 0, parentNode.mode = Tl;
        case Tl:
            if (parentNode.flags & 2048) {
                if (s === 0) break component;
                h = 0;
                do C = n[o + h++], parentNode.head && C && parentNode.length < 65536 && (parentNode.head.name += String.fromCharCode(C)); while (C && h < s);
                if (parentNode.flags & 512 && (parentNode.check = Mt(parentNode.check, n, h, o)), s -= h, o += h, C) break component
            } else parentNode.head && (parentNode.head.name = null);
            parentNode.length = 0, parentNode.mode = kl;
        case kl:
            if (parentNode.flags & 4096) {
                if (s === 0) break component;
                h = 0;
                do C = n[o + h++], parentNode.head && C && parentNode.length < 65536 && (parentNode.head.comment += String.fromCharCode(C)); while (C && h < s);
                if (parentNode.flags & 512 && (parentNode.check = Mt(parentNode.check, n, h, o)), s -= h, o += h, C) break component
            } else parentNode.head && (parentNode.head.comment = null);
            parentNode.mode = Ml;
        case Ml:
            if (parentNode.flags & 512) {
                for (; c < 16;) {
                    if (s === 0) break component;
                    s--, f += n[o++] << c, c += 8
                }
                if (f !== (parentNode.check & 65535)) {
                    component.msg = "header crc mismatch", parentNode.mode = Se;
                    break
                }
                f = 0, c = 0
            }
            parentNode.head && (parentNode.head.hcrc = parentNode.flags >> 9 & 1, parentNode.head.done = !0), component.adler = parentNode.check = 0, parentNode.mode = jt;
            break;
        case Il:
            for (; c < 32;) {
                if (s === 0) break component;
                s--, f += n[o++] << c, c += 8
            }
            component.adler = parentNode.check = $l(f), f = 0, c = 0, parentNode.mode = Oo;
        case Oo:
            if (parentNode.havedict === 0) return component.next_out = a, component.avail_out = d, component.next_in = o, component.avail_in = s, parentNode.hold = f, parentNode.bits = c, Dv;
            component.adler = parentNode.check = 1, parentNode.mode = jt;
        case jt:
            if (nextSibling === Lv || nextSibling === Zi) break component;
        case za:
            if (parentNode.last) {
                f >>>= c & 7, c -= c & 7, parentNode.mode = Ha;
                break
            }
            for (; c < 3;) {
                if (s === 0) break component;
                s--, f += n[o++] << c, c += 8
            }
            switch (parentNode.last = f & 1, f >>>= 1, c -= 1, f & 3) {
                case 0:
                    parentNode.mode = Ol;
                    break;
                case 1:
                    if (Gv(parentNode), parentNode.mode = Xi, nextSibling === Zi) {
                        f >>>= 2, c -= 2;
                        break component
                    }
                    break;
                case 2:
                    parentNode.mode = Nl;
                    break;
                case 3:
                    component.msg = "invalid block type", parentNode.mode = Se
            }
            f >>>= 2, c -= 2;
            break;
        case Ol:
            for (f >>>= c & 7, c -= c & 7; c < 32;) {
                if (s === 0) break component;
                s--, f += n[o++] << c, c += 8
            }
            if ((f & 65535) !== (f >>> 16 ^ 65535)) {
                component.msg = "invalid stored block lengths", parentNode.mode = Se;
                break
            }
            if (parentNode.length = f & 65535, f = 0, c = 0, parentNode.mode = ja, nextSibling === Zi) break component;
        case ja:
            parentNode.mode = Rl;
        case Rl:
            if (h = parentNode.length, h) {
                if (h > s && (h = s), h > d && (h = d), h === 0) break component;
                ot.arraySet(i, n, o, h, a), s -= h, o += h, d -= h, a += h, parentNode.length -= h;
                break
            }
            parentNode.mode = jt;
            break;
        case Nl:
            for (; c < 14;) {
                if (s === 0) break component;
                s--, f += n[o++] << c, c += 8
            }
            if (parentNode.nlen = (f & 31) + 257, f >>>= 5, c -= 5, parentNode.ndist = (f & 31) + 1, f >>>= 5, c -= 5, parentNode.ncode = (f & 15) + 4, f >>>= 4, c -= 4, parentNode.nlen > 286 || parentNode.ndist > 30) {
                component.msg = "too many length or distance symbols", parentNode.mode = Se;
                break
            }
            parentNode.have = 0, parentNode.mode = Ll;
        case Ll:
            for (; parentNode.have < parentNode.ncode;) {
                for (; c < 3;) {
                    if (s === 0) break component;
                    s--, f += n[o++] << c, c += 8
                }
                parentNode.lens[k[parentNode.have++]] = f & 7, f >>>= 3, c -= 3
            }
            for (; parentNode.have < 19;) parentNode.lens[k[parentNode.have++]] = 0;
            if (parentNode.lencode = parentNode.lendyn, parentNode.lenbits = 7, F = {
                    bits: parentNode.lenbits
                }, T = ii(Nv, parentNode.lens, 0, 19, parentNode.lencode, 0, parentNode.work, F), parentNode.lenbits = F.bits, T) {
                component.msg = "invalid code lengths set", parentNode.mode = Se;
                break
            }
            parentNode.have = 0, parentNode.mode = Pl;
        case Pl:
            for (; parentNode.have < parentNode.nlen + parentNode.ndist;) {
                for (; S = parentNode.lencode[f & (1 << parentNode.lenbits) - 1], w = S >>> 24, x = S >>> 16 & 255, R = S & 65535, !(w <= c);) {
                    if (s === 0) break component;
                    s--, f += n[o++] << c, c += 8
                }
                if (R < 16) f >>>= w, c -= w, parentNode.lens[parentNode.have++] = R;
                else {
                    if (R === 16) {
                        for (B = w + 2; c < B;) {
                            if (s === 0) break component;
                            s--, f += n[o++] << c, c += 8
                        }
                        if (f >>>= w, c -= w, parentNode.have === 0) {
                            component.msg = "invalid bit length repeat", parentNode.mode = Se;
                            break
                        }
                        C = parentNode.lens[parentNode.have - 1], h = 3 + (f & 3), f >>>= 2, c -= 2
                    } else if (R === 17) {
                        for (B = w + 3; c < B;) {
                            if (s === 0) break component;
                            s--, f += n[o++] << c, c += 8
                        }
                        f >>>= w, c -= w, C = 0, h = 3 + (f & 7), f >>>= 3, c -= 3
                    } else {
                        for (B = w + 7; c < B;) {
                            if (s === 0) break component;
                            s--, f += n[o++] << c, c += 8
                        }
                        f >>>= w, c -= w, C = 0, h = 11 + (f & 127), f >>>= 7, c -= 7
                    }
                    if (parentNode.have + h > parentNode.nlen + parentNode.ndist) {
                        component.msg = "invalid bit length repeat", parentNode.mode = Se;
                        break
                    }
                    for (; h--;) parentNode.lens[parentNode.have++] = C
                }
            }
            if (parentNode.mode === Se) break;
            if (parentNode.lens[256] === 0) {
                component.msg = "invalid code -- missing end-of-block", parentNode.mode = Se;
                break
            }
            if (parentNode.lenbits = 9, F = {
                    bits: parentNode.lenbits
                }, T = ii(Vf, parentNode.lens, 0, parentNode.nlen, parentNode.lencode, 0, parentNode.work, F), parentNode.lenbits = F.bits, T) {
                component.msg = "invalid literal/lengths set", parentNode.mode = Se;
                break
            }
            if (parentNode.distbits = 6, parentNode.distcode = parentNode.distdyn, F = {
                    bits: parentNode.distbits
                }, T = ii(Zf, parentNode.lens, parentNode.nlen, parentNode.ndist, parentNode.distcode, 0, parentNode.work, F), parentNode.distbits = F.bits, T) {
                component.msg = "invalid distances set", parentNode.mode = Se;
                break
            }
            if (parentNode.mode = Xi, nextSibling === Zi) break component;
        case Xi:
            parentNode.mode = qi;
        case qi:
            if (s >= 6 && d >= 258) {
                component.next_out = a, component.avail_out = d, component.next_in = o, component.avail_in = s, parentNode.hold = f, parentNode.bits = c, Rv(component, v), a = component.next_out, i = component.output, d = component.avail_out, o = component.next_in, n = component.input, s = component.avail_in, f = parentNode.hold, c = parentNode.bits, parentNode.mode === jt && (parentNode.back = -1);
                break
            }
            for (parentNode.back = 0; S = parentNode.lencode[f & (1 << parentNode.lenbits) - 1], w = S >>> 24, x = S >>> 16 & 255, R = S & 65535, !(w <= c);) {
                if (s === 0) break component;
                s--, f += n[o++] << c, c += 8
            }
            if (x && !(x & 240)) {
                for (I = w, E = x, N = R; S = parentNode.lencode[N + ((f & (1 << I + E) - 1) >> I)], w = S >>> 24, x = S >>> 16 & 255, R = S & 65535, !(I + w <= c);) {
                    if (s === 0) break component;
                    s--, f += n[o++] << c, c += 8
                }
                f >>>= I, c -= I, parentNode.back += I
            }
            if (f >>>= w, c -= w, parentNode.back += w, parentNode.length = R, x === 0) {
                parentNode.mode = jl;
                break
            }
            if (x & 32) {
                parentNode.back = -1, parentNode.mode = jt;
                break
            }
            if (x & 64) {
                component.msg = "invalid literal/length code", parentNode.mode = Se;
                break
            }
            parentNode.extra = x & 15, parentNode.mode = Dl;
        case Dl:
            if (parentNode.extra) {
                for (B = parentNode.extra; c < B;) {
                    if (s === 0) break component;
                    s--, f += n[o++] << c, c += 8
                }
                parentNode.length += f & (1 << parentNode.extra) - 1, f >>>= parentNode.extra, c -= parentNode.extra, parentNode.back += parentNode.extra
            }
            parentNode.was = parentNode.length, parentNode.mode = Fl;
        case Fl:
            for (; S = parentNode.distcode[f & (1 << parentNode.distbits) - 1], w = S >>> 24, x = S >>> 16 & 255, R = S & 65535, !(w <= c);) {
                if (s === 0) break component;
                s--, f += n[o++] << c, c += 8
            }
            if (!(x & 240)) {
                for (I = w, E = x, N = R; S = parentNode.distcode[N + ((f & (1 << I + E) - 1) >> I)], w = S >>> 24, x = S >>> 16 & 255, R = S & 65535, !(I + w <= c);) {
                    if (s === 0) break component;
                    s--, f += n[o++] << c, c += 8
                }
                f >>>= I, c -= I, parentNode.back += I
            }
            if (f >>>= w, c -= w, parentNode.back += w, x & 64) {
                component.msg = "invalid distance code", parentNode.mode = Se;
                break
            }
            parentNode.offset = R, parentNode.extra = x & 15, parentNode.mode = Bl;
        case Bl:
            if (parentNode.extra) {
                for (B = parentNode.extra; c < B;) {
                    if (s === 0) break component;
                    s--, f += n[o++] << c, c += 8
                }
                parentNode.offset += f & (1 << parentNode.extra) - 1, f >>>= parentNode.extra, c -= parentNode.extra, parentNode.back += parentNode.extra
            }
            if (parentNode.offset > parentNode.dmax) {
                component.msg = "invalid distance too far back", parentNode.mode = Se;
                break
            }
            parentNode.mode = zl;
        case zl:
            if (d === 0) break component;
            if (h = v - d, parentNode.offset > h) {
                if (h = parentNode.offset - h, h > parentNode.whave && parentNode.sane) {
                    component.msg = "invalid distance too far back", parentNode.mode = Se;
                    break
                }
                h > parentNode.wnext ? (h -= parentNode.wnext, _ = parentNode.wsize - h) : _ = parentNode.wnext - h, h > parentNode.length && (h = parentNode.length), y = parentNode.window
            } else y = i, _ = a - parentNode.offset, h = parentNode.length;
            h > d && (h = d), d -= h, parentNode.length -= h;
            do i[a++] = y[_++]; while (--h);
            parentNode.length === 0 && (parentNode.mode = qi);
            break;
        case jl:
            if (d === 0) break component;
            i[a++] = parentNode.length, d--, parentNode.mode = qi;
            break;
        case Ha:
            if (parentNode.wrap) {
                for (; c < 32;) {
                    if (s === 0) break component;
                    s--, f |= n[o++] << c, c += 8
                }
                if (v -= d, component.total_out += v, parentNode.total += v, v && (component.adler = parentNode.check = parentNode.flags ? Mt(parentNode.check, i, v, a - v) : _s(parentNode.check, i, v, a - v)), v = d, (parentNode.flags ? f : $l(f)) !== parentNode.check) {
                    component.msg = "incorrect data check", parentNode.mode = Se;
                    break
                }
                f = 0, c = 0
            }
            parentNode.mode = Hl;
        case Hl:
            if (parentNode.wrap && parentNode.flags) {
                for (; c < 32;) {
                    if (s === 0) break component;
                    s--, f += n[o++] << c, c += 8
                }
                if (f !== (parentNode.total & 4294967295)) {
                    component.msg = "incorrect length check", parentNode.mode = Se;
                    break
                }
                f = 0, c = 0
            }
            parentNode.mode = Ul;
        case Ul:
            T = Pv;
            break component;
        case Se:
            T = Xf;
            break component;
        case td:
            return qf;
        case Bv:
        default:
            return ht
    }
    return component.next_out = a, component.avail_out = d, component.next_in = o, component.avail_in = s, parentNode.hold = f, parentNode.bits = c, (parentNode.wsize || v !== component.avail_out && parentNode.mode < Se && (parentNode.mode < Ha || nextSibling !== yl)) && ad(component, component.output, component.next_out, v - component.avail_out), p -= component.avail_in, v -= component.avail_out, component.total_in += p, component.total_out += v, parentNode.total += v, parentNode.wrap && v && (component.adler = parentNode.check = parentNode.flags ? Mt(parentNode.check, i, v, component.next_out - v) : _s(parentNode.check, i, v, component.next_out - v)), component.data_type = parentNode.bits + (parentNode.last ? 64 : 0) + (parentNode.mode === jt ? 128 : 0) + (parentNode.mode === Xi || parentNode.mode === ja ? 256 : 0), (p === 0 && v === 0 || nextSibling === yl) && T === jr && (T = Fv), T
}

function Kv(component) {
    if (!component || !component.state) return ht;
    var nextSibling = component.state;
    return nextSibling.window && (nextSibling.window = null), component.state = null, jr
}

function Qv(component, nextSibling) {
    var parentNode;
    return !component || !component.state || (parentNode = component.state, !(parentNode.wrap & 2)) ? ht : (parentNode.head = nextSibling, nextSibling.done = !1, jr)
}

function Yv(component, nextSibling) {
    var parentNode = nextSibling.length,
        n, i, o;
    return !component || !component.state || (n = component.state, n.wrap !== 0 && n.mode !== Oo) ? ht : n.mode === Oo && (i = 1, i = _s(i, nextSibling, parentNode, 0), i !== n.check) ? Xf : (o = ad(component, nextSibling, parentNode, parentNode), o ? (n.mode = td, qf) : (n.havedict = 1, jr))
}
At.inflateReset = nd;
At.inflateReset2 = id;
At.inflateResetKeep = rd;
At.inflateInit = Wv;
At.inflateInit2 = od;
At.inflate = Jv;
At.inflateEnd = Kv;
At.inflateGetHeader = Qv;
At.inflateSetDictionary = Yv;
At.inflateInfo = "pako inflate (from Nodeca project)";
var sd = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
};

function Vv() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
}
var Zv = Vv,
    xn = At,
    oi = Yt,
    bo = Yr,
    Ce = sd,
    bs = cc,
    Xv = Qf,
    qv = Zv,
    cd = Object.prototype.toString;

function Hr(component) {
    if (!(this instanceof Hr)) return new Hr(component);
    this.options = oi.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ""
    }, component || {});
    var nextSibling = this.options;
    nextSibling.raw && nextSibling.windowBits >= 0 && nextSibling.windowBits < 16 && (nextSibling.windowBits = -nextSibling.windowBits, nextSibling.windowBits === 0 && (nextSibling.windowBits = -15)), nextSibling.windowBits >= 0 && nextSibling.windowBits < 16 && !(component && component.windowBits) && (nextSibling.windowBits += 32), nextSibling.windowBits > 15 && nextSibling.windowBits < 48 && (nextSibling.windowBits & 15 || (nextSibling.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Xv, this.strm.avail_out = 0;
    var parentNode = xn.inflateInit2(this.strm, nextSibling.windowBits);
    if (parentNode !== Ce.Z_OK) throw new Error(bs[parentNode]);
    if (this.header = new qv, xn.inflateGetHeader(this.strm, this.header), nextSibling.dictionary && (typeof nextSibling.dictionary == "string" ? nextSibling.dictionary = bo.string2buf(nextSibling.dictionary) : cd.call(nextSibling.dictionary) === "[object ArrayBuffer]" && (nextSibling.dictionary = new Uint8Array(nextSibling.dictionary)), nextSibling.raw && (parentNode = xn.inflateSetDictionary(this.strm, nextSibling.dictionary), parentNode !== Ce.Z_OK))) throw new Error(bs[parentNode])
}
Hr.prototype.push = function(component, nextSibling) {
    var parentNode = this.strm,
        n = this.options.chunkSize,
        i = this.options.dictionary,
        o, a, s, d, f, c = !1;
    if (this.ended) return !1;
    a = nextSibling === ~~nextSibling ? nextSibling : nextSibling === !0 ? Ce.Z_FINISH : Ce.Z_NO_FLUSH, typeof component == "string" ? parentNode.input = bo.binstring2buf(component) : cd.call(component) === "[object ArrayBuffer]" ? parentNode.input = new Uint8Array(component) : parentNode.input = component, parentNode.next_in = 0, parentNode.avail_in = parentNode.input.length;
    do {
        if (parentNode.avail_out === 0 && (parentNode.output = new oi.Buf8(n), parentNode.next_out = 0, parentNode.avail_out = n), o = xn.inflate(parentNode, Ce.Z_NO_FLUSH), o === Ce.Z_NEED_DICT && i && (o = xn.inflateSetDictionary(this.strm, i)), o === Ce.Z_BUF_ERROR && c === !0 && (o = Ce.Z_OK, c = !1), o !== Ce.Z_STREAM_END && o !== Ce.Z_OK) return this.onEnd(o), this.ended = !0, !1;
        parentNode.next_out && (parentNode.avail_out === 0 || o === Ce.Z_STREAM_END || parentNode.avail_in === 0 && (a === Ce.Z_FINISH || a === Ce.Z_SYNC_FLUSH)) && (this.options.to === "string" ? (s = bo.utf8border(parentNode.output, parentNode.next_out), d = parentNode.next_out - s, f = bo.buf2string(parentNode.output, s), parentNode.next_out = d, parentNode.avail_out = n - d, d && oi.arraySet(parentNode.output, parentNode.output, s, d, 0), this.onData(f)) : this.onData(oi.shrinkBuf(parentNode.output, parentNode.next_out))), parentNode.avail_in === 0 && parentNode.avail_out === 0 && (c = !0)
    } while ((parentNode.avail_in > 0 || parentNode.avail_out === 0) && o !== Ce.Z_STREAM_END);
    return o === Ce.Z_STREAM_END && (a = Ce.Z_FINISH), a === Ce.Z_FINISH ? (o = xn.inflateEnd(this.strm), this.onEnd(o), this.ended = !0, o === Ce.Z_OK) : (a === Ce.Z_SYNC_FLUSH && (this.onEnd(Ce.Z_OK), parentNode.avail_out = 0), !0)
};
Hr.prototype.onData = function(component) {
    this.chunks.push(component)
};
Hr.prototype.onEnd = function(component) {
    component === Ce.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = oi.flattenChunks(this.chunks)), this.chunks = [], this.err = component, this.msg = this.strm.msg
};

function uc(component, nextSibling) {
    var parentNode = new Hr(nextSibling);
    if (parentNode.push(component, !0), parentNode.err) throw parentNode.msg || bs[parentNode.err];
    return parentNode.result
}

function preloaded(component, nextSibling) {
    return nextSibling = nextSibling || {}, nextSibling.raw = !0, uc(component, nextSibling)
}
Ai.Inflate = Hr;
Ai.inflate = uc;
Ai.inflateRaw = preloaded;
Ai.ungzip = uc;
var tp = Yt.assign,
    rp = xi,
    np = Ai,
    ip = sd,
    ld = {};
tp(ld, rp, np, ip);
var op = ld;
const Wa = wf(op);
class ap {
    constructor() {
        assignProperty(this, "inflate");
        this.inflate = new Wa.Inflate({
            chunkSize: 65535,
            to: "string"
        }), this.inflate.onEnd = this.onEnd.bind(this)
    }
    dispatch(nextSibling) {
        if (!(nextSibling != null && nextSibling.nextSibling)) return;
        const parentNode = new CustomEvent("discord-message", {
            detail: nextSibling
        });
        window.dispatchEvent(parentNode)
    }
    onEnd(nextSibling) {
        const parentNode = Wa,
            n = this.inflate;
        if (!n) return;
        nextSibling !== parentNode.Z_OK && console.error(new Error("zlib error, ".concat(nextSibling.toString(), ", ").concat(n.strm.msg)));
        let i;
        const o = n.chunks;
        return i = o.length > 1 ? o.join("") : o[0], o.length = 0, this.dispatch(JSON.parse(i)), i
    }
    push(nextSibling) {
        const parentNode = Wa,
            n = this.inflate;
        if (n && nextSibling instanceof ArrayBuffer) {
            const i = new DataView(nextSibling),
                o = i.byteLength >= 4 && i.getUint32(i.byteLength - 4, !1) === 65535;
            n.push(nextSibling, !!o && parentNode.Z_SYNC_FLUSH)
        }
    }
    destroy() {
        this.inflate.onEnd = null, this.inflate.chunks = [], this.inflate = null
    }
}

function sp() {
    return new ap
}
const Gl = "bd802048216226edf1e10d836354e15b",
    Je = {
        Authorization: "",
        default_session_id: Gl,
        session_id: Gl,
        servers: {
            midjourney: {
                name: "Midjourney",
                application_id: "936929561302675456",
                commands: {
                    imagine: {
                        id: "938956540159881230",
                        version: "1118961510123847772"
                    },
                    info: {
                        id: "972289487818334209",
                        version: "1118961510123847776"
                    }
                },
                contexts: [0, 1, 2]
            },
            niji: {
                name: "Niji Journey",
                application_id: "1022952195194359889",
                commands: {
                    imagine: {
                        id: "1023054140580057099",
                        version: "1121575453916942378"
                    },
                    info: {
                        id: "1023054140580057102",
                        version: "1121575453916942383"
                    }
                },
                contexts: [0, 1, 2]
            }
        }
    };

function Jl() {
    let component = "",
        nextSibling = "",
        parentNode = location.pathname;
    if (parentNode.indexOf("/channels/") === 0) {
        const n = parentNode.replace("/channels/", "").split("/");
        nextSibling = n[0], component = n[1]
    }
    return {
        channel_id: component,
        guild_id: nextSibling
    }
}

function cp({
    nonce: component,
    prompt: nextSibling,
    channel_id: parentNode,
    guild_id: n,
    server: i = "midjourney"
}) {
    const o = Je.servers[i],
        {
            id: a,
            version: s
        } = o.commands.imagine,
        {
            application_id: d,
            name: f,
            contexts: c
        } = o,
        {
            session_id: p
        } = Je;
    return {
        type: 2,
        application_id: d,
        guild_id: n,
        channel_id: parentNode,
        session_id: p,
        data: {
            version: s,
            id: a,
            name: "imagine",
            type: 1,
            options: [{
                type: 3,
                name: "prompt",
                value: nextSibling
            }],
            application_command: {
                id: a,
                application_id: d,
                version: s,
                default_member_permissions: null,
                type: 1,
                nsfw: !1,
                name: "imagine",
                description: `Create images with ${f}`,
                dm_permission: !0,
                contexts: c,
                options: [{
                    type: 3,
                    name: "prompt",
                    description: "The prompt to imagine",
                    required: !0
                }]
            },
            attachments: []
        },
        nonce: component || Ro()
    }
}

function lp({
    nonce: component,
    channel_id: nextSibling,
    guild_id: parentNode,
    server: n = "midjourney"
}) {
    const i = Je.servers[n],
        {
            id: o,
            version: a
        } = i.commands.info,
        {
            application_id: s,
            contexts: d
        } = i,
        {
            session_id: f
        } = Je;
    return {
        type: 2,
        application_id: s,
        guild_id: parentNode,
        channel_id: nextSibling,
        session_id: f,
        data: {
            version: a,
            id: o,
            name: "info",
            type: 1,
            options: [],
            application_command: {
                id: o,
                application_id: s,
                version: a,
                default_member_permissions: null,
                type: 1,
                nsfw: !1,
                name: "info",
                description: "View information about your profile.",
                dm_permission: !0,
                contexts: d
            },
            attachments: []
        },
        nonce: component || Ro()
    }
}

function up(component) {
    const {
        Authorization: nextSibling
    } = Je, parentNode = new FormData;
    return parentNode.append("payload_json", JSON.stringify(cp(component))), fetch("https://discord.com/api/v9/interactions", {
        method: "POST",
        headers: {
            Authorization: nextSibling
        },
        body: parentNode
    }).then(n => {
        if (!n.ok) throw new Error(`Failed to send prompt: ${component.prompt}`);
        return n
    })
}
async function fp(component) {
    const {
        Authorization: nextSibling
    } = Je, parentNode = new FormData;
    parentNode.append("payload_json", JSON.stringify(lp(component)));
    try {
        await fetch("https://discord.com/api/v9/interactions", {
            method: "POST",
            headers: {
                Authorization: nextSibling
            },
            body: parentNode
        }).then(n => {
            if (!n.ok) throw new Error("Failed to send command: /info");
            return n
        })
    } catch {
        return null
    }
}
const Ln = window.localStorage,
    dp = window.XMLHttpRequest.prototype.open,
    hp = window.XMLHttpRequest.prototype.send,
    vp = window.XMLHttpRequest.prototype.setRequestHeader,
    pp = ["__autojourney_xhr__", "__sentry_xhr__", "__sentry_xhr_v2__", "__sentry_xhr_v3__", "__sentry_xhr_v4__", "__sentry_xhr_v5__", "__sentry_xhr_v6__", "__sentry_xhr_v7__", "__sentry_xhr_v8__", "__sentry_xhr_v9__", "__sentry_xhr_v10__"];

function gp(component) {
    const nextSibling = pp.find(parentNode => !!component[parentNode]);
    return nextSibling ? component[nextSibling] : null
}

function fc(component, nextSibling) {
    var parentNode, n;
    return (n = (parentNode = gp(component)) == null ? void 0 : parentNode.url) == null ? void 0 : n.includes(nextSibling)
}
window.XMLHttpRequest.prototype.open = function(component, nextSibling) {
    return this.__autojourney_xhr__ = this.__autojourney_xhr__ || {}, this.__autojourney_xhr__.url = nextSibling, !Je.Authorization && this.__autojourney_xhr__.Authorization && fc(this, "https://discord.com/") && (Je.Authorization = this.__autojourney_xhr__.Authorization), dp.apply(this, arguments)
};
window.XMLHttpRequest.prototype.send = function() {
    const component = arguments[0];
    if (component && Je.session_id === Je.default_session_id && fc(this, "https://discord.com/api/v9/interactions")) {
        let nextSibling;
        if (typeof component == "string") try {
            nextSibling = JSON.parse(component)
        } catch {} else if (component instanceof FormData) try {
            nextSibling = JSON.parse(component.get("payload_json"))
        } catch {}
        nextSibling && nextSibling.session_id && (Je.session_id = nextSibling.session_id)
    }
    return hp.apply(this, arguments)
};
window.XMLHttpRequest.prototype.setRequestHeader = function(component, nextSibling) {
    return !Je.Authorization && component === "Authorization" && (this.__autojourney_xhr__ = this.__autojourney_xhr__ || {}, this.__autojourney_xhr__.Authorization = nextSibling, fc(this, "https://discord.com/") && (Je.Authorization = nextSibling)), vp.apply(this, arguments)
};

function ud(component, nextSibling) {
    const parentNode = Object.getOwnPropertyDescriptor(WebSocket.prototype, component).get,
        n = Object.getOwnPropertyDescriptor(WebSocket.prototype, component).set;
    Object.defineProperty(window.WebSocket.prototype, component, {
        get() {
            return parentNode.apply(this)
        },
        set(...i) {
            const o = i[0];
            return i[0] = function(a) {
                return nextSibling.call(this, a), o.call(this, a)
            }, n.apply(this, i)
        }
    })
}
var Xu, qu;
let Jn = (qu = (Xu = window._ws) == null ? void 0 : Xu.state) == null ? void 0 : qu.messages;
ud("onmessage", function(component) {
    this.url.includes("discord.gg") && (this.ws = this.ws || sp(), Jn != null && Jn.length && (Jn.forEach(nextSibling => this.ws.push(nextSibling.data)), Jn = []), this.ws.push(component.data))
});
ud("onclose", function() {
    this.ws && this.ws.destroy()
});
const fd = {
        Unix: 0n,
        Twitter: 1288834974657n,
        Discord: 1420070400000n
    },
    ys = 0n,
    Kl = ys,
    mp = 1n,
    kn = -1n,
    dc = 5n,
    dd = 5n,
    Ko = 12n,
    _p = 0x3e0000n,
    bp = 0x1f000n,
    yp = kn ^ kn << dc,
    wp = kn ^ kn << dd,
    Ql = kn ^ kn << Ko,
    Yl = Ko + dc + dd,
    Vl = Ko + dc,
    Zl = Ko,
    Xl = () => BigInt(Date.now());
class Ir {
    constructor({
        epoch: nextSibling = fd.Unix,
        workerId: parentNode = ys,
        processId: n = ys
    } = {}) {
        assignProperty(this, "epoch");
        assignProperty(this, "workerId");
        assignProperty(this, "processId");
        assignProperty(this, "sequence", Kl);
        assignProperty(this, "latestTimestamp", Xl());
        this.epoch = nextSibling, this.workerId = parentNode & yp, this.processId = n & wp
    }
    nextId() {
        const nextSibling = Xl();
        return this.latestTimestamp === nextSibling ? this.sequence = this.sequence + mp & Ql : (this.sequence = Kl, this.latestTimestamp = nextSibling), this.generateCustomId({
            timestamp: nextSibling,
            sequence: this.sequence
        })
    }
    deconstruct(nextSibling) {
        return Ir.deconstruct(nextSibling, {
            epoch: this.epoch
        })
    }
    generateCustomId({
        timestamp: nextSibling,
        sequence: parentNode
    }) {
        return nextSibling - this.epoch << Yl | this.workerId << Vl | this.processId << Zl | parentNode
    }
    static deconstructTimestamp(nextSibling, parentNode) {
        return (nextSibling >> Yl) + parentNode
    }
    static deconstructWorkerId(nextSibling) {
        return (nextSibling & _p) >> Vl
    }
    static deconstructProcessId(nextSibling) {
        return (nextSibling & bp) >> Zl
    }
    static deconstructSequence(nextSibling) {
        return nextSibling & Ql
    }
    static deconstruct(nextSibling, {
        epoch: parentNode
    }) {
        return {
            timestamp: Ir.deconstructTimestamp(nextSibling, parentNode),
            workerId: Ir.deconstructWorkerId(nextSibling),
            processId: Ir.deconstructProcessId(nextSibling),
            sequence: Ir.deconstructSequence(nextSibling)
        }
    }
}
const hc = "TAMPER_MIDJOURNEY_STORAGE",
    vc = "TAMPER_MIDJOURNEY_STORAGE_UNFINISHED",
    xp = new Ir({
        workerId: BigInt(1),
        epoch: fd.Twitter
    }),
    Ro = () => xp.nextId().toString();
let hd = 0;

function Sp() {
    return hd
}

function ws(component = Date.now()) {
    hd = component
}

function getRandomNumberInRange(component, nextSibling) {
    return Math.floor(Math.random() * (nextSibling - component + 1) + component)
}

function Ap(component) {
    const nextSibling = /\s+(--|—)repeat\s+(\d+)/,
        parentNode = [],
        n = component.split(`
`).map(i => i.replace(/^.*\/imagine\s+prompt:\s+/g, "").trim().replace(/^\d+\./, "").trim()).filter(i => i.trim().length > 0).filter(i => !i.includes("Keywords"));
    for (const i of n) {
        const o = i.match(nextSibling);
        if (o) {
            const a = o[2],
                s = i.replace(nextSibling, "").trim();
            parentNode.push(...Array.from({
                length: Number(a)
            }).map(() => s))
        } else parentNode.push(i)
    }
    return parentNode
}

function Kn(component) {
    return component > 9 ? `${component}` : `0${component}`
}

function xs(component = new Date) {
    const nextSibling = component.getFullYear(),
        parentNode = component.getMonth(),
        n = component.getDate(),
        i = component.getHours(),
        o = component.getMinutes(),
        a = component.getSeconds();
    return `${nextSibling}-${Kn(parentNode+1)}-${Kn(n)} ${Kn(i)}:${Kn(o)}:${Kn(a)}`
}

function Cp(component) {
    component = Math.floor(component / 1e3);
    const nextSibling = Math.floor(component / 3600),
        parentNode = Math.floor(component % 3600 / 60),
        n = component % 60;
    let i = "";
    return nextSibling && (i += ` ${nextSibling} 小时`), parentNode && (i += ` ${parentNode} 分`), n && (i += ` ${n} 秒`), i
}

function Tp(component = 200) {
    try {
        const nextSibling = JSON.parse(Ln.getItem(hc) || "[]") || [];
        return nextSibling.length > component && (nextSibling.reverse(), nextSibling.length = component, nextSibling.reverse(), vd(nextSibling)), nextSibling
    } catch {
        return []
    }
}

function vd(component) {
    try {
        const nextSibling = JSON.stringify(component);
        Ln.setItem(hc, nextSibling)
    } catch {}
}

function kp() {
    try {
        Ln.removeItem(hc)
    } catch {}
}

function Mp() {
    try {
        return JSON.parse(Ln.getItem(vc) || "[]") || []
    } catch {
        return []
    }
}

function Ip(component) {
    try {
        const nextSibling = JSON.stringify(component);
        Ln.setItem(vc, nextSibling)
    } catch {}
}

function Op() {
    try {
        Ln.removeItem(vc)
    } catch {}
}
class Rp {
    constructor() {
        assignProperty(this, "list", []);
        assignProperty(this, "failed", []);
        assignProperty(this, "succeed", []);
        assignProperty(this, "finished", [])
    }
    get length() {
        return this.list.length
    }
    get unfinished() {
        return this.list.filter(nextSibling => !this.finished.includes(nextSibling))
    }
    reset() {
        return this.list.length = 0, this.failed.length = 0, this.succeed.length = 0, this.finished.length = 0, this
    }
    add(nextSibling) {
        return Array.isArray(nextSibling) ? this.list.push(...nextSibling) : this.list.push(nextSibling), this
    }
    has(nextSibling) {
        return this.list.includes(nextSibling)
    }
    next(nextSibling) {
        const parentNode = this.unfinished;
        return parentNode.length ? nextSibling ? parentNode[Math.floor(Math.random() * parentNode.length)] : parentNode[0] : null
    }
    async run(nextSibling) {
        try {
            (await nextSibling.fn()).status !== "blocked" && (this.succeed.push(nextSibling), this.finished.push(nextSibling))
        } catch {
            this.failed.push(nextSibling), this.finished.push(nextSibling)
        }
        return this
    }
}

function Np() {
    return new Rp
}
var Lp = Object.defineProperty,
    Te = (component, nextSibling) => Lp(component, "name", {
        value: nextSibling,
        configurable: !0
    });

function dn(component) {
    if (typeof component != "function") throw new TypeError(`The listener argument must be a function. Received ${typeof component}`)
}
Te(dn, "validateListener");

function Ss(component) {
    if (component && !(component instanceof AbortSignal)) throw new TypeError(`The signal option must be an AbortSignal. Received ${component}`)
}
Te(Ss, "validateAbortSignal");

function pd(component, nextSibling) {
    for (; nextSibling + 1 < component.length; nextSibling++) component[nextSibling] = component[nextSibling + 1];
    component.pop()
}
Te(pd, "spliceOne");

function yo(component) {
    switch (component.length) {
        case 2:
            return [component[0], component[1]];
        case 3:
            return [component[0], component[1], component[2]];
        case 4:
            return [component[0], component[1], component[2], component[3]];
        case 5:
            return [component[0], component[1], component[2], component[3], component[4]];
        case 6:
            return [component[0], component[1], component[2], component[3], component[4], component[5]]
    }
    return component.slice()
}
Te(yo, "arrayClone");

function gd(component, nextSibling) {
    for (let parentNode = 0; parentNode < component.length - 3; parentNode++) {
        const n = nextSibling.indexOf(component[parentNode]);
        if (n !== -1) {
            const i = nextSibling.length - n;
            if (i > 3) {
                let o = 1;
                const a = Math.min(component.length - parentNode, i);
                for (; a > o && component[parentNode + o] === nextSibling[n + o];) o++;
                if (o > 3) return [o, parentNode]
            }
        }
    }
    return [0, 0]
}
Te(gd, "identicalSequenceRange");

function md(component, nextSibling) {
    let parentNode = "";
    try {
        const {
            name: d
        } = this.constructor;
        d !== "AsyncEventEmitter" && (parentNode = ` on ${d} instance`)
    } catch {}
    const n = `
Emitted 'error' event${parentNode} at:
`,
        i = component.stack.split(`
`).slice(1),
        o = nextSibling.stack.split(`
`).slice(1),
        {
            0: a,
            1: s
        } = gd(o, i);
    return a > 0 && o.splice(s + 1, a - 2, "    [... lines matching original stack trace ...]"), component.stack + n + o.join(`
`)
}
Te(md, "enhanceStackTrace");
var pc = class {
    constructor() {
        this._events = {
            __proto__: null
        }, this._eventCount = 0, this._maxListeners = 10, this._internalPromiseMap = new Map, this._wrapperId = 0n
    }
    addListener(component, nextSibling) {
        dn(nextSibling);
        const parentNode = this._wrapListener(component, nextSibling, !1);
        return this._addListener(component, parentNode, !1), this
    }
    on(component, nextSibling) {
        return this.addListener(component, nextSibling)
    }
    once(component, nextSibling) {
        dn(nextSibling);
        const parentNode = this._wrapListener(component, nextSibling, !0);
        return this._addListener(component, parentNode, !1), this
    }
    removeListener(component, nextSibling) {
        dn(nextSibling);
        const parentNode = this._events,
            n = parentNode[component];
        if (n === void 0) return this;
        if (n === nextSibling || n.listener === nextSibling) --this._eventCount === 0 ? this._events = {
            __proto__: null
        } : (delete parentNode[component], parentNode.removeListener && this.emit("removeListener", component, n.listener ?? n));
        else if (typeof n != "function") {
            let i = -1;
            for (let o = n.length - 1; o >= 0; o--)
                if (n[o] === nextSibling || n[o].listener === nextSibling) {
                    i = o;
                    break
                } if (i < 0) return this;
            i === 0 ? n.shift() : pd(n, i), n.length === 0 && (delete parentNode[component], --this._eventCount), parentNode.removeListener !== void 0 && this.emit("removeListener", component, nextSibling)
        }
        return this
    }
    off(component, nextSibling) {
        return this.removeListener(component, nextSibling)
    }
    removeAllListeners(component) {
        const nextSibling = this._events;
        if (nextSibling.removeListener === void 0) return component ? nextSibling[component] !== void 0 && (--this._eventCount === 0 ? this._events = {
            __proto__: null
        } : delete nextSibling[component]) : (this._events = {
            __proto__: null
        }, this._eventCount = 0), this;
        if (!component) {
            for (const n of Reflect.ownKeys(nextSibling)) n !== "removeListener" && this.removeAllListeners(n);
            return this.removeAllListeners("removeListener"), this._events = {
                __proto__: null
            }, this._eventCount = 0, this
        }
        const parentNode = nextSibling[component];
        if (typeof parentNode == "function") this.removeListener(component, parentNode);
        else if (parentNode !== void 0)
            for (let n = parentNode.length - 1; n >= 0; n--) this.removeListener(component, parentNode[n]);
        return this
    }
    setMaxListeners(component) {
        if (typeof component != "number" || component < 0 || Number.isNaN(component)) throw new RangeError(`Expected to get a non-negative number for "setMaxListeners", got ${component} instead`);
        return this._maxListeners = component, this
    }
    getMaxListeners() {
        return this._maxListeners
    }
    listeners(component) {
        const nextSibling = this._events[component];
        if (nextSibling === void 0) return [];
        if (typeof nextSibling == "function") return [nextSibling.listener ?? nextSibling];
        const parentNode = yo(nextSibling);
        for (let n = 0; n < parentNode.length; ++n) {
            const i = parentNode[n].listener;
            typeof i == "function" && (parentNode[n] = i)
        }
        return parentNode
    }
    rawListeners(component) {
        const nextSibling = this._events[component];
        return nextSibling === void 0 ? [] : typeof nextSibling == "function" ? [nextSibling] : yo(nextSibling)
    }
    emit(component, ...nextSibling) {
        let parentNode = component === "error";
        const n = this._events;
        if (n !== void 0) parentNode = parentNode && n.error === void 0;
        else if (!parentNode) return !1;
        if (parentNode) {
            let o;
            if (nextSibling.length > 0 && (o = nextSibling[0]), o instanceof Error) {
                try {
                    const d = {};
                    Error.captureStackTrace(d, pc.prototype.emit), Object.defineProperty(o, "stack", {
                        value: md.call(this, o, d),
                        configurable: !0
                    })
                } catch {}
                throw o
            }
            const a = String(o),
                s = new Error(`Unhandled 'error' event emitted, received ${a}`);
            throw s.context = o, s
        }
        const i = n[component];
        if (i === void 0) return !1;
        if (typeof i == "function") {
            const o = i.apply(this, nextSibling);
            o != null && As(this, o)
        } else {
            const o = i.length,
                a = yo(i);
            for (let s = 0; s < o; ++s) {
                const d = a[s].apply(this, nextSibling);
                d != null && As(this, d)
            }
        }
        return !0
    }
    listenerCount(component) {
        const nextSibling = this._events;
        if (nextSibling === void 0) return 0;
        const parentNode = nextSibling[component];
        return typeof parentNode == "function" ? 1 : (parentNode == null ? void 0 : parentNode.length) ?? 0
    }
    prependListener(component, nextSibling) {
        dn(nextSibling);
        const parentNode = this._wrapListener(component, nextSibling, !1);
        return this._addListener(component, parentNode, !0), this
    }
    prependOnceListener(component, nextSibling) {
        dn(nextSibling);
        const parentNode = this._wrapListener(component, nextSibling, !0);
        return this._addListener(component, parentNode, !0), this
    }
    eventNames() {
        return this._eventCount > 0 ? Reflect.ownKeys(this._events) : []
    }
    async waitForAllListenersToComplete() {
        const component = [...this._internalPromiseMap.values()];
        return component.length === 0 ? !1 : (await Promise.all(component), !0)
    }
    _addListener(component, nextSibling, parentNode) {
        this._events.newListener !== void 0 && this.emit("newListener", component, nextSibling.listener ?? nextSibling);
        let n = this._events[component];
        if (n === void 0 ? (n = this._events[component] = nextSibling, ++this._eventCount) : typeof n == "function" ? n = this._events[component] = parentNode ? [nextSibling, n] : [n, nextSibling] : parentNode ? n.unshift(nextSibling) : n.push(nextSibling), this._maxListeners > 0 && n.length > this._maxListeners && !n._hasWarnedAboutMaxListeners) {
            n._hasWarnedAboutMaxListeners = !0;
            const i = [`Possible AsyncEventEmitter memory leak detected. ${n.length} ${String(component)} listeners added to ${this.constructor.name}.`, "Use emitter.setMaxListeners() to increase the limit."].join(" ");
            console.warn(i)
        }
    }
    _wrapListener(component, nextSibling, parentNode) {
        if (!parentNode) return nextSibling;
        const n = {
                fired: !1,
                wrapFn: void 0,
                eventEmitter: this,
                eventName: component,
                listener: nextSibling
            },
            o = _d.bind(n);
        return o.listener = nextSibling, n.wrapFn = o, o
    }
    static listenerCount(component, nextSibling) {
        return component.listenerCount(nextSibling)
    }
    static async once(component, nextSibling, parentNode = {}) {
        const n = parentNode == null ? void 0 : parentNode.signal;
        if (Ss(n), n != null && n.aborted) throw new qn(void 0, {
            cause: Zn(n)
        });
        return new Promise((i, o) => {
            const a = Te(f => {
                    component.removeListener(nextSibling, s), n && hn(component, nextSibling, d), o(f)
                }, "errorListener"),
                s = Te((...f) => {
                    component.removeListener("error", a), n && hn(n, "abort", d), i(f)
                }, "resolver");
            component.once(nextSibling, s), nextSibling !== "error" && component.once("error", a);
            const d = Te(() => {
                hn(component, nextSibling, s), hn(component, "error", a), o(new qn(void 0, {
                    cause: Zn(n)
                }))
            }, "abortListener");
            n && Es(n, "abort", d, {
                once: !0
            })
        })
    }
    static on(component, nextSibling, parentNode = {}) {
        const n = parentNode == null ? void 0 : parentNode.signal;
        if (Ss(n), n != null && n.aborted) throw new qn(void 0, {
            cause: Zn(n)
        });
        const i = [],
            o = [];
        let a = null,
            s = !1;
        const d = Te(() => {
                c(new qn(void 0, {
                    cause: Zn(n)
                }))
            }, "abortListener"),
            f = Te((...v) => {
                const h = o.shift();
                h ? h.resolve(Xn(v, !1)) : i.push(v)
            }, "eventHandler"),
            c = Te(v => {
                s = !0;
                const h = o.shift();
                h ? h.reject(v) : a = v, p.return()
            }, "errorHandler"),
            p = Object.setPrototypeOf({
                next() {
                    const v = i.shift();
                    if (v) return Promise.resolve(Xn(v, !1));
                    if (a) {
                        const h = Promise.reject(a);
                        return a = null, h
                    }
                    return s ? Promise.resolve(Xn(void 0, !0)) : new Promise((h, _) => {
                        o.push({
                            resolve: h,
                            reject: _
                        })
                    })
                },
                return () {
                    component.off(nextSibling, f), component.off("error", c), n && hn(n, "abort", d), s = !0;
                    const v = Xn(void 0, !0);
                    for (const h of o) h.resolve(v);
                    return Promise.resolve(v)
                },
                throw (v) {
                    if (!v || !(v instanceof Error)) throw new TypeError(`Expected Error instance to be thrown in AsyncEventEmitter.AsyncIterator. Got ${v}`);
                    a = v, component.off(nextSibling, f), component.off("error", c)
                },
                [Symbol.asyncIterator]() {
                    return this
                }
            }, Pp);
        return component.on(nextSibling, f), nextSibling !== "error" && component.on("error", c), n && Es(n, "abort", d), p
    }
};
Te(pc, "AsyncEventEmitter");

function _d() {
    if (!this.fired) return this.eventEmitter.removeListener(this.eventName, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.eventEmitter) : this.listener.apply(this.eventEmitter, arguments)
}
Te(_d, "onceWrapper");

function Zn(component) {
    return component == null ? void 0 : component.reason
}
Te(Zn, "getReason");

function hn(component, nextSibling, parentNode, n) {
    typeof component.off == "function" ? component.off(nextSibling, parentNode) : typeof component.removeEventListener == "function" && component.removeEventListener(nextSibling, parentNode, n)
}
Te(hn, "eventTargetAgnosticRemoveListener");

function Es(component, nextSibling, parentNode, n) {
    typeof component.on == "function" ? n != null && n.once ? component.once(nextSibling, parentNode) : component.on(nextSibling, parentNode) : typeof component.addEventListener == "function" && component.addEventListener(nextSibling, parentNode, n)
}
Te(Es, "eventTargetAgnosticAddListener");
var Pp = Object.getPrototypeOf(Object.getPrototypeOf(async function*() {}).prototype);

function Xn(component, nextSibling) {
    return {
        value: component,
        done: nextSibling
    }
}
Te(Xn, "createIterResult");
var qn = class extends Error {
    constructor(component = "The operation was aborted", nextSibling = void 0) {
        if (nextSibling !== void 0 && typeof nextSibling != "object") throw new TypeError("Failed to create AbortError: options is not an object or undefined");
        super(component, nextSibling), this.code = "ABORT_ERR", this.name = "AbortError"
    }
};
Te(qn, "AbortError");

function As(component, nextSibling) {
    try {
        const parentNode = nextSibling.finally;
        if (typeof parentNode == "function") {
            const n = String(++component._wrapperId);
            component._internalPromiseMap.set(n, nextSibling), parentNode.call(nextSibling, Te(function() {
                component._internalPromiseMap.delete(n)
            }, "final"))
        }
    } catch (parentNode) {
        component.emit("error", parentNode)
    }
}
Te(As, "handleMaybeAsync");
const ql = 10,
    eu = [Je.servers.midjourney.application_id, Je.servers.niji.application_id],
    eo = {};

function Dp(component, nextSibling) {
    var a, s;
    if (component.embeds.length === 0) return;
    const o = {
        ...((component.embeds[0].description || "") + `
`).split(`
**`).map(d => d.trim()).filter(d => !!d).map(d => {
            const [f, c] = d.split("**:");
            return {
                key: f.trim().replace(/^\*+/, ""),
                value: c.trim()
            }
        }).reduce((d, f) => (d[f.key] = f.value, d), {}),
        subscription: "basic",
        queueJobs: 0,
        queuedJobsFast: 0,
        queuedJobsRelax: 0,
        jobMode: "fast",
        id: component.id,
        nonce: nextSibling
    };
    return o["Job Mode"] == "Relaxed" && (o.jobMode = "relaxed"), (a = o.Subscription) != null && a.includes("Standard") ? o.subscription = "standard" : (s = o.Subscription) != null && s.includes("Pro") && (o.subscription = "pro"), o["Queued Jobs (fast)"] && (o.queuedJobsFast = parseInt(o["Queued Jobs (fast)"]) || 0), o["Queued Jobs (relax)"] && (o.queuedJobsRelax = parseInt(o["Queued Jobs (relax)"]) || 0), o.queueJobs = o.queuedJobsFast + o.queuedJobsRelax, o
}
class Fp extends pc {
    constructor() {
        super();
        assignProperty(this, "queueJobs", 0);
        assignProperty(this, "maxQueuedJobs", ql);
        assignProperty(this, "queuedJobIds", {});
        assignProperty(this, "jobMode", "fast");
        assignProperty(this, "subscription", "basic");
        assignProperty(this, "waitTimer");
        assignProperty(this, "waitResolve", null);
        this.start()
    }
    start() {
        window.addEventListener("discord-message", this.onMessage.bind(this), !1), this.on("MESSAGE_CREATE", parentNode => {
            var n, i;
            eu.includes(parentNode.author.id) && (((n = parentNode.interaction) == null ? void 0 : n.name) === "info" ? this.updateNonceMap(parentNode.id, parentNode.nonce) : ((i = parentNode.interaction) == null ? void 0 : i.name) === "imagine" && this.handleImagineMessage(parentNode))
        }), this.on("MESSAGE_UPDATE", parentNode => {
            var n, i;
            eu.includes(parentNode.author.id) && (((n = parentNode.interaction) == null ? void 0 : n.name) === "info" ? (this.handleInfoMessage(parentNode), this.updateNonceMap(parentNode.id)) : ((i = parentNode.interaction) == null ? void 0 : i.name) === "imagine" && this.handleImagineMessageUpdate(parentNode))
        })
    }
    onMessage(parentNode) {
        const n = parentNode.detail;
        n != null && n.nextSibling && (console.log(n.nextSibling, n.d), n.nextSibling === "MESSAGE_CREATE" ? this.emit("MESSAGE_CREATE", n.d) : n.nextSibling === "MESSAGE_UPDATE" && this.emit("MESSAGE_UPDATE", n.d))
    }
    updateNonceMap(parentNode, n) {
        n ? eo[parentNode] = n : delete eo[parentNode]
    }
    onceByNonce(parentNode, n, i) {
        const o = (...a) => {
            n.call(this, ...a), this.off(parentNode, o)
        };
        return this.on(parentNode, o)
    }
    getQueueJobs() {
        return this.queueJobs
    }
    canPushJobs() {
        return this.queueJobs < this.maxQueuedJobs
    }
    checkQueueJobs() {
        var parentNode;
        this.canPushJobs() && ((parentNode = this.waitResolve) == null || parentNode.call(this, !0), this.stopWaitQueueJobs(!1))
    }
    stopWaitQueueJobs(parentNode = !0) {
        var n;
        parentNode && ((n = this.waitResolve) == null || n.call(this, !1)), clearInterval(this.waitTimer)
    }
    waitQueueJobs(parentNode) {
        return new Promise(n => {
            let i = Date.now(),
                o;
            this.stopWaitQueueJobs(), this.waitResolve = n, this.waitTimer = setInterval(() => {
                if (Date.now() - i <= 15 * 60 * 1e3) this.checkQueueJobs();
                else if (!o) {
                    const {
                        prompt: a,
                        ...s
                    } = parentNode.opts;
                    o = this.getQueueJobsByInfo(s).then(d => {
                        d < 0 || d < ql && (n(!0), this.stopWaitQueueJobs(!1), d === 0 && ws())
                    }).finally(() => {
                        i = Date.now(), o = null
                    })
                }
            }, 10 * 1e3)
        })
    }
    handleInfoMessage(parentNode) {
        if (!eo[parentNode.id]) return;
        const n = Dp(parentNode, eo[parentNode.id]);
        n && (this.queueJobs = n.queueJobs, this.jobMode = n.jobMode, this.subscription = n.subscription, this.emit("info", n), this.checkQueueJobs())
    }
    handleImagineMessage(parentNode) {
        const n = parentNode.embeds[0],
            i = n == null ? void 0 : n.title;
        i === "Job queued" ? (this.queueJobs++, this.queuedJobIds[parentNode.id] = 1, this.emit("imagine", {
            id: parentNode.id,
            embedTitle: i,
            nonce: parentNode.nonce,
            status: "queued"
        })) : i === "Queue full" ? (this.queueJobs = this.maxQueuedJobs, this.emit("imagine", {
            id: parentNode.id,
            embedTitle: i,
            nonce: parentNode.nonce,
            status: "blocked"
        })) : (n == null ? void 0 : n.color) === 16711680 ? this.emit("imagine", {
            id: parentNode.id,
            embedTitle: i,
            nonce: parentNode.nonce,
            status: "error"
        }) : (this.emit("imagine", {
            id: parentNode.id,
            nonce: parentNode.nonce,
            status: "started"
        }), this.queuedJobIds[parentNode.id] && delete this.queuedJobIds[parentNode.id], this.queueJobs > 0 && (this.queueJobs--, this.checkQueueJobs()))
    }
    handleImagineMessageUpdate(parentNode) {
        const n = parentNode.attachments;
        n != null && n.length && this.queuedJobIds[parentNode.id] && (delete this.queuedJobIds[parentNode.id], this.queueJobs > 0 && (this.queueJobs--, this.checkQueueJobs()))
    }
    async imagine(parentNode) {
        const n = Ro();
        return new Promise((i, o) => {
            up({
                ...parentNode,
                nonce: n
            }).catch(o), this.onceByNonce("imagine", a => {
                i(a)
            }, n), setTimeout(() => {
                o(new Error("/imagine timeout"))
            }, 8e3)
        })
    }
    async info(parentNode) {
        const n = Ro();
        return new Promise((i, o) => {
            fp({
                ...parentNode,
                nonce: n
            }).catch(o), this.onceByNonce("info", a => {
                i(a)
            }, n), setTimeout(() => {
                o(new Error("/info timeout"))
            }, 8e3)
        })
    }
    async getQueueJobsByInfo(parentNode) {
        try {
            return (await this.info(parentNode)).queueJobs
        } catch {
            return -1
        }
    }
}

function Bp() {
    return new Fp
}
const zp = "data:application/octet-stream;base64,UklGRqYMAABXRUJQVlA4IJoMAACQOQCdASrwAPAAPm00lkikIqIhJDNZcIANiWlu4XVQ+rOZ8bf3ftJ/zP9Y8gfFx6s9teS71P5mfxn8D/vuEX4vagX4//Pv9DvDtovQF9v/rP/R9Tj5DzK+xnsBcApQA/Rvqy/2X7Q+eL8//zP7I/Ab/Pf8B6W3sQ/cv2Nv2z//46qVJ5ASodTKTyAlQ6mUnkBKh1MpPICVA2/I5YSLo5a8+egF0qHUykzFn0tilMHSOANxVcTpzGwGJHSRMpPICLxERJHrO0ltE1JP3YwpS6qVsK1qKHCM3PICVA9GVSHgw9pwRnKr981FAsoR7Dz60ZcF0qB0q2zuy2RF/VWivFlojis+tAL3kA2Tey6mUmYhJXrFHoY33uMH29bQ7FxHFwFJbnXF/iLvUCkqTv1sb1EBPOV/mPxRSiNG2gT4MkPBV7T/upqVXUsoa/yDgT7D/ngXFTVV8wW8oeH76P/H2YPkTexOJimmRcT8i62xGrC8CbUWXg17H4vP//0kI8QyyR86nDerrnTgxeL/GtSRYtAft4yKqvgdsVo0ylD8Ghyd/SFsRg+5JZziHihEU6hDzan960z095lkupw9ii63Me/XaalsPUyk8gJUOplJ5ASodTKTx/0AAP7/sX46KAAAA9Rf4JV2Em4f5WM0kLl/VLQeI9s7Umq/X1fDzIgvgbSwhNW9qz3JYawHN7QzMONplL8bALeLKPvO/stzKmFR7OKuCf2toCPC0272OniMVT+KbHvC5AHI1kXrCoIEtKaXaMTYucJTPsbx18Z+iXSY0szEaFBDhuSrTr17bet1OMPJV4oj9a/U+65tjVJAsOKpSzK9SxUQWB9ZlQpNIExbAFfPn1QP+JrndizKChOHtShvtEhn5etSfj2g8biHT9QiOqWMhEWfkZTLZCL3K/ey/kTfCvR/fbrZ0OBvAvdfuvAt8a6YfcBCyKGfk0SYhpmggXe9binXJ+IS0WYtHckokIEYj1IU0iAjlZ4vafi7OaaE352Mnj1a4lyhQDaqW+CPKNaHB9OxRajRHmYiEJIn1H2je+TrMbrA4FMYefF5KJdSWHjg3Zmoc0J9eEdfOPdsZLvuDznNhl44hXF6H+nZYMkOLkKLtC0TPd2k4WMdE6J7VgJqF0jeoJwKZz2CJcv1EZnHvwr9koY8HgwP5dFl62j/bsJuniObtJtVZNt9pGO+vssmNxpP0V7icp+GQtm5dX5Heci20lArxVSg0tkt38gSTCMYyO4jgSbZm4DZwNPP98Rqe38+BMT6KR3OaqWcHc7NQpckeBUvKLPzUa8xOf2UAcJlwR08FJWS2P64+wMBo1IQYejfoKPWNK7ctB9AwOFrqMqWgXm6nbaj1C2wC4ghuFDcNdrCOgHuMQcHhXclPxXxaMvD4+bXCfRZ9ZDidMBZ3h+fvDAjqps9AA117tZoFcOG9K1y5OHx5SyAlY/y5eU51czLQNtqLfcbWb11W+BjjuPLg0I6N8IXbstg2Eb6TJBrE9MBNtDBdwDAOgLlWZp9GYx08gMRFKer2HLvDFzKUhMA8dA36DMLZSQ7U+yjTDeVpok9p5ghRQdDTSaK/YAUgWhWrnNP2ieuE1ThQEWMN1l2sVK+ppETRx0yap2oU5huKF/skcAF766TtPWc4loeyPGuZhh3zX9RiLY8Y5IwL3z6PH1HMVNMCiMcoJ6eqbAJONlXb809XrvkOJ/7dU2fOXnzB+ztlR6G/7KbAPME0BFI6yCOLt5YtFw0v+u3LmaqBbZ1+FeL/AiEcZ2wFbgzIwAEYW3KA9FpNe1UT2y1kw5jOjtjaq225SEQdRpcCxAhxWeSozzJAEPF0BGh6KZGwsmuaYuGJFiA6rrfck1mmCAUJOn6er6d++aG4pnxnJHgLus80KFr95vgDnjZzvGFrEIXQXahmp0bztZyvVxK+tay1fAm67PvvaYKWnpp29JT1ULjeD38ll5mrwpFKYN+1ETj4703g+gxBDujrHVDijMRa9ArC7HZFJ2lHYetbT1mgIMeVQZDNjRWNCsco5GhNBg7k+HveHKV6fuPrb7/hlR9I+ktTbe5i7aucGF9u3O61U9xAR73AtLfF72Iu66LrZZXyBe9JAug41d4k0st8CXnVQ78xSnNSbbOuCJ5xrPw6U3ZbsULIFG0ESpiEiK4l41xofzA16Bnvt0Qqn9sv+//qkqNSWTV3grnql/gb+uWbl4x2X/+1xyX3w5EK5W3GgS9GuExR49i9YT6pn/lIJ1jqT9GwniAGOy/MyyO2kdG1S9UsUhw7RZnKG8qUiEBKS/NONTS+CWeJbW8g+NwceKLx8jEATJf/KFRc6qncOqGLNsuiPx8lOqFH5iKxorGHX/jYKP+XyjY931slj8fMO2Wm2ABzqERnNOPs3JHNuQf9OYjdj6uCTJpxeL1u6EETsC4qvj7JKJuI/XBzwxfaxDN1t0wCAixqmczHpnKrXvRTPIAjxsgxg2ddDWk4rq2r5C5/ZXL7xUYWzflfFTAmOhSJffKZxYvCpOqQL1K+O07fv8tbzVSfogi+TiMHv3HItL4QIi2sWPb6y4nH+YJuRet2qC4NdrTRkb5O2eyVdpp4fL17cDx3StEKiN90OgzE/q5YSN4baJcYJIR2rKFDq0nVD3TIfPqDKZeMSME5F8qKYrzm9bqUHnDTBwy4YLePC7VGW22qd5xcMSt63xgMGJy8B12jMWztv588hGp8AhoERJNxGFn0ICwNzdXEXsGUN2827WE/Y4mrpVH/idtmNJ5Lt3+7M2exsJkX97aWjx3JMUDSNfbaXUPYu/3YAAMOhs1l6hAqyl1AQmadKYLqsyD+wGs7AmGDMWcr8Bw8Npd2xXqdseSfzent4n2n86QNzEiNZ/RrzDvzTwdX1zOi2rqA3sZRWlR3/lZ+js19ufUAfTtH+wKK/rSAzVHSztnn/z2PxHaqH9QRYZtfvO6aNi/nHHeInNnCFDLvE7lIPohVKvJueof68hLquU6z1twYpdUMZsjqzV1J48lvIcMNTVYhw0xCty54NHm3AcJ95+mCKJyGab4gSJQsqHKWY/bv7jnSkahNevO3HobDFhJszGZf2NLXvi0MJA8Y1j9H9P2CiXK1DgcOjz2zKI/ffFBhpJLk0jBbSG8+/Wa8DwKmoXYYtJPOKAcKR/aQKaPKevh/kmpwdJ5P9R23viLgQnsGM/x7bkY0R+4oo9xqQbY3NuNoWFkRz/vwGeJh955AzOnYGeo9shC/5VKINLkbrgEmz0YAh3XMy/H6HSvMBc16FbJcQdl7UocGntLEe8z3ksXxlCoLaP7lP0QuQvv3QNE++ielw7zIriX5HO0htN/+ruqomkekYZtrrPiYQRbiWQP9bbWZTRuaq10XPqHjLb31JJ3P3dnsUzXqw8Nj4PfxElCRmUl4d8HAnRzEvqv7RD4MNQdDmWkWYY+siHgcDNBEFZbbAdQO0i2jfw1JIl3CjS1qW1uOnLp5/6bkMGCth4v8R1MTZUpZhgYjYmwCyQBChKi0ypdsZhU0//UkG26nx+5Q5AhgYqKmfHHT/XfVsqvaeLL2y+XAfOHEtafFI8UgUjT9WrDiXJPNwgzCudL5OjpL7IX+pw60953zKi6w5hoWnn6mBq/F1ODP7n7aIJWE1YcVWAknNTf+QBOrI4pgCdBot+L/UE862Xt8pdOOGB+dD2Pw6ThZSV2rFVsSAYAvqmMT82D9dRVjm5J/I54KNyuY76NgDZitRZqb6VX2iuIIROmeCbjRhxQ9TiNT3v4Ah8CSsJG707kNwTP9aoJ4G89HdqQYFIE0c1t0IEdwsvAoFAE+fwXDZO2hK27feZcWgKoY305gwpCzBSbg4Y04g5o0Ft2wBsX6g3KZeykeuAK78jsfIoum2hLhyID0T4MrAF32AzYxySQOImeP+g/Xl4g/bDki84MowknM/kz8L8ZvIkIVeBHbgeZc4elFTCKXCL7vhqLo1chJ4IFPyH/CqRYRIPSHSkTj/ezY82uK4fslg0EgSrX324WpoB5GY9ITHWVa8VQzuPJvw+af+7HsbdUte4Xkm7slK78Tts83LgVRGi0Q9/ptBHlJkPh578OrC4U/gjiMDNNmOF6Bokvgx7QHmUlIbdhIZqcbrEIZQ2Qhi39KW/vsrymAlzxxj99bhLEAJdz3K8gBdJeUhySSkAjkNImUBvmRY24bckNIETzObgHk3Isob/7kOhMCxEs4xryvKOzuBjFCd3ssFCYwEzV+uMg38+Y/QWIJRb4fR7eVqSZnYXDw3/r24nG/4fAykj7mn8CSIvwx3iIreTy6iAAAAAAAAAA",
    jp = "data:application/octet-stream;base64,UklGRnQJAABXRUJQVlA4IGgJAACwOACdASrwAPAAPm00l0ekIyIhJ3MaCIANiWdu/HyY/eAGoYn0IOzO9s/BuF+eQfQ/1q7J8duz47C5SISLkj/XbDQeQ79/7xvsSmw13/xvz2e1Np/1BvQmviTkqDfmyzzSgCuZrvFmUnJDxI0wgB6lT/xvwUiXBdRdktQWTk/KK5ufX6Miw+ha7/2PZp2jWZEcnWvX8YYdLBkLSe4/XPzkJHvH2ITs2QfqCFgQaBESHAqDh3xOZSdpw2JOnAu3ZQNNZxgfnCzS+7AA1j+0Plv3By+8nT5FAQ4EfgXUTcdLWOhuJISN7eZbImQ7+vyT959FTeb6TKYN9NqI/q0gbBBENSjexA/cxy0mJF0KRDvclZfoaShVwjLsWBIQaYSOPGG8qpEtT4StKiVXLlEOcPpyp7/3FnTXPyWlN+MV3YLjuMAMnx2TCTP8nEyc+SEzdjZmaXHKAYrO+ALVWjcbs71IIxxzNMLhFvxb5bKQcBhjX0VEyJY58negrutT25Hbpf7hlL4F0JDWLwmZ4Zpo2JHNd8m97sjS/m1Buyg300yHKPPMsHWzDOnna5gjoNsmmE4a5OgzvygYz4BokzgdFr+sVLyO/PZ7cSND9j73f1AA/v9doAAAmHARrdZ+05vk2ji0ipTygVdv5GbhQvRKJs1hdahyaxTrTUkeq279eNqEOU0YjiGKXk8VNneKFKsfyaM5hYo7T2trKxbKSWAAuQIv0AnCR2amSZwKVJmHEr22EnyN0ABTwqtVsfT5sXEC5W1zhC8O+TbmfUV4UkK7BgUyWL8NsRKIZ3IwxbqiXXeOLFaAx6UYScliUMTaO5dHdOR1jEMzobnA0Ci8MkMKGQtkVAXtIXtAxSqR2KEXZ6eXClAlOWT/7fEWenlvZ82nmwBI8zL5n3S3xe3a5WR1VP5bIdWIzNH6jHim4idg1WZlXByihPrzPgJY0S2PK0KNuEPKX2Hx/rjxEV3W5UooAwWYxaZ3LLyQIhqwgC28JoHHctK92rPJ8VXTk3ZT9NsGdOn6vBoBjA4/hOfTmXYJhhNDhvuFsMbiZvzitJjNFYNGUialr95ue7bO8zR4GnbW52Vyuio3GMVlyXVp3JbQ9MjhinzLpHHgTG9Eyops5Or8uKvuUa/TAPBkeInWymQbNzOdgoWSarwFkTpkZBmMu28HeSGAAo12MXvwzSURjpRBJWM7D9syT2ZYWJqlV5wS2yrCQ/mbSihSFCIlyQAf3rOewFgQxJtkbb1eVS6z8k4lXKUhm6cR24jSJ1+qDppz0lPVhkXiU7c4JE1pXiwDEuhixMXAu6IvdTKqs5kfpm51VRr+uHm2iCJNNFb02IjrKbkJxeGXQaG8xtiGTLadXE3o2wwwN6n9LqpS2K914HzAjy1tGgkL1LdLi18hRPTAlKVt0nNcrtP1Rqqrl0uWzixd+A/xu5ui/6puhzEpL/jczoFIdS7z1k4dD8gY4zbE0PIk8u1WEmYZ5cgo0dgOa2lFue3GStBiKj8zO2pI4owDRp5f2JxopwOVnMEovAtjvDnspMP9961G7a0jjIkl5kb0AAHRQy1HQiHOE9fXuArAYpi2AEUREbHIs4kJ1MuV2kF4/dtxYJtfHM8mvjG9b4CARj64TPQ1tyV26ExxHFUgAoNt2MYMJaCXRAqJ4m52B89txAKtoagz/Al6Is63N2DQ5+LsIC+RbY79dHqwxh9wDXeNsmj9foAaOxNG16R2NqbBKti3TO72Guk89bogskkOwFNMQEwCHcAyzHdDopoQnBFEoJNO4T9tSrgreygx+FrJlCeiVZCVnlZE1tMCCV9BlaL4OIY9uJkShiyJvupeNiRGWrT6WMA/kxY7Jr5NdhOi8yOhZfz2N4R9oiZ/ftBIEahXHoic0KQohEo1dl0YOdVh39QHPwbb5A8hjYN5/lPQH94hUtztWfdUwwMQpoVdhp+y5WgPFZ3ZCAI5uTZf2AVWuCutw19r/NHh+mwzDx5zQ8F5RBqQ31YI6pfqrvmqKlWvZLKOIbotfDY1RMnjbnnBT/FIXMwqO1JsirsHwIl2NwgVErt349GWQV9QMhN2dqtCPbzsbbl91NpEeEa1gJuYAeIjcsLt6Zgf9E2dRbGQBehNTKS0aRTjjXmFo6ROHSmZR1xi65d/o6MqtEktsjm/KscrE8mKOwwQWhUWz+C9qhWAj1FVEaxHiDACb6J4Ip/67dzs/U0YelJO7iIvGShdcYvfjtfrzdg88lxznzWK/nbo8IPj+m+pxj9E2DvVGUtKnXqXWyOqHGYsn5UQCHsT9kALq/IyF95QXYf1qAriAOqTWm8rj3tYOH+heoSleMZ9zxnDcEyN/APRiZDytDnyMm6ubaEryRo7EJi+UPoEUSonpxqbaICC3aIyDEQ+5v0xA0CAJWLmxQ95QaImTtzvb2o0k9VizVgWp52Uw0kZM4T0EsPrLjtG9X78wOpSpSdDNhQFPC/A3WSRA1oPKv3JpMsRq7JjckJlPB5tb3Sl8hCwyy94q761PGE9Q6gZN5jJcaosLzVTH/VD8fzyJrwD4V9hO4ROaBaKrKl+yhqszrP4hjU+OETzKCPOiR8tfebIXqOWz1zQhImneFQbItHaIfiqBoyYI3JndFn5iXd87ygixlMHbkrZH/PkPMDE0V08Yj4XgfQ5GGMLAsrZqbqXsHj2oWLhMyJ3wIb7FDK2YlXJvIuvEIgA7utolUnFMZu0byAyW6AYAk6LAbzR69Pr797pplDrDNTpwnoyGUUgVDcQeAkeaIuntZM+t2qqjE6BZRpV2sCK49X4NEnqtiMXkwpzM9qC1ysdDw/KCDcJuPfSOwKDW3ot66nhjwlf9Be6kYpJ8NJhhQJHcj/4JLS9ddlYMQZ/RpeiiYyWPpV30DGTM1NbLb4dvgHb2jT+lopTF5JOfF3CgYvm/parentNode/THQDvZIoqj1r2yXmywwApWQXMNL0GDYaDgEJJRx3kLcE7C8jJFVBq9Sa30qwEjeMRCeQrMAe+GcqUcH1gANvdu9o67wn7Bc9GaqMtCzxH2Em1OXemeX8RU30sYDD0EZcyO4Xr33F2HRu9j0fRK7KSViBHrg7JriNqdLy4DHymvaKC9Dz/r2+0a4/KLLCN3L4JqFSnURiO/cDLYCmV1ctGPo4muXnXw4/ZXCcsGTdjQ7YsSsonJ8mUx/spHuvNI3LS5aSVlOWU5WCRPS4Y4A8FgWE8soAAAAAAAA==",
    picA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABaySURBVHgB7Z0HkBTV88cfiAFFAT1AxQhi1lORpBgKzJYUimLOWUHUMmEOZU4oimLCCAYwJ8yKAXNCBSMiAgZUTJjf/33e/9dTvbMze7t3e7tzN/OterVpNk3369w9LayDyZBatDQZUo2MAVKOjAFSjowBUo6MAVKOjAFSjowBUo6MAVKOjAFSjowBUo6MAVKOjAFSjowBUo6MAVKOjAFSjowBUo6MAVKOjAFSjowBUo6KMMDUqVNNp06dTE1NjRk6dKj55JNPTIZkoCIMMG3aNPPtt9+auXPnmquuusqstdZaZqeddjJvvvmmyVBdtKhEVfC8efNMjx498nZ+u3btzNZbb22GDx9uamtrTYYqwFYIV199NYwWuRZaaCF7zDHHWCclbIbKomIM8Mcff1gn+gOid+3a1a6yyio5jNC5c2d7ww032N9//91mqAwqxgDg9ttvD4jdr18/O3PmTHvuuefaJZdcMocRNt54Y/vMM8/YDI2PijLAv//+azfYYIOA0M8//7x/HkbYfffd7QILLJCjFk466SQ7ffp0m6HxUFEGAPfcc49t0aKFJ3KfPn08UwhefPFF27179xxpsOKKK9pXXnnFZmgcVJwB5s+fb7t16+aJu8gii9hnn3025/U///zTjhgxwi688MIBEyy22GL25JNPtj///LPNUF5UnAGAiwUEUmDPPfe0//33X94xzmW0m222WXAcq1evXvatt96yGcqHqjAAO3m55ZbzRF100UVj9fzff/9tL7/8crvgggsGTLD88svbm2++uc7vwL7guJdfftlmiEdVGAC44E9A1DPPPLPgsR9++KFdb731guNbtmxpDzvssFiVMGvWLH+MHL/GGmvYE0880X722Wc2Qy6qxgDvvPOObd26tSfQyiuvbF20sODxc+bMsUOGDMkhLCoiiqjff/+9lyzhgFOHDh3sPvvsY19//XWb4f9RNQYALh8QEGfcuHFFvQcDURO3S5cu1uUU8o578skn7TLLLBMZeWzTpo099dRTs8ijrTIDPPTQQwFR9t1336Lfxw5eaaWVgvfiMVxzzTV5x0FgmKxVq1aRjLD00kvbCRMm2DSjqgzw008/BeFhiPH1118X/d4ZM2ZYl0gKiImheN555+UdR5wBY1CrDr0WX3xxe8ABB3gVk0ZUlQEAxlypakBATOHQQw/NIS5JpV9//TXvWKRNp06dYhNSa665pn3ttdds2lB1BnjuueeCoM+GG25oSwUxhAsvvNCHjoWYO++8c06EUYC7GU5A6bXEEkvYG2+80aYJVWcAXDkMOSHAN998Y+uDW265JSdoNGDAgMisIi7itttuG8sE5CMOOugg+9tvv9k0oOoMAI488siAAMUEeeKAQYdOl8/abrvt7Ny5c/OO+/HHH/1rcUzAwr6oLzM2JSSCASZNmlQvbyAKDzzwQA4TkGX866+/8o7Dfth7773zDEJcRO1iEpJuzkgEAyBuhWi4dw3Fo48+mmMY7rjjjpH5BkLNO+ywQ3BcTU2NvfPOO3MKVzAcX3rpJdtckQgGAOhdTjh6nChhQ3HHHXfkSIJhw4b5XR/G7Nmz7ZZbbhkcR70CcYYePXrkGIf333+/bY5IDANgycsJp36wHHjwwQdzRPo555xj//nnn7zjKEgRQ5R14IEH+nDyRhttFDzXvn17e++999rmhsQwwNNPPx2cbIzCcmH06NGBm4l0ufTSSyOPe//9932uQH7D2WefbX/44YccJuBzbrvtNtuckBgGIBInBFhnnXVsOUH9gRCRBNQjjzwSeRw7XEcWH3vsMR+t3G233YLniTdQuNpckBgGwEijGFR2arkTNSeccEJAxBVWWMF+9dVXkcfpYhWMQaQA0EyAWrnppptsc0BiGADssccewUkupfIHL4IoHwZdlLUPMAC32WabHGOPeEAYeAb9+/cPjjvuuOO83cB3aCZAHTQHmyBRDMDJlhP88MMP13n8mDFjfGGp9uUR3bvssosPMYfx3Xff2Z49e+bECKLw6aefBh4E7iSpZQAT6NgB6gQ10ZSRKAa4++67g5N76623xh73xRdfBOpCdiMlZvjxmhmOPvpov6M1pkyZ4t06OSZOlFOKJsdQhkZji2DQoEE5waOnnnrKNlUkigGmTp0anNg4ax3iSy0AJeO4j7/88kvw+scff5yj7zfddFNfBTR48GB7yCGHeBdTp4c7duxo33777bzvgeCayc4444zgNQxWnYqGQT766CPbFJEoBsAfl6zeUUcdFXmM6Od1113X++pR+Pzzz+0WW2wRG+enzJySdHm8/vrrR9oDb7zxRuBC0r3EYwHGIcylDcumyASJYgB2luheKnnCEDdt2WWX9cwSBkTEf2/Xrl2go3fddVfvto0fP95eccUVOVE/vZAaUdB2CfpfqwKSRdqm2HzzzZtc70KiGAACCvEGDhwYPE8K95JLLglq/LivgYVPDF/eKwwU50pS+KFLysT1lFY1DQy/1VdfPTjmhRdeyHkdz4NGV/29YbsjyUg8A4waNSqHsCxdBEomkepgeY0dGe42igK2hM4VsChI0TtcQDubHEOJeTicTEwBFSBMcsEFF9imgkQzgC4X69u3bxDXF31Nlk5eX3XVVSOreTASSQRB8DAuvvjigGhye9FFF0X+NqKT8l0kmsKg5Ezsl7Zt2zaZ8rLEMYC4aMIIGGz4++xMUQHSQzBx4sRAf4eNOHILvXv3zjH8sOS1x4D41skices++OCDvN+GehBGwWiMkhQYrvI5hLWbQmdz4oxAaRaRRWgWFGIAbRDiAWD4SbTvvvvu84Eh+Tx0v07oiH7XxiEeRBiUl1FmJpIiKmNJHaIOTO2///426UgUA6BLdQ0/bpagLgZAApxyyim+aUREuS4M5VhcR/3ZxB1oOOUxdgMTSuT1sWPH5v0+hlZInyLdTFFuKFFE+Z0wM0MxkoxEMcC7776bs/uvv/764LVCDICexxJHfFPhAxOx0ykU1aA0DFeQ4A/vQ/yLn4+4ppxMxDwt7FFifquttgp+38iRIyP/B4EmsQeIUOLFJBWJYgBtbbP0mJhCDADBKfKUHYnBR1EHr9FUGi7pQtUQJhZiwziIeNzJTTbZJPh+2tDCwAPRwZ8okJDSpWb0LiQViWIAhkBoBnj88ceD1woxAJU/UeD98ll0/4Q9AVxIaRYhgASYUiJinm6lqN2rpUBcRpD3LbXUUv4Yws5RMYYkIFEMQEWwZgBiAALNABJtEwaIE7Fk/3gdd5J4PZKCXa07hyggFX0tNQJkCeU3nHXWWXmfC+OI9MCuiAPMIcdRcqY9kKQgUQwQbtjQRiBiVbJwTBgj6SM7vC4GIGWLyycSBp9eF4jSScTzEsAhpi/GKOoh7M7xXgkBQ+C4iWYwqjY84xJc1URiGIAdLpW4WPIEU7gfTgsTE8DAg0AEhzgmrqlUMwCAIPL5uukDo43nKRgRHHHEEQHhaCUPQ6sXcgBxYLiFuLaoBDyPJCExDPDll18GwR8yfrR7c5+sHbl5Dax5poqI/kash5s/2KVEBothAFzAsFHH4AkR3zBjOPyLOJeRd0iJV199Nfa/kY4WZjn22GNtkpAYBiBgIyfp+OOP98/pHAD5fHxsDYw6sRsQ65MnT/bPU8Gj8wN1MYBUJNM4qqGlAK5mGJdddlneb44CwSlxN3EPkzToKjEMQIZPTiZRNnag7C6duTv88MPzrPn33nsvKN9ee+21/S0MQDNHMQwgc4zDbWmUiostUFtbmycF+Dz6BXidUDNSLA6nn3568B8oTEkKEsMA++23X+DTY3TRncNjMnQQ/OCDDw5OIJVABHQERAFRCbxG4QbJGohFXKAYBlhttdX88+HyMOwSCRHjykWVqeFeyu+KShIJcF21W5iUgVWJYABOjqRmKcUGWOI8hjgS0sWA0lU4SAZCvrh46Gt8eT1sqhgGIEEkTBVVzEFIWOICFISE5w7gjegkUSFgq8hvJ6+QBCSCAQiSyImhkRNASHr10ZnhUivsBa0Wtt9++zz7gB0m0bgoBsB11GI5KvYPILi4chik6PMwUA/yOXH9BoAmEzFcyXqiYqqNRDAAM/zkBOphT0wR5TnGvoRBpc61116b54NDZHoApeiTEy4MRB0fz7GjqR+Q7zzttNMK/j6GVsuxUV1BMI+8jqoqBCSWtmeqjaozADF4KaliV0gnDmBItJwsInaFwE696667Aj2LLUFgSWfsxK6QhRtXTHMHNoYwFKoiDGwW8VioGIqaUSSgTE0aUTEcSYBVE1VnAFwwsbSx3MOgmofXiMtj+EV1/jAOVtsG6OKosjCRNBxLf2ApY2D0zACCO2GIEYs9ACMWAoko+SzUUDVRdQaQThtOHJW7YUBwgidywqgIxl07//zzff5fj5Bl9xPVixoQhY0gxpwu7y4WeADyPVEl6xBdjMFCMQGAlBOjFxunlPF45UZVGQBLXBI83BZqCMVXD1fy6kUYN6q2H1DihejmOPoP6wOGVoikIuYQBpFBkRLUABSKCQAZiMGSTGQ1UFUGIPkiJ6HYnDll2VxmBnGO76/9cIxGLH4GQ+HDowb4XGkCYRYg+YH6QOcqMCyjdq1uHo1LUQvQ/RId5HdFFZ9UAlVjAHar1OPhlhU7wBkrn8AQsXd6CZkOilqIkwyyMNJI6uBC8l3s0DiJEQdSw/J5UdVAuqAFZiwELowhtYqopmoNnqgaA+g4Ov56HDDU6N3D/aLKB1Gurx9Q34U4p66PHj8YA28AOyFqopiAjmV5PzUGYdAQIlXNWPhxrepRnxdlAFcCFblwZBjONTNOj/oLSToxaFxq1biUavC6O5FmwoQJxln3xlnrxu14U4mf6Vw945jCuGCUcckl06dPH9OtW7fgdScx/PNO/Purn3LlU36/hnM9/f8Bzng1LsPo7ztm8LeOMfx7e/Xq5Z9zoW7jAkLGGYP+1sUnTCXRylQBLuYeXEWUS8g6t8zfd36/GTVqlD+BMEkU2rRp408SVyLt3bu3cWrEOB3vieescOOih8GxnGAYR26d+jAuKORPtJMq/prGziLPOd5FEI1LTPnHfCYE5/c5y9+4bKFfMAC/39kTxhl8Ob/PJXoCBnBSzsTB5SyMk3zGxUH8Yyd5jLNfKs4AFVcBxM7FmsZtwm2jrw8LX496ldfx/7Hwie4R0atLrJYKwrMUjRLtox+AvIKJUBkEgvBU9G/EnggDNaIvf1fKQiVFTTFrTFRUBTj/3Is851IVPK5t27bG6XvTv39/rxqckWgqBXbi5MmTjQtQGWcs+luei8KVV17pr4YehmNo88QTT3jx72ITpnXr1l46zZ8/36uRKVOmmEmTJpnZs2fnvRe1h+qpGGwFQVFFeJfLYtewA9lVSZnRy24kYUMQiLRw+JoDUQWjxYIaRdLHegwdq5jG1nKiYgygmy70QqwSDayvf15JkFcgaIPfTsy/mDlGxYAMI14FMY1yq7i6UBEGIGMXbsWmzo7hC9mVvKqLRrcB0J99+/b1+lSAfndxfO9yZYgH7rALj/s1c+ZMM2PGDG9D4K24CKdxEUnTUDS6G4h/269fP+/W4eK47JePATRHwOwuwmec7eDvQ0Dus3BBncdhZs2a5de8efP8coGuwDjkGBcS9ueKxf04OFvBr4aiKoGgpAPCQRQIAEHxXvD5IZDL9ftbHkNQl3fwsQQeQ0SXFPLv4RYfH0ZojFM8ePBg4zKQpqGoSiCokoBIQiCIx2OIy67kMTsQQrEr58yZY6ZPn+6P4XkYASbg2EqAIJbLWZgOHToYFxcxXbp0MWPHjvW/R2PgwIHGxU9MOdBkGABiEYGTJQRFjLIjRV8K8SAoO5LdW0kQPXQGr+nYsaNp37696dy5s3HBLE9UlycI4gLc53ViHBzP8zynMX78eDNmzJjgMce5TKhxHoNx+RBTDjQaAyD62D0YLNxCIIgBwSAUxMGwgZDoO0Qpr0FACMv72akQs7F3IUEaQsyElInVs2pqajyBIChEInQrRIKYLgMZEA47R4jqopymoUAiuSynX6I+YCJCzLW1taacKBsDuPy2F1fE2l24NzBuILoQsBKiFEJAFBfS9QSEWCRsIC4iltchGATnpLrsoj9WGECOqxZIfLk0sU80CQYMGGBGjBjRKF5T2YzAnj175rh6DQEEYgdCPIiIPmQHcp9dh56EqLLrEIfsUp7nvexgjivHbqwUkJQu5W2GDx8eJKj4XyNHjvQGH/+9MVC2MzRo0KAcBoBbIQhxfcQoBONPsNO6du3q4+Rk0iAUx7DzICj304Zp06aZYcOGmYkTJwbPkeUcPXp0kCltNNgygQob2rL4SEqwqNTNUBiEvylr01dDJ1NK1XDcHORyo6yhYCpr5I9Q9JghHsw50MMjWPRHEDaPqmpuLJSVAajXk2vzMhSh2k0PSQOJHmYQhSehMFSS0vdqDJouezJIN0Ayam2vvfbyvXvU8euun3KDkxt1reByg8ET9RkGjYqkUFSnlKltZMpJ1GRSqoQr8X/KzgDS129iKnOZz1uuP0YBJ7l6yrHpIqZcm0rjoUOH+qt4lEOUwli0qHEpO1rJSF9T908RJ+XpzCYoBJpFKU3Xep7FHIPwb6T7GTXKiFuGVvJ/OG7IkCG+g6oxUFYGoHpXd8rGLSRCQ/P/DH+QsvK4RbFFQ4Y0MoGU3xpXxCJGG82lYfFNbwJNrWIYy6LEjWFRlIULKE+nUVSGS8YtyshdRtCWE2VhAMQiol//ATie2ThU1HABZqxdaYRg0UUTnr1fDOjA0b11LLlmEDV1XDdIE4wTXurVvdj1tKnJoCqjilewcTDWwkOmkUBU82D3UNwRrn+gbY0ehrD0w1vSncospo5QI0kTqbSTa3uhnFcrazADQNzwlbvYeVHEZbKWzNU3/ysKobW6WJ0avs4vC1GMeJTPQC2MGzcu51Kw6FpUT9S1g6NAqZeeWcxJv+6663IaSXDTaOzUc4z4Hv0+2QgUvkS5dQzCpn9Aq0gmn2uphS2Ax0AFkv5c3UbfENSbATiZ1Pix8/SfpTGyUMcNXT3du3cP3sNupbO20HvQk1QPa5HPDoOoce/D6NJX92IxaKpQvSEMxoAK/R6uABLVDSzAgNOXjZFFLITfF3VBKpgVm0JLEVRnIa8JFYM60qqH5tiGXp2kJAaAEJxw+t6oi9N/GJEuU7rqAt0+YTEOI7GjKKvmz9Jjj9eA24SlrMU6313MpC2kAbtZqx7EN4Ml2JH8FxZNqdT36WsH8x4GSxYD9L0eSc/C2sen57+iUiAU34W0kplELIphqYksZooo54SeSH0uaHVnfnF9awlLYgCCO3rHy66nXbrUSl6YCREo3cGy2BXoREReuFeA+7SG19V5Gwb6XH8PxME24PNZMj1cM2OpY96RiNg5um0NKcXGYAA1jaXSoaxVIDMQS/FWqFRG/GsbAzWC2oVhS71yWUkMEDZ8EH1RV+gsBVi1WMBh3Rle7HoIWd/GCVwsys4LWfSyo+py7QqBGYUYo4W+g8Vcg4acO96rr2+gjc1SUBIDMLwZX5hdyMDkcoYssQ0wCOkCYqfQ8UsgCU8CNVCu9mnEJXECxDBdQEgACVhB+HKUZWPpcw0hZhpj9CJhsOZRP0QBUaGFmlCLBV1NqDMmouD9IBX4/FKQ1QSmHC1NhlQjY4CUI2OAlCNjgJQjY4CUI2OAlCNjgJQjY4CUI2OAlCNjgJQjY4CUI2OAlCNjgJQjY4CUI2OAlCNjgJQjY4CUI2OAlCNjgJTj/wBfchwKJNhZaQAAAABJRU5ErkJggg==",
    yd = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA8PDw8PDw8PDw8QEg8PEA8PDxIPDw8PGRQZJxgUGBgcIS4lHB4rHxgYNEY0Kz0xOEM1Gig7QDszPy5CODEBDAwMEA8QGRIRGDEhISExMTE0NDYxMTQ0MTYxNTY0MTExPz80NDE0MTQ0MTE0MTQ0NTQ0NDQ0MTQxNDExNDQxNP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAAAQIDBgcFBAj/xABLEAACAQIBBAoOBwUJAQAAAAAAAQIDEQQFBhIhBxYxQVFhcYGR0RMUMlNUZHKSk6GksbLSIiM0QlJz4jViwePwJCUzRHSio8LhF//EABoBAAMAAwEAAAAAAAAAAAAAAAABAgMEBQb/xAA2EQACAQIBBwoFBQEBAAAAAAAAAQIDEQQSExQhMVKhBTNBUVNxgZGx0RUiYeHwI0JywfE0JP/aAAwDAQACEQMRAD8A8ywrFWFY9YbtibCKsFgJsQ0KxQCJsY2hNGRoloRFiGhFtCaAmxFhWLsKwrEWIaE0XYTQiGjHYC2iWgIaGmUmYwuS0TYzKRSkYUykyGiGjOpFqRgUilImxLifRGRcZHzqRakKxjcT6FItSPnUi1IRDifRGRkjI+ZSLjIRjcT6NMDDpABOSfLYVihWN89S0TYmxdhWAmxNhNFWCwibECsXYVgJsQ0KxYrCJsRYloyNCaERYiwrFNCaAmxNhNF2FYRFjG0JouwmhEWIGmNoVhEtFJlJmIaZLRDRmUilIwplJkNEuJnUjIpHzKRakIhxPoUjIpHzKRkjImxjcTPpAYdIAFkmSwrDsFjfPTNEisVYQE2JsKxYrCJaIsKxdhWCxNibCsVYVhE2JE0U0IRFibEtGQloCWiGhWLsJoRNiGhWLaE0BDRFhNF2FYViWjG0IyNEtCIsSUmJoQmiLGRMpSMVxpkNE2MykWpGBMtSJaIcTNpAYtIBWJsegIqwG8eksTYVihCJsTYRdhWAVibElnTs183aeFpQq1IRliJRTk5K/Yr/AHY8D162a+JxEaEcqWu+xGGpJQWs5p2nWetUqrXCqc+oO0q3eavo59R3EDn/ABR7nH7GDPfQ4b2lW7zV9FPqDtKt3mr6OfUdyAXxR7nH7Czv0OGdpVu81fRz6hdpVu81fRy6jugB8Ue5x+ws59DhXaNbvNb0c+oXaNbvNb0Uuo7sAfE3ucfsLL+hwh4Gt3mt6KfUT2jX7zW9FPqO8gL4m9zj9icr6HBe0a/ea3op9Qnga/ea3op9R3sA+Jvc4iufnySs2nqa1NPU0xWOz5xZu0MdTknGMK6X1dZR+lF7ylbuo8Rx2vRlTnOnNaMoSlCUeCSdmulG7hsTGunbU10BYwtEtF2FYzktEWEW0JoCLCTKTIsAmibGS4EXAmxNj2QsUBtHorGOwxisBIhFWABGfJtLTxFCFr6VWlDpmkdpOc5j5JlUrLFTjalSvoN7kqu5q5NfPY3zF42jRV61WnST3HOajfkucPlKeXVjCOtr1Zo4l3mkug+oDxnnNk9f5mHRJ/wFtnyf4VDon1Gjo9bs5eTMGRLqfke0B4u2fJ/hUOifULbTk7wqHRPqDMVtx+TDIl1M9sDxNtGTvCodE+oNtGTvCodE+oMxV3H5MMmXUe2B4m2nJ3hUOifUG2nJ3hUOifUGYq7j8mGTLqZ7YHibacneFQ6J9QttWTvCoebPqDMVdx+TFkvqPcA8PbXk3wqHmz6g21ZN8Lh0T6gzFXcfkws+o9w4vnfR0MpYtWteamuSUYv+J1vB5Tw1f/Ar0qj31GaclyrdNM2RsjSk442nHSUY6Fe27FLuZ8mtp8xs4GWRWyZarq3j0DjtOe2FYuxLR3BtE2E0W0KwrE2IaJaMlhWEQ0RYCrAArHtCGBsWO/YCqFCVSUacE5Tk9GKjutkm3bH2Gi6tes0tKEYQhxaV9J9EV0mGvVzVOU7Xt/n9mKpLIg5GfAZjJxTxFaSk92FHRtHi0pJ36D08JmdgqbTcalVreqyTjzqKSZsgHnp4yvK95td2o5rrVHtkeDnLlRYDCrsUYqcvq6MUkox1a5W4EvW0cwr151JSnUnKc5O8pSd5M2nZBrOWJpQ3oUlK3HKTv8K6DU2jscn0lCipLbLW/wCjcw8EoJ9ZIWKHCnKclGMZScmlGMU5Sk3uJJbrN0y2MdhWNxwOY1aaUq9WNJvXoRj2SS5XdK/Jc+XK+ZuIoRlUpzjXjFNtRi1US4dHXfmNdYug5ZKmr/nTs4mHOwvZM1cVi7CsbBbRFhWLFYRFiLCsbHkXNPEYuCqXjRovuZzTcpccY8HG7c56mLzAqxi3RxEakl92pB00+JNNmvPF0YyyXNX8f8MTlFOzZpFhWPoxWGnRnKnVjKE4uzUlZrrXGYbGcdhQk4yUotxlF3jKLalF8Ka3Dp2ZOXpYylOjWd61JJ6TterTe++Nbj5Ucxse/mLWdPKNFLcnGpTfGmr++KNXGUlUpSutaV14azHOOo3jKGZmAryc+xyoyetuhLRTfktOPqPHxex3S0X2DEVFLeVZQlFvgbik16zewOLHFV47Jv1MF2cIyjk+rhqsqNaOjOG9uxlHelF76Z8jR0rZLwkHQo4iy04VOxN77pyjJ26YrpZzdo7mHrZ6mp/motaybCsU0JozCsTYCgFYnJPWGAzYO6SbvsddzivKo+6RpJu+x53OK8qj7pGnyh/zT8PVGvieal4eqN0AAPNHJOb5/wD22P5NP4pmsG0Z+/bY/k0/imayeow3Mw7kdWhzce4ixt2x9gozrVa8km6UYxhfelK95ctl6zVDd9jrucVy0vczHjm1h52+nqia+qmzdgADzZzDlGd2Cjh8bUUUlGolViluLSvdecpHiWNo2QPt0fyafxTNXPUYdt0YN9SOlT1wi2TY+7ImEVfFUKMu5nOKmuGK1yXQmfHY9fNJf3hhfKl8Ei6rapya6E3wCWqLZ1iEVFJJJJJJJbiS3iwA8oc00jZGwMHSo4hJKamqUnbXKDTavyNPzmc+sdN2Q/sUPzofDI5pY9Bye26Cv0Nm3R1wIsezmev7xwvly+CR5Fj2c0P2jhfLl8EjYrc1P+L9ByWpnXgADy5pmpbI/wBhh/qKfwTOXtHUNkb7DD8+n8EzmB3uT+YXezNBXRFhNF2E0bo7EWGVYAFY9UBiMx2bCN22O+5xXlUfdI0o3PY9mv7VHfvSlbhX0v65zTx6/wDNPw9Ua+K5qXh6o3YAA80cg5xn79sj+TT+KZrRs+f0GsXCW9KlC3NKRrB6jC66EO5HXoc1HuEbnseVYqWJp3+k1TmlwxTafvXSaafTk/G1MPVjVpO0o8OuMk92LW+mPE0nVpSgtrHVp5UHFHYwNawWeGEqR+scqE9+MleN+KUd7lsfNlTPKhCDjhtKrUaspyi1Ti+F31v+tZ59YSu5ZOQ78PPYczM1L2yTX8+asZ46Sjr7HTpwl5Wt/wDZGumSrUlUlKcm5Sk3KUnuyk3rZFj0VKGRCMOpJHRjHJil1Enp5tVYwx2Fk39HsijyaSaXrkjzbAVOKlFxfSmvMGrpo7gBpGQ884KCp4xSU0rdmitKMl+8t1PkvzHqYrPDA043jOVWW9CnFp35ZWSPNywdeMsnIb7thzXSmnax8eyJVisLSg39KdVSS/djF3frXSc5PTy3lWpjKzq1LJJaMILuYQvucb4zzrHdwtF0aSjLablOGTGzIsexmj+0cL5c/gkeTY9rM6m5ZRw9vuucnyKEi6/NT/i/QU1aLOtAAHljQNT2RvsMPz6fwTOY2OmbItRLB0o78q8LLiUJ3fu6Tmljv8n8wu9mzSXyk2EVYLG6U0SA7AArHqWEW4iaMlzrkn25GylLCVlVjrSvGcb2U4PdXufMfGIUoqacZLUyWk1Z7GdSweX8JWipKtTg3q0Ks405p8Fm/cejRrwqK8JxmuGMlJeo43culWnCScJSi1uOMnGS50cufJMP2Ta71f2NF4GPRI3vPnJ0qtGFeEXKVHSUkt3sT3XzNLmbOfm/5qZfliG8PXadRRcozerskd+LXCvWuQ+jKOaOGrNzpuVCb1tU7OnfyXuc1hUMTov6Ffo2Na9X57MVOrmf06nQc4Ebs8w/G/8Agfzi2heN+z/rNzT8N2nCXsZtJpb3B+xpQjdtoXjfs/6x7QvG/Z/1i07Ddpwl7BpFLe4P2NIA3XaD437O/nDaD437O/nDTsN2nCXsLSKW9wfsaSTY3jaF437O/nFtB8b9n/mC07Ddpwl7EuvS3uD9jSLAbxtB8b9nfzk7QPG/Z/1hp2G7ThL2Fn6e9wfsaQKxvG0Dxz2f+YH/AM/8c9n/AFhp2G7ThL2Fn6e9wfsaNY3bY+yZLSqYucWloulSut27WlJclkudno4DMjDU2pVZ1K7W80qcOdLX6zNnPltYClClRjFVZpqmkkoUoL72juci6jVr4tV/0aGty6dn37/oYZ1Mv5IdJsVWrCCvOUYrhk1Fes8/FZewVGLlPE0Xb7sKkZzfJGN2cnxWJq1pOVWc6knrvKTl0cHMfOKHJUf3zfgJYbrZ6+c2W5Y6smk40YJxpwe7r3ZPjeroPFsUFjpQhGEVGKskZlFJWRFhWLsTYoVhWAoQWJsew4kOJncSGgTOtYwOImjM4kOJVyTGBbRLRVwPryLWdLFYeadvraafkuSUl0NnXDj2B/xqXl0/jR2E4vKy+aD+jOZjlrj3AAAcg0QAAAAAAAAAAAAAAAAAAAAOVZ5Yh1MfWu9UNCnFcCUVf/c5HTsViYUacqlSSjCCbk3wHHsoYl161Ws1Z1JznbgTepdFjqclwbnKdtit5tG1hY3k2fKFihHaNyxNhWKCwCsQKxdhWAhokYDAVj3nExuJmsJowpnVaPncSXE+hxIcS0yWj53ElxMziS4lJk2Hgl9dR/Mp/Gjr5yPBR+uo+XD4kdcOTyq9cPH+jm4/bH86gPDziy1HBU0o6Mq0+4g9xLfm+L+J92VcoQwtKVWe9qjFd1OW9FHLcfi54irKtUd5TfNFb0VxIwYHCZ6WXNfKuL6u7rMWGw+ceVLYuJ723fF97oeZP5hbdsX3uh5k/mNaEdnRKG4vI39HpbiNm27YvvdDzJ/MG3bF/goeZP5jWQDRKG4vITw9LdRs23fF/goeZP5g274vvdDzJ/MauMNEobi8haPS3UbNt3xf4MP5k/mDbxi+94fzJ/MawAtEodmvINHpbqNn274v8GH8yfzCee+L/Bh/Mn8xrABolDs15E5iluo+7KeWMRi2uzVLxTvGEVo04vhst18tzzihmaMVFWirItRSVkrGOwWLJsMLCEOwASTYVihAJoQDsMQrHvAMDXOxKJLQnEoBmJxMTiQ4mdolxKuQ0Rh7RqU5PUlKDb4EpK51KriIQhKpKSUIrSct7R4TlriVOvVcFB1JuC3IOcnBckb2NXFYbPuPzWt9vY1MRhs84u9rGfL+VJYuq5O8acLxpw4I/if7z/8ADyXEzuJLibsIxhFRjqSM0YKKSWpGFoRkcSWjJcZIirCGIQDEArCAYAIkRQgEIBiEAgGAE2JFYoBE2IsAwsAhAFgAR7lyiEwTNNSO3YsCblFJkOIgGBRDiQ0S4mQVh3MTiYZRIcT6GiXEq5Nj53EhxM7iQ4lJk2MDiJozOJDiWmSY7CLcRNDuBIhgMQiSgAVhEliAQhFEgIBFCEAgGIRIgGACPVTGmY0ykznKR27GRMEyExplpk2MlxkJjuWpEtFCGBVyHEQmihDMbiS4kOJlJaHchxMDiQ4n0uJDiVcix87iS4mdxIcS0xWMDQmjM4kOJVyTGBTQrFCJAYAAhDABCEAwESAAAgAAAD70UgA5J2mUhgBaJKGgAsljQ0AFkjAAKRDAQgGY2DJABoxshmNgBSJIYhgWSYyQAtCExAAxCAAAAAAAQiQABAAAAj//2Q==";

function Vr(component, nextSibling) {
    if (!(component instanceof nextSibling)) throw new TypeError("Cannot call a class as a function")
}

function ze(component) {
    "@babel/helpers - typeof";
    return ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(nextSibling) {
        return typeof nextSibling
    } : function(nextSibling) {
        return nextSibling && typeof Symbol == "function" && nextSibling.constructor === Symbol && nextSibling !== Symbol.prototype ? "symbol" : typeof nextSibling
    }, ze(component)
}

function Hp(component, nextSibling) {
    if (ze(component) !== "object" || component === null) return component;
    var parentNode = component[Symbol.toPrimitive];
    if (parentNode !== void 0) {
        var n = parentNode.call(component, nextSibling || "default");
        if (ze(n) !== "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (nextSibling === "string" ? String : Number)(component)
}

function wd(component) {
    var nextSibling = Hp(component, "string");
    return ze(nextSibling) === "symbol" ? nextSibling : String(nextSibling)
}

function tu(component, nextSibling) {
    for (var parentNode = 0; parentNode < nextSibling.length; parentNode++) {
        var n = nextSibling[parentNode];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(component, wd(n.key), n)
    }
}

function Zr(component, nextSibling, parentNode) {
    return nextSibling && tu(component.prototype, nextSibling), parentNode && tu(component, parentNode), Object.defineProperty(component, "prototype", {
        writable: !1
    }), component
}

function Cs(component, nextSibling) {
    return Cs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Cs(component, nextSibling)
}

function gc(component, nextSibling) {
    if (typeof nextSibling != "function" && nextSibling !== null) throw new TypeError("Super expression must either be null or a function");
    component.prototype = Object.create(nextSibling && nextSibling.prototype, {
        constructor: {
            value: component,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(component, "prototype", {
        writable: !1
    }), nextSibling && Cs(component, nextSibling)
}

function No(component) {
    return No = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(parentNode) {
        return parentNode.__proto__ || Object.getPrototypeOf(parentNode)
    }, No(component)
}
// 检测当前环境是否支持 Reflect 和 Proxy 特性
function isReflectSupported() {
    // 如果 Reflect 未定义或 Reflect.construct 或 Reflect.construct.sham 属性不存在，则不支持 Reflect
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    // 如果 Proxy 是一个函数，则支持 Proxy
    if (typeof Proxy == "function") return !0;
    try {
        // 在尝试调用 Reflect.construct 时，通过调用一个无实际作用的回调函数，验证其是否会正常运行
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        // 如果在调用过程中抛出异常，则不支持 Reflect
        return !1
    }
}

function Ts(component) {
    if (component === void 0) throw new ReferenceError("this hasn'nextSibling been initialised - super() hasn'nextSibling been called");
    return component
}

function $p(component, nextSibling) {
    if (nextSibling && (ze(nextSibling) === "object" || typeof nextSibling == "function")) return nextSibling;
    if (nextSibling !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Ts(component)
}
//监听输入
function listenInput(val) {
    var result = isReflectSupported(); // 调用 isReflectSupported() 函数并将返回值赋给 nextSibling 变量
  
    return function() {
      var n = No(val); // 调用 No() 函数并将 val 参数传入，将返回值赋给 n 变量
      var i;
  
      if (result) {
        var o = No(this).constructor; // 调用 No() 函数，并取其 constructor 属性，将返回值赋给 o 变量
        i = Reflect.construct(n, arguments, o); // 使用 Reflect.construct() 方法创建一个实例，将 n 作为构造函数，arguments 作为参数列表，o 作为原型对象，将返回值赋给 i 变量
      } else {
        i = n.apply(this, arguments); // 调用 n 函数，并将 this 和 arguments 作为参数传入，将返回值赋给 i 变量
      }
  
      return $p(this, i); // 调用 $p() 函数，并将 this 和 i 作为参数传入，返回其结果
    };
  }

function St() {
    return St = Object.assign ? Object.assign.bind() : function(component) {
        for (var nextSibling = 1; nextSibling < arguments.length; nextSibling++) {
            var parentNode = arguments[nextSibling];
            for (var n in parentNode) Object.prototype.hasOwnProperty.call(parentNode, n) && (component[n] = parentNode[n])
        }
        return component
    }, St.apply(this, arguments)
}

function xd(component, nextSibling) {
    for (var parentNode in nextSibling) component[parentNode] = nextSibling[parentNode];
    return component
}

function ks(component, nextSibling) {
    for (var parentNode in component)
        if (parentNode !== "__source" && !(parentNode in nextSibling)) return !0;
    for (var n in nextSibling)
        if (n !== "__source" && component[n] !== nextSibling[n]) return !0;
    return !1
}

function Ga(component, nextSibling) {
    return component === nextSibling && (component !== 0 || 1 / component == 1 / nextSibling) || component != component && nextSibling != nextSibling
}

function Lo(component) {
    this.props = component
}

function _c(component, nextSibling) {
    function parentNode(i) {
        var o = this.props.ref,
            a = o == i.ref;
        return !a && o && (o.call ? o(null) : o.current = null), nextSibling ? !nextSibling(this.props, i) || !a : ks(this.props, i)
    }

    function n(i) {
        return this.shouldComponentUpdate = parentNode, createElement(component, i)
    }
    return n.displayName = "Memo(" + (component.displayName || component.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n
}(Lo.prototype = new newInt).isPureReactComponent = !0, Lo.prototype.shouldComponentUpdate = function(component, nextSibling) {
    return ks(this.props, component) || ks(this.state, nextSibling)
};
var ru = W.zero;
W.zero = function(component) {
    component.type && component.type.__f && component.ref && (component.props.ref = component.ref, component.ref = null), ru && ru(component)
};
var Wp = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function Ke(component) {
    function nextSibling(parentNode) {
        var n = xd({}, parentNode);
        return delete n.ref, component(n, parentNode.ref || null)
    }
    return nextSibling.$$typeof = Wp, nextSibling.render = nextSibling, nextSibling.prototype.isReactComponent = nextSibling.__f = !0, nextSibling.displayName = "ForwardRef(" + (component.displayName || component.name) + ")", nextSibling
}
var nu = function(component, nextSibling) {
        return component == null ? null : flattenNestedArray(flattenNestedArray(component).map(nextSibling))
    },
    bc = {
        map: nu,
        forEach: nu,
        count: function(component) {
            return component ? flattenNestedArray(component).length : 0
        },
        only: function(component) {
            var nextSibling = flattenNestedArray(component);
            if (nextSibling.length !== 1) throw "Children.only";
            return nextSibling[0]
        },
        toArray: flattenNestedArray
    },
    Gp = W.NULL3;
W.NULL3 = function(component, nextSibling, parentNode, n) {
    if (component.then) {
        for (var i, o = nextSibling; o = o.NULL2;)
            if ((i = o.NULL4) && i.NULL4) return nextSibling.NULL3 == null && (nextSibling.NULL3 = parentNode.NULL3, nextSibling.NULL = parentNode.NULL), i.NULL4(component, nextSibling)
    }
    Gp(component, nextSibling, parentNode, n)
};
var iu = W.unmount;

function Sd(component, nextSibling, parentNode) {
    return component && (component.NULL4 && component.NULL4.__H && (component.NULL4.__H.NULL2.forEach(function(n) {
        typeof n.NULL4 == "function" && n.NULL4()
    }), component.NULL4.__H = null), (component = xd({}, component)).NULL4 != null && (component.NULL4.__P === parentNode && (component.NULL4.__P = nextSibling), component.NULL4 = null), component.NULL = component.NULL && component.NULL.map(function(n) {
        return Sd(n, nextSibling, parentNode)
    })), component
}

function Ed(component, nextSibling, parentNode) {
    return component && (component.vnode1 = null, component.NULL = component.NULL && component.NULL.map(function(n) {
        return Ed(n, nextSibling, parentNode)
    }), component.NULL4 && component.NULL4.__P === nextSibling && (component.NULL3 && parentNode.insertBefore(component.NULL3, component.void0), component.NULL4.NULL3 = !0, component.NULL4.__P = parentNode)), component
}

function ai() {
    this.__u = 0, this.nextSibling = null, this.zero = null
}

function Ad(component) {
    var nextSibling = component.NULL2.NULL4;
    return nextSibling && nextSibling.__a && nextSibling.__a(component)
}

function Cd(component) {
    var nextSibling, parentNode, n;

    function i(o) {
        if (nextSibling || (nextSibling = component()).then(function(a) {
                parentNode = a.default || a
            }, function(a) {
                n = a
            }), n) throw n;
        if (!parentNode) throw nextSibling;
        return createElement(parentNode, o)
    }
    return i.displayName = "Lazy", i.__f = !0, i
}

function gn() {
    this.u = null, this.o = null
}
W.unmount = function(component) {
    var nextSibling = component.NULL4;
    nextSibling && nextSibling.__R && nextSibling.__R(), nextSibling && component.NULL5 === !0 && (component.type = null), iu && iu(component)
}, (ai.prototype = new newInt).NULL4 = function(component, nextSibling) {
    var parentNode = nextSibling.NULL4,
        n = this;
    n.nextSibling == null && (n.nextSibling = []), n.nextSibling.push(parentNode);
    var i = Ad(n.vnode1),
        o = !1,
        a = function() {
            o || (o = !0, parentNode.__R = null, i ? i(s) : s())
        };
    parentNode.__R = a;
    var s = function() {
            if (!--n.__u) {
                if (n.state.__a) {
                    var f = n.state.__a;
                    n.vnode1.NULL[0] = Ed(f, f.NULL4.__P, f.NULL4.__O)
                }
                var c;
                for (n.setState({
                        __a: n.zero = null
                    }); c = n.nextSibling.pop();) c.forceUpdate()
            }
        },
        d = nextSibling.NULL5 === !0;
    n.__u++ || d || n.setState({
        __a: n.zero = n.vnode1.NULL[0]
    }), component.then(a, a)
}, ai.prototype.componentWillUnmount = function() {
    this.nextSibling = []
}, ai.prototype.render = function(component, nextSibling) {
    if (this.zero) {
        if (this.vnode1.NULL) {
            var parentNode = document.createElement("div"),
                n = this.vnode1.NULL[0].NULL4;
            this.vnode1.NULL[0] = Sd(this.zero, parentNode, n.__O = n.__P)
        }
        this.zero = null
    }
    var i = nextSibling.__a && createElement(subDOM, null, component.fallback);
    return i && (i.NULL5 = null), [createElement(subDOM, null, nextSibling.__a ? null : component.children), i]
};
var ou = function(component, nextSibling, parentNode) {
    if (++parentNode[1] === parentNode[0] && component.o.delete(nextSibling), component.props.revealOrder && (component.props.revealOrder[0] !== "nextSibling" || !component.o.size))
        for (parentNode = component.u; parentNode;) {
            for (; parentNode.length > 3;) parentNode.pop()();
            if (parentNode[1] < parentNode[0]) break;
            component.u = parentNode = parentNode[2]
        }
};

function Jp(component) {
    return this.getChildContext = function() {
        return component.context
    }, component.children
}

function Kp(component) {
    var nextSibling = this,
        parentNode = component.i;
    nextSibling.componentWillUnmount = function() {
        createRootDOM(null, nextSibling.l), nextSibling.l = null, nextSibling.i = null
    }, nextSibling.i && nextSibling.i !== parentNode && nextSibling.componentWillUnmount(), component.vnode1 ? (nextSibling.l || (nextSibling.i = parentNode, nextSibling.l = {
        nodeType: 1,
        parentNode: parentNode,
        childNodes: [],
        appendChild: function(n) {
            this.childNodes.push(n), nextSibling.i.appendChild(n)
        },
        insertBefore: function(n, i) {
            this.childNodes.push(n), nextSibling.i.appendChild(n)
        },
        removeChild: function(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), nextSibling.i.removeChild(n)
        }
    }), createRootDOM(createElement(Jp, {
        context: nextSibling.context
    }, component.vnode1), nextSibling.l)) : nextSibling.l && nextSibling.componentWillUnmount()
}

function yc(component, nextSibling) {
    var parentNode = createElement(Kp, {
        vnode1: component,
        i: nextSibling
    });
    return parentNode.containerInfo = nextSibling, parentNode
}(gn.prototype = new newInt).__a = function(component) {
    var nextSibling = this,
        parentNode = Ad(nextSibling.vnode1),
        n = nextSibling.o.get(component);
    return n[0]++,
        function(i) {
            var o = function() {
                nextSibling.props.revealOrder ? (n.push(i), ou(nextSibling, component, n)) : i()
            };
            parentNode ? parentNode(o) : o()
        }
}, gn.prototype.render = function(component) {
    this.u = null, this.o = new Map;
    var nextSibling = flattenNestedArray(component.children);
    component.revealOrder && component.revealOrder[0] === "b" && nextSibling.reverse();
    for (var parentNode = nextSibling.length; parentNode--;) this.o.set(nextSibling[parentNode], this.u = [1, 0, this.u]);
    return component.children
}, gn.prototype.componentDidUpdate = gn.prototype.componentDidMount = function() {
    var component = this;
    this.o.forEach(function(nextSibling, parentNode) {
        ou(component, parentNode, nextSibling)
    })
};
var Td = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103,
    Qp = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Yp = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    Vp = /[A-Z0-9]/g,
    Zp = typeof document < "u",
    Xp = function(component) {
        return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(component)
    };

function kd(component, nextSibling, parentNode) {
    return nextSibling.NULL == null && (nextSibling.textContent = ""), createRootDOM(component, nextSibling), typeof parentNode == "function" && parentNode(), component ? component.NULL4 : null
}

function Md(component, nextSibling, parentNode) {
    return pf(component, nextSibling), typeof parentNode == "function" && parentNode(), component ? component.NULL4 : null
}
newInt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(component) {
    Object.defineProperty(newInt.prototype, component, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + component]
        },
        set: function(nextSibling) {
            Object.defineProperty(this, component, {
                configurable: !0,
                writable: !0,
                value: nextSibling
            })
        }
    })
});
var au = W.event;

function emptyFut() {}

function eg() {
    return this.cancelBubble
}

function tg() {
    return this.defaultPrevented
}
W.event = function(component) {
    return au && (component = au(component)), component.persist = emptyFut, component.isPropagationStopped = eg, component.isDefaultPrevented = tg, component.nativeEvent = component
};
var wc, rg = {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    su = W.vnode;
W.vnode = function(component) {
    typeof component.type == "string" && function(nextSibling) {
        var parentNode = nextSibling.props,
            n = nextSibling.type,
            i = {};
        for (var o in parentNode) {
            var a = parentNode[o];
            if (!(o === "value" && "defaultValue" in parentNode && a == null || Zp && o === "children" && n === "noscript" || o === "class" || o === "className")) {
                var s = o.toLowerCase();
                o === "defaultValue" && "value" in parentNode && parentNode.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : s === "ondoubleclick" ? o = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || Xp(parentNode.type) ? s === "onfocus" ? o = "onfocusin" : s === "onblur" ? o = "onfocusout" : Yp.test(o) ? o = s : n.indexOf("-") === -1 && Qp.test(o) ? o = o.replace(Vp, "-$&").toLowerCase() : a === null && (a = void 0) : s = o = "oninput", s === "oninput" && i[o = s] && (o = "oninputCapture"), i[o] = a
            }
        }
        n == "select" && i.multiple && Array.isArray(i.value) && (i.value = flattenNestedArray(parentNode.children).forEach(function(d) {
            d.props.selected = i.value.indexOf(d.props.value) != -1
        })), n == "select" && i.defaultValue != null && (i.value = flattenNestedArray(parentNode.children).forEach(function(d) {
            d.props.selected = i.multiple ? i.defaultValue.indexOf(d.props.value) != -1 : i.defaultValue == d.props.value
        })), parentNode.class && !parentNode.className ? (i.class = parentNode.class, Object.defineProperty(i, "className", rg)) : (parentNode.className && !parentNode.class || parentNode.class && parentNode.className) && (i.class = i.className = parentNode.className), nextSibling.props = i
    }(component), component.$$typeof = Td, su && su(component)
};
var cu = W.index;
W.index = function(component) {
    cu && cu(component), wc = component.NULL4
};
var lu = W.diffed;
W.diffed = function(component) {
    lu && lu(component);
    var nextSibling = component.props,
        parentNode = component.NULL3;
    parentNode != null && component.type === "textarea" && "value" in nextSibling && nextSibling.value !== parentNode.value && (parentNode.value = nextSibling.value == null ? "" : nextSibling.value), wc = null
};
var Id = {
        ReactCurrentDispatcher: {
            current: {
                readContext: function(component) {
                    return wc.__n[component.NULL4].props.value
                }
            }
        }
    },
    ng = "17.0.2";

function Od(component) {
    return $.bind(null, component)
}

function Ci(component) {
    return !!component && component.$$typeof === Td
}

function pr(component) {
    return Ci(component) ? gf.apply(null, arguments) : component
}

function Rd(component) {
    return !!component.NULL && (createRootDOM(null, component), !0)
}

function Nd(component) {
    return component && (component.base || component.nodeType === 1 && component) || null
}
var Ld = function(component, nextSibling) {
        return component(nextSibling)
    },
    Pd = function(component, nextSibling) {
        return component(nextSibling)
    },
    Dd = subDOM;

function xc(component) {
    component()
}

function Fd(component) {
    return component
}

function Bd() {
    return [!1, xc]
}
var zd = Jr;

function jd(component, nextSibling) {
    var parentNode = nextSibling(),
        n = ie({
            h: {
                NULL2: parentNode,
                v: nextSibling
            }
        }),
        i = n[0].h,
        o = n[1];
    return Jr(function() {
        i.NULL2 = parentNode, i.v = nextSibling, Ga(i.NULL2, nextSibling()) || o({
            h: i
        })
    }, [component, parentNode, nextSibling]), be(function() {
        return Ga(i.NULL2, i.v()) || o({
            h: i
        }), component(function() {
            Ga(i.NULL2, i.v()) || o({
                h: i
            })
        })
    }, [component]), parentNode
}
var vt = {
    useState: ie,
    useId: bf,
    useReducer: rc,
    useEffect: be,
    useLayoutEffect: Jr,
    useInsertionEffect: zd,
    useTransition: Bd,
    useDeferredValue: Fd,
    useSyncExternalStore: jd,
    startTransition: xc,
    useRef: q,
    useImperativeHandle: Kr,
    useMemo: $component,
    useCallback: Qe,
    useContext: Be,
    useDebugValue: _f,
    version: "17.0.2",
    Children: bc,
    render: kd,
    hydrate: Md,
    unmountComponentAtNode: Rd,
    createPortal: yc,
    createElement: createElement,
    createContext: gt,
    createFactory: Od,
    cloneElement: pr,
    createRef: returnNull,
    Fragment: subDOM,
    isValidElement: Ci,
    findDOMNode: Nd,
    Component: newInt,
    PureComponent: Lo,
    memo: _c,
    forwardRef: Ke,
    flushSync: Pd,
    unstable_batchedUpdates: Ld,
    StrictMode: Dd,
    Suspense: ai,
    SuspenseList: gn,
    lazy: Cd,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Id
};
const Sc = Object.freeze(Object.defineProperty({
    __proto__: null,
    Children: bc,
    Component: newInt,
    Fragment: subDOM,
    PureComponent: Lo,
    StrictMode: Dd,
    Suspense: ai,
    SuspenseList: gn,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Id,
    cloneElement: pr,
    createContext: gt,
    createElement: createElement,
    createFactory: Od,
    createPortal: yc,
    createRef: returnNull,
    default: vt,
    findDOMNode: Nd,
    flushSync: Pd,
    forwardRef: Ke,
    hydrate: Md,
    isValidElement: Ci,
    lazy: Cd,
    memo: _c,
    render: kd,
    startTransition: xc,
    unmountComponentAtNode: Rd,
    unstable_batchedUpdates: Ld,
    useCallback: Qe,
    useContext: Be,
    useDebugValue: _f,
    useDeferredValue: Fd,
    useEffect: be,
    useErrorBoundary: u0,
    useId: bf,
    useImperativeHandle: Kr,
    useInsertionEffect: zd,
    useLayoutEffect: Jr,
    useMemo: $component,
    useReducer: rc,
    useRef: q,
    useState: ie,
    useSyncExternalStore: jd,
    useTransition: Bd,
    version: ng
}, Symbol.toStringTag, {
    value: "Module"
}));
var Hd = {
        exports: {}
    },
    ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je = typeof Symbol == "function" && Symbol.for,
    Ec = je ? Symbol.for("react.element") : 60103,
    Ac = je ? Symbol.for("react.portal") : 60106,
    Qo = je ? Symbol.for("react.fragment") : 60107,
    Yo = je ? Symbol.for("react.strict_mode") : 60108,
    Vo = je ? Symbol.for("react.profiler") : 60114,
    Zo = je ? Symbol.for("react.provider") : 60109,
    Xo = je ? Symbol.for("react.context") : 60110,
    Cc = je ? Symbol.for("react.async_mode") : 60111,
    qo = je ? Symbol.for("react.concurrent_mode") : 60111,
    ea = je ? Symbol.for("react.forward_ref") : 60112,
    ta = je ? Symbol.for("react.suspense") : 60113,
    ig = je ? Symbol.for("react.suspense_list") : 60120,
    ra = je ? Symbol.for("react.memo") : 60115,
    na = je ? Symbol.for("react.lazy") : 60116,
    og = je ? Symbol.for("react.block") : 60121,
    ag = je ? Symbol.for("react.fundamental") : 60117,
    sg = je ? Symbol.for("react.responder") : 60118,
    cg = je ? Symbol.for("react.scope") : 60119;

function st(component) {
    if (typeof component == "object" && component !== null) {
        var nextSibling = component.$$typeof;
        switch (nextSibling) {
            case Ec:
                switch (component = component.type, component) {
                    case Cc:
                    case qo:
                    case Qo:
                    case Vo:
                    case Yo:
                    case ta:
                        return component;
                    default:
                        switch (component = component && component.$$typeof, component) {
                            case Xo:
                            case ea:
                            case na:
                            case ra:
                            case Zo:
                                return component;
                            default:
                                return nextSibling
                        }
                }
            case Ac:
                return nextSibling
        }
    }
}

function Ud(component) {
    return st(component) === qo
}
ge.AsyncMode = Cc;
ge.ConcurrentMode = qo;
ge.ContextConsumer = Xo;
ge.ContextProvider = Zo;
ge.Element = Ec;
ge.ForwardRef = ea;
ge.Fragment = Qo;
ge.Lazy = na;
ge.Memo = ra;
ge.Portal = Ac;
ge.Profiler = Vo;
ge.StrictMode = Yo;
ge.Suspense = ta;
ge.isAsyncMode = function(component) {
    return Ud(component) || st(component) === Cc
};
ge.isConcurrentMode = Ud;
ge.isContextConsumer = function(component) {
    return st(component) === Xo
};
ge.isContextProvider = function(component) {
    return st(component) === Zo
};
ge.isElement = function(component) {
    return typeof component == "object" && component !== null && component.$$typeof === Ec
};
ge.isForwardRef = function(component) {
    return st(component) === ea
};
ge.isFragment = function(component) {
    return st(component) === Qo
};
ge.isLazy = function(component) {
    return st(component) === na
};
ge.isMemo = function(component) {
    return st(component) === ra
};
ge.isPortal = function(component) {
    return st(component) === Ac
};
ge.isProfiler = function(component) {
    return st(component) === Vo
};
ge.isStrictMode = function(component) {
    return st(component) === Yo
};
ge.isSuspense = function(component) {
    return st(component) === ta
};
ge.isValidElementType = function(component) {
    return typeof component == "string" || typeof component == "function" || component === Qo || component === qo || component === Vo || component === Yo || component === ta || component === ig || typeof component == "object" && component !== null && (component.$$typeof === na || component.$$typeof === ra || component.$$typeof === Zo || component.$$typeof === Xo || component.$$typeof === ea || component.$$typeof === ag || component.$$typeof === sg || component.$$typeof === cg || component.$$typeof === og)
};
ge.typeOf = st;
Hd.exports = ge;
var $d = Hd.exports;

function Ms(component) {
    var nextSibling = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        parentNode = [];
    return vt.Children.forEach(component, function(n) {
        n == null && !nextSibling.keepEmpty || (Array.isArray(n) ? parentNode = parentNode.concat(Ms(n)) : $d.isFragment(n) && n.props ? parentNode = parentNode.concat(Ms(n.props.children, nextSibling)) : parentNode.push(n))
    }), parentNode
}
var Is = {},
    lg = function(nextSibling) {};

function ug(component, nextSibling) {}

function fg(component, nextSibling) {}

function dg() {
    Is = {}
}

function Wd(component, nextSibling, parentNode) {
    !nextSibling && !Is[parentNode] && (component(!1, parentNode), Is[parentNode] = !0)
}

function ia(component, nextSibling) {
    Wd(ug, component, nextSibling)
}

function hg(component, nextSibling) {
    Wd(fg, component, nextSibling)
}
ia.preMessage = lg;
ia.resetWarned = dg;
ia.noteOnce = hg;

function fe(component, nextSibling, parentNode) {
    return nextSibling = wd(nextSibling), nextSibling in component ? Object.defineProperty(component, nextSibling, {
        value: parentNode,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : component[nextSibling] = parentNode, component
}

function uu(component, nextSibling) {
    var parentNode = Object.keys(component);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(component);
        nextSibling && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(component, i).enumerable
        })), parentNode.push.apply(parentNode, n)
    }
    return parentNode
}

function K(component) {
    for (var nextSibling = 1; nextSibling < arguments.length; nextSibling++) {
        var parentNode = arguments[nextSibling] != null ? arguments[nextSibling] : {};
        nextSibling % 2 ? uu(Object(parentNode), !0).forEach(function(n) {
            fe(component, n, parentNode[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(component, Object.getOwnPropertyDescriptors(parentNode)) : uu(Object(parentNode)).forEach(function(n) {
            Object.defineProperty(component, n, Object.getOwnPropertyDescriptor(parentNode, n))
        })
    }
    return component
}

function vg(component, nextSibling, parentNode) {
    var n = q({});
    return (!("value" in n.current) || parentNode(n.current.condition, nextSibling)) && (n.current.value = component(), n.current.condition = nextSibling), n.current.value
}

function Tc(component, nextSibling) {
    typeof component == "function" ? component(nextSibling) : ze(component) === "object" && component && "current" in component && (component.current = nextSibling)
}

function oa() {
    for (var component = arguments.length, nextSibling = new Array(component), parentNode = 0; parentNode < component; parentNode++) nextSibling[parentNode] = arguments[parentNode];
    var n = nextSibling.filter(function(i) {
        return i
    });
    return n.length <= 1 ? n[0] : function(i) {
        nextSibling.forEach(function(o) {
            Tc(o, i)
        })
    }
}

function Gd() {
    for (var component = arguments.length, nextSibling = new Array(component), parentNode = 0; parentNode < component; parentNode++) nextSibling[parentNode] = arguments[parentNode];
    return vg(function() {
        return oa.apply(void 0, nextSibling)
    }, nextSibling, function(n, i) {
        return n.length === i.length && n.every(function(o, a) {
            return o === i[a]
        })
    })
}

function Ti(component) {
    var nextSibling, parentNode, n = $d.isMemo(component) ? component.type.type : component.type;
    return !(typeof n == "function" && !((nextSibling = n.prototype) !== null && nextSibling !== void 0 && nextSibling.render) || typeof component == "function" && !((parentNode = component.prototype) !== null && parentNode !== void 0 && parentNode.render))
}

function Po(component) {
    return component instanceof HTMLElement || component instanceof SVGElement
}

function Os(component) {
    return Po(component) ? component : component instanceof vt.Component ? vt.findDOMNode(component) : null
}
var pg = {},
    aa = {};
aa.byteLength = _g;
aa.toByteArray = yg;
aa.fromByteArray = Sg;
var Lt = [],
    ut = [],
    gg = typeof Uint8Array < "u" ? Uint8Array : Array,
    Ja = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var an = 0, mg = Ja.length; an < mg; ++an) Lt[an] = Ja[an], ut[Ja.charCodeAt(an)] = an;
ut["-".charCodeAt(0)] = 62;
ut["_".charCodeAt(0)] = 63;

function Jd(component) {
    var nextSibling = component.length;
    if (nextSibling % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var parentNode = component.indexOf("=");
    parentNode === -1 && (parentNode = nextSibling);
    var n = parentNode === nextSibling ? 0 : 4 - parentNode % 4;
    return [parentNode, n]
}

function _g(component) {
    var nextSibling = Jd(component),
        parentNode = nextSibling[0],
        n = nextSibling[1];
    return (parentNode + n) * 3 / 4 - n
}

function bg(component, nextSibling, parentNode) {
    return (nextSibling + parentNode) * 3 / 4 - parentNode
}

function yg(component) {
    var nextSibling, parentNode = Jd(component),
        n = parentNode[0],
        i = parentNode[1],
        o = new gg(bg(component, n, i)),
        a = 0,
        s = i > 0 ? n - 4 : n,
        d;
    for (d = 0; d < s; d += 4) nextSibling = ut[component.charCodeAt(d)] << 18 | ut[component.charCodeAt(d + 1)] << 12 | ut[component.charCodeAt(d + 2)] << 6 | ut[component.charCodeAt(d + 3)], o[a++] = nextSibling >> 16 & 255, o[a++] = nextSibling >> 8 & 255, o[a++] = nextSibling & 255;
    return i === 2 && (nextSibling = ut[component.charCodeAt(d)] << 2 | ut[component.charCodeAt(d + 1)] >> 4, o[a++] = nextSibling & 255), i === 1 && (nextSibling = ut[component.charCodeAt(d)] << 10 | ut[component.charCodeAt(d + 1)] << 4 | ut[component.charCodeAt(d + 2)] >> 2, o[a++] = nextSibling >> 8 & 255, o[a++] = nextSibling & 255), o
}

function wg(component) {
    return Lt[component >> 18 & 63] + Lt[component >> 12 & 63] + Lt[component >> 6 & 63] + Lt[component & 63]
}

function xg(component, nextSibling, parentNode) {
    for (var n, i = [], o = nextSibling; o < parentNode; o += 3) n = (component[o] << 16 & 16711680) + (component[o + 1] << 8 & 65280) + (component[o + 2] & 255), i.push(wg(n));
    return i.join("")
}

function Sg(component) {
    for (var nextSibling, parentNode = component.length, n = parentNode % 3, i = [], o = 16383, a = 0, s = parentNode - n; a < s; a += o) i.push(xg(component, a, a + o > s ? s : a + o));
    return n === 1 ? (nextSibling = component[parentNode - 1], i.push(Lt[nextSibling >> 2] + Lt[nextSibling << 4 & 63] + "==")) : n === 2 && (nextSibling = (component[parentNode - 2] << 8) + component[parentNode - 1], i.push(Lt[nextSibling >> 10] + Lt[nextSibling >> 4 & 63] + Lt[nextSibling << 2 & 63] + "=")), i.join("")
}
var kc = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
kc.read = function(component, nextSibling, parentNode, n, i) {
    var o, a, s = i * 8 - n - 1,
        d = (1 << s) - 1,
        f = d >> 1,
        c = -7,
        p = parentNode ? i - 1 : 0,
        v = parentNode ? -1 : 1,
        h = component[nextSibling + p];
    for (p += v, o = h & (1 << -c) - 1, h >>= -c, c += s; c > 0; o = o * 256 + component[nextSibling + p], p += v, c -= 8);
    for (a = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; a = a * 256 + component[nextSibling + p], p += v, c -= 8);
    if (o === 0) o = 1 - f;
    else {
        if (o === d) return a ? NaN : (h ? -1 : 1) * (1 / 0);
        a = a + Math.pow(2, n), o = o - f
    }
    return (h ? -1 : 1) * a * Math.pow(2, o - n)
};
kc.write = function(component, nextSibling, parentNode, n, i, o) {
    var a, s, d, f = o * 8 - i - 1,
        c = (1 << f) - 1,
        p = c >> 1,
        v = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        h = n ? 0 : o - 1,
        _ = n ? 1 : -1,
        y = nextSibling < 0 || nextSibling === 0 && 1 / nextSibling < 0 ? 1 : 0;
    for (nextSibling = Math.abs(nextSibling), isNaN(nextSibling) || nextSibling === 1 / 0 ? (s = isNaN(nextSibling) ? 1 : 0, a = c) : (a = Math.floor(Math.log(nextSibling) / Math.LN2), nextSibling * (d = Math.pow(2, -a)) < 1 && (a--, d *= 2), a + p >= 1 ? nextSibling += v / d : nextSibling += v * Math.pow(2, 1 - p), nextSibling * d >= 2 && (a++, d /= 2), a + p >= c ? (s = 0, a = c) : a + p >= 1 ? (s = (nextSibling * d - 1) * Math.pow(2, i), a = a + p) : (s = nextSibling * Math.pow(2, p - 1) * Math.pow(2, i), a = 0)); i >= 8; component[parentNode + h] = s & 255, h += _, s /= 256, i -= 8);
    for (a = a << i | s, f += i; f > 0; component[parentNode + h] = a & 255, h += _, a /= 256, f -= 8);
    component[parentNode + h - _] |= y * 128
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(component) {
    var nextSibling = aa,
        parentNode = kc,
        n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    component.Buffer = s, component.SlowBuffer = x, component.INSPECT_MAX_BYTES = 50;
    var i = 2147483647;
    component.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = o(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function o() {
        try {
            var g = new Uint8Array(1),
                l = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(l, Uint8Array.prototype), Object.setPrototypeOf(g, l), g.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(s.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (s.isBuffer(this)) return this.buffer
        }
    }), Object.defineProperty(s.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (s.isBuffer(this)) return this.byteOffset
        }
    });

    function a(g) {
        if (g > i) throw new RangeError('The value "' + g + '" is invalid for option "size"');
        var l = new Uint8Array(g);
        return Object.setPrototypeOf(l, s.prototype), l
    }

    function s(g, l, u) {
        if (typeof g == "number") {
            if (typeof l == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return p(g)
        }
        return d(g, l, u)
    }
    s.poolSize = 8192;

    function d(g, l, u) {
        if (typeof g == "string") return v(g, l);
        if (ArrayBuffer.isView(g)) return _(g);
        if (g == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g);
        if (U(g, ArrayBuffer) || g && U(g.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (U(g, SharedArrayBuffer) || g && U(g.buffer, SharedArrayBuffer))) return y(g, l, u);
        if (typeof g == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        var m = g.valueOf && g.valueOf();
        if (m != null && m !== g) return s.from(m, l, u);
        var b = S(g);
        if (b) return b;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof g[Symbol.toPrimitive] == "function") return s.from(g[Symbol.toPrimitive]("string"), l, u);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g)
    }
    s.from = function(g, l, u) {
        return d(g, l, u)
    }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);

    function f(g) {
        if (typeof g != "number") throw new TypeError('"size" argument must be of type number');
        if (g < 0) throw new RangeError('The value "' + g + '" is invalid for option "size"')
    }

    function c(g, l, u) {
        return f(g), g <= 0 ? a(g) : l !== void 0 ? typeof u == "string" ? a(g).fill(l, u) : a(g).fill(l) : a(g)
    }
    s.alloc = function(g, l, u) {
        return c(g, l, u)
    };

    function p(g) {
        return f(g), a(g < 0 ? 0 : w(g) | 0)
    }
    s.allocUnsafe = function(g) {
        return p(g)
    }, s.allocUnsafeSlow = function(g) {
        return p(g)
    };

    function v(g, l) {
        if ((typeof l != "string" || l === "") && (l = "utf8"), !s.isEncoding(l)) throw new TypeError("Unknown encoding: " + l);
        var u = R(g, l) | 0,
            m = a(u),
            b = m.write(g, l);
        return b !== u && (m = m.slice(0, b)), m
    }

    function h(g) {
        for (var l = g.length < 0 ? 0 : w(g.length) | 0, u = a(l), m = 0; m < l; m += 1) u[m] = g[m] & 255;
        return u
    }

    function _(g) {
        if (U(g, Uint8Array)) {
            var l = new Uint8Array(g);
            return y(l.buffer, l.byteOffset, l.byteLength)
        }
        return h(g)
    }

    function y(g, l, u) {
        if (l < 0 || g.byteLength < l) throw new RangeError('"offset" is outside of buffer bounds');
        if (g.byteLength < l + (u || 0)) throw new RangeError('"length" is outside of buffer bounds');
        var m;
        return l === void 0 && u === void 0 ? m = new Uint8Array(g) : u === void 0 ? m = new Uint8Array(g, l) : m = new Uint8Array(g, l, u), Object.setPrototypeOf(m, s.prototype), m
    }

    function S(g) {
        if (s.isBuffer(g)) {
            var l = w(g.length) | 0,
                u = a(l);
            return u.length === 0 || g.copy(u, 0, 0, l), u
        }
        if (g.length !== void 0) return typeof g.length != "number" || De(g.length) ? a(0) : h(g);
        if (g.type === "Buffer" && Array.isArray(g.data)) return h(g.data)
    }

    function w(g) {
        if (g >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
        return g | 0
    }

    function x(g) {
        return +g != g && (g = 0), s.alloc(+g)
    }
    s.isBuffer = function(l) {
        return l != null && l._isBuffer === !0 && l !== s.prototype
    }, s.compare = function(l, u) {
        if (U(l, Uint8Array) && (l = s.from(l, l.offset, l.byteLength)), U(u, Uint8Array) && (u = s.from(u, u.offset, u.byteLength)), !s.isBuffer(l) || !s.isBuffer(u)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (l === u) return 0;
        for (var m = l.length, b = u.length, O = 0, L = Math.min(m, b); O < L; ++O)
            if (l[O] !== u[O]) {
                m = l[O], b = u[O];
                break
            } return m < b ? -1 : b < m ? 1 : 0
    }, s.isEncoding = function(l) {
        switch (String(l).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    }, s.concat = function(l, u) {
        if (!Array.isArray(l)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (l.length === 0) return s.alloc(0);
        var m;
        if (u === void 0)
            for (u = 0, m = 0; m < l.length; ++m) u += l[m].length;
        var b = s.allocUnsafe(u),
            O = 0;
        for (m = 0; m < l.length; ++m) {
            var L = l[m];
            if (U(L, Uint8Array)) O + L.length > b.length ? s.from(L).copy(b, O) : Uint8Array.prototype.set.call(b, L, O);
            else if (s.isBuffer(L)) L.copy(b, O);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            O += L.length
        }
        return b
    };

    function R(g, l) {
        if (s.isBuffer(g)) return g.length;
        if (ArrayBuffer.isView(g) || U(g, ArrayBuffer)) return g.byteLength;
        if (typeof g != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof g);
        var u = g.length,
            m = arguments.length > 2 && arguments[2] === !0;
        if (!m && u === 0) return 0;
        for (var b = !1;;) switch (l) {
            case "ascii":
            case "latin1":
            case "binary":
                return u;
            case "utf8":
            case "utf-8":
                return te(g).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return u * 2;
            case "hex":
                return u >>> 1;
            case "base64":
                return pe(g).length;
            default:
                if (b) return m ? -1 : te(g).length;
                l = ("" + l).toLowerCase(), b = !0
        }
    }
    s.byteLength = R;

    function I(g, l, u) {
        var m = !1;
        if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, l >>>= 0, u <= l)) return "";
        for (g || (g = "utf8");;) switch (g) {
            case "hex":
                return ne(this, l, u);
            case "utf8":
            case "utf-8":
                return M(this, l, u);
            case "ascii":
                return H(this, l, u);
            case "latin1":
            case "binary":
                return G(this, l, u);
            case "base64":
                return A(this, l, u);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return ee(this, l, u);
            default:
                if (m) throw new TypeError("Unknown encoding: " + g);
                g = (g + "").toLowerCase(), m = !0
        }
    }
    s.prototype._isBuffer = !0;

    function E(g, l, u) {
        var m = g[l];
        g[l] = g[u], g[u] = m
    }
    s.prototype.swap16 = function() {
        var l = this.length;
        if (l % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var u = 0; u < l; u += 2) E(this, u, u + 1);
        return this
    }, s.prototype.swap32 = function() {
        var l = this.length;
        if (l % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var u = 0; u < l; u += 4) E(this, u, u + 3), E(this, u + 1, u + 2);
        return this
    }, s.prototype.swap64 = function() {
        var l = this.length;
        if (l % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var u = 0; u < l; u += 8) E(this, u, u + 7), E(this, u + 1, u + 6), E(this, u + 2, u + 5), E(this, u + 3, u + 4);
        return this
    }, s.prototype.toString = function() {
        var l = this.length;
        return l === 0 ? "" : arguments.length === 0 ? M(this, 0, l) : I.apply(this, arguments)
    }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(l) {
        if (!s.isBuffer(l)) throw new TypeError("Argument must be a Buffer");
        return this === l ? !0 : s.compare(this, l) === 0
    }, s.prototype.inspect = function() {
        var l = "",
            u = component.INSPECT_MAX_BYTES;
        return l = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (l += " ... "), "<Buffer " + l + ">"
    }, n && (s.prototype[n] = s.prototype.inspect), s.prototype.compare = function(l, u, m, b, O) {
        if (U(l, Uint8Array) && (l = s.from(l, l.offset, l.byteLength)), !s.isBuffer(l)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l);
        if (u === void 0 && (u = 0), m === void 0 && (m = l ? l.length : 0), b === void 0 && (b = 0), O === void 0 && (O = this.length), u < 0 || m > l.length || b < 0 || O > this.length) throw new RangeError("out of range index");
        if (b >= O && u >= m) return 0;
        if (b >= O) return -1;
        if (u >= m) return 1;
        if (u >>>= 0, m >>>= 0, b >>>= 0, O >>>= 0, this === l) return 0;
        for (var L = O - b, re = m - u, ue = Math.min(L, re), ae = this.slice(b, O), Me = l.slice(u, m), ye = 0; ye < ue; ++ye)
            if (ae[ye] !== Me[ye]) {
                L = ae[ye], re = Me[ye];
                break
            } return L < re ? -1 : re < L ? 1 : 0
    };

    function N(g, l, u, m, b) {
        if (g.length === 0) return -1;
        if (typeof u == "string" ? (m = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, De(u) && (u = b ? 0 : g.length - 1), u < 0 && (u = g.length + u), u >= g.length) {
            if (b) return -1;
            u = g.length - 1
        } else if (u < 0)
            if (b) u = 0;
            else return -1;
        if (typeof l == "string" && (l = s.from(l, m)), s.isBuffer(l)) return l.length === 0 ? -1 : C(g, l, u, m, b);
        if (typeof l == "number") return l = l & 255, typeof Uint8Array.prototype.indexOf == "function" ? b ? Uint8Array.prototype.indexOf.call(g, l, u) : Uint8Array.prototype.lastIndexOf.call(g, l, u) : C(g, [l], u, m, b);
        throw new TypeError("val must be string, number or Buffer")
    }

    function C(g, l, u, m, b) {
        var O = 1,
            L = g.length,
            re = l.length;
        if (m !== void 0 && (m = String(m).toLowerCase(), m === "ucs2" || m === "ucs-2" || m === "utf16le" || m === "utf-16le")) {
            if (g.length < 2 || l.length < 2) return -1;
            O = 2, L /= 2, re /= 2, u /= 2
        }

        function ue(gr, _t) {
            return O === 1 ? gr[_t] : gr.readUInt16BE(_t * O)
        }
        var ae;
        if (b) {
            var Me = -1;
            for (ae = u; ae < L; ae++)
                if (ue(g, ae) === ue(l, Me === -1 ? 0 : ae - Me)) {
                    if (Me === -1 && (Me = ae), ae - Me + 1 === re) return Me * O
                } else Me !== -1 && (ae -= ae - Me), Me = -1
        } else
            for (u + re > L && (u = L - re), ae = u; ae >= 0; ae--) {
                for (var ye = !0, Bt = 0; Bt < re; Bt++)
                    if (ue(g, ae + Bt) !== ue(l, Bt)) {
                        ye = !1;
                        break
                    } if (ye) return ae
            }
        return -1
    }
    s.prototype.includes = function(l, u, m) {
        return this.indexOf(l, u, m) !== -1
    }, s.prototype.indexOf = function(l, u, m) {
        return N(this, l, u, m, !0)
    }, s.prototype.lastIndexOf = function(l, u, m) {
        return N(this, l, u, m, !1)
    };

    function T(g, l, u, m) {
        u = Number(u) || 0;
        var b = g.length - u;
        m ? (m = Number(m), m > b && (m = b)) : m = b;
        var O = l.length;
        m > O / 2 && (m = O / 2);
        for (var L = 0; L < m; ++L) {
            var re = parseInt(l.substr(L * 2, 2), 16);
            if (De(re)) return L;
            g[u + L] = re
        }
        return L
    }

    function D(g, l, u, m) {
        return we(te(l, g.length - u), g, u, m)
    }

    function F(g, l, u, m) {
        return we(ce(l), g, u, m)
    }

    function B(g, l, u, m) {
        return we(pe(l), g, u, m)
    }

    function k(g, l, u, m) {
        return we(le(l, g.length - u), g, u, m)
    }
    s.prototype.write = function(l, u, m, b) {
        if (u === void 0) b = "utf8", m = this.length, u = 0;
        else if (m === void 0 && typeof u == "string") b = u, m = this.length, u = 0;
        else if (isFinite(u)) u = u >>> 0, isFinite(m) ? (m = m >>> 0, b === void 0 && (b = "utf8")) : (b = m, m = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        var O = this.length - u;
        if ((m === void 0 || m > O) && (m = O), l.length > 0 && (m < 0 || u < 0) || u > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        b || (b = "utf8");
        for (var L = !1;;) switch (b) {
            case "hex":
                return T(this, l, u, m);
            case "utf8":
            case "utf-8":
                return D(this, l, u, m);
            case "ascii":
            case "latin1":
            case "binary":
                return F(this, l, u, m);
            case "base64":
                return B(this, l, u, m);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return k(this, l, u, m);
            default:
                if (L) throw new TypeError("Unknown encoding: " + b);
                b = ("" + b).toLowerCase(), L = !0
        }
    }, s.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function A(g, l, u) {
        return l === 0 && u === g.length ? nextSibling.fromByteArray(g) : nextSibling.fromByteArray(g.slice(l, u))
    }

    function M(g, l, u) {
        u = Math.min(g.length, u);
        for (var m = [], b = l; b < u;) {
            var O = g[b],
                L = null,
                re = O > 239 ? 4 : O > 223 ? 3 : O > 191 ? 2 : 1;
            if (b + re <= u) {
                var ue, ae, Me, ye;
                switch (re) {
                    case 1:
                        O < 128 && (L = O);
                        break;
                    case 2:
                        ue = g[b + 1], (ue & 192) === 128 && (ye = (O & 31) << 6 | ue & 63, ye > 127 && (L = ye));
                        break;
                    case 3:
                        ue = g[b + 1], ae = g[b + 2], (ue & 192) === 128 && (ae & 192) === 128 && (ye = (O & 15) << 12 | (ue & 63) << 6 | ae & 63, ye > 2047 && (ye < 55296 || ye > 57343) && (L = ye));
                        break;
                    case 4:
                        ue = g[b + 1], ae = g[b + 2], Me = g[b + 3], (ue & 192) === 128 && (ae & 192) === 128 && (Me & 192) === 128 && (ye = (O & 15) << 18 | (ue & 63) << 12 | (ae & 63) << 6 | Me & 63, ye > 65535 && ye < 1114112 && (L = ye))
                }
            }
            L === null ? (L = 65533, re = 1) : L > 65535 && (L -= 65536, m.push(L >>> 10 & 1023 | 55296), L = 56320 | L & 1023), m.push(L), b += re
        }
        return j(m)
    }
    var P = 4096;

    function j(g) {
        var l = g.length;
        if (l <= P) return String.fromCharCode.apply(String, g);
        for (var u = "", m = 0; m < l;) u += String.fromCharCode.apply(String, g.slice(m, m += P));
        return u
    }

    function H(g, l, u) {
        var m = "";
        u = Math.min(g.length, u);
        for (var b = l; b < u; ++b) m += String.fromCharCode(g[b] & 127);
        return m
    }

    function G(g, l, u) {
        var m = "";
        u = Math.min(g.length, u);
        for (var b = l; b < u; ++b) m += String.fromCharCode(g[b]);
        return m
    }

    function ne(g, l, u) {
        var m = g.length;
        (!l || l < 0) && (l = 0), (!u || u < 0 || u > m) && (u = m);
        for (var b = "", O = l; O < u; ++O) b += Fe[g[O]];
        return b
    }

    function ee(g, l, u) {
        for (var m = g.slice(l, u), b = "", O = 0; O < m.length - 1; O += 2) b += String.fromCharCode(m[O] + m[O + 1] * 256);
        return b
    }
    s.prototype.slice = function(l, u) {
        var m = this.length;
        l = ~~l, u = u === void 0 ? m : ~~u, l < 0 ? (l += m, l < 0 && (l = 0)) : l > m && (l = m), u < 0 ? (u += m, u < 0 && (u = 0)) : u > m && (u = m), u < l && (u = l);
        var b = this.subarray(l, u);
        return Object.setPrototypeOf(b, s.prototype), b
    };

    function Q(g, l, u) {
        if (g % 1 !== 0 || g < 0) throw new RangeError("offset is not uint");
        if (g + l > u) throw new RangeError("Trying to access beyond buffer length")
    }
    s.prototype.readUintLE = s.prototype.readUIntLE = function(l, u, m) {
        l = l >>> 0, u = u >>> 0, m || Q(l, u, this.length);
        for (var b = this[l], O = 1, L = 0; ++L < u && (O *= 256);) b += this[l + L] * O;
        return b
    }, s.prototype.readUintBE = s.prototype.readUIntBE = function(l, u, m) {
        l = l >>> 0, u = u >>> 0, m || Q(l, u, this.length);
        for (var b = this[l + --u], O = 1; u > 0 && (O *= 256);) b += this[l + --u] * O;
        return b
    }, s.prototype.readUint8 = s.prototype.readUInt8 = function(l, u) {
        return l = l >>> 0, u || Q(l, 1, this.length), this[l]
    }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(l, u) {
        return l = l >>> 0, u || Q(l, 2, this.length), this[l] | this[l + 1] << 8
    }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(l, u) {
        return l = l >>> 0, u || Q(l, 2, this.length), this[l] << 8 | this[l + 1]
    }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(l, u) {
        return l = l >>> 0, u || Q(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216
    }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(l, u) {
        return l = l >>> 0, u || Q(l, 4, this.length), this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3])
    }, s.prototype.readIntLE = function(l, u, m) {
        l = l >>> 0, u = u >>> 0, m || Q(l, u, this.length);
        for (var b = this[l], O = 1, L = 0; ++L < u && (O *= 256);) b += this[l + L] * O;
        return O *= 128, b >= O && (b -= Math.pow(2, 8 * u)), b
    }, s.prototype.readIntBE = function(l, u, m) {
        l = l >>> 0, u = u >>> 0, m || Q(l, u, this.length);
        for (var b = u, O = 1, L = this[l + --b]; b > 0 && (O *= 256);) L += this[l + --b] * O;
        return O *= 128, L >= O && (L -= Math.pow(2, 8 * u)), L
    }, s.prototype.readInt8 = function(l, u) {
        return l = l >>> 0, u || Q(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l]
    }, s.prototype.readInt16LE = function(l, u) {
        l = l >>> 0, u || Q(l, 2, this.length);
        var m = this[l] | this[l + 1] << 8;
        return m & 32768 ? m | 4294901760 : m
    }, s.prototype.readInt16BE = function(l, u) {
        l = l >>> 0, u || Q(l, 2, this.length);
        var m = this[l + 1] | this[l] << 8;
        return m & 32768 ? m | 4294901760 : m
    }, s.prototype.readInt32LE = function(l, u) {
        return l = l >>> 0, u || Q(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24
    }, s.prototype.readInt32BE = function(l, u) {
        return l = l >>> 0, u || Q(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]
    }, s.prototype.readFloatLE = function(l, u) {
        return l = l >>> 0, u || Q(l, 4, this.length), parentNode.read(this, l, !0, 23, 4)
    }, s.prototype.readFloatBE = function(l, u) {
        return l = l >>> 0, u || Q(l, 4, this.length), parentNode.read(this, l, !1, 23, 4)
    }, s.prototype.readDoubleLE = function(l, u) {
        return l = l >>> 0, u || Q(l, 8, this.length), parentNode.read(this, l, !0, 52, 8)
    }, s.prototype.readDoubleBE = function(l, u) {
        return l = l >>> 0, u || Q(l, 8, this.length), parentNode.read(this, l, !1, 52, 8)
    };

    function Z(g, l, u, m, b, O) {
        if (!s.isBuffer(g)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (l > b || l < O) throw new RangeError('"value" argument is out of bounds');
        if (u + m > g.length) throw new RangeError("Index out of range")
    }
    s.prototype.writeUintLE = s.prototype.writeUIntLE = function(l, u, m, b) {
        if (l = +l, u = u >>> 0, m = m >>> 0, !b) {
            var O = Math.pow(2, 8 * m) - 1;
            Z(this, l, u, m, O, 0)
        }
        var L = 1,
            re = 0;
        for (this[u] = l & 255; ++re < m && (L *= 256);) this[u + re] = l / L & 255;
        return u + m
    }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(l, u, m, b) {
        if (l = +l, u = u >>> 0, m = m >>> 0, !b) {
            var O = Math.pow(2, 8 * m) - 1;
            Z(this, l, u, m, O, 0)
        }
        var L = m - 1,
            re = 1;
        for (this[u + L] = l & 255; --L >= 0 && (re *= 256);) this[u + L] = l / re & 255;
        return u + m
    }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(l, u, m) {
        return l = +l, u = u >>> 0, m || Z(this, l, u, 1, 255, 0), this[u] = l & 255, u + 1
    }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(l, u, m) {
        return l = +l, u = u >>> 0, m || Z(this, l, u, 2, 65535, 0), this[u] = l & 255, this[u + 1] = l >>> 8, u + 2
    }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(l, u, m) {
        return l = +l, u = u >>> 0, m || Z(this, l, u, 2, 65535, 0), this[u] = l >>> 8, this[u + 1] = l & 255, u + 2
    }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(l, u, m) {
        return l = +l, u = u >>> 0, m || Z(this, l, u, 4, 4294967295, 0), this[u + 3] = l >>> 24, this[u + 2] = l >>> 16, this[u + 1] = l >>> 8, this[u] = l & 255, u + 4
    }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(l, u, m) {
        return l = +l, u = u >>> 0, m || Z(this, l, u, 4, 4294967295, 0), this[u] = l >>> 24, this[u + 1] = l >>> 16, this[u + 2] = l >>> 8, this[u + 3] = l & 255, u + 4
    }, s.prototype.writeIntLE = function(l, u, m, b) {
        if (l = +l, u = u >>> 0, !b) {
            var O = Math.pow(2, 8 * m - 1);
            Z(this, l, u, m, O - 1, -O)
        }
        var L = 0,
            re = 1,
            ue = 0;
        for (this[u] = l & 255; ++L < m && (re *= 256);) l < 0 && ue === 0 && this[u + L - 1] !== 0 && (ue = 1), this[u + L] = (l / re >> 0) - ue & 255;
        return u + m
    }, s.prototype.writeIntBE = function(l, u, m, b) {
        if (l = +l, u = u >>> 0, !b) {
            var O = Math.pow(2, 8 * m - 1);
            Z(this, l, u, m, O - 1, -O)
        }
        var L = m - 1,
            re = 1,
            ue = 0;
        for (this[u + L] = l & 255; --L >= 0 && (re *= 256);) l < 0 && ue === 0 && this[u + L + 1] !== 0 && (ue = 1), this[u + L] = (l / re >> 0) - ue & 255;
        return u + m
    }, s.prototype.writeInt8 = function(l, u, m) {
        return l = +l, u = u >>> 0, m || Z(this, l, u, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[u] = l & 255, u + 1
    }, s.prototype.writeInt16LE = function(l, u, m) {
        return l = +l, u = u >>> 0, m || Z(this, l, u, 2, 32767, -32768), this[u] = l & 255, this[u + 1] = l >>> 8, u + 2
    }, s.prototype.writeInt16BE = function(l, u, m) {
        return l = +l, u = u >>> 0, m || Z(this, l, u, 2, 32767, -32768), this[u] = l >>> 8, this[u + 1] = l & 255, u + 2
    }, s.prototype.writeInt32LE = function(l, u, m) {
        return l = +l, u = u >>> 0, m || Z(this, l, u, 4, 2147483647, -2147483648), this[u] = l & 255, this[u + 1] = l >>> 8, this[u + 2] = l >>> 16, this[u + 3] = l >>> 24, u + 4
    }, s.prototype.writeInt32BE = function(l, u, m) {
        return l = +l, u = u >>> 0, m || Z(this, l, u, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[u] = l >>> 24, this[u + 1] = l >>> 16, this[u + 2] = l >>> 8, this[u + 3] = l & 255, u + 4
    };

    function ve(g, l, u, m, b, O) {
        if (u + m > g.length) throw new RangeError("Index out of range");
        if (u < 0) throw new RangeError("Index out of range")
    }

    function me(g, l, u, m, b) {
        return l = +l, u = u >>> 0, b || ve(g, l, u, 4), parentNode.write(g, l, u, m, 23, 4), u + 4
    }
    s.prototype.writeFloatLE = function(l, u, m) {
        return me(this, l, u, !0, m)
    }, s.prototype.writeFloatBE = function(l, u, m) {
        return me(this, l, u, !1, m)
    };

    function Ae(g, l, u, m, b) {
        return l = +l, u = u >>> 0, b || ve(g, l, u, 8), parentNode.write(g, l, u, m, 52, 8), u + 8
    }
    s.prototype.writeDoubleLE = function(l, u, m) {
        return Ae(this, l, u, !0, m)
    }, s.prototype.writeDoubleBE = function(l, u, m) {
        return Ae(this, l, u, !1, m)
    }, s.prototype.copy = function(l, u, m, b) {
        if (!s.isBuffer(l)) throw new TypeError("argument should be a Buffer");
        if (m || (m = 0), !b && b !== 0 && (b = this.length), u >= l.length && (u = l.length), u || (u = 0), b > 0 && b < m && (b = m), b === m || l.length === 0 || this.length === 0) return 0;
        if (u < 0) throw new RangeError("targetStart out of bounds");
        if (m < 0 || m >= this.length) throw new RangeError("Index out of range");
        if (b < 0) throw new RangeError("sourceEnd out of bounds");
        b > this.length && (b = this.length), l.length - u < b - m && (b = l.length - u + m);
        var O = b - m;
        return this === l && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, m, b) : Uint8Array.prototype.set.call(l, this.subarray(m, b), u), O
    }, s.prototype.fill = function(l, u, m, b) {
        if (typeof l == "string") {
            if (typeof u == "string" ? (b = u, u = 0, m = this.length) : typeof m == "string" && (b = m, m = this.length), b !== void 0 && typeof b != "string") throw new TypeError("encoding must be a string");
            if (typeof b == "string" && !s.isEncoding(b)) throw new TypeError("Unknown encoding: " + b);
            if (l.length === 1) {
                var O = l.charCodeAt(0);
                (b === "utf8" && O < 128 || b === "latin1") && (l = O)
            }
        } else typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
        if (u < 0 || this.length < u || this.length < m) throw new RangeError("Out of range index");
        if (m <= u) return this;
        u = u >>> 0, m = m === void 0 ? this.length : m >>> 0, l || (l = 0);
        var L;
        if (typeof l == "number")
            for (L = u; L < m; ++L) this[L] = l;
        else {
            var re = s.isBuffer(l) ? l : s.from(l, b),
                ue = re.length;
            if (ue === 0) throw new TypeError('The value "' + l + '" is invalid for argument "value"');
            for (L = 0; L < m - u; ++L) this[L + u] = re[L % ue]
        }
        return this
    };
    var He = /[^+/0-9A-Za-z-_]/g;

    function J(g) {
        if (g = g.split("=")[0], g = g.trim().replace(He, ""), g.length < 2) return "";
        for (; g.length % 4 !== 0;) g = g + "=";
        return g
    }

    function te(g, l) {
        l = l || 1 / 0;
        for (var u, m = g.length, b = null, O = [], L = 0; L < m; ++L) {
            if (u = g.charCodeAt(L), u > 55295 && u < 57344) {
                if (!b) {
                    if (u > 56319) {
                        (l -= 3) > -1 && O.push(239, 191, 189);
                        continue
                    } else if (L + 1 === m) {
                        (l -= 3) > -1 && O.push(239, 191, 189);
                        continue
                    }
                    b = u;
                    continue
                }
                if (u < 56320) {
                    (l -= 3) > -1 && O.push(239, 191, 189), b = u;
                    continue
                }
                u = (b - 55296 << 10 | u - 56320) + 65536
            } else b && (l -= 3) > -1 && O.push(239, 191, 189);
            if (b = null, u < 128) {
                if ((l -= 1) < 0) break;
                O.push(u)
            } else if (u < 2048) {
                if ((l -= 2) < 0) break;
                O.push(u >> 6 | 192, u & 63 | 128)
            } else if (u < 65536) {
                if ((l -= 3) < 0) break;
                O.push(u >> 12 | 224, u >> 6 & 63 | 128, u & 63 | 128)
            } else if (u < 1114112) {
                if ((l -= 4) < 0) break;
                O.push(u >> 18 | 240, u >> 12 & 63 | 128, u >> 6 & 63 | 128, u & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return O
    }

    function ce(g) {
        for (var l = [], u = 0; u < g.length; ++u) l.push(g.charCodeAt(u) & 255);
        return l
    }

    function le(g, l) {
        for (var u, m, b, O = [], L = 0; L < g.length && !((l -= 2) < 0); ++L) u = g.charCodeAt(L), m = u >> 8, b = u % 256, O.push(b), O.push(m);
        return O
    }

    function pe(g) {
        return nextSibling.toByteArray(J(g))
    }

    function we(g, l, u, m) {
        for (var b = 0; b < m && !(b + u >= l.length || b >= g.length); ++b) l[b + u] = g[b];
        return b
    }

    function U(g, l) {
        return g instanceof l || g != null && g.constructor != null && g.constructor.name != null && g.constructor.name === l.name
    }

    function De(g) {
        return g !== g
    }
    var Fe = function() {
        for (var g = "0123456789abcdef", l = new Array(256), u = 0; u < 16; ++u)
            for (var m = u * 16, b = 0; b < 16; ++b) l[m + b] = g[u] + g[b];
        return l
    }()
})(pg);
var ke = {},
    It, Ot;

function Rs() {
    throw new Error("setTimeout has not been defined")
}

function Ns() {
    throw new Error("clearTimeout has not been defined")
}(function() {
    try {
        typeof setTimeout == "function" ? It = setTimeout : It = Rs
    } catch {
        It = Rs
    }
    try {
        typeof clearTimeout == "function" ? Ot = clearTimeout : Ot = Ns
    } catch {
        Ot = Ns
    }
})();

function Kd(component) {
    if (It === setTimeout) return setTimeout(component, 0);
    if ((It === Rs || !It) && setTimeout) return It = setTimeout, setTimeout(component, 0);
    try {
        return It(component, 0)
    } catch {
        try {
            return It.call(null, component, 0)
        } catch {
            return It.call(this, component, 0)
        }
    }
}

function Eg(component) {
    if (Ot === clearTimeout) return clearTimeout(component);
    if ((Ot === Ns || !Ot) && clearTimeout) return Ot = clearTimeout, clearTimeout(component);
    try {
        return Ot(component)
    } catch {
        try {
            return Ot.call(null, component)
        } catch {
            return Ot.call(this, component)
        }
    }
}
var Kt = [],
    Sn = !1,
    Lr, wo = -1;

function Ag() {
    !Sn || !Lr || (Sn = !1, Lr.length ? Kt = Lr.concat(Kt) : wo = -1, Kt.length && Qd())
}

function Qd() {
    if (!Sn) {
        var component = Kd(Ag);
        Sn = !0;
        for (var nextSibling = Kt.length; nextSibling;) {
            for (Lr = Kt, Kt = []; ++wo < nextSibling;) Lr && Lr[wo].run();
            wo = -1, nextSibling = Kt.length
        }
        Lr = null, Sn = !1, Eg(component)
    }
}
ke.nextTick = function(component) {
    var nextSibling = new Array(arguments.length - 1);
    if (arguments.length > 1)
        for (var parentNode = 1; parentNode < arguments.length; parentNode++) nextSibling[parentNode - 1] = arguments[parentNode];
    Kt.push(new Yd(component, nextSibling)), Kt.length === 1 && !Sn && Kd(Qd)
};

function Yd(component, nextSibling) {
    this.fun = component, this.array = nextSibling
}
Yd.prototype.run = function() {
    this.fun.apply(null, this.array)
};
ke.title = "browser";
ke.browser = !0;
ke.env = {};
ke.argv = [];
ke.version = "";
ke.versions = {};

function Vt() {}
ke.on = Vt;
ke.addListener = Vt;
ke.once = Vt;
ke.off = Vt;
ke.removeListener = Vt;
ke.removeAllListeners = Vt;
ke.emit = Vt;
ke.prependListener = Vt;
ke.prependOnceListener = Vt;
ke.listeners = function(component) {
    return []
};
ke.binding = function(component) {
    throw new Error("process.binding is not supported")
};
ke.cwd = function() {
    return "/"
};
ke.chdir = function(component) {
    throw new Error("process.chdir is not supported")
};
ke.umask = function() {
    return 0
};
var Cg = function(component) {
        function nextSibling() {
            var n = this || self;
            return delete component.prototype.__magic__, n
        }
        if (typeof globalThis == "object") return globalThis;
        if (this) return nextSibling();
        component.defineProperty(component.prototype, "__magic__", {
            configurable: !0,
            get: nextSibling
        });
        var parentNode = __magic__;
        return parentNode
    }(Object),
    Ka = Cg,
    Vd = function() {
        if (typeof Map < "u") return Map;

        function component(nextSibling, parentNode) {
            var n = -1;
            return nextSibling.some(function(i, o) {
                return i[0] === parentNode ? (n = o, !0) : !1
            }), n
        }
        return function() {
            function nextSibling() {
                this.__entries__ = []
            }
            return Object.defineProperty(nextSibling.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), nextSibling.prototype.get = function(parentNode) {
                var n = component(this.__entries__, parentNode),
                    i = this.__entries__[n];
                return i && i[1]
            }, nextSibling.prototype.set = function(parentNode, n) {
                var i = component(this.__entries__, parentNode);
                ~i ? this.__entries__[i][1] = n : this.__entries__.push([parentNode, n])
            }, nextSibling.prototype.delete = function(parentNode) {
                var n = this.__entries__,
                    i = component(n, parentNode);
                ~i && n.splice(i, 1)
            }, nextSibling.prototype.has = function(parentNode) {
                return !!~component(this.__entries__, parentNode)
            }, nextSibling.prototype.clear = function() {
                this.__entries__.splice(0)
            }, nextSibling.prototype.forEach = function(parentNode, n) {
                n === void 0 && (n = null);
                for (var i = 0, o = this.__entries__; i < o.length; i++) {
                    var a = o[i];
                    parentNode.call(n, a[1], a[0])
                }
            }, nextSibling
        }()
    }(),
    Ls = typeof window < "u" && typeof document < "u" && window.document === document,
    Do = function() {
        return typeof Ka < "u" && Ka.Math === Math ? Ka : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")()
    }(),
    Tg = function() {
        return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Do) : function(component) {
            return setTimeout(function() {
                return component(Date.now())
            }, 1e3 / 60)
        }
    }(),
    kg = 2;

function Mg(component, nextSibling) {
    var parentNode = !1,
        n = !1,
        i = 0;

    function o() {
        parentNode && (parentNode = !1, component()), n && s()
    }

    function a() {
        Tg(o)
    }

    function s() {
        var d = Date.now();
        if (parentNode) {
            if (d - i < kg) return;
            n = !0
        } else parentNode = !0, n = !1, setTimeout(a, nextSibling);
        i = d
    }
    return s
}
var Ig = 20,
    Og = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    Rg = typeof MutationObserver < "u",
    Ng = function() {
        function component() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Mg(this.refresh.bind(this), Ig)
        }
        return component.prototype.addObserver = function(nextSibling) {
            ~this.observers_.indexOf(nextSibling) || this.observers_.push(nextSibling), this.connected_ || this.connect_()
        }, component.prototype.removeObserver = function(nextSibling) {
            var parentNode = this.observers_,
                n = parentNode.indexOf(nextSibling);
            ~n && parentNode.splice(n, 1), !parentNode.length && this.connected_ && this.disconnect_()
        }, component.prototype.refresh = function() {
            var nextSibling = this.updateObservers_();
            nextSibling && this.refresh()
        }, component.prototype.updateObservers_ = function() {
            var nextSibling = this.observers_.filter(function(parentNode) {
                return parentNode.gatherActive(), parentNode.hasActive()
            });
            return nextSibling.forEach(function(parentNode) {
                return parentNode.broadcastActive()
            }), nextSibling.length > 0
        }, component.prototype.connect_ = function() {
            !Ls || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Rg ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, component.prototype.disconnect_ = function() {
            !Ls || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, component.prototype.onTransitionEnd_ = function(nextSibling) {
            var parentNode = nextSibling.propertyName,
                n = parentNode === void 0 ? "" : parentNode,
                i = Og.some(function(o) {
                    return !!~n.indexOf(o)
                });
            i && this.refresh()
        }, component.getInstance = function() {
            return this.instance_ || (this.instance_ = new component), this.instance_
        }, component.instance_ = null, component
    }(),
    Zd = function(component, nextSibling) {
        for (var parentNode = 0, n = Object.keys(nextSibling); parentNode < n.length; parentNode++) {
            var i = n[parentNode];
            Object.defineProperty(component, i, {
                value: nextSibling[i],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return component
    },
    Mn = function(component) {
        var nextSibling = component && component.ownerDocument && component.ownerDocument.defaultView;
        return nextSibling || Do
    },
    Xd = sa(0, 0, 0, 0);

function Fo(component) {
    return parseFloat(component) || 0
}

function fu(component) {
    for (var nextSibling = [], parentNode = 1; parentNode < arguments.length; parentNode++) nextSibling[parentNode - 1] = arguments[parentNode];
    return nextSibling.reduce(function(n, i) {
        var o = component["border-" + i + "-width"];
        return n + Fo(o)
    }, 0)
}

function Lg(component) {
    for (var nextSibling = ["top", "right", "bottom", "left"], parentNode = {}, n = 0, i = nextSibling; n < i.length; n++) {
        var o = i[n],
            a = component["padding-" + o];
        parentNode[o] = Fo(a)
    }
    return parentNode
}

function Pg(component) {
    var nextSibling = component.getBBox();
    return sa(0, 0, nextSibling.width, nextSibling.height)
}

function Dg(component) {
    var nextSibling = component.clientWidth,
        parentNode = component.clientHeight;
    if (!nextSibling && !parentNode) return Xd;
    var n = Mn(component).getComputedStyle(component),
        i = Lg(n),
        o = i.left + i.right,
        a = i.top + i.bottom,
        s = Fo(n.width),
        d = Fo(n.height);
    if (n.boxSizing === "border-box" && (Math.round(s + o) !== nextSibling && (s -= fu(n, "left", "right") + o), Math.round(d + a) !== parentNode && (d -= fu(n, "top", "bottom") + a)), !Bg(component)) {
        var f = Math.round(s + o) - nextSibling,
            c = Math.round(d + a) - parentNode;
        Math.abs(f) !== 1 && (s -= f), Math.abs(c) !== 1 && (d -= c)
    }
    return sa(i.left, i.top, s, d)
}
var Fg = function() {
    return typeof SVGGraphicsElement < "u" ? function(component) {
        return component instanceof Mn(component).SVGGraphicsElement
    } : function(component) {
        return component instanceof Mn(component).SVGElement && typeof component.getBBox == "function"
    }
}();

function Bg(component) {
    return component === Mn(component).document.documentElement
}

function zg(component) {
    return Ls ? Fg(component) ? Pg(component) : Dg(component) : Xd
}

function jg(component) {
    var nextSibling = component.x,
        parentNode = component.y,
        n = component.width,
        i = component.height,
        o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
        a = Object.create(o.prototype);
    return Zd(a, {
        x: nextSibling,
        y: parentNode,
        width: n,
        height: i,
        top: parentNode,
        right: nextSibling + n,
        bottom: i + parentNode,
        left: nextSibling
    }), a
}

function sa(component, nextSibling, parentNode, n) {
    return {
        x: component,
        y: nextSibling,
        width: parentNode,
        height: n
    }
}
var Hg = function() {
        function component(nextSibling) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = sa(0, 0, 0, 0), this.target = nextSibling
        }
        return component.prototype.isActive = function() {
            var nextSibling = zg(this.target);
            return this.contentRect_ = nextSibling, nextSibling.width !== this.broadcastWidth || nextSibling.height !== this.broadcastHeight
        }, component.prototype.broadcastRect = function() {
            var nextSibling = this.contentRect_;
            return this.broadcastWidth = nextSibling.width, this.broadcastHeight = nextSibling.height, nextSibling
        }, component
    }(),
    Ug = function() {
        function component(nextSibling, parentNode) {
            var n = jg(parentNode);
            Zd(this, {
                target: nextSibling,
                contentRect: n
            })
        }
        return component
    }(),
    $g = function() {
        function component(nextSibling, parentNode, n) {
            if (this.activeObservations_ = [], this.observations_ = new Vd, typeof nextSibling != "function") throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = nextSibling, this.controller_ = parentNode, this.callbackCtx_ = n
        }
        return component.prototype.observe = function(nextSibling) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if (!(typeof Element > "u" || !(Element instanceof Object))) {
                if (!(nextSibling instanceof Mn(nextSibling).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var parentNode = this.observations_;
                parentNode.has(nextSibling) || (parentNode.set(nextSibling, new Hg(nextSibling)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, component.prototype.unobserve = function(nextSibling) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if (!(typeof Element > "u" || !(Element instanceof Object))) {
                if (!(nextSibling instanceof Mn(nextSibling).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var parentNode = this.observations_;
                parentNode.has(nextSibling) && (parentNode.delete(nextSibling), parentNode.size || this.controller_.removeObserver(this))
            }
        }, component.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, component.prototype.gatherActive = function() {
            var nextSibling = this;
            this.clearActive(), this.observations_.forEach(function(parentNode) {
                parentNode.isActive() && nextSibling.activeObservations_.push(parentNode)
            })
        }, component.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var nextSibling = this.callbackCtx_,
                    parentNode = this.activeObservations_.map(function(n) {
                        return new Ug(n.target, n.broadcastRect())
                    });
                this.callback_.call(nextSibling, parentNode, nextSibling), this.clearActive()
            }
        }, component.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, component.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }, component
    }(),
    qd = typeof WeakMap < "u" ? new WeakMap : new Vd,
    eh = function() {
        function component(nextSibling) {
            if (!(this instanceof component)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var parentNode = Ng.getInstance(),
                n = new $g(nextSibling, parentNode, this);
            qd.set(this, n)
        }
        return component
    }();
["observe", "unobserve", "disconnect"].forEach(function(component) {
    eh.prototype[component] = function() {
        var nextSibling;
        return (nextSibling = qd.get(this))[component].apply(nextSibling, arguments)
    }
});
var Wg = function() {
        return typeof Do.ResizeObserver < "u" ? Do.ResizeObserver : eh
    }(),
    dr = new Map;

function Gg(component) {
    component.forEach(function(nextSibling) {
        var parentNode, n = nextSibling.target;
        (parentNode = dr.get(n)) === null || parentNode === void 0 || parentNode.forEach(function(i) {
            return i(n)
        })
    })
}
var th = new Wg(Gg);

function Jg(component, nextSibling) {
    dr.has(component) || (dr.set(component, new Set), th.observe(component)), dr.get(component).add(nextSibling)
}

function Kg(component, nextSibling) {
    dr.has(component) && (dr.get(component).delete(nextSibling), dr.get(component).size || (th.unobserve(component), dr.delete(component)))
}
var Qg = function(component) {
        gc(parentNode, component);
        var nextSibling = listenInput(parentNode);

        function parentNode() {
            return Vr(this, parentNode), nextSibling.apply(this, arguments)
        }
        return Zr(parentNode, [{
            key: "render",
            value: function() {
                return this.props.children
            }
        }]), parentNode
    }(newInt),
    Ps = gt(null);

function Yg(component) {
    var nextSibling = component.children,
        parentNode = component.onBatchResize,
        n = q(0),
        i = q([]),
        o = Be(Ps),
        a = Qe(function(s, d, f) {
            n.current += 1;
            var c = n.current;
            i.current.push({
                size: s,
                element: d,
                data: f
            }), Promise.resolve().then(function() {
                c === n.current && (parentNode == null || parentNode(i.current), i.current = [])
            }), o == null || o(s, d, f)
        }, [parentNode, o]);
    return createElement(Ps.Provider, {
        value: a
    }, nextSibling)
}

function Vg(component, nextSibling) {
    var parentNode = component.children,
        n = component.disabled,
        i = q(null),
        o = q(null),
        a = Be(Ps),
        s = typeof parentNode == "function",
        d = s ? parentNode(i) : parentNode,
        f = q({
            width: -1,
            height: -1,
            offsetWidth: -1,
            offsetHeight: -1
        }),
        c = !s && Ci(d) && Ti(d),
        p = c ? d.ref : null,
        v = $component(function() {
            return oa(p, i)
        }, [p, i]),
        h = function() {
            return Os(i.current) || Os(o.current)
        };
    Kr(nextSibling, function() {
        return h()
    });
    var _ = q(component);
    _.current = component;
    var y = Qe(function(S) {
        var w = _.current,
            x = w.onResize,
            R = w.data,
            I = S.getBoundingClientRect(),
            E = I.width,
            N = I.height,
            C = S.offsetWidth,
            T = S.offsetHeight,
            D = Math.floor(E),
            F = Math.floor(N);
        if (f.current.width !== D || f.current.height !== F || f.current.offsetWidth !== C || f.current.offsetHeight !== T) {
            var B = {
                width: D,
                height: F,
                offsetWidth: C,
                offsetHeight: T
            };
            f.current = B;
            var k = C === Math.round(E) ? E : C,
                A = T === Math.round(N) ? N : T,
                M = K(K({}, B), {}, {
                    offsetWidth: k,
                    offsetHeight: A
                });
            a == null || a(M, S, R), x && Promise.resolve().then(function() {
                x(M, S)
            })
        }
    }, []);
    return be(function() {
        var S = h();
        return S && !n && Jg(S, y),
            function() {
                return Kg(S, y)
            }
    }, [i.current, n]), createElement(Qg, {
        ref: o
    }, c ? pr(d, {
        ref: v
    }) : d)
}
var Zg = Ke(Vg),
    Xg = "rc-observer-key";

function qg(component, nextSibling) {
    var parentNode = component.children,
        n = typeof parentNode == "function" ? [parentNode] : Ms(parentNode);
    return n.map(function(i, o) {
        var a = (i == null ? void 0 : i.key) || "".concat(Xg, "-").concat(o);
        return createElement(Zg, St({}, component, {
            key: a,
            ref: o === 0 ? nextSibling : void 0
        }), i)
    })
}
var Mc = Ke(qg);
Mc.Collection = Yg;

function Ds(component, nextSibling) {
    (nextSibling == null || nextSibling > component.length) && (nextSibling = component.length);
    for (var parentNode = 0, n = new Array(nextSibling); parentNode < nextSibling; parentNode++) n[parentNode] = component[parentNode];
    return n
}

function em(component) {
    if (Array.isArray(component)) return Ds(component)
}

function tm(component) {
    if (typeof Symbol < "u" && component[Symbol.iterator] != null || component["@@iterator"] != null) return Array.from(component)
}

function rh(component, nextSibling) {
    if (component) {
        if (typeof component == "string") return Ds(component, nextSibling);
        var parentNode = Object.prototype.toString.call(component).slice(8, -1);
        if (parentNode === "Object" && component.constructor && (parentNode = component.constructor.name), parentNode === "Map" || parentNode === "Set") return Array.from(component);
        if (parentNode === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(parentNode)) return Ds(component, nextSibling)
    }
}

function rm() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Dt(component) {
    return em(component) || tm(component) || rh(component) || rm()
}
var nh = function(nextSibling) {
        return +setTimeout(nextSibling, 16)
    },
    ih = function(nextSibling) {
        return clearTimeout(nextSibling)
    };
typeof window < "u" && "requestAnimationFrame" in window && (nh = function(nextSibling) {
    return window.requestAnimationFrame(nextSibling)
}, ih = function(nextSibling) {
    return window.cancelAnimationFrame(nextSibling)
});
var du = 0,
    Ic = new Map;

function oh(component) {
    Ic.delete(component)
}
var Ur = function(nextSibling) {
    var parentNode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    du += 1;
    var n = du;

    function i(o) {
        if (o === 0) oh(n), nextSibling();
        else {
            var a = nh(function() {
                i(o - 1)
            });
            Ic.set(n, a)
        }
    }
    return i(parentNode), n
};
Ur.cancel = function(component) {
    var nextSibling = Ic.get(component);
    return oh(nextSibling), ih(nextSibling)
};

function Oc(component) {
    for (var nextSibling = 0, parentNode, n = 0, i = component.length; i >= 4; ++n, i -= 4) parentNode = component.charCodeAt(n) & 255 | (component.charCodeAt(++n) & 255) << 8 | (component.charCodeAt(++n) & 255) << 16 | (component.charCodeAt(++n) & 255) << 24, parentNode = (parentNode & 65535) * 1540483477 + ((parentNode >>> 16) * 59797 << 16), parentNode ^= parentNode >>> 24, nextSibling = (parentNode & 65535) * 1540483477 + ((parentNode >>> 16) * 59797 << 16) ^ (nextSibling & 65535) * 1540483477 + ((nextSibling >>> 16) * 59797 << 16);
    switch (i) {
        case 3:
            nextSibling ^= (component.charCodeAt(n + 2) & 255) << 16;
        case 2:
            nextSibling ^= (component.charCodeAt(n + 1) & 255) << 8;
        case 1:
            nextSibling ^= component.charCodeAt(n) & 255, nextSibling = (nextSibling & 65535) * 1540483477 + ((nextSibling >>> 16) * 59797 << 16)
    }
    return nextSibling ^= nextSibling >>> 13, nextSibling = (nextSibling & 65535) * 1540483477 + ((nextSibling >>> 16) * 59797 << 16), ((nextSibling ^ nextSibling >>> 15) >>> 0).toString(36)
}

function nm(component, nextSibling) {
    if (component == null) return {};
    var parentNode = {},
        n = Object.keys(component),
        i, o;
    for (o = 0; o < n.length; o++) i = n[o], !(nextSibling.indexOf(i) >= 0) && (parentNode[i] = component[i]);
    return parentNode
}

function $parentNode(component, nextSibling) {
    if (component == null) return {};
    var parentNode = nm(component, nextSibling),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(component);
        for (i = 0; i < o.length; i++) n = o[i], !(nextSibling.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(component, n) && (parentNode[n] = component[n])
    }
    return parentNode
}
var im = function() {
        function component(nextSibling) {
            Vr(this, component), fe(this, "instanceId", void 0), fe(this, "cache", new Map), this.instanceId = nextSibling
        }
        return Zr(component, [{
            key: "get",
            value: function(parentNode) {
                return this.cache.get(parentNode.join("%")) || null
            }
        }, {
            key: "update",
            value: function(parentNode, n) {
                var i = parentNode.join("%"),
                    o = this.cache.get(i),
                    a = n(o);
                a === null ? this.cache.delete(i) : this.cache.set(i, a)
            }
        }]), component
    }(),
    Fs = "data-token-hash",
    En = "data-css-hash",
    mn = "__cssinjs_instance__";

function om() {
    var component = Math.random().toString(12).slice(2);
    if (typeof document < "u" && document.head && document.body) {
        var nextSibling = document.body.querySelectorAll("style[".concat(En, "]")) || [],
            parentNode = document.head.firstChild;
        Array.from(nextSibling).forEach(function(i) {
            i[mn] = i[mn] || component, i[mn] === component && document.head.insertBefore(i, parentNode)
        });
        var n = {};
        Array.from(document.querySelectorAll("style[".concat(En, "]"))).forEach(function(i) {
            var o = i.getAttribute(En);
            if (n[o]) {
                if (i[mn] === component) {
                    var a;
                    (a = i.parentNode) === null || a === void 0 || a.removeChild(i)
                }
            } else n[o] = !0
        })
    }
    return new im(component)
}
var Rc = gt({
    hashPriority: "low",
    cache: om(),
    defaultCache: !0
});

function Et() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}

function am(component, nextSibling) {
    if (!component) return !1;
    if (component.contains) return component.contains(nextSibling);
    for (var parentNode = nextSibling; parentNode;) {
        if (parentNode === component) return !0;
        parentNode = parentNode.parentNode
    }
    return !1
}
var hu = "data-rc-order",
    sm = "rc-util-key",
    Bs = new Map;

function ah() {
    var component = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        nextSibling = component.mark;
    return nextSibling ? nextSibling.startsWith("data-") ? nextSibling : "data-".concat(nextSibling) : sm
}

function ca(component) {
    if (component.attachTo) return component.attachTo;
    var nextSibling = document.querySelector("head");
    return nextSibling || document.body
}

function cm(component) {
    return component === "queue" ? "prependQueue" : component ? "prepend" : "append"
}

function sh(component) {
    return Array.from((Bs.get(component) || component).children).filter(function(nextSibling) {
        return nextSibling.tagName === "STYLE"
    })
}

function ch(component) {
    var nextSibling = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Et()) return null;
    var parentNode = nextSibling.csp,
        n = nextSibling.prepend,
        i = document.createElement("style");
    i.setAttribute(hu, cm(n)), parentNode != null && parentNode.nonce && (i.nonce = parentNode == null ? void 0 : parentNode.nonce), i.innerHTML = component;
    var o = ca(nextSibling),
        a = o.firstChild;
    if (n) {
        if (n === "queue") {
            var s = sh(o).filter(function(d) {
                return ["prepend", "prependQueue"].includes(d.getAttribute(hu))
            });
            if (s.length) return o.insertBefore(i, s[s.length - 1].nextSibling), i
        }
        o.insertBefore(i, a)
    } else o.appendChild(i);
    return i
}

function lh(component) {
    var nextSibling = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        parentNode = ca(nextSibling);
    return sh(parentNode).find(function(n) {
        return n.getAttribute(ah(nextSibling)) === component
    })
}

function Bo(component) {
    var nextSibling = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        parentNode = lh(component, nextSibling);
    if (parentNode) {
        var n = ca(nextSibling);
        n.removeChild(parentNode)
    }
}

function lm(component, nextSibling) {
    var parentNode = Bs.get(component);
    if (!parentNode || !am(document, parentNode)) {
        var n = ch("", nextSibling),
            i = n.parentNode;
        Bs.set(component, i), component.removeChild(n)
    }
}

function pi(component, nextSibling) {
    var parentNode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        n = ca(parentNode);
    lm(n, parentNode);
    var i = lh(nextSibling, parentNode);
    if (i) {
        var o, a;
        if ((o = parentNode.csp) !== null && o !== void 0 && o.nonce && i.nonce !== ((a = parentNode.csp) === null || a === void 0 ? void 0 : a.nonce)) {
            var s;
            i.nonce = (s = parentNode.csp) === null || s === void 0 ? void 0 : s.nonce
        }
        return i.innerHTML !== component && (i.innerHTML = component), i
    }
    var d = ch(component, parentNode);
    return d.setAttribute(ah(parentNode), nextSibling), d
}

function zo(component) {
    var nextSibling = "";
    return Object.keys(component).forEach(function(parentNode) {
        var n = component[parentNode];
        nextSibling += parentNode, n && ze(n) === "object" ? nextSibling += zo(n) : nextSibling += n
    }), nextSibling
}

function um(component, nextSibling) {
    return Oc("".concat(nextSibling, "_").concat(zo(component)))
}
var si = "layer-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""),
    uh = "903px";

function fm(component, nextSibling) {
    if (Et()) {
        var parentNode;
        pi(component, si);
        var n = document.createElement("div");
        n.style.position = "fixed", n.style.left = "0", n.style.top = "0", nextSibling == null || nextSibling(n), document.body.appendChild(n);
        var i = getComputedStyle(n).width === uh;
        return (parentNode = n.parentNode) === null || parentNode === void 0 || parentNode.removeChild(n), Bo(si), i
    }
    return !1
}
var Qa = void 0;

function dm() {
    return Qa === void 0 && (Qa = fm("@layer ".concat(si, " { .").concat(si, " { width: ").concat(uh, "!important; } }"), function(component) {
        component.className = si
    })), Qa
}

function hm(component) {
    if (Array.isArray(component)) return component
}

function vm(component, nextSibling) {
    var parentNode = component == null ? null : typeof Symbol < "u" && component[Symbol.iterator] || component["@@iterator"];
    if (parentNode != null) {
        var n, i, o, a, s = [],
            d = !0,
            f = !1;
        try {
            if (o = (parentNode = parentNode.call(component)).next, nextSibling === 0) {
                if (Object(parentNode) !== parentNode) return;
                d = !1
            } else
                for (; !(d = (n = o.call(parentNode)).done) && (s.push(n.value), s.length !== nextSibling); d = !0);
        } catch (c) {
            f = !0, i = c
        } finally {
            try {
                if (!d && parentNode.return != null && (a = parentNode.return(), Object(a) !== a)) return
            } finally {
                if (f) throw i
            }
        }
        return s
    }
}

function pm() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function X(component, nextSibling) {
    return hm(component) || vm(component, nextSibling) || rh(component, nextSibling) || pm()
}

function fh(component, nextSibling, parentNode, n) {
    var i = Be(Rc),
        o = i.cache,
        a = [component].concat(Dt(nextSibling));
    return $component(function() {
        o.update(a, function(s) {
            var d = s || [],
                f = X(d, 2),
                c = f[0],
                p = c === void 0 ? 0 : c,
                v = f[1],
                h = v,
                _ = h || parentNode();
            return [p + 1, _]
        })
    }, [a.join("_")]), be(function() {
        return function() {
            o.update(a, function(s) {
                var d = s || [],
                    f = X(d, 2),
                    c = f[0],
                    p = c === void 0 ? 0 : c,
                    v = f[1],
                    h = p - 1;
                return h === 0 ? (n == null || n(v, !1), null) : [p - 1, v]
            })
        }
    }, a), o.get(a)[1]
}
var gm = {},
    mm = "css",
    Or = new Map;

function _m(component) {
    Or.set(component, (Or.get(component) || 0) + 1)
}

function bm(component, nextSibling) {
    if (typeof document < "u") {
        var parentNode = document.querySelectorAll("style[".concat(Fs, '="').concat(component, '"]'));
        parentNode.forEach(function(n) {
            if (n[mn] === nextSibling) {
                var i;
                (i = n.parentNode) === null || i === void 0 || i.removeChild(n)
            }
        })
    }
}

function ym(component, nextSibling) {
    Or.set(component, (Or.get(component) || 0) - 1);
    var parentNode = Array.from(Or.keys()),
        n = parentNode.filter(function(i) {
            var o = Or.get(i) || 0;
            return o <= 0
        });
    n.length < parentNode.length && n.forEach(function(i) {
        bm(i, nextSibling), Or.delete(i)
    })
}

function wm(component, nextSibling) {
    var parentNode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        n = Be(Rc),
        i = n.cache.instanceId,
        o = parentNode.salt,
        a = o === void 0 ? "" : o,
        s = parentNode.override,
        d = s === void 0 ? gm : s,
        f = parentNode.formatToken,
        c = $component(function() {
            return Object.assign.apply(Object, [{}].concat(Dt(nextSibling)))
        }, [nextSibling]),
        p = $component(function() {
            return zo(c)
        }, [c]),
        v = $component(function() {
            return zo(d)
        }, [d]),
        h = fh("token", [a, component.id, p, v], function() {
            var _ = component.getDerivativeToken(c),
                y = K(K({}, _), d);
            f && (y = f(y));
            var S = um(y, a);
            y._tokenKey = S, _m(S);
            var w = "".concat(mm, "-").concat(Oc(S));
            return y._hashId = w, [y, w]
        }, function(_) {
            ym(_[0]._tokenKey, i)
        });
    return h
}
var xm = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
    },
    dh = "comm",
    hh = "rule",
    vh = "decl",
    Sm = "@import",
    Em = "@keyframes",
    Am = "@layer",
    Cm = Math.abs,
    Nc = String.fromCharCode;

function ph(component) {
    return component.trim()
}

function xo(component, nextSibling, parentNode) {
    return component.replace(nextSibling, parentNode)
}

function Tm(component, nextSibling) {
    return component.indexOf(nextSibling)
}

function gi(component, nextSibling) {
    return component.charCodeAt(nextSibling) | 0
}

function mi(component, nextSibling, parentNode) {
    return component.slice(nextSibling, parentNode)
}

function cr(component) {
    return component.length
}

function gh(component) {
    return component.length
}

function to(component, nextSibling) {
    return nextSibling.push(component), component
}
var la = 1,
    In = 1,
    mh = 0,
    pt = 0,
    Oe = 0,
    Pn = "";

function Lc(component, nextSibling, parentNode, n, i, o, a) {
    return {
        value: component,
        root: nextSibling,
        parent: parentNode,
        type: n,
        props: i,
        children: o,
        line: la,
        column: In,
        length: a,
        return: ""
    }
}

function km() {
    return Oe
}

function Mm() {
    return Oe = pt > 0 ? gi(Pn, --pt) : 0, In--, Oe === 10 && (In = 1, la--), Oe
}

function xt() {
    return Oe = pt < mh ? gi(Pn, pt++) : 0, In++, Oe === 10 && (In = 1, la++), Oe
}

function Dr() {
    return gi(Pn, pt)
}

function So() {
    return pt
}

function ua(component, nextSibling) {
    return mi(Pn, component, nextSibling)
}

function zs(component) {
    switch (component) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1
    }
    return 0
}

function Im(component) {
    return la = In = 1, mh = cr(Pn = component), pt = 0, []
}

function Om(component) {
    return Pn = "", component
}

function Ya(component) {
    return ph(ua(pt - 1, js(component === 91 ? component + 2 : component === 40 ? component + 1 : component)))
}

function Rm(component) {
    for (;
        (Oe = Dr()) && Oe < 33;) xt();
    return zs(component) > 2 || zs(Oe) > 3 ? "" : " "
}

function Nm(component, nextSibling) {
    for (; --nextSibling && xt() && !(Oe < 48 || Oe > 102 || Oe > 57 && Oe < 65 || Oe > 70 && Oe < 97););
    return ua(component, So() + (nextSibling < 6 && Dr() == 32 && xt() == 32))
}

function js(component) {
    for (; xt();) switch (Oe) {
        case component:
            return pt;
        case 34:
        case 39:
            component !== 34 && component !== 39 && js(Oe);
            break;
        case 40:
            component === 41 && js(component);
            break;
        case 92:
            xt();
            break
    }
    return pt
}

function Lm(component, nextSibling) {
    for (; xt() && component + Oe !== 47 + 10;)
        if (component + Oe === 42 + 42 && Dr() === 47) break;
    return "/*" + ua(nextSibling, pt - 1) + "*" + Nc(component === 47 ? component : xt())
}

function Pm(component) {
    for (; !zs(Dr());) xt();
    return ua(component, pt)
}

function Dm(component) {
    return Om(Eo("", null, null, null, [""], component = Im(component), 0, [0], component))
}

function Eo(component, nextSibling, parentNode, n, i, o, a, s, d) {
    for (var f = 0, c = 0, p = a, v = 0, h = 0, _ = 0, y = 1, S = 1, w = 1, x = 0, R = "", I = i, E = o, N = n, C = R; S;) switch (_ = x, x = xt()) {
        case 40:
            if (_ != 108 && gi(C, p - 1) == 58) {
                Tm(C += xo(Ya(x), "&", "&\f"), "&\f") != -1 && (w = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            C += Ya(x);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            C += Rm(_);
            break;
        case 92:
            C += Nm(So() - 1, 7);
            continue;
        case 47:
            switch (Dr()) {
                case 42:
                case 47:
                    to(Fm(Lm(xt(), So()), nextSibling, parentNode), d);
                    break;
                default:
                    C += "/"
            }
            break;
        case 123 * y:
            s[f++] = cr(C) * w;
        case 125 * y:
        case 59:
        case 0:
            switch (x) {
                case 0:
                case 125:
                    S = 0;
                case 59 + c:
                    w == -1 && (C = xo(C, /\f/g, "")), h > 0 && cr(C) - p && to(h > 32 ? pu(C + ";", n, parentNode, p - 1) : pu(xo(C, " ", "") + ";", n, parentNode, p - 2), d);
                    break;
                case 59:
                    C += ";";
                default:
                    if (to(N = vu(C, nextSibling, parentNode, f, c, i, s, R, I = [], E = [], p), o), x === 123)
                        if (c === 0) Eo(C, nextSibling, N, N, I, o, p, s, E);
                        else switch (v === 99 && gi(C, 3) === 110 ? 100 : v) {
                            case 100:
                            case 108:
                            case 109:
                            case 115:
                                Eo(component, N, N, n && to(vu(component, N, N, 0, 0, i, s, R, i, I = [], p), E), i, E, p, s, n ? I : E);
                                break;
                            default:
                                Eo(C, N, N, N, [""], E, 0, s, E)
                        }
            }
            f = c = h = 0, y = w = 1, R = C = "", p = a;
            break;
        case 58:
            p = 1 + cr(C), h = _;
        default:
            if (y < 1) {
                if (x == 123) --y;
                else if (x == 125 && y++ == 0 && Mm() == 125) continue
            }
            switch (C += Nc(x), x * y) {
                case 38:
                    w = c > 0 ? 1 : (C += "\f", -1);
                    break;
                case 44:
                    s[f++] = (cr(C) - 1) * w, w = 1;
                    break;
                case 64:
                    Dr() === 45 && (C += Ya(xt())), v = Dr(), c = p = cr(R = C += Pm(So())), x++;
                    break;
                case 45:
                    _ === 45 && cr(C) == 2 && (y = 0)
            }
    }
    return o
}

function vu(component, nextSibling, parentNode, n, i, o, a, s, d, f, c) {
    for (var p = i - 1, v = i === 0 ? o : [""], h = gh(v), _ = 0, y = 0, S = 0; _ < n; ++_)
        for (var w = 0, x = mi(component, p + 1, p = Cm(y = a[_])), R = component; w < h; ++w)(R = ph(y > 0 ? v[w] + " " + x : xo(x, /&\f/g, v[w]))) && (d[S++] = R);
    return Lc(component, nextSibling, parentNode, i === 0 ? hh : s, d, f, c)
}

function Fm(component, nextSibling, parentNode) {
    return Lc(component, nextSibling, parentNode, dh, Nc(km()), mi(component, 2, -2), 0)
}

function pu(component, nextSibling, parentNode, n) {
    return Lc(component, nextSibling, parentNode, vh, mi(component, 0, n), mi(component, n + 1, -1), n)
}

function Hs(component, nextSibling) {
    for (var parentNode = "", n = gh(component), i = 0; i < n; i++) parentNode += nextSibling(component[i], i, component, nextSibling) || "";
    return parentNode
}

function Bm(component, nextSibling, parentNode, n) {
    switch (component.type) {
        case Am:
            if (component.children.length) break;
        case Sm:
        case vh:
            return component.return = component.return || component.value;
        case dh:
            return "";
        case Em:
            return component.return = component.value + "{" + Hs(component.children, n) + "}";
        case hh:
            component.value = component.props.join(",")
    }
    return cr(parentNode = Hs(component.children, n)) ? component.return = component.value + "{" + parentNode + "}" : ""
}
var gu = Et(),
    zm = "_skip_check_",
    _h = "_multi_value_";

function mu(component) {
    var nextSibling = Hs(Dm(component), Bm);
    return nextSibling.replace(/\{%%%\:[^;];}/g, ";")
}

function jm(component) {
    return ze(component) === "object" && component && (zm in component || _h in component)
}

function Hm(component, nextSibling, parentNode) {
    if (!nextSibling) return component;
    var n = ".".concat(nextSibling),
        i = parentNode === "low" ? ":where(".concat(n, ")") : n,
        o = component.split(",").map(function(a) {
            var s, d = a.trim().split(/\s+/),
                f = d[0] || "",
                c = ((s = f.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
            return f = "".concat(c).concat(i).concat(f.slice(c.length)), [f].concat(Dt(d.slice(1))).join(" ")
        });
    return o.join(",")
}
var Um = function component(nextSibling) {
    var parentNode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
            root: !0,
            parentSelectors: []
        },
        i = n.root,
        o = n.injectHash,
        a = n.parentSelectors,
        s = parentNode.hashId,
        d = parentNode.layer;
    parentNode.path;
    var f = parentNode.hashPriority,
        c = parentNode.transformers,
        p = c === void 0 ? [] : c;
    parentNode.linters;
    var v = "",
        h = {};

    function _(R) {
        var I = R.getName(s);
        if (!h[I]) {
            var E = component(R.style, parentNode, {
                    root: !1,
                    parentSelectors: a
                }),
                N = X(E, 1),
                C = N[0];
            h[I] = "@keyframes ".concat(R.getName(s)).concat(C)
        }
    }

    function y(R) {
        var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return R.forEach(function(E) {
            Array.isArray(E) ? y(E, I) : E && I.push(E)
        }), I
    }
    var S = y(Array.isArray(nextSibling) ? nextSibling : [nextSibling]);
    if (S.forEach(function(R) {
            var I = typeof R == "string" && !i ? {} : R;
            if (typeof I == "string") v += "".concat(I, `
`);
            else if (I._keyframe) _(I);
            else {
                var E = p.reduce(function(N, C) {
                    var T;
                    return (C == null || (T = C.visit) === null || T === void 0 ? void 0 : T.call(C, N)) || N
                }, I);
                Object.keys(E).forEach(function(N) {
                    var C = E[N];
                    if (ze(C) === "object" && C && (N !== "animationName" || !C._keyframe) && !jm(C)) {
                        var T = !1,
                            D = N.trim(),
                            F = !1;
                        (i || o) && s ? D.startsWith("@") ? T = !0 : D = Hm(N, s, f) : i && !s && (D === "&" || D === "") && (D = "", F = !0);
                        var B = component(C, parentNode, {
                                root: F,
                                injectHash: T,
                                parentSelectors: [].concat(Dt(a), [D])
                            }),
                            k = X(B, 2),
                            A = k[0],
                            M = k[1];
                        h = K(K({}, h), M), v += "".concat(D).concat(A)
                    } else {
                        let G = function(ne, ee) {
                            var Q = ne.replace(/[A-Z]/g, function(ve) {
                                    return "-".concat(ve.toLowerCase())
                                }),
                                Z = ee;
                            !xm[ne] && typeof Z == "number" && Z !== 0 && (Z = "".concat(Z, "px")), ne === "animationName" && ee !== null && ee !== void 0 && ee._keyframe && (_(ee), Z = ee.getName(s)), v += "".concat(Q, ":").concat(Z, ";")
                        };
                        var H = G,
                            P, j = (P = C == null ? void 0 : C.value) !== null && P !== void 0 ? P : C;
                        ze(C) === "object" && C !== null && C !== void 0 && C[_h] && Array.isArray(j) ? j.forEach(function(ne) {
                            G(N, ne)
                        }) : G(N, j)
                    }
                })
            }
        }), !i) v = "{".concat(v, "}");
    else if (d && dm()) {
        var w = d.split(","),
            x = w[w.length - 1].trim();
        v = "@layer ".concat(x, " {").concat(v, "}"), w.length > 1 && (v = "@layer ".concat(d, "{%%%:%}").concat(v))
    }
    return [v, h]
};

function $m(component, nextSibling) {
    return Oc("".concat(component.join("%")).concat(nextSibling))
}

function Wm() {
    return null
}

function _u(component, nextSibling) {
    var parentNode = component.token,
        n = component.path,
        i = component.hashId,
        o = component.layer,
        a = component.nonce,
        s = Be(Rc),
        d = s.autoClear;
    s.mock;
    var f = s.defaultCache,
        c = s.hashPriority,
        p = s.container,
        v = s.ssrInline,
        h = s.transformers,
        _ = s.linters,
        y = s.cache,
        S = parentNode._tokenKey,
        w = [S].concat(Dt(n)),
        x = gu,
        R = fh("style", w, function() {
            var T = nextSibling(),
                D = Um(T, {
                    hashId: i,
                    hashPriority: c,
                    layer: o,
                    path: n.join("-"),
                    transformers: h,
                    linters: _
                }),
                F = X(D, 2),
                B = F[0],
                k = F[1],
                A = mu(B),
                M = $m(w, A);
            if (x) {
                var P = {
                        mark: En,
                        prepend: "queue",
                        attachTo: p
                    },
                    j = typeof a == "function" ? a() : a;
                j && (P.csp = {
                    nonce: j
                });
                var H = pi(A, M, P);
                H[mn] = y.instanceId, H.setAttribute(Fs, S), Object.keys(k).forEach(function(G) {
                    pi(mu(k[G]), "_effect-".concat(G), P)
                })
            }
            return [A, S, M]
        }, function(T, D) {
            var F = X(T, 3),
                B = F[2];
            (D || d) && gu && Bo(B, {
                mark: En
            })
        }),
        I = X(R, 3),
        E = I[0],
        N = I[1],
        C = I[2];
    return function(T) {
        var D;
        if (!v || x || !f) D = createElement(Wm, null);
        else {
            var F;
            D = createElement("style", St({}, (F = {}, fe(F, Fs, N), fe(F, En, C), F), {
                dangerouslySetInnerHTML: {
                    __html: E
                }
            }))
        }
        return createElement(subDOM, null, D, T)
    }
}
var mt = function() {
    function component(nextSibling, parentNode) {
        Vr(this, component), fe(this, "name", void 0), fe(this, "style", void 0), fe(this, "_keyframe", !0), this.name = nextSibling, this.style = parentNode
    }
    return Zr(component, [{
        key: "getName",
        value: function() {
            var parentNode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
            return parentNode ? "".concat(parentNode, "-").concat(this.name) : this.name
        }
    }]), component
}();

function Gm(component, nextSibling) {
    if (component.length !== nextSibling.length) return !1;
    for (var parentNode = 0; parentNode < component.length; parentNode++)
        if (component[parentNode] !== nextSibling[parentNode]) return !1;
    return !0
}
var Pc = function() {
    function component() {
        Vr(this, component), fe(this, "cache", void 0), fe(this, "keys", void 0), fe(this, "cacheCallTimes", void 0), this.cache = new Map, this.keys = [], this.cacheCallTimes = 0
    }
    return Zr(component, [{
        key: "size",
        value: function() {
            return this.keys.length
        }
    }, {
        key: "internalGet",
        value: function(parentNode) {
            var n, i, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                a = {
                    map: this.cache
                };
            return parentNode.forEach(function(s) {
                if (!a) a = void 0;
                else {
                    var d, f;
                    a = (d = a) === null || d === void 0 || (f = d.map) === null || f === void 0 ? void 0 : f.get(s)
                }
            }), (n = a) !== null && n !== void 0 && n.value && o && (a.value[1] = this.cacheCallTimes++), (i = a) === null || i === void 0 ? void 0 : i.value
        }
    }, {
        key: "get",
        value: function(parentNode) {
            var n;
            return (n = this.internalGet(parentNode, !0)) === null || n === void 0 ? void 0 : n[0]
        }
    }, {
        key: "has",
        value: function(parentNode) {
            return !!this.internalGet(parentNode)
        }
    }, {
        key: "set",
        value: function(parentNode, n) {
            var i = this;
            if (!this.has(parentNode)) {
                if (this.size() + 1 > component.MAX_CACHE_SIZE + component.MAX_CACHE_OFFSET) {
                    var o = this.keys.reduce(function(f, c) {
                            var p = X(f, 2),
                                v = p[1];
                            return i.internalGet(c)[1] < v ? [c, i.internalGet(c)[1]] : f
                        }, [this.keys[0], this.cacheCallTimes]),
                        a = X(o, 1),
                        s = a[0];
                    this.delete(s)
                }
                this.keys.push(parentNode)
            }
            var d = this.cache;
            parentNode.forEach(function(f, c) {
                if (c === parentNode.length - 1) d.set(f, {
                    value: [n, i.cacheCallTimes++]
                });
                else {
                    var p = d.get(f);
                    p ? p.map || (p.map = new Map) : d.set(f, {
                        map: new Map
                    }), d = d.get(f).map
                }
            })
        }
    }, {
        key: "deleteByPath",
        value: function(parentNode, n) {
            var i = parentNode.get(n[0]);
            if (n.length === 1) {
                var o;
                return i.map ? parentNode.set(n[0], {
                    map: i.map
                }) : parentNode.delete(n[0]), (o = i.value) === null || o === void 0 ? void 0 : o[0]
            }
            var a = this.deleteByPath(i.map, n.slice(1));
            return (!i.map || i.map.size === 0) && !i.value && parentNode.delete(n[0]), a
        }
    }, {
        key: "delete",
        value: function(parentNode) {
            if (this.has(parentNode)) return this.keys = this.keys.filter(function(n) {
                return !Gm(n, parentNode)
            }), this.deleteByPath(this.cache, parentNode)
        }
    }]), component
}();
fe(Pc, "MAX_CACHE_SIZE", 20);
fe(Pc, "MAX_CACHE_OFFSET", 5);
var bu = 0,
    Jm = function() {
        function component(nextSibling) {
            Vr(this, component), fe(this, "derivatives", void 0), fe(this, "id", void 0), this.derivatives = Array.isArray(nextSibling) ? nextSibling : [nextSibling], this.id = bu, nextSibling.length === 0 && (nextSibling.length > 0, void 0), bu += 1
        }
        return Zr(component, [{
            key: "getDerivativeToken",
            value: function(parentNode) {
                return this.derivatives.reduce(function(n, i) {
                    return i(parentNode, n)
                }, void 0)
            }
        }]), component
    }(),
    Va = new Pc;

function Km(component) {
    var nextSibling = Array.isArray(component) ? component : [component];
    return Va.has(nextSibling) || Va.set(nextSibling, new Jm(nextSibling)), Va.get(nextSibling)
}

function sn(component) {
    return component.notSplit = !0, component
}
sn(["borderTop", "borderBottom"]), sn(["borderTop"]), sn(["borderBottom"]), sn(["borderLeft", "borderRight"]), sn(["borderLeft"]), sn(["borderRight"]);
var Qm = gt({});
const bh = Qm;

function _i() {
    _i = function() {
        return component
    };
    var component = {},
        nextSibling = Object.prototype,
        parentNode = nextSibling.hasOwnProperty,
        n = Object.defineProperty || function(k, A, M) {
            k[A] = M.value
        },
        i = typeof Symbol == "function" ? Symbol : {},
        o = i.iterator || "@@iterator",
        a = i.asyncIterator || "@@asyncIterator",
        s = i.toStringTag || "@@toStringTag";

    function d(k, A, M) {
        return Object.defineProperty(k, A, {
            value: M,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), k[A]
    }
    try {
        d({}, "")
    } catch {
        d = function(M, P, j) {
            return M[P] = j
        }
    }

    function f(k, A, M, P) {
        var j = A && A.prototype instanceof v ? A : v,
            H = Object.create(j.prototype),
            G = new D(P || []);
        return n(H, "_invoke", {
            value: E(k, M, G)
        }), H
    }

    function c(k, A, M) {
        try {
            return {
                type: "normal",
                arg: k.call(A, M)
            }
        } catch (P) {
            return {
                type: "throw",
                arg: P
            }
        }
    }
    component.wrap = f;
    var p = {};

    function v() {}

    function h() {}

    function _() {}
    var y = {};
    d(y, o, function() {
        return this
    });
    var S = Object.getPrototypeOf,
        w = S && S(S(F([])));
    w && w !== nextSibling && parentNode.call(w, o) && (y = w);
    var x = _.prototype = v.prototype = Object.create(y);

    function R(k) {
        ["next", "throw", "return"].forEach(function(A) {
            d(k, A, function(M) {
                return this._invoke(A, M)
            })
        })
    }

    function I(k, A) {
        function M(j, H, G, ne) {
            var ee = c(k[j], k, H);
            if (ee.type !== "throw") {
                var Q = ee.arg,
                    Z = Q.value;
                return Z && ze(Z) == "object" && parentNode.call(Z, "__await") ? A.resolve(Z.__await).then(function(ve) {
                    M("next", ve, G, ne)
                }, function(ve) {
                    M("throw", ve, G, ne)
                }) : A.resolve(Z).then(function(ve) {
                    Q.value = ve, G(Q)
                }, function(ve) {
                    return M("throw", ve, G, ne)
                })
            }
            ne(ee.arg)
        }
        var P;
        n(this, "_invoke", {
            value: function(H, G) {
                function ne() {
                    return new A(function(ee, Q) {
                        M(H, G, ee, Q)
                    })
                }
                return P = P ? P.then(ne, ne) : ne()
            }
        })
    }

    function E(k, A, M) {
        var P = "suspendedStart";
        return function(j, H) {
            if (P === "executing") throw new Error("Generator is already running");
            if (P === "completed") {
                if (j === "throw") throw H;
                return B()
            }
            for (M.method = j, M.arg = H;;) {
                var G = M.delegate;
                if (G) {
                    var ne = N(G, M);
                    if (ne) {
                        if (ne === p) continue;
                        return ne
                    }
                }
                if (M.method === "next") M.sent = M._sent = M.arg;
                else if (M.method === "throw") {
                    if (P === "suspendedStart") throw P = "completed", M.arg;
                    M.dispatchException(M.arg)
                } else M.method === "return" && M.abrupt("return", M.arg);
                P = "executing";
                var ee = c(k, A, M);
                if (ee.type === "normal") {
                    if (P = M.done ? "completed" : "suspendedYield", ee.arg === p) continue;
                    return {
                        value: ee.arg,
                        done: M.done
                    }
                }
                ee.type === "throw" && (P = "completed", M.method = "throw", M.arg = ee.arg)
            }
        }
    }

    function N(k, A) {
        var M = A.method,
            P = k.iterator[M];
        if (P === void 0) return A.delegate = null, M === "throw" && k.iterator.return && (A.method = "return", A.arg = void 0, N(k, A), A.method === "throw") || M !== "return" && (A.method = "throw", A.arg = new TypeError("The iterator does not provide a '" + M + "' method")), p;
        var j = c(P, k.iterator, A.arg);
        if (j.type === "throw") return A.method = "throw", A.arg = j.arg, A.delegate = null, p;
        var H = j.arg;
        return H ? H.done ? (A[k.resultName] = H.value, A.next = k.nextLoc, A.method !== "return" && (A.method = "next", A.arg = void 0), A.delegate = null, p) : H : (A.method = "throw", A.arg = new TypeError("iterator result is not an object"), A.delegate = null, p)
    }

    function C(k) {
        var A = {
            tryLoc: k[0]
        };
        1 in k && (A.catchLoc = k[1]), 2 in k && (A.finallyLoc = k[2], A.afterLoc = k[3]), this.tryEntries.push(A)
    }

    function T(k) {
        var A = k.completion || {};
        A.type = "normal", delete A.arg, k.completion = A
    }

    function D(k) {
        this.tryEntries = [{
            tryLoc: "root"
        }], k.forEach(C, this), this.reset(!0)
    }

    function F(k) {
        if (k) {
            var A = k[o];
            if (A) return A.call(k);
            if (typeof k.next == "function") return k;
            if (!isNaN(k.length)) {
                var M = -1,
                    P = function j() {
                        for (; ++M < k.length;)
                            if (parentNode.call(k, M)) return j.value = k[M], j.done = !1, j;
                        return j.value = void 0, j.done = !0, j
                    };
                return P.next = P
            }
        }
        return {
            next: B
        }
    }

    function B() {
        return {
            value: void 0,
            done: !0
        }
    }
    return h.prototype = _, n(x, "constructor", {
        value: _,
        configurable: !0
    }), n(_, "constructor", {
        value: h,
        configurable: !0
    }), h.displayName = d(_, s, "GeneratorFunction"), component.isGeneratorFunction = function(k) {
        var A = typeof k == "function" && k.constructor;
        return !!A && (A === h || (A.displayName || A.name) === "GeneratorFunction")
    }, component.mark = function(k) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(k, _) : (k.__proto__ = _, d(k, s, "GeneratorFunction")), k.prototype = Object.create(x), k
    }, component.awrap = function(k) {
        return {
            __await: k
        }
    }, R(I.prototype), d(I.prototype, a, function() {
        return this
    }), component.AsyncIterator = I, component.async = function(k, A, M, P, j) {
        j === void 0 && (j = Promise);
        var H = new I(f(k, A, M, P), j);
        return component.isGeneratorFunction(A) ? H : H.next().then(function(G) {
            return G.done ? G.value : H.next()
        })
    }, R(x), d(x, s, "Generator"), d(x, o, function() {
        return this
    }), d(x, "toString", function() {
        return "[object Generator]"
    }), component.keys = function(k) {
        var A = Object(k),
            M = [];
        for (var P in A) M.push(P);
        return M.reverse(),
            function j() {
                for (; M.length;) {
                    var H = M.pop();
                    if (H in A) return j.value = H, j.done = !1, j
                }
                return j.done = !0, j
            }
    }, component.values = F, D.prototype = {
        constructor: D,
        reset: function(A) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !A)
                for (var M in this) M.charAt(0) === "nextSibling" && parentNode.call(this, M) && !isNaN(+M.slice(1)) && (this[M] = void 0)
        },
        stop: function() {
            this.done = !0;
            var A = this.tryEntries[0].completion;
            if (A.type === "throw") throw A.arg;
            return this.rval
        },
        dispatchException: function(A) {
            if (this.done) throw A;
            var M = this;

            function P(Q, Z) {
                return G.type = "throw", G.arg = A, M.next = Q, Z && (M.method = "next", M.arg = void 0), !!Z
            }
            for (var j = this.tryEntries.length - 1; j >= 0; --j) {
                var H = this.tryEntries[j],
                    G = H.completion;
                if (H.tryLoc === "root") return P("end");
                if (H.tryLoc <= this.prev) {
                    var ne = parentNode.call(H, "catchLoc"),
                        ee = parentNode.call(H, "finallyLoc");
                    if (ne && ee) {
                        if (this.prev < H.catchLoc) return P(H.catchLoc, !0);
                        if (this.prev < H.finallyLoc) return P(H.finallyLoc)
                    } else if (ne) {
                        if (this.prev < H.catchLoc) return P(H.catchLoc, !0)
                    } else {
                        if (!ee) throw new Error("try statement without catch or finally");
                        if (this.prev < H.finallyLoc) return P(H.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(A, M) {
            for (var P = this.tryEntries.length - 1; P >= 0; --P) {
                var j = this.tryEntries[P];
                if (j.tryLoc <= this.prev && parentNode.call(j, "finallyLoc") && this.prev < j.finallyLoc) {
                    var H = j;
                    break
                }
            }
            H && (A === "break" || A === "continue") && H.tryLoc <= M && M <= H.finallyLoc && (H = null);
            var G = H ? H.completion : {};
            return G.type = A, G.arg = M, H ? (this.method = "next", this.next = H.finallyLoc, p) : this.complete(G)
        },
        complete: function(A, M) {
            if (A.type === "throw") throw A.arg;
            return A.type === "break" || A.type === "continue" ? this.next = A.arg : A.type === "return" ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : A.type === "normal" && M && (this.next = M), p
        },
        finish: function(A) {
            for (var M = this.tryEntries.length - 1; M >= 0; --M) {
                var P = this.tryEntries[M];
                if (P.finallyLoc === A) return this.complete(P.completion, P.afterLoc), T(P), p
            }
        },
        catch: function(A) {
            for (var M = this.tryEntries.length - 1; M >= 0; --M) {
                var P = this.tryEntries[M];
                if (P.tryLoc === A) {
                    var j = P.completion;
                    if (j.type === "throw") {
                        var H = j.arg;
                        T(P)
                    }
                    return H
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(A, M, P) {
            return this.delegate = {
                iterator: F(A),
                resultName: M,
                nextLoc: P
            }, this.method === "next" && (this.arg = void 0), p
        }
    }, component
}

function yu(component, nextSibling, parentNode, n, i, o, a) {
    try {
        var s = component[o](a),
            d = s.value
    } catch (f) {
        parentNode(f);
        return
    }
    s.done ? nextSibling(d) : Promise.resolve(d).then(n, i)
}

function yh(component) {
    return function() {
        var nextSibling = this,
            parentNode = arguments;
        return new Promise(function(n, i) {
            var o = component.apply(nextSibling, parentNode);

            function a(d) {
                yu(o, n, i, a, s, "next", d)
            }

            function s(d) {
                yu(o, n, i, a, s, "throw", d)
            }
            a(void 0)
        })
    }
}
const Ym = "5.5.2",
    jo = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];

function We(component, nextSibling) {
    Vm(component) && (component = "100%");
    var parentNode = Zm(component);
    return component = nextSibling === 360 ? component : Math.min(nextSibling, Math.max(0, parseFloat(component))), parentNode && (component = parseInt(String(component * nextSibling), 10) / 100), Math.abs(component - nextSibling) < 1e-6 ? 1 : (nextSibling === 360 ? component = (component < 0 ? component % nextSibling + nextSibling : component % nextSibling) / parseFloat(String(nextSibling)) : component = component % nextSibling / parseFloat(String(nextSibling)), component)
}

function ro(component) {
    return Math.min(1, Math.max(0, component))
}

function Vm(component) {
    return typeof component == "string" && component.indexOf(".") !== -1 && parseFloat(component) === 1
}

function Zm(component) {
    return typeof component == "string" && component.indexOf("%") !== -1
}

function wh(component) {
    return component = parseFloat(component), (isNaN(component) || component < 0 || component > 1) && (component = 1), component
}

function no(component) {
    return component <= 1 ? "".concat(Number(component) * 100, "%") : component
}

function Pr(component) {
    return component.length === 1 ? "0" + component : String(component)
}

function Xm(component, nextSibling, parentNode) {
    return {
        parentNode: We(component, 255) * 255,
        g: We(nextSibling, 255) * 255,
        b: We(parentNode, 255) * 255
    }
}

function wu(component, nextSibling, parentNode) {
    component = We(component, 255), nextSibling = We(nextSibling, 255), parentNode = We(parentNode, 255);
    var n = Math.max(component, nextSibling, parentNode),
        i = Math.min(component, nextSibling, parentNode),
        o = 0,
        a = 0,
        s = (n + i) / 2;
    if (n === i) a = 0, o = 0;
    else {
        var d = n - i;
        switch (a = s > .5 ? d / (2 - n - i) : d / (n + i), n) {
            case component:
                o = (nextSibling - parentNode) / d + (nextSibling < parentNode ? 6 : 0);
                break;
            case nextSibling:
                o = (parentNode - component) / d + 2;
                break;
            case parentNode:
                o = (component - nextSibling) / d + 4;
                break
        }
        o /= 6
    }
    return {
        h: o,
        s: a,
        l: s
    }
}

function Za(component, nextSibling, parentNode) {
    return parentNode < 0 && (parentNode += 1), parentNode > 1 && (parentNode -= 1), parentNode < 1 / 6 ? component + (nextSibling - component) * (6 * parentNode) : parentNode < 1 / 2 ? nextSibling : parentNode < 2 / 3 ? component + (nextSibling - component) * (2 / 3 - parentNode) * 6 : component
}

function qm(component, nextSibling, parentNode) {
    var n, i, o;
    if (component = We(component, 360), nextSibling = We(nextSibling, 100), parentNode = We(parentNode, 100), nextSibling === 0) i = parentNode, o = parentNode, n = parentNode;
    else {
        var a = parentNode < .5 ? parentNode * (1 + nextSibling) : parentNode + nextSibling - parentNode * nextSibling,
            s = 2 * parentNode - a;
        n = Za(s, a, component + 1 / 3), i = Za(s, a, component), o = Za(s, a, component - 1 / 3)
    }
    return {
        parentNode: n * 255,
        g: i * 255,
        b: o * 255
    }
}

function Us(component, nextSibling, parentNode) {
    component = We(component, 255), nextSibling = We(nextSibling, 255), parentNode = We(parentNode, 255);
    var n = Math.max(component, nextSibling, parentNode),
        i = Math.min(component, nextSibling, parentNode),
        o = 0,
        a = n,
        s = n - i,
        d = n === 0 ? 0 : s / n;
    if (n === i) o = 0;
    else {
        switch (n) {
            case component:
                o = (nextSibling - parentNode) / s + (nextSibling < parentNode ? 6 : 0);
                break;
            case nextSibling:
                o = (parentNode - component) / s + 2;
                break;
            case parentNode:
                o = (component - nextSibling) / s + 4;
                break
        }
        o /= 6
    }
    return {
        h: o,
        s: d,
        v: a
    }
}

function e_(component, nextSibling, parentNode) {
    component = We(component, 360) * 6, nextSibling = We(nextSibling, 100), parentNode = We(parentNode, 100);
    var n = Math.floor(component),
        i = component - n,
        o = parentNode * (1 - nextSibling),
        a = parentNode * (1 - i * nextSibling),
        s = parentNode * (1 - (1 - i) * nextSibling),
        d = n % 6,
        f = [parentNode, a, o, o, s, parentNode][d],
        c = [s, parentNode, parentNode, a, o, o][d],
        p = [o, o, s, parentNode, parentNode, a][d];
    return {
        parentNode: f * 255,
        g: c * 255,
        b: p * 255
    }
}

function $s(component, nextSibling, parentNode, n) {
    var i = [Pr(Math.round(component).toString(16)), Pr(Math.round(nextSibling).toString(16)), Pr(Math.round(parentNode).toString(16))];
    return n && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
}

function t_(component, nextSibling, parentNode, n, i) {
    var o = [Pr(Math.round(component).toString(16)), Pr(Math.round(nextSibling).toString(16)), Pr(Math.round(parentNode).toString(16)), Pr(r_(n))];
    return i && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("")
}

function r_(component) {
    return Math.round(parseFloat(component) * 255).toString(16)
}

function xu(component) {
    return it(component) / 255
}

function it(component) {
    return parseInt(component, 16)
}

function n_(component) {
    return {
        parentNode: component >> 16,
        g: (component & 65280) >> 8,
        b: component & 255
    }
}
var Ws = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function vn(component) {
    var nextSibling = {
            parentNode: 0,
            g: 0,
            b: 0
        },
        parentNode = 1,
        n = null,
        i = null,
        o = null,
        a = !1,
        s = !1;
    return typeof component == "string" && (component = a_(component)), typeof component == "object" && (Ht(component.parentNode) && Ht(component.g) && Ht(component.b) ? (nextSibling = Xm(component.parentNode, component.g, component.b), a = !0, s = String(component.parentNode).substr(-1) === "%" ? "prgb" : "rgb") : Ht(component.h) && Ht(component.s) && Ht(component.v) ? (n = no(component.s), i = no(component.v), nextSibling = e_(component.h, n, i), a = !0, s = "hsv") : Ht(component.h) && Ht(component.s) && Ht(component.l) && (n = no(component.s), o = no(component.l), nextSibling = qm(component.h, n, o), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(component, "a") && (parentNode = component.a)), parentNode = wh(parentNode), {
        ok: a,
        format: component.format || s,
        parentNode: Math.min(255, Math.max(nextSibling.parentNode, 0)),
        g: Math.min(255, Math.max(nextSibling.g, 0)),
        b: Math.min(255, Math.max(nextSibling.b, 0)),
        a: parentNode
    }
}
var i_ = "[-\\+]?\\d+%?",
    o_ = "[-\\+]?\\d*\\.\\d+%?",
    hr = "(?:".concat(o_, ")|(?:").concat(i_, ")"),
    Xa = "[\\s|\\(]+(".concat(hr, ")[,|\\s]+(").concat(hr, ")[,|\\s]+(").concat(hr, ")\\s*\\)?"),
    qa = "[\\s|\\(]+(".concat(hr, ")[,|\\s]+(").concat(hr, ")[,|\\s]+(").concat(hr, ")[,|\\s]+(").concat(hr, ")\\s*\\)?"),
    bt = {
        CSS_UNIT: new RegExp(hr),
        rgb: new RegExp("rgb" + Xa),
        rgba: new RegExp("rgba" + qa),
        hsl: new RegExp("hsl" + Xa),
        hsla: new RegExp("hsla" + qa),
        hsv: new RegExp("hsv" + Xa),
        hsva: new RegExp("hsva" + qa),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };

function a_(component) {
    if (component = component.trim().toLowerCase(), component.length === 0) return !1;
    var nextSibling = !1;
    if (Ws[component]) component = Ws[component], nextSibling = !0;
    else if (component === "transparent") return {
        parentNode: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
    };
    var parentNode = bt.rgb.exec(component);
    return parentNode ? {
        parentNode: parentNode[1],
        g: parentNode[2],
        b: parentNode[3]
    } : (parentNode = bt.rgba.exec(component), parentNode ? {
        parentNode: parentNode[1],
        g: parentNode[2],
        b: parentNode[3],
        a: parentNode[4]
    } : (parentNode = bt.hsl.exec(component), parentNode ? {
        h: parentNode[1],
        s: parentNode[2],
        l: parentNode[3]
    } : (parentNode = bt.hsla.exec(component), parentNode ? {
        h: parentNode[1],
        s: parentNode[2],
        l: parentNode[3],
        a: parentNode[4]
    } : (parentNode = bt.hsv.exec(component), parentNode ? {
        h: parentNode[1],
        s: parentNode[2],
        v: parentNode[3]
    } : (parentNode = bt.hsva.exec(component), parentNode ? {
        h: parentNode[1],
        s: parentNode[2],
        v: parentNode[3],
        a: parentNode[4]
    } : (parentNode = bt.hex8.exec(component), parentNode ? {
        parentNode: it(parentNode[1]),
        g: it(parentNode[2]),
        b: it(parentNode[3]),
        a: xu(parentNode[4]),
        format: nextSibling ? "name" : "hex8"
    } : (parentNode = bt.hex6.exec(component), parentNode ? {
        parentNode: it(parentNode[1]),
        g: it(parentNode[2]),
        b: it(parentNode[3]),
        format: nextSibling ? "name" : "hex"
    } : (parentNode = bt.hex4.exec(component), parentNode ? {
        parentNode: it(parentNode[1] + parentNode[1]),
        g: it(parentNode[2] + parentNode[2]),
        b: it(parentNode[3] + parentNode[3]),
        a: xu(parentNode[4] + parentNode[4]),
        format: nextSibling ? "name" : "hex8"
    } : (parentNode = bt.hex3.exec(component), parentNode ? {
        parentNode: it(parentNode[1] + parentNode[1]),
        g: it(parentNode[2] + parentNode[2]),
        b: it(parentNode[3] + parentNode[3]),
        format: nextSibling ? "name" : "hex"
    } : !1)))))))))
}

function Ht(component) {
    return !!bt.CSS_UNIT.exec(String(component))
}
var at = function() {
        function component(nextSibling, parentNode) {
            nextSibling === void 0 && (nextSibling = ""), parentNode === void 0 && (parentNode = {});
            var n;
            if (nextSibling instanceof component) return nextSibling;
            typeof nextSibling == "number" && (nextSibling = n_(nextSibling)), this.originalInput = nextSibling;
            var i = vn(nextSibling);
            this.originalInput = nextSibling, this.parentNode = i.parentNode, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = parentNode.format) !== null && n !== void 0 ? n : i.format, this.gradientType = parentNode.gradientType, this.parentNode < 1 && (this.parentNode = Math.round(this.parentNode)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok
        }
        return component.prototype.isDark = function() {
            return this.getBrightness() < 128
        }, component.prototype.isLight = function() {
            return !this.isDark()
        }, component.prototype.getBrightness = function() {
            var nextSibling = this.toRgb();
            return (nextSibling.parentNode * 299 + nextSibling.g * 587 + nextSibling.b * 114) / 1e3
        }, component.prototype.getLuminance = function() {
            var nextSibling = this.toRgb(),
                parentNode, n, i, o = nextSibling.parentNode / 255,
                a = nextSibling.g / 255,
                s = nextSibling.b / 255;
            return o <= .03928 ? parentNode = o / 12.92 : parentNode = Math.pow((o + .055) / 1.055, 2.4), a <= .03928 ? n = a / 12.92 : n = Math.pow((a + .055) / 1.055, 2.4), s <= .03928 ? i = s / 12.92 : i = Math.pow((s + .055) / 1.055, 2.4), .2126 * parentNode + .7152 * n + .0722 * i
        }, component.prototype.getAlpha = function() {
            return this.a
        }, component.prototype.setAlpha = function(nextSibling) {
            return this.a = wh(nextSibling), this.roundA = Math.round(100 * this.a) / 100, this
        }, component.prototype.isMonochrome = function() {
            var nextSibling = this.toHsl().s;
            return nextSibling === 0
        }, component.prototype.toHsv = function() {
            var nextSibling = Us(this.parentNode, this.g, this.b);
            return {
                h: nextSibling.h * 360,
                s: nextSibling.s,
                v: nextSibling.v,
                a: this.a
            }
        }, component.prototype.toHsvString = function() {
            var nextSibling = Us(this.parentNode, this.g, this.b),
                parentNode = Math.round(nextSibling.h * 360),
                n = Math.round(nextSibling.s * 100),
                i = Math.round(nextSibling.v * 100);
            return this.a === 1 ? "hsv(".concat(parentNode, ", ").concat(n, "%, ").concat(i, "%)") : "hsva(".concat(parentNode, ", ").concat(n, "%, ").concat(i, "%, ").concat(this.roundA, ")")
        }, component.prototype.toHsl = function() {
            var nextSibling = wu(this.parentNode, this.g, this.b);
            return {
                h: nextSibling.h * 360,
                s: nextSibling.s,
                l: nextSibling.l,
                a: this.a
            }
        }, component.prototype.toHslString = function() {
            var nextSibling = wu(this.parentNode, this.g, this.b),
                parentNode = Math.round(nextSibling.h * 360),
                n = Math.round(nextSibling.s * 100),
                i = Math.round(nextSibling.l * 100);
            return this.a === 1 ? "hsl(".concat(parentNode, ", ").concat(n, "%, ").concat(i, "%)") : "hsla(".concat(parentNode, ", ").concat(n, "%, ").concat(i, "%, ").concat(this.roundA, ")")
        }, component.prototype.toHex = function(nextSibling) {
            return nextSibling === void 0 && (nextSibling = !1), $s(this.parentNode, this.g, this.b, nextSibling)
        }, component.prototype.toHexString = function(nextSibling) {
            return nextSibling === void 0 && (nextSibling = !1), "#" + this.toHex(nextSibling)
        }, component.prototype.toHex8 = function(nextSibling) {
            return nextSibling === void 0 && (nextSibling = !1), t_(this.parentNode, this.g, this.b, this.a, nextSibling)
        }, component.prototype.toHex8String = function(nextSibling) {
            return nextSibling === void 0 && (nextSibling = !1), "#" + this.toHex8(nextSibling)
        }, component.prototype.toHexShortString = function(nextSibling) {
            return nextSibling === void 0 && (nextSibling = !1), this.a === 1 ? this.toHexString(nextSibling) : this.toHex8String(nextSibling)
        }, component.prototype.toRgb = function() {
            return {
                parentNode: Math.round(this.parentNode),
                g: Math.round(this.g),
                b: Math.round(this.b),
                a: this.a
            }
        }, component.prototype.toRgbString = function() {
            var nextSibling = Math.round(this.parentNode),
                parentNode = Math.round(this.g),
                n = Math.round(this.b);
            return this.a === 1 ? "rgb(".concat(nextSibling, ", ").concat(parentNode, ", ").concat(n, ")") : "rgba(".concat(nextSibling, ", ").concat(parentNode, ", ").concat(n, ", ").concat(this.roundA, ")")
        }, component.prototype.toPercentageRgb = function() {
            var nextSibling = function(parentNode) {
                return "".concat(Math.round(We(parentNode, 255) * 100), "%")
            };
            return {
                parentNode: nextSibling(this.parentNode),
                g: nextSibling(this.g),
                b: nextSibling(this.b),
                a: this.a
            }
        }, component.prototype.toPercentageRgbString = function() {
            var nextSibling = function(parentNode) {
                return Math.round(We(parentNode, 255) * 100)
            };
            return this.a === 1 ? "rgb(".concat(nextSibling(this.parentNode), "%, ").concat(nextSibling(this.g), "%, ").concat(nextSibling(this.b), "%)") : "rgba(".concat(nextSibling(this.parentNode), "%, ").concat(nextSibling(this.g), "%, ").concat(nextSibling(this.b), "%, ").concat(this.roundA, ")")
        }, component.prototype.toName = function() {
            if (this.a === 0) return "transparent";
            if (this.a < 1) return !1;
            for (var nextSibling = "#" + $s(this.parentNode, this.g, this.b, !1), parentNode = 0, n = Object.entries(Ws); parentNode < n.length; parentNode++) {
                var i = n[parentNode],
                    o = i[0],
                    a = i[1];
                if (nextSibling === a) return o
            }
            return !1
        }, component.prototype.toString = function(nextSibling) {
            var parentNode = !!nextSibling;
            nextSibling = nextSibling ?? this.format;
            var n = !1,
                i = this.a < 1 && this.a >= 0,
                o = !parentNode && i && (nextSibling.startsWith("hex") || nextSibling === "name");
            return o ? nextSibling === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (nextSibling === "rgb" && (n = this.toRgbString()), nextSibling === "prgb" && (n = this.toPercentageRgbString()), (nextSibling === "hex" || nextSibling === "hex6") && (n = this.toHexString()), nextSibling === "hex3" && (n = this.toHexString(!0)), nextSibling === "hex4" && (n = this.toHex8String(!0)), nextSibling === "hex8" && (n = this.toHex8String()), nextSibling === "name" && (n = this.toName()), nextSibling === "hsl" && (n = this.toHslString()), nextSibling === "hsv" && (n = this.toHsvString()), n || this.toHexString())
        }, component.prototype.toNumber = function() {
            return (Math.round(this.parentNode) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
        }, component.prototype.clone = function() {
            return new component(this.toString())
        }, component.prototype.lighten = function(nextSibling) {
            nextSibling === void 0 && (nextSibling = 10);
            var parentNode = this.toHsl();
            return parentNode.l += nextSibling / 100, parentNode.l = ro(parentNode.l), new component(parentNode)
        }, component.prototype.brighten = function(nextSibling) {
            nextSibling === void 0 && (nextSibling = 10);
            var parentNode = this.toRgb();
            return parentNode.parentNode = Math.max(0, Math.min(255, parentNode.parentNode - Math.round(255 * -(nextSibling / 100)))), parentNode.g = Math.max(0, Math.min(255, parentNode.g - Math.round(255 * -(nextSibling / 100)))), parentNode.b = Math.max(0, Math.min(255, parentNode.b - Math.round(255 * -(nextSibling / 100)))), new component(parentNode)
        }, component.prototype.darken = function(nextSibling) {
            nextSibling === void 0 && (nextSibling = 10);
            var parentNode = this.toHsl();
            return parentNode.l -= nextSibling / 100, parentNode.l = ro(parentNode.l), new component(parentNode)
        }, component.prototype.tint = function(nextSibling) {
            return nextSibling === void 0 && (nextSibling = 10), this.mix("white", nextSibling)
        }, component.prototype.shade = function(nextSibling) {
            return nextSibling === void 0 && (nextSibling = 10), this.mix("black", nextSibling)
        }, component.prototype.desaturate = function(nextSibling) {
            nextSibling === void 0 && (nextSibling = 10);
            var parentNode = this.toHsl();
            return parentNode.s -= nextSibling / 100, parentNode.s = ro(parentNode.s), new component(parentNode)
        }, component.prototype.saturate = function(nextSibling) {
            nextSibling === void 0 && (nextSibling = 10);
            var parentNode = this.toHsl();
            return parentNode.s += nextSibling / 100, parentNode.s = ro(parentNode.s), new component(parentNode)
        }, component.prototype.greyscale = function() {
            return this.desaturate(100)
        }, component.prototype.spin = function(nextSibling) {
            var parentNode = this.toHsl(),
                n = (parentNode.h + nextSibling) % 360;
            return parentNode.h = n < 0 ? 360 + n : n, new component(parentNode)
        }, component.prototype.mix = function(nextSibling, parentNode) {
            parentNode === void 0 && (parentNode = 50);
            var n = this.toRgb(),
                i = new component(nextSibling).toRgb(),
                o = parentNode / 100,
                a = {
                    parentNode: (i.parentNode - n.parentNode) * o + n.parentNode,
                    g: (i.g - n.g) * o + n.g,
                    b: (i.b - n.b) * o + n.b,
                    a: (i.a - n.a) * o + n.a
                };
            return new component(a)
        }, component.prototype.analogous = function(nextSibling, parentNode) {
            nextSibling === void 0 && (nextSibling = 6), parentNode === void 0 && (parentNode = 30);
            var n = this.toHsl(),
                i = 360 / parentNode,
                o = [this];
            for (n.h = (n.h - (i * nextSibling >> 1) + 720) % 360; --nextSibling;) n.h = (n.h + i) % 360, o.push(new component(n));
            return o
        }, component.prototype.complement = function() {
            var nextSibling = this.toHsl();
            return nextSibling.h = (nextSibling.h + 180) % 360, new component(nextSibling)
        }, component.prototype.monochromatic = function(nextSibling) {
            nextSibling === void 0 && (nextSibling = 6);
            for (var parentNode = this.toHsv(), n = parentNode.h, i = parentNode.s, o = parentNode.v, a = [], s = 1 / nextSibling; nextSibling--;) a.push(new component({
                h: n,
                s: i,
                v: o
            })), o = (o + s) % 1;
            return a
        }, component.prototype.splitcomplement = function() {
            var nextSibling = this.toHsl(),
                parentNode = nextSibling.h;
            return [this, new component({
                h: (parentNode + 72) % 360,
                s: nextSibling.s,
                l: nextSibling.l
            }), new component({
                h: (parentNode + 216) % 360,
                s: nextSibling.s,
                l: nextSibling.l
            })]
        }, component.prototype.onBackground = function(nextSibling) {
            var parentNode = this.toRgb(),
                n = new component(nextSibling).toRgb(),
                i = parentNode.a + n.a * (1 - parentNode.a);
            return new component({
                parentNode: (parentNode.parentNode * parentNode.a + n.parentNode * n.a * (1 - parentNode.a)) / i,
                g: (parentNode.g * parentNode.a + n.g * n.a * (1 - parentNode.a)) / i,
                b: (parentNode.b * parentNode.a + n.b * n.a * (1 - parentNode.a)) / i,
                a: i
            })
        }, component.prototype.triad = function() {
            return this.polyad(3)
        }, component.prototype.tetrad = function() {
            return this.polyad(4)
        }, component.prototype.polyad = function(nextSibling) {
            for (var parentNode = this.toHsl(), n = parentNode.h, i = [this], o = 360 / nextSibling, a = 1; a < nextSibling; a++) i.push(new component({
                h: (n + a * o) % 360,
                s: parentNode.s,
                l: parentNode.l
            }));
            return i
        }, component.prototype.equals = function(nextSibling) {
            return this.toRgbString() === new component(nextSibling).toRgbString()
        }, component
    }(),
    io = 2,
    Su = .16,
    s_ = .05,
    c_ = .05,
    l_ = .15,
    xh = 5,
    Sh = 4,
    u_ = [{
        index: 7,
        opacity: .15
    }, {
        index: 6,
        opacity: .25
    }, {
        index: 5,
        opacity: .3
    }, {
        index: 5,
        opacity: .45
    }, {
        index: 5,
        opacity: .65
    }, {
        index: 5,
        opacity: .85
    }, {
        index: 4,
        opacity: .9
    }, {
        index: 3,
        opacity: .95
    }, {
        index: 2,
        opacity: .97
    }, {
        index: 1,
        opacity: .98
    }];

function Eu(component) {
    var nextSibling = component.parentNode,
        parentNode = component.g,
        n = component.b,
        i = Us(nextSibling, parentNode, n);
    return {
        h: i.h * 360,
        s: i.s,
        v: i.v
    }
}

function oo(component) {
    var nextSibling = component.parentNode,
        parentNode = component.g,
        n = component.b;
    return "#".concat($s(nextSibling, parentNode, n, !1))
}

function f_(component, nextSibling, parentNode) {
    var n = parentNode / 100,
        i = {
            parentNode: (nextSibling.parentNode - component.parentNode) * n + component.parentNode,
            g: (nextSibling.g - component.g) * n + component.g,
            b: (nextSibling.b - component.b) * n + component.b
        };
    return i
}

function Au(component, nextSibling, parentNode) {
    var n;
    return Math.round(component.h) >= 60 && Math.round(component.h) <= 240 ? n = parentNode ? Math.round(component.h) - io * nextSibling : Math.round(component.h) + io * nextSibling : n = parentNode ? Math.round(component.h) + io * nextSibling : Math.round(component.h) - io * nextSibling, n < 0 ? n += 360 : n >= 360 && (n -= 360), n
}

function Cu(component, nextSibling, parentNode) {
    if (component.h === 0 && component.s === 0) return component.s;
    var n;
    return parentNode ? n = component.s - Su * nextSibling : nextSibling === Sh ? n = component.s + Su : n = component.s + s_ * nextSibling, n > 1 && (n = 1), parentNode && nextSibling === xh && n > .1 && (n = .1), n < .06 && (n = .06), Number(n.toFixed(2))
}

function Tu(component, nextSibling, parentNode) {
    var n;
    return parentNode ? n = component.v + c_ * nextSibling : n = component.v - l_ * nextSibling, n > 1 && (n = 1), Number(n.toFixed(2))
}

function Wr(component) {
    for (var nextSibling = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, parentNode = [], n = vn(component), i = xh; i > 0; i -= 1) {
        var o = Eu(n),
            a = oo(vn({
                h: Au(o, i, !0),
                s: Cu(o, i, !0),
                v: Tu(o, i, !0)
            }));
        parentNode.push(a)
    }
    parentNode.push(oo(n));
    for (var s = 1; s <= Sh; s += 1) {
        var d = Eu(n),
            f = oo(vn({
                h: Au(d, s),
                s: Cu(d, s),
                v: Tu(d, s)
            }));
        parentNode.push(f)
    }
    return nextSibling.theme === "dark" ? u_.map(function(c) {
        var p = c.index,
            v = c.opacity,
            h = oo(f_(vn(nextSibling.backgroundColor || "#141414"), vn(parentNode[p]), v * 100));
        return h
    }) : parentNode
}
var es = {
        red: "#F5222D",
        volcano: "#FA541C",
        orange: "#FA8C16",
        gold: "#FAAD14",
        yellow: "#FADB14",
        lime: "#A0D911",
        green: "#52C41A",
        cyan: "#13C2C2",
        blue: "#1677FF",
        geekblue: "#2F54EB",
        purple: "#722ED1",
        magenta: "#EB2F96",
        grey: "#666666"
    },
    Ao = {},
    ts = {};
Object.keys(es).forEach(function(component) {
    Ao[component] = Wr(es[component]), Ao[component].primary = Ao[component][5], ts[component] = Wr(es[component], {
        theme: "dark",
        backgroundColor: "#141414"
    }), ts[component].primary = ts[component][5]
});
var d_ = Ao.blue;
const h_ = component => {
        const {
            controlHeight: nextSibling
        } = component;
        return {
            controlHeightSM: nextSibling * .75,
            controlHeightXS: nextSibling * .5,
            controlHeightLG: nextSibling * 1.25
        }
    },
    Eh = h_;

function v_(component) {
    const {
        sizeUnit: nextSibling,
        sizeStep: parentNode
    } = component;
    return {
        sizeXXL: nextSibling * (parentNode + 8),
        sizeXL: nextSibling * (parentNode + 4),
        sizeLG: nextSibling * (parentNode + 2),
        sizeMD: nextSibling * (parentNode + 1),
        sizeMS: nextSibling * parentNode,
        size: nextSibling * parentNode,
        sizeSM: nextSibling * (parentNode - 1),
        sizeXS: nextSibling * (parentNode - 2),
        sizeXXS: nextSibling * (parentNode - 3)
    }
}
const Dc = {
        blue: "#1677ff",
        purple: "#722ED1",
        cyan: "#13C2C2",
        green: "#52C41A",
        magenta: "#EB2F96",
        pink: "#eb2f96",
        red: "#F5222D",
        orange: "#FA8C16",
        yellow: "#FADB14",
        volcano: "#FA541C",
        geekblue: "#2F54EB",
        gold: "#FAAD14",
        lime: "#A0D911"
    },
    p_ = Object.assign(Object.assign({}, Dc), {
        colorPrimary: "#1677ff",
        colorSuccess: "#52c41a",
        colorWarning: "#faad14",
        colorError: "#ff4d4f",
        colorInfo: "#1677ff",
        colorTextBase: "",
        colorBgBase: "",
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
        fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
        fontSize: 14,
        lineWidth: 1,
        lineType: "solid",
        motionUnit: .1,
        motionBase: 0,
        motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
        motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
        motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
        motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
        motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
        borderRadius: 6,
        sizeUnit: 4,
        sizeStep: 4,
        sizePopupArrow: 16,
        controlHeight: 32,
        zIndexBase: 0,
        zIndexPopupBase: 1e3,
        opacityImage: 1,
        wireframe: !1,
        motion: !0
    }),
    Fc = p_;

function Ah(component, nextSibling) {
    let {
        generateColorPalettes: parentNode,
        generateNeutralColorPalettes: n
    } = nextSibling;
    const {
        colorSuccess: i,
        colorWarning: o,
        colorError: a,
        colorInfo: s,
        colorPrimary: d,
        colorBgBase: f,
        colorTextBase: c
    } = component, p = parentNode(d), v = parentNode(i), h = parentNode(o), _ = parentNode(a), y = parentNode(s), S = n(f, c);
    return Object.assign(Object.assign({}, S), {
        colorPrimaryBg: p[1],
        colorPrimaryBgHover: p[2],
        colorPrimaryBorder: p[3],
        colorPrimaryBorderHover: p[4],
        colorPrimaryHover: p[5],
        colorPrimary: p[6],
        colorPrimaryActive: p[7],
        colorPrimaryTextHover: p[8],
        colorPrimaryText: p[9],
        colorPrimaryTextActive: p[10],
        colorSuccessBg: v[1],
        colorSuccessBgHover: v[2],
        colorSuccessBorder: v[3],
        colorSuccessBorderHover: v[4],
        colorSuccessHover: v[4],
        colorSuccess: v[6],
        colorSuccessActive: v[7],
        colorSuccessTextHover: v[8],
        colorSuccessText: v[9],
        colorSuccessTextActive: v[10],
        colorErrorBg: _[1],
        colorErrorBgHover: _[2],
        colorErrorBorder: _[3],
        colorErrorBorderHover: _[4],
        colorErrorHover: _[5],
        colorError: _[6],
        colorErrorActive: _[7],
        colorErrorTextHover: _[8],
        colorErrorText: _[9],
        colorErrorTextActive: _[10],
        colorWarningBg: h[1],
        colorWarningBgHover: h[2],
        colorWarningBorder: h[3],
        colorWarningBorderHover: h[4],
        colorWarningHover: h[4],
        colorWarning: h[6],
        colorWarningActive: h[7],
        colorWarningTextHover: h[8],
        colorWarningText: h[9],
        colorWarningTextActive: h[10],
        colorInfoBg: y[1],
        colorInfoBgHover: y[2],
        colorInfoBorder: y[3],
        colorInfoBorderHover: y[4],
        colorInfoHover: y[4],
        colorInfo: y[6],
        colorInfoActive: y[7],
        colorInfoTextHover: y[8],
        colorInfoText: y[9],
        colorInfoTextActive: y[10],
        colorBgMask: new at("#000").setAlpha(.45).toRgbString(),
        colorWhite: "#fff"
    })
}
const g_ = component => {
        let nextSibling = component,
            parentNode = component,
            n = component,
            i = component;
        return component < 6 && component >= 5 ? nextSibling = component + 1 : component < 16 && component >= 6 ? nextSibling = component + 2 : component >= 16 && (nextSibling = 16), component < 7 && component >= 5 ? parentNode = 4 : component < 8 && component >= 7 ? parentNode = 5 : component < 14 && component >= 8 ? parentNode = 6 : component < 16 && component >= 14 ? parentNode = 7 : component >= 16 && (parentNode = 8), component < 6 && component >= 2 ? n = 1 : component >= 6 && (n = 2), component > 4 && component < 8 ? i = 4 : component >= 8 && (i = 6), {
            borderRadius: component > 16 ? 16 : component,
            borderRadiusXS: n,
            borderRadiusSM: parentNode,
            borderRadiusLG: nextSibling,
            borderRadiusOuter: i
        }
    },
    m_ = g_;

function NULL2(component) {
    const {
        motionUnit: nextSibling,
        motionBase: parentNode,
        borderRadius: n,
        lineWidth: i
    } = component;
    return Object.assign({
        motionDurationFast: `${(parentNode+nextSibling).toFixed(1)}s`,
        motionDurationMid: `${(parentNode+nextSibling*2).toFixed(1)}s`,
        motionDurationSlow: `${(parentNode+nextSibling*3).toFixed(1)}s`,
        lineWidthBold: i + 1
    }, m_(n))
}
const Ut = (component, nextSibling) => new at(component).setAlpha(nextSibling).toRgbString(),
    Qn = (component, nextSibling) => new at(component).darken(nextSibling).toHexString(),
    b_ = component => {
        const nextSibling = Wr(component);
        return {
            1: nextSibling[0],
            2: nextSibling[1],
            3: nextSibling[2],
            4: nextSibling[3],
            5: nextSibling[4],
            6: nextSibling[5],
            7: nextSibling[6],
            8: nextSibling[4],
            9: nextSibling[5],
            10: nextSibling[6]
        }
    },
    y_ = (component, nextSibling) => {
        const parentNode = component || "#fff",
            n = nextSibling || "#000";
        return {
            colorBgBase: parentNode,
            colorTextBase: n,
            colorText: Ut(n, .88),
            colorTextSecondary: Ut(n, .65),
            colorTextTertiary: Ut(n, .45),
            colorTextQuaternary: Ut(n, .25),
            colorFill: Ut(n, .15),
            colorFillSecondary: Ut(n, .06),
            colorFillTertiary: Ut(n, .04),
            colorFillQuaternary: Ut(n, .02),
            colorBgLayout: Qn(parentNode, 4),
            colorBgContainer: Qn(parentNode, 0),
            colorBgElevated: Qn(parentNode, 0),
            colorBgSpotlight: Ut(n, .85),
            colorBorder: Qn(parentNode, 15),
            colorBorderSecondary: Qn(parentNode, 6)
        }
    };

function w_(component) {
    const nextSibling = new Array(10).fill(null).map((parentNode, n) => {
        const i = n - 1,
            o = component * Math.pow(2.71828, i / 5),
            a = n > 1 ? Math.floor(o) : Math.ceil(o);
        return Math.floor(a / 2) * 2
    });
    return nextSibling[1] = component, nextSibling.map(parentNode => {
        const n = parentNode + 8;
        return {
            size: parentNode,
            lineHeight: n / parentNode
        }
    })
}
const x_ = component => {
        const nextSibling = w_(component),
            parentNode = nextSibling.map(i => i.size),
            n = nextSibling.map(i => i.lineHeight);
        return {
            fontSizeSM: parentNode[0],
            fontSize: parentNode[1],
            fontSizeLG: parentNode[2],
            fontSizeXL: parentNode[3],
            fontSizeHeading1: parentNode[6],
            fontSizeHeading2: parentNode[5],
            fontSizeHeading3: parentNode[4],
            fontSizeHeading4: parentNode[3],
            fontSizeHeading5: parentNode[2],
            lineHeight: n[1],
            lineHeightLG: n[2],
            lineHeightSM: n[0],
            lineHeightHeading1: n[6],
            lineHeightHeading2: n[5],
            lineHeightHeading3: n[4],
            lineHeightHeading4: n[3],
            lineHeightHeading5: n[2]
        }
    },
    Ch = x_;

function fa(component) {
    const nextSibling = Object.keys(Dc).map(parentNode => {
        const n = Wr(component[parentNode]);
        return new Array(10).fill(1).reduce((i, o, a) => (i[`${parentNode}-${a+1}`] = n[a], i[`${parentNode}${a+1}`] = n[a], i), {})
    }).reduce((parentNode, n) => (parentNode = Object.assign(Object.assign({}, parentNode), n), parentNode), {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, component), nextSibling), Ah(component, {
        generateColorPalettes: b_,
        generateNeutralColorPalettes: y_
    })), Ch(component.fontSize)), v_(component)), Eh(component)), NULL2(component))
}

function rs(component) {
    return component >= 0 && component <= 255
}

function ao(component, nextSibling) {
    const {
        parentNode,
        g: n,
        b: i,
        a: o
    } = new at(component).toRgb();
    if (o < 1) return component;
    const {
        parentNode: a,
        g: s,
        b: d
    } = new at(nextSibling).toRgb();
    for (let f = .01; f <= 1; f += .01) {
        const c = Math.round((parentNode - a * (1 - f)) / f),
            p = Math.round((n - s * (1 - f)) / f),
            v = Math.round((i - d * (1 - f)) / f);
        if (rs(c) && rs(p) && rs(v)) return new at({
            parentNode: c,
            g: p,
            b: v,
            a: Math.round(f * 100) / 100
        }).toRgbString()
    }
    return new at({
        parentNode,
        g: n,
        b: i,
        a: 1
    }).toRgbString()
}
var S_ = globalThis && globalThis.__rest || function(component, nextSibling) {
    var parentNode = {};
    for (var n in component) Object.prototype.hasOwnProperty.call(component, n) && nextSibling.indexOf(n) < 0 && (parentNode[n] = component[n]);
    if (component != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(component); i < n.length; i++) nextSibling.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(component, n[i]) && (parentNode[n[i]] = component[n[i]]);
    return parentNode
};

function E_(component) {
    const {
        override: nextSibling
    } = component, parentNode = S_(component, ["override"]), n = Object.assign({}, nextSibling);
    Object.keys(Fc).forEach(v => {
        delete n[v]
    });
    const i = Object.assign(Object.assign({}, parentNode), n),
        o = 480,
        a = 576,
        s = 768,
        d = 992,
        f = 1200,
        c = 1600;
    if (i.motion === !1) {
        const v = "0s";
        i.motionDurationFast = v, i.motionDurationMid = v, i.motionDurationSlow = v
    }
    return Object.assign(Object.assign(Object.assign({}, i), {
        colorLink: i.colorInfoText,
        colorLinkHover: i.colorInfoHover,
        colorLinkActive: i.colorInfoActive,
        colorFillContent: i.colorFillSecondary,
        colorFillContentHover: i.colorFill,
        colorFillAlter: i.colorFillQuaternary,
        colorBgContainerDisabled: i.colorFillTertiary,
        colorBorderBg: i.colorBgContainer,
        colorSplit: ao(i.colorBorderSecondary, i.colorBgContainer),
        colorTextPlaceholder: i.colorTextQuaternary,
        colorTextDisabled: i.colorTextQuaternary,
        colorTextHeading: i.colorText,
        colorTextLabel: i.colorTextSecondary,
        colorTextDescription: i.colorTextTertiary,
        colorTextLightSolid: i.colorWhite,
        colorHighlight: i.colorError,
        colorBgTextHover: i.colorFillSecondary,
        colorBgTextActive: i.colorFill,
        colorIcon: i.colorTextTertiary,
        colorIconHover: i.colorText,
        colorErrorOutline: ao(i.colorErrorBg, i.colorBgContainer),
        colorWarningOutline: ao(i.colorWarningBg, i.colorBgContainer),
        fontSizeIcon: i.fontSizeSM,
        lineWidthFocus: i.lineWidth * 4,
        lineWidth: i.lineWidth,
        controlOutlineWidth: i.lineWidth * 2,
        controlInteractiveSize: i.controlHeight / 2,
        controlItemBgHover: i.colorFillTertiary,
        controlItemBgActive: i.colorPrimaryBg,
        controlItemBgActiveHover: i.colorPrimaryBgHover,
        controlItemBgActiveDisabled: i.colorFill,
        controlTmpOutline: i.colorFillQuaternary,
        controlOutline: ao(i.colorPrimaryBg, i.colorBgContainer),
        lineType: i.lineType,
        borderRadius: i.borderRadius,
        borderRadiusXS: i.borderRadiusXS,
        borderRadiusSM: i.borderRadiusSM,
        borderRadiusLG: i.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: .65,
        linkDecoration: "none",
        linkHoverDecoration: "none",
        linkFocusDecoration: "none",
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: i.sizeXXS,
        paddingXS: i.sizeXS,
        paddingSM: i.sizeSM,
        padding: i.size,
        paddingMD: i.sizeMD,
        paddingLG: i.sizeLG,
        paddingXL: i.sizeXL,
        paddingContentHorizontalLG: i.sizeLG,
        paddingContentVerticalLG: i.sizeMS,
        paddingContentHorizontal: i.sizeMS,
        paddingContentVertical: i.sizeSM,
        paddingContentHorizontalSM: i.size,
        paddingContentVerticalSM: i.sizeXS,
        marginXXS: i.sizeXXS,
        marginXS: i.sizeXS,
        marginSM: i.sizeSM,
        margin: i.size,
        marginMD: i.sizeMD,
        marginLG: i.sizeLG,
        marginXL: i.sizeXL,
        marginXXL: i.sizeXXL,
        boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
        screenXS: o,
        screenXSMin: o,
        screenXSMax: a - 1,
        screenSM: a,
        screenSMMin: a,
        screenSMMax: s - 1,
        screenMD: s,
        screenMDMin: s,
        screenMDMax: d - 1,
        screenLG: d,
        screenLGMin: d,
        screenLGMax: f - 1,
        screenXL: f,
        screenXLMin: f,
        screenXLMax: c - 1,
        screenXXL: c,
        screenXXLMin: c,
        boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
        boxShadowCard: `
      0 1px 2px -2px ${new at("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new at("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new at("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
    }), n)
}
const A_ = "anticon",
    C_ = (component, nextSibling) => nextSibling || (component ? `ant-${component}` : "ant"),
    ki = gt({
        getPrefixCls: C_,
        iconPrefixCls: A_
    }),
    T_ = (component, nextSibling, parentNode, n, i) => {
        const o = component / 2,
            a = 0,
            s = o,
            d = parentNode * 1 / Math.sqrt(2),
            f = o - parentNode * (1 - 1 / Math.sqrt(2)),
            c = o - nextSibling * (1 / Math.sqrt(2)),
            p = parentNode * (Math.sqrt(2) - 1) + nextSibling * (1 / Math.sqrt(2)),
            v = 2 * o - c,
            h = p,
            _ = 2 * o - d,
            y = f,
            S = 2 * o - a,
            w = s,
            x = o * Math.sqrt(2) + parentNode * (Math.sqrt(2) - 2),
            R = parentNode * (Math.sqrt(2) - 1);
        return {
            pointerEvents: "none",
            width: component,
            height: component,
            overflow: "hidden",
            "&::before": {
                position: "absolute",
                bottom: 0,
                insetInlineStart: 0,
                width: component,
                height: component / 2,
                background: n,
                clipPath: {
                    _multi_value_: !0,
                    value: [`polygon(${R}px 100%, 50% ${R}px, ${2*o-R}px 100%, ${R}px 100%)`, `path('M ${a} ${s} A ${parentNode} ${parentNode} 0 0 0 ${d} ${f} L ${c} ${p} A ${nextSibling} ${nextSibling} 0 0 1 ${v} ${h} L ${_} ${y} A ${parentNode} ${parentNode} 0 0 0 ${S} ${w} Z')`]
                },
                content: '""'
            },
            "&::after": {
                content: '""',
                position: "absolute",
                width: x,
                height: x,
                bottom: 0,
                insetInline: 0,
                margin: "auto",
                borderRadius: {
                    _skip_check_: !0,
                    value: `0 0 ${nextSibling}px 0`
                },
                transform: "translateY(50%) rotate(-135deg)",
                boxShadow: i,
                zIndex: 0,
                background: "transparent"
            }
        }
    },
    Th = component => ({
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        color: component.colorText,
        fontSize: component.fontSize,
        lineHeight: component.lineHeight,
        listStyle: "none",
        fontFamily: component.fontFamily
    }),
    k_ = component => ({
        a: {
            color: component.colorLink,
            textDecoration: component.linkDecoration,
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
            transition: `color ${component.motionDurationSlow}`,
            "-webkit-text-decoration-skip": "objects",
            "&:hover": {
                color: component.colorLinkHover
            },
            "&:active": {
                color: component.colorLinkActive
            },
            [`&:active,
  &:hover`]: {
                textDecoration: component.linkHoverDecoration,
                outline: 0
            },
            "&:focus": {
                textDecoration: component.linkFocusDecoration,
                outline: 0
            },
            "&[disabled]": {
                color: component.colorTextDisabled,
                cursor: "not-allowed"
            }
        }
    }),
    M_ = (component, nextSibling) => {
        const {
            fontFamily: parentNode,
            fontSize: n
        } = component, i = `[class^="${nextSibling}"], [class*=" ${nextSibling}"]`;
        return {
            [i]: {
                fontFamily: parentNode,
                fontSize: n,
                boxSizing: "border-box",
                "&::before, &::after": {
                    boxSizing: "border-box"
                },
                [i]: {
                    boxSizing: "border-box",
                    "&::before, &::after": {
                        boxSizing: "border-box"
                    }
                }
            }
        }
    },
    I_ = component => ({
        outline: `${component.lineWidthFocus}px solid ${component.colorPrimaryBorder}`,
        outlineOffset: 1,
        transition: "outline-offset 0s, outline 0s"
    }),
    O_ = component => ({
        "&:focus-visible": Object.assign({}, I_(component))
    });

function Bc(component, nextSibling, parentNode, n) {
    return i => {
        const [o, a, s] = Mh(), {
            getPrefixCls: d,
            iconPrefixCls: f,
            csp: c
        } = Be(ki), p = d(), v = {
            theme: o,
            token: a,
            hashId: s,
            nonce: () => c == null ? void 0 : c.nonce
        };
        return _u(Object.assign(Object.assign({}, v), {
            path: ["Shared", p]
        }), () => [{
            "&": k_(a)
        }]), [_u(Object.assign(Object.assign({}, v), {
            path: [component, i, f]
        }), () => {
            const {
                token: h,
                flush: _
            } = N_(a), y = a[component], S = typeof parentNode == "function" ? parentNode(bi(h, y ?? {})) : parentNode, w = Object.assign(Object.assign({}, S), y), x = `.${i}`, R = bi(h, {
                componentCls: x,
                prefixCls: i,
                iconCls: `.${f}`,
                antCls: `.${p}`
            }, w), I = nextSibling(R, {
                hashId: s,
                prefixCls: i,
                rootPrefixCls: p,
                iconPrefixCls: f,
                overrideComponentToken: a[component]
            });
            return _(component, w), [(n == null ? void 0 : n.resetStyle) === !1 ? null : M_(a, i), I]
        }), s]
    }
}
const kh = typeof CSSINJS_STATISTIC < "u";
let Gs = !0;

function bi() {
    for (var component = arguments.length, nextSibling = new Array(component), parentNode = 0; parentNode < component; parentNode++) nextSibling[parentNode] = arguments[parentNode];
    if (!kh) return Object.assign.apply(Object, [{}].concat(nextSibling));
    Gs = !1;
    const n = {};
    return nextSibling.forEach(i => {
        Object.keys(i).forEach(a => {
            Object.defineProperty(n, a, {
                configurable: !0,
                enumerable: !0,
                get: () => i[a]
            })
        })
    }), Gs = !0, n
}

function R_() {}

function N_(component) {
    let nextSibling, parentNode = component,
        n = R_;
    return kh && (nextSibling = new Set, parentNode = new Proxy(component, {
        get(i, o) {
            return Gs && nextSibling.add(o), i[o]
        }
    }), n = (i, o) => {
        Array.from(nextSibling)
    }), {
        token: parentNode,
        keys: nextSibling,
        flush: n
    }
}

function L_(component, nextSibling) {
    return jo.reduce((parentNode, n) => {
        const i = component[`${n}1`],
            o = component[`${n}3`],
            a = component[`${n}6`],
            s = component[`${n}7`];
        return Object.assign(Object.assign({}, parentNode), nextSibling(n, {
            lightColor: i,
            lightBorderColor: o,
            darkColor: a,
            textColor: s
        }))
    }, {})
}
const P_ = Km(fa),
    Js = {
        token: Fc,
        hashed: !0
    },
    D_ = vt.createContext(Js);

function Mh() {
    const {
        token: component,
        hashed: nextSibling,
        theme: parentNode,
        components: n
    } = vt.useContext(D_), i = `${Ym}-${nextSibling||""}`, o = parentNode || P_, [a, s] = wm(o, [Fc, component], {
        salt: i,
        override: Object.assign({
            override: component
        }, n),
        formatToken: E_
    });
    return [o, a, nextSibling ? s : ""]
}
const F_ = gt(!1),
    B_ = F_,
    z_ = component => {
        const nextSibling = vt.useContext(U_);
        return vt.useMemo(() => component ? typeof component == "string" ? component ?? nextSibling : component instanceof Function ? component(nextSibling) : nextSibling : nextSibling, [component, nextSibling])
    },
    j_ = z_,
    H_ = gt(void 0),
    U_ = H_;
var $_ = gt({}),
    W_ = function(component) {
        gc(parentNode, component);
        var nextSibling = listenInput(parentNode);

        function parentNode() {
            return Vr(this, parentNode), nextSibling.apply(this, arguments)
        }
        return Zr(parentNode, [{
            key: "render",
            value: function() {
                return this.props.children
            }
        }]), parentNode
    }(newInt);

function An(component) {
    var nextSibling = q(!1),
        parentNode = ie(component),
        n = X(parentNode, 2),
        i = n[0],
        o = n[1];
    be(function() {
        return nextSibling.current = !1,
            function() {
                nextSibling.current = !0
            }
    }, []);

    function a(s, d) {
        d && nextSibling.current || o(s)
    }
    return [i, a]
}
var kr = "none",
    so = "appear",
    co = "enter",
    lo = "leave",
    ku = "none",
    yt = "prepare",
    _n = "start",
    bn = "active",
    zc = "end",
    Ih = "prepared";

function Mu(component, nextSibling) {
    var parentNode = {};
    return parentNode[component.toLowerCase()] = nextSibling.toLowerCase(), parentNode["Webkit".concat(component)] = "webkit".concat(nextSibling), parentNode["Moz".concat(component)] = "moz".concat(nextSibling), parentNode["ms".concat(component)] = "MS".concat(nextSibling), parentNode["O".concat(component)] = "o".concat(nextSibling.toLowerCase()), parentNode
}

function G_(component, nextSibling) {
    var parentNode = {
        animationend: Mu("Animation", "AnimationEnd"),
        transitionend: Mu("Transition", "TransitionEnd")
    };
    return component && ("AnimationEvent" in nextSibling || delete parentNode.animationend.animation, "TransitionEvent" in nextSibling || delete parentNode.transitionend.transition), parentNode
}
var J_ = G_(Et(), typeof window < "u" ? window : {}),
    Oh = {};
if (Et()) {
    var K_ = document.createElement("div");
    Oh = K_.style
}
var uo = {};

function Rh(component) {
    if (uo[component]) return uo[component];
    var nextSibling = J_[component];
    if (nextSibling)
        for (var parentNode = Object.keys(nextSibling), n = parentNode.length, i = 0; i < n; i += 1) {
            var o = parentNode[i];
            if (Object.prototype.hasOwnProperty.call(nextSibling, o) && o in Oh) return uo[component] = nextSibling[o], uo[component]
        }
    return ""
}
var Nh = Rh("animationend"),
    Lh = Rh("transitionend"),
    Ph = !!(Nh && Lh),
    Iu = Nh || "animationend",
    Ou = Lh || "transitionend";

function Ru(component, nextSibling) {
    if (!component) return null;
    if (ze(component) === "object") {
        var parentNode = nextSibling.replace(/-\w/g, function(n) {
            return n[1].toUpperCase()
        });
        return component[parentNode]
    }
    return "".concat(component, "-").concat(nextSibling)
}
const Q_ = function(component) {
    var nextSibling = q(),
        parentNode = q(component);
    parentNode.current = component;
    var n = Qe(function(a) {
        parentNode.current(a)
    }, []);

    function i(a) {
        a && (a.removeEventListener(Ou, n), a.removeEventListener(Iu, n))
    }

    function o(a) {
        nextSibling.current && nextSibling.current !== a && i(nextSibling.current), a && a !== nextSibling.current && (a.addEventListener(Ou, n), a.addEventListener(Iu, n), nextSibling.current = a)
    }
    return be(function() {
        return function() {
            i(nextSibling.current)
        }
    }, []), [o, i]
};
var Dh = Et() ? Jr : be;
const Y_ = function() {
    var component = q(null);

    function nextSibling() {
        Ur.cancel(component.current)
    }

    function parentNode(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
        nextSibling();
        var o = Ur(function() {
            i <= 1 ? n({
                isCanceled: function() {
                    return o !== component.current
                }
            }) : parentNode(n, i - 1)
        });
        component.current = o
    }
    return be(function() {
        return function() {
            nextSibling()
        }
    }, []), [parentNode, nextSibling]
};
var V_ = [yt, _n, bn, zc],
    Z_ = [yt, Ih],
    Fh = !1,
    X_ = !0;

function Bh(component) {
    return component === bn || component === zc
}
const q_ = function(component, nextSibling, parentNode) {
    var n = An(ku),
        i = X(n, 2),
        o = i[0],
        a = i[1],
        s = Y_(),
        d = X(s, 2),
        f = d[0],
        c = d[1];

    function p() {
        a(yt, !0)
    }
    var v = nextSibling ? Z_ : V_;
    return Dh(function() {
        if (o !== ku && o !== zc) {
            var h = v.indexOf(o),
                _ = v[h + 1],
                y = parentNode(o);
            y === Fh ? a(_, !0) : _ && f(function(S) {
                function w() {
                    S.isCanceled() || a(_, !0)
                }
                y === !0 ? w() : Promise.resolve(y).then(w)
            })
        }
    }, [component, o]), be(function() {
        return function() {
            c()
        }
    }, []), [p, o]
};

function e1(component, nextSibling, parentNode, n) {
    var i = n.motionEnter,
        o = i === void 0 ? !0 : i,
        a = n.motionAppear,
        s = a === void 0 ? !0 : a,
        d = n.motionLeave,
        f = d === void 0 ? !0 : d,
        c = n.motionDeadline,
        p = n.motionLeaveImmediately,
        v = n.onAppearPrepare,
        h = n.onEnterPrepare,
        _ = n.onLeavePrepare,
        y = n.onAppearStart,
        S = n.onEnterStart,
        w = n.onLeaveStart,
        x = n.onAppearActive,
        R = n.onEnterActive,
        I = n.onLeaveActive,
        E = n.onAppearEnd,
        N = n.onEnterEnd,
        C = n.onLeaveEnd,
        T = n.onVisibleChanged,
        D = An(),
        F = X(D, 2),
        B = F[0],
        k = F[1],
        A = An(kr),
        M = X(A, 2),
        P = M[0],
        j = M[1],
        H = An(null),
        G = X(H, 2),
        ne = G[0],
        ee = G[1],
        Q = q(!1),
        Z = q(null);

    function ve() {
        return parentNode()
    }
    var me = q(!1);

    function Ae() {
        j(kr, !0), ee(null, !0)
    }

    function He(m) {
        var b = ve();
        if (!(m && !m.deadline && m.target !== b)) {
            var O = me.current,
                L;
            P === so && O ? L = E == null ? void 0 : E(b, m) : P === co && O ? L = N == null ? void 0 : N(b, m) : P === lo && O && (L = C == null ? void 0 : C(b, m)), P !== kr && O && L !== !1 && Ae()
        }
    }
    var J = Q_(He),
        te = X(J, 1),
        ce = te[0],
        le = function(b) {
            var O, L, re;
            switch (b) {
                case so:
                    return O = {}, fe(O, yt, v), fe(O, _n, y), fe(O, bn, x), O;
                case co:
                    return L = {}, fe(L, yt, h), fe(L, _n, S), fe(L, bn, R), L;
                case lo:
                    return re = {}, fe(re, yt, _), fe(re, _n, w), fe(re, bn, I), re;
                default:
                    return {}
            }
        },
        pe = $component(function() {
            return le(P)
        }, [P]),
        we = q_(P, !component, function(m) {
            if (m === yt) {
                var b = pe[yt];
                return b ? b(ve()) : Fh
            }
            if (Fe in pe) {
                var O;
                ee(((O = pe[Fe]) === null || O === void 0 ? void 0 : O.call(pe, ve(), null)) || null)
            }
            return Fe === bn && (ce(ve()), c > 0 && (clearTimeout(Z.current), Z.current = setTimeout(function() {
                He({
                    deadline: !0
                })
            }, c))), Fe === Ih && Ae(), X_
        }),
        U = X(we, 2),
        De = U[0],
        Fe = U[1],
        g = Bh(Fe);
    me.current = g, Dh(function() {
        k(nextSibling);
        var m = Q.current;
        Q.current = !0;
        var b;
        !m && nextSibling && s && (b = so), m && nextSibling && o && (b = co), (m && !nextSibling && f || !m && p && !nextSibling && f) && (b = lo);
        var O = le(b);
        b && (component || O[yt]) ? (j(b), De()) : j(kr)
    }, [nextSibling]), be(function() {
        (P === so && !s || P === co && !o || P === lo && !f) && j(kr)
    }, [s, o, f]), be(function() {
        return function() {
            Q.current = !1, clearTimeout(Z.current)
        }
    }, []);
    var l = q(!1);
    be(function() {
        B && (l.current = !0), B !== void 0 && P === kr && ((l.current || B) && (T == null || T(B)), l.current = !0)
    }, [B, P]);
    var u = ne;
    return pe[yt] && Fe === _n && (u = K({
        transition: "none"
    }, u)), [P, Fe, u, B ?? nextSibling]
}

function t1(component) {
    var nextSibling = component;
    ze(component) === "object" && (nextSibling = component.transitionSupport);

    function parentNode(i, o) {
        return !!(i.motionName && nextSibling && o !== !1)
    }
    var n = Ke(function(i, o) {
        var a = i.visible,
            s = a === void 0 ? !0 : a,
            d = i.removeOnLeave,
            f = d === void 0 ? !0 : d,
            c = i.forceRender,
            p = i.children,
            v = i.motionName,
            h = i.leavedClassName,
            _ = i.eventProps,
            y = Be($_),
            S = y.motion,
            w = parentNode(i, S),
            x = q(),
            R = q();

        function I() {
            try {
                return x.current instanceof HTMLElement ? x.current : Os(R.current)
            } catch {
                return null
            }
        }
        var E = e1(w, s, I, i),
            N = X(E, 4),
            C = N[0],
            T = N[1],
            D = N[2],
            F = N[3],
            B = q(F);
        F && (B.current = !0);
        var k = Qe(function(ee) {
                x.current = ee, Tc(o, ee)
            }, [o]),
            A, M = K(K({}, _), {}, {
                visible: s
            });
        if (!p) A = null;
        else if (C === kr) F ? A = p(K({}, M), k) : !f && B.current && h ? A = p(K(K({}, M), {}, {
            className: h
        }), k) : c || !f && !h ? A = p(K(K({}, M), {}, {
            style: {
                display: "none"
            }
        }), k) : A = null;
        else {
            var P, j;
            T === yt ? j = "prepare" : Bh(T) ? j = "active" : T === _n && (j = "start");
            var H = Ru(v, "".concat(C, "-").concat(j));
            A = p(K(K({}, M), {}, {
                className: he(Ru(v, C), (P = {}, fe(P, H, H && j), fe(P, v, typeof v == "string"), P)),
                style: D
            }), k)
        }
        if (Ci(A) && Ti(A)) {
            var G = A,
                ne = G.ref;
            ne || (A = pr(A, {
                ref: k
            }))
        }
        return createElement(W_, {
            ref: R
        }, A)
    });
    return n.displayName = "CSSMotion", n
}
const da = t1(Ph);
var Ks = "add",
    Qs = "keep",
    Ys = "remove",
    ns = "removed";

function r1(component) {
    var nextSibling;
    return component && ze(component) === "object" && "key" in component ? nextSibling = component : nextSibling = {
        key: component
    }, K(K({}, nextSibling), {}, {
        key: String(nextSibling.key)
    })
}

function Vs() {
    var component = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return component.map(r1)
}

function n1() {
    var component = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        nextSibling = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
        parentNode = [],
        n = 0,
        i = nextSibling.length,
        o = Vs(component),
        a = Vs(nextSibling);
    o.forEach(function(f) {
        for (var c = !1, p = n; p < i; p += 1) {
            var v = a[p];
            if (v.key === f.key) {
                n < p && (parentNode = parentNode.concat(a.slice(n, p).map(function(h) {
                    return K(K({}, h), {}, {
                        status: Ks
                    })
                })), n = p), parentNode.push(K(K({}, v), {}, {
                    status: Qs
                })), n += 1, c = !0;
                break
            }
        }
        c || parentNode.push(K(K({}, f), {}, {
            status: Ys
        }))
    }), n < i && (parentNode = parentNode.concat(a.slice(n).map(function(f) {
        return K(K({}, f), {}, {
            status: Ks
        })
    })));
    var s = {};
    parentNode.forEach(function(f) {
        var c = f.key;
        s[c] = (s[c] || 0) + 1
    });
    var d = Object.keys(s).filter(function(f) {
        return s[f] > 1
    });
    return d.forEach(function(f) {
        parentNode = parentNode.filter(function(c) {
            var p = c.key,
                v = c.status;
            return p !== f || v !== Ys
        }), parentNode.forEach(function(c) {
            c.key === f && (c.status = Qs)
        })
    }), parentNode
}
var i1 = ["component", "children", "onVisibleChanged", "onAllRemoved"],
    o1 = ["status"],
    a1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];

function s1(component) {
    var nextSibling = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : da,
        parentNode = function(n) {
            gc(o, n);
            var i = listenInput(o);

            function o() {
                var a;
                Vr(this, o);
                for (var s = arguments.length, d = new Array(s), f = 0; f < s; f++) d[f] = arguments[f];
                return a = i.call.apply(i, [this].concat(d)), fe(Ts(a), "state", {
                    keyEntities: []
                }), fe(Ts(a), "removeKey", function(c) {
                    var p = a.state.keyEntities,
                        v = p.map(function(h) {
                            return h.key !== c ? h : K(K({}, h), {}, {
                                status: ns
                            })
                        });
                    return a.setState({
                        keyEntities: v
                    }), v.filter(function(h) {
                        var _ = h.status;
                        return _ !== ns
                    }).length
                }), a
            }
            return Zr(o, [{
                key: "render",
                value: function() {
                    var s = this,
                        d = this.state.keyEntities,
                        f = this.props,
                        c = f.component,
                        p = f.children,
                        v = f.onVisibleChanged,
                        h = f.onAllRemoved,
                        _ = $parentNode(f, i1),
                        y = c || subDOM,
                        S = {};
                    return a1.forEach(function(w) {
                        S[w] = _[w], delete _[w]
                    }), delete _.keys, createElement(y, _, d.map(function(w) {
                        var x = w.status,
                            R = $parentNode(w, o1),
                            I = x === Ks || x === Qs;
                        return createElement(nextSibling, St({}, S, {
                            key: R.key,
                            visible: I,
                            eventProps: R,
                            onVisibleChanged: function(N) {
                                if (v == null || v(N, {
                                        key: R.key
                                    }), !N) {
                                    var C = s.removeKey(R.key);
                                    C === 0 && h && h()
                                }
                            }
                        }), p)
                    }))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(s, d) {
                    var f = s.keys,
                        c = d.keyEntities,
                        p = Vs(f),
                        v = n1(c, p);
                    return {
                        keyEntities: v.filter(function(h) {
                            var _ = c.find(function(y) {
                                var S = y.key;
                                return h.key === S
                            });
                            return !(_ && _.status === ns && h.status === Ys)
                        })
                    }
                }
            }]), o
        }(newInt);
    return fe(parentNode, "defaultProps", {
        component: "div"
    }), parentNode
}
s1(Ph);

function zh(component) {
    var nextSibling;
    return component == null || (nextSibling = component.getRootNode) === null || nextSibling === void 0 ? void 0 : nextSibling.call(component)
}

function c1(component) {
    return zh(component) !== (component == null ? void 0 : component.ownerDocument)
}

function Ho(component) {
    return c1(component) ? zh(component) : null
}

function l1(component, nextSibling) {
    ia(component, "[@ant-design/icons] ".concat(nextSibling))
}

function Nu(component) {
    return ze(component) === "object" && typeof component.name == "string" && typeof component.theme == "string" && (ze(component.icon) === "object" || typeof component.icon == "function")
}

function Lu() {
    var component = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(component).reduce(function(nextSibling, parentNode) {
        var n = component[parentNode];
        switch (parentNode) {
            case "class":
                nextSibling.className = n, delete nextSibling.class;
                break;
            default:
                nextSibling[parentNode] = n
        }
        return nextSibling
    }, {})
}

function Zs(component, nextSibling, parentNode) {
    return parentNode ? vt.createElement(component.tag, K(K({
        key: nextSibling
    }, Lu(component.attrs)), parentNode), (component.children || []).map(function(n, i) {
        return Zs(n, "".concat(nextSibling, "-").concat(component.tag, "-").concat(i))
    })) : vt.createElement(component.tag, K({
        key: nextSibling
    }, Lu(component.attrs)), (component.children || []).map(function(n, i) {
        return Zs(n, "".concat(nextSibling, "-").concat(component.tag, "-").concat(i))
    }))
}

function jh(component) {
    return Wr(component)[0]
}

function Hh(component) {
    return component ? Array.isArray(component) ? component : [component] : []
}
var u1 = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
    f1 = function(nextSibling) {
        var parentNode = Be(bh),
            n = parentNode.csp,
            i = parentNode.prefixCls,
            o = u1;
        i && (o = o.replace(/anticon/g, i)), be(function() {
            var a = nextSibling.current,
                s = Ho(a);
            pi(o, "@ant-design-icons", {
                prepend: !0,
                csp: n,
                attachTo: s
            })
        }, [])
    },
    d1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"],
    ci = {
        primaryColor: "#333",
        secondaryColor: "#E6E6E6",
        calculated: !1
    };

function h1(component) {
    var nextSibling = component.primaryColor,
        parentNode = component.secondaryColor;
    ci.primaryColor = nextSibling, ci.secondaryColor = parentNode || jh(nextSibling), ci.calculated = !!parentNode
}

function v1() {
    return K({}, ci)
}
var ha = function(nextSibling) {
    var parentNode = nextSibling.icon,
        n = nextSibling.className,
        i = nextSibling.onClick,
        o = nextSibling.style,
        a = nextSibling.primaryColor,
        s = nextSibling.secondaryColor,
        d = $parentNode(nextSibling, d1),
        f = q(),
        c = ci;
    if (a && (c = {
            primaryColor: a,
            secondaryColor: s || jh(a)
        }), f1(f), l1(Nu(parentNode), "icon should be icon definiton, but got ".concat(parentNode)), !Nu(parentNode)) return null;
    var p = parentNode;
    return p && typeof p.icon == "function" && (p = K(K({}, p), {}, {
        icon: p.icon(c.primaryColor, c.secondaryColor)
    })), Zs(p.icon, "svg-".concat(p.name), K(K({
        className: n,
        onClick: i,
        style: o,
        "data-icon": p.name,
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true"
    }, d), {}, {
        ref: f
    }))
};
ha.displayName = "IconReact";
ha.getTwoToneColors = v1;
ha.setTwoToneColors = h1;
const jc = ha;

function Uh(component) {
    var nextSibling = Hh(component),
        parentNode = X(nextSibling, 2),
        n = parentNode[0],
        i = parentNode[1];
    return jc.setTwoToneColors({
        primaryColor: n,
        secondaryColor: i
    })
}

function p1() {
    var component = jc.getTwoToneColors();
    return component.calculated ? [component.primaryColor, component.secondaryColor] : component.primaryColor
}
var g1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Uh(d_.primary);
var va = Ke(function(component, nextSibling) {
    var parentNode, n = component.className,
        i = component.icon,
        o = component.spin,
        a = component.rotate,
        s = component.tabIndex,
        d = component.onClick,
        f = component.twoToneColor,
        c = $parentNode(component, g1),
        p = Be(bh),
        v = p.prefixCls,
        h = v === void 0 ? "anticon" : v,
        _ = p.rootClassName,
        y = he(_, h, (parentNode = {}, fe(parentNode, "".concat(h, "-").concat(i.name), !!i.name), fe(parentNode, "".concat(h, "-spin"), !!o || i.name === "loading"), parentNode), n),
        S = s;
    S === void 0 && d && (S = -1);
    var w = a ? {
            msTransform: "rotate(".concat(a, "deg)"),
            transform: "rotate(".concat(a, "deg)")
        } : void 0,
        x = Hh(f),
        R = X(x, 2),
        I = R[0],
        E = R[1];
    return createElement("span", St({
        role: "img",
        "aria-label": i.name
    }, c, {
        ref: nextSibling,
        tabIndex: S,
        onClick: d,
        className: y
    }), createElement(jc, {
        icon: i,
        primaryColor: I,
        secondaryColor: E,
        style: w
    }))
});
va.displayName = "AntdIcon";
va.getTwoToneColor = p1;
va.setTwoToneColor = Uh;
const m1 = va,
    {
        isValidElement: Hc
    } = Sc;

function _1(component) {
    return component && Hc(component) && component.type === subDOM
}

function b1(component, nextSibling, parentNode) {
    return Hc(component) ? pr(component, typeof parentNode == "function" ? parentNode(component.props || {}) : parentNode) : nextSibling
}

function Uc(component, nextSibling) {
    return b1(component, component, nextSibling)
}

function Wt(component) {
    var nextSibling = q();
    nextSibling.current = component;
    var parentNode = Qe(function() {
        for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
        return (n = nextSibling.current) === null || n === void 0 ? void 0 : n.call.apply(n, [nextSibling].concat(o))
    }, []);
    return parentNode
}
var V = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function(nextSibling) {
            var parentNode = nextSibling.keyCode;
            if (nextSibling.altKey && !nextSibling.ctrlKey || nextSibling.metaKey || parentNode >= V.F1 && parentNode <= V.F12) return !1;
            switch (parentNode) {
                case V.ALT:
                case V.CAPS_LOCK:
                case V.CONTEXT_MENU:
                case V.CTRL:
                case V.DOWN:
                case V.END:
                case V.ESC:
                case V.HOME:
                case V.INSERT:
                case V.LEFT:
                case V.MAC_FF_META:
                case V.META:
                case V.NUMLOCK:
                case V.NUM_CENTER:
                case V.PAGE_DOWN:
                case V.PAGE_UP:
                case V.PAUSE:
                case V.PRINT_SCREEN:
                case V.RIGHT:
                case V.SHIFT:
                case V.UP:
                case V.WIN_KEY:
                case V.WIN_KEY_RIGHT:
                    return !1;
                default:
                    return !0
            }
        },
        isCharacterKey: function(nextSibling) {
            if (nextSibling >= V.ZERO && nextSibling <= V.NINE || nextSibling >= V.NUM_ZERO && nextSibling <= V.NUM_MULTIPLY || nextSibling >= V.A && nextSibling <= V.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && nextSibling === 0) return !0;
            switch (nextSibling) {
                case V.SPACE:
                case V.QUESTION_MARK:
                case V.NUM_PLUS:
                case V.NUM_MINUS:
                case V.NUM_PERIOD:
                case V.NUM_DIVISION:
                case V.SEMICOLON:
                case V.DASH:
                case V.EQUALS:
                case V.COMMA:
                case V.PERIOD:
                case V.SLASH:
                case V.APOSTROPHE:
                case V.SINGLE_QUOTE:
                case V.OPEN_SQUARE_BRACKET:
                case V.BACKSLASH:
                case V.CLOSE_SQUARE_BRACKET:
                    return !0;
                default:
                    return !1
            }
        }
    },
    y1 = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "0 0 1024 1024",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
                }
            }]
        },
        name: "loading",
        theme: "outlined"
    };
const w1 = y1;
var x1 = function(nextSibling, parentNode) {
    return createElement(m1, St({}, nextSibling, {
        ref: parentNode,
        icon: w1
    }))
};
const S1 = Ke(x1);
var Mi = K({}, Sc),
    E1 = Mi.version,
    A1 = Mi.render,
    C1 = Mi.unmountComponentAtNode,
    pa;
try {
    var T1 = Number((E1 || "").split(".")[0]);
    T1 >= 18 && (pa = Mi.createRoot)
} catch {}

function Pu(component) {
    var nextSibling = Mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    nextSibling && ze(nextSibling) === "object" && (nextSibling.usingClientEntryPoint = component)
}
var Uo = "__rc_react_root__";

function k1(component, nextSibling) {
    Pu(!0);
    var parentNode = nextSibling[Uo] || pa(nextSibling);
    Pu(!1), parentNode.render(component), nextSibling[Uo] = parentNode
}

function M1(component, nextSibling) {
    A1(component, nextSibling)
}

function I1(component, nextSibling) {
    if (pa) {
        k1(component, nextSibling);
        return
    }
    M1(component, nextSibling)
}

function O1(component) {
    return Xs.apply(this, arguments)
}

function Xs() {
    return Xs = yh(_i().mark(function component(nextSibling) {
        return _i().wrap(function(n) {
            for (;;) switch (n.prev = n.next) {
                case 0:
                    return n.abrupt("return", Promise.resolve().then(function() {
                        var i;
                        (i = nextSibling[Uo]) === null || i === void 0 || i.unmount(), delete nextSibling[Uo]
                    }));
                case 1:
                case "end":
                    return n.stop()
            }
        }, component)
    })), Xs.apply(this, arguments)
}

function R1(component) {
    C1(component)
}

function N1(component) {
    return qs.apply(this, arguments)
}

function qs() {
    return qs = yh(_i().mark(function component(nextSibling) {
        return _i().wrap(function(n) {
            for (;;) switch (n.prev = n.next) {
                case 0:
                    if (pa === void 0) {
                        n.next = 2;
                        break
                    }
                    return n.abrupt("return", O1(nextSibling));
                case 2:
                    R1(nextSibling);
                case 3:
                case "end":
                    return n.stop()
            }
        }, component)
    })), qs.apply(this, arguments)
}
const $h = function(component) {
        if (!component) return !1;
        if (component instanceof Element) {
            if (component.offsetParent) return !0;
            if (component.getBBox) {
                var nextSibling = component.getBBox(),
                    parentNode = nextSibling.width,
                    n = nextSibling.height;
                if (parentNode || n) return !0
            }
            if (component.getBoundingClientRect) {
                var i = component.getBoundingClientRect(),
                    o = i.width,
                    a = i.height;
                if (o || a) return !0
            }
        }
        return !1
    },
    L1 = component => {
        const {
            componentCls: nextSibling,
            colorPrimary: parentNode
        } = component;
        return {
            [nextSibling]: {
                position: "absolute",
                background: "transparent",
                pointerEvents: "none",
                boxSizing: "border-box",
                color: `var(--wave-color, ${parentNode})`,
                boxShadow: "0 0 0 0 currentcolor",
                opacity: .2,
                "&.wave-motion-appear": {
                    transition: [`box-shadow 0.4s ${component.motionEaseOutCirc}`, `opacity 2s ${component.motionEaseOutCirc}`].join(","),
                    "&-active": {
                        boxShadow: "0 0 0 6px currentcolor",
                        opacity: 0
                    }
                }
            }
        }
    },
    P1 = Bc("Wave", component => [L1(component)]);

function D1(component) {
    const nextSibling = (component || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
    return nextSibling && nextSibling[1] && nextSibling[2] && nextSibling[3] ? !(nextSibling[1] === nextSibling[2] && nextSibling[2] === nextSibling[3]) : !0
}

function is(component) {
    return component && component !== "#fff" && component !== "#ffffff" && component !== "rgb(255, 255, 255)" && component !== "rgba(255, 255, 255, 1)" && D1(component) && !/rgba\((?:\d*, ){3}0\)/.test(component) && component !== "transparent"
}

function F1(component) {
    const {
        borderTopColor: nextSibling,
        borderColor: parentNode,
        backgroundColor: n
    } = getComputedStyle(component);
    return is(nextSibling) ? nextSibling : is(parentNode) ? parentNode : is(n) ? n : null
}

function os(component) {
    return Number.isNaN(component) ? 0 : component
}
const B1 = component => {
    const {
        className: nextSibling,
        target: parentNode
    } = component, n = q(null), [i, o] = ie(null), [a, s] = ie([]), [d, f] = ie(0), [c, p] = ie(0), [v, h] = ie(0), [_, y] = ie(0), [S, w] = ie(!1), x = {
        left: d,
        top: c,
        width: v,
        height: _,
        borderRadius: a.map(I => `${I}px`).join(" ")
    };
    i && (x["--wave-color"] = i);

    function R() {
        const I = getComputedStyle(parentNode);
        o(F1(parentNode));
        const E = I.position === "static",
            {
                borderLeftWidth: N,
                borderTopWidth: C
            } = I;
        f(E ? parentNode.offsetLeft : os(-parseFloat(N))), p(E ? parentNode.offsetTop : os(-parseFloat(C))), h(parentNode.offsetWidth), y(parentNode.offsetHeight);
        const {
            borderTopLeftRadius: T,
            borderTopRightRadius: D,
            borderBottomLeftRadius: F,
            borderBottomRightRadius: B
        } = I;
        s([T, D, B, F].map(k => os(parseFloat(k))))
    }
    return be(() => {
        if (parentNode) {
            const I = Ur(() => {
                R(), w(!0)
            });
            let E;
            return typeof ResizeObserver < "u" && (E = new ResizeObserver(R), E.observe(parentNode)), () => {
                Ur.cancel(I), E == null || E.disconnect()
            }
        }
    }, []), S ? createElement(da, {
        visible: !0,
        motionAppear: !0,
        motionName: "wave-motion",
        motionDeadline: 5e3,
        onAppearEnd: (I, E) => {
            var N;
            if (E.deadline || E.propertyName === "opacity") {
                const C = (N = n.current) === null || N === void 0 ? void 0 : N.parentElement;
                N1(C).then(() => {
                    C == null || C.remove()
                })
            }
            return !1
        }
    }, I => {
        let {
            className: E
        } = I;
        return createElement("div", {
            ref: n,
            className: he(nextSibling, E),
            style: x
        })
    }) : null
};

function z1(component, nextSibling) {
    const parentNode = document.createElement("div");
    parentNode.style.position = "absolute", parentNode.style.left = "0px", parentNode.style.top = "0px", component == null || component.insertBefore(parentNode, component == null ? void 0 : component.firstChild), I1(createElement(B1, {
        target: component,
        className: nextSibling
    }), parentNode)
}

function j1(component, nextSibling) {
    function parentNode() {
        const n = component.current;
        z1(n, nextSibling)
    }
    return parentNode
}
const H1 = component => {
        const {
            children: nextSibling,
            disabled: parentNode
        } = component, {
            getPrefixCls: n
        } = Be(ki), i = q(null), o = n("wave"), [, a] = P1(o), s = j1(i, he(o, a));
        if (vt.useEffect(() => {
                const f = i.current;
                if (!f || f.nodeType !== 1 || parentNode) return;
                const c = p => {
                    p.target.tagName === "INPUT" || !$h(p.target) || !f.getAttribute || f.getAttribute("disabled") || f.disabled || f.className.includes("disabled") || f.className.includes("-leave") || s()
                };
                return f.addEventListener("click", c, !0), () => {
                    f.removeEventListener("click", c, !0)
                }
            }, [parentNode]), !vt.isValidElement(nextSibling)) return nextSibling ?? null;
        const d = Ti(nextSibling) ? oa(nextSibling.ref, i) : i;
        return Uc(nextSibling, {
            ref: d
        })
    },
    U1 = H1;
globalThis && globalThis.__rest;
const $1 = gt(null),
    W1 = component => {
        let {
            children: nextSibling
        } = component;
        return createElement($1.Provider, {
            value: null
        }, nextSibling)
    },
    G1 = (component, nextSibling, parentNode) => parentNode !== void 0 ? parentNode : `${component}-${nextSibling}`;
var Wh = gt(null),
    Ve = Et() ? Jr : be,
    Du = function(nextSibling, parentNode) {
        var n = q(!0);
        Ve(function() {
            if (!n.current) return nextSibling()
        }, parentNode), Ve(function() {
            return n.current = !1,
                function() {
                    n.current = !0
                }
        }, [])
    },
    Fu = [];

function J1(component, nextSibling) {
    var parentNode = ie(function() {
            if (!Et()) return null;
            var _ = document.createElement("div");
            return _
        }),
        n = X(parentNode, 1),
        i = n[0],
        o = q(!1),
        a = Be(Wh),
        s = ie(Fu),
        d = X(s, 2),
        f = d[0],
        c = d[1],
        p = a || (o.current ? void 0 : function(_) {
            c(function(y) {
                var S = [_].concat(Dt(y));
                return S
            })
        });

    function v() {
        i.parentElement || document.body.appendChild(i), o.current = !0
    }

    function h() {
        var _;
        (_ = i.parentElement) === null || _ === void 0 || _.removeChild(i), o.current = !1
    }
    return Ve(function() {
        return component ? a ? a(v) : v() : h(), h
    }, [component]), Ve(function() {
        f.length && (f.forEach(function(_) {
            return _()
        }), c(Fu))
    }, [f]), [i, p]
}
var as;

function K1(component) {
    if (typeof document > "u") return 0;
    if (component || as === void 0) {
        var nextSibling = document.createElement("div");
        nextSibling.style.width = "100%", nextSibling.style.height = "200px";
        var parentNode = document.createElement("div"),
            n = parentNode.style;
        n.position = "absolute", n.top = "0", n.left = "0", n.pointerEvents = "none", n.visibility = "hidden", n.width = "200px", n.height = "150px", n.overflow = "hidden", parentNode.appendChild(nextSibling), document.body.appendChild(parentNode);
        var i = nextSibling.offsetWidth;
        parentNode.style.overflow = "scroll";
        var o = nextSibling.offsetWidth;
        i === o && (o = parentNode.clientWidth), document.body.removeChild(parentNode), as = i - o
    }
    return as
}

function Q1() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth
}
var Y1 = "rc-util-locker-".concat(Date.now()),
    Bu = 0;

function V1(component) {
    var nextSibling = !!component,
        parentNode = ie(function() {
            return Bu += 1, "".concat(Y1, "_").concat(Bu)
        }),
        n = X(parentNode, 1),
        i = n[0];
    Ve(function() {
        if (nextSibling) {
            var o = K1(),
                a = Q1();
            pi(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), i)
        } else Bo(i);
        return function() {
            Bo(i)
        }
    }, [nextSibling, i])
}
var zu = !1;

function Z1(component) {
    return typeof component == "boolean" && (zu = component), zu
}
var ju = function(nextSibling) {
        return nextSibling === !1 ? !1 : !Et() || !nextSibling ? null : typeof nextSibling == "string" ? document.querySelector(nextSibling) : typeof nextSibling == "function" ? nextSibling() : nextSibling
    },
    Gh = Ke(function(component, nextSibling) {
        var parentNode = component.open,
            n = component.autoLock,
            i = component.getContainer;
        component.debug;
        var o = component.autoDestroy,
            a = o === void 0 ? !0 : o,
            s = component.children,
            d = ie(parentNode),
            f = X(d, 2),
            c = f[0],
            p = f[1],
            v = c || parentNode;
        be(function() {
            (a || parentNode) && p(parentNode)
        }, [parentNode, a]);
        var h = ie(function() {
                return ju(i)
            }),
            _ = X(h, 2),
            y = _[0],
            S = _[1];
        be(function() {
            var B = ju(i);
            S(B ?? null)
        });
        var w = J1(v && !y),
            x = X(w, 2),
            R = x[0],
            I = x[1],
            E = y ?? R;
        V1(n && parentNode && Et() && (E === R || E === document.body));
        var N = null;
        if (s && Ti(s) && nextSibling) {
            var C = s;
            N = C.ref
        }
        var T = Gd(N, nextSibling);
        if (!v || !Et() || y === void 0) return null;
        var D = E === !1 || Z1(),
            F = s;
        return nextSibling && (F = pr(s, {
            ref: T
        })), createElement(Wh.Provider, {
            value: I
        }, D ? F : yc(F, E))
    });

function X1() {
    var component = K({}, Sc);
    return component.useId
}
var Hu = 0;

function q1(component) {
    var nextSibling = ie("ssr-id"),
        parentNode = X(nextSibling, 2),
        n = parentNode[0],
        i = parentNode[1],
        o = X1(),
        a = o == null ? void 0 : o();
    return be(function() {
        if (!o) {
            var s = Hu;
            Hu += 1, i("rc_unique_".concat(s))
        }
    }, []), component || a || n
}
const eb = component => ({
        animationDuration: component,
        animationFillMode: "both"
    }),
    tb = component => ({
        animationDuration: component,
        animationFillMode: "both"
    }),
    rb = function(component, nextSibling, parentNode, n) {
        const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
        return {
            [`
      ${o}${component}-enter,
      ${o}${component}-appear
    `]: Object.assign(Object.assign({}, eb(n)), {
                animationPlayState: "paused"
            }),
            [`${o}${component}-leave`]: Object.assign(Object.assign({}, tb(n)), {
                animationPlayState: "paused"
            }),
            [`
      ${o}${component}-enter${component}-enter-active,
      ${o}${component}-appear${component}-appear-active
    `]: {
                animationName: nextSibling,
                animationPlayState: "running"
            },
            [`${o}${component}-leave${component}-leave-active`]: {
                animationName: parentNode,
                animationPlayState: "running",
                pointerEvents: "none"
            }
        }
    },
    nb = new mt("antZoomIn", {
        "0%": {
            transform: "scale(0.2)",
            opacity: 0
        },
        "100%": {
            transform: "scale(1)",
            opacity: 1
        }
    }),
    ib = new mt("antZoomOut", {
        "0%": {
            transform: "scale(1)"
        },
        "100%": {
            transform: "scale(0.2)",
            opacity: 0
        }
    }),
    Uu = new mt("antZoomBigIn", {
        "0%": {
            transform: "scale(0.8)",
            opacity: 0
        },
        "100%": {
            transform: "scale(1)",
            opacity: 1
        }
    }),
    $u = new mt("antZoomBigOut", {
        "0%": {
            transform: "scale(1)"
        },
        "100%": {
            transform: "scale(0.8)",
            opacity: 0
        }
    }),
    ob = new mt("antZoomUpIn", {
        "0%": {
            transform: "scale(0.8)",
            transformOrigin: "50% 0%",
            opacity: 0
        },
        "100%": {
            transform: "scale(1)",
            transformOrigin: "50% 0%"
        }
    }),
    ab = new mt("antZoomUpOut", {
        "0%": {
            transform: "scale(1)",
            transformOrigin: "50% 0%"
        },
        "100%": {
            transform: "scale(0.8)",
            transformOrigin: "50% 0%",
            opacity: 0
        }
    }),
    sb = new mt("antZoomLeftIn", {
        "0%": {
            transform: "scale(0.8)",
            transformOrigin: "0% 50%",
            opacity: 0
        },
        "100%": {
            transform: "scale(1)",
            transformOrigin: "0% 50%"
        }
    }),
    cb = new mt("antZoomLeftOut", {
        "0%": {
            transform: "scale(1)",
            transformOrigin: "0% 50%"
        },
        "100%": {
            transform: "scale(0.8)",
            transformOrigin: "0% 50%",
            opacity: 0
        }
    }),
    lb = new mt("antZoomRightIn", {
        "0%": {
            transform: "scale(0.8)",
            transformOrigin: "100% 50%",
            opacity: 0
        },
        "100%": {
            transform: "scale(1)",
            transformOrigin: "100% 50%"
        }
    }),
    ub = new mt("antZoomRightOut", {
        "0%": {
            transform: "scale(1)",
            transformOrigin: "100% 50%"
        },
        "100%": {
            transform: "scale(0.8)",
            transformOrigin: "100% 50%",
            opacity: 0
        }
    }),
    fb = new mt("antZoomDownIn", {
        "0%": {
            transform: "scale(0.8)",
            transformOrigin: "50% 100%",
            opacity: 0
        },
        "100%": {
            transform: "scale(1)",
            transformOrigin: "50% 100%"
        }
    }),
    db = new mt("antZoomDownOut", {
        "0%": {
            transform: "scale(1)",
            transformOrigin: "50% 100%"
        },
        "100%": {
            transform: "scale(0.8)",
            transformOrigin: "50% 100%",
            opacity: 0
        }
    }),
    hb = {
        zoom: {
            inKeyframes: nb,
            outKeyframes: ib
        },
        "zoom-big": {
            inKeyframes: Uu,
            outKeyframes: $u
        },
        "zoom-big-fast": {
            inKeyframes: Uu,
            outKeyframes: $u
        },
        "zoom-left": {
            inKeyframes: sb,
            outKeyframes: cb
        },
        "zoom-right": {
            inKeyframes: lb,
            outKeyframes: ub
        },
        "zoom-up": {
            inKeyframes: ob,
            outKeyframes: ab
        },
        "zoom-down": {
            inKeyframes: fb,
            outKeyframes: db
        }
    },
    vb = (component, nextSibling) => {
        const {
            antCls: parentNode
        } = component, n = `${parentNode}-${nextSibling}`, {
            inKeyframes: i,
            outKeyframes: o
        } = hb[nextSibling];
        return [rb(n, i, o, nextSibling === "zoom-big-fast" ? component.motionDurationFast : component.motionDurationMid), {
            [`
        ${n}-enter,
        ${n}-appear
      `]: {
                transform: "scale(0)",
                opacity: 0,
                animationTimingFunction: component.motionEaseOutCirc,
                "&-prepare": {
                    transform: "none"
                }
            },
            [`${n}-leave`]: {
                animationTimingFunction: component.motionEaseInOutCirc
            }
        }]
    };

function ss(component) {
    return component !== void 0
}

function Jh(component, nextSibling) {
    var parentNode = nextSibling || {},
        n = parentNode.defaultValue,
        i = parentNode.value,
        o = parentNode.onChange,
        a = parentNode.postState,
        s = An(function() {
            return ss(i) ? i : ss(n) ? typeof n == "function" ? n() : n : typeof component == "function" ? component() : component
        }),
        d = X(s, 2),
        f = d[0],
        c = d[1],
        p = i !== void 0 ? i : f,
        v = a ? a(p) : p,
        h = Wt(o),
        _ = An([p]),
        y = X(_, 2),
        S = y[0],
        w = y[1];
    Du(function() {
        var R = S[0];
        f !== R && h(f, R)
    }, [S]), Du(function() {
        ss(i) || c(i)
    }, [i]);
    var x = Wt(function(R, I) {
        c(R, I), w([p], I)
    });
    return [v, x]
}
const pb = function() {
    if (typeof navigator > "u" || typeof window > "u") return !1;
    var component = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(component) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|parentNode |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(component|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|nextSibling)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|nextSibling)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(nextSibling|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|listenInput(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|nextSibling(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|nextSibling)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|nextSibling-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(component == null ? void 0 : component.substr(0, 4))
};
var Wu = gt(null);

function Gu(component) {
    return component ? Array.isArray(component) ? component : [component] : []
}

function gb(component, nextSibling, parentNode, n) {
    return $component(function() {
        var i = Gu(parentNode ?? nextSibling),
            o = Gu(n ?? nextSibling),
            a = new Set(i),
            s = new Set(o);
        return component && (a.has("hover") && (a.delete("hover"), a.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [a, s]
    }, [component, nextSibling, parentNode, n])
}

function mb() {
    var component = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        nextSibling = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
        parentNode = arguments.length > 2 ? arguments[2] : void 0;
    return parentNode ? component[0] === nextSibling[0] : component[0] === nextSibling[0] && component[1] === nextSibling[1]
}

function _b(component, nextSibling, parentNode, n) {
    for (var i = parentNode.points, o = Object.keys(component), a = 0; a < o.length; a += 1) {
        var s, d = o[a];
        if (mb((s = component[d]) === null || s === void 0 ? void 0 : s.points, i, n)) return "".concat(nextSibling, "-placement-").concat(d)
    }
    return ""
}

function Ju(component, nextSibling, parentNode, n) {
    return nextSibling || (parentNode ? {
        motionName: "".concat(component, "-").concat(parentNode)
    } : n ? {
        motionName: n
    } : null)
}

function Ii(component) {
    return component.ownerDocument.defaultView
}

function ec(component) {
    for (var nextSibling = [], parentNode = component == null ? void 0 : component.parentElement, n = ["hidden", "scroll", "clip", "auto"]; parentNode;) {
        var i = Ii(parentNode).getComputedStyle(parentNode),
            o = i.overflowX,
            a = i.overflowY,
            s = i.overflow;
        [o, a, s].some(function(d) {
            return n.includes(d)
        }) && nextSibling.push(parentNode), parentNode = parentNode.parentElement
    }
    return nextSibling
}

function yi(component) {
    var nextSibling = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    return Number.isNaN(component) ? nextSibling : component
}

function Yn(component) {
    return yi(parseFloat(component), 0)
}

function Ku(component, nextSibling) {
    var parentNode = K({}, component);
    return (nextSibling || []).forEach(function(n) {
        if (!(n instanceof HTMLBodyElement)) {
            var i = Ii(n).getComputedStyle(n),
                o = i.overflow,
                a = i.overflowClipMargin,
                s = i.borderTopWidth,
                d = i.borderBottomWidth,
                f = i.borderLeftWidth,
                c = i.borderRightWidth,
                p = n.getBoundingClientRect(),
                v = n.offsetHeight,
                h = n.clientHeight,
                _ = n.offsetWidth,
                y = n.clientWidth,
                S = Yn(s),
                w = Yn(d),
                x = Yn(f),
                R = Yn(c),
                I = yi(Math.round(p.width / _ * 1e3) / 1e3),
                E = yi(Math.round(p.height / v * 1e3) / 1e3),
                N = (_ - y - x - R) * I,
                C = (v - h - S - w) * E,
                T = S * E,
                D = w * E,
                F = x * I,
                B = R * I,
                k = 0,
                A = 0;
            if (o === "clip") {
                var M = Yn(a);
                k = M * I, A = M * E
            }
            var P = p.x + F - k,
                j = p.y + T - A,
                H = P + p.width + 2 * k - F - B - N,
                G = j + p.height + 2 * A - T - D - C;
            parentNode.left = Math.max(parentNode.left, P), parentNode.top = Math.max(parentNode.top, j), parentNode.right = Math.min(parentNode.right, H), parentNode.bottom = Math.min(parentNode.bottom, G)
        }
    }), parentNode
}

function Qu(component) {
    var nextSibling = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        parentNode = "".concat(nextSibling),
        n = parentNode.match(/^(.*)\%$/);
    return n ? component * (parseFloat(n[1]) / 100) : parseFloat(parentNode)
}

function Yu(component, nextSibling) {
    var parentNode = nextSibling || [],
        n = X(parentNode, 2),
        i = n[0],
        o = n[1];
    return [Qu(component.width, i), Qu(component.height, o)]
}

function Vu() {
    var component = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return [component[0], component[1]]
}

function cn(component, nextSibling) {
    var parentNode = nextSibling[0],
        n = nextSibling[1],
        i, o;
    return parentNode === "nextSibling" ? o = component.y : parentNode === "b" ? o = component.y + component.height : o = component.y + component.height / 2, n === "l" ? i = component.x : n === "parentNode" ? i = component.x + component.width : i = component.x + component.width / 2, {
        x: i,
        y: o
    }
}

function ir(component, nextSibling) {
    var parentNode = {
        nextSibling: "b",
        b: "nextSibling",
        l: "parentNode",
        parentNode: "l"
    };
    return component.map(function(n, i) {
        return i === nextSibling ? parentNode[n] || "c" : n
    }).join("")
}

function bb(component, nextSibling, parentNode, n, i, o, a) {
    var s = ie({
            ready: !1,
            offsetX: 0,
            offsetY: 0,
            arrowX: 0,
            arrowY: 0,
            scaleX: 1,
            scaleY: 1,
            align: i[n] || {}
        }),
        d = X(s, 2),
        f = d[0],
        c = d[1],
        p = q(0),
        v = $component(function() {
            return nextSibling ? ec(nextSibling) : []
        }, [nextSibling]),
        h = q({}),
        _ = function() {
            h.current = {}
        };
    component || _();
    var y = Wt(function() {
            if (nextSibling && parentNode && component) {
                let Ge = function(Tr, tr) {
                        var rr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : U,
                            Ui = F.x + Tr,
                            $i = F.y + tr,
                            Wi = Ui + Z,
                            Gi = $i + Q,
                            Wn = Math.max(Ui, rr.left),
                            Ji = Math.max($i, rr.top),
                            Ca = Math.min(Wi, rr.right),
                            Ta = Math.min(Gi, rr.bottom);
                        return Math.max(0, (Ca - Wn) * (Ta - Ji))
                    },
                    er = function() {
                        _r = F.y + Ne, br = _r + Q, Zt = F.x + Re, yr = Zt + Z
                    };
                var t0 = Ge,
                    $c = er,
                    x = nextSibling,
                    R = x.style.left,
                    I = x.style.top,
                    E = x.ownerDocument,
                    N = Ii(x),
                    C = K(K({}, i[n]), o);
                x.style.left = "0", x.style.top = "0";
                var T;
                if (Array.isArray(parentNode)) T = {
                    x: parentNode[0],
                    y: parentNode[1],
                    width: 0,
                    height: 0
                };
                else {
                    var D = parentNode.getBoundingClientRect();
                    T = {
                        x: D.x,
                        y: D.y,
                        width: D.width,
                        height: D.height
                    }
                }
                var F = x.getBoundingClientRect(),
                    B = N.getComputedStyle(x),
                    k = B.width,
                    A = B.height,
                    M = E.documentElement,
                    P = M.clientWidth,
                    j = M.clientHeight,
                    H = M.scrollWidth,
                    G = M.scrollHeight,
                    ne = M.scrollTop,
                    ee = M.scrollLeft,
                    Q = F.height,
                    Z = F.width,
                    ve = T.height,
                    me = T.width,
                    Ae = {
                        left: 0,
                        top: 0,
                        right: P,
                        bottom: j
                    },
                    He = {
                        left: -ee,
                        top: -ne,
                        right: H - ee,
                        bottom: G - ne
                    },
                    J = C.htmlRegion,
                    te = "visible",
                    ce = "visibleFirst";
                J !== "scroll" && J !== ce && (J = te);
                var le = J === ce,
                    pe = Ku(He, v),
                    we = Ku(Ae, v),
                    U = J === te ? we : pe,
                    De = le ? we : U;
                x.style.left = R, x.style.top = I;
                var Fe = yi(Math.round(Z / parseFloat(k) * 1e3) / 1e3),
                    g = yi(Math.round(Q / parseFloat(A) * 1e3) / 1e3);
                if (Fe === 0 || g === 0 || Po(parentNode) && !$h(parentNode)) return;
                var l = C.offset,
                    u = C.targetOffset,
                    m = Yu(F, l),
                    b = X(m, 2),
                    O = b[0],
                    L = b[1],
                    re = Yu(T, u),
                    ue = X(re, 2),
                    ae = ue[0],
                    Me = ue[1];
                T.x -= ae, T.y -= Me;
                var ye = C.points || [],
                    Bt = X(ye, 2),
                    gr = Bt[0],
                    _t = Bt[1],
                    zt = Vu(_t),
                    tt = Vu(gr),
                    mr = cn(T, zt),
                    rt = cn(F, tt),
                    nt = K({}, C),
                    Re = mr.x - rt.x + O,
                    Ne = mr.y - rt.y + L,
                    Ct = Ge(Re, Ne),
                    Xr = Ge(Re, Ne, we),
                    Dn = cn(T, ["nextSibling", "l"]),
                    Oi = cn(F, ["nextSibling", "l"]),
                    Fn = cn(T, ["b", "parentNode"]),
                    qe = cn(F, ["b", "parentNode"]),
                    qr = C.overflow || {},
                    Bn = qr.adjustX,
                    Ri = qr.adjustY,
                    zn = qr.shiftX,
                    jn = qr.shiftY,
                    Tt = function(tr) {
                        return typeof tr == "boolean" ? tr : tr >= 0
                    },
                    _r, br, Zt, yr;
                er();
                var Hn = Tt(Ri),
                    Ni = tt[0] === zt[0];
                if (Hn && tt[0] === "nextSibling" && (br > De.bottom || h.current.bt)) {
                    var Xt = Ne;
                    Ni ? Xt -= Q - ve : Xt = Dn.y - qe.y - L;
                    var en = Ge(Re, Xt),
                        Li = Ge(Re, Xt, we);
                    en > Ct || en === Ct && (!le || Li >= Xr) ? (h.current.bt = !0, Ne = Xt, nt.points = [ir(tt, 0), ir(zt, 0)]) : h.current.bt = !1
                }
                if (Hn && tt[0] === "b" && (_r < De.top || h.current.tb)) {
                    var wr = Ne;
                    Ni ? wr += Q - ve : wr = Fn.y - Oi.y - L;
                    var Un = Ge(Re, wr),
                        Pi = Ge(Re, wr, we);
                    Un > Ct || Un === Ct && (!le || Pi >= Xr) ? (h.current.tb = !0, Ne = wr, nt.points = [ir(tt, 0), ir(zt, 0)]) : h.current.tb = !1
                }
                var Di = Tt(Bn),
                    tn = tt[1] === zt[1];
                if (Di && tt[1] === "l" && (yr > De.right || h.current.rl)) {
                    var xr = Re;
                    tn ? xr -= Z - me : xr = Dn.x - qe.x - O;
                    var ct = Ge(xr, Ne),
                        ga = Ge(xr, Ne, we);
                    ct > Ct || ct === Ct && (!le || ga >= Xr) ? (h.current.rl = !0, Re = xr, nt.points = [ir(tt, 1), ir(zt, 1)]) : h.current.rl = !1
                }
                if (Di && tt[1] === "parentNode" && (Zt < De.left || h.current.lr)) {
                    var Sr = Re;
                    tn ? Sr += Z - me : Sr = Fn.x - Oi.x - O;
                    var Fi = Ge(Sr, Ne),
                        ma = Ge(Sr, Ne, we);
                    Fi > Ct || Fi === Ct && (!le || ma >= Xr) ? (h.current.lr = !0, Re = Sr, nt.points = [ir(tt, 1), ir(zt, 1)]) : h.current.lr = !1
                }
                er();
                var Er = zn === !0 ? 0 : zn;
                typeof Er == "number" && (Zt < U.left && (Re -= Zt - U.left, T.x + me < U.left + Er && (Re += T.x - U.left + me - Er)), yr > U.right && (Re -= yr - U.right, T.x > U.right - Er && (Re += T.x - U.right + Er)));
                var Ar = jn === !0 ? 0 : jn;
                typeof Ar == "number" && (_r < U.top && (Ne -= _r - U.top, T.y + ve < U.top + Ar && (Ne += T.y - U.top + ve - Ar)), br > U.bottom && (Ne -= br - U.bottom, T.y > U.bottom - Ar && (Ne += T.y - U.bottom + Ar)));
                var $n = F.x + Re,
                    rn = $n + Z,
                    Cr = F.y + Ne,
                    qt = Cr + Q,
                    Bi = T.x,
                    _a = Bi + me,
                    zi = T.y,
                    ba = zi + ve,
                    ji = Math.max($n, Bi),
                    ya = Math.min(rn, _a),
                    wa = (ji + ya) / 2,
                    xa = wa - $n,
                    Hi = Math.max(Cr, zi),
                    Sa = Math.min(qt, ba),
                    Ea = (Hi + Sa) / 2,
                    Aa = Ea - Cr;
                a == null || a(nextSibling, nt), c({
                    ready: !0,
                    offsetX: Re / Fe,
                    offsetY: Ne / g,
                    arrowX: xa / Fe,
                    arrowY: Aa / g,
                    scaleX: Fe,
                    scaleY: g,
                    align: nt
                })
            }
        }),
        S = function() {
            p.current += 1;
            var R = p.current;
            Promise.resolve().then(function() {
                p.current === R && y()
            })
        },
        w = function() {
            c(function(R) {
                return K(K({}, R), {}, {
                    ready: !1
                })
            })
        };
    return Ve(w, [n]), Ve(function() {
        component || w()
    }, [component]), [f.ready, f.offsetX, f.offsetY, f.arrowX, f.arrowY, f.scaleX, f.scaleY, f.align, S]
}

function yb(component, nextSibling, parentNode, n) {
    Ve(function() {
        if (component && nextSibling && parentNode) {
            let p = function() {
                n()
            };
            var c = p,
                i = nextSibling,
                o = parentNode,
                a = ec(i),
                s = ec(o),
                d = Ii(o),
                f = new Set([d].concat(Dt(a), Dt(s)));
            return f.forEach(function(v) {
                    v.addEventListener("scroll", p, {
                        passive: !0
                    })
                }), d.addEventListener("resize", p, {
                    passive: !0
                }), n(),
                function() {
                    f.forEach(function(v) {
                        v.removeEventListener("scroll", p), d.removeEventListener("resize", p)
                    })
                }
        }
    }, [component, nextSibling, parentNode])
}

function wb(component, nextSibling, parentNode, n, i, o, a, s) {
    var d = q(component),
        f = q(!1);
    d.current !== component && (f.current = !0, d.current = component), be(function() {
        var c = Ur(function() {
            f.current = !1
        });
        return function() {
            Ur.cancel(c)
        }
    }, [component]), be(function() {
        if (nextSibling && n && (!i || o)) {
            var c = !1,
                p = function(S) {
                    var w = S.target;
                    c = a(w)
                },
                v = function(S) {
                    var w = S.target;
                    !f.current && d.current && !c && !a(w) && s(!1)
                },
                h = Ii(n);
            h.addEventListener("mousedown", p), h.addEventListener("click", v);
            var _ = Ho(parentNode);
            return _ && (_.addEventListener("mousedown", p), _.addEventListener("click", v)),
                function() {
                    h.removeEventListener("mousedown", p), h.removeEventListener("click", v), _ && (_.removeEventListener("mousedown", p), _.removeEventListener("click", v))
                }
        }
    }, [nextSibling, parentNode, n, i, o])
}

function xb(component) {
    var nextSibling = component.prefixCls,
        parentNode = component.align,
        n = component.arrow,
        i = component.arrowPos,
        o = n || {},
        a = o.className,
        s = o.content,
        d = i.x,
        f = d === void 0 ? 0 : d,
        c = i.y,
        p = c === void 0 ? 0 : c,
        v = q();
    if (!parentNode || !parentNode.points) return null;
    var h = {
        position: "absolute"
    };
    if (parentNode.autoArrow !== !1) {
        var _ = parentNode.points[0],
            y = parentNode.points[1],
            S = _[0],
            w = _[1],
            x = y[0],
            R = y[1];
        S === x || !["nextSibling", "b"].includes(S) ? h.top = p : S === "nextSibling" ? h.top = 0 : h.bottom = 0, w === R || !["l", "parentNode"].includes(w) ? h.left = f : w === "l" ? h.left = 0 : h.right = 0
    }
    return createElement("div", {
        ref: v,
        className: he("".concat(nextSibling, "-arrow"), a),
        style: h
    }, s)
}

function Sb(component) {
    var nextSibling = component.prefixCls,
        parentNode = component.open,
        n = component.zIndex,
        i = component.mask,
        o = component.motion;
    return i ? createElement(da, St({}, o, {
        motionAppear: !0,
        visible: parentNode,
        removeOnLeave: !0
    }), function(a) {
        var s = a.className;
        return createElement("div", {
            style: {
                zIndex: n
            },
            className: he("".concat(nextSibling, "-mask"), s)
        })
    }) : null
}
var Eb = _c(function(component) {
        var nextSibling = component.children;
        return nextSibling
    }, function(component, nextSibling) {
        return nextSibling.cache
    }),
    Ab = Ke(function(component, nextSibling) {
        var parentNode = component.popup,
            n = component.className,
            i = component.prefixCls,
            o = component.style,
            a = component.target,
            s = component.onVisibleChanged,
            d = component.open,
            f = component.keepDom,
            c = component.onClick,
            p = component.mask,
            v = component.arrow,
            h = component.arrowPos,
            _ = component.align,
            y = component.motion,
            S = component.maskMotion,
            w = component.forceRender,
            x = component.getPopupContainer,
            R = component.autoDestroy,
            I = component.portal,
            E = component.zIndex,
            N = component.onMouseEnter,
            C = component.onMouseLeave,
            T = component.ready,
            D = component.offsetX,
            F = component.offsetY,
            B = component.onAlign,
            k = component.onPrepare,
            A = component.stretch,
            M = component.targetWidth,
            P = component.targetHeight,
            j = typeof parentNode == "function" ? parentNode() : parentNode,
            H = d || f,
            G = (x == null ? void 0 : x.length) > 0,
            ne = ie(!x || !G),
            ee = X(ne, 2),
            Q = ee[0],
            Z = ee[1];
        if (Ve(function() {
                !Q && G && a && Z(!0)
            }, [Q, G, a]), !Q) return null;
        var ve = T || !d ? {
                left: D,
                top: F
            } : {
                left: "-1000vw",
                top: "-1000vh"
            },
            me = {};
        return A && (A.includes("height") && P ? me.height = P : A.includes("minHeight") && P && (me.minHeight = P), A.includes("width") && M ? me.width = M : A.includes("minWidth") && M && (me.minWidth = M)), d || (me.pointerEvents = "none"), createElement(I, {
            open: w || H,
            getContainer: x && function() {
                return x(a)
            },
            autoDestroy: R
        }, createElement(Sb, {
            prefixCls: i,
            open: d,
            zIndex: E,
            mask: p,
            motion: S
        }), createElement(Mc, {
            onResize: B,
            disabled: !d
        }, function(Ae) {
            return createElement(da, St({
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                removeOnLeave: !1,
                forceRender: w,
                leavedClassName: "".concat(i, "-hidden")
            }, y, {
                onAppearPrepare: k,
                onEnterPrepare: k,
                visible: d,
                onVisibleChanged: function(J) {
                    var te;
                    y == null || (te = y.onVisibleChanged) === null || te === void 0 || te.call(y, J), s(J)
                }
            }), function(He, J) {
                var te = He.className,
                    ce = He.style,
                    le = he(i, te, n);
                return createElement("div", {
                    ref: oa(Ae, nextSibling, J),
                    className: le,
                    style: K(K(K(K({
                        "--arrow-x": "".concat(h.x || 0, "px"),
                        "--arrow-y": "".concat(h.y || 0, "px")
                    }, ve), me), ce), {}, {
                        boxSizing: "border-box",
                        zIndex: E
                    }, o),
                    onMouseEnter: N,
                    onMouseLeave: C,
                    onClick: c
                }, v && createElement(xb, {
                    prefixCls: i,
                    arrow: v,
                    arrowPos: h,
                    align: _
                }), createElement(Eb, {
                    cache: !d
                }, j))
            })
        }))
    }),
    Cb = Ke(function(component, nextSibling) {
        var parentNode = component.children,
            n = component.getTriggerDOMNode,
            i = Ti(parentNode),
            o = Qe(function(s) {
                Tc(nextSibling, n ? n(s) : s)
            }, [n]),
            a = Gd(o, parentNode.ref);
        return i ? pr(parentNode, {
            ref: a
        }) : parentNode
    }),
    Tb = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];

function kb() {
    var component = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gh,
        nextSibling = Ke(function(parentNode, n) {
            var i = parentNode.prefixCls,
                o = i === void 0 ? "rc-trigger-popup" : i,
                a = parentNode.children,
                s = parentNode.action,
                d = s === void 0 ? "hover" : s,
                f = parentNode.showAction,
                c = parentNode.hideAction,
                p = parentNode.popupVisible,
                v = parentNode.defaultPopupVisible,
                h = parentNode.onPopupVisibleChange,
                _ = parentNode.afterPopupVisibleChange,
                y = parentNode.mouseEnterDelay,
                S = parentNode.mouseLeaveDelay,
                w = S === void 0 ? .1 : S,
                x = parentNode.focusDelay,
                R = parentNode.blurDelay,
                I = parentNode.mask,
                E = parentNode.maskClosable,
                N = E === void 0 ? !0 : E,
                C = parentNode.getPopupContainer,
                T = parentNode.forceRender,
                D = parentNode.autoDestroy,
                F = parentNode.destroyPopupOnHide,
                B = parentNode.popup,
                k = parentNode.popupClassName,
                A = parentNode.popupStyle,
                M = parentNode.popupPlacement,
                P = parentNode.builtinPlacements,
                j = P === void 0 ? {} : P,
                H = parentNode.popupAlign,
                G = parentNode.zIndex,
                ne = parentNode.stretch,
                ee = parentNode.getPopupClassNameFromAlign,
                Q = parentNode.alignPoint,
                Z = parentNode.onPopupClick,
                ve = parentNode.onPopupAlign,
                me = parentNode.arrow,
                Ae = parentNode.popupMotion,
                He = parentNode.maskMotion,
                J = parentNode.popupTransitionName,
                te = parentNode.popupAnimation,
                ce = parentNode.maskTransitionName,
                le = parentNode.maskAnimation,
                pe = parentNode.className,
                we = parentNode.getTriggerDOMNode,
                U = $parentNode(parentNode, Tb),
                De = D || F || !1,
                Fe = ie(!1),
                g = X(Fe, 2),
                l = g[0],
                u = g[1];
            Ve(function() {
                u(pb())
            }, []);
            var m = q({}),
                b = Be(Wu),
                O = $component(function() {
                    return {
                        registerSubPopup: function(oe, xe) {
                            m.current[oe] = xe, b == null || b.registerSubPopup(oe, xe)
                        }
                    }
                }, [b]),
                L = q1(),
                re = ie(null),
                ue = X(re, 2),
                ae = ue[0],
                Me = ue[1],
                ye = Wt(function(Y) {
                    Po(Y) && ae !== Y && Me(Y), b == null || b.registerSubPopup(L, Y)
                }),
                Bt = ie(null),
                gr = X(Bt, 2),
                _t = gr[0],
                zt = gr[1],
                tt = Wt(function(Y) {
                    Po(Y) && _t !== Y && zt(Y)
                }),
                mr = bc.only(a),
                rt = (mr == null ? void 0 : mr.props) || {},
                nt = {},
                Re = Wt(function(Y) {
                    var oe, xe, Ie = _t;
                    return (Ie == null ? void 0 : Ie.contains(Y)) || ((oe = Ho(Ie)) === null || oe === void 0 ? void 0 : oe.host) === Y || Y === Ie || (ae == null ? void 0 : ae.contains(Y)) || ((xe = Ho(ae)) === null || xe === void 0 ? void 0 : xe.host) === Y || Y === ae || Object.values(m.current).some(function(Ee) {
                        return (Ee == null ? void 0 : Ee.contains(Y)) || Y === Ee
                    })
                }),
                Ne = Ju(o, Ae, te, J),
                Ct = Ju(o, He, le, ce),
                Xr = ie(v || !1),
                Dn = X(Xr, 2),
                Oi = Dn[0],
                Fn = Dn[1],
                qe = p ?? Oi,
                qr = Wt(function(Y) {
                    p === void 0 && Fn(Y)
                });
            Ve(function() {
                Fn(p || !1)
            }, [p]);
            var Bn = q(qe);
            Bn.current = qe;
            var Ri = Wt(function(Y) {
                    qe !== Y && (qr(Y), h == null || h(Y))
                }),
                zn = q(),
                jn = function() {
                    clearTimeout(zn.current)
                },
                Tt = function(oe) {
                    var xe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                    jn(), xe === 0 ? Ri(oe) : zn.current = setTimeout(function() {
                        Ri(oe)
                    }, xe * 1e3)
                };
            be(function() {
                return jn
            }, []);
            var _r = ie(!1),
                br = X(_r, 2),
                Zt = br[0],
                yr = br[1],
                Hn = q(!0);
            Ve(function() {
                (!Hn.current || qe) && yr(!0), Hn.current = !0
            }, [qe]);
            var Ni = ie(null),
                Xt = X(Ni, 2),
                en = Xt[0],
                Li = Xt[1],
                wr = ie([0, 0]),
                Un = X(wr, 2),
                Pi = Un[0],
                Di = Un[1],
                tn = function(oe) {
                    Di([oe.clientX, oe.clientY])
                },
                xr = bb(qe, ae, Q ? Pi : _t, M, j, H, ve),
                ct = X(xr, 9),
                ga = ct[0],
                Sr = ct[1],
                Fi = ct[2],
                ma = ct[3],
                Er = ct[4],
                Ar = ct[5],
                $n = ct[6],
                rn = ct[7],
                Cr = ct[8],
                qt = Wt(function() {
                    Zt || Cr()
                });
            yb(qe, _t, ae, qt), Ve(function() {
                qt()
            }, [Pi, M]), Ve(function() {
                qe && !(j != null && j[M]) && qt()
            }, [JSON.stringify(H)]);
            var Bi = $component(function() {
                var Y = _b(j, o, rn, Q);
                return he(Y, ee == null ? void 0 : ee(rn))
            }, [rn, ee, j, o, Q]);
            Kr(n, function() {
                return {
                    forceAlign: qt
                }
            });
            var _a = function(oe) {
                    yr(!1), Cr(), _ == null || _(oe)
                },
                zi = function() {
                    return new Promise(function(oe) {
                        Li(function() {
                            return oe
                        })
                    })
                };
            Ve(function() {
                en && (Cr(), en(), Li(null))
            }, [en]);
            var ba = ie(0),
                ji = X(ba, 2),
                ya = ji[0],
                wa = ji[1],
                xa = ie(0),
                Hi = X(xa, 2),
                Sa = Hi[0],
                Ea = Hi[1],
                Aa = function(oe, xe) {
                    if (qt(), ne) {
                        var Ie = xe.getBoundingClientRect();
                        wa(Ie.width), Ea(Ie.height)
                    }
                },
                t0 = gb(l, d, f, c),
                $c = X(t0, 2),
                Ge = $c[0],
                er = $c[1],
                Tr = function(oe, xe, Ie, Ee) {
                    nt[oe] = function(Wc) {
                        var Ki;
                        Ee == null || Ee(Wc), Tt(xe, Ie);
                        for (var ka = arguments.length, Gc = new Array(ka > 1 ? ka - 1 : 0), Qi = 1; Qi < ka; Qi++) Gc[Qi - 1] = arguments[Qi];
                        (Ki = rt[oe]) === null || Ki === void 0 || Ki.call.apply(Ki, [rt, Wc].concat(Gc))
                    }
                },
                tr = Ge.has("click"),
                rr = er.has("click") || er.has("contextMenu");
            (tr || rr) && (nt.onClick = function(Y) {
                var oe;
                Bn.current && rr ? Tt(!1) : !Bn.current && tr && (tn(Y), Tt(!0));
                for (var xe = arguments.length, Ie = new Array(xe > 1 ? xe - 1 : 0), Ee = 1; Ee < xe; Ee++) Ie[Ee - 1] = arguments[Ee];
                (oe = rt.onClick) === null || oe === void 0 || oe.call.apply(oe, [rt, Y].concat(Ie))
            }), wb(qe, rr, _t, ae, I, N, Re, Tt);
            var Ui = Ge.has("hover"),
                $i = er.has("hover"),
                Wi, Gi;
            Ui && (Tr("onMouseEnter", !0, y, function(Y) {
                tn(Y)
            }), Wi = function() {
                Tt(!0, y)
            }, Q && (nt.onMouseMove = function(Y) {
                var oe;
                (oe = rt.onMouseMove) === null || oe === void 0 || oe.call(rt, Y)
            })), $i && (Tr("onMouseLeave", !1, w), Gi = function() {
                Tt(!1, w)
            }), Ge.has("focus") && Tr("onFocus", !0, x), er.has("focus") && Tr("onBlur", !1, R), Ge.has("contextMenu") && (nt.onContextMenu = function(Y) {
                var oe;
                tn(Y), Tt(!0), Y.preventDefault();
                for (var xe = arguments.length, Ie = new Array(xe > 1 ? xe - 1 : 0), Ee = 1; Ee < xe; Ee++) Ie[Ee - 1] = arguments[Ee];
                (oe = rt.onContextMenu) === null || oe === void 0 || oe.call.apply(oe, [rt, Y].concat(Ie))
            }), pe && (nt.className = he(rt.className, pe));
            var Wn = K(K({}, rt), nt),
                Ji = {},
                Ca = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
            Ca.forEach(function(Y) {
                U[Y] && (Ji[Y] = function() {
                    for (var oe, xe = arguments.length, Ie = new Array(xe), Ee = 0; Ee < xe; Ee++) Ie[Ee] = arguments[Ee];
                    (oe = Wn[Y]) === null || oe === void 0 || oe.call.apply(oe, [Wn].concat(Ie)), U[Y].apply(U, Ie)
                })
            });
            var Ta = pr(mr, K(K({}, Wn), Ji)),
                r0 = {
                    x: ma,
                    y: Er
                },
                n0 = me ? K({}, me !== !0 ? me : {}) : null;
            return createElement(subDOM, null, createElement(Mc, {
                disabled: !qe,
                ref: tt,
                onResize: Aa
            }, createElement(Cb, {
                getTriggerDOMNode: we
            }, Ta)), createElement(Wu.Provider, {
                value: O
            }, createElement(Ab, {
                portal: component,
                ref: ye,
                prefixCls: o,
                popup: B,
                className: he(k, Bi),
                style: A,
                target: _t,
                onMouseEnter: Wi,
                onMouseLeave: Gi,
                zIndex: G,
                open: qe,
                keepDom: Zt,
                onClick: Z,
                mask: I,
                motion: Ne,
                maskMotion: Ct,
                onVisibleChanged: _a,
                onPrepare: zi,
                forceRender: T,
                autoDestroy: De,
                getPopupContainer: C,
                align: rn,
                arrow: n0,
                arrowPos: r0,
                ready: ga,
                offsetX: Sr,
                offsetY: Fi,
                onAlign: qt,
                stretch: ne,
                targetWidth: ya / Ar,
                targetHeight: Sa / $n
            })))
        });
    return nextSibling
}
const Mb = kb(Gh);
var ln = {
        shiftX: 64,
        adjustY: 1
    },
    un = {
        adjustX: 1,
        shiftY: !0
    },
    lt = [0, 0],
    Ib = {
        left: {
            points: ["cr", "cl"],
            overflow: un,
            offset: [-4, 0],
            targetOffset: lt
        },
        right: {
            points: ["cl", "cr"],
            overflow: un,
            offset: [4, 0],
            targetOffset: lt
        },
        top: {
            points: ["bc", "tc"],
            overflow: ln,
            offset: [0, -4],
            targetOffset: lt
        },
        bottom: {
            points: ["tc", "bc"],
            overflow: ln,
            offset: [0, 4],
            targetOffset: lt
        },
        topLeft: {
            points: ["bl", "tl"],
            overflow: ln,
            offset: [0, -4],
            targetOffset: lt
        },
        leftTop: {
            points: ["tr", "tl"],
            overflow: un,
            offset: [-4, 0],
            targetOffset: lt
        },
        topRight: {
            points: ["br", "tr"],
            overflow: ln,
            offset: [0, -4],
            targetOffset: lt
        },
        rightTop: {
            points: ["tl", "tr"],
            overflow: un,
            offset: [4, 0],
            targetOffset: lt
        },
        bottomRight: {
            points: ["tr", "br"],
            overflow: ln,
            offset: [0, 4],
            targetOffset: lt
        },
        rightBottom: {
            points: ["bl", "br"],
            overflow: un,
            offset: [4, 0],
            targetOffset: lt
        },
        bottomLeft: {
            points: ["tl", "bl"],
            overflow: ln,
            offset: [0, 4],
            targetOffset: lt
        },
        leftBottom: {
            points: ["br", "bl"],
            overflow: un,
            offset: [-4, 0],
            targetOffset: lt
        }
    };

function Kh(component) {
    var nextSibling = component.children,
        parentNode = component.prefixCls,
        n = component.id,
        i = component.overlayInnerStyle,
        o = component.className,
        a = component.style;
    return createElement("div", {
        className: he("".concat(parentNode, "-content"), o),
        style: a
    }, createElement("div", {
        className: "".concat(parentNode, "-inner"),
        id: n,
        role: "tooltip",
        style: i
    }, typeof nextSibling == "function" ? nextSibling() : nextSibling))
}
var Ob = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"],
    Rb = function(nextSibling, parentNode) {
        var n = nextSibling.overlayClassName,
            i = nextSibling.trigger,
            o = i === void 0 ? ["hover"] : i,
            a = nextSibling.mouseEnterDelay,
            s = a === void 0 ? 0 : a,
            d = nextSibling.mouseLeaveDelay,
            f = d === void 0 ? .1 : d,
            c = nextSibling.overlayStyle,
            p = nextSibling.prefixCls,
            v = p === void 0 ? "rc-tooltip" : p,
            h = nextSibling.children,
            _ = nextSibling.onVisibleChange,
            y = nextSibling.afterVisibleChange,
            S = nextSibling.transitionName,
            w = nextSibling.animation,
            x = nextSibling.motion,
            R = nextSibling.placement,
            I = R === void 0 ? "right" : R,
            E = nextSibling.align,
            N = E === void 0 ? {} : E,
            C = nextSibling.destroyTooltipOnHide,
            T = C === void 0 ? !1 : C,
            D = nextSibling.defaultVisible,
            F = nextSibling.getTooltipContainer,
            B = nextSibling.overlayInnerStyle;
        nextSibling.arrowContent;
        var k = nextSibling.overlay,
            A = nextSibling.id,
            M = nextSibling.showArrow,
            P = M === void 0 ? !0 : M,
            j = $parentNode(nextSibling, Ob),
            H = q(null);
        Kr(parentNode, function() {
            return H.current
        });
        var G = K({}, j);
        "visible" in nextSibling && (G.popupVisible = nextSibling.visible);
        var ne = function() {
            return createElement(Kh, {
                key: "content",
                prefixCls: v,
                id: A,
                overlayInnerStyle: B
            }, k)
        };
        return createElement(Mb, St({
            popupClassName: n,
            prefixCls: v,
            popup: ne,
            action: o,
            builtinPlacements: Ib,
            popupPlacement: I,
            ref: H,
            popupAlign: N,
            getPopupContainer: F,
            onPopupVisibleChange: _,
            afterPopupVisibleChange: y,
            popupTransitionName: S,
            popupAnimation: w,
            popupMotion: x,
            defaultPopupVisible: D,
            autoDestroy: T,
            mouseLeaveDelay: f,
            popupStyle: c,
            mouseEnterDelay: s,
            arrow: P
        }, G), h)
    };
const Nb = Ke(Rb),
    Qh = 8;

function Yh(component) {
    const nextSibling = Qh,
        {
            contentRadius: parentNode,
            limitVerticalRadius: n
        } = component,
        i = parentNode > 12 ? parentNode + 2 : 12;
    return {
        dropdownArrowOffset: i,
        dropdownArrowOffsetVertical: n ? nextSibling : i
    }
}

function fo(component, nextSibling) {
    return component ? nextSibling : {}
}

function Lb(component, nextSibling) {
    const {
        componentCls: parentNode,
        sizePopupArrow: n,
        borderRadiusXS: i,
        borderRadiusOuter: o,
        boxShadowPopoverArrow: a
    } = component, {
        colorBg: s,
        contentRadius: d = component.borderRadiusLG,
        limitVerticalRadius: f,
        arrowDistance: c = 0,
        arrowPlacement: p = {
            left: !0,
            right: !0,
            top: !0,
            bottom: !0
        }
    } = nextSibling, {
        dropdownArrowOffsetVertical: v,
        dropdownArrowOffset: h
    } = Yh({
        contentRadius: d,
        limitVerticalRadius: f
    });
    return {
        [parentNode]: Object.assign(Object.assign(Object.assign(Object.assign({
            [`${parentNode}-arrow`]: [Object.assign(Object.assign({
                position: "absolute",
                zIndex: 1,
                display: "block"
            }, T_(n, i, o, s, a)), {
                "&:before": {
                    background: s
                }
            })]
        }, fo(!!p.top, {
            [
                [`&-placement-top ${parentNode}-arrow`, `&-placement-topLeft ${parentNode}-arrow`, `&-placement-topRight ${parentNode}-arrow`].join(",")
            ]: {
                bottom: c,
                transform: "translateY(100%) rotate(180deg)"
            },
            [`&-placement-top ${parentNode}-arrow`]: {
                left: {
                    _skip_check_: !0,
                    value: "50%"
                },
                transform: "translateX(-50%) translateY(100%) rotate(180deg)"
            },
            [`&-placement-topLeft ${parentNode}-arrow`]: {
                left: {
                    _skip_check_: !0,
                    value: h
                }
            },
            [`&-placement-topRight ${parentNode}-arrow`]: {
                right: {
                    _skip_check_: !0,
                    value: h
                }
            }
        })), fo(!!p.bottom, {
            [
                [`&-placement-bottom ${parentNode}-arrow`, `&-placement-bottomLeft ${parentNode}-arrow`, `&-placement-bottomRight ${parentNode}-arrow`].join(",")
            ]: {
                top: c,
                transform: "translateY(-100%)"
            },
            [`&-placement-bottom ${parentNode}-arrow`]: {
                left: {
                    _skip_check_: !0,
                    value: "50%"
                },
                transform: "translateX(-50%) translateY(-100%)"
            },
            [`&-placement-bottomLeft ${parentNode}-arrow`]: {
                left: {
                    _skip_check_: !0,
                    value: h
                }
            },
            [`&-placement-bottomRight ${parentNode}-arrow`]: {
                right: {
                    _skip_check_: !0,
                    value: h
                }
            }
        })), fo(!!p.left, {
            [
                [`&-placement-left ${parentNode}-arrow`, `&-placement-leftTop ${parentNode}-arrow`, `&-placement-leftBottom ${parentNode}-arrow`].join(",")
            ]: {
                right: {
                    _skip_check_: !0,
                    value: c
                },
                transform: "translateX(100%) rotate(90deg)"
            },
            [`&-placement-left ${parentNode}-arrow`]: {
                top: {
                    _skip_check_: !0,
                    value: "50%"
                },
                transform: "translateY(-50%) translateX(100%) rotate(90deg)"
            },
            [`&-placement-leftTop ${parentNode}-arrow`]: {
                top: v
            },
            [`&-placement-leftBottom ${parentNode}-arrow`]: {
                bottom: v
            }
        })), fo(!!p.right, {
            [
                [`&-placement-right ${parentNode}-arrow`, `&-placement-rightTop ${parentNode}-arrow`, `&-placement-rightBottom ${parentNode}-arrow`].join(",")
            ]: {
                left: {
                    _skip_check_: !0,
                    value: c
                },
                transform: "translateX(-100%) rotate(-90deg)"
            },
            [`&-placement-right ${parentNode}-arrow`]: {
                top: {
                    _skip_check_: !0,
                    value: "50%"
                },
                transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
            },
            [`&-placement-rightTop ${parentNode}-arrow`]: {
                top: v
            },
            [`&-placement-rightBottom ${parentNode}-arrow`]: {
                bottom: v
            }
        }))
    }
}

function calculateDropdownPosition(component, nextSibling, parentNode, n) {
    if (n === !1) return {
        adjustX: !1,
        adjustY: !1
    };
    const i = n && typeof n == "object" ? n : {},
        o = {};
    switch (component) {
        case "top":
        case "bottom":
            o.shiftX = nextSibling.dropdownArrowOffset * 2 + parentNode;
            break;
        case "left":
        case "right":
            o.shiftY = nextSibling.dropdownArrowOffsetVertical * 2 + parentNode;
            break
    }
    const a = Object.assign(Object.assign({}, o), i);
    return a.shiftX || (a.adjustX = !0), a.shiftY || (a.adjustY = !0), a
}
const Zu = {
        left: {
            points: ["cr", "cl"]
        },
        right: {
            points: ["cl", "cr"]
        },
        top: {
            points: ["bc", "tc"]
        },
        bottom: {
            points: ["tc", "bc"]
        },
        topLeft: {
            points: ["bl", "tl"]
        },
        leftTop: {
            points: ["tr", "tl"]
        },
        topRight: {
            points: ["br", "tr"]
        },
        rightTop: {
            points: ["tl", "tr"]
        },
        bottomRight: {
            points: ["tr", "br"]
        },
        rightBottom: {
            points: ["bl", "br"]
        },
        bottomLeft: {
            points: ["tl", "bl"]
        },
        leftBottom: {
            points: ["br", "bl"]
        }
    },
    Db = {
        topLeft: {
            points: ["bl", "tc"]
        },
        leftTop: {
            points: ["tr", "cl"]
        },
        topRight: {
            points: ["br", "tc"]
        },
        rightTop: {
            points: ["tl", "cr"]
        },
        bottomRight: {
            points: ["tr", "bc"]
        },
        rightBottom: {
            points: ["bl", "cr"]
        },
        bottomLeft: {
            points: ["tl", "bc"]
        },
        leftBottom: {
            points: ["br", "cl"]
        }
    },
    Fb = new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);

function calculateDropdownConfigurations(component) {
    const {
        arrowWidth: nextSibling,
        autoAdjustOverflow: parentNode,
        arrowPointAtCenter: n,
        offset: i,
        borderRadius: o,
        visibleFirst: a
    } = component, s = nextSibling / 2, d = {};
    return Object.keys(Zu).forEach(f => {
        const c = n && Db[f] || Zu[f],
            p = Object.assign(Object.assign({}, c), {
                offset: [0, 0]
            });
        switch (d[f] = p, Fb.has(f) && (p.autoArrow = !1), f) {
            case "top":
            case "topLeft":
            case "topRight":
                p.offset[1] = -s - i;
                break;
            case "bottom":
            case "bottomLeft":
            case "bottomRight":
                p.offset[1] = s + i;
                break;
            case "left":
            case "leftTop":
            case "leftBottom":
                p.offset[0] = -s - i;
                break;
            case "right":
            case "rightTop":
            case "rightBottom":
                p.offset[0] = s + i;
                break
        }
        const v = Yh({
            contentRadius: o,
            limitVerticalRadius: !0
        });
        if (n) switch (f) {
            case "topLeft":
            case "bottomLeft":
                p.offset[0] = -v.dropdownArrowOffset - s;
                break;
            case "topRight":
            case "bottomRight":
                p.offset[0] = v.dropdownArrowOffset + s;
                break;
            case "leftTop":
            case "rightTop":
                p.offset[1] = -v.dropdownArrowOffset - s;
                break;
            case "leftBottom":
            case "rightBottom":
                p.offset[1] = v.dropdownArrowOffset + s;
                break
        }
        p.overflow = calculateDropdownPosition(f, v, nextSibling, parentNode), a && (p.htmlRegion = "visibleFirst")
    }), d
}
const or = (component, nextSibling) => new at(component).setAlpha(nextSibling).toRgbString(),
    fn = (component, nextSibling) => new at(component).lighten(nextSibling).toHexString(),
    zb = component => {
        const nextSibling = Wr(component, {
            theme: "dark"
        });
        return {
            1: nextSibling[0],
            2: nextSibling[1],
            3: nextSibling[2],
            4: nextSibling[3],
            5: nextSibling[6],
            6: nextSibling[5],
            7: nextSibling[4],
            8: nextSibling[6],
            9: nextSibling[5],
            10: nextSibling[4]
        }
    },
    jb = (component, nextSibling) => {
        const parentNode = component || "#000",
            n = nextSibling || "#fff";
        return {
            colorBgBase: parentNode,
            colorTextBase: n,
            colorText: or(n, .85),
            colorTextSecondary: or(n, .65),
            colorTextTertiary: or(n, .45),
            colorTextQuaternary: or(n, .25),
            colorFill: or(n, .18),
            colorFillSecondary: or(n, .12),
            colorFillTertiary: or(n, .08),
            colorFillQuaternary: or(n, .04),
            colorBgElevated: fn(parentNode, 12),
            colorBgContainer: fn(parentNode, 8),
            colorBgLayout: fn(parentNode, 0),
            colorBgSpotlight: fn(parentNode, 26),
            colorBorder: fn(parentNode, 26),
            colorBorderSecondary: fn(parentNode, 19)
        }
    },
    Hb = (component, nextSibling) => {
        const parentNode = Object.keys(Dc).map(i => {
                const o = Wr(component[i], {
                    theme: "dark"
                });
                return new Array(10).fill(1).reduce((a, s, d) => (a[`${i}-${d+1}`] = o[d], a[`${i}${d+1}`] = o[d], a), {})
            }).reduce((i, o) => (i = Object.assign(Object.assign({}, i), o), i), {}),
            n = nextSibling ?? fa(component);
        return Object.assign(Object.assign(Object.assign({}, n), parentNode), Ah(component, {
            generateColorPalettes: zb,
            generateNeutralColorPalettes: jb
        }))
    },
    Ub = Hb;

function calculateSizeMap(component) {
    const {
        sizeUnit: nextSibling,
        sizeStep: parentNode
    } = component, n = parentNode - 2;
    return {
        sizeXXL: nextSibling * (n + 10),
        sizeXL: nextSibling * (n + 6),
        sizeLG: nextSibling * (n + 2),
        sizeMD: nextSibling * (n + 2),
        sizeMS: nextSibling * (n + 1),
        size: nextSibling * n,
        sizeSM: nextSibling * n,
        sizeXS: nextSibling * (n - 1),
        sizeXXS: nextSibling * (n - 1)
    }
}
const Wb = (component, nextSibling) => {
        const parentNode = nextSibling ?? fa(component),
            n = parentNode.fontSizeSM,
            i = parentNode.controlHeight - 4;
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, parentNode), calculateSizeMap(nextSibling ?? component)), Ch(n)), {
            controlHeight: i
        }), Eh(Object.assign(Object.assign({}, parentNode), {
            controlHeight: i
        })))
    },
    Gb = Wb;

function getThemeConfig() {
    const [component, nextSibling, parentNode] = Mh();
    return {
        theme: component,
        token: nextSibling,
        hashId: parentNode
    }
}
const Kb = {
        defaultConfig: Js,
        defaultSeed: Js.token,
        useToken: getThemeConfig,
        defaultAlgorithm: fa,
        darkAlgorithm: Ub,
        compactAlgorithm: Gb
    },
    Qb = component => {
        const {
            componentCls: nextSibling,
            tooltipMaxWidth: parentNode,
            tooltipColor: n,
            tooltipBg: i,
            tooltipBorderRadius: o,
            zIndexPopup: a,
            controlHeight: s,
            boxShadowSecondary: d,
            paddingSM: f,
            paddingXS: c,
            tooltipRadiusOuter: p
        } = component;
        return [{
            [nextSibling]: Object.assign(Object.assign(Object.assign(Object.assign({}, Th(component)), {
                position: "absolute",
                zIndex: a,
                display: "block",
                width: "max-content",
                maxWidth: parentNode,
                visibility: "visible",
                transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
                "&-hidden": {
                    display: "none"
                },
                "--antd-arrow-background-color": i,
                [`${nextSibling}-inner`]: {
                    minWidth: s,
                    minHeight: s,
                    padding: `${f/2}px ${c}px`,
                    color: n,
                    textAlign: "start",
                    textDecoration: "none",
                    wordWrap: "break-word",
                    backgroundColor: i,
                    borderRadius: o,
                    boxShadow: d,
                    boxSizing: "border-box"
                },
                [
                    ["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")
                ]: {
                    [`${nextSibling}-inner`]: {
                        borderRadius: Math.min(o, Qh)
                    }
                },
                [`${nextSibling}-content`]: {
                    position: "relative"
                }
            }), L_(component, (v, h) => {
                let {
                    darkColor: _
                } = h;
                return {
                    [`&${nextSibling}-${v}`]: {
                        [`${nextSibling}-inner`]: {
                            backgroundColor: _
                        },
                        [`${nextSibling}-arrow`]: {
                            "--antd-arrow-background-color": _
                        }
                    }
                }
            })), {
                "&-rtl": {
                    direction: "rtl"
                }
            })
        }, Lb(bi(component, {
            borderRadiusOuter: p
        }), {
            colorBg: "var(--antd-arrow-background-color)",
            contentRadius: o,
            limitVerticalRadius: !0
        }), {
            [`${nextSibling}-pure`]: {
                position: "relative",
                maxWidth: "none",
                margin: component.sizePopupArrow
            }
        }]
    },
    Vh = (component, nextSibling) => Bc("Tooltip", n => {
        if (nextSibling === !1) return [];
        const {
            borderRadius: i,
            colorTextLightSolid: o,
            colorBgDefault: a,
            borderRadiusOuter: s
        } = n, d = bi(n, {
            tooltipMaxWidth: 250,
            tooltipColor: o,
            tooltipBorderRadius: i,
            tooltipBg: a,
            tooltipRadiusOuter: s > 4 ? 4 : s
        });
        return [Qb(d), vb(n, "zoom-big-fast")]
    }, n => {
        let {
            zIndexPopupBase: i,
            colorBgSpotlight: o
        } = n;
        return {
            zIndexPopup: i + 70,
            colorBgDefault: o
        }
    }, {
        resetStyle: !1
    })(component),
    Yb = jo.map(component => `${component}-inverse`);

function Vb(component) {
    return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(Dt(Yb), Dt(jo)).includes(component) : jo.includes(component)
}

function Zh(component, nextSibling) {
    const parentNode = Vb(nextSibling),
        n = he({
            [`${component}-${nextSibling}`]: nextSibling && parentNode
        }),
        i = {},
        o = {};
    return nextSibling && !parentNode && (i.background = nextSibling, o["--antd-arrow-background-color"] = nextSibling), {
        className: n,
        overlayStyle: i,
        arrowStyle: o
    }
}

function Zb(component) {
    const {
        prefixCls: nextSibling,
        className: parentNode,
        placement: n = "top",
        title: i,
        color: o,
        overlayInnerStyle: a
    } = component, {
        getPrefixCls: s
    } = Be(ki), d = s("tooltip", nextSibling), [f, c] = Vh(d, !0), p = Zh(d, o), v = Object.assign(Object.assign({}, a), p.overlayStyle), h = p.arrowStyle;
    return f(createElement("div", {
        className: he(c, d, `${d}-pure`, `${d}-placement-${n}`, parentNode, p.className),
        style: h
    }, createElement("div", {
        className: `${d}-arrow`
    }), createElement(Kh, Object.assign({}, component, {
        className: c,
        prefixCls: d,
        overlayInnerStyle: v
    }), i)))
}
var Xb = globalThis && globalThis.__rest || function(component, nextSibling) {
    var parentNode = {};
    for (var n in component) Object.prototype.hasOwnProperty.call(component, n) && nextSibling.indexOf(n) < 0 && (parentNode[n] = component[n]);
    if (component != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(component); i < n.length; i++) nextSibling.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(component, n[i]) && (parentNode[n[i]] = component[n[i]]);
    return parentNode
};
const {
    useToken: qb
} = Kb, ey = (component, nextSibling) => {
    const parentNode = {},
        n = Object.assign({}, component);
    return nextSibling.forEach(i => {
        component && i in component && (parentNode[i] = component[i], delete n[i])
    }), {
        picked: parentNode,
        omitted: n
    }
};

function ty(component, nextSibling) {
    const parentNode = component.type;
    if ((parentNode.__ANT_BUTTON === !0 || component.type === "button") && component.props.disabled || parentNode.__ANT_SWITCH === !0 && (component.props.disabled || component.props.loading) || parentNode.__ANT_RADIO === !0 && component.props.disabled) {
        const {
            picked: n,
            omitted: i
        } = ey(component.props.style, ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), o = Object.assign(Object.assign({
            display: "inline-block"
        }, n), {
            cursor: "not-allowed",
            width: component.props.block ? "100%" : void 0
        }), a = Object.assign(Object.assign({}, i), {
            pointerEvents: "none"
        }), s = Uc(component, {
            style: a,
            className: null
        });
        return createElement("span", {
            style: o,
            className: he(component.props.className, `${nextSibling}-disabled-compatible-wrapper`)
        }, s)
    }
    return component
}
const Xh = Ke((component, nextSibling) => {
    var parentNode, n;
    const {
        prefixCls: i,
        openClassName: o,
        getTooltipContainer: a,
        overlayClassName: s,
        color: d,
        overlayInnerStyle: f,
        children: c,
        afterOpenChange: p,
        afterVisibleChange: v,
        destroyTooltipOnHide: h,
        arrow: _ = !0,
        title: y,
        overlay: S,
        builtinPlacements: w,
        arrowPointAtCenter: x = !1,
        autoAdjustOverflow: R = !0
    } = component, I = !!_, {
        token: E
    } = qb(), {
        getPopupContainer: N,
        getPrefixCls: C,
        direction: T
    } = Be(ki), D = q(null), F = () => {
        var u;
        (u = D.current) === null || u === void 0 || u.forceAlign()
    };
    Kr(nextSibling, () => ({
        forceAlign: F,
        forcePopupAlign: () => {
            F()
        }
    }));
    const [B, k] = Jh(!1, {
        value: (parentNode = component.open) !== null && parentNode !== void 0 ? parentNode : component.visible,
        defaultValue: (n = component.defaultOpen) !== null && n !== void 0 ? n : component.defaultVisible
    }), A = !y && !S && y !== 0, M = u => {
        var m, b;
        k(A ? !1 : u), A || ((m = component.onOpenChange) === null || m === void 0 || m.call(component, u), (b = component.onVisibleChange) === null || b === void 0 || b.call(component, u))
    }, P = $component(() => {
        var u, m;
        let b = x;
        return typeof _ == "object" && (b = (m = (u = _.pointAtCenter) !== null && u !== void 0 ? u : _.arrowPointAtCenter) !== null && m !== void 0 ? m : x), w || calculateDropdownConfigurations({
            arrowPointAtCenter: b,
            autoAdjustOverflow: R,
            arrowWidth: I ? E.sizePopupArrow : 0,
            borderRadius: E.borderRadius,
            offset: E.marginXXS,
            visibleFirst: !0
        })
    }, [x, _, w, E]), j = $component(() => y === 0 ? y : S || y || "", [S, y]), H = createElement(W1, null, typeof j == "function" ? j() : j), {
        getPopupContainer: G,
        placement: ne = "top",
        mouseEnterDelay: ee = .1,
        mouseLeaveDelay: Q = .1,
        overlayStyle: Z,
        rootClassName: ve
    } = component, me = Xb(component, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), Ae = C("tooltip", i), He = C(), J = component["data-popover-inject"];
    let te = B;
    !("open" in component) && !("visible" in component) && A && (te = !1);
    const ce = ty(Hc(c) && !_1(c) ? c : createElement("span", null, c), Ae),
        le = ce.props,
        pe = !le.className || typeof le.className == "string" ? he(le.className, {
            [o || `${Ae}-open`]: !0
        }) : le.className,
        [we, U] = Vh(Ae, !J),
        De = Zh(Ae, d),
        Fe = Object.assign(Object.assign({}, f), De.overlayStyle),
        g = De.arrowStyle,
        l = he(s, {
            [`${Ae}-rtl`]: T === "rtl"
        }, De.className, ve, U);
    return we(createElement(Nb, Object.assign({}, me, {
        showArrow: I,
        placement: ne,
        mouseEnterDelay: ee,
        mouseLeaveDelay: Q,
        prefixCls: Ae,
        overlayClassName: l,
        overlayStyle: Object.assign(Object.assign({}, g), Z),
        getTooltipContainer: G || a || N,
        ref: D,
        builtinPlacements: P,
        overlay: H,
        visible: te,
        onVisibleChange: M,
        afterVisibleChange: p ?? v,
        overlayInnerStyle: Fe,
        arrowContent: createElement("span", {
            className: `${Ae}-arrow-content`
        }),
        motion: {
            motionName: G1(He, "zoom-big-fast", component.transitionName),
            motionDeadline: 1e3
        },
        destroyTooltipOnHide: !!h
    }), te ? Uc(ce, {
        className: pe
    }) : ce))
});
Xh._InternalPanelDoNotUseOrYouWillBeFired = Zb;
const Gt = Xh;
var ry = ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"],
    qh = Ke(function(component, nextSibling) {
        var parentNode, n = component.prefixCls,
            i = n === void 0 ? "rc-switch" : n,
            o = component.className,
            a = component.checked,
            s = component.defaultChecked,
            d = component.disabled,
            f = component.loadingIcon,
            c = component.checkedChildren,
            p = component.unCheckedChildren,
            v = component.onClick,
            h = component.onChange,
            _ = component.onKeyDown,
            y = $parentNode(component, ry),
            S = Jh(!1, {
                value: a,
                defaultValue: s
            }),
            w = X(S, 2),
            x = w[0],
            R = w[1];

        function I(T, D) {
            var F = x;
            return d || (F = T, R(F), h == null || h(F, D)), F
        }

        function E(T) {
            T.which === V.LEFT ? I(!1, T) : T.which === V.RIGHT && I(!0, T), _ == null || _(T)
        }

        function N(T) {
            var D = I(!x, T);
            v == null || v(D, T)
        }
        var C = he(i, o, (parentNode = {}, fe(parentNode, "".concat(i, "-checked"), x), fe(parentNode, "".concat(i, "-disabled"), d), parentNode));
        return createElement("button", St({}, y, {
            type: "button",
            role: "switch",
            "aria-checked": x,
            disabled: d,
            className: C,
            ref: nextSibling,
            onKeyDown: E,
            onClick: N
        }), f, createElement("span", {
            className: "".concat(i, "-inner")
        }, createElement("span", {
            className: "".concat(i, "-inner-checked")
        }, c), createElement("span", {
            className: "".concat(i, "-inner-unchecked")
        }, p)))
    });
qh.displayName = "Switch";
const ny = component => {
        const {
            componentCls: nextSibling
        } = component, parentNode = `${nextSibling}-inner`;
        return {
            [nextSibling]: {
                [`&${nextSibling}-small`]: {
                    minWidth: component.switchMinWidthSM,
                    height: component.switchHeightSM,
                    lineHeight: `${component.switchHeightSM}px`,
                    [`${nextSibling}-inner`]: {
                        paddingInlineStart: component.switchInnerMarginMaxSM,
                        paddingInlineEnd: component.switchInnerMarginMinSM,
                        [`${parentNode}-checked`]: {
                            marginInlineStart: `calc(-100% + ${component.switchPinSizeSM+component.switchPadding*2}px - ${component.switchInnerMarginMaxSM*2}px)`,
                            marginInlineEnd: `calc(100% - ${component.switchPinSizeSM+component.switchPadding*2}px + ${component.switchInnerMarginMaxSM*2}px)`
                        },
                        [`${parentNode}-unchecked`]: {
                            marginTop: -component.switchHeightSM,
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        }
                    },
                    [`${nextSibling}-handle`]: {
                        width: component.switchPinSizeSM,
                        height: component.switchPinSizeSM
                    },
                    [`${nextSibling}-loading-icon`]: {
                        top: (component.switchPinSizeSM - component.switchLoadingIconSize) / 2,
                        fontSize: component.switchLoadingIconSize
                    },
                    [`&${nextSibling}-checked`]: {
                        [`${nextSibling}-inner`]: {
                            paddingInlineStart: component.switchInnerMarginMinSM,
                            paddingInlineEnd: component.switchInnerMarginMaxSM,
                            [`${parentNode}-checked`]: {
                                marginInlineStart: 0,
                                marginInlineEnd: 0
                            },
                            [`${parentNode}-unchecked`]: {
                                marginInlineStart: `calc(100% - ${component.switchPinSizeSM+component.switchPadding*2}px + ${component.switchInnerMarginMaxSM*2}px)`,
                                marginInlineEnd: `calc(-100% + ${component.switchPinSizeSM+component.switchPadding*2}px - ${component.switchInnerMarginMaxSM*2}px)`
                            }
                        },
                        [`${nextSibling}-handle`]: {
                            insetInlineStart: `calc(100% - ${component.switchPinSizeSM+component.switchPadding}px)`
                        }
                    },
                    [`&:not(${nextSibling}-disabled):active`]: {
                        [`&:not(${nextSibling}-checked) ${parentNode}`]: {
                            [`${parentNode}-unchecked`]: {
                                marginInlineStart: component.marginXXS / 2,
                                marginInlineEnd: -component.marginXXS / 2
                            }
                        },
                        [`&${nextSibling}-checked ${parentNode}`]: {
                            [`${parentNode}-checked`]: {
                                marginInlineStart: -component.marginXXS / 2,
                                marginInlineEnd: component.marginXXS / 2
                            }
                        }
                    }
                }
            }
        }
    },
    iy = component => {
        const {
            componentCls: nextSibling
        } = component;
        return {
            [nextSibling]: {
                [`${nextSibling}-loading-icon${component.iconCls}`]: {
                    position: "relative",
                    top: (component.switchPinSize - component.fontSize) / 2,
                    color: component.switchLoadingIconColor,
                    verticalAlign: "top"
                },
                [`&${nextSibling}-checked ${nextSibling}-loading-icon`]: {
                    color: component.switchColor
                }
            }
        }
    },
    oy = component => {
        const {
            componentCls: nextSibling,
            motion: parentNode
        } = component, n = `${nextSibling}-handle`;
        return {
            [nextSibling]: {
                [n]: {
                    position: "absolute",
                    top: component.switchPadding,
                    insetInlineStart: component.switchPadding,
                    width: component.switchPinSize,
                    height: component.switchPinSize,
                    transition: `all ${component.switchDuration} ease-in-out`,
                    "&::before": {
                        position: "absolute",
                        top: 0,
                        insetInlineEnd: 0,
                        bottom: 0,
                        insetInlineStart: 0,
                        backgroundColor: component.colorWhite,
                        borderRadius: component.switchPinSize / 2,
                        boxShadow: component.switchHandleShadow,
                        transition: `all ${component.switchDuration} ease-in-out`,
                        content: '""'
                    }
                },
                [`&${nextSibling}-checked ${n}`]: {
                    insetInlineStart: `calc(100% - ${component.switchPinSize+component.switchPadding}px)`
                },
                [`&:not(${nextSibling}-disabled):active`]: parentNode ? {
                    [`${n}::before`]: {
                        insetInlineEnd: component.switchHandleActiveInset,
                        insetInlineStart: 0
                    },
                    [`&${nextSibling}-checked ${n}::before`]: {
                        insetInlineEnd: 0,
                        insetInlineStart: component.switchHandleActiveInset
                    }
                } : {}
            }
        }
    },
    ay = component => {
        const {
            componentCls: nextSibling
        } = component, parentNode = `${nextSibling}-inner`;
        return {
            [nextSibling]: {
                [parentNode]: {
                    display: "block",
                    overflow: "hidden",
                    borderRadius: 100,
                    height: "100%",
                    paddingInlineStart: component.switchInnerMarginMax,
                    paddingInlineEnd: component.switchInnerMarginMin,
                    transition: `padding-inline-start ${component.switchDuration} ease-in-out, padding-inline-end ${component.switchDuration} ease-in-out`,
                    [`${parentNode}-checked, ${parentNode}-unchecked`]: {
                        display: "block",
                        color: component.colorTextLightSolid,
                        fontSize: component.fontSizeSM,
                        transition: `margin-inline-start ${component.switchDuration} ease-in-out, margin-inline-end ${component.switchDuration} ease-in-out`,
                        pointerEvents: "none"
                    },
                    [`${parentNode}-checked`]: {
                        marginInlineStart: `calc(-100% + ${component.switchPinSize+component.switchPadding*2}px - ${component.switchInnerMarginMax*2}px)`,
                        marginInlineEnd: `calc(100% - ${component.switchPinSize+component.switchPadding*2}px + ${component.switchInnerMarginMax*2}px)`
                    },
                    [`${parentNode}-unchecked`]: {
                        marginTop: -component.switchHeight,
                        marginInlineStart: 0,
                        marginInlineEnd: 0
                    }
                },
                [`&${nextSibling}-checked ${parentNode}`]: {
                    paddingInlineStart: component.switchInnerMarginMin,
                    paddingInlineEnd: component.switchInnerMarginMax,
                    [`${parentNode}-checked`]: {
                        marginInlineStart: 0,
                        marginInlineEnd: 0
                    },
                    [`${parentNode}-unchecked`]: {
                        marginInlineStart: `calc(100% - ${component.switchPinSize+component.switchPadding*2}px + ${component.switchInnerMarginMax*2}px)`,
                        marginInlineEnd: `calc(-100% + ${component.switchPinSize+component.switchPadding*2}px - ${component.switchInnerMarginMax*2}px)`
                    }
                },
                [`&:not(${nextSibling}-disabled):active`]: {
                    [`&:not(${nextSibling}-checked) ${parentNode}`]: {
                        [`${parentNode}-unchecked`]: {
                            marginInlineStart: component.switchPadding * 2,
                            marginInlineEnd: -component.switchPadding * 2
                        }
                    },
                    [`&${nextSibling}-checked ${parentNode}`]: {
                        [`${parentNode}-checked`]: {
                            marginInlineStart: -component.switchPadding * 2,
                            marginInlineEnd: component.switchPadding * 2
                        }
                    }
                }
            }
        }
    },
    sy = component => {
        const {
            componentCls: nextSibling
        } = component;
        return {
            [nextSibling]: Object.assign(Object.assign(Object.assign(Object.assign({}, Th(component)), {
                position: "relative",
                display: "inline-block",
                boxSizing: "border-box",
                minWidth: component.switchMinWidth,
                height: component.switchHeight,
                lineHeight: `${component.switchHeight}px`,
                verticalAlign: "middle",
                background: component.colorTextQuaternary,
                border: "0",
                borderRadius: 100,
                cursor: "pointer",
                transition: `all ${component.motionDurationMid}`,
                userSelect: "none",
                [`&:hover:not(${nextSibling}-disabled)`]: {
                    background: component.colorTextTertiary
                }
            }), O_(component)), {
                [`&${nextSibling}-checked`]: {
                    background: component.switchColor,
                    [`&:hover:not(${nextSibling}-disabled)`]: {
                        background: component.colorPrimaryHover
                    }
                },
                [`&${nextSibling}-loading, &${nextSibling}-disabled`]: {
                    cursor: "not-allowed",
                    opacity: component.switchDisabledOpacity,
                    "*": {
                        boxShadow: "none",
                        cursor: "not-allowed"
                    }
                },
                [`&${nextSibling}-rtl`]: {
                    direction: "rtl"
                }
            })
        }
    },
    cy = Bc("Switch", component => {
        const nextSibling = component.fontSize * component.lineHeight,
            parentNode = component.controlHeight / 2,
            n = 2,
            i = nextSibling - n * 2,
            o = parentNode - n * 2,
            a = bi(component, {
                switchMinWidth: i * 2 + n * 4,
                switchHeight: nextSibling,
                switchDuration: component.motionDurationMid,
                switchColor: component.colorPrimary,
                switchDisabledOpacity: component.opacityLoading,
                switchInnerMarginMin: i / 2,
                switchInnerMarginMax: i + n + n * 2,
                switchPadding: n,
                switchPinSize: i,
                switchBg: component.colorBgContainer,
                switchMinWidthSM: o * 2 + n * 2,
                switchHeightSM: parentNode,
                switchInnerMarginMinSM: o / 2,
                switchInnerMarginMaxSM: o + n + n * 2,
                switchPinSizeSM: o,
                switchHandleShadow: `0 2px 4px 0 ${new at("#00230b").setAlpha(.2).toRgbString()}`,
                switchLoadingIconSize: component.fontSizeIcon * .75,
                switchLoadingIconColor: `rgba(0, 0, 0, ${component.opacityLoading})`,
                switchHandleActiveInset: "-30%"
            });
        return [sy(a), ay(a), oy(a), iy(a), ny(a)]
    });
var ly = globalThis && globalThis.__rest || function(component, nextSibling) {
    var parentNode = {};
    for (var n in component) Object.prototype.hasOwnProperty.call(component, n) && nextSibling.indexOf(n) < 0 && (parentNode[n] = component[n]);
    if (component != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(component); i < n.length; i++) nextSibling.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(component, n[i]) && (parentNode[n[i]] = component[n[i]]);
    return parentNode
};
const e0 = Ke((component, nextSibling) => {
    var {
        prefixCls: parentNode,
        size: n,
        disabled: i,
        loading: o,
        className: a,
        rootClassName: s
    } = component, d = ly(component, ["prefixCls", "size", "disabled", "loading", "className", "rootClassName"]);
    const {
        getPrefixCls: f,
        direction: c
    } = Be(ki), p = Be(B_), v = (i ?? p) || o, h = f("switch", parentNode), _ = createElement("div", {
        className: `${h}-handle`
    }, o && createElement(S1, {
        className: `${h}-loading-icon`
    })), [y, S] = cy(h), w = j_(n), x = he({
        [`${h}-small`]: w === "small",
        [`${h}-loading`]: o,
        [`${h}-rtl`]: c === "rtl"
    }, a, s, S);
    return y(createElement(U1, null, createElement(qh, Object.assign({}, d, {
        prefixCls: h,
        className: x,
        disabled: v,
        ref: nextSibling,
        loadingIcon: _
    }))))
});
e0.__ANT_SWITCH = !0;
const uy = e0;
var fy = 0;

function z(component, nextSibling, parentNode, n, i, o) {
    var a, s, d = {};
    for (s in nextSibling) s == "ref" ? a = nextSibling[s] : d[s] = nextSibling[s];
    var f = {
        type: component,
        props: d,
        key: parentNode,
        ref: a,
        NULL: null,
        NULL2: null,
        zero: 0,
        NULL3: null,
        void0: void 0,
        NULL4: null,
        NULL5: null,
        constructor: void 0,
        vnode1: --fy,
        __source: i,
        __self: o
    };
    if (typeof component == "function" && (a = component.defaultProps))
        for (s in a) d[s] === void 0 && (d[s] = a[s]);
    return W.vnode && W.vnode(f), f
}

function dy({
    zoom: component,
    server: nextSibling,
    onZoomChange: parentNode,
    onClose: n
}) {
    return z("header", {
        className: "auto-midjourney-header",
        children: [z("h1", {
            className: he({
                "auto-midjourney-title": !0,
                [`auto-midjourney-title-${nextSibling}`]: !0
            }),
            children: [z("img", {
                src: picA
            }), z("a", {
                className: "auto-midjourney-title-text",
                href: "https://auto-journey-readme.kingback.app/",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "AutoJourney"
            }), z("a", {
                className: "auto-midjourney-title-version",
                href: "https://auto-journey-readme.kingback.app/changelog",
                target: "_blank",
                rel: "noopener noreferrer",
                children: ["v", "0.0.19"]
            })]
        }), z("ul", {
            className: "auto-midjourney-links",
            children: [z("li", {
                onClick: () => window.open("https://poe.com/Midjourney"),
                children: z(Gt, {
                    title: "跳转至 Poe 生成提示词",
                    placement: "bottom",
                    zIndex: 1e5,
                    children: z("img", {
                        src: yd
                    })
                })
            }), z("li", {
                onClick: () => window.open("https://auto-journey-readme.kingback.app/", "_blank", "noopener=yes,noreferrer=yes"),
                children: z(Gt, {
                    title: "使用文档",
                    placement: "bottom",
                    zIndex: 1e5,
                    children: z("svg", {
                        width: "26",
                        height: "26",
                        fill: "none",
                        viewBox: "0 0 18 18",
                        style: "min-width: 18px; min-height: 18px;",
                        children: z("g", {
                            children: [z("path", {
                                "data-follow-stroke": "currentColor",
                                d: "m5.483 13.97-2.309 1.94a.562.562 0 0 1-.924-.43V4.312a.563.563 0 0 1 .563-.562h12.374a.562.562 0 0 1 .563.563v9a.562.562 0 0 1-.563.562H5.742l-.259.095Z",
                                stroke: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                            }), z("path", {
                                "data-follow-fill": "currentColor",
                                d: "M9.027 12.005a.55.55 0 0 0 .562-.536.55.55 0 0 0-.562-.536.55.55 0 0 0-.563.536.55.55 0 0 0 .563.536Z",
                                fill: "currentColor"
                            }), z("path", {
                                "data-follow-stroke": "currentColor",
                                d: "M9 9.54v-.428a1.5 1.5 0 1 0-1.5-1.5",
                                stroke: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                            })]
                        })
                    })
                })
            }), z("li", {
                className: he({
                    "auto-midjourney-hidden": !component
                }),
                onClick: () => parentNode(!1),
                children: z(Gt, {
                    title: "缩小窗口",
                    placement: "bottom",
                    zIndex: 1e5,
                    children: z("svg", {
                        viewBox: "64 64 896 896",
                        focusable: "false",
                        "data-icon": "fullscreen-exit",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        children: z("path", {
                            d: "M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"
                        })
                    })
                })
            }), z("li", {
                className: he({
                    "auto-midjourney-hidden": component
                }),
                onClick: () => parentNode(!0),
                children: z(Gt, {
                    title: "放大窗口",
                    placement: "bottom",
                    zIndex: 1e5,
                    children: z("svg", {
                        viewBox: "64 64 896 896",
                        focusable: "false",
                        "data-icon": "fullscreen",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        children: z("path", {
                            d: "M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"
                        })
                    })
                })
            })]
        }), z("div", {
            className: "auto-midjourney-header-close",
            onClick: n,
            children: z(Gt, {
                title: "关闭窗口，不会影响进行中的任务",
                placement: "bottomRight",
                zIndex: 1e5,
                children: z("svg", {
                    width: "24",
                    height: "24",
                    fill: "none",
                    viewBox: "0 0 18 18",
                    style: "min-width: 18px; min-height: 18px;",
                    children: z("g", {
                        children: z("path", {
                            "data-follow-fill": "currentColor",
                            d: "m10.052 8.996 3.221-3.214a.752.752 0 0 0-1.063-1.064L8.996 7.94 5.783 4.72a.752.752 0 1 0-1.064 1.063L7.94 8.996l-3.22 3.213a.75.75 0 0 0 0 1.064.75.75 0 0 0 1.063 0l3.213-3.221 3.214 3.22a.749.749 0 0 0 1.063 0 .75.75 0 0 0 0-1.063l-3.22-3.213Z",
                            fill: "currentColor"
                        })
                    })
                })
            })
        })]
    })
}

function Panel({
    hidden: component = !1,
    className: nextSibling,
    children: parentNode
}) {
    return z("div", {
        className: he({
            "auto-midjourney-panel": !0,
            "auto-midjourney-hidden": component
        }, nextSibling),
        children: parentNode
    })
}

function TabPanel({
    index: component = 0,
    tabs: nextSibling = [],
    onChange: parentNode,
    children: n
}) {
    const i = flattenNestedArray(n);
    return z("div", {
        className: "auto-midjourney-tabpanel",
        children: [z("ul", {
            className: "auto-midjourney-tabs",
            children: nextSibling.map((o, a) => z("li", {
                className: he({
                    "auto-midjourney-tab-selected": a === component
                }),
                onClick: () => parentNode == null ? void 0 : parentNode(a),
                children: o
            }, a))
        }), z("div", {
            className: "auto-midjourney-panels",
            children: i.map((o, a) => gf(o, {
                key: a,
                hidden: a !== component
            }))
        })]
    })
}
TabPanel.Panel = Panel;

function createAutoMidJourneyServers({
    server: selectedServer,
    onServerChange: serverChangeCallback
}) {
    return z("ul", {
        className: "auto-midjourney-servers",
        children: [z("li", {
            className: he({
                "auto-midjourney-server-selected": selectedServer === "midjourney"
            }),
            onClick: () => serverChangeCallback("midjourney"),
            children: z(Gt, {
                title: "切换到 Midjourney",
                zIndex: 1e5,
                placement: "left",
                children: z("img", {
                    src: zp
                })
            })
        }), z("li", {
            className: he({
                "auto-midjourney-server-selected": selectedServer === "niji"
            }),
            onClick: () => serverChangeCallback("niji"),
            children: z(Gt, {
                title: "切换到 Niji",
                zIndex: 1e5,
                placement: "left",
                children: z("img", {
                    src: jp
                })
            })
        })]
    })
}

function KIM01({
    onResume: component,
    className: nextSibling,
    ...parentNode
}) {
    var i, o, a;
    const n = $component(() => xs(new Date(parentNode.time)), [parentNode.time]);
    return z("li", {
        className: he({
            "auto-midjourney-message": !0,
            [`auto-midjourney-message-${parentNode.type}`]: !0,
            [`auto-midjourney-message-${parentNode.status||"normal"}`]: !0
        }, nextSibling),
        children: [z("p", {
            className: "auto-midjourney-message-content",
            children: parentNode.content
        }), z("div", {
            className: "auto-midjourney-message-actions",
            children: [z("span", {
                className: "auto-midjourney-message-time",
                children: n
            }), (i = parentNode.actions) != null && i.resume ? z("a", {
                href: "#",
                onClick: s => {
                    s.preventDefault(), component && component()
                },
                children: "继续执行"
            }) : null, (o = parentNode.actions) != null && o.feedback ? z("a", {
                href: "https://auto-journey-readme.kingback.app/#问题反馈",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "问题反馈"
            }) : null, (a = parentNode.actions) != null && a.reward ? z("a", {
                href: "https://auto-journey-readme.kingback.app/#支持作者",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "支持作者"
            }) : null]
        })]
    })
}
const welcomeNote = {
    time: Date.now(),
    type: "system",
    content: "欢迎回来！本插件仅作为个人研究和提效使用，请不要在公共账号使用。注意关闭 Fast 模式，否则可能会快速将 Fast Hours 耗完。祝您使用愉快~",
    actions: {
        reward: !0,
        feedback: !0
    }
};

function runWelcomeNote({
    dateTime: date,
    messages: oldMessages,
    newMessages: newMessages,
    onResume: resumeHandler
}) {
    return z("ul", {
        className: "auto-midjourney-messages",
        children: [oldMessages.map((message, index) => z(KIM01, {
            ...message
        }, `old-${index}`)), z("li", {
            className: "auto-midjourney-message-timeline",
            children: ["------------------ ", date, " ------------------"]
        }), z(KIM01, {
            className: "auto-midjourney-welcome",
            ...welcomeNote
        }, "welcome"), newMessages.map((message, index) => z(KIM01, {
            ...message,
            onResume: resumeHandler
        }, `new-${index}`))]
    })
}
const my = Ke(({
    tab: component,
    stop: nextSibling,
    pause: parentNode,
    server: n,
    placeholder: i,
    onSend: o,
    onInfo: a,
    onStop: s,
    onPause: d,
    onClear: f,
    onRandomChange: c
}, p) => {
    const v = q(null),
        [h, _] = ie(!1);

    function y() {
        const x = v.current,
            R = x.value.trim();
        x.value = "", R && o && o(R)
    }

    function S(x) {
        x.key === "Enter" && (x.ctrlKey || x.metaKey || x.shiftKey ? x.target instanceof HTMLTextAreaElement && (x.target.value += `
`) : (x.preventDefault(), y()))
    }

    function w() {
        _(!h), c == null || c(!h)
    }
    return Kr(p, () => ({
        focus() {
            var x;
            (x = v.current) == null || x.focus()
        },
        blur() {
            var x;
            (x = v.current) == null || x.blur()
        }
    }), []), z("footer", {
        className: he({
            "auto-midjourney-footer": !0,
            "auto-midjourney-hidden": component !== "prompt"
        }),
        children: [z("div", {
            className: "auto-midjourney-toolbar",
            children: [z(Gt, {
                zIndex: 1e5,
                placement: "topLeft",
                title: "清空记录，不会影响进行中的任务",
                children: z("div", {
                    className: "auto-midjourney-toolbar-button auto-midjourney-toolbar-clear",
                    onClick: f,
                    children: "清空记录"
                })
            }), z("div", {
                className: "auto-midjourney-toolbar-button auto-midjourney-toolbar-info",
                onClick: a,
                children: "排队情况"
            }), nextSibling ? z("div", {
                className: "auto-midjourney-toolbar-button auto-midjourney-toolbar-stop",
                onClick: s,
                children: "终止任务"
            }) : null, nextSibling ? z("div", {
                className: he({
                    "auto-midjourney-toolbar-button": !0,
                    [`auto-midjourney-toolbar-${parentNode?"pause":"resume"}`]: !0
                }),
                onClick: d,
                children: parentNode ? "暂停任务" : "恢复任务"
            }) : null, z("div", {
                className: "auto-midjourney-toolbar-right",
                children: z(Gt, {
                    placement: "topRight",
                    zIndex: 1e5,
                    title: "开启之后，将以随机顺序的方式发送队列中的提示词，可随时关闭",
                    children: z("div", {
                        className: he({
                            "auto-midjourney-toolbar-random": !0,
                            "auto-midjourney-toolbar-random-checked": h
                        }),
                        children: [z("span", {
                            children: "随机顺序"
                        }), z(uy, {
                            checked: h,
                            size: "small",
                            onChange: w
                        })]
                    })
                })
            })]
        }), z("div", {
            className: he({
                "auto-midjourney-form": !0,
                [`auto-midjourney-form-${n}`]: !0
            }),
            children: [z("textarea", {
                ref: v,
                className: "auto-midjourney-textarea",
                placeholder: i,
                onKeyDown: S
            }), z("div", {
                title: "发送",
                className: "auto-midjourney-send",
                onClick: y
            })]
        })]
    })
});

function setupAutoJourneyListener(component) {
    const state = q(component);
    state.current = component, be(() => {
        const handleMessage = n => {
            var i;
            n.origin === "https://poe.com" && n.data && n.data.type === "poe" && n.data.prompt && ((i = n.source) == null || i.postMessage({
                id: n.data.id,
                status: "success",
                type: "autojourney"
            }, {
                targetOrigin: "*"
            }), state.current(n.data.prompt))
        };
        return window.addEventListener("message", handleMessage, !1), () => {
            window.removeEventListener("message", handleMessage, !1)
        }
    }, [])
}

function generateDelayTime() {
    return getRandomNumberInRange(3, 5) * 1e3
}

function yy({
    visible: component = !1,
    onClose: nextSibling
}) {
    const parentNode = q(0),
        n = q(!1),
        i = q(!1),
        o = q(!1),
        a = q(null),
        s = q(null),
        d = q([]),
        f = q(null),
        [c] = ie(() => Np()),
        [p] = ie(() => Bp()),
        [v, h] = ie(!1),
        [_, y] = ie(0),
        [S, w] = ie(Tp()),
        [x, R] = ie([]),
        [I, E] = ie(() => xs()),
        [N, C] = ie("midjourney"),
        [T, D] = ie(0),
        F = T === 0 ? "prompt" : "gpt",
        B = Qe(() => {
            y(J => ++J)
        }, []),
        k = Qe(J => {
            R(te => {
                const ce = {
                        ...J,
                        time: Date.now()
                    },
                    le = [...te, ce];
                return vd([...S, ...le]), le
            })
        }, [S]),
        A = Qe(async J => {
            let te = 0;
            if (!Sp()) {
                ws(1);
                const {
                    prompt: le,
                    ...pe
                } = J.opts;
                te = await p.getQueueJobsByInfo(pe), te === 0 && ws(), p.subscription !== "basic" && p.jobMode === "fast" && k({
                    type: "system",
                    status: "warn",
                    content: "请注意，当前处于 Fast 模式，可以暂停任务，使用 /settings 设置为 Relaxed 模式后再恢复执行"
                })
            }
            return te <= 0 && (te = p.getQueueJobs()), te >= p.maxQueuedJobs ? (k({
                type: "system",
                content: `当前排队任务数量过多：${te}，请稍候（如果长时间不动，可以尝试点击下方 “排队信息” 按钮刷新排队情况）`
            }), await p.waitQueueJobs(J)) : !0
        }, []),
        M = Qe(({
            task: J,
            prompt: te,
            succeed: ce,
            blocked: le,
            embedTitle: pe
        }) => {
            c.has(J) && k({
                type: "system",
                status: ce ? void 0 : "error",
                content: `发送第 ${c.finished.length+1}/${c.length} 条提示词${ce?"成功":"失败"}${pe?`【${pe}】`:""}：${te}${le?`，当前排队任务已满：${p.maxQueuedJobs}，稍后自动重试`:""}`
            })
        }, []),
        P = Qe(() => {
            f.current && clearTimeout(f.current), parentNode.current = 0, p.stopWaitQueueJobs(), c.reset(), n.current = !1, i.current = !1, B()
        }, []),
        j = Qe(() => {
            f.current && clearTimeout(f.current), parentNode.current = 0, p.stopWaitQueueJobs(), i.current = !1, B()
        }, []),
        H = Qe(async () => {
            const J = c.next(o.current);
            if (parentNode.current || (parentNode.current = Date.now()), s.current = J) {
                if (n.current = !0, i.current = !0, B(), !await A(J) || s.current !== J || !i.current || !n.current) return;
                if (await c.run(J), c.unfinished.length && i.current && n.current) f.current = setTimeout(() => {
                    H()
                }, generateDelayTime());
                else {
                    const ce = Date.now(),
                        le = parentNode.current,
                        pe = le ? Cp(ce - le) : "",
                        we = pe ? `共花费${pe}，` : "";
                    c.length && k({
                        type: "system",
                        status: "success",
                        actions: {
                            reward: !0,
                            feedback: !0
                        },
                        content: `提示词发送完毕，共发送 ${c.length} 个任务，成功 ${c.succeed.length} 个，失败 ${c.failed.length} 个，${we}请在 Discord 中查看进度`
                    }), P()
                }
            } else P()
        }, []);
    async function G() {
        const {
            channel_id: J,
            guild_id: te
        } = Jl();
        try {
            const ce = await p.info({
                channel_id: J,
                guild_id: te,
                server: N
            });
            ce.subscription !== "basic" && ce.jobMode === "fast" && k({
                type: "system",
                status: "warn",
                content: "请注意，当前处于 Fast 模式，可以暂停任务，使用 /settings 设置为 Relaxed 模式后再恢复执行"
            }), k({
                type: "system",
                content: `当前排队任务数量为 ${ce.queueJobs}，其中 Relaxed 排队数量为 ${ce.queuedJobsRelax}，Fast 排队数量为 ${ce.queuedJobsFast}`
            }), console.log("msmQueueJobs", p.getQueueJobs()), console.log("infoQueueJobs", ce.queueJobs)
        } catch {
            k({
                type: "system",
                content: `当前排队任务数量为 ${p.getQueueJobs()}`
            })
        }
    }

    function ne() {
        k({
            type: "system",
            status: "warn",
            content: `手动终止剩余 ${c.unfinished.length} 个任务，已发送 ${c.finished.length}/${c.length} 个任务，成功 ${c.succeed.length} 个，失败 ${c.failed.length} 个`
        }), P()
    }

    function ee() {
        i.current ? (k({
            type: "system",
            status: "warn",
            content: `手动暂停剩余 ${c.unfinished.length} 个任务，已发送 ${c.finished.length}/${c.length} 个任务，成功 ${c.succeed.length} 个，失败 ${c.failed.length} 个`
        }), j()) : (k({
            type: "system",
            content: `恢复发送剩余 ${c.unfinished.length}/${c.length} 个任务，开始发送...`
        }), H())
    }

    function Q() {
        kp(), w([]), R([]), E(xs())
    }

    function Z(J) {
        o.current = J
    }

    function ve(J) {
        var te;
        C(J), (te = a.current) == null || te.focus()
    }

    function me(J, te) {
        const ce = c.unfinished.length;
        c.add(J.map(le => {
            const pe = {
                fn: async () => {
                    const we = le.prompt;
                    try {
                        const U = await p.imagine(le),
                            De = (U == null ? void 0 : U.status) || "started";
                        if ((U == null ? void 0 : U.status) === "blocked") throw M({
                            task: pe,
                            prompt: we,
                            succeed: !1,
                            blocked: !0,
                            embedTitle: U == null ? void 0 : U.embedTitle
                        }), new Error(`EmbedError: ${U==null?void 0:U.embedTitle}`);
                        if (De === "error") throw M({
                            task: pe,
                            prompt: we,
                            succeed: !1,
                            embedTitle: U == null ? void 0 : U.embedTitle
                        }), new Error(`EmbedError: ${U==null?void 0:U.embedTitle}`);
                        return M({
                            task: pe,
                            prompt: we,
                            succeed: !0,
                            embedTitle: U == null ? void 0 : U.embedTitle
                        }), U
                    } catch (U) {
                        throw U instanceof Error && U.message.indexOf("EmbedError") > -1 || M({
                            task: pe,
                            prompt: we,
                            succeed: !1,
                            embedTitle: "Unknown Error"
                        }), U
                    }
                },
                opts: le
            };
            return pe
        })), ce ? (k({
            type: "system",
            content: `添加 ${J.length} 个任务到队列中，当前总任务数 ${c.length}，已发送 ${c.finished.length} 个任务`
        }), !i.current && H()) : (k({
            type: "system",
            content: te ? `上次一共存在 ${J.length} 个未完成任务，开始发送...` : `匹配到 ${J.length} 个提示词，开始发送...`
        }), H())
    }

    function Ae() {
        var J;
        (J = d.current) != null && J.length ? me(d.current, !0) : k({
            type: "system",
            status: "error",
            content: "没有发现上次未完成的任务，无法继续执行，可能已经操作过一次了"
        })
    }

    function He(J) {
        J = J.trim();
        const te = Ap(J);
        if (k({
                type: "user",
                content: J
            }), te.length) {
            const {
                channel_id: ce,
                guild_id: le
            } = Jl();
            me(te.map(pe => ({
                prompt: pe,
                channel_id: ce,
                guild_id: le,
                server: N
            })))
        } else k({
            type: "system",
            content: "没有找到匹配的提示词"
        })
    }
    return setupAutoJourneyListener(J => {
        He(J)
    }), be(() => {
        Ia()
    }, [S, x]), be(() => {
        component && (Ia(), a.current.focus())
    }, [component]), be(() => {
        F === "prompt" && Ia()
    }, [F]), be(() => {
        var J;
        window.addEventListener("beforeunload", () => {
            c.unfinished.length && Ip(c.unfinished.map(te => te.opts))
        }, !1), d.current = Mp(), (J = d.current) != null && J.length && (k({
            type: "system",
            status: "warn",
            content: `可能因为页面意外关闭，存在上次 ${d.current.length} 个未完成的任务，是否继续执行？`,
            actions: {
                resume: !0
            }
        }), Op())
    }, []), z("div", {
        className: he({
            "auto-midjourney-container": !0,
            "auto-midjourney-container-zoom": v,
            "auto-midjourney-hidden": !component
        }),
        children: [z(dy, {
            server: N,
            zoom: v,
            onZoomChange: h,
            onClose: nextSibling
        }), z("div", {
            className: "auto-midjourney-body",
            children: [z(TabPanel, {
                index: T,
                onChange: D,
                tabs: ["发送提示词", z(subDOM, {
                    children: ["生成提示词 ", z("img", {
                        src: yd
                    })]
                })],
                children: [z(TabPanel.Panel, {
                    className: "auto-midjourney-panel-prompt",
                    children: z(runWelcomeNote, {
                        messages: S,
                        newMessages: x,
                        dateTime: I,
                        onResume: Ae
                    })
                }), z(TabPanel.Panel, {
                    children: z("div", {
                        className: "auto-midjourney-gpt",
                        children: z("iframe", {
                            src: "https://poe.com/Midjourney",
                            frameBorder: "0",
                            height: "100%",
                            width: "100%"
                        })
                    })
                })]
            }), z(createAutoMidJourneyServers, {
                server: N,
                onServerChange: ve
            })]
        }), z(my, {
            ref: a,
            tab: F,
            stop: n.current,
            pause: i.current,
            server: N,
            placeholder: `正在使用 ${Je.servers[N].name}，
支持 --repeat 参数，请注意关闭 Fast mode，
输入提示词并按 Enter 发送，换行请按 Ctrl + Enter`,
            onClear: Q,
            onStop: ne,
            onPause: ee,
            onSend: He,
            onInfo: G,
            onRandomChange: Z
        })]
    })
}

function createAutoMidJourneyTrigger({
    visible: isVisible = !0,
    onOpen: openCallback
}) {
    return z("div", {
        className: he({
            "auto-midjourney-trigger": !0,
            "auto-midjourney-hidden": !isVisible
        }),
        onClick: openCallback,
        children: [z("img", {
            src: picA
        }), z("span", {
            children: "打开"
        })]
    })
}
class xy extends newInt {
    constructor() {
        super(...arguments);
        assignProperty(this, "state", {
            error: null
        })
    }
    static getDerivedStateFromError(parentNode) {
        return {
            error: parentNode.message
        }
    }
    componentDidCatch(parentNode) {
        console.error(parentNode), this.setState({
            error: parentNode.message
        })
    }
    render() {
        return this.state.error ? z("p", {
            children: ["Oh no! We ran into an error: ", this.state.error]
        }) : this.props.children
    }
}

function Sy() {
    const [component, nextSibling] = ie(!1);
    return z(subDOM, {
        children: z(xy, {
            children: [z(createAutoMidJourneyTrigger, {
                visible: !component,
                onOpen: () => nextSibling(!0)
            }), z(yy, {
                visible: component,
                onClose: () => nextSibling(!1)
            })]
        })
    })
}

// 创建AutoMidJourney根元素的函数
function createAutoMidJourneyRoot() {
    // 创建一个 div 元素作为根元素
    const rootElement = document.createElement("div");
    
    // 设置根元素的类名为 "auto-midjourney-root"
    rootElement.className = "auto-midjourney-root";
    
    // 将根元素添加到 document.body 中
    document.body.appendChild(rootElement);
    
    // 对根元素进行进一步处理或初始化，使用了 Cn、z、Sy 这三个函数
    createRootDOM(z(Sy, {}), rootElement);
  }
  
  // 设置定时器，每隔 300 毫秒执行一次回调函数
  const Ay = setInterval(() => {
    // 检查 document.head 和 document.body 是否存在
    if (document.head && document.body) {
      // 清除定时器 Ay
      clearInterval(Ay);
      
      // 调用创建AutoMidJourney根元素的函数
      createAutoMidJourneyRoot();
    }
  }, 300);
  
