import React, { createContext, useContext, useMemo, useState,useCallback } from "react";
import {
  Routes, Route, Link, NavLink, useNavigate, useLocation, useParams
} from "react-router-dom";
import {
  ArrowRight, ArrowLeft, Check, ChevronRight, Compass, Sparkles,
  Clock3, Target, Lightbulb, Hammer, Users, Brain, RefreshCw,
  Star, Share2, Download, Menu, X
} from "lucide-react";
import questions from "./data/questions";
import careers from "./data/careers";

const NavitryContext = createContext(null);

function useNavitry() {
  return useContext(NavitryContext);
}

function App() {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [reflections, setReflections] = useState({});
  const [feedback, setFeedback] = useState(null);

  const resetAssessment = useCallback(() => {
  setAnswers({});
  setResults(null);
  }, []);

  const value = useMemo(() => ({
    answers, setAnswers, results, setResults,
    reflections, setReflections, feedback, setFeedback, resetAssessment
  }), [answers, results, reflections, feedback,resetAssessment]);

  return (
  <NavitryContext.Provider value={value}>
    <div className="app-shell">
      <main>
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />

          <Route path="/instructions" element={<Instructions />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/results" element={<Results />} />
          <Route path="/career/:careerId" element={<Career />} />
          <Route path="/career/:careerId/activity" element={<Activity />} />
          <Route path="/career/:careerId/reflect" element={<Reflection />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      <Footer />
    </div>
  </NavitryContext.Provider>
);
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Compass size={20}/></span>
          NaviTry
        </Link>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          <Link className="nav-cta" to="/instructions" onClick={() => setOpen(false)}>Start Exploring <ArrowRight size={16}/></Link>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15}/> Career exploration, not career pressure</div>
            <h1>Don't choose your future.<br/><em>Navigate it.</em></h1>
            <p className="hero-text">
              You don't need to have your entire career figured out today.
              NaviTry helps you discover career paths that may fit you, explore
              what they're actually like, and find the next path worth trying.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate("/instructions")}>
                Start Exploring <ArrowRight size={18}/>
              </button>
              <a className="btn btn-secondary" href="#how-it-works">How It Works</a>
            </div>
            <div className="hero-note"><Check size={16}/> No right or wrong answers. Just honest choices.</div>
          </div>
          <div className="hero-visual">
            <div className="map-card">
              <div className="map-top">
                <span>Your possibilities</span>
                <span className="tiny-pill">EXPLORE</span>
              </div>
              <div className="map-route">
                <div className="route-node start"><Compass size={19}/></div>
                <div className="route-line"/>
                <div className="route-node"><Brain size={18}/></div>
                <div className="route-line"/>
                <div className="route-node"><Lightbulb size={18}/></div>
                <div className="route-line"/>
                <div className="route-node active"><Hammer size={18}/></div>
              </div>
              <div className="map-labels"><span>Discover</span><span>Match</span><span>Explore</span><span>Try</span></div>
              <div className="mini-result">
                <div>
                  <small>Route worth exploring</small>
                  <strong>Software Engineering</strong>
                </div>
                <ChevronRight size={18}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section problem" id="about">
        <div className="container narrow">
          <div className="eyebrow">The problem</div>
          <h2>Too many interests. Too many possibilities. One big question.</h2>
          <p className="large-copy">“What should I actually do?”</p>
          <div className="problem-grid">
            {[
              "You have several interests",
              "You don't know your strengths yet",
              "Careers sound different online than they feel in reality",
              "You're afraid of making the wrong decision",
              "Family or society already has an answer for you"
            ].map((x) => <div className="problem-item" key={x}><span>+</span>{x}</div>)}
          </div>
          <div className="statement">
            <strong>You don't have to choose blindly.</strong>
            <span>Explore the possibilities first.</span>
          </div>
        </div>
      </section>

      <section className="section student-voices">
  <div className="container narrow">

    <div className="eyebrow">
      Built from real student voices
    </div>

    <h2>
      Choosing a career shouldn't mean choosing blindly.
    </h2>

    <p className="student-voices-text">
      Students feedback helped shape NaviTry's approach:
    </p>

    <p className="student-voices-emphasis">
      Don't just discover a career that might fit you — explore and
      experience it first.
    </p>

    <p className="student-voices-text">
      Students said they'd value trying a real career activity before
      making a decision.
    </p>

    <div className="student-voices-highlight">
      <p>
        That's why NaviTry helps you discover, explore, try and reflect
        before choosing your path.
      </p>
    </div>

    <div className="student-voices-action">
      <Link className="btn btn-primary" to="/instructions">
        Explore NaviTry <ArrowRight size={18} />
      </Link>
    </div>

  </div>
</section>

      <section className="section how" id="how-it-works">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">How NaviTry works</div>
            <h2>From uncertainty to your next experiment.</h2>
          </div>
          <div className="steps">
            {[
              ["01","Discover","Answer a short assessment about how you think, create, work and solve problems.", Brain],
              ["02","Match","See career paths that may fit your profile.", Target],
              ["03","Explore","Understand what those careers actually involve.", Lightbulb],
              ["04","Try","Complete a small real-world activity related to a career.", Hammer],
              ["05","Reflect","Use the experience to decide what you want to explore next.", RefreshCw]
            ].map(([num,title,desc,Icon]) => (
              <div className="step" key={title}>
                <div className="step-number">{num}</div>
                <div className="step-icon"><Icon size={21}/></div>
                <h3>{title}</h3><p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="center-action"><Link className="btn btn-primary" to="/instructions">Start Exploring <ArrowRight size={18}/></Link></div>
        </div>
      </section>

      <section className="section manifesto">
        <div className="container manifesto-inner">
          <Compass size={30}/>
          <h2>Your future doesn't need one perfect answer.</h2>
          <p>It needs a next step worth exploring.</p>
        </div>
      </section>
    </>
  );
}

function Instructions() {
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="container assessment-wrap">

        <Link className="back-link" to="/">
  <ArrowLeft size={16} /> Back
</Link>

        <div className="question-card instructions-card">

          <div className="eyebrow">
            Before you begin
          </div>

          <h1>Let's discover how you naturally approach things.</h1>

          <p className="instructions-intro">
            There are no right or wrong answers. Don't overthink it —
            choose the option that feels most natural to you.
          </p>

          <div className="instructions-list">

            <div className="instruction-item">
              <div>
                <h3>20 Questions</h3>
                <p>
                  You'll answer 20 quick questions about how you think,
                  create, work and solve problems.
                </p>
              </div>
            </div>

            <div className="instruction-item">
              <div>
                <h3>20 seconds per question</h3>
                <p>
                  Each question has a 20-second timer. If time runs out,
                  the assessment automatically moves to the next question.
                </p>
              </div>
            </div>

            <div className="instruction-item">
              <div>
                <h3>Go with your first instinct</h3>
                <p>
                  Choose the option that feels more like you. Try not to
                  overthink your answers.
                </p>
              </div>
            </div>

            <div className="instruction-item">
              <div>
                <h3>You can skip a question</h3>
                <p>
                  If you don't choose an answer before time runs out,
                  we'll move on to the next question.
                </p>
              </div>
            </div>

          </div>

          <div className="question-footer">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/assessment")}
            >
              Begin Assessment <ArrowRight size={17} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

function Assessment() {
  const navigate = useNavigate();
  const { answers, setAnswers } = useNavitry();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [startedAt, setStartedAt] = useState(Date.now());
  const [secondsLeft, setSecondsLeft] = useState(20);

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  React.useEffect(() => {
  setSecondsLeft(20);
}, [current]);

  React.useEffect(() => {
  const timer = setInterval(() => {
    setSecondsLeft(prev => {
      if (prev <= 1) {
        clearInterval(timer);

        
        if (current === questions.length - 1) {
          navigate("/processing");
        } else {
          const nextQ = questions[current + 1];

          setCurrent(current + 1);
          setSelected(answers[nextQ.id]?.option || null);
        }

        return 0;
      }

      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [current, answers, navigate]);

  function choose(option) {
  setSelected(option.id);

  setAnswers(prev => ({
    ...prev,
    [q.id]: {
      option: option.id
    }
  }));
}

  function next() {
    if (!selected) return;
    if (current === questions.length - 1) {
      navigate("/processing");
    } else {
      const nextQ = questions[current + 1];
      setCurrent(current + 1);
      setSelected(answers[nextQ.id]?.option || null);
    }
  }

  function previous() {
  if (current === 0) return;

  const prevQ = questions[current - 1];

  setCurrent(current - 1);
  setSelected(answers[prevQ.id]?.option || null);
}

  return (
    <div className="assessment-page section">
      <div className="container assessment-wrap">
        <div className="assessment-header">
          <Link to="/" className="back-link"><ArrowLeft size={16}/> Exit</Link>
          <span>Question {current + 1} of {questions.length}</span>
        </div>
        <div className="progress"><div style={{width: `${progress}%`}}/></div>
        <div className="question-card">
          <div className="question-meta"><span><Clock3 size={16}/> Go with your first instinct</span><span className={secondsLeft <= 1 ? "timer urgent" : "timer"}>{secondsLeft}s</span></div>
          <h1>{q.text}</h1>
          <div className="options">
            {q.options.map(option => (
              <button
                key={option.id}
                className={selected === option.id ? "option selected" : "option"}
                onClick={() => choose(option)}
              >
                <span className="option-letter">{option.id}</span>
                <span>{option.text}</span>
                {selected === option.id && <Check size={20}/>}
              </button>
            ))}
          </div>
          <div className="question-footer">
            <button className="btn btn-ghost" onClick={previous} disabled={current === 0}><ArrowLeft size={17}/> Back</button>
            <button className="btn btn-primary" onClick={next} disabled={!selected}>
              {current === questions.length - 1 ? "Finish Assessment" : "Next"} <ArrowRight size={17}/>
            </button>
          </div>
        </div>
        <p className="assessment-tip">There are no right or wrong answers. Don't overthink it.</p>
      </div>
    </div>
  );
}

function Processing() {
  const navigate = useNavigate();
  const { answers, setResults } = useNavitry();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const scores = calculateScores(answers);
      const matches = getMatches(scores);
      setResults({ scores, matches });
      navigate("/results", { replace: true });
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="processing-page section">
      <div className="container processing-card">
        <div className="loader-orbit"><Compass size={30}/></div>
        <div className="eyebrow">NaviTry is working</div>
        <h1>Mapping your possibilities...</h1>
        <div className="processing-list">
          <span><Check size={15}/> Looking at your responses...</span>
          <span><Check size={15}/> Building your profile...</span>
          <span><Check size={15}/> Exploring possible career routes...</span>
          <span><span className="pulse-dot"/> Finding your strongest matches...</span>
        </div>
        <p>Your NaviTry map is almost ready.</p>
      </div>
    </div>
  );
}

function Results() {
  const navigate = useNavigate();
  const { results,resetAssessment } = useNavitry();

  if (!results) return <RedirectCard message="Complete the assessment to see your profile." to="/assessment" />;

  return (
    <div className="section results-page">
      <div className="container">
        <div className="results-intro">
          <div className="eyebrow">Your NaviTry map</div>
          <h1>Here's what we found.</h1>
          <p>This isn't a prescription for your future. It's a starting point for exploration.</p>
        </div>

        <section className="profile-card">
          <div className="profile-head">
            <div><span className="label">YOUR PROFILE</span><h2>How you naturally tend to approach things</h2></div>
            <Sparkles size={25}/>
          </div>
          <div className="profile-grid">
            <ProfileBar label="Analytical" value={results.scores.analytical} icon={Brain}/>
            <ProfileBar label="Creative" value={results.scores.creative} icon={Lightbulb}/>
            <ProfileBar label="People" value={results.scores.people} icon={Users}/>
            <ProfileBar label="Hands-on" value={results.scores.handsOn} icon={Hammer}/>
          </div>
          <div className="profile-summary">
            <strong>Your profile in plain English</strong>
            <p>{profileSummary(results.scores)}</p>
          </div>
        </section>

        <section className="matches-section">
          <div className="section-heading">
            <div><span className="label">THREE ROUTES WORTH EXPLORING</span><h2>Where could you go from here?</h2></div>
          </div>
          <p className="muted">These aren't careers you have to choose. They're possibilities that may be worth exploring based on your profile.</p>
          <div className="career-grid">
            {results.matches.map((career, i) => (
              <CareerCard key={career.id} career={career} rank={i + 1}/>
            ))}
          </div>
        </section>

        <div className="results-bottom">
          <Link className="btn btn-secondary" to="/compare">Compare My Top 3</Link>
          <Link className="btn btn-secondary" to="/instructions">Retake Assessment</Link>
        </div>
      </div>
    </div>
  );
}

function ProfileBar({ label, value, icon: Icon }) {
  return (
    <div className="profile-stat">
      <div className="stat-top"><span><Icon size={16}/>{label}</span><strong>{value}%</strong></div>
      <div className="bar"><div style={{width: `${value}%`}}/></div>
    </div>
  );
}

function CareerCard({ career, rank }) {
  return (
    <article className="career-card">
      <div className="career-rank">0{rank}</div>
      <div className="career-icon">{career.icon}</div>
      <h3>{career.name}</h3>
      <p className="career-tagline">{career.tagline}</p>
      <div className="match-reason"><Sparkles size={14}/><span>{career.reason}</span></div>
      <Link className="card-link" to={`/career/${career.id}`}>Explore Route <ArrowRight size={16}/></Link>
    </article>
  );
}

function Career() {
  const { careerId } = useParams();
  const career = careers.find(c => c.id === careerId);
  const { results } = useNavitry();

  if (!career) return <RedirectCard message="We couldn't find that career route." to="/results" />;

  return (
    <div className="section career-page">
      <div className="container">
        <Link className="back-link" to="/results"><ArrowLeft size={16}/> Back to my map</Link>
        <div className="career-hero">
          <div>
            <div className="career-icon large">{career.icon}</div>
            <div className="eyebrow">Career route</div>
            <h1>{career.name}</h1>
            <p>{career.tagline}</p>
          </div>
          <div className="route-badge"><Target size={17}/> Worth exploring</div>
        </div>

        <div className="career-layout">
          <div>
            <CareerSection title="Why this route appeared for you" icon={<Sparkles/>}>
              <div className="personalized-box">
                {results ? <p>{career.personalized(results.scores)}</p> : <p>This route is included because its profile overlaps with your interests.</p>}
              </div>
            </CareerSection>
            <CareerSection title={`What is ${career.name}?`} icon={<Lightbulb/>}>
              <p>{career.description}</p>
            </CareerSection>
            <CareerSection title="What do people actually do?" icon={<Target/>}>
              <div className="bullet-grid">{career.responsibilities.map(x => <div key={x}><Check size={16}/>{x}</div>)}</div>
            </CareerSection>
            <CareerSection title="Skills you'll need" icon={<Brain/>}>
              <div className="skill-pills">{career.skills.map(x => <span key={x}>{x}</span>)}</div>
            </CareerSection>
          </div>
          <aside className="career-sidebar">
            <div className="side-card">
              <span className="label">WHERE CAN THIS PATH LEAD?</span>
              {career.paths.map(x => <div className="path-row" key={x}><span>{x}</span><ChevronRight size={16}/></div>)}
            </div>
            <div className="side-card challenge">
              <span className="label">THINGS TO CONSIDER</span>
              {career.challenges.map(x => <div className="challenge-row" key={x}><span>•</span>{x}</div>)}
            </div>
          </aside>
        </div>

        <div className="try-banner">
          <div><div className="eyebrow">Don't just read about it</div><h2>Try a small piece of the work.</h2><p>You've got about 10 minutes. See how the work actually feels.</p></div>
          <Link className="btn btn-primary" to={`/career/${career.id}/activity`}>Try This Career <ArrowRight size={18}/></Link>
        </div>
      </div>
    </div>
  );
}

function CareerSection({ title, icon, children }) {
  return <section className="career-section"><div className="section-title"><span>{icon}</span><h2>{title}</h2></div>{children}</section>;
}

function Activity() {
  const { careerId } = useParams();
  const navigate = useNavigate();
  const career = careers.find(c => c.id === careerId);
  const [done, setDone] = useState(false);

  if (!career) return <RedirectCard message="Career not found." to="/results" />;

  return (
    <div className="section activity-page">
      <div className="container activity-wrap">
        <Link className="back-link" to={`/career/${career.id}`}><ArrowLeft size={16}/> Back to route</Link>
        <div className="activity-header">
          <div className="eyebrow">Try before you choose</div>
          <h1>Try {career.name}</h1>
          <p>{career.activity.intro}</p>
        </div>
        <div className="activity-card">
          <div className="activity-number">01</div>
          <h2>{career.activity.title}</h2>
          <p>{career.activity.instructions}</p>
          <div className="activity-task">
            <span className="label">YOUR MINI CHALLENGE</span>
            <h3>{career.activity.challenge}</h3>
            <ul>{career.activity.steps.map(s => <li key={s}><Check size={16}/>{s}</li>)}</ul>
          </div>
          <button className="btn btn-primary activity-finish" onClick={() => { setDone(true); navigate(`/career/${career.id}/reflect`); }}>
            I Finished <Check size={18}/>
          </button>
        </div>
      </div>
    </div>
  );
}

function Reflection() {
  const { careerId } = useParams();
  const navigate = useNavigate();
  const { reflections, setReflections } = useNavitry();
  const career = careers.find(c => c.id === careerId);
  const [feeling, setFeeling] = useState(reflections[careerId]?.feeling || "");
  const [text, setText] = useState(reflections[careerId]?.text || "");

  if (!career) return <RedirectCard message="Career not found." to="/results" />;

  function submit() {
    setReflections(prev => ({...prev, [careerId]: { feeling, text }}));
    navigate("/compare");
  }

  return (
    <div className="section reflection-page">
      <div className="container reflection-wrap">
        <div className="eyebrow">You tried it.</div>
        <h1>How did that experience feel?</h1>
        <p className="large-copy">The point isn't whether you were good at it. It's whether you want to know what comes next.</p>
        <div className="reflection-card">
          <span className="label">{career.name.toUpperCase()}</span>
          <h2>Did you enjoy doing this?</h2>
          <div className="feeling-grid">
            {["Loved it","Enjoyed it","It was okay","Didn't enjoy it","Definitely not for me"].map(x => (
              <button key={x} className={feeling === x ? "feeling selected" : "feeling"} onClick={() => setFeeling(x)}>
                <span className="feeling-dot">{feeling === x && <Check size={13}/>}</span>{x}
              </button>
            ))}
          </div>
          <label>What did you like or dislike about the experience? <span>Optional</span></label>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Tell us what stood out..." rows="5"/>
          <label className="check-line"><input type="checkbox"/> I'd like to explore more activities like this.</label>
          <div className="form-actions">
            <button className="btn btn-secondary" onClick={() => navigate("/results")}>Skip</button>
            <button className="btn btn-primary" disabled={!feeling} onClick={submit}>Continue Exploring <ArrowRight size={17}/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Compare() {
  const navigate = useNavigate();
  const { results } = useNavitry();
  if (!results) return <RedirectCard message="Complete the assessment first." to="/assessment" />;

  const selected = results.matches;
  return (
    <div className="section compare-page">
      <div className="container">
        <Link className="back-link" to="/results"> <ArrowLeft size={16}/>Back to my map</Link>
        <div className="section-heading">
          <div><div className="eyebrow">See the routes side by side</div><h1>Compare your options</h1><p>Understanding your options is different from being told what to choose.</p></div>
        </div>
        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead><tr><th>What to consider</th>{selected.map(c => <th key={c.id}>{c.name}</th>)}</tr></thead>
            <tbody>
              <tr><td>What the work involves</td>{selected.map(c => <td key={c.id}>{c.description}</td>)}</tr>
              <tr><td>Core skills</td>{selected.map(c => <td key={c.id}>{c.skills.slice(0,4).join(" · ")}</td>)}</tr>
              <tr><td>Possible paths</td>{selected.map(c => <td key={c.id}>{c.paths.slice(0,3).join(" · ")}</td>)}</tr>
              <tr><td>Things to consider</td>{selected.map(c => <td key={c.id}>{c.challenges[0]}</td>)}</tr>
            </tbody>
          </table>
        </div>
        <div className="compare-cards">
          {selected.map(c => <div className="compare-card" key={c.id}><span className="career-icon">{c.icon}</span><h3>{c.name}</h3><Link className="card-link" to={`/career/${c.id}`}>Explore route <ArrowRight size={16}/></Link></div>)}
        </div>
      </div>
    </div>
  );
}

function Feedback() {
  const navigate = useNavigate();
  const { feedback, setFeedback } = useNavitry();
  const [rating, setRating] = useState(feedback?.rating || 0);
  const [text, setText] = useState(feedback?.text || "");

  function submit() {
    setFeedback({ rating, text });
    navigate("/complete");
  }

  return (
    <div className="section feedback-page">
      <div className="container feedback-wrap">
        <div className="eyebrow">One last thing</div>
        <h1>How accurate did your NaviTry results feel?</h1>
        <p>Your feedback helps us make the experience better.</p>
        <div className="feedback-card">
          <div className="stars">{[1,2,3,4,5].map(n => <button key={n} onClick={() => setRating(n)} className={rating >= n ? "star active" : "star"}><Star fill={rating >= n ? "currentColor" : "none"}/></button>)}</div>
          <div className="rating-labels"><span>Not accurate</span><span>Very accurate</span></div>
          <label>What did you think of your results? <span>Optional</span></label>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Anything you'd like us to know?" rows="5"/>
          <button className="btn btn-primary full" disabled={!rating} onClick={submit}>Submit Feedback <ArrowRight size={17}/></button>
        </div>
      </div>
    </div>
  );
}

function Complete() {
  const navigate = useNavigate();
  const { results } = useNavitry();
  return (
    <div className="section complete-page">
      <div className="container complete-card">
        <div className="complete-icon"><Compass size={34}/></div>
        <div className="eyebrow">Journey complete</div>
        <h1>You don't have to figure out your entire future today.</h1>
        <p>You just need to know what to explore next.</p>
        <div className="complete-actions">
          <button className="btn btn-primary" onClick={() => navigate("/results")}>View My Results <ArrowRight size={17}/></button>
          <button className="btn btn-secondary" onClick={() => navigate(results ? `/career/${results.matches[0].id}` : "/assessment")}>Explore Another Career <ArrowRight size={17}/></button>
        </div>
        <button className="share-btn" onClick={() => navigator.clipboard?.writeText(window.location.href)}><Share2 size={16}/> Share My Results</button>
        <button className="download-btn" onClick={() => window.print()}><Download size={16}/> Download My Future Map</button>
      </div>
    </div>
  );
}

function RedirectCard({ message, to }) {
  return <div className="section"><div className="container centered-card"><Compass size={32}/><h2>{message}</h2><Link className="btn btn-primary" to={to}>Continue <ArrowRight size={17}/></Link></div></div>;
}

function NotFound() { return <RedirectCard message="That route doesn't exist." to="/" />; }

function calculateScores(answers) {
  const raw = { analytical: 0, creative: 0, people: 0, handsOn: 0 };
  questions.forEach(q => {
    const response = answers[q.id];
    if (!response) return;
    const answer = q.options.find(o => o.id === response.option);
    if (answer) raw[answer.axis] += response.fast ? 1.25 : 1;
  });
  const maxPerAxis = 5 * 1.25;
  return Object.fromEntries(Object.entries(raw).map(([axis, value]) => [axis, Math.min(100,Math.max(0, Math.round((value / maxPerAxis) * 100)))]));
}

function getMatches(scores) {
  const user = [scores.analytical, scores.creative, scores.people, scores.handsOn];
  return [...careers].map(c => {
    const target = [c.scores.analytical, c.scores.creative, c.scores.people, c.scores.handsOn];
    const distance = Math.sqrt(target.reduce((sum, value, i) => sum + Math.pow(value - user[i], 2), 0));
    const fit = Math.max(0, Math.round(100 - (distance / 200) * 100));
    return {...c, fit};
  }).sort((a,b) => b.fit - a.fit).slice(0,3);
}

function profileSummary(s) {
  const strongest = Object.entries(s).sort((a,b) => b[1]-a[1]).slice(0,2).map(([k]) => k.replace("handsOn","hands-on"));
  return `You seem to lean toward ${strongest[0]} and ${strongest[1]} approaches. That can be a useful clue about the kinds of work environments and problems you may enjoy exploring.`;
}

function Footer() {
  return <footer><div className="container footer-inner"><div className="brand"><span className="brand-mark"><Compass size={18}/></span>NaviTry</div><span>Don't choose your future. Navigate it.</span></div></footer>;
}

export default App;
