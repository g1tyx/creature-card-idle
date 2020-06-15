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
    'Clear board': '清除板',
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
    'production for the card to the right': '右边的卡片生产',
    'production for cards above and below this': '生产的卡片上面和下面都有',
    'Achievement unlocked!': '成就已解锁！',
    'Empower a Crab in Intro Realm': '让蟹进入入门领域',
    'Feeding Time': '喂养时间',
    '/sec with only Ghouls': '/秒 只有食尸鬼',
    '/sec with only Lil\' Lumberjacks and Hatchets': '/秒 只与莉尔伐木工人和斧头',
    'in Intro Realm': '在入门领域',
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
    '/sec. Not affected by any bonuses, nor by any disables/penalties': '/秒。 不受任何奖金或任何禁用/处罚的影响',
    'Golem': '傀儡',
    'Meteor': '流星',
    'Naga': '娜迦',
    'production for all other cards.': '所有其他卡的生产。',
    'Sheep': '羊',
    'production for the card left of this': '左面的卡的生产',
    'production for the card below this': '下面的卡的生产',
    'Ascend!': '转生!',
    'Are you sure?': '你确定要转生吗？',
    'You will have to unlock the grid slots again like you did in the beginning': '您将必须像开始时一样再次解锁网格插槽',
    'You will lose all of your cards': '您将丢失所有卡',
    'You\'ll receive': '你会得到',
    'Your card levels will NOT be reset': '您的卡级别不会重置',
    'You don\'t have enough': '你没有足够的',
    'While you were away, you earned...': '当您不在时，您获得了...',
    'Intro Realm': '入门领域',
    'Honey': '蜂蜜',
    'Lodge': '小屋',
    'Inn': '旅馆',
    'Adjust filters below.': '调整下面的过滤器。',
    'Haunted Woods': '鬼林',
    'No cards match your selected filters.': '没有与您选择的过滤器匹配的卡片。',
    'Can barely chop a twig.  But he tries.  +': '几乎不能砍树枝。 但是他尝试。 +',
    'Metal Pack XL': '金属包 XL',
    'Metal Pack': '金属包',
    'Mini Metal Pack': '小金属包',
    'Regular Pack XL': '标准包 XL',
    'Unlock next expansion': '解锁下一个扩展',
    'Lil\' Lumberjack': '莉尔伐木工人',
    'You were away for': '你离开了',
    '/sec, -': '/秒, -',
    '/sec.  Disable': '/秒.  禁用',
    '/sec.  Doesn\'t consume': '/秒。 不消耗',
    '/sec. Not affected by bonuses/penalties': '/秒。 不受奖金/罚金的影响',
    '/sec for every other Knight in play': '/秒，其他所有在场骑士',
    '/sec for every': '/秒对每个',
    'Armor': '盔甲',
    'Bubba': '布巴',
    'Crossbow': '弩',
    'Contains 1 random Tier 2 card. There are 17 card possibilities in Tier 2.': '包含1张随机2级卡。 第2级可能有17种卡。',
    'Contains a random Tier 1 card. There are 28 card possibilities in Tier 1.': '包含1张随机的1级卡片。 第1级可能有28种卡。',
    'Forest Inn': '森林旅馆',
    'Gargoyle': '石像鬼',
    'Gauntlet': '护手',
    'Hades': '地狱',
    'Hatchet': '小斧',
    'Investor Imp': '投资者小鬼',
    'Iron Golem': '铁魔像',
    'Iron Robot': '铁机器人',
    'Knight': '骑士',
    'Meat': '肉',
    'Miner': '矿工',
    'Pancakes': '薄煎饼',
    'Petrify': '石化',
    'Pipe': '管子',
    'Potion': '药水',
    'Scarecrow': '稻草人',
    'Sickle': '镰刀',
    'Starfire': '星火',
    'Sushi': '寿司',
    'The Risen': '复活者',
    'Valkyrie': '女武神',
    'Viking': '维京人',
    'Warpstone': '扭曲石',
    'Watchtower': '瞭望塔',
    'production for adjacent cards': '相邻卡片的生产',
    'production for adjacent Lil\' Lumberjacks': '相邻的莉尔伐木工人的生产',
    'production for all cards': '所有卡的生产',
    'production for card below': '下面的卡生产',
    'production for cards in this column': '此列中的卡片生产',
    'production for cards in this row': '此行卡片的生产',
    'production for other cards in row': '行内其他卡片的生产',
    'production for the card above': '上面的卡的生产',
    'production for the card below': '下面的卡的生产',
    'production for the card to the left': '左边卡的生产',
    ', and': ', 和',
    '/sec for card above': '/秒 以上的卡片',
    '/sec for card to the left': '/秒 左边的卡片',
    '/sec for cards in this row': '/秒 针对该行中的卡片',
    '/sec if a Dead Fish is in play': '/秒，如果有死鱼在玩',
    '/sec if an Ice Fish is below': '/秒 如果冰鱼在下面',
    '/sec, +': '/秒, +',
    '/sec, but only if an Ice Fish or Dead Fish is in play': '/秒，但只有当冰鱼或死鱼在游戏',
    '/sec. +': '/秒. +',
    '1B ether, 1B skulls, 1B feathers - coming soon': '1B以太，1B头骨，1B羽毛-即将推出',
    '1B ether, 1B skulls, 1B feathers': '1B以太，1B头骨，1B羽毛',
    'Baby Dragon': '龙宝宝',
    'Bigmouth': '大嘴巴',
    'Contains a random Tier 1 card. There are 19 card possibilities in Tier 1.': '包含一张随机的1级卡片。 第1级可能有19种卡。',
    'Contains a random Tier 3 card. There are 15 card possibilities in Tier 3.': '包含一张随机的3级卡片。 第3级可能有15种卡。',
    'Crawler': '爬行者',
    'Dead Fish': '死鱼',
    'Demon': '恶魔',
    'Fisherman': '渔民',
    'Fishery': '渔业',
    'for adjacent cards': '对于相邻的卡',
    'for all cards in this column': '对于此列中的所有卡片',
    'for all Iron Cats': '对于所有铁猫',
    'for card above': '对于上面的卡',
    'for card below': '对于下面的卡',
    'for card to the right': '用于右边的卡',
    'for cards above and below': '适用于上下卡',
    'for cards in this row': '用于此行中的卡片',
    'Fort': '堡垒',
    'Hell Pack': '地狱包',
    'Hell Pack XL': '地狱包 XL',
    'Hideaway': '隐匿处',
    'Horror': '恐怖',
    'Hosts ceremonies for you. The result': '为您主持仪式。 结果',
    'Ice Fish': '冰鱼',
    'Icestalker': '追冰者',
    'Igloo': '冰屋',
    'Iron Cat': '铁猫',
    'Knight Capt': '骑士上尉',
    'Kobold': '地精',
    'Lucy': '露西',
    'Mini Hell Pack': '小地狱包',
    'Mini Nightmare Pack': '小噩梦包',
    'Missionary': '传教士',
    'Nightmare Pack': '噩梦包',
    'Nightmare Pack XL': '噩梦包 XL',
    'Nightwatch': '守夜人',
    'Oasis': '绿洲',
    'Priestess': '女祭司',
    'production for card above': '上面的卡生产',
    'Ruins': '废墟',
    'Sharky': '鲨鱼',
    'Shellhouse': '贝壳屋',
    'Sign': '标志',
    'Slug': '鼻涕虫',
    'Sneaky Barrel': '卑鄙的桶',
    'Spearfisher': '鱼叉手',
    'Trampler': '践踏者',
    'Turtle': '乌龟',
    'Underworld': '地狱',
    'Wagon': '货车',
    'Warlock': '术士',
    'Werewolf': '狼人',
    'Winged Imp': '有翼小恶魔',
    'Yeti': '雪人',
    ' (maximum away time reached!': '（已达到最长离开时间！',
    'Contains 1 random Tier 2 card. There are 20 card possibilities in Tier 2.': '随机包含1张2级卡。 第2级可能有20种卡。',
    'Type': '类型',
    'Death Imp': '死亡小鬼',
    'Devourer': '吞噬者',
    'Frog': '青蛙',
    'Gwen': '格温',
    'Hellspider': '地狱蜘蛛',
    'Icy Outpost': '冰封前哨',
    'Jar of Death': '死亡之瓶',
    'Lizard': '蜥蜴',
    'Mana Potion': '法力药水',
    'Necromancer': '死灵法师',
    'Possessed': '群魔',
    'Rabbid': '狂暴',
    'Sailor': '水手',
    'Scimitar': '弯刀',
    'Shaman': '萨满',
    'Shield': '盾牌',
    'Timid Giant': '胆小的巨人',
    'Undertaker': '殡仪馆',
    ', critical hit chance x2.  If used on monster, +45% loot drops.': '，暴击几率x2。 如果用于怪物，则掉落率提高45％。',
    '. The boosted Hero resurrects if it dies.': '。 如果死亡，被提升的英雄会复活。',
    '[Boost]': '[提升]',
    '[Boost] +': '[提升]  +',
    '[Hero]': '[英雄]',
    '[Monster]': '[怪物]',
    'Arachnid': '蛛形纲动物',
    'Beast': '野兽',
    'Chest': '胸甲',
    'coming late December': '12月下旬到来',
    'Contains a random Tier 2 card. There are 21 card possibilities in Tier 2.': '包含一个随机的2级卡。2级有21种卡的可能性。',
    'Dwarf': '矮人',
    'Contains either a Swordsman or a Goblin.': '包含剑客或哥布林。',
    'Dingo': '野狗',
    'Egg': '蛋',
    'Goblin': '哥布林',
    'Heart': '心',
    'Mini Power Pack': '小型能量包',
    'Mini War Pack': '小型战争包',
    'Noob Pack': '新手包',
    'Parrot': '鹦鹉',
    'Plains of War': '战争平原',
    'Power Pack': '能量包',
    'Contains a random Tier 3 card. There are 16 card possibilities in Tier 3.': '',
    'Assassin': '刺客',
    'Flying Pig': '飞猪',
    'Girl': '女孩',
    'Heathen': '异教徒',
    'Helmet': '头盔',
    'Marauder': '掠夺者',
    'Phalanx': '方阵',
    'Pikeman': '枪兵',
    'Reptile': '爬虫',
    'Rogue': '流氓',
    'Spider King': '蜘蛛王',
    'Swamper': '沼泽地',
    'Tavern': '酒馆',
    'War Pack': '战争包',
    'War Pack XL': '战争包 XL',
    'Telepath': '心灵感应',
    'Adjacent cards consume no': '相邻卡不消耗',
    'Big Crab': '大螃蟹',
    'Cataclysm': '大灾变',
    'Forest Shroom': '森林蘑菇',
    'Death Knight': '死灵骑士',
    'Hood': '头巾',
    'Investor Dog': '投资者犬',
    'Iron Mine': '铁矿',
    'Mining Beast': '采矿野兽',
    'Noclops': '无凝块',
    'or': '或者',
    'Orc': '兽人',
    'production': '生产',
    'production and +': '生产和 +',
    'production and disable': '生产和禁用',
    'production for all cards. Disable all': '所有卡的生产。 禁用所有',
    'production for card to the right': '右侧的卡片生产',
    'Roo': '业务',
    'Safe Refuge': '安全避难所',
    'Skull Helm': '骷髅头盔',
    'Treant': '树精',
    'Warrior': '战士',
    '[Boost] -': '[提升] -',
    ', and have +': '，并具有+',
    '/sec if a Forest Shroom is in play': '/秒，如果正在进行森林修剪',
    'Calculating offline rewards': '计算离线奖励',
    'Clicking also shows more options.': '点击会显示更多选项。',
    'Import from Kongregate': '从Kongregate导入存档',
    'Kongregate username': 'Kongregate 用户名',
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
    [/^Contains (.+) random Tier (.+) cards. There are (.+) card possibilities in Tier (.+).$/, '包含$1张随机$2级卡。 第$4级可能有$3种卡。'],
    [/^Contains a random Tier (.+) card. There are (.+) card possibilities in Tier (.+).$/, '包含1张随机$1级卡。 第$3级可能有$2种卡。'],
    [/^(.+)achievement boost(.+)Goal(.+)$/, '$1成就提升$2目标$3'],
    [/^(.+) hours, (.+) minutes, (.+) seconds$/, '$1 小时, $2 分钟, $3 秒'],
    [/^Earnings:(.+)$/, '收益：$1'],
    [/^(.+) \(est. (.+)\/sec$/, '$1（est $2\/秒'],
    [/^(.+)If used on a monster, (.+) loot drops.$/, '$1如果用于怪物，则掉落率$2。'],
    [/^(.+)Monster: (.+) loot.$/, '$1怪物：$2战利品'],
    [/^= common(.+)$/, '= 普通$1'],
    [/^held \(min (.+)\/sec, max (.+)\/sec$/, '保持（最小$1\/秒，最大$2\/秒'],
    [/^(.+) wood, (.+) iron$/, '$1木头，$2铁'],
    [/^(.+) minutes, (.+) seconds$/, '$1分钟，$2秒'],
    [/^Combine (.+) cards to increase power$/, '合并$1张卡片以增加力量'],
    [/^You don\'t have enough gems.  You need (.+), but you only have$/, '您没有足够的宝石。 您需要$1，但只有'],
    [/^You don't have enough of that card to combine.  You need (.+), but you only have$/, '您没有足够的这张卡来组合。 您需要$1，但只有'],
    [/^(.+)Road to riches: Earn$/, '$1致富之路:挣钱'],
    [/^(.+)Feeding Time: Empower a Crab in Intro Realm$/, '$1喂食时间:让蟹进入入门领域'],
    [/^(.+)You Always Doubted Me: Earn 25\+$/, '$1你总是怀疑我:赚25+'],
    [/^(.+)Mr. Moneybags: Earn$/, '$1富翁先生:挣钱'],
    [/^(.+)Harder Than It Looks: Kill a Dead Fish in 4 or more rounds$/, '$1比看起来更难：在4个或更多回合中杀死一条死鱼'],
    [/^(.+)Mascot Slayer: In Plains of War, kill the Scarecrow in one hit$/, '$1吉祥物杀手：在战争平原上，一击杀死稻草人'],
    [/^(.+)Lil Jack, Big Axe: Earn \+$/, '$1莉尔杰克，大斧子：赚取+'],
    [/^(.+)Elon: Earn$/, '$1埃隆:赚'],
    [/^\/sec.  \+(.+) more$/, '\/秒。\+$1更多'],
    [/^(.+)Ascension!: Ascend, earning at least one gem, for the first time$/, '$1提升!:提升，第一次获得至少一个宝石'],
    [/^(.+)Abahcolypse Now: Have a sheep call a Meteor to the center of the earth$/, '$1现在有一只羊把流星召唤到地球的中心'],
    [/^(.+)Haunted Woods: Unlock the Haunted Woods expansion$/, '$1鬼林：解锁鬼林扩展'],
    [/^(.+)Plains of War: Unlock the Plains of War expansion$/, '$1平原战争：解锁平原战争的扩张'],
    [/^(.+)Raiding The Hobby Shop: Buy 100,000 5-card packs in one go$/, '$1突袭爱好商店：一次性购买100,000个5张卡包'],
    [/^(.+)Underworld: Unlock the Underworld expansion$/, '$1地狱：解锁地狱扩展'],
]);
