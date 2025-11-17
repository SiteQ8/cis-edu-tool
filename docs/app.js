// Application State
let currentPage = 'landingPage';
let assessmentAnswers = {};
let filteredControls = [...controlsData];

// Navigation
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  currentPage = pageId;
  
  // Initialize page-specific content
  if (pageId === 'controlsLibrary') {
    renderControls();
  } else if (pageId === 'implementationGroups') {
    renderIGAssessment();
  } else if (pageId === 'frameworkMappings') {
    renderNISTMapping();
  } else if (pageId === 'resources') {
    renderIndustryExamples();
  }
}

// Language Toggle
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.body.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  document.getElementById('langLabel').textContent = currentLang === 'en' ? 'العربية' : 'English';
  updateTranslations();
  
  // Re-render current page content
  if (currentPage === 'controlsLibrary') {
    renderControls();
  } else if (currentPage === 'frameworkMappings') {
    if (document.getElementById('nistMapping').style.display !== 'none') {
      renderNISTMapping();
    } else {
      renderISOMapping();
    }
  } else if (currentPage === 'resources') {
    renderIndustryExamples();
  }
}

// Controls Library
function renderControls() {
  const container = document.getElementById('controlsList');
  container.innerHTML = '';
  
  filteredControls.forEach(control => {
    const card = document.createElement('div');
    card.className = 'control-card';
    card.innerHTML = `
      <div class="control-header" onclick="toggleControl(${control.id})">
        <div class="control-main">
          <div class="control-number">Control ${control.id}</div>
          <h3 class="control-title">${control[`name_${currentLang}`]}</h3>
          <p class="control-description">${control[`description_${currentLang}`]}</p>
          <div class="control-meta">
            <span class="control-badge">${control.safeguards_count} ${translate('control_safeguards')}</span>
            ${control.security_functions.map(fn => `<span class="control-badge">${fn}</span>`).join('')}
          </div>
        </div>
        <div class="control-expand">▼</div>
      </div>
      <div class="control-details">
        <div class="control-section">
          <h4>${translate('control_objective')}</h4>
          <p>${control[`objective_${currentLang}`]}</p>
        </div>
        <div class="control-section">
          <h4>${translate('control_security_functions')}</h4>
          <div class="control-meta">
            ${control.security_functions.map(fn => `<span class="control-badge">${fn}</span>`).join('')}
          </div>
        </div>
        <div class="control-section">
          <h4>${translate('control_asset_types')}</h4>
          <div class="control-meta">
            ${control.asset_types.map(type => `<span class="control-badge">${type}</span>`).join('')}
          </div>
        </div>
        <div class="control-section">
          <h4>${translate('control_ig_requirements')}</h4>
          <div class="ig-requirements">
            ${Object.entries(control.implementation_groups).map(([ig, safeguards]) => 
              safeguards.length > 0 ? `<span class="ig-badge ${ig.toLowerCase()}">${ig}: ${safeguards.length} safeguards</span>` : ''
            ).join('')}
          </div>
        </div>
        ${control.safeguards && control.safeguards.length > 0 ? `
          <div class="control-section">
            <h4>Key Safeguards</h4>
            <div class="safeguards-list">
              ${control.safeguards.map(sg => `
                <div class="safeguard-item">
                  <div class="safeguard-number">${sg.number}</div>
                  <div class="safeguard-title">${sg[`title_${currentLang}`]}</div>
                  <div class="safeguard-description">${sg[`description_${currentLang}`]}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleControl(controlId) {
  const cards = document.querySelectorAll('.control-card');
  cards.forEach((card, index) => {
    if (index === controlId - 1) {
      card.classList.toggle('expanded');
    }
  });
}

function filterControls() {
  const igFilter = document.getElementById('igFilter').value;
  const searchTerm = document.getElementById('searchControl').value.toLowerCase();
  
  filteredControls = controlsData.filter(control => {
    const matchesIG = igFilter === 'all' || 
      (control.implementation_groups[igFilter] && control.implementation_groups[igFilter].length > 0);
    
    const matchesSearch = searchTerm === '' ||
      control.name_en.toLowerCase().includes(searchTerm) ||
      control.name_ar.includes(searchTerm) ||
      control.description_en.toLowerCase().includes(searchTerm) ||
      control.description_ar.includes(searchTerm);
    
    return matchesIG && matchesSearch;
  });
  
  renderControls();
}

// IG Assessment
function renderIGAssessment() {
  const container = document.getElementById('igAssessment');
  container.innerHTML = `
    <div class="assessment-intro">
      <p>Consider these factors to determine your appropriate Implementation Group:</p>
      <ul style="text-align: left; max-width: 600px; margin: 20px auto;">
        <li>Organization size and complexity</li>
        <li>Available cybersecurity budget</li>
        <li>IT and security team size</li>
        <li>Regulatory requirements</li>
        <li>Data sensitivity level</li>
      </ul>
    </div>
  `;
}

// Self-Assessment
function startAssessment() {
  document.getElementById('assessmentIntro').style.display = 'none';
  document.getElementById('assessmentQuestions').style.display = 'block';
  renderAssessmentQuestions();
}

function renderAssessmentQuestions() {
  const container = document.getElementById('assessmentQuestions');
  container.innerHTML = assessmentQuestions.map(q => `
    <div class="question-card">
      <h3 class="question-title">${q[`question_${currentLang}`]}</h3>
      <div class="question-options">
        ${q.options.map(opt => `
          <label class="option-label">
            <input type="radio" name="question_${q.id}" value="${opt.value}" 
              onchange="saveAnswer(${q.id}, ${opt.value})">
            ${opt[`label_${currentLang}`]}
          </label>
        `).join('')}
      </div>
    </div>
  `).join('') + `
    <div class="assessment-actions">
      <button class="btn btn--primary" onclick="submitAssessment()" data-translate="btn_submit">Submit Assessment</button>
    </div>
  `;
  updateTranslations();
}

function saveAnswer(questionId, value) {
  assessmentAnswers[questionId] = value;
}

function submitAssessment() {
  if (Object.keys(assessmentAnswers).length < assessmentQuestions.length) {
    alert(currentLang === 'en' ? 'Please answer all questions' : 'يرجى الإجابة على جميع الأسئلة');
    return;
  }
  
  const totalScore = Object.values(assessmentAnswers).reduce((sum, val) => sum + val, 0);
  const avgScore = (totalScore / assessmentQuestions.length).toFixed(1);
  
  document.getElementById('assessmentQuestions').style.display = 'none';
  document.getElementById('assessmentResults').style.display = 'block';
  
  const resultsContainer = document.getElementById('resultsContent');
  resultsContainer.innerHTML = `
    <div class="maturity-score">
      <div class="score-value">${avgScore}</div>
      <div class="score-label">${translate('overall_maturity')} (${translate('out_of_five')})</div>
    </div>
    <div class="results-summary">
      <h3>Category Results</h3>
      <div class="category-results">
        ${assessmentQuestions.map(q => `
          <div class="category-result">
            <div class="category-name">${q[`category_${currentLang}`]}</div>
            <div class="category-score">${assessmentAnswers[q.id]} / 5</div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="results-summary">
      <h3>Recommendations</h3>
      <p>${avgScore < 3 ? 
        (currentLang === 'en' ? 'Focus on implementing IG1 baseline controls to establish fundamental security practices.' : 'ركز على تنفيذ ضوابط IG1 الأساسية لإنشاء ممارسات أمان أساسية.') :
        avgScore < 4 ? 
        (currentLang === 'en' ? 'Consider advancing to IG2 controls for enhanced security capabilities.' : 'فكر في التقدم إلى ضوابط IG2 لقدرات أمان محسنة.') :
        (currentLang === 'en' ? 'Your organization is ready for IG3 advanced controls and continuous improvement.' : 'منظمتك جاهزة لضوابط IG3 المتقدمة والتحسين المستمر.')}
      </p>
    </div>
  `;
}

// Framework Mappings
function showMapping(type) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  if (type === 'nist') {
    document.getElementById('nistMapping').style.display = 'block';
    document.getElementById('isoMapping').style.display = 'none';
    renderNISTMapping();
  } else {
    document.getElementById('nistMapping').style.display = 'none';
    document.getElementById('isoMapping').style.display = 'block';
    renderISOMapping();
  }
}

function renderNISTMapping() {
  const container = document.getElementById('nistMappingTable');
  container.innerHTML = `
    <table class="mapping-table">
      <thead>
        <tr>
          <th>CIS Control</th>
          <th>NIST Function</th>
          <th>NIST Category</th>
        </tr>
      </thead>
      <tbody>
        ${nistMappings.map(mapping => {
          const control = controlsData.find(c => c.id === mapping.control_id);
          return `
            <tr>
              <td><strong>${mapping.control_id}:</strong> ${control[`name_${currentLang}`]}</td>
              <td>${mapping.nist_function}</td>
              <td>${mapping.nist_category_code}: ${mapping[`nist_category_name_${currentLang}`]}</td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
}

function renderISOMapping() {
  const container = document.getElementById('isoMappingTable');
  container.innerHTML = `
    <table class="mapping-table">
      <thead>
        <tr>
          <th>CIS Control</th>
          <th>ISO Section</th>
          <th>ISO Control Area</th>
        </tr>
      </thead>
      <tbody>
        ${isoMappings.map(mapping => {
          const control = controlsData.find(c => c.id === mapping.control_id);
          return `
            <tr>
              <td><strong>${mapping.control_id}:</strong> ${control[`name_${currentLang}`]}</td>
              <td>${mapping.iso_subsection}</td>
              <td>${mapping.iso_section}: ${mapping[`iso_title_${currentLang}`]}</td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
}

// Resources
function renderIndustryExamples() {
  const container = document.getElementById('industryExamples');
  container.innerHTML = industries.map(industry => `
    <div class="industry-card">
      <h3>${industry[`name_${currentLang}`]}</h3>
      <ul>
        ${industry[`examples_${currentLang}`].map(example => `<li>${example}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function downloadResource(type) {
  const filename = `CIS_Controls_${type}_Checklist.txt`;
  const content = `CIS Controls v8.1 - ${type} Implementation Checklist\n\nThis is a sample checklist for ${type} implementation.\n\nGenerated by CIS Controls Education Platform`;
  
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('langToggle').addEventListener('click', toggleLanguage);
  
  const igFilter = document.getElementById('igFilter');
  if (igFilter) {
    igFilter.addEventListener('change', filterControls);
  }
  
  const searchControl = document.getElementById('searchControl');
  if (searchControl) {
    searchControl.addEventListener('input', filterControls);
  }
  
  // Initialize with English
  updateTranslations();
});
