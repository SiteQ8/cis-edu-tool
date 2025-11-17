# CIS Controls v8.1 Education Tool

A professional, bilingual (English/Arabic) web application for understanding and implementing CIS Critical Security Controls version 8.1. This tool is designed for organizations of all sizes to learn, assess, and improve their cybersecurity maturity using the CIS Controls framework.

## Features

### 📚 **CIS Controls Library**
- Complete reference of all 18 CIS Controls
- Detailed descriptions, objectives, and implementation guidelines
- 153 Safeguards organized by Implementation Groups (IG1, IG2, IG3)
- Security function mappings (Identify, Protect, Detect, Respond, Recover)
- Asset type classifications (Devices, Data, Users, Network, Applications)
- Interactive expandable control cards with advanced filtering

### 🎯 **Implementation Group Guidance**
- IG1 (Basic): 49 safeguards for small organizations
- IG2 (Intermediate): 111 safeguards for medium enterprises
- IG3 (Advanced): 153 safeguards for large organizations and critical infrastructure
- Assessment questionnaire to determine suitable IG for your organization
- Resource allocation requirements and team size guidance

### 📊 **Self-Assessment Tool**
- Interactive maturity assessment questionnaire
- 5-level maturity scoring for each control category
- Gap analysis and strengths identification
- Personalized implementation roadmap
- Export assessment results and recommendations

### 🔗 **Framework Mappings**
- **NIST Cybersecurity Framework (CSF)**: Map all controls to NIST functions and categories
- **ISO 27001**: Alignment with international information security standards
- Interactive mapping visualization and comparison tables
- Cross-reference capabilities

### 🌍 **Bilingual Support**
- Full English and Arabic interface
- Professional translations for all content
- Arabic right-to-left (RTL) display optimization
- Consistent cybersecurity terminology in both languages
- Easy language toggle without losing context

### 💼 **Industry-Specific Guidance**
- Financial Services (banking, compliance, fraud prevention)
- Healthcare (HIPAA compliance, patient data protection)
- Technology/SaaS (cloud security, application development)
- Small Business (foundational security practices)

### 📥 **Resources & Checklists**
- IG1, IG2, IG3 implementation checklists
- Safeguard tracking worksheets
- Maturity assessment templates
- Implementation roadmap guides

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Architecture**: Client-side Single Page Application (SPA)
- **Data Management**: In-memory YAML data structure
- **Responsiveness**: Mobile, tablet, and desktop optimized
- **Accessibility**: WCAG 2.1 compliant
- **Localization**: Bilingual (English/Arabic) with RTL support

## Installation & Deployment

### Local Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/SiteQ8/cis-edu-tool.git
   cd cis-controls-tool
   ```

2. Open in your browser:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx http-server
   ```

3. Navigate to `http://localhost:8000`

### GitHub Pages Deployment
1. Push to the main branch
2. Enable GitHub Pages in repository settings
3. Select `main` branch as source
4. Access at `https://SiteQ8.github.io/cis-edu-tool`

### Docker Deployment
```bash
docker build -t cis-controls-tool .
docker run -p 8080:80 cis-edu-tool
```

## Usage Guide

### 1. Learning the Controls
- Navigate to **Controls Library**
- Browse all 18 controls with summary information
- Click any control to expand and view:
  - Complete description and objectives
  - All safeguards for that control
  - Implementation Group requirements
  - Practical implementation examples
  - Industry-specific guidance

### 2. Determining Your Implementation Group
- Go to **Implementation Groups**
- Review organizational characteristics
- Complete the assessment questionnaire
- Receive personalized IG recommendation

### 3. Self-Assessment
- Open **Self-Assessment Tool**
- Answer questions about current security practices
- Score each category 1-5 (No processes → Fully optimized)
- View results with:
  - Current maturity scores
  - Areas of strength
  - Identified gaps
  - Prioritized action items

### 4. Understanding Frameworks
- Visit **Framework Mappings**
- Select NIST CSF or ISO 27001
- View mapping relationships
- Compare control coverage across frameworks

### 5. Accessing Resources
- Download implementation checklists for your IG
- Use tracking worksheets to monitor progress
- Create implementation roadmaps
- Access maturity assessment templates

## CIS Controls Overview

| Control | Focus Area |
|---------|-----------|
| 1 | Inventory and Control of Enterprise Assets |
| 2 | Inventory and Control of Software Assets |
| 3 | Data Protection |
| 4 | Secure Configuration of Enterprise Assets and Software |
| 5 | Account Management |
| 6 | Access Control Management |
| 7 | Continuous Vulnerability Management |
| 8 | Audit Log Management |
| 9 | Email and Web Browser Protections |
| 10 | Malware Defenses |
| 11 | Data Recovery |
| 12 | Network Infrastructure Management |
| 13 | Network Monitoring and Defense |
| 14 | Security Awareness and Skills Training |
| 15 | Service Provider Management |
| 16 | Application Software Security |
| 17 | Incident Response Management |
| 18 | Penetration Testing |

## Framework Mappings

- **NIST CSF 2.0**: All 18 controls mapped to Identify, Protect, Detect, Respond, Recover functions
- **ISO 27001**: CIS Controls aligned with 14 sections of ISO 27001:2022
- **Compliance Standards**: References to PCI DSS, HIPAA, SOX, GDPR

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Initial load time: < 2 seconds
- Fully functional offline after first load
- Zero external dependencies
- Optimized for devices with limited bandwidth

## Security & Privacy

- No data collection or transmission
- All processing occurs locally in browser
- No cookies or tracking
- Open-source code for transparency
- WCAG 2.1 accessibility compliance

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### Areas for Contribution
- Bug fixes and improvements
- Additional language translations
- Industry-specific customizations
- Enhanced assessment algorithms
- Additional framework mappings

## Localization

To add a new language:

1. Update data structures in `data.js` with new language codes
2. Add language-specific CSS in `css/style.css`
3. Create language toggle in UI
4. Test RTL support for right-to-left languages

Currently supported:
- **English (en)** - Primary language
- **Arabic (ar)** - RTL support

## References

- [CIS Controls v8.1 Official Documentation](https://www.cisecurity.org/controls/v8)
- [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162024.pdf)
- [ISO 27001:2022 Standard](https://www.iso.org/standard/27001)
- [SANS SEC 566: Implementing and Auditing CIS Controls](https://www.sans.org/cyber-aca/courses/implementing-auditing-cis-controls/)

## Roadmap

- [ ] Export assessment reports as PDF
- [ ] Benchmarking against industry standards
- [ ] Integration with popular compliance tools
- [ ] Additional language translations (French, Spanish, Japanese, Chinese)
- [ ] Advanced analytics dashboard
- [ ] Risk scoring algorithm
- [ ] Integration with threat intelligence feeds
- [ ] Mobile app version
- [ ] API for third-party integrations

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This tool is for educational purposes and helps understand CIS Controls implementation. It does not replace professional security assessments, compliance audits, or expert consultation. Organizations should engage qualified security professionals to develop and implement their specific security programs.

## Support & Contact

For questions, suggestions, or issues:
- Open an issue on GitHub
- Email: Site@hotmail.com

## Acknowledgments

- Center for Internet Security (CIS) for the CIS Controls framework
- NIST for the Cybersecurity Framework
- ISO for international standards
- Community contributions and feedback

---

**Version**: 1.0  
**Release Date**: 2024  
**Last Updated**: November 2024  
**Status**: Production Ready

**Keywords**: Cybersecurity, CIS Controls, Risk Management, Compliance, Security Assessment, Implementation Groups, NIST, ISO 27001, Bilingual, Educational Tool
