const privacyContent = {
    'en': `
        <div class="header">
            <h1>Privacy Policy</h1>
            <p class="last-updated">Last Updated: January 16, 2026</p>
        </div>
        <div class="content">
            <section>
                <h2>1. Introduction</h2>
                <p>DevKit ("we," "our," or "the App") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information when you use our Android developer tools application.</p>
            </section>

            <section>
                <h2>2. Information We Collect</h2>
                <h3>2.1 Local Information</h3>
                <p>The following information is stored locally on your device:</p>
                <ul>
                    <li><strong>Installed Applications List:</strong> Used to display and manage apps on your device</li>
                    <li><strong>Device Information:</strong> Hardware specifications, Android version, screen resolution for display purposes</li>
                    <li><strong>User Preferences:</strong> Your app settings and customization options</li>
                    <li><strong>QR Code History:</strong> Previously scanned QR codes</li>
                </ul>

                <h3>2.2 Information Collected by Third-Party Services</h3>
                <p>DevKit uses the following third-party services that may collect data:</p>
                <ul>
                    <li><strong>Device Identifier (UUID):</strong> A unique device identifier is generated and sent to our server for anonymous user identification</li>
                    <li><strong>Firebase Analytics:</strong> Collects anonymous usage data to help us improve the app</li>
                    <li><strong>Firebase Crashlytics:</strong> Collects crash reports and diagnostic data (disabled in debug builds)</li>
                    <li><strong>Firebase Performance:</strong> Monitors app performance metrics</li>
                    <li><strong>Google AdMob:</strong> Displays advertisements and may collect advertising identifiers</li>
                </ul>

                <h3>2.3 Information We Do NOT Collect</h3>
                <ul>
                    <li>❌ Personal identification information (name, email, phone number)</li>
                    <li>❌ Location data</li>
                    <li>❌ Contacts or call logs</li>
                    <li>❌ Photos or media files</li>
                    <li>❌ Passwords or financial information</li>
                </ul>
            </section>

            <section>
                <h2>3. How We Use Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul>
                    <li>Display installed applications and their information</li>
                    <li>Show device specifications and system information</li>
                    <li>Provide developer tools and utilities</li>
                    <li>Save your preference settings</li>
                    <li>Improve app performance and user experience through analytics</li>
                    <li>Identify and fix bugs through crash reporting</li>
                    <li>Display relevant advertisements</li>
                    <li>Provide user feedback functionality</li>
                </ul>
            </section>

            <section>
                <h2>4. Data Storage</h2>
                <p>Local data is stored on your device using:</p>
                <ul>
                    <li>Room database for structured data</li>
                    <li>SharedPreferences/DataStore for user settings</li>
                    <li>Local file system for exported files</li>
                </ul>
                <p>Server-side data (device UUID, feedback submissions) is stored securely on our servers.</p>
                <p>You can clear all local app data at any time through Android Settings > Apps > DevKit > Storage > Clear Data.</p>
            </section>

            <section>
                <h2>5. Permissions</h2>
                <p>DevKit requests the following permissions:</p>
                <ul>
                    <li><strong>QUERY_ALL_PACKAGES:</strong> To list and display installed applications</li>
                    <li><strong>CAMERA:</strong> For QR code scanning functionality</li>
                    <li><strong>READ/WRITE_EXTERNAL_STORAGE:</strong> To export APK files and save data</li>
                    <li><strong>SYSTEM_ALERT_WINDOW:</strong> For overlay features (Current Activity, Color Picker)</li>
                    <li><strong>PACKAGE_USAGE_STATS:</strong> For Current Activity monitoring feature</li>
                    <li><strong>INTERNET:</strong> For third-party services and server communication</li>
                    <li><strong>ACCESS_NETWORK_STATE/ACCESS_WIFI_STATE:</strong> To display network information</li>
                </ul>
            </section>

            <section>
                <h2>6. Third-Party Services</h2>
                <p>DevKit integrates the following third-party services:</p>
                <ul>
                    <li><strong>Google Firebase Analytics:</strong> Usage analytics - <a href="https://firebase.google.com/support/privacy" target="_blank">Privacy Policy</a></li>
                    <li><strong>Google Firebase Crashlytics:</strong> Crash reporting - <a href="https://firebase.google.com/support/privacy" target="_blank">Privacy Policy</a></li>
                    <li><strong>Google Firebase Performance:</strong> Performance monitoring - <a href="https://firebase.google.com/support/privacy" target="_blank">Privacy Policy</a></li>
                    <li><strong>Google AdMob:</strong> Advertising - <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a></li>
                </ul>
                <p>These third-party services have their own privacy policies. We encourage you to review them.</p>
            </section>

            <section>
                <h2>7. Data Sharing</h2>
                <p>We do not sell or rent your personal data to third parties. Data may be shared with:</p>
                <ul>
                    <li>Google services (Firebase, AdMob) as described in Section 6</li>
                    <li>Our backend servers for anonymous user identification and feedback</li>
                </ul>
            </section>

            <section>
                <h2>8. Children's Privacy</h2>
                <p>DevKit is not directed to children under 13. We do not knowingly collect information from children.</p>
            </section>

            <section>
                <h2>9. Security</h2>
                <p>We implement appropriate security measures to protect your data:</p>
                <ul>
                    <li>HTTPS encryption for all server communications</li>
                    <li>Token-based authentication for API requests</li>
                    <li>Crashlytics collection is disabled in debug builds</li>
                </ul>
                <p>We also recommend:</p>
                <ul>
                    <li>Keep your device OS updated</li>
                    <li>Use device encryption</li>
                    <li>Set a strong device lock screen password</li>
                </ul>
            </section>

            <section>
                <h2>10. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the App after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section>
                <h2>11. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us:</p>
                <p>Email: <a href="mailto:kemp.xu@foxmail.com">kemp.xu@foxmail.com</a></p>
            </section>

            <section>
                <h2>12. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Access all local data stored by the app</li>
                    <li>Delete all local app data at any time</li>
                    <li>Opt out of personalized advertising through your device settings</li>
                    <li>Uninstall the app to remove all local data</li>
                    <li>Request deletion of server-side data by contacting us</li>
                </ul>
            </section>
        </div>
        <div class="footer">
            <a href="index.html">← Back to Home</a>
            <p>&copy; 2026 DevKit. All rights reserved.</p>
        </div>
    `,

    'zh-cn': `
        <div class="header">
            <h1>隐私政策</h1>
            <p class="last-updated">最后更新：2026年1月16日</p>
        </div>
        <div class="content">
            <section>
                <h2>1. 简介</h2>
                <p>DevKit（"我们"、"我们的"或"本应用"）致力于保护您的隐私。本隐私政策说明我们在您使用Android开发者工具应用时如何收集、使用和保护信息。</p>
            </section>

            <section>
                <h2>2. 我们收集的信息</h2>
                <h3>2.1 本地信息</h3>
                <p>以下信息存储在您的设备本地：</p>
                <ul>
                    <li><strong>已安装应用列表：</strong>用于显示和管理您设备上的应用</li>
                    <li><strong>设备信息：</strong>硬件规格、Android版本、屏幕分辨率等显示用途</li>
                    <li><strong>用户偏好设置：</strong>您的应用设置和自定义选项</li>
                    <li><strong>二维码历史记录：</strong>之前扫描的二维码</li>
                </ul>

                <h3>2.2 第三方服务收集的信息</h3>
                <p>DevKit使用以下可能收集数据的第三方服务：</p>
                <ul>
                    <li><strong>设备标识符（UUID）：</strong>生成唯一设备标识符并发送到我们的服务器，用于匿名用户识别</li>
                    <li><strong>Firebase Analytics：</strong>收集匿名使用数据，帮助我们改进应用</li>
                    <li><strong>Firebase Crashlytics：</strong>收集崩溃报告和诊断数据（在调试版本中禁用）</li>
                    <li><strong>Firebase Performance：</strong>监控应用性能指标</li>
                    <li><strong>Google AdMob：</strong>显示广告，可能收集广告标识符</li>
                </ul>

                <h3>2.3 我们不收集的信息</h3>
                <ul>
                    <li>❌ 个人身份信息（姓名、邮箱、电话号码）</li>
                    <li>❌ 位置数据</li>
                    <li>❌ 通讯录或通话记录</li>
                    <li>❌ 照片或媒体文件</li>
                    <li>❌ 密码或财务信息</li>
                </ul>
            </section>

            <section>
                <h2>3. 我们如何使用信息</h2>
                <p>我们将收集的信息用于以下目的：</p>
                <ul>
                    <li>显示已安装的应用及其信息</li>
                    <li>显示设备规格和系统信息</li>
                    <li>提供开发者工具和实用程序</li>
                    <li>保存您的偏好设置</li>
                    <li>通过分析改进应用性能和用户体验</li>
                    <li>通过崩溃报告识别和修复错误</li>
                    <li>显示相关广告</li>
                    <li>提供用户反馈功能</li>
                </ul>
            </section>

            <section>
                <h2>4. 数据存储</h2>
                <p>本地数据使用以下方式存储在您的设备上：</p>
                <ul>
                    <li>Room数据库用于结构化数据</li>
                    <li>SharedPreferences/DataStore用于用户设置</li>
                    <li>本地文件系统用于导出的文件</li>
                </ul>
                <p>服务器端数据（设备UUID、反馈提交）安全存储在我们的服务器上。</p>
                <p>您可以随时通过Android设置 > 应用 > DevKit > 存储 > 清除数据来清除所有本地应用数据。</p>
            </section>

            <section>
                <h2>5. 权限</h2>
                <p>DevKit请求以下权限：</p>
                <ul>
                    <li><strong>QUERY_ALL_PACKAGES：</strong>列出和显示已安装的应用</li>
                    <li><strong>CAMERA：</strong>用于二维码扫描功能</li>
                    <li><strong>READ/WRITE_EXTERNAL_STORAGE：</strong>导出APK文件和保存数据</li>
                    <li><strong>SYSTEM_ALERT_WINDOW：</strong>用于悬浮窗功能（当前Activity、取色器）</li>
                    <li><strong>PACKAGE_USAGE_STATS：</strong>用于当前Activity监控功能</li>
                    <li><strong>INTERNET：</strong>用于第三方服务和服务器通信</li>
                    <li><strong>ACCESS_NETWORK_STATE/ACCESS_WIFI_STATE：</strong>显示网络信息</li>
                </ul>
            </section>

            <section>
                <h2>6. 第三方服务</h2>
                <p>DevKit集成了以下第三方服务：</p>
                <ul>
                    <li><strong>Google Firebase Analytics：</strong>使用分析 - <a href="https://firebase.google.com/support/privacy" target="_blank">隐私政策</a></li>
                    <li><strong>Google Firebase Crashlytics：</strong>崩溃报告 - <a href="https://firebase.google.com/support/privacy" target="_blank">隐私政策</a></li>
                    <li><strong>Google Firebase Performance：</strong>性能监控 - <a href="https://firebase.google.com/support/privacy" target="_blank">隐私政策</a></li>
                    <li><strong>Google AdMob：</strong>广告 - <a href="https://policies.google.com/privacy" target="_blank">隐私政策</a></li>
                </ul>
                <p>这些第三方服务有各自的隐私政策，我们建议您查阅。</p>
            </section>

            <section>
                <h2>7. 数据共享</h2>
                <p>我们不会向第三方出售或出租您的个人数据。数据可能与以下方共享：</p>
                <ul>
                    <li>Google服务（Firebase、AdMob），如第6节所述</li>
                    <li>我们的后端服务器，用于匿名用户识别和反馈</li>
                </ul>
            </section>

            <section>
                <h2>8. 儿童隐私</h2>
                <p>DevKit不针对13岁以下的儿童。我们不会故意收集儿童的信息。</p>
            </section>

            <section>
                <h2>9. 安全性</h2>
                <p>我们采取适当的安全措施来保护您的数据：</p>
                <ul>
                    <li>所有服务器通信使用HTTPS加密</li>
                    <li>API请求使用基于令牌的身份验证</li>
                    <li>Crashlytics收集在调试版本中禁用</li>
                </ul>
                <p>我们还建议：</p>
                <ul>
                    <li>保持设备操作系统更新</li>
                    <li>使用设备加密</li>
                    <li>设置强密码锁屏</li>
                </ul>
            </section>

            <section>
                <h2>10. 政策变更</h2>
                <p>我们可能会不时更新本隐私政策。更改将发布在本页面上，并更新"最后更新"日期。更改后继续使用本应用即表示接受更新后的政策。</p>
            </section>

            <section>
                <h2>11. 联系我们</h2>
                <p>如果您对本隐私政策有任何疑问，请联系我们：</p>
                <p>邮箱：<a href="mailto:kemp.xu@foxmail.com">kemp.xu@foxmail.com</a></p>
            </section>

            <section>
                <h2>12. 您的权利</h2>
                <p>您有权：</p>
                <ul>
                    <li>访问应用存储的所有本地数据</li>
                    <li>随时删除所有本地应用数据</li>
                    <li>通过设备设置退出个性化广告</li>
                    <li>卸载应用以删除所有本地数据</li>
                    <li>通过联系我们请求删除服务器端数据</li>
                </ul>
            </section>
        </div>
        <div class="footer">
            <a href="index.html">← 返回首页</a>
            <p>&copy; 2026 DevKit. 保留所有权利。</p>
        </div>
    `
};

