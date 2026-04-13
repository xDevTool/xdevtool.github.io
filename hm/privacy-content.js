const privacyContent = {
    'en': `
        <div class="header">
            <h1>Privacy Policy</h1>
            <p class="last-updated">Last Updated: April 12, 2026</p>
        </div>
        <div class="content">
            <section>
                <h2>1. Introduction</h2>
                <p>DevKit is a HarmonyOS developer toolbox. This Privacy Policy explains how the app handles information when you use its local debugging and utility features.</p>
            </section>

            <section>
                <h2>2. Information Processed by the App</h2>
                <p>DevKit mainly processes data locally on your device. Depending on the feature you use, the app may read or store:</p>
                <ul>
                    <li><strong>Preference and consent settings:</strong> theme, language, and privacy-consent status.</li>
                    <li><strong>Imported or exported local files:</strong> Markdown documents, JSON snapshots, images, and generated QR code PNG files that you explicitly choose through system pickers.</li>
                    <li><strong>Tool content and local history:</strong> scan history, Markdown content, text comparison content, color values, QR code source content, and jump-debug parameters you enter or generate in the app.</li>
                    <li><strong>Clipboard or share content you explicitly trigger:</strong> text, color values, QR content, symbol names, or files copied to the system pasteboard or shared through the system share panel when you tap copy/share actions.</li>
                    <li><strong>Basic device, network, and bundle information:</strong> device, display, battery, storage, current network, and bundle data displayed by the app to support developer tooling features.</li>
                    <li><strong>Analytics state and event data:</strong> limited usage-event data related to app launch, tab views, theme/language changes, and legal-document opens after you agree to the privacy terms.</li>
                </ul>
            </section>

            <section>
                <h2>3. Information We Do Not Collect by Default</h2>
                <p>DevKit does not require an account and does not collect personal identity information by default, including:</p>
                <ul>
                    <li>Name, phone number, or email address</li>
                    <li>Contacts, call history, or messages</li>
                    <li>Location data</li>
                    <li>Payment or financial information</li>
                    <li>Cloud profile data</li>
                </ul>
            </section>

            <section>
                <h2>4. How Data Is Used</h2>
                <p>Processed data is used only to provide app functionality, including:</p>
                <ul>
                    <li>Displaying device, network, and application information</li>
                    <li>Saving your UI preferences, privacy-consent choice, and local tool state</li>
                    <li>Supporting QR scanning, local document editing and preview, image color picking, color conversion, and jump-debug workflows</li>
                    <li>Restoring local history and generated content for convenience</li>
                    <li>Writing user-selected content to the system clipboard or system share panel when you explicitly request copy/share actions</li>
                    <li>Reporting basic usage analytics after consent to help improve the product</li>
                </ul>
            </section>

            <section>
                <h2>5. Local Storage</h2>
                <p>Most data used by DevKit is stored locally on your device through HarmonyOS application storage. You can remove this data by clearing the app data or uninstalling the app.</p>
            </section>

            <section>
                <h2>6. Permissions</h2>
                <p>DevKit may request or use system capabilities only when a related feature is used:</p>
                <ul>
                    <li><strong>Camera permission:</strong> used for QR code and barcode scanning.</li>
                    <li><strong>File access through system pickers:</strong> used when you explicitly import images or Markdown files, or export generated content.</li>
                    <li><strong>Network information capability:</strong> used to display current network type, interface, IP, DNS, route, and related diagnostics.</li>
                    <li><strong>Internet capability:</strong> used for optional analytics reporting after consent and for network-dependent developer workflows.</li>
                </ul>
                <p>The app requests or uses these capabilities based on feature usage and does not continuously collect unrelated background data.</p>
            </section>

            <section>
                <h2>7. Data Sharing</h2>
                <p>DevKit does not sell your data. Most tool content stays on your device. If you agree to the privacy terms, limited usage-event data may be sent to the analytics service provider described below for product analytics purposes. In addition, files or text are sent to other apps only when you explicitly invoke a system share action.</p>
            </section>

            <section>
                <h2>8. Third-Party Services</h2>
                <p>DevKit integrates the Umeng analytics SDK. The SDK may be preloaded when the app starts, and analytics event reporting is enabled only after you agree to the privacy terms in the app. Reported events are limited to product-usage events such as app launch, tab view, theme/language changes, and opening legal documents. Third-party services process their data according to their own terms and policies.</p>
            </section>

            <section>
                <h2>9. Security</h2>
                <p>We recommend that you protect your device with system security features such as a screen lock and system updates. Imported files, generated payloads, exported content, clipboard contents, and shared files should be handled carefully because they may contain technical or internal project data.</p>
            </section>

            <section>
                <h2>10. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. The latest version will be published in the app and on the official site with an updated date.</p>
            </section>

            <section>
                <h2>11. Contact</h2>
                <p>If you have questions about this Privacy Policy, contact us at <a href="mailto:kemp.xu@foxmail.com">kemp.xu@foxmail.com</a>.</p>
            </section>
        </div>
        <div class="footer">
            <a href="../index.html">← Back to Home</a>
            <p>&copy; 2026 xDevTool. All rights reserved.</p>
        </div>
    `,

    'zh-cn': `
        <div class="header">
            <h1>隐私政策</h1>
            <p class="last-updated">最后更新：2026年4月12日</p>
        </div>
        <div class="content">
            <section>
                <h2>1. 说明</h2>
                <p>DevKit 是一款 HarmonyOS 开发者工具箱。本隐私政策说明您在使用本应用本地调试与工具能力时，相关信息如何被处理。</p>
            </section>

            <section>
                <h2>2. 应用处理的信息</h2>
                <p>DevKit 主要在您的设备本地处理数据。根据您使用的功能，应用可能读取或保存以下信息：</p>
                <ul>
                    <li><strong>偏好与同意状态：</strong>主题、语言以及隐私同意状态。</li>
                    <li><strong>导入或导出的本地文件：</strong>您通过系统选择器主动选择的 Markdown 文档、JSON 快照、图片，以及应用生成并导出的二维码 PNG 文件。</li>
                    <li><strong>工具内容与本地历史：</strong>扫码历史、Markdown 文本、文本对比内容、颜色值、二维码源内容，以及您在应用内输入或生成的跳转调试参数。</li>
                    <li><strong>您主动触发的剪贴板或分享内容：</strong>当您点击复制或分享操作时，写入系统剪贴板或通过系统分享面板发送的文本、颜色值、二维码内容、图标名称或文件。</li>
                    <li><strong>基础设备、网络与包信息：</strong>用于展示开发工具能力所需的设备、显示、电池、存储、当前网络和应用包信息。</li>
                    <li><strong>统计状态与事件数据：</strong>在您同意隐私条款后，与应用启动、Tab 浏览、主题/语言切换、法律文档打开相关的有限使用事件数据。</li>
                </ul>
            </section>

            <section>
                <h2>3. 默认不收集的信息</h2>
                <p>DevKit 不要求您注册账号，也不会默认收集以下个人身份信息：</p>
                <ul>
                    <li>姓名、手机号、邮箱地址</li>
                    <li>通讯录、通话记录、短信内容</li>
                    <li>位置信息</li>
                    <li>支付或金融信息</li>
                    <li>云端个人资料</li>
                </ul>
            </section>

            <section>
                <h2>4. 数据用途</h2>
                <p>这些数据仅用于提供应用功能，包括：</p>
                <ul>
                    <li>展示设备、网络和应用信息</li>
                    <li>保存您的界面偏好、隐私同意选择和本地工具状态</li>
                    <li>支持扫码、本地文档编辑与预览、图片取色、颜色转换以及跳转调试工作流</li>
                    <li>恢复本地历史记录和生成内容，方便重复使用</li>
                    <li>在您主动点击复制或分享时，将相关内容写入系统剪贴板或调起系统分享面板</li>
                    <li>在获得同意后上报基础使用统计，用于改进产品</li>
                </ul>
            </section>

            <section>
                <h2>5. 本地存储</h2>
                <p>DevKit 使用的大部分数据都存储在您的设备本地 HarmonyOS 应用存储中。您可以通过清除应用数据或卸载应用删除这些内容。</p>
            </section>

            <section>
                <h2>6. 权限说明</h2>
                <p>DevKit 仅在相关功能被使用时申请或使用系统能力：</p>
                <ul>
                    <li><strong>相机权限：</strong>用于二维码和条形码扫描。</li>
                    <li><strong>通过系统文件选择器访问文件：</strong>用于您主动导入图片或 Markdown 文件，或导出生成内容。</li>
                    <li><strong>网络信息能力：</strong>用于展示当前网络类型、接口、IP、DNS、路由等诊断信息。</li>
                    <li><strong>网络能力：</strong>用于在获得同意后进行可选的统计上报，以及支持依赖网络的开发调试场景。</li>
                </ul>
                <p>应用会根据具体功能按需使用这些能力，不会持续收集与功能无关的后台数据。</p>
            </section>

            <section>
                <h2>7. 数据共享</h2>
                <p>DevKit 不会出售您的数据。大多数工具内容只保留在本地设备中。若您同意隐私条款，有限的使用事件数据可能会发送给下述统计服务提供方，用于产品统计分析。另外，只有在您主动执行系统分享操作时，相关文本或文件才会被发送给其他应用。</p>
            </section>

            <section>
                <h2>8. 第三方服务</h2>
                <p>DevKit 集成了友盟统计 SDK。该 SDK 可能在应用启动时进行预加载，而统计事件上报仅会在您于应用内同意隐私条款后启用。上报内容限于应用启动、Tab 浏览、主题/语言切换、法律文档打开等产品使用事件。第三方服务会按照其自身的条款与隐私政策处理相关数据。</p>
            </section>

            <section>
                <h2>9. 安全建议</h2>
                <p>建议您通过系统锁屏、系统更新等方式保护设备安全。由于导入文件、调试载荷、导出内容、剪贴板内容和分享文件可能包含技术信息或项目内部数据，请您谨慎处理相关内容。</p>
            </section>

            <section>
                <h2>10. 政策更新</h2>
                <p>我们可能不时更新本隐私政策。最新版本会发布在应用内和官方网站，并标注最近更新时间。</p>
            </section>

            <section>
                <h2>11. 联系方式</h2>
                <p>如果您对本隐私政策有任何问题，请通过 <a href="mailto:kemp.xu@foxmail.com">kemp.xu@foxmail.com</a> 联系我们。</p>
            </section>
        </div>
        <div class="footer">
            <a href="../index.html">← 返回首页</a>
            <p>&copy; 2026 xDevTool. 保留所有权利。</p>
        </div>
    `
};
