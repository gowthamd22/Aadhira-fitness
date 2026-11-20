const EXERCISES = [
  { id: 'bench', name: 'Barbell Bench Press', muscle: 'Chest', secondary: 'Triceps, Front Delts', type: 'press_bench',
    cues: ['Retract shoulder blades firmly into the bench.', 'Lower the barbell to mid-chest with elbows at 45°.', 'Drive feet into the floor and press smoothly to lockout.'] },
  { id: 'pushup', name: 'Strict Push-Up', muscle: 'Chest', secondary: 'Core, Triceps', type: 'pushup',
    cues: ['Maintain a rigid plank line from head to heels.', 'Lower chest until 2 inches above the floor.', 'Push through palms and protract shoulder blades at top.'] },
  { id: 'incline_db', name: 'Incline Dumbbell Press', muscle: 'Chest', secondary: 'Upper Chest, Delts', type: 'press_bench',
    cues: ['Set bench angle to 30°–45°.', 'Lower dumbbells with deep stretch at chest level.', 'Press dumbbells upward in a slight arc without clanking.'] },
  { id: 'cable_fly', name: 'Standing Cable Chest Fly', muscle: 'Chest', secondary: 'Front Delts', type: 'curl_stand',
    cues: ['Keep a slight soft bend in both elbows.', 'Bring hands together at sternum height and squeeze pecs.', 'Control the eccentric return without letting shoulders roll forward.'] },

  { id: 'pullup', name: 'Wide-Grip Pull-Up', muscle: 'Back', secondary: 'Biceps, Rear Delts', type: 'pullup',
    cues: ['Grip bar slightly wider than shoulder width.', 'Depress shoulders and drive elbows down toward ribs.', 'Pull chin above the bar and lower under full control.'] },
  { id: 'bb_row', name: 'Bent-Over Barbell Row', muscle: 'Back', secondary: 'Lats, Lower Back, Biceps', type: 'row_hinge',
    cues: ['Hinge at hips to a 45° torso angle with flat spine.', 'Pull barbell toward lower abdomen/navel.', 'Squeeze shoulder blades together for 1 second at peak.'] },
  { id: 'lat_pulldown', name: 'Lat Pulldown', muscle: 'Back', secondary: 'Biceps, Teres Major', type: 'pullup',
    cues: ['Lock thighs under pad and lean back 10°.', 'Pull bar smoothly to upper collarbone.', 'Let lats stretch fully at the top without shrugging.'] },
  { id: 'deadlift', name: 'Conventional Deadlift', muscle: 'Back', secondary: 'Glutes, Hamstrings, Core', type: 'squat_hinge',
    cues: ['Stand with midfoot under the barbell.', 'Brace core, flatten back, and push the floor away.', 'Lock hips and knees simultaneously at the top.'] },

  { id: 'ohp', name: 'Overhead Barbell Press', muscle: 'Shoulders', secondary: 'Triceps, Upper Core', type: 'ohp',
    cues: ['Grip just outside shoulder width with wrists stacked.', 'Press bar vertically past face, moving head slightly back.', 'Lock out overhead with biceps aligned beside ears.'] },
  { id: 'lat_raise', name: 'Dumbbell Lateral Raise', muscle: 'Shoulders', secondary: 'Upper Traps', type: 'lateral_raise',
    cues: ['Hinge slightly forward with soft elbows.', 'Raise dumbbells out to sides until parallel with floor.', 'Lead with elbows and lower slowly over 3 seconds.'] },
  { id: 'face_pull', name: 'Cable Face Pull', muscle: 'Shoulders', secondary: 'Rear Delts, Rotator Cuff', type: 'row_hinge',
    cues: ['Set pulley at upper chest/eye level.', 'Pull rope toward forehead while externally rotating thumbs back.', 'Pause 1 second in rear-delt contraction.'] },

  { id: 'bb_curl', name: 'Standing Barbell Curl', muscle: 'Arms', secondary: 'Forearms', type: 'curl_stand',
    cues: ['Pin elbows tight against your sides.', 'Curl barbell up without swinging torso.', 'Squeeze biceps at top and lower under 2-second control.'] },
  { id: 'hammer_curl', name: 'Dumbbell Hammer Curl', muscle: 'Arms', secondary: 'Brachialis, Forearms', type: 'curl_stand',
    cues: ['Hold dumbbells with neutral palms-facing grip.', 'Curl smoothly toward shoulders keeping elbows stationary.', 'Lower completely to full extension.'] },
  { id: 'tri_dip', name: 'Bench / Parallel Bar Dip', muscle: 'Arms', secondary: 'Chest, Front Delts', type: 'pushup',
    cues: ['Keep torso upright to bias triceps.', 'Lower until upper arms are parallel to floor.', 'Press through palms to full elbow lockout.'] },
  { id: 'tri_pushdown', name: 'Cable Triceps Pushdown', muscle: 'Arms', secondary: 'Anconeus', type: 'curl_stand',
    cues: ['Lock upper arms by your ribs.', 'Extend forearms downward until elbows lock cleanly.', 'Control the return up to 90° elbow flexion.'] },

  { id: 'squat', name: 'Barbell Back Squat', muscle: 'Legs', secondary: 'Glutes, Core, Lower Back', type: 'squat_hinge',
    cues: ['Brace core and initiate movement by breaking at hips and knees.', 'Descend until hip crease drops below knee level.', 'Drive knees out and push evenly through midfoot to stand.'] },
  { id: 'lunge', name: 'Walking / Split Lunge', muscle: 'Legs', secondary: 'Glutes, Hamstrings, Calves', type: 'squat_hinge',
    cues: ['Take a controlled stride keeping torso upright.', 'Lower back knee toward floor until both knees hit 90°.', 'Drive through front heel to return to standing.'] },
  { id: 'rdl', name: 'Romanian Deadlift (RDL)', muscle: 'Legs', secondary: 'Hamstrings, Glutes, Erectors', type: 'row_hinge',
    cues: ['Keep knees softly unlocked and fixed.', 'Push hips straight back until a deep hamstring stretch.', 'Drive hips forward to stand tall without hyperextending.'] },
  { id: 'hip_thrust', name: 'Barbell Glute Bridge / Thrust', muscle: 'Legs', secondary: 'Hamstrings, Core', type: 'press_bench',
    cues: ['Rest upper back on bench edge with shins vertical at top.', 'Drive hips upward through heels and squeeze glutes.', 'Keep ribs tucked and chin slightly down.'] },

  { id: 'calf_raise', name: 'Standing Calf Raise', muscle: 'Calves', secondary: 'Soleus', type: 'ohp',
    cues: ['Place balls of feet on edge of elevated step.', 'Lower heels into a full ankle dorsiflexion stretch.', 'Rise onto big toes and hold peak contraction for 1 second.'] },
  { id: 'seated_calf', name: 'Seated Calf Raise', muscle: 'Calves', secondary: 'Soleus', type: 'squat_hinge',
    cues: ['Keep knees bent at 90° to isolate the soleus muscle.', 'Pause at the bottom stretch to eliminate bounce.', 'Press smoothly onto balls of feet.'] },

  { id: 'plank', name: 'Forearm RKC Plank', muscle: 'Core', secondary: 'Shoulders, Glutes', type: 'plank',
    cues: ['Stack elbows directly beneath shoulders.', 'Tuck pelvis posteriorly and squeeze glutes & quads hard.', 'Breathe steadily while maintaining a flat neutral spine.'] },
  { id: 'leg_raise', name: 'Hanging / Lying Leg Raise', muscle: 'Core', secondary: 'Hip Flexors', type: 'plank',
    cues: ['Press lower back flat against the floor or pad.', 'Raise straight legs to 90° by curling the pelvis.', 'Lower legs slowly without letting lower back arch.'] },
  { id: 'russian_twist', name: 'Seated Russian Twist', muscle: 'Core', secondary: 'Obliques', type: 'plank',
    cues: ['Lean back 45° with spine neutral and chest proud.', 'Rotate ribcage side-to-side rather than just swinging arms.', 'Keep hips stable throughout each rep.'] },

  { id: 'jumping_jack', name: 'High-Tempo Jumping Jacks', muscle: 'Cardio', secondary: 'Calves, Shoulders, Core', type: 'lateral_raise',
    cues: ['Land softly on the balls of your feet.', 'Sweep arms fully overhead in rhythm with foot jumps.', 'Maintain steady breathing cadence.'] },
  { id: 'burpee', name: 'Athletic Full Burpee', muscle: 'Cardio', secondary: 'Chest, Quads, Core', type: 'pushup',
    cues: ['Squat down, place hands on floor, and kick feet to plank.', 'Perform a crisp push-up and snap feet forward.', 'Explode upward into a vertical jump with hands overhead.'] },
  { id: 'mountain_climber', name: 'Mountain Climbers', muscle: 'Cardio', secondary: 'Core, Shoulders, Hip Flexors', type: 'plank',
    cues: ['Hold a strong high-plank position with shoulders over wrists.', 'Drive knees alternately toward chest at a brisk pace.', 'Keep hips level without bouncing up and down.'] }
];

const MUSCLE_INFO = {
  Chest: { title: 'Chest (Pectoralis Major & Minor)', desc: 'Drives horizontal pressing, hugging/adduction movements, and upper-body pushing strength.' },
  Back: { title: 'Back (Latissimus Dorsi, Traps & Rhomboids)', desc: 'Powers vertical and horizontal pulling, posture alignment, and spinal stability.' },
  Shoulders: { title: 'Shoulders (Anterior, Lateral & Posterior Deltoids)', desc: 'Controls overhead pressing, arm abduction, and 360-degree shoulder joint stability.' },
  Arms: { title: 'Arms (Biceps Brachii, Brachialis & Triceps)', desc: 'Executes elbow flexion and extension across all pushing and pulling compound lifts.' },
  Legs: { title: 'Legs (Quadriceps, Hamstrings & Glutes)', desc: 'Largest lower-body power generators for squatting, hinging, sprinting, and jumping.' },
  Calves: { title: 'Calves (Gastrocnemius & Soleus)', desc: 'Provides ankle plantarflexion, explosive push-off, and lower-leg endurance.' },
  Core: { title: 'Core (Rectus Abdominis, Obliques & Transverse)', desc: 'Stabilizes the spine, transfers force between upper and lower body, and protects posture.' },
  Cardio: { title: 'Cardiovascular & Metabolic Conditioning', desc: 'Improves heart-lung VO2 capacity, calorie expenditure, and muscular endurance.' }
};

let currentMuscleFilter = 'All';
let currentExercise = EXERCISES[0];
let isPlaying = true;
let showGuides = true;
let animSpeed = 1.0;
let animPhase = 0;

// Navigation
function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');
  const navBtn = document.querySelector(`.nav-item[data-page="${pageId}"]`);
  if (navBtn) navBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Studio Setup
function initStudio() {
  const muscles = ['All', 'Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Calves', 'Core', 'Cardio'];
  const filterBar = document.getElementById('muscle-filters');
  filterBar.innerHTML = muscles.map(m =>
    `<button class="filter-chip ${m === 'All' ? 'active' : ''}" onclick="setMuscleFilter('${m}', this)">${m}</button>`
  ).join('');
  renderExerciseList();
  selectExercise(EXERCISES[0].id);
}

function setMuscleFilter(muscle, btn) {
  currentMuscleFilter = muscle;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderExerciseList();
}

function filterExercises() {
  renderExerciseList();
}

function renderExerciseList() {
  const query = (document.getElementById('exercise-search').value || '').toLowerCase();
  const listEl = document.getElementById('exercise-list');
  const filtered = EXERCISES.filter(ex => {
    const matchMuscle = currentMuscleFilter === 'All' || ex.muscle === currentMuscleFilter;
    const matchSearch = ex.name.toLowerCase().includes(query) || ex.muscle.toLowerCase().includes(query);
    return matchMuscle && matchSearch;
  });

  listEl.innerHTML = filtered.map(ex => `
    <div class="ex-item ${ex.id === currentExercise.id ? 'active' : ''}" onclick="selectExercise('${ex.id}')">
      <h4>${ex.name}</h4>
      <span>${ex.muscle} • Synergist: ${ex.secondary}</span>
    </div>
  `).join('');
}

function selectExercise(id) {
  const found = EXERCISES.find(e => e.id === id);
  if (!found) return;
  currentExercise = found;
  document.getElementById('exercise-title-stage').textContent = found.name;
  document.getElementById('exercise-cues').innerHTML = `
    <strong>Proper Form &amp; Execution Cues (${found.muscle}):</strong>
    <ul style="margin:6px 0 0 18px;color:#cbd5e1;">
      ${found.cues.map(c => `<li>${c}</li>`).join('')}
    </ul>
  `;
  renderExerciseList();
}

function togglePlay() {
  isPlaying = !isPlaying;
  document.getElementById('play-pause-btn').textContent = isPlaying ? 'Pause' : 'Play';
}

function toggleGuides() {
  showGuides = !showGuides;
  document.getElementById('guide-toggle-btn').textContent = `Form Guides: ${showGuides ? 'ON' : 'OFF'}`;
}

function setSpeed(spd) {
  animSpeed = spd;
  document.querySelectorAll('.tempo-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

// 60FPS Biomechanical Canvas Renderer
function drawBiomechanicalStage() {
  const canvas = document.getElementById('biomech-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  if (isPlaying) {
    animPhase += 0.035 * animSpeed;
  }

  // Smooth rep cycle: 0 -> 1 -> 0
  const rawSin = Math.sin(animPhase);
  const rep = (rawSin + 1) / 2; // 0 = bottom/start, 1 = peak contraction
  const phaseBadge = document.getElementById('phase-badge');
  if (phaseBadge) {
    if (Math.cos(animPhase) > 0.15) {
      phaseBadge.textContent = 'CONCENTRIC (LIFT)';
      phaseBadge.style.color = '#10b981';
    } else if (Math.cos(animPhase) < -0.15) {
      phaseBadge.textContent = 'ECCENTRIC (CONTROL)';
      phaseBadge.style.color = '#f59e0b';
    } else {
      phaseBadge.textContent = 'ISOMETRIC HOLD';
      phaseBadge.style.color = '#38bdf8';
    }
  }

  // Clear & Grid
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = '#131c31';
  ctx.lineWidth = 1;
  for (let gx = 0; gx < w; gx += 28) {
    ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke();
  }
  for (let gy = 0; gy < h; gy += 28) {
    ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
  }

  // Floor line
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(40, 315); ctx.lineTo(w - 40, 315); ctx.stroke();

  const t = currentExercise.type;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Helper to draw limb segment
  function drawBone(x1, y1, x2, y2, color = '#cbd5e1', width = 10) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  function drawJoint(x, y, r = 6) {
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const primaryGlow = `rgba(239, 68, 68, ${0.55 + rep * 0.45})`;
  const secondaryGlow = `rgba(245, 158, 11, 0.85)`;

  if (t === 'squat_hinge') {
    const hipY = 185 + (1 - rep) * 65;
    const hipX = 250 - (1 - rep) * 28;
    const kneeX = 285 + (1 - rep) * 14;
    const kneeY = 250;
    const ankleX = 270;
    const ankleY = 310;
    const shoulderX = hipX + 18;
    const shoulderY = hipY - 72;

    // Legs (Primary Quads/Glutes)
    drawBone(ankleX, ankleY, kneeX, kneeY, '#94a3b8', 11);
    drawBone(kneeX, kneeY, hipX, hipY, primaryGlow, 14);
    // Torso
    drawBone(hipX, hipY, shoulderX, shoulderY, secondaryGlow, 14);
    // Head
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath(); ctx.arc(shoulderX + 6, shoulderY - 22, 14, 0, Math.PI * 2); ctx.fill();
    // Barbell
    ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(shoulderX - 24, shoulderY - 4); ctx.lineTo(shoulderX + 24, shoulderY - 4); ctx.stroke();
    ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(shoulderX - 6, shoulderY - 4, 10, 0, Math.PI * 2); ctx.fill();

    if (showGuides) {
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = '#38bdf8';
      ctx.beginPath(); ctx.moveTo(shoulderX - 6, 80); ctx.lineTo(shoulderX - 6, 315); ctx.stroke();
      ctx.setLineDash([]);
    }
    [ankleX, kneeX, hipX, shoulderX].forEach((jx, idx) => {
      const jy = [ankleY, kneeY, hipY, shoulderY][idx];
      drawJoint(jx, jy);
    });
  } else if (t === 'press_bench') {
    // Bench
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(150, 235, 250, 14);
    ctx.fillRect(175, 249, 12, 66);
    ctx.fillRect(365, 249, 12, 66);

    const shoulderX = 230, shoulderY = 225;
    const hipX = 325, hipY = 225;
    const barY = 210 - rep * 68;
    const elbowX = 218, elbowY = (shoulderY + barY) / 2 + 12;

    // Body lying
    drawBone(hipX, hipY, 365, 265, '#94a3b8', 11);
    drawBone(365, 265, 365, 312, '#94a3b8', 10);
    drawBone(shoulderX, shoulderY, hipX, hipY, primaryGlow, 15);
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath(); ctx.arc(202, 222, 13, 0, Math.PI * 2); ctx.fill();

    // Arm & Barbell
    drawBone(shoulderX, shoulderY, elbowX, elbowY, secondaryGlow, 10);
    drawBone(elbowX, elbowY, shoulderX, barY, secondaryGlow, 9);
    ctx.fillStyle = '#ef4444';
    ctx.beginPath(); ctx.arc(shoulderX, barY, 12, 0, Math.PI * 2); ctx.fill();
    drawJoint(shoulderX, shoulderY);
    drawJoint(elbowX, elbowY);
  } else if (t === 'pushup' || t === 'plank') {
    const isPlank = t === 'plank';
    const lift = isPlank ? 0.85 : rep;
    const ankleX = 140, ankleY = 302;
    const shoulderX = 370, shoulderY = 278 - lift * 44;
    const hipX = (ankleX + shoulderX) / 2;
    const hipY = (ankleY + shoulderY) / 2 - 4;
    const handX = 375, handY = 310;
    const elbowX = 355 - (1 - lift) * 16;
    const elbowY = (shoulderY + handY) / 2;

    drawBone(ankleX, ankleY, hipX, hipY, '#94a3b8', 11);
    drawBone(hipX, hipY, shoulderX, shoulderY, primaryGlow, 14);
    drawBone(shoulderX, shoulderY, elbowX, elbowY, secondaryGlow, 10);
    drawBone(elbowX, elbowY, handX, handY, secondaryGlow, 9);
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath(); ctx.arc(shoulderX + 22, shoulderY - 6, 13, 0, Math.PI * 2); ctx.fill();
    drawJoint(shoulderX, shoulderY);
    drawJoint(hipX, hipY);
  } else if (t === 'pullup') {
    // Pullup bar
    ctx.strokeStyle = '#64748b'; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(180, 55); ctx.lineTo(380, 55); ctx.stroke();

    const handX = 280, handY = 58;
    const shoulderY = 145 - rep * 56;
    const shoulderX = 280;
    const elbowX = 242 - rep * 10;
    const elbowY = (handY + shoulderY) / 2 + 8;

    drawBone(handX, handY, elbowX, elbowY, secondaryGlow, 10);
    drawBone(elbowX, elbowY, shoulderX, shoulderY, secondaryGlow, 10);
    drawBone(shoulderX, shoulderY, shoulderX, shoulderY + 85, primaryGlow, 16);
    drawBone(shoulderX, shoulderY + 85, shoulderX - 6, shoulderY + 155, '#94a3b8', 11);
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath(); ctx.arc(shoulderX, shoulderY - 22, 14, 0, Math.PI * 2); ctx.fill();
    drawJoint(shoulderX, shoulderY);
    drawJoint(elbowX, elbowY);
  } else if (t === 'row_hinge') {
    const ankleX = 250, ankleY = 310;
    const hipX = 240, hipY = 205;
    const shoulderX = 310, shoulderY = 165;
    const handY = 235 - rep * 48;
    const elbowX = 290 - rep * 18;
    const elbowY = 195 - rep * 26;

    drawBone(ankleX, ankleY, hipX, hipY, '#94a3b8', 12);
    drawBone(hipX, hipY, shoulderX, shoulderY, primaryGlow, 15);
    drawBone(shoulderX, shoulderY, elbowX, elbowY, secondaryGlow, 10);
    drawBone(elbowX, elbowY, shoulderX, handY, secondaryGlow, 9);
    ctx.fillStyle = '#ef4444';
    ctx.beginPath(); ctx.arc(shoulderX, handY, 11, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath(); ctx.arc(shoulderX + 20, shoulderY - 10, 13, 0, Math.PI * 2); ctx.fill();
    drawJoint(hipX, hipY);
    drawJoint(shoulderX, shoulderY);
  } else if (t === 'ohp') {
    const cx = 280;
    const shoulderY = 135;
    const barY = 130 - rep * 65;
    const elbowX = cx + 28 - rep * 12;
    const elbowY = (shoulderY + barY) / 2 + 12;

    drawBone(cx, 310, cx, 210, '#94a3b8', 12);
    drawBone(cx, 210, cx, shoulderY, secondaryGlow, 15);
    drawBone(cx, shoulderY, elbowX, elbowY, primaryGlow, 10);
    drawBone(elbowX, elbowY, cx, barY, primaryGlow, 9);
    ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(cx - 55, barY); ctx.lineTo(cx + 55, barY); ctx.stroke();
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath(); ctx.arc(cx, 110, 14, 0, Math.PI * 2); ctx.fill();
    drawJoint(cx, shoulderY);
    drawJoint(elbowX, elbowY);
  } else if (t === 'lateral_raise') {
    const cx = 280, shoulderY = 135;
    const angle = rep * (Math.PI / 2.1);
    const armLen = 68;
    const lx = cx - 18 - Math.cos(angle) * armLen;
    const ly = shoulderY + Math.sin(Math.PI / 2 - angle) * armLen;
    const rx = cx + 18 + Math.cos(angle) * armLen;
    const ry = shoulderY + Math.sin(Math.PI / 2 - angle) * armLen;

    drawBone(cx - 12, 310, cx - 10, 210, '#94a3b8', 11);
    drawBone(cx + 12, 310, cx + 10, 210, '#94a3b8', 11);
    drawBone(cx, 210, cx, shoulderY, '#cbd5e1', 16);
    drawBone(cx - 18, shoulderY, lx, ly, primaryGlow, 10);
    drawBone(cx + 18, shoulderY, rx, ry, primaryGlow, 10);
    ctx.fillStyle = '#ef4444';
    ctx.beginPath(); ctx.arc(lx, ly, 7, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(rx, ry, 7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath(); ctx.arc(cx, 108, 14, 0, Math.PI * 2); ctx.fill();
  } else {
    // Curl / Standing Isolation
    const cx = 275, shoulderY = 135, elbowX = 280, elbowY = 195;
    const curlAngle = -Math.PI / 2 + rep * (Math.PI * 0.78);
    const handX = elbowX + Math.cos(curlAngle) * 54;
    const handY = elbowY - Math.sin(curlAngle) * 54;

    drawBone(cx, 310, cx, 210, '#94a3b8', 12);
    drawBone(cx, 210, cx, shoulderY, '#cbd5e1', 15);
    drawBone(cx, shoulderY, elbowX, elbowY, primaryGlow, 11);
    drawBone(elbowX, elbowY, handX, handY, secondaryGlow, 9);
    ctx.fillStyle = '#ef4444';
    ctx.beginPath(); ctx.arc(handX, handY, 8, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath(); ctx.arc(cx, 108, 14, 0, Math.PI * 2); ctx.fill();
    drawJoint(elbowX, elbowY);
  }

  requestAnimationFrame(drawBiomechanicalStage);
}

// Muscle Map Logic
let selectedMapMuscle = 'Chest';

function setBodyView(view) {
  document.getElementById('btn-front').classList.toggle('active', view === 'front');
  document.getElementById('btn-back').classList.toggle('active', view === 'back');
  document.getElementById('svg-front').classList.toggle('hidden', view !== 'front');
  document.getElementById('svg-back').classList.toggle('hidden', view !== 'back');
}

function selectMapMuscle(muscle) {
  selectedMapMuscle = muscle;
  document.querySelectorAll('.muscle-zone').forEach(z => {
    z.classList.toggle('selected', z.dataset.muscle === muscle);
  });
  const info = MUSCLE_INFO[muscle] || MUSCLE_INFO.Chest;
  document.getElementById('map-muscle-name').textContent = info.title;
  document.getElementById('map-muscle-desc').textContent = info.desc;

  const matching = EXERCISES.filter(e => e.muscle === muscle);
  document.getElementById('map-exercise-list').innerHTML = matching.map(e =>
    `<li><strong>${e.name}</strong> — Synergist: ${e.secondary}</li>`
  ).join('');
}

function launchMuscleInStudio() {
  navigate('studio');
  setMuscleFilter(selectedMapMuscle, null);
  const first = EXERCISES.find(e => e.muscle === selectedMapMuscle);
  if (first) selectExercise(first.id);
}

// Diet & Macro Tracker
let foodLog = JSON.parse(localStorage.getItem('aadhira_food_log') || '[]');
let waterMl = parseInt(localStorage.getItem('aadhira_water_ml') || '0', 10);

function calculateMacros() {
  const gender = document.getElementById('calc-gender').value;
  const age = parseFloat(document.getElementById('calc-age').value) || 25;
  const weight = parseFloat(document.getElementById('calc-weight').value) || 70;
  const height = parseFloat(document.getElementById('calc-height').value) || 170;
  const act = parseFloat(document.getElementById('calc-activity').value) || 1.55;
  const goalAdj = parseFloat(document.getElementById('calc-goal').value) || 0;

  let bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? 5 : -161);
  const targetCal = Math.round(bmr * act + goalAdj);
  const protein = Math.round(weight * 1.8);
  const fats = Math.round((targetCal * 0.25) / 9);
  const carbs = Math.max(50, Math.round((targetCal - protein * 4 - fats * 9) / 4));

  document.getElementById('macro-result').innerHTML = `
    <strong>Recommended Daily Target:</strong><br>
    🔥 <strong>${targetCal} kcal</strong> / day &nbsp;|&nbsp;
    🥩 Protein: <strong>${protein}g</strong> &nbsp;|&nbsp;
    🍚 Carbs: <strong>${carbs}g</strong> &nbsp;|&nbsp;
    🥑 Fats: <strong>${fats}g</strong>
  `;
}

function addWater(ml) {
  waterMl += ml;
  localStorage.setItem('aadhira_water_ml', waterMl);
  renderDietLog();
}

function addFood() {
  const name = document.getElementById('food-name').value.trim();
  const cal = parseInt(document.getElementById('food-cal').value, 10) || 0;
  const pro = parseInt(document.getElementById('food-pro').value, 10) || 0;
  if (!name || cal <= 0) return;
  foodLog.push({ name, cal, pro });
  localStorage.setItem('aadhira_food_log', JSON.stringify(foodLog));
  document.getElementById('food-name').value = '';
  document.getElementById('food-cal').value = '';
  document.getElementById('food-pro').value = '';
  renderDietLog();
}

function quickFood(name, cal, pro) {
  foodLog.push({ name, cal, pro });
  localStorage.setItem('aadhira_food_log', JSON.stringify(foodLog));
  renderDietLog();
}

function clearFoodLog() {
  foodLog = [];
  waterMl = 0;
  localStorage.setItem('aadhira_food_log', '[]');
  localStorage.setItem('aadhira_water_ml', '0');
  renderDietLog();
}

function renderDietLog() {
  document.getElementById('water-count').textContent = waterMl;
  const list = document.getElementById('food-log-list');
  let tCal = 0, tPro = 0;
  list.innerHTML = foodLog.map(item => {
    tCal += item.cal;
    tPro += item.pro;
    return `<li><strong>${item.name}</strong> — ${item.cal} kcal (${item.pro}g protein)</li>`;
  }).join('');
  document.getElementById('total-cal').textContent = tCal;
  document.getElementById('total-pro').textContent = tPro;
}

// Contact Form
function submitInquiry(e) {
  e.preventDefault();
  const name = document.getElementById('inq-name').value.trim();
  const phone = document.getElementById('inq-phone').value.trim();
  const goal = document.getElementById('inq-goal').value;
  const receipt = document.getElementById('inq-receipt');
  receipt.classList.remove('hidden');
  receipt.innerHTML = `
    <strong>Inquiry Received by Aadhira Fitness!</strong><br>
    Thank you, <strong>${name}</strong>. Our Komarapalayam coaching team will reach out to <strong>${phone}</strong> regarding your <strong>${goal}</strong> plan shortly.
  `;
  e.target.reset();
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  initStudio();
  selectMapMuscle('Chest');
  calculateMacros();
  renderDietLog();
  requestAnimationFrame(drawBiomechanicalStage);
});
