import React, { useEffect } from 'react'
import Preloader from '../dumb/Preloader'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getLogs } from '../../actions/logActions'
import LogItem from './LogItem'

const Logs = ({ getLogs, logState: { logs, loading } }) => {

  useEffect(() => {

    getLogs();

    // eslint-disable-next-line
  },[])

  if(loading || !logs)
  {
    return <Preloader />
  }

  return (
    <div className='container center'>
      <h3>Logs</h3>
      <ul className="collection-item">
        { logs.map(log => (
          <LogItem log={log} key={log._id}/>
        )) }
      </ul>
    </div>
  )
}

Logs.propTypes = {
  getLogs: PropTypes.func.isRequired,
  logState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  logState: state.LogState
})

export default connect(mapStateToProps, { getLogs })(Logs);
