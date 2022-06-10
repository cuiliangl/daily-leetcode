/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

const createLinkedListinkedList = require('../../utils/createdLinkedList')

// 两数相加
// 数组模拟
function addSum(l1, l2) {
  let i = 0
  let carry = 0
  const res = []
  const len = Math.max(l1.length, l2.length)

  while (i < len) {
    const n1 = arr1[i] || 0
    const n2 = arr2[i] || 0
    const sum = n1 + n2 + carry

    res.push(sum % 10)

    carry = Math.floor(sum / 10)

    i++
  }

  if (carry > 0) {
    res.push(carry)
  }

  return res
}

// const l1 = [2, 4, 3],
//   l2 = [5, 6, 4]

// const l1 = [0],
//   l2 = [0]

const arr1 = [9, 9, 9, 9, 9, 9, 9],
  arr2 = [9, 9, 9, 9]

// console.log(addSum(arr1, arr2))

// 迭代法
function addTwoNumbers(l1, l2) {
  let head = null,
    current = null
  let carry = 0

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    const sum = n1 + n2 + carry
    const node = new ListNode(sum % 10)

    if (!head) {
      head = current = node
    } else {
      current.next = node
      current = current.next
    }

    carry = Math.floor(sum / 10)

    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  console.log(head)

  if (carry > 0) {
    current.next = new ListNode(carry)
  }

  return head
}

// const l1 = createLinkedList([2, 4, 3])
// const l2 = createLinkedList([5, 6, 4])

const l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]),
  l2 = createLinkedList([9, 9, 9, 9])

// console.log(addTwoNumbers(l1, l2))

// 递归的方式
function addTwoNumbers1(l1, l2) {
  let head = null
  let current = null

  function func(l1, l2) {
    const sum = l1.val + l2.val
    let carry = Math.floor(sum / 10)
    let node = new ListNode(sum % 10)

    if (!head) {
      head = current = node
    } else {
      current.next = node
      current = current.next
    }

    if (l1.next || l2.next || carry !== 0) {
      if (l1.next) {
        l1 = l1.next
      } else {
        l1 = new ListNode()
      }

      if (l2.next) {
        l2 = l2.next
      } else {
        l2 = new ListNode()
      }

      l1.val = l1.val + carry

      func(l1, l2)
    }

    return head
  }

  return func(l1, l2)
}

// console.log(addTwoNumbers1(l1, l2).next.next.next.next.next)
