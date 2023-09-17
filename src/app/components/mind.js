"use client";

import { useEffect } from "react";
import "jsmind/style/jsmind.css";

var mind = {
  meta: {
    name: "jsMind Map - 1694921638485",
    author: "hizzgdev@163.com",
    version: "0.6.5",
  },
  format: "node_tree",
  data: {
    id: "root",
    topic: "Speech",
    expanded: true,
    children: [
      {
        id: "aa133e06bae4f9ec",
        topic: "条件式引入",
        expanded: true,
        direction: "right",
        children: [
          {
            id: "aa13409a3988a811",
            topic: "不要鼓掌",
            expanded: true,
            children: [
              { id: "aa134a78fc034ced", topic: "探讨简单思考", expanded: true },
              {
                id: "aa134dea4c10e725",
                topic: "引出非形式主义的鼓掌",
                expanded: true,
              },
            ],
          },
        ],
      },
      {
        id: "aa1342423cd33b9f",
        topic: "介绍新的形式",
        expanded: true,
        direction: "right",
        children: [
          {
            id: "aa1350f33ceeb804",
            topic: "使用 html/css 来实现讲演的内容",
            expanded: true,
          },
        ],
      },
      {
        id: "aa1346dfbd223470",
        topic: "特性",
        expanded: true,
        direction: "left",
        children: [
          { id: "aa135a38b553421f", topic: "博大的 Web 生态", expanded: true },
          {
            id: "aa135f729a843793",
            topic: "演示",
            expanded: true,
            children: [
              { id: "aa13603ab93de6ad", topic: "视频播放", expanded: true },
              { id: "aa1361d74271b723", topic: "思维导图展示", expanded: true },
              { id: "aa1362f4c6dd53fb", topic: "网页内嵌", expanded: true },
            ],
          },
        ],
      },
      {
        id: "aa1347e4c7e3a60c",
        topic: "需要掌握的东西",
        expanded: true,
        direction: "left",
        children: [
          { id: "aa1365a6ca393b3d", topic: "html/css 基础", expanded: true },
          {
            id: "aa1366f642bcd21c",
            topic: "一点点学习能力和探究精神",
            expanded: true,
          },
        ],
      },
    ],
  },
};

var options = {
  container: "mind_container",
  editable: false,
  theme: "primary",
};

export default function Mind() {
  useEffect(() => {
    require("jsmind").show(options, mind);
  });

  return <div id="mind_container" className="flex justify-center items-center w-[80vw] h-[60vh]"></div>;
}
