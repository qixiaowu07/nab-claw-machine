window.AIService = {
  _dollDatabase: [
    { keywords: ['hello kitty', 'kitty', '凯蒂猫', 'kt猫', 'hello'], name: 'Hello Kitty', emoji: '🐱', isAuthentic: true, secondaryPrice: 45, position: '前排偏右堆顶', reason: '三丽鸥经典正版IP，大头造型重心稳定', bafflePref: '中', gripPref: '中', technique: '抓头部蝴蝶结下方直抓', steps: ['移动爪子到Kitty头顶正上方', '对准蝴蝶结下方的头部重心', '稳定下抓包住头部后收爪'] },
    { keywords: ['星之卡比', '卡比', 'kirby'], name: '星之卡比', emoji: '⭐', isAuthentic: true, secondaryPrice: 55, position: '洞口附近偏左', reason: '正版IP娃娃价值高，圆滚滚身体重心明确', bafflePref: '中', gripPref: '中', technique: '抓脖子/腋下直抓', steps: ['移动爪子到卡比头顶正上方', '对准脖子与身体连接处下抓', '收爪后轻微上提利用惯性带出'] },
    { keywords: ['星黛露', 'stella', '露', '兔子', '兔'], name: '星黛露', emoji: '🐰', isAuthentic: true, secondaryPrice: 85, position: '中间偏右堆顶', reason: '迪士尼正版，长耳造型好勾，二级市场价格高', bafflePref: '高', gripPref: '强', technique: '勾耳甩爪', steps: ['移到星黛露头顶偏右', '利用甩爪勾住长耳朵', '借助摆动惯性甩向洞口'] },
    { keywords: ['玲娜贝儿', '贝儿', 'linabell', '狐狸', '小狐狸'], name: '玲娜贝儿', emoji: '🦊', isAuthentic: true, secondaryPrice: 110, position: '前排中央', reason: '迪士尼顶流正版款，二级市场价格高，位置靠前好抓', bafflePref: '中', gripPref: '强', technique: '包身直抓', steps: ['爪子对准贝儿身体中心', '四面包围式下抓抓身体', '抓紧后稳定收爪'] },
    { keywords: ['库洛米', 'kuromi', '酷洛米'], name: '库洛米', emoji: '😈', isAuthentic: true, secondaryPrice: 65, position: '中间偏左', reason: '三丽鸥正版，帽子特征明显重心偏高', bafflePref: '中', gripPref: '中', technique: '抓帽子与身体连接处', steps: ['瞄准帽子和身体之间的缝隙', '让爪子卡住帽子边缘', '直抓提拉出洞口'] },
    { keywords: ['美乐蒂', 'melody', '美乐'], name: '美乐蒂', emoji: '🎀', isAuthentic: true, secondaryPrice: 50, position: '中间位置', reason: '三丽鸥正版，长耳朵造型容易勾', bafflePref: '中', gripPref: '中', technique: '勾耳甩爪', steps: ['移动到美乐蒂上方', '勾住长耳朵位置下抓', '利用甩出洞口'] },
    { keywords: ['玉桂狗', '大耳狗', 'cinnamoroll', '肉桂狗'], name: '玉桂狗', emoji: '🐶', isAuthentic: true, secondaryPrice: 60, position: '偏上位置', reason: '三丽鸥正版，大耳朵是最佳抓取点', bafflePref: '中', gripPref: '中', technique: '夹耳朵直抓', steps: ['对准大耳朵根部', '爪子夹住两只大耳', '垂直上提取出'] },
    { keywords: ['皮卡丘', 'pikachu', '比卡丘'], name: '皮卡丘', emoji: '⚡', isAuthentic: true, secondaryPrice: 70, position: '前排右侧', reason: '宝可梦正版，黄身醒目，耳朵可勾', bafflePref: '中', gripPref: '强', technique: '夹头直抓', steps: ['对准头部两侧', '爪子卡住耳朵下方', '用力收爪'] },
    { keywords: ['小熊', '熊', '轻松熊', 'rilakkuma'], name: '棕色小熊', emoji: '🧸', isAuthentic: false, secondaryPrice: 0, position: '左下角', reason: '普通款但位置好，适合新手练手', bafflePref: '低', gripPref: '中', technique: '抱身直抓', steps: ['对准小熊身体中部', '环抱式下抓', '直接提出'] },
    { keywords: ['猫咪', '猫', '猫猫'], name: '粉色猫咪', emoji: '🐱', isAuthentic: false, secondaryPrice: 0, position: '中间偏右', reason: '普通款，圆身易抓', bafflePref: '中', gripPref: '中', technique: '抓身体重心', steps: ['对准猫咪身体中心', '下抓时包住身体', '收爪提出'] },
    { keywords: ['鸭子', '小鸭', '鸭'], name: '黄色小鸭', emoji: '🦆', isAuthentic: false, secondaryPrice: 0, position: '上层', reason: '普通款，体积小但位置高', bafflePref: '高', gripPref: '弱', technique: '轻抓头部', steps: ['对准鸭头位置', '轻轻下抓包住头部', '小心提拉出洞'] },
    { keywords: ['独角兽', 'unicorn'], name: '粉色独角兽', emoji: '🦄', isAuthentic: true, secondaryPrice: 40, position: '中间偏上', reason: '造型独特，角可作为勾取点', bafflePref: '中', gripPref: '中', technique: '勾角甩爪', steps: ['利用角作为勾点', '甩爪勾住角部', '借助摆动带出'] },
    { keywords: ['恐龙', 'dino'], name: '绿色恐龙', emoji: '🦖', isAuthentic: false, secondaryPrice: 0, position: '右下', reason: '普通款，长尾可拖', bafflePref: '中', gripPref: '中', technique: '拖尾法', steps: ['抓住尾巴根部', '向洞口方向拖拽', '拖到洞口收爪'] },
    { keywords: ['企鹅', 'penguin'], name: '蓝色企鹅', emoji: '🐧', isAuthentic: false, secondaryPrice: 0, position: '前排左', reason: '普通款，圆身好抓', bafflePref: '低', gripPref: '强', technique: '包身直抓', steps: ['对准企鹅正上方', '四面包围下抓', '垂直提出'] }
  ],

  _detectDolls(text) {
    if (!text) return [];
    const lower = text.toLowerCase();
    const detected = [];
    const matched = new Set();

    for (const doll of this._dollDatabase) {
      for (const kw of doll.keywords) {
        if (lower.includes(kw.toLowerCase())) {
          if (!matched.has(doll.name)) {
            matched.add(doll.name);
            detected.push({ ...doll });
          }
          break;
        }
      }
    }

    if (detected.length === 0) {
      detected.push({ ...this._dollDatabase[0] });
      detected.push({ ...this._dollDatabase[8] });
      detected.push({ ...this._dollDatabase[9] });
    } else if (detected.length < 3) {
      const fillers = [this._dollDatabase[8], this._dollDatabase[9], this._dollDatabase[10]];
      for (const f of fillers) {
        if (detected.length >= 4) break;
        if (!matched.has(f.name)) {
          detected.push({ ...f });
        }
      }
    }

    return detected.map(d => ({
      name: d.name,
      position: d.position,
      isAuthentic: d.isAuthentic,
      secondaryPrice: d.secondaryPrice
    }));
  },

  _generateSmartResult(description, isPhoto = false) {
    const detectedDolls = this._detectDolls(description);

    if (isPhoto) {
      detectedDolls.forEach(d => {
        d.isAuthentic = false;
        d.secondaryPrice = 0;
      });
    }

    const target = detectedDolls[0];
    const targetInfo = this._dollDatabase.find(d => d.name === target.name) || this._dollDatabase[0];

    const baffleOptions = ['低', '中', '高'];
    const gripOptions = ['弱', '中', '强'];

    let baffleHeight = targetInfo.bafflePref || '中';
    let gripStrength = targetInfo.gripPref || '中';
    let technique = targetInfo.technique || '直抓';
    let successRate = 65;

    if (description) {
      if (description.includes('高挡板') || description.includes('挡板高')) { baffleHeight = '高'; successRate -= 10; }
      if (description.includes('低挡板') || description.includes('挡板低')) { baffleHeight = '低'; successRate += 10; }
      if (description.includes('爪力强') || description.includes('强力抓') || description.includes('爪紧')) { gripStrength = '强'; successRate += 8; }
      if (description.includes('爪力弱') || description.includes('爪松') || description.includes('滑')) { gripStrength = '弱'; successRate -= 12; }
      if (description.includes('甩爪')) { technique = '甩爪'; successRate += 5; }
      if (description.includes('好抓') || description.includes('容易')) { successRate += 10; }
      if (description.includes('难抓') || description.includes('坑')) { successRate -= 15; }
    }

    if (isPhoto) {
      successRate = Math.min(88, Math.max(40, successRate - 3));
    } else {
      successRate = Math.min(92, Math.max(35, successRate + (targetInfo.isAuthentic ? 5 : -5)));
    }

    let difficulty = '中等';
    if (successRate >= 70) difficulty = '简单';
    if (successRate < 50) difficulty = '困难';

    const costPerGrab = 3;
    const avgAttempts = Math.ceil((100 - successRate) / 15) + 1;
    const estimatedCost = avgAttempts * costPerGrab;
    const expectedProfit = (!isPhoto && target.isAuthentic) ? Math.max(0, target.secondaryPrice - estimatedCost) : 0;

    return {
      dolls: detectedDolls,
      recommendedTarget: {
        name: target.name,
        position: targetInfo.position,
        reason: targetInfo.reason
      },
      successRate: successRate,
      difficulty: difficulty,
      baffleHeight: baffleHeight,
      gripStrength: gripStrength,
      technique: technique,
      steps: targetInfo.steps || ['移动爪子到目标上方', '对准位置下抓', '收爪看结果'],
      estimatedCost: estimatedCost,
      expectedProfit: expectedProfit,
      warnings: isPhoto ? [
        baffleHeight === '高' ? '挡板较高，建议优先抓靠前的娃娃' : '注意观察爪子闭合后的包裹度',
        gripStrength === '弱' ? '爪力偏弱，建议抓靠近洞口的娃娃' : '抓稳后等2秒再收爪，不要心急',
        '💡 抓到娃娃后请线下确认为正版，再标记二手价格'
      ] : [
        baffleHeight === '高' ? '挡板较高，建议找重心低的娃娃' : '注意观察爪子闭合力度',
        gripStrength === '弱' ? '爪力偏弱，不要投入过多游戏币' : '抓稳后再收爪，不要心急',
        target.isAuthentic ? '正版娃娃价值高，抓到就是赚到！' : '注意辨别正版与普通娃娃'
      ],
      _isDemo: true,
      _isPhoto: isPhoto
    };
  },

  async analyzeText(description) {
    try {
      if (!window.AI_CONFIG.apiKey || window.AI_CONFIG.apiKey.trim() === '' || window.AI_CONFIG.demoMode) {
        return this._generateSmartResult(description, false);
      }

      const userPrompt = `请分析以下娃娃机情况，给出抓取策略：

${description}

请返回严格的JSON格式，不要有其他文字。`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(window.AI_CONFIG.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${window.AI_CONFIG.apiKey}`
        },
        body: JSON.stringify({
          model: window.AI_CONFIG.model,
          messages: [
            { role: 'system', content: window.AI_CONFIG.systemPrompt },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.7,
          max_tokens: 1024
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API请求失败: ${response.status}`);
      }

      const data = await response.json();
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('API返回格式异常');
      }

      const content = data.choices[0].message.content.trim();
      return this.parseAIResponse(content, false);
    } catch (e) {
      console.warn('AI文本分析失败，使用智能演示数据:', e.message);
      return this._generateSmartResult(description, false);
    }
  },

  async analyzeImage(imageBase64, description = '') {
    try {
      if (!window.AI_CONFIG.apiKey || window.AI_CONFIG.apiKey.trim() === '' || window.AI_CONFIG.demoMode) {
        return this._generateSmartResult(description || 'hello kitty 娃娃机 多个娃娃 挡板中等高度', true);
      }

      const photoPrompt = `这是一张娃娃机的照片。${description ? '补充说明：' + description : ''}
请仔细观察照片，分析：1)识别画面中可见的娃娃种类（根据颜色、形状推断）；2)判断挡板大致高度；3)分析爪子位置和娃娃分布；4)给出最佳抓取目标和策略。

注意：照片无法100%判断娃娃是否正版，请将所有娃娃的isAuthentic字段设为false，由用户抓到后线下确认。

请返回严格的JSON格式，不要有其他文字。`;

      const userContent = [
        {
          type: 'image_url',
          image_url: { url: imageBase64 }
        },
        {
          type: 'text',
          text: photoPrompt
        }
      ];

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000);

      const response = await fetch(window.AI_CONFIG.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${window.AI_CONFIG.apiKey}`
        },
        body: JSON.stringify({
          model: window.AI_CONFIG.visionModel,
          messages: [
            { role: 'system', content: window.AI_CONFIG.systemPromptPhoto },
            { role: 'user', content: userContent }
          ],
          temperature: 0.7,
          max_tokens: 1024
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errText = await response.text().catch(() => '');
        throw new Error(`API请求失败: ${response.status} ${errText.substring(0, 200)}`);
      }

      const data = await response.json();
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('API返回格式异常');
      }

      const content = data.choices[0].message.content.trim();
      return this.parseAIResponse(content, true);
    } catch (e) {
      console.warn('AI视觉分析失败，使用智能演示数据:', e.message);
      return this._generateSmartResult(description || 'hello kitty 娃娃机 多个娃娃 挡板中等', true);
    }
  },

  parseAIResponse(content, isPhoto = false) {
    let jsonStr = content;
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonStr = jsonMatch[0];
    }

    try {
      const result = JSON.parse(jsonStr);
      const dolls = result.dolls && result.dolls.length > 0 ? result.dolls : [
        { name: isPhoto ? 'Hello Kitty' : '粉色猫咪', position: '前排偏右', isAuthentic: false, secondaryPrice: 0 }
      ];

      if (isPhoto) {
        dolls.forEach(d => { d.isAuthentic = false; d.secondaryPrice = 0; });
      }

      return {
        dolls: dolls,
        recommendedTarget: result.recommendedTarget || { name: dolls[0].name, position: '画面中央', reason: '位置最佳' },
        successRate: Math.min(95, Math.max(30, result.successRate || 60)),
        difficulty: result.difficulty || '中等',
        baffleHeight: result.baffleHeight || '中',
        gripStrength: result.gripStrength || '中',
        technique: result.technique || '直抓',
        steps: result.steps && result.steps.length > 0 ? result.steps : ['移动爪子到目标上方', '对准位置下抓', '收爪看结果'],
        estimatedCost: result.estimatedCost || 9,
        expectedProfit: isPhoto ? 0 : (result.expectedProfit || 0),
        warnings: result.warnings && result.warnings.length > 0 ? result.warnings : (isPhoto ? ['💡 抓到后请线下确认正版再标记价格'] : ['注意观察爪子力度'])
      };
    } catch (e) {
      console.warn('JSON解析失败，使用智能演示数据:', e);
      return this._generateSmartResult('', isPhoto);
    }
  },

  saveApiKey(key) {
    if (key && key.trim() !== '') {
      window.AI_CONFIG.apiKey = key.trim();
      window.AI_CONFIG.demoMode = false;
      localStorage.setItem('nab_ai_api_key', key.trim());
    } else {
      this.resetApiKey();
    }
  },

  resetApiKey() {
    window.AI_CONFIG.apiKey = window.AI_CONFIG.defaultApiKey;
    window.AI_CONFIG.demoMode = false;
    localStorage.removeItem('nab_ai_api_key');
  },

  isConfigured() {
    return true;
  },

  hasCustomKey() {
    const savedKey = localStorage.getItem('nab_ai_api_key');
    return !!(savedKey && savedKey.trim() !== '');
  },

  isDemoMode() {
    return window.AI_CONFIG.demoMode;
  },

  getSmartDemoResult(description) {
    return this._generateSmartResult(description, false);
  }
};
