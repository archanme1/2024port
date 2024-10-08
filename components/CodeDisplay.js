const CodeDisplay = () => {
  return (
    <section className="code-section">
      <pre>
        1&nbsp;&nbsp;const <b>Person</b> = () =&gt; &#123;
      </pre>
      <pre>
        2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [name, setName] =
        useState(&apos;&apos;);
      </pre>
      <pre>
        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [role, setRole] =
        useState(&apos;&apos;);
      </pre>
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [interests, setInterests] =
        useState(&apos;&apos;);
      </pre>
      <pre>
        5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [location, setLocation] =
        useState(&apos;&apos;);
      </pre>
      <pre>6</pre>
      <pre>7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; useEffect(() =&gt; &#123;</pre>
      <pre>
        8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setName(&quot;
        <b>Archan Bhatta</b>&quot;);
      </pre>
      <pre>
        9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setRole(&quot;
        <b>Full Stack Developer</b>&quot;);
      </pre>
      <pre>
        11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setLocation(&quot;
        <b>Ontario, Canada</b>&quot;);
      </pre>
      <pre>
        10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setInterests(&quot;
        <b>Web Dev, Mobile App Dev, DevOps, Sports</b>&quot;);
      </pre>
      <pre>12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#125;, []);</pre>
      <pre>13 &#125;</pre>
    </section>
  );
};

export default CodeDisplay;
