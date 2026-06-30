import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Brush,
  ChevronRight,
  CirclePlay,
  Code2,
  GalleryHorizontalEnd,
  Layers3,
  Mail,
  Menu,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import heroStudio from "./assets/hero-studio.webp";
import "./styles.css";

const metrics = [
  { value: "21", label: "高保真上线版本" },
  { value: "4.8x", label: "页面转化效率提升" },
  { value: "99", label: "体验目标分" }
];

const services = [
  {
    icon: <MousePointer2 size={22} />,
    title: "官网与增长页",
    text: "从首屏叙事、信息架构到响应式动效，做能被快速理解和主动点击的页面。"
  },
  {
    icon: <Workflow size={22} />,
    title: "产品原型与交互",
    text: "把复杂业务拆成清晰流程，交付可演示、可评审、可继续开发的前端原型。"
  },
  {
    icon: <Code2 size={22} />,
    title: "前端工程实现",
    text: "使用现代组件体系、性能预算和可维护样式，让视觉方案稳定落到浏览器里。"
  }
];

const projects = [
  {
    name: "Pulse CRM",
    type: "SaaS 控制台",
    accent: "teal",
    result: "+38% 激活率",
    detail: "重组销售线索、团队任务和收入预测视图，让一线团队减少跨页跳转。"
  },
  {
    name: "Aster Launch",
    type: "产品发布页",
    accent: "coral",
    result: "12 天上线",
    detail: "为硬件新品搭建首发页面、规格对比、预约转化与媒体素材区。"
  },
  {
    name: "Northline",
    type: "品牌官网",
    accent: "cobalt",
    result: "+64% 询盘",
    detail: "把咨询服务的抽象价值转化为案例、方法和报价入口。"
  }
];

const steps = ["定位", "原型", "视觉", "开发", "上线"];

function App() {
  return (
    <main>
      <section className="hero" aria-label="BAN Studio">
        <img
          className="hero__image"
          src={heroStudio}
          alt=""
          aria-hidden="true"
          decoding="async"
          fetchPriority="high"
          loading="eager"
        />
        <div className="hero__shade" />
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="BAN Studio 首页">
            <span className="brand__mark">B</span>
            <span>BAN Studio</span>
          </a>
          <div className="nav__links">
            <a href="#services">服务</a>
            <a href="#work">作品</a>
            <a href="#process">流程</a>
            <a href="#contact">联系</a>
          </div>
          <a className="nav__cta" href="mailto:hello@ban.studio">
            <Mail size={17} />
            <span>预约沟通</span>
          </a>
          <button className="icon-button nav__menu" aria-label="打开菜单">
            <Menu size={22} />
          </button>
        </nav>

        <div className="hero__content" id="top">
          <div className="hero__eyebrow">
            <Sparkles size={16} />
            数字产品 / 前端体验 / 品牌增长页面
          </div>
          <h1>BAN Studio</h1>
          <p>
            让你的想法变成漂亮、清晰、能上线的网站。我们把视觉设计、交互体验和前端工程放在同一张桌面上，一次完成从概念到发布。
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              开始项目
              <ArrowUpRight size={18} />
            </a>
            <a className="button button--ghost" href="#work">
              <CirclePlay size={18} />
              查看作品
            </a>
          </div>
        </div>

        <div className="metric-strip" aria-label="项目数据">
          {metrics.map((item) => (
            <div className="metric" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section intro">
        <div className="section__label">
          <BadgeCheck size={18} />
          明确、好看、可交付
        </div>
        <h2>把设计感和工程质量放到同一个标准里。</h2>
        <p>
          页面不是只要“炫”，也不是只要“能跑”。好的前端应该让品牌被记住，让用户少犹豫，让开发和后续迭代都有清楚边界。
        </p>
      </section>

      <section className="section services" id="services">
        <div className="section__heading">
          <div>
            <span className="kicker">SERVICES</span>
            <h2>从第一屏到上线后的细节。</h2>
          </div>
          <a className="text-link" href="#contact">
            获取报价 <ChevronRight size={18} />
          </a>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card__icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-band" id="work">
        <div className="work-band__inner">
          <div className="section__heading section__heading--light">
            <div>
              <span className="kicker">SELECTED WORK</span>
              <h2>适合被认真浏览的作品区。</h2>
            </div>
            <div className="work-band__tools" aria-label="作品状态">
              <span>2026</span>
              <GalleryHorizontalEnd size={20} />
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card project-card--${project.accent}`} key={project.name}>
                <div className="project-card__visual">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="project-card__content">
                  <div>
                    <p>{project.type}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <strong>{project.result}</strong>
                  <span>{project.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="process__copy">
          <span className="kicker">PROCESS</span>
          <h2>节奏紧凑，但每一步都有交付物。</h2>
          <p>
            我们先压缩不确定性，再进入视觉和开发。这样你看到的不只是好看的稿子，而是一条可以继续推进的上线路径。
          </p>
        </div>
        <div className="timeline">
          {steps.map((step, index) => (
            <div className="timeline__item" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="closing__panel">
          <div>
            <span className="kicker">READY</span>
            <h2>让下一个网站一打开就有质感。</h2>
            <p>告诉我们你的业务、目标和上线时间，48 小时内给出方向、页面范围和实施节奏。</p>
          </div>
          <div className="closing__actions">
            <a className="button button--primary" href="mailto:hello@ban.studio">
              hello@ban.studio
              <ArrowUpRight size={18} />
            </a>
            <div className="assurance">
              <ShieldCheck size={18} />
              <span>设计、动效、响应式与性能一并交付</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>BAN Studio</span>
        <span>© 2026</span>
        <span>Frontend crafted for launch.</span>
      </footer>
    </main>
  );
}

export default App;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
