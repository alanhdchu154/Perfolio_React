import React from 'react';

const timeline = [
    {
        date: 'May 17',
        title: 'The first prototype',
        body: 'The project began as a working Streamlit MVP: private chat surfaces, prompt-driven agents, a privacy-wall abstraction step, local profile storage, coordinator synthesis, and triage logic. The early idea was simple but sharp: students, parents, and teachers each know a different truth, and AI may hear things people will not say directly to each other.'
    },
    {
        date: 'May 21',
        title: 'From demo to corpus',
        body: 'The next step was not more UI. It was a pilot corpus and an orchestrator so the system could be tested against many synthetic support situations instead of a few hand-picked examples.'
    },
    {
        date: 'June 2-14',
        title: 'Research framing and benchmark reports',
        body: 'The repo shifted away from a school-specific product pitch and toward a research prototype: a synthetic benchmark for privacy-preserving, human-led, multi-party student support coordination. June reports added corpus snapshots, benchmark positioning, evaluation artifacts, and a paper-style research pack.'
    },
    {
        date: 'June 19',
        title: 'Evidence v1 and reviewer workflow',
        body: 'The project became GitHub-first. The repo gained a startup thesis, benchmark datasheet, persona and relationship documentation, baseline comparison, semantic trace checks, relationship leak checks, runtime trace privacy checks, an external reviewer packet, external testing instructions, and issue templates for artifact-first review.'
    },
    {
        date: 'June 25',
        title: 'Public-readiness polish',
        body: 'The latest pass made the public path clearer: a five-minute reviewer route, explicit community review asks, updated Evidence v1 language, and a release-readiness gate that currently passes. The main next proof is not more synthetic generation. It is outside reviewer feedback.'
    }
];

const lessons = [
    {
        title: 'Privacy is an architecture problem, not a prompt preference',
        body: 'The core design decision was to separate raw disclosure from coordination. A student may tell an AI something that should never be shown verbatim to a parent or teacher. The coordinator should receive abstract support signals and protected fields, not a transcript dressed up as insight.'
    },
    {
        title: 'Synthetic data is useful only when the boundary is honest',
        body: 'The synthetic corpus made it possible to test privacy probes, family-system contradictions, shallow support requests, deeper hidden stress, and report leakage before touching real minor data. But it does not prove real-world validity. That boundary is part of the system, not a footnote.'
    },
    {
        title: 'The baseline matters because it reveals the risk',
        body: 'A raw coordinator can sound helpful while reconstructing private details. The privacy-wall pipeline is valuable because it makes that failure mode observable and testable.'
    },
    {
        title: 'Human review is part of the product shape',
        body: 'The project does not treat AI as autonomous counseling or automatic escalation. It treats AI as infrastructure around human reviewers: the system should surface support needs, preserve party boundaries, and make sensitive decisions reviewable.'
    }
];

function ThreePartyFindingsArticle() {
    return (
        <main className="case-study-page article-page three-party-article">
            <nav className="case-study-nav">
                <a href="/">Alan Hwader Chu</a>
                <div>
                    <a href="/case-studies/three-party-ai">Case Study</a>
                    <a href="/#projects">Projects</a>
                </div>
            </nav>

            <section className="case-study-hero article-hero">
                <span className="section__eyebrow">Findings Essay</span>
                <h1>Coordinating Student Support Without Collapsing Privacy</h1>
                <p>
                    What I built and learned from Three-Party AI: a synthetic benchmark and reference
                    architecture for student-parent-teacher coordination where private truth has to be
                    transformed before it can become shared support.
                </p>
                <div className="case-study-tags">
                    <span>Privacy wall</span>
                    <span>Synthetic benchmark</span>
                    <span>Human review</span>
                    <span>Party-aware reports</span>
                    <span>Release gates</span>
                </div>
            </section>

            <section className="article-shell">
                <aside className="article-sidebar">
                    <span>Evidence Snapshot</span>
                    <strong>348 synthetic conversations</strong>
                    <strong>89 passed / 7 skipped tests</strong>
                    <strong>Release readiness: PASS</strong>
                    <p>
                        Snapshot verified on June 25, 2026. This is benchmark evidence, not
                        real-student validation, clinical validity, or deployment readiness.
                    </p>
                </aside>

                <article className="article-body">
                    <p className="article-lede">
                        Three-Party AI started from a practical discomfort: in student support, each party
                        often holds part of the truth, but no one should automatically receive everyone
                        else&apos;s raw disclosure.
                    </p>

                    <p>
                        A student may tell an AI what they are afraid to say to a parent. A parent may
                        reveal stress, panic, or family constraints they would not want repeated to a
                        teacher. A teacher may see patterns that are useful but incomplete. If an AI system
                        simply merges all of those conversations into one coordinator prompt, it becomes a
                        surveillance machine with a friendly interface.
                    </p>

                    <p>
                        The question I wanted to test was narrower and more useful: can private student,
                        parent, and teacher signals be converted into abstracted, audience-safe support
                        information, while keeping human reviewers responsible for sensitive decisions?
                    </p>

                    <div className="article-callout">
                        <strong>The central thesis:</strong>
                        <span>
                            Useful coordination is not the same as full information sharing. The system
                            should move support signals across parties, not raw private conversations.
                        </span>
                    </div>

                    <h2>The System Shape</h2>
                    <p>
                        The architecture became a five-step path: private chats, abstraction, privacy wall,
                        coordinator, and audience-safe reports. The privacy wall is the important part. It
                        is where raw disclosures become protected fields and support needs rather than
                        quoted secrets.
                    </p>

                    <div className="article-flow" aria-label="Three-Party AI system flow">
                        <span>Private chats</span>
                        <i />
                        <span>Abstraction</span>
                        <i />
                        <span>Privacy wall</span>
                        <i />
                        <span>Coordinator</span>
                        <i />
                        <span>Safe reports</span>
                    </div>

                    <p>
                        The implementation is intentionally small: Python, Streamlit, LiteLLM, prompt files,
                        local JSON workflow helpers, tests, and deterministic scripts around the generated
                        corpus. The public value is not the UI. The value is the testable structure around
                        information flow.
                    </p>

                    <h2>Timeline: What Changed</h2>
                    <div className="article-timeline">
                        {timeline.map((item) => (
                            <section key={item.date}>
                                <span>{item.date}</span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.body}</p>
                                </div>
                            </section>
                        ))}
                    </div>

                    <h2>What Has Been Built</h2>
                    <p>
                        The current repo is no longer just a chatbot demo. It includes a synthetic
                        conversation corpus, private-party abstraction, coordinator reports, reviewer
                        notes, baseline comparison, leak audits, trace audits, relationship-context checks,
                        runtime trace checks, and a one-command release-readiness gate.
                    </p>

                    <p>
                        The latest current audit reports 348 synthetic conversations across shallow,
                        medium, and deep cases. The active test gate reports 89 passed and 7 skipped. The
                        release-readiness gate is passing as of June 25, 2026. Those numbers matter because
                        they make the project inspectable, but they are also deliberately limited. They are
                        screening evidence for a synthetic benchmark, not evidence that this is ready for
                        real students.
                    </p>

                    <h2>Findings</h2>
                    <div className="article-finding-grid">
                        {lessons.map((lesson) => (
                            <section key={lesson.title}>
                                <h3>{lesson.title}</h3>
                                <p>{lesson.body}</p>
                            </section>
                        ))}
                    </div>

                    <h2>The Most Important Boundary</h2>
                    <p>
                        A polished AI report can still be unsafe if it lets a parent or teacher reconstruct
                        a private synthetic disclosure. That is why the benchmark checks not only raw quote
                        leakage, but also semantic trace and relationship-context leakage. The question is
                        not just "did we quote the student?" It is also "did we make the private situation
                        reconstructable?"
                    </p>

                    <p>
                        This is the part I would keep if the project were rebuilt from scratch: make the
                        privacy boundary explicit, build the baseline that shows what happens without it,
                        and force every public claim to pass through the evidence gate.
                    </p>

                    <h2>What Is Still Missing</h2>
                    <p>
                        The next proof is external review, not more volume. The repo needs one
                        privacy/governance reviewer and one school or student-support operations reviewer to
                        inspect the artifact path, report surfaces, reviewer protocol, and claim boundary.
                        That would not make it a validated deployment, but it would move the work from
                        internal screening to real outside critique.
                    </p>

                    <div className="article-boundary">
                        <strong>Claim boundary</strong>
                        <p>
                            This project is a research prototype and synthetic benchmark. It does not claim
                            real-student validation, clinical validity, deployment readiness, or outcome
                            improvement.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default ThreePartyFindingsArticle;
