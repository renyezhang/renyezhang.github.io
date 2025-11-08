# 个人学术博客

一个简洁、现代的个人博客网站，用于展示学术论文、竞赛成果和技术博客文章。

> 💡 **想快速添加新论文？** 查看 [详细使用指南 USAGE.md](./USAGE.md)

## ✨ 特性

- 🎨 **简洁美观的设计** - 使用 Tailwind CSS 构建的现代化 UI
- 🌈 **优雅的配色方案** - 紫色渐变主题，专业且吸引眼球
- ✨ **流畅的动画效果** - 页面切换、卡片悬停、浮动等丝滑的交互动画
- 👤 **个人介绍区域** - 精美的 Hero Section 展示个人信息和统计数据
- 📄 **全宽论文展示** - 每篇论文占据整行，详细展示摘要和信息
- 🚀 **数据驱动设计** - 只需修改 JS 数据，无需编写 HTML，轻松添加新论文
- 📱 **完全响应式** - 适配桌面、平板和移动设备
- ⚡ **轻量高效** - 纯 HTML/CSS/JS 实现，无需构建步骤
- ⌨️ **键盘快捷键** - 支持 Alt+1/2/3 快速切换页面

## 📂 项目结构

```
Renyeeah2/
├── index.html          # 主页面文件
├── script.js           # 交互逻辑和论文数据配置
├── README.md          # 项目说明文档
└── USAGE.md           # 详细使用指南
```

## 🚀 快速开始

1. **直接打开**
   - 双击 `index.html` 文件即可在浏览器中查看

2. **使用本地服务器**（推荐）
   ```bash
   # 使用 Python
   python -m http.server 8000

   # 或使用 Node.js
   npx serve
   ```
   然后访问 `http://localhost:8000`

## 📖 页面结构

### 个人介绍区域（Hero Section）
- 渐变背景的精美展示区域
- 个人头像（浮动动画效果）
- 姓名和职位描述
- 个人简介
- 统计数据展示（发表论文数、获奖项目、技术文章）
- 社交媒体链接
- 向下滚动指示器

### 导航栏
位于个人介绍区域和内容展示区域之间，包含四个选项卡：
- 📚 学术论文
- 📖 小说作品
- 🏆 竞赛成果
- ✍️ 技术博客

### 内容展示区域

#### 1. 学术论文页面
- **布局**：每篇论文占据整行，展示完整信息
- **内容**：论文标题、发表期刊/会议、发表时间
- **标签**：论文级别标签（SCI分区、CCF等级等）
- **摘要**：详细的论文摘要
- **关键词**：研究领域标签
- **资源链接**：PDF、代码、数据集等
- **默认首页显示**

#### 2. 小说作品页面
- **分类展示**：按短篇小说、中长篇小说、长篇小说、诗歌四类分组显示
- **布局**：每类使用2列网格布局
- **内容**：作品标题、字数、创作时间、简介
- **标签**：作品风格和主题标签
- **链接**：阅读链接

#### 3. 竞赛成果页面
- 时间线形式展示竞赛成果
- 包含竞赛名称、获奖等级、时间和项目描述
- 使用不同颜色标识不同等级的奖项

#### 4. 技术博客页面
- 2列网格布局展示技术文章
- 包含文章标题、分类、日期和摘要
- 渐变背景卡片设计

## 🎨 自定义内容

### 添加新论文（超简单！）

只需要编辑 `script.js` 文件顶部的 `papersData` 数组即可。**不需要修改 HTML 代码！**

打开 `script.js`，找到文件开头的 `papersData` 数组，按照以下格式添加新论文：

```javascript
const papersData = [
    {
        title: "你的论文标题",
        authors: [
            { name: "张三", isCorresponding: true },  // 通讯作者设置为 true
            { name: "李四", isCorresponding: false }, // 非通讯作者设置为 false
            { name: "王五", isCorresponding: false }
        ],
        journal: "期刊或会议全称",
        date: "2024年3月",
        level: { text: "SCI一区", color: "purple" }, // color 可选: purple, yellow, green, blue
        tags: ["关键词1", "关键词2", "关键词3"], // 可以添加任意数量的标签
        links: [
            { icon: "📄", text: "PDF", url: "你的PDF链接" },
            { icon: "💻", text: "代码", url: "你的代码链接" },
            { icon: "📊", text: "数据", url: "你的数据链接" }
        ]
    },
    // 在这里添加更多论文...
];
```

#### 字段说明：

- **title**: 论文标题
- **authors**: 作者列表
  - `name`: 作者姓名
  - `isCorresponding`: 是否为通讯作者（true/false）
- **journal**: 发表期刊或会议名称
- **date**: 发表时间
- **level**: 论文级别
  - `text`: 显示的文字（如：SCI一区、CCF A类、核心期刊等）
  - `color`: 标签颜色（可选：`purple`、`yellow`、`green`、`blue`）
- **tags**: 关键词数组（自动配色）
- **links**: 资源链接数组
  - `icon`: 图标（emoji）
  - `text`: 链接文字
  - `url`: 链接地址

#### 示例：添加一篇新论文

```javascript
{
    title: "我的最新研究成果",
    authors: [
        { name: "我", isCorresponding: true },
        { name: "导师", isCorresponding: false }
    ],
    journal: "Nature Machine Intelligence",
    date: "2025年1月",
    level: { text: "顶刊", color: "purple" },
    tags: ["AI", "机器学习", "创新算法"],
    links: [
        { icon: "📄", text: "PDF", url: "https://example.com/paper.pdf" },
        { icon: "💻", text: "GitHub", url: "https://github.com/username/repo" }
    ]
}
```

保存文件后刷新页面，新论文就会自动显示！

### 添加新小说（同样简单！）

只需要编辑 `script.js` 文件中的 `novelsData` 数组即可。

打开 `script.js`，找到 `novelsData` 数组，按照以下格式添加新小说：

```javascript
const novelsData = [
    {
        title: "你的小说标题",
        category: "短篇小说",  // 可选：短篇小说、中长篇小说、长篇小说、诗歌
        wordCount: "8000字",   // 或 "15万字"、"诗集20首" 等
        date: "2024年10月",
        description: "小说的简介描述，介绍故事梗概、主题或特色...",
        tags: ["标签1", "标签2", "标签3"],  // 如：都市、科幻、治愈等
        link: "#"  // 阅读链接，可以是在线阅读地址
    },
    // 添加更多小说...
];
```

保存文件后刷新页面，新小说会自动按类别分组显示！

### 修改个人介绍
编辑 `index.html` 中 `class="hero-section"` 部分：

```html
<!-- 修改头像 -->
<div class="w-32 h-32 mx-auto rounded-full bg-white shadow-2xl flex items-center justify-center text-6xl float-animation">
    👨‍🎓  <!-- 修改为你的头像emoji或图片 -->
</div>

<!-- 修改姓名和标题 -->
<h1 class="text-5xl font-bold mb-4 fade-in-up">
    你的姓名
</h1>
<p class="text-2xl mb-6 opacity-90 fade-in-up">
    你的职位 | 研究方向
</p>

<!-- 修改统计数据 -->
<div class="text-3xl font-bold">12</div>  <!-- 修改为实际数字 -->
<div class="text-sm opacity-80 mt-1">发表论文</div>
```

### 修改竞赛成果
编辑 `index.html` 中 `id="competitions"` 部分的内容。

### 修改博客文章
编辑 `index.html` 中 `id="blog"` 部分的内容。

### 自定义配色
在 `index.html` 的 `<style>` 标签中修改渐变色：

```css
.gradient-bg {
    background: linear-gradient(135deg, #你的颜色1 0%, #你的颜色2 100%);
}
```

## ⚙️ 功能说明

### 键盘快捷键
- `Alt + 1`: 切换到学术论文页面
- `Alt + 2`: 切换到小说作品页面
- `Alt + 3`: 切换到竞赛成果页面
- `Alt + 4`: 切换到技术博客页面

### 动画效果
- **页面加载**: 整体淡入效果
- **Hero区域**: 从下到上的淡入动画，带延迟
- **头像浮动**: 持续的上下浮动动画
- **页面切换**: 淡入淡出效果
- **卡片加载**: 从下向上的淡入动画，带有延迟效果
- **卡片悬停**: 上移 + 阴影加深效果
- **导航指示器**: 平滑移动的下划线
- **向下箭头**: 弹跳动画提示用户滚动
- **社交图标**: 缩放悬停效果

### 响应式设计
- **桌面端**：
  - Hero区域完整展示
  - 论文卡片全宽显示，内容详细
  - 博客文章2列网格
- **平板端**：
  - 自适应布局
  - 统计信息保持3列
  - 博客文章2列网格
- **移动端**：
  - 单列布局
  - 统计信息自适应
  - 所有内容垂直堆叠

## 🛠️ 技术栈

- **HTML5** - 页面结构
- **Tailwind CSS** (CDN) - 样式框架
- **原生 JavaScript** - 交互逻辑
- **CSS3 动画** - 过渡和动画效果

## 📝 待办事项

- [ ] 添加搜索功能
- [ ] 实现文章详情页
- [ ] 添加深色模式
- [ ] 集成评论系统
- [ ] 添加 RSS 订阅
- [ ] SEO 优化

## 📄 许可证

MIT License

## 👤 作者

在 `index.html` 底部修改你的社交媒体链接：

```html
<a href="https://github.com/你的用户名" class="hover:text-purple-600">GitHub</a>
<a href="https://linkedin.com/in/你的用户名" class="hover:text-purple-600">LinkedIn</a>
<a href="mailto:你的邮箱" class="hover:text-purple-600">Email</a>
```

---

**提示**: 这是一个静态网站模板，你可以根据需要自由修改和扩展功能！
