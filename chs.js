/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Ascension': '转生',
    'Cards': '卡牌',
    'Clear board': '',
    'Other': '其它',
    'Name': '名称',
    'Quantity': '数量',
    'Save layout': '保存布局',
    'Sort by': '排序方式',
    'Shop': '商店',
    'Tier': '等级',
    'Unlock slot': '解锁插槽',
    'Level (descending': '等级（降序',
    'Producers first': '生产者优先',
    'Filter by': '过滤',
    'Ghoul': '食尸鬼',
    'Effects first': '效果优先',
    'Rarity (ascending': '稀有度（升序',
    'Rarity (descending': '稀有度（降序',
    'Resource (ascending': '资源（升序',
    'Resource (descending': '资源（降序',
    'To play a card: click it, or drag it to an open slot on the left.': '要打出一张牌：单击它，或将其拖动到左侧的开口槽。',
    'Tier (ascending': '等级（升序',
    'Tier (descending': '等级（降序',
    'Earnings:  ': '收益：',
    'Eternal Exodus': '永恒出埃及记',
    'Emerald Shores': '翡翠海岸',
    'Ghoul card': '食尸鬼卡',
    'For each achievement earned, you earn ascension gems 2% faster.': '对于获得的每个成就，您获得转生宝石的速度都会提升2％。',
    'Current bonus': '当前奖励',
    'Coming to PC and consoles in 2020. Some art still placeholders.': '将于2020年进入PC和游戏机。一些艺术品仍然占位。',
    'Cards received': '收到卡',
    'can be spent on upgrades. They also increase the production/consumption numbers on all producer cards by +5% per gem in this realm, even if you spend the gems.': '可用于升级。 即使您花费了宝石，它们也会使该领域中每张宝石的所有生产者卡上的生产/消费数量增加+ 5％。',
    'Buy x': '购买 x',
    'Buy': '购买',
    'Buy max\n': '购买最大',
    'Big Pack': '大包',
    'based on your lifetime earnings across all ascensions.': '基于所有转生的你的终生收入。',
    'Ascension Shop': '转生商店',
    'Ascension shop': '转生商店',
    'Ascension resets the current realm (except card levels), but you gain': '转生会重置当前领域（卡级别除外），但您可以获得',
    'Ascend for': '转生得到',
    'Ascend': '转生',
    'all': '全部',
    'A monster-catching RPG set in the afterlife. Catch and fuse 150 unique demons as you journey to conquer Hell itself.': '来世的怪兽角色扮演游戏。 在征服地狱的旅程中，捕捉并融合150个独特的恶魔。',
    'Achievements': '成就',
    'Increases the time limit you can be offline and still gain resources by 4 hours (up to a maximum of 24). This bonus affects': '延长了您可以脱机但仍可获取资源4小时（最多24小时）的时间限制。 该奖金影响',
    'Mini Pack': '小包',
    'More games by Josh Forde': 'Josh Forde的更多游戏',
    'Offline cap increase': '离线上限提高',
    'OK': '确定',
    'Price': '价格',
    'Progress to next gem': '到下一个宝石的进度',
    'realms, not just the currently selected one. Current cap': '领域，而不仅仅是当前选择的领域。 当前上限',
    'Super Blackout': '超级停电',
    'Regular Pack': '标准包',
    'Super Pack': '超级包',
    'Super Pack+': '超级包+',
    'Trailer & wishlist at': '预告片和愿望清单',
    'Unlock "Haunted Woods" expansion (100k gold)\n': '锁“鬼屋”扩展（10万金币）',
    'You have': '你有',
    'Description': '描述',
    '/sec': '秒',
    'Close window': '关闭',
    'Enable music': '启用音乐',
    'Enable animations': '启用动画',
    'Enable sound effects': '启用音效',
    'Export': '导出',
    'Export save data': '导出存档',
    'Import save data': '导入存档',
    'Reset game': '重置游戏',
    'Qty': '数量',
    'Click a slot to the left.': '单击左侧的插槽。',
    'No unused cards left.': '没有剩余的未使用的卡。',
    'Or click a card to the left to remove it.': '或单击左侧的卡将其删除',
    'to buy more.': '购买更多。',
    'Upgrade': '升级',
    'Visit the': '访问',
    'Load layout': '加载布局',
    'Cancel': '取消',
    '= rare': '= 稀有度',
    'Gem': '宝石',
    'production for the cards above and below this': '上面和下面的卡片的生产',
    'Save': '保存',
    'Crab': '螃蟹',
    'Coin': '硬币',
    'Ice Sword': '冰剑',
    'Greedy Bird': '贪婪的鸟',
    'production for the card above this': '上面的卡的生产',
    'Save as new layout': '另存为新布局',
    'Slot to save in': '插槽保存在',
    'The worst card of all time.  Gives +1 Gold/sec.': '有史以来最糟糕的牌。 给予+1金/秒。',
    '/sec if a Mushroom is in play': '/秒，如果正在使用蘑菇',
    '/sec if this is the only card in play': '/秒（如果这是唯一的一张牌）',
    '/sec.  Extra +': '/秒。 额外+',
    '/sec. Extra +': '/秒。 额外+',
    'Close': '关闭',
    'Combine 10 cards to increase power': '结合10张卡以增加力量',
    'Lv.': '等级.',
    'Current level': '当前等级',
    'Mass upgrade by combining': '通过质量提升相结合',
    'Mass upgrade by combining cards': '通过组合卡片进行大规模升级',
    'Qty needed': '所需的数量',
    'Upgrade all kinds of cards (in this realm) where you have enough copies to combine.': '升级所有类型的卡（在此领域中），以使您有足够的副本进行组合。',
    'Upgrade by combining': '通过合并升级',
    'Upgrade by combining cards': '通过合并卡升级',
    'Upgrade for': '升级',
    'Upgrade with gems': '用宝石升级',
    'You currently have': '你当前有',
    'Scaredy Cat': '胆小鬼',
    'Gold Mine': '金矿',
    'Ghost': '幽灵',
    'Mace': '狼牙棒',
    'Adventuring Fox': '冒险狐狸',
    '/sec, but only if this is the only card in its row': '/秒，但前提是这是该行中唯一的卡片',
    'Mushroom': '蘑菇',
    'production for the card to the right': '生产的卡片要向右',
    'production for cards above and below this': '生产的卡片上面和下面都有',
    'Achievement unlocked!': '成就已解锁！',
    'Empower a Crab in Intro Realm': '让蟹进入入门领域',
    'Feeding Time': '喂养时间',
    '/sec with only Ghouls': '/秒 只有食尸鬼',
    '/sec with only Lil\' Lumberjacks and Hatchets': '/秒 只与小伐木工人和斧头',
    '[X] Road to riches: Earn': '[X]致富之路:挣钱',
    '[X] Feeding Time: Empower a Crab in Intro Realm': '[X]喂食时间:让蟹进入入门领域',
    '[ ] You Always Doubted Me: Earn 25+': '[ ]你总是怀疑我:赚25+',
    '[ ] Mr. Moneybags: Earn': '[ ]富翁先生:挣钱',
    '[ ] Lil Jack, Big Axe: Earn +': '[ ]律杰克，大斧子：赚取+',
    '[ ] Elon: Earn': '[ ]埃隆:赚',
    '[ ] Ascension!: Ascend, earning at least one gem, for the first time': '[ ]提升!:提升，第一次获得至少一个宝石',
    '[ ] Abahcolypse Now: Have a sheep call a Meteor to the center of the earth': '[ ]现在有一只羊把流星召唤到地球的中心',
    'in Intro Realm': '在介绍领域',
    'Beer': '啤酒',
    'production for other cards in this row': '此行中其他卡片的生产',
    '/sec. Disable': '/秒。 禁用',
    '/sec.  +': '/秒.  +',
    'Windmill': '风车',
    '/sec, but only if no cards are above or below it': '/秒，但前提是没有任何卡在上面或下面',
    'production for all other cards': '所有其他卡的生产',
    'Carrot': '胡萝卜',
    'Cultist': '信徒',
    'Skeleton': '骷髅',
    'Error exporting data.  Please ensure you\'re logged into Kongregate and connected to the internet.  If the problem persists, please try again in a minute.': '导出数据时出错。 请确保您已登录Kongregate并已连接到Internet。 如果问题仍然存在，请稍后再试。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(.+) \(\+(.+)\/sec$/, '$1 \(\+$2\/秒'],
    [/^Contains a random Tier (.+) card. Hopefully not a Ghoul.$/, '包含一张随机的$1级卡片。 希望不是食尸鬼。'],
    [/^Contains (.+) random Tier (.+) cards. There are (.+) card possibilities in Tier (.+).$/, '包含$1张随机第$2层卡。 第$3层有$4种可能。'],
    [/^(.+)achievement boost(.+)Goal(.+)$/, '$1成就提升$2目标$3'],
    [/^(.+) hours, (.+) minutes, (.+) seconds$/, '$1 小时, $2 分钟, $3 秒'],
    [/^Earnings:(.+)$/, '收益：$1'],
    [/^= common(.+)$/, '= 普通$1'],
    [/^You don\'t have enough gems.  You need (.+), but you only have$/, '您没有足够的宝石。 您需要$1，但只有'],
    [/^You don't have enough of that card to combine.  You need (.+), but you only have$/, '您没有足够的这张卡来组合。 您需要$1，但只有'],
]);