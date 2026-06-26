import React from 'react';

const timeline = [
    {
        date: 'May 22-28',
        title: 'A school world that had to remember',
        body: 'Underworld began as a school-world fork of AI Town with Umi, Alan, classrooms, UI panels, and the first emotional-residue loop. The early v0.1 question was modest: can yesterday matter tomorrow without turning memory into a transcript dump?'
    },
    {
        date: 'June 3-4',
        title: 'The gate era',
        body: 'The project accumulated runtime preflights, completion audits, afternoon gates, rolling-continuity checks, Alan-facing playtest artifacts, and repair thresholds. This made the system safer, but it also revealed a trap: measuring hygiene is not the same as making a world feel alive.'
    },
    {
        date: 'June 10-13',
        title: 'Memory became selective',
        body: 'Commitment recall, anti-confabulation, subjective memory, sleep notes, residue lenses, and soul-memory views moved the project from "remember more" to "remember selectively." Resetting the world was no longer acceptable as the normal answer because amnesia destroys the thing the project is trying to study.'
    },
    {
        date: 'June 16-18',
        title: 'Runtime reality hit back',
        body: 'Mobile playtesting, Convex state bloat, stale world clocks, retry storms, frontend flicker, compaction, local fallback routing, and watchdogs turned into real engineering work. A living world is not only prompts. It is state, load, recovery, and observability.'
    },
    {
        date: 'June 21',
        title: 'The word prison cracked',
        body: 'The project started to admit that hundreds of style rules and negative constraints were scar tissue. Free-speech experiments and character-grounded prompts worked better than piling on more bans. The phrase "word prison" became a diagnosis, not a joke.'
    },
    {
        date: 'June 23-24',
        title: 'From authored souls to cultivated souls',
        body: 'The north star changed. Characters should not only say their soul. They should want something, act, win or lose, and change. Thin soul seeds, daily substance, evolving self, pursuit stakes, qwen-max routing, a clean rebirth, and cultivation eval replaced the old dialogue-hygiene center of gravity.'
    },
    {
        date: 'June 25',
        title: 'Make the growth visible',
        body: 'The latest work added a Soul Arc and Cultivation Evidence Viewer, wired pursuit outcomes into emergent events, and introduced gated structured social events. The new product proof is a replayable chain: seed -> pursuit -> outcome -> world event -> self drift -> changed future behavior.'
    }
];

const pitfalls = [
    {
        title: 'More rules did not create more life',
        body: 'Many early fixes were defensive: ban this phrase, reject that shape, catch this leak, add another guard. They reduced bad output, but they did not create inner motion. The more the system depended on walls, the clearer it became that the source was empty.'
    },
    {
        title: 'Objects became symptoms',
        body: 'When characters lacked lived substance, the model grabbed cheap concrete props: curtains, coins, notebooks, food, chalk dust. Each fix moved the symptom somewhere else. The real issue was not the object. It was that the character had no active situation to bring into the room.'
    },
    {
        title: 'Resetting was too expensive',
        body: 'Fresh state helped debugging, but it also erased continuity. A project about long-term memory cannot make amnesia the normal maintenance path. That forced work on compaction, state retention, export-only archives, and safer recovery.'
    },
    {
        title: 'Dialogue quality was not the whole product',
        body: 'A beautiful line can still be fake if nothing caused it and nothing changes after it. Underworld had to move from "does the conversation sound right?" to "did this soul change because something happened?"'
    }
];

function UnderworldFindingsArticle() {
    return (
        <main className="case-study-page article-page underworld-article">
            <nav className="case-study-nav">
                <a href="/">Alan Hwader Chu</a>
                <div>
                    <a href="/case-studies/giis-underworld">Case Study</a>
                    <a href="/#projects">Projects</a>
                </div>
            </nav>

            <section className="case-study-hero article-hero underworld-article-hero">
                <span className="section__eyebrow">Findings Essay</span>
                <h1>From Word Prison to Free Souls</h1>
                <p>
                    A field report from building Underworld: how a school-world AI simulation moved from
                    authored personas and defensive prompt walls toward cultivated agents that want, act,
                    lose, remember, and change.
                </p>
                <div className="case-study-tags">
                    <span>Agent memory</span>
                    <span>Human-centered AI</span>
                    <span>Living-world demo</span>
                    <span>Continuity gates</span>
                    <span>Free souls</span>
                </div>
            </section>

            <section className="article-shell">
                <aside className="article-sidebar">
                    <span>Current Direction</span>
                    <strong>Product-demo first</strong>
                    <strong>4-6 deep souls</strong>
                    <strong>Replayable growth evidence</strong>
                    <p>
                        Current claim: long-running agent prototype with memory, continuity, and cultivation
                        evidence. Not proof of human-like inner life.
                    </p>
                </aside>

                <article className="article-body">
                    <p className="article-lede">
                        Underworld started with a romantic question and then became a very practical
                        engineering problem: what would it take for an AI character to feel like yesterday
                        actually changed them?
                    </p>

                    <p>
                        The first answer was obvious and wrong: write better character profiles, add more
                        memory, and make the dialogue more natural. That got the project moving, but it also
                        created the first trap. A character can say the right kind of line without becoming a
                        different person. A simulation can remember a transcript without understanding what
                        should matter.
                    </p>

                    <p>
                        So Underworld slowly changed from an AI Town fork with emotional flavor into a test
                        bed for human-centered agent continuity. The problem was no longer "can this agent
                        talk well?" It became: can a small soul carry forward the right residue, stay
                        distinct from the others, survive runtime instability, and grow through consequence
                        rather than through authorial force?
                    </p>

                    <div className="article-callout">
                        <strong>The pivot:</strong>
                        <span>
                            A soul cannot be jailed into existence with rules. It has to have something to
                            want, something to risk, and a world that can push back.
                        </span>
                    </div>

                    <h2>The Original Bet</h2>
                    <p>
                        The early v0.1 goal was emotional continuity: conversation -> emotional residue ->
                        memory continuity -> small behavioral consequence -> tomorrow feels different. That
                        was already more serious than a normal NPC demo. It required selective memory, not a
                        pile of context. It required Alan-facing playtest gates, not just automated evals. It
                        required saying no to easy claims.
                    </p>

                    <p>
                        In practice, the work quickly became physical. The world had to run. Convex state
                        had to stay healthy. The local backend had to survive T9 storage moves, compaction,
                        restart drift, stale clocks, mobile viewports, slow LLM calls, and a frontend that
                        could not blank out whenever the world was under load.
                    </p>

                    <h2>Timeline: How the System Changed</h2>
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

                    <h2>The Pits I Fell Into</h2>
                    <div className="article-finding-grid">
                        {pitfalls.map((pitfall) => (
                            <section key={pitfall.title}>
                                <h3>{pitfall.title}</h3>
                                <p>{pitfall.body}</p>
                            </section>
                        ))}
                    </div>

                    <h2>The Word Prison</h2>
                    <p>
                        At one point the system had so many constraints that the constraints themselves
                        became the architecture. Do not be too poetic. Do not over-explain. Do not mirror.
                        Do not use the same prop. Do not ask the same question. Do not turn every line into
                        therapy. Do not say the project name. Do not leak a marker. Do not use simplified
                        Chinese. Do not become generic.
                    </p>

                    <p>
                        Most of those rules came from real failures. They were not silly. But the stack of
                        bans also created a prison. It pushed the model toward cautious, flattened speech.
                        Worse, it hid the deeper problem: the characters were often not bringing a lived
                        situation into the conversation. They were performing personality under surveillance.
                    </p>

                    <p>
                        The better fix was to move the center of gravity from negative rules to positive
                        substance. Give each character a core tension. Give them a pursuit. Let them fail.
                        Let failure become a world event. Let that event change the self. Then make later
                        behavior show that change.
                    </p>

                    <h2>Free Souls: The New Loop</h2>
                    <p>
                        The current Underworld thesis is not that an LLM has a human soul. The honest
                        version is smaller and more useful: a frozen model can be wrapped in a world where a
                        self is represented as a traceable trajectory. The "brain" is not changing, but the
                        self-model, memories, pursuits, and future behavior can.
                    </p>

                    <div className="article-flow underworld-growth-flow" aria-label="Underworld cultivation loop">
                        <span>Thin seed</span>
                        <i />
                        <span>Pursuit</span>
                        <i />
                        <span>Win / loss</span>
                        <i />
                        <span>World event</span>
                        <i />
                        <span>Self drift</span>
                        <i />
                        <span>Changed behavior</span>
                    </div>

                    <p>
                        This is why the latest work focuses on cultivation evidence. A character begins with
                        a thin seed: a temperament, a core tension, and a starting stance. From that seed,
                        the system generates a small pursuit with stakes. The pursuit can succeed, fail, or
                        be abandoned. The outcome becomes a world event. The event creates drift in the
                        evolving self. The next pursuit or conversation should then be different because the
                        character has been changed by what happened.
                    </p>

                    <h2>What I Would Tell Another Builder</h2>
                    <p>
                        If you are building persistent agents, do not start by asking how to make the prompt
                        more expressive. Ask what the agent is allowed to carry forward, what it must forget,
                        what can be audited, and what would count as evidence that the agent changed.
                    </p>

                    <p>
                        Also, do not underestimate operations. A long-running agent world is not only an LLM
                        problem. It is a database growth problem, a local runtime problem, a UI resilience
                        problem, a provider fallback problem, a test-harness problem, and a claim-boundary
                        problem.
                    </p>

                    <h2>Where Underworld Is Now</h2>
                    <p>
                        The project is currently product-demo first. The near-term proof is not a research
                        paper, fine-tuning, 30 agents, or a large RPG system. It is a small visible demo
                        where four to six souls visibly grow through a chain an outside viewer can inspect:
                        seed -> pursuit -> outcome -> world event -> self drift -> changed future pursuit or
                        behavior.
                    </p>

                    <div className="article-boundary">
                        <strong>Claim boundary</strong>
                        <p>
                            Underworld is a long-running agent prototype with memory, continuity gates, and
                            visible cultivation evidence. It does not prove stable human-like inner life,
                            production-grade availability, or completed v0.1 product readiness.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default UnderworldFindingsArticle;
